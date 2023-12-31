//! Pour recuperer les element HTML via leurs id respectifs
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondesEl = document.getElementById("secondes");
const ampmEl = document.getElementById("ampm");

//! Pour recuperer les donnees de l'ordinateur
function updateclock(){
    let h= new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    //* Le ampmEl ne peut pas etre obtenu a partir de l'ordi, donc on va user la logique
    if (h > 12){
        // pour avoir l'equivalent... 13h => 1h
        h = h - 12;
        ampm = "PM";
    }
//! Gerer l'affichage de 0 ou non au niveau de l'heure
h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

    //! Pour remplacer le contenu des elements <strong></strong>, via l'attribut/propriete innerText... 
    hourEl.innerText = h;
    minutesEl.innerText = m ;
    secondesEl.innerText = s;
    ampm.innerText = ampm;
    setTimeout(()=>{
        updateclock()
    }, 1000)
}

updateclock();