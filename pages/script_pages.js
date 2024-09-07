let url = "https://api.jsonbin.io/v3/b/66826882e41b4d34e40b8113";
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
let section_pistols = [];
let div_section_pistols = document.querySelector(".pistols");
function Create_tegs() {
    for (let i = 0; i < section_pistols.length; i++) {
        let newelem = document.createElement("div");
        newelem.innerHTML =
            ` <div class="pistols">
                <div>
                    <img src="../img/`+ section_pistols[i].img + `" alt="">
                    <p>`+ section_pistols[i].name + `</p>
                </div>
            </div>`
        div_section_pistols.append(newelem);
        newelem.addEventListener("click", (e) => {
            window.localStorage.setItem("gunid", section_pistols[i]["id"]);
            let newwin = window.open("D:/Сайт/Wiki/pages/glock 18/gun.html");
        });
    }
}
function LoudContent(id) {
    url = 'https://api.jsonbin.io/v3/b/' + id;
    fetch(url, request_data).then((e) => {
        return e.json();
    }).then((r) => {
        console.log(r)
        section_pistols = r.record.section_pistols;
        console.log(section_pistols);
        Create_tegs();
    });
};
let binid = window.localStorage.getItem("binid");
console.log(binid);
LoudContent(binid);