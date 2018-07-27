function getData() {
  fetch("static/data/data.json")
    .then(response => response.json())
    .then(data => {
    populateGraph(data);
    });
}
getData();

function renderData(item) {
  let chart = document.querySelector(".Graph-bars");
  let height = item['avg'];
  let bar = document.createElement("div");
  bar.classList.add("Bar");
  bar.textContent = "July" + item["year"];
  bar.style.height = height + "%";
  chart.appendChild(bar);
}

function populateGraph(data) {
  for (let item of data) {
    renderData(item);
  }
}

function highTemp() {
  let elem = document.getElementsByClassName("Bar");
  elem[9].style.backgroundColor = "red";
  elem[9].style.color = "black";
  elem[9].style.height = "85%";
  elem[9].style.transition = "3s";
}

function lowTemp() {
  let elem = document.getElementsByClassName("Bar");
  elem[5].style.backgroundColor = "blue";
  elem[5].style.color = "black";
  elem[5].style.height = "53%";
  elem[5].style.transition = "3s";
}
