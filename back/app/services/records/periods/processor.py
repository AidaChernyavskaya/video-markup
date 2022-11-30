import uuid
from datetime import datetime
from typing import List

from app import entries
import pandas
import math
import json
import shutil


class PeriodsProcessor:
    def process(self, csv_path: str) -> List[entries.Period]:
        df = pandas.read_csv(csv_path)
        df.columns = ["date", "time", "em1", "em2", "em3", "em4", "em5", "em6"]
        tmp = self.counting_datetime(df)
        result = self.merge_intervals(tmp)
        duration = tmp[-1].get('real_time') - tmp[0].get('real_time')
        paginated = self.do_pagintion(result, duration)

        periods = []
        for i in paginated:
            emotions = []
            for emotion in i.get('emotions'):
                emotions.append(entries.Emotion(
                    start=emotion.get('start'),
                    finish=emotion.get('finish'),
                    number=emotion.get('number'),
                    value=emotion.get('value')
                ))
            periods.append(entries.Period(
                start=i.get('start'),
                finish=i.get('finish'),
                emotions=emotions
            ))
        return periods

    def merge_intervals(self, data):
        result = []
        prev_key = self.get_key_by_row(data[0])
        prev_row = data[0]

        for row in data:
            key = self.get_key_by_row(row)
            if key == prev_key:
                continue
            else:
                result.append(self.calculate(prev_key, prev_row, row))

                prev_row = row
                prev_key = self.get_key_by_row(row)
        result.append(self.calculate(prev_key, prev_row, data[-1]))
        return result

    def counting_datetime(self, df):
        data = df.to_dict('records')

        start_time = self.row_to_datetime(data[0])
        prev_time = self.row_to_datetime(data[0])
        paused_time = 0
        for row in data:
            current = self.row_to_datetime(row)

            delta = (current - prev_time).total_seconds()

            if delta > 1:
                paused_time += delta

            prev_time = current
            row["real_time"] = (current - start_time).total_seconds() - paused_time

        return data

    def do_pagintion(self, data, duration):
        current = 0
        final = []
        while current < duration:
            final.append({
                "start": current,
                "finish": current + 300,
                "emotions": []
            })
            current += 300

        for i in data:
            emotions = self.get_emotions_by_intervals(i)
            for key, value in emotions.items():
                final[key]["emotions"].append(value)
        return final

    def row_to_datetime(self, row) -> datetime:
        return datetime.strptime(f"{row.get('date')} {row.get('time')}", "%d.%m.%Y %H.%M.%S:%f")

    def get_key_by_row(self, row):
        return tuple([row.get(f"em{i}") for i in range(1, 7)])

    def calculate(self, prev_key, prev_row, row):
        emotion_number, value = 0, 0
        for i in range(len(prev_key)):
            if prev_key[i] != 0:
                emotion_number = i + 1
                value = prev_key[i]
                break

        return {
            "start_time": prev_row.get('real_time'),
            "finish_time": row.get('real_time'),
            "duration": row.get('real_time') - prev_row.get('real_time'),
            "emotion_number": emotion_number,
            "value": value
        }

    def get_emotions_by_intervals(self, emotion):
        result = {}
        start = emotion.get("start_time")
        finish = emotion.get("finish_time")
        while start < finish:
            key = math.floor(start // 300)

            if (key + 1) * 300 <= finish:
                current_finish = (key + 1) * 300
            else:
                current_finish = finish

            result[key] = {
                "start": start,
                "finish": current_finish,
                "number": emotion.get("emotion_number"),
                "value": emotion.get("value")
            }
            start = current_finish

        return result
