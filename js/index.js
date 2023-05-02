
//header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky");
});
//header ends

// card for menu(first) starts
data1.forEach((element, i) => {
  const main = document.querySelector(".card-container ");

  const card = document.createElement("div");
  card.classList = "div-x col-lg-4  col-md-6 col-sm-12 mb-5 m-lg-0";

  const makeHtml = ` 

<div class='card'>
  <img  class= 'card-img-top' src= ${data1[i].image} alt="t-img">

<div class="card-body">

   <h3 class="card-title">${data1[i].title}</h3>
  <p class="card-text fw-bold " style="font-size: larger;">${data1[i].para}</p>

 </div>
</div>
`;

  card.innerHTML += makeHtml;
  main.appendChild(card);
});
// card for menu(first) ends

//(cards )on click button starts

const main2 = document.querySelector(".card-container ");
const btn1 = document.querySelector(".btn-class");
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
  window.location.href = "";
});
let c = 0;
btn1.addEventListener("click", function (e) {
  if ((e.target.id = "btn")) {
    c++;

    if (c === 1) {
      main2.innerHTML = "";
      btn1.style.backgroundColor = "#eb401eca";

      data2.forEach((element, i) => {
        const card2 = document.createElement("div");
        card2.classList = "div-x col-lg-4  col-md-6 col-sm-12 mb-5 m-lg-0";

        const makeHtml = ` 

<div class='card'>
  <img  class= 'card-img-top' src= ${data2[i].image} alt="t-img">

<div class="card-body">

   <h3 class="card-title">${data2[i].title}</h3>
  <p class="card-text fw-bold " style="font-size: larger;">${data2[i].para}</p>

 </div>
</div>
`;
        card2.innerHTML += makeHtml;

        main2.appendChild(card2);
      });
    } else if (c === 2) {
      //   window.history.back();
      window.location.href = "";

      c = 0;
    }
  }
});
//(cards )on click button ends
