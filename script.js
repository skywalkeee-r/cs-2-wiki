let url = "https://api.jsonbin.io/v3/b/662a683dacd3cb34a83e19df ";
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
let sections = [];
let div_sections = document.querySelector(".sections");
function Create_tegs() {
    for (let i = 0; i < sections.length; i++) {
        let newelem = document.createElement("p");
        newelem.addEventListener("click", (a) => {
            window.localStorage.setItem("binid", sections[i][1]);
            let newwindow = window.open("D:/Сайт/Wiki/pages/pages.html");
        });
        newelem.innerText = sections[i][0];
        div_sections.append(newelem);
    }
}
fetch(url, request_data).then((e) => {
    return e.json();
}).then((r) => {
    console.log(r)
    sections = r.record.data.section;
    console.log(sections);
    Create_tegs();
});