//header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky");
});

// card

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
//breakfast onclick button
// var cardIndex = 0;

function breakfast_img() {
  //   data1.forEach((element, i) => {
  //     //   $(".div-x").empty();
  //     card.innerHTML = "";
  //   });

  data2.forEach((element, i) => {
    const main2 = document.querySelector(".card-container ");

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
}
