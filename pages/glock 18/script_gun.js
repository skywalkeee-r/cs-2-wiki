let url = "https://api.jsonbin.io/v3/b/6666b4c4acd3cb34a8555596";
let head = new Headers();
head.append("X-Master-Key", "$2a$10$Q1Q.55w3SQVvbr3Hg4WHU.SrRIvEGv30ay7EKjk56tntvHmoCwPyq");
head.append("X-Access-Key", "$2a$10$xTefXUMCMVP0APGOFU8d1uVK3z6/9HViMYPTRChT/p9n70Pd4cXIm");
let request_data = {
    headers: {
        "X-Master-Key": "$2a$10$Q1Q.55w3SQVvbr3Hg4WHU.SrRIvEGv30ay7EKjk56tntvHmoCwPyq",
        "X-Access-Key": "$2a$10$xTefXUMCMVP0APGOFU8d1uVK3z6/9HViMYPTRChT/p9n70Pd4cXIm"
    },
    headers: head
}
let displayed_name = null
let displayed_info = null
let not_displayed_name = null
let not_displayed_info = null
let button_edit = null
let button_end_edit = null
let displayed_ul_adv = null
let not_displayed_ul_adv = null
let displayed_ul_fla = null
let not_displayed_ul_fla = null
let section_glock = [];
let button_add_adv = null
let button_add_fla = null
let div_section_glock = document.querySelector(".glock");
function Extract_array(list) {
    let rezult = "";
    let li;
    for (let i = 0; i < list.length; i++) {
        li = "<li>" + list[i] + "</li>";
        rezult += li;
    }
    return rezult;
}
function Extract_input(list, div) {
    for (let i = 0; i < list.length; i++) {
        let inp = document.createElement("input");
        inp.value = list[i];
        div.append(inp);
    }
}
function Create_tegs() {
    let newelem = document.createElement("div");
    newelem.innerHTML =
        `<h1 id="h1" class="displayed">` + section_glock.name + `</h1>
        <input id="edit_name" type="text" class="notdisplayed">
        <img src="../../img/`+ section_glock.img + `" alt="">
        <h2 id="h2" class="displayed">`+ section_glock.info + `</h2>
        <input id="edit_info" type="text" class="notdisplayed">`
    div_section_glock.append(newelem);
}
function Create_other_tegs() {
    let newelem = document.createElement("div");
    newelem.innerHTML =
        `<div>
            <h3>Приемущества</h3>
            <ul class="displayed" id="ul_adv">`+ Extract_array(section_glock.advantages) + `</ul>
            <div class="advantages notdisplayed"></div>
            <button onclick="CreateTegForAdvantages()" class="notdisplayed" id="but_adv">+</button>
        </div>

        <div>
            <h3>Недостатки</h3>
            <ul class="displayed" id="ul_fla">`+ Extract_array(section_glock.flaws) + `</ul>
            <div class="flaws notdisplayed"></div>
            <button onclick="CreateTegForFlaws()" class="notdisplayed" id="but_fla">+</button>
        </div>`
    div_section_glock.append(newelem);
    let div_1 = document.querySelector(".advantages");
    let div_2 = document.querySelector(".flaws");
    Extract_input(section_glock.advantages, div_1);
    Extract_input(section_glock.flaws, div_2);
}
function CreateTegForAdvantages() {
    let newelem = document.createElement("input");
    let ul_advantages = document.querySelector(".advantages");
    ul_advantages.append(newelem);
}
function CreateTegForFlaws() {
    let newelem = document.createElement("input");
    let ul_flaws = document.querySelector(".flaws");
    ul_flaws.append(newelem);
}
function LoadTegs() {
    displayed_name = document.querySelector("#h1");
    displayed_info = document.querySelector("#h2");
    not_displayed_name = document.querySelector("#edit_name");
    not_displayed_info = document.querySelector("#edit_info");
    button_edit = document.querySelector("#edit");
    button_end_edit = document.querySelector("#end_edit");
    displayed_ul_adv = document.querySelector("#ul_adv");
    displayed_ul_fla = document.querySelector("#ul_fla");
    not_displayed_ul_adv = document.querySelector(".advantages");
    not_displayed_ul_fla = document.querySelector(".flaws");
    not_displayed_name.value = section_glock.name;
    not_displayed_info.value = section_glock.info;
    button_add_adv = document.querySelector("#but_adv");
    button_add_fla = document.querySelector("#but_fla");
}
function LoadContent(id) {
    let url = 'https://api.jsonbin.io/v3/b/' + id;
    fetch(url, request_data).then((e) => {
        return e.json();
    }).then((r) => {
        section_glock = r.record.gun_info;
        Create_tegs();
        Create_other_tegs();
        LoadTegs();
    });
}
let gunid = window.localStorage.getItem("gunid");
LoadContent(gunid);
function Edit() {
    displayed_name.classList.remove("displayed");
    displayed_info.classList.remove("displayed");
    not_displayed_name.classList.remove("notdisplayed");
    not_displayed_info.classList.remove("notdisplayed");
    displayed_name.classList.add("notdisplayed");
    displayed_info.classList.add("notdisplayed");
    not_displayed_name.classList.add("displayed");
    not_displayed_info.classList.add("displayed");
    displayed_ul_adv.classList.remove("displayed");
    displayed_ul_fla.classList.remove("displayed");
    not_displayed_ul_adv.classList.remove("notdisplayed");
    not_displayed_ul_fla.classList.remove("notdisplayed");
    displayed_ul_adv.classList.add("notdisplayed");
    displayed_ul_fla.classList.add("notdisplayed");
    not_displayed_ul_adv.classList.add("displayed");
    not_displayed_ul_fla.classList.add("displayed");
    button_add_adv.classList.remove("notdisplayed");
    button_add_fla.classList.remove("notdisplayed");
    button_add_adv.classList.add("displayed");
    button_add_fla.classList.add("displayed");
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
    displayed_ul_adv.classList.remove("notdisplayed");
    displayed_ul_fla.classList.remove("notdisplayed");
    not_displayed_ul_adv.classList.remove("displayed");
    not_displayed_ul_fla.classList.remove("displayed");
    displayed_ul_adv.classList.add("displayed");
    displayed_ul_fla.classList.add("displayed");
    not_displayed_ul_adv.classList.add("notdisplayed");
    not_displayed_ul_fla.classList.add("notdisplayed");
    button_add_adv.classList.remove("displayed");
    button_add_fla.classList.remove("displayed");
    button_add_adv.classList.add("notdisplayed");
    button_add_fla.classList.add("notdisplayed");
    button_edit.classList.remove("end_edit");
    button_end_edit.classList.remove("edit");
    button_edit.classList.add("edit");
    button_end_edit.classList.add("end_edit");
    section_glock.name = not_displayed_name.value;
    section_glock.info = not_displayed_info.value;
    displayed_name.innerHTML = not_displayed_name.value;
    displayed_info.innerHTML = not_displayed_info.value;
    let advantages_value = document.querySelectorAll(".advantages input");
    let flaws_value = document.querySelectorAll(".flaws input");
    let input_adv = [];
    let input_fla = [];
    for (let i = 0; i < advantages_value.length; i++) {
        if (advantages_value[i].value.length > 0) input_adv.push(advantages_value[i].value);
    }
    for (let i = 0; i < flaws_value.length; i++) {
        if (flaws_value[i].value.length > 0) input_fla.push(flaws_value[i].value);
    }
    section_glock.advantages = input_adv;
    section_glock.flaws = input_fla;
    displayed_ul_adv.innerHTML = Extract_array(input_adv);
    displayed_ul_fla.innerHTML = Extract_array(input_fla);
    SentDataJson();
}
function SentDataJson() {
    let request_data = {
        method: "PUT",
        headers: {
            "X-Master-Key": "$2a$10$Q1Q.55w3SQVvbr3Hg4WHU.SrRIvEGv30ay7EKjk56tntvHmoCwPyq",
            "X-Access-Key": "$2a$10$xTefXUMCMVP0APGOFU8d1uVK3z6/9HViMYPTRChT/p9n70Pd4cXIm",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "gun_info": section_glock })
    };
    fetch(url, request_data);
}