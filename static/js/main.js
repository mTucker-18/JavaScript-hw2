function getData() {
  console.log('function calling');
  fetch("static/data/data.json")
    .then(response => response.json())
    .then(data => {
    // console.log("Got the data!");
    // console.log(data);

    populateGraph(data);
    // TODO: Call a function to do something with this data.
    });
}
getData();

function renderData(item) {
  // console.log('render function running');
  let chart = document.querySelector(".Graph-bars");
  // console.log('did this part even run?');
  let height = item['high'];
  let bar = document.createElement("div");
  // console.log('variables assigned');
  bar.classList.add("Bar");
  bar.textContent = "July" + item["year"];
  bar.style.height = height + "%";
  chart.appendChild(bar);
  console.log('new div made');
}

function populateGraph(data) {
  // console.log('pop graph function running');
  for (let item of data) {
    // console.log(item);
    renderData(item);
  }
  // document.getElementById("demo").innerHTML = x;

  // console.log('graph data populated?')
}
