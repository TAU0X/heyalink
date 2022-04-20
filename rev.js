const reviews = [
    {
      id: 1,
      name: "Patrice Hélie",
      job: "Dessinateur béton armé",
      img:
        "image1.png",
      text:
        "'J'ai découvert ce nouveau réseau social professionnel dédié au BTP. Il me permet de faire grandir mon réseau et d'avoir accès à des missions pour développer mon business. Je recommande fortement cette plateforme !'"
    },
    {
      id: 2,
      name: "Vincent Cavuoto",
      job: "Dessinateur - Formations & outils DAO",
      img:
        "image2.png",
      text:
        "'Heyalink est un très bon réseau dédié au BTP qui permet d'obtenir de très bonnes informations pour notre métier'"
    },
    {
      id: 3,
      name: "Marion Bachelet",
      job: "Responsable de formation",
      img:
        "image3.jpg",
      text:
        "'Je suis inscrite sur HEYALINK depuis plus d’un an maintenant. A l’époque, je recherchais un réseau social avec uniquement des acteurs de la construction pour développer mes connaissances et mon activité, pouvoir lire des publications quotidiennes dont le contenu est approprié à un réseau social de professionnel ! Tout y est.'"
    },
    {
      id: 4,
      name: "Dany Mercier",
      job: "Gérant",
      img:
        "image4.jpg",
      text:
        "'Je trouve ce réseau très intéressant. Je peux y consulter des appels d'offres et également publier nos offres d'emploi'"
    },
    {
      id: 5,
      name: "Nathalie Soares",
      job: "Gérante",
      img:
        "image5.png",
      text:
        "'Je ne peux que recommander Heyalink pour la diversité et l'aspect très complet de ce que le site propose. Il est très plaisant d'avoir un réseau social dédié au monde du BTP qui a tendance à être éloigné du digital. A découvrir absolument !'"
    }
  ];
  const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
let timer;
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    });
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  };

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  timer = setInterval(function () {nextBtn.click()},5000);
  