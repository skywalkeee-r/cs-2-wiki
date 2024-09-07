let displayed_name = document.querySelector("#h1");
let displayed_info = document.querySelector("#h2");
let not_displayed_name = document.querySelector("#edit_name");
let not_displayed_info = document.querySelector("#edit_info");
let button_edit = document.querySelector("#edit");
let button_end_edit = document.querySelector("#end_edit");
function Edit() {
    displayed_name.classList.remove("displayed");
    displayed_info.classList.remove("displayed");
    not_displayed_name.classList.remove("notdisplayed");
    not_displayed_info.classList.remove("notdisplayed");
    displayed_name.classList.add("notdisplayed");
    displayed_info.classList.add("notdisplayed");
    not_displayed_name.classList.add("displayed");
    not_displayed_info.classList.add("displayed");
    button_edit.classList.remove("edit");
    button_end_edit.classList.remove("end_edit");
    button_edit.classList.add("end_edit");
    button_end_edit.classList.add("edit");
}
function SaveEdit() {
    displayed_name.classList.remove("notdisplayed");
    displayed_info.classList.remove("notdisplayed");
    not_displayed_name.classList.remove("displayed");
    not_displayed_info.classList.remove("displayed");
    displayed_name.classList.add("displayed");
    displayed_info.classList.add("displayed");
    not_displayed_name.classList.add("notdisplayed");
    not_displayed_info.classList.add("notdisplayed");
    button_edit.classList.remove("end_edit");
    button_end_edit.classList.remove("edit");
    button_edit.classList.add("edit");
    button_end_edit.classList.add("end_edit");
}