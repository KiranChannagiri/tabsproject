let arrayofobj =[
    {
        legacy:"Explore Floyd Mayweather's extraordinary career, marked by an unmatched 50-0 record and unparalleled achievements in the boxing world. Delve into his iconic fights, titles, and the lasting impact he has left on the sport."
    },
    {
        technique:"Uncover the secrets behind Floyd's success. From his training regimen to tactical brilliance, discover the meticulous approach that defines Mayweather's unparalleled skill and dominance in the ring."
    },
    {
        influence:"Go beyond the gloves and learn about Floyd Mayweather's influence outside the ring. From business ventures to philanthropy, explore his diverse pursuits and the indelible mark he's made in the realms of entertainment, entrepreneurship, and giving back to the community."
    }
]
let legacy = document.querySelector(".legacy");
let technique = document.querySelector(".technique");
let influence = document.querySelector(".influence");
let content= document.querySelector(".content");
let lightwhte = document.querySelector(".lightwhte");
legacy.addEventListener("click",()=>
{
    content.innerHTML=arrayofobj[0].legacy;
    legacy.style.backgroundColor = "white";
    influence.style.backgroundColor = "#b9cdda";
    technique.style.backgroundColor = "#b9cdda";
});
technique.addEventListener("click",()=>
{
    content.innerHTML=arrayofobj[1].technique;
    legacy.style.backgroundColor = "#b9cdda";
    influence.style.backgroundColor = "#b9cdda";
    technique.style.backgroundColor = "white";
});
influence.addEventListener("click",()=>
{
    content.innerHTML=arrayofobj[2].influence;
    legacy.style.backgroundColor = "#b9cdda";
    influence.style.backgroundColor = "white";
    technique.style.backgroundColor = "#b9cdda";
});