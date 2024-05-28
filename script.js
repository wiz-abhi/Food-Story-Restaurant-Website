let varu=document.querySelector("div.outt");
let btn=document.querySelector("#btn");
let currMode="light";
let aa=document.querySelector("#intro");
btn.addEventListener("click", () => {

    if(currMode=="light")
    { 
    currMode="dark";
    varu.classList.remove("out");
    varu.classList.add("out2");
    }
else {
    currMode="light";
    varu.classList.remove("out2");
    varu.classList.add("out");
}

console.log(currMode);
})
// document.getElementById("#intro").style.color="green";