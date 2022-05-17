const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
    "black",
    "yellow", 
    "green",
    "#c7bf67",
    "#a3a3a3",
    "#7b55cf",
    "#de4747",
    "#2963ab"
];

button.addEventListener("click", changeBackground);

function changeBackground() {

    const rastgeleSayi= Math.floor(Math.random() * colors.length);
    const secilenRenk = colors[rastgeleSayi];

    console.log(rastgeleSayi, secilenRenk);
     body.style.backgroundColor = secilenRenk;
}

