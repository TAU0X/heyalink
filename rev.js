const reviews = [
    {
      id: 1,
      name: "name1",
      job: "job1",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. similique consequatur!"
    },
    {
      id: 2,
      name: "name2",
      job: "job2",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. similique consequatur!"
    },
    {
      id: 3,
      name: "name3",
      job: "job3",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing. similique consequatur!"
    },
    {
      id: 4,
      name: "name4",
      job: "job4",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. similique consequatur!"
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
  