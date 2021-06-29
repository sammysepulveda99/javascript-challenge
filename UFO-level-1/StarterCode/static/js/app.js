// from data.js
var tableData = data;

//creating a reference
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

//  this will create a button

button.on("click", runSelection);
form.on("submit", runSelection);

function runSelection() {
    d3.event.preventDefault();

    var inputValue = d3.select(".form-control").property("value");
    tableData.forEach(obj => console.log(obj.datetime));

    // this filter the input
    var filtedData = tableData.filter(obj => obj.datetime === inputValue);

    tbody.html("");

    filtedData.forEach(obj => {

        var row = tbody.append("tr");
        Object.entries(obj).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
