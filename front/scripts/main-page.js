let video_path = "";
let csv_path = "";
let videoLoaded = false;
let csvLoaded = false;

function html_ready(){
    getRecordsData(loaded_records_callback);
}

function loaded_records_callback(records){
    // records = getRecordsData();
    console.log(records);
    records.forEach(record => {
        drawRecordsData(record);
    });
    drawBtn("+ Добавить новую запись", "btnAdd",["btn", "btn__confirm"], ["row"]);

    init_events_handlers_main_page();
}

function drawRecordsData(record){
    let sectionList = document.getElementById('section-list');

    let row = document.createElement("div");
    row.classList.add('row');
    sectionList.appendChild(row);

    let nameColumn = document.createElement("div");
    nameColumn.classList.add("col-3-of-6");
    row.appendChild(nameColumn);
    let nameColumnText = document.createElement("a");
    nameColumnText.classList.add("text", "text__href");
    nameColumnText.href = `/records/${record.id}/`;
    nameColumnText.innerHTML = record.title;
    nameColumn.appendChild(nameColumnText);

    let dateColumn = document.createElement("div");
    dateColumn.classList.add("col-2-of-6");
    row.appendChild(dateColumn);
    let dateColumnText = document.createElement("p");
    dateColumnText.classList.add("text");
    let date = new Date(record.created_at);
    dateColumnText.innerHTML = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    dateColumn.appendChild(dateColumnText);

    createListIcons(row, record);

}

function createListIcons(row, record){
    let actionColumn = document.createElement("div");
    actionColumn.classList.add("col-1-of-6");

    // createIconImg("iconEdit", "../images/edit.png", "Edit icon", actionColumn);
    createIconImg(record, "../images/delete.png", "Delete icon", actionColumn);

    row.appendChild(actionColumn);
}

function createIconImg(record, src, alt, actionColumn){
    let iconList = document.createElement("div");
    iconList.classList.add("icon-list");
    iconList.onclick = () => {
        deleteRecord(reloadCallback, record.id)
    }

    let icon = document.createElement('img');
    icon.classList.add("icon-list__img");
    icon.src = src;
    icon.alt = alt;

    iconList.appendChild(icon);
    actionColumn.appendChild(iconList);
}

function drawBtn(text, id, classes, classList){
    let sectionList = document.getElementById('section-list');

    let row = document.createElement("div");
    classList.forEach(unit => row.classList.add(unit));
    sectionList.appendChild(row);

    let btn = document.createElement('a');
    classes.forEach(elem => btn.classList.add(elem));
    btn.href = "#!";
    btn.id = id;
    btn.innerHTML = text;
    row.appendChild(btn);

    return row;
}

function showFormSection(){
    document.getElementById('btnAdd').style.display = "none";
    drawFormSection();
}

function drawFormSection(){
    let sectionList = document.getElementById('section-list');

    let container = document.createElement("form");
    container.classList.add("row", "row__container");
    sectionList.appendChild(container);

    let group = document.createElement("div");
    group.classList.add("form__group", "margin-bottom-20px");
    container.appendChild(group);

    let textName = document.createElement("p");
    textName.classList.add("text", "text__form");
    textName.innerHTML = "Введите название записи";
    group.appendChild(textName);

    let nameArea = document.createElement("input");
    nameArea.type = "text";
    nameArea.classList.add("form__input", "text", "form__input_name");
    nameArea.id = "name";
    nameArea.placeholder = "Наименование";
    nameArea.setAttribute("required", "required");
    group.appendChild(nameArea);

    drawLoadFileBtn(["form__group", "margin-bottom-20px"], container, "Выберите файл видео", "video-file");
    drawLoadFileBtn(["form__group"], container, "Выберите файл c данными", "data-file");

    let btnForm = document.createElement("div");
    btnForm.classList.add("btn__form", "row");
    sectionList.appendChild(btnForm);

    let createdButton = drawBtn("Создать запись", "confirm", ["btn", "btn__confirm"], [])
    btnForm.appendChild(createdButton);
    let cancelButton = drawBtn("Отмена", "cancel", ["btn", "btn__cancel"], ["margin-left-26px"])
    btnForm.appendChild(cancelButton);
    // btnForm.appendChild(document.getElementById("confirm"));
    // btnForm.appendChild(document.getElementById("cancel"));

    createdButton.onclick = createNewRecord;
    $('.input-file input[type=file]').on('change', function(){
        console.log("dwdew")
        let file = this.files[0];
        $(this).closest('.input-file').find('.input-file__text').html(file.name);
    });

    cancelButton.onclick = reloadCallback;
}

function drawLoadFileBtn(classes, container, text, id){
    let group = document.createElement("div");
    classes.forEach(elem => group.classList.add(elem));
    container.appendChild(group);

    let textName = document.createElement("p");
    textName.classList.add("text", "text__form");
    textName.innerHTML = text;
    group.appendChild(textName);

    let label = document.createElement("label");
    label.classList.add("input-file");
    group.appendChild(label);

    let field = document.createElement("span");
    field.classList.add("input-file__text", "text");
    label.appendChild(field);

    let addFile = document.createElement("input");
    addFile.type = "file";
    addFile.classList.add("video-file");
    addFile.id = id;
    label.appendChild(addFile);

    let btn = document.createElement("span");
    btn.classList.add("input-file__btn");
    btn.innerHTML = "Выберите файл"

    label.appendChild(btn);

    if(id === 'video-file'){
        $(`#${id}`).on('change', function(){
            sendVideoPath(videoCallback, errorCallback);
        });
    } else {
        $(`#${id}`).on('change', function(){
            sendCSVPath(csvCallback, errorCallback);
        });
    }
}

function videoCallback(data) {
    video_path = data.path;
    videoLoaded = true;
    console.log(data)
}

function csvCallback(data) {
    csv_path = data.path;
    csvLoaded = true;
    console.log(data)
}

function errorCallback(data) {
    alert("Некоректный формат файла")
}

function createNewRecord(){
    if (!videoLoaded || !csvLoaded) {
        alert("Сначала загрузите файлы")
        return;
    }


    let title = document.getElementById('name').value;

    createRecord(reloadCallback, video_path, csv_path, title);
}

function reloadCallback(data) {
    location.reload();
}

document.addEventListener("DOMContentLoaded", html_ready);