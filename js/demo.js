//delete

const findChart = document.querySelector("#chart-container");
// const div = document.querySelector(".chart");

const chartClick = () => {
  alert("kk");
  const div = document.createElement("div");
  div.classList = "chart-container";

  const makeHtml = `
               `;
  div.innerHTML += makeHtml;
  findChart.appendChild(div);
  document.getElementById("chart-container").style.display = "block";
};
//delete
