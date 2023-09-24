let cgpa = 0;
let sgpa = 100;
let fine = 50;
let inventory = ["stick"];
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const xpText=document.querySelector("xpText");
const healthText=document.querySelector("#healthText");
const goldText=document.querySelector("#goldText");
const yesno=document.querySelector("#yesno");
const monsterNameText=document.querySelector("button1monsterNameText");
const monstorHealthText=document.querySelector("#monstorHealthText");
button1.onclick = testyourgender;
button2.onclick = gay;
button3.onclick = lesbian;
function gay()
{
    text.innerText="gottiro vishya"
}
function lesbiat()
{
    text.innerText="gottiro vishya"
}

function win()
{
    button1.innerText = "completed"
    button2.innerText = "completed"
    button3.innerText = "completed"
    button1.onclick = playnow;
    button2.onclick = buygun;
    button3.onclick = exitgame;
}
function win()
{
    text.innerText="congratulations you are now gay"

}

function testyourgender() {
    button1.innerText = "check again"
    button2.innerText = "no need i'm gay"
    button3.innerText = "no need i'm lesbian"
    button1.onclick = win;
    button2.onclick = loose;
    button3.onclick = quit;
    text.innerText="you are now playing the game";
}

function loose(){
text.innerText="gottu bido"
}
function exitgame(){
    text.innerText="gottu bido"


}
