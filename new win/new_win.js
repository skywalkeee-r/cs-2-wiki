let url = "https://api.jsonbin.io/v3/b/6696226eacd3cb34a866cb40";
let ul_advantages = document.getElementById("4");
let ul_flaws = document.getElementById("5");
let button = document.getElementById("button");
function CreateTegForAdvantages() {
    let newelem = document.createElement("li");
    newelem.innerHTML = '<input type="text">';
    ul_advantages.append(newelem);
}
function CreateTegForFlaws() {
    let newelem = document.createElement("li");
    newelem.innerHTML = '<input type="text">';
    ul_flaws.append(newelem);
}
function GetValue(ul) {
    let value_list = [];
    for (let i = 0; i < ul.children.length; i++) {
        value_list.push(ul.children[i].children[0].value);
    }
    console.log(value_list);
    return value_list;
}
function GetData() {
    let name = document.getElementById("1").value;
    let img = document.getElementById("2").value;
    let info = document.getElementById("3").value;
    let advantages = GetValue(ul_advantages);
    console.log(advantages);
    let flaws = GetValue(ul_flaws);
    let data = {gun_info: {name: name, img: img, info: info, advantages: advantages, flaws: flaws}};
    let jsondata = JSON.stringify(data);
    let request_data = {
        method: "PUT",
        headers: {
            "X-Master-Key": "$2a$10$Q1Q.55w3SQVvbr3Hg4WHU.SrRIvEGv30ay7EKjk56tntvHmoCwPyq",
            "X-Access-Key": "$2a$10$xTefXUMCMVP0APGOFU8d1uVK3z6/9HViMYPTRChT/p9n70Pd4cXIm",
            "Content-Type": "application/json",
        },
        body: jsondata
    };
    fetch(url, request_data).then((e) => {
        console.log(e);
    });
}