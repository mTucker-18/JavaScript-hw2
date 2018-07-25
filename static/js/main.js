function getData() {
  console.log('function calling');
  fetch("static/data/data.json")
    .then(response => response.json())
    .then(data => {
    // console.log("Got the data!");
    // console.log(data);

    // TODO: Call a function to do something with this data.
    });
}
getData();

function renderData() {
  console.log('render function running');
  // let json = getData();
  // console.log('did this work?');
  // console.log(json);
  let chart = document.querySelector(".Graph-bars");
  console.log('did this part even run?');
  let height = 50;
  let bar = document.createElement("div");
  console.log('variables assigned');
  bar.classList.add("Bar");
  bar.textContent = "July 2018";
  bar.style.height = height + "%";
  chart.appendChild(bar);
  console.log('new div made')
}
renderData();

// function populateGraph() {
//   console.log('pop graph function running');
//   let jsonData = getData();
//   for (let year of jsonData) {
//     console.log(year);
//   }
//   console.log('graph data populated?')
// }
// populateGraph();
