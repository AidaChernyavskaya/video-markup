let records = []


function html_ready(){
    records = getRecordsData();
    records.forEach(record => {
        drawRecordsData(record);
    })
    drawBtn("+ Добавить новую запись", "btnAdd",["btn", "btn__confirm"], ["row"]);

    init_events_handlers_main_page();
}

function getRecordsData(){
    return [{"name": "Пациент Иванов И.И.", "date": "16.10.2022", "videoFile": "video_16_10_22.mp4", "dataFile": "data16_10.csv"},
        {"name": "Пациент Roberts Mark", "date": "02.01.2022", "videoFile": "video_02_01_22.mp4", "dataFile": "data02_01.csv"}]
}

function drawRecordsData(record){
    let sectionList = document.getElementById('section-list');

    let row = document.createElement("div");
    row.classList.add('row');
    sectionList.appendChild(row);

    let nameColumn = document.createElement("div");
    nameColumn.classList.add("col-3-of-6");
    row.appendChild(nameColumn);
    let nameColumnText = document.createElement("p");
    nameColumnText.classList.add("text");
    nameColumnText.innerHTML = record.name;
    nameColumn.appendChild(nameColumnText);

    let dateColumn = document.createElement("div");
    dateColumn.classList.add("col-2-of-6");
    row.appendChild(dateColumn);
    let dateColumnText = document.createElement("p");
    dateColumnText.classList.add("text");
    dateColumnText.innerHTML = record.date;
    dateColumn.appendChild(dateColumnText);

    createListIcons(row);

}

function createListIcons(row){
    let actionColumn = document.createElement("div");
    actionColumn.classList.add("col-1-of-6");

    createIconImg("iconEdit", "../images/edit.png", "Edit icon", actionColumn);
    createIconImg("iconDelete", "../images/delete.png", "Delete icon", actionColumn);

    row.appendChild(actionColumn);
}

function createIconImg(id, src, alt, actionColumn){
    let iconList = document.createElement("div");
    iconList.classList.add("icon-list");
    iconList.id = id;

    let icon = document.createElement('img');
    icon.classList.add("icon-list__img");
    icon.src = src;
    icon.alt = alt;

    iconList.appendChild(icon);
    actionColumn.appendChild(iconList);
}

function drawBtn(text, id, classes, classList, btnForm){
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

    btnForm.appendChild(drawBtn("Сохранить изменения", "confirm", ["btn", "btn__confirm"], []));
    btnForm.appendChild(drawBtn("Отмена", "cancel", ["btn", "btn__cancel"], ["margin-left-26px"]));
    // btnForm.appendChild(document.getElementById("confirm"));
    // btnForm.appendChild(document.getElementById("cancel"));


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
}

document.addEventListener("DOMContentLoaded", html_ready);