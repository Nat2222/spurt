

// Thema
document.querySelector("#thema").addEventListener("click", function () {
    document.body.classList.toggle("donker");
});

// H1 veranderen
// const title = document.querySelector("h1");
// title.textContent = "Sportclub De Spurt";

// H2 klasse weghalen
// const klasse = document.querySelector(".card-body");
// klasse.classList.remove("card-body");

// H3 kaarten veranderen
// const kaart = document.querySelector(".card-body");
// kaart.style.backgroundColor = "#FF0000";

// Teller 1
let aantal = 0;

document.querySelector("#tel").addEventListener("click", function () {
    aantal = aantal + 1;

    document.querySelector("#stand").textContent =
        aantal + " keer geklikt";
});

// Teller 2 (uitgeschakeld)
// document.querySelector("#tel").addEventListener("click", function () {
//     let aantal = 0;
//     aantal = aantal + 1;
//     document.querySelector("#stand").textContent = aantal + " keer geklikt";
// });

// Begroeting
document.querySelector("#groet").addEventListener("click", function () {
    const naam = document.querySelector("#naam").value.trim();

    if (naam === "") {
        document.querySelector("#uitvoer").textContent = "Vul eerst je naam in.";
        return;
    }

    document.querySelector("#uitvoer").textContent = "Hallo " + naam + "!";
});

// Invoer verwerken
document.querySelector("#toevoegen").addEventListener("click", function() {
const naam = document.querySelector("#item-naam").value;
const item = document.createElement("li");
item.textContent = naam;
document.querySelector("#lijst").append(item);
});

// Invoer wissen
document.querySelector("#wissen").addEventListener("click", function() {
    document.querySelector("#lijst").replaceChildren();
});
