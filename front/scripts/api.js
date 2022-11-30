function loadData(){
    return [{"start": 0, "finish": 300, "emotions": [{"start": 0.0, "finish": 300, "number": 0, "value": 0}]}, {"start": 300, "finish": 600, "emotions": [{"start": 300, "finish": 600, "number": 0, "value": 0}]}, {"start": 600, "finish": 900, "emotions": [{"start": 600, "finish": 900, "number": 0, "value": 0}]}, {"start": 900, "finish": 1200, "emotions": [{"start": 900, "finish": 1200, "number": 0, "value": 0}]}, {"start": 1200, "finish": 1500, "emotions": [{"start": 1200, "finish": 1500, "number": 0, "value": 0}]}, {"start": 1500, "finish": 1800, "emotions": [{"start": 1500, "finish": 1800, "number": 0, "value": 0}]}, {"start": 1800, "finish": 2100, "emotions": [{"start": 1800, "finish": 2100, "number": 0, "value": 0}]}, {"start": 2100, "finish": 2400, "emotions": [{"start": 2100, "finish": 2400, "number": 0, "value": 0}]}, {"start": 2400, "finish": 2700, "emotions": [{"start": 2400, "finish": 2700, "number": 0, "value": 0}]}, {"start": 2700, "finish": 3000, "emotions": [{"start": 2700, "finish": 3000, "number": 0, "value": 0}]}, {"start": 3000, "finish": 3300, "emotions": [{"start": 3000, "finish": 3025.787424000009, "number": 0, "value": 0}, {"start": 3025.787424000009, "finish": 3086.400382000007, "number": 2, "value": 1}, {"start": 3086.400382000007, "finish": 3096.7531320000126, "number": 0, "value": 0}, {"start": 3096.7531320000126, "finish": 3098.8389050000114, "number": 3, "value": 1}, {"start": 3098.8389050000114, "finish": 3300, "number": 0, "value": 0}]}, {"start": 3300, "finish": 3600, "emotions": [{"start": 3300, "finish": 3600, "number": 0, "value": 0}]}, {"start": 3600, "finish": 3900, "emotions": [{"start": 3600, "finish": 3691.849957000013, "number": 0, "value": 0}, {"start": 3691.849957000013, "finish": 3730.1568000000116, "number": 1, "value": 1}, {"start": 3730.1568000000116, "finish": 3756.0537230000045, "number": 1, "value": 2}, {"start": 3756.0537230000045, "finish": 3803.8847830000013, "number": 0, "value": 0}, {"start": 3803.8847830000013, "finish": 3889.193523000009, "number": 4, "value": 1}, {"start": 3889.193523000009, "finish": 3900, "number": 4, "value": 2}]}, {"start": 3900, "finish": 4200, "emotions": [{"start": 3900, "finish": 3909.28669600001, "number": 4, "value": 2}, {"start": 3909.28669600001, "finish": 3928.523266000004, "number": 0, "value": 0}, {"start": 3928.523266000004, "finish": 3938.4630050000123, "number": 3, "value": 1}, {"start": 3938.4630050000123, "finish": 3949.8638590000046, "number": 3, "value": 2}, {"start": 3949.8638590000046, "finish": 3955.2460700000083, "number": 3, "value": 3}, {"start": 3955.2460700000083, "finish": 4029.212154000008, "number": 0, "value": 0}, {"start": 4029.212154000008, "finish": 4072.2245580000017, "number": 1, "value": 1}, {"start": 4072.2245580000017, "finish": 4082.1332690000127, "number": 1, "value": 4}, {"start": 4082.1332690000127, "finish": 4154.624860000011, "number": 0, "value": 0}, {"start": 4154.624860000011, "finish": 4200, "number": 2, "value": 1}]}, {"start": 4200, "finish": 4500, "emotions": [{"start": 4200, "finish": 4205.92813, "number": 2, "value": 1}, {"start": 4205.92813, "finish": 4236.311518000002, "number": 2, "value": 2}, {"start": 4236.311518000002, "finish": 4310.637317000001, "number": 0, "value": 0}, {"start": 4310.637317000001, "finish": 4325.310451000012, "number": 5, "value": 1}, {"start": 4325.310451000012, "finish": 4331.519097000011, "number": 5, "value": 2}, {"start": 4331.519097000011, "finish": 4422.806344000011, "number": 0, "value": 0}, {"start": 4422.806344000011, "finish": 4433.550840000011, "number": 6, "value": 1}, {"start": 4433.550840000011, "finish": 4450.342967000004, "number": 6, "value": 2}, {"start": 4450.342967000004, "finish": 4463.181150000004, "number": 6, "value": 3}, {"start": 4463.181150000004, "finish": 4500, "number": 0, "value": 0}]}, {"start": 4500, "finish": 4800, "emotions": [{"start": 4500, "finish": 4800, "number": 0, "value": 0}]}, {"start": 4800, "finish": 5100, "emotions": [{"start": 4800, "finish": 5100, "number": 0, "value": 0}]}, {"start": 5100, "finish": 5400, "emotions": [{"start": 5100, "finish": 5117.517813000013, "number": 0, "value": 0}]}]
}

function getRecordsData(callback){
    $.ajax({
        url: '/api/records/',
        method: 'GET',
        dataType: 'json',
        success: callback
    });
}

function getRecordById(id, callback){
    $.ajax({
        url: `/api/records/${id}/`,
        method: 'GET',
        dataType: 'json',
        success: callback
    });
}

function sendVideoPath(success_callback, error_callback){
    let video_file = document.getElementById('video-file');

    let form_data = new FormData();
    form_data.append('video', video_file.files[0]);

    $.ajax({
        url: '/api/upload/video/',
        method: 'POST',
        contentType: false,
        cache: false,
        processData: false,
        data: form_data,
        success: success_callback,
        error: error_callback
    });
}

function sendCSVPath(success_callback, error_callback){
    let video_file = document.getElementById('data-file');

    let form_data = new FormData();
    form_data.append('csv', video_file.files[0]);

    $.ajax({
        url: '/api/upload/csv/',
        method: 'POST',
        contentType: false,
        cache: false,
        processData: false,
        data: form_data,
        success: success_callback,
        error: error_callback
    });
}


function createRecord(callback, video_path, csv_path, title) {
    $.ajax({
        url: "/api/records/",
        method: 'POST',
        contentType: "application/json",
        data: JSON.stringify({
            video_path: video_path,
            csv_path: csv_path,
            title: title
        }),
        success: callback,
        error: alert("Ошибка в создании записи \nПроверьте правильность указанных файлов")

    });
}


function deleteRecord(callback, id){
    $.ajax({
        url: `/api/records/${id}/`,
        method: 'DELETE',
        dataType: 'json',
        success: callback
    });
}