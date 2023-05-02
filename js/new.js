const locationPicker = () => {
  window.location.href = "order.html";
};

// input tag part
const inputTag = document.getElementById("search_input");
const closeImg = document.getElementById("close-img-id");
const lBtn = document.getElementById("loc-bt");

inputTag.addEventListener("keydown", (event) => {
  lBtn.style.backgroundColor = "#db1710";
  lBtn.style.border = "#db1710";
});
closeImg.addEventListener("click", (event) => {
  inputTag.value = "";
  lBtn.style.backgroundColor = "#502314";
  lBtn.style.border = "#502314";
});
//

// input tag part
//autocomplete place search api
