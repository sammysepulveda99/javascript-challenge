// from data.js
var tableData = data;

displayData(tableData);

function displayData(dataToDisplay) {
    //creating a reference to our table
    var tbody = d3.select("tbody");
    tbody.selectAll("tr").selectAll("td").remove();
    tbody.selectAll("tr").remove();
    dataToDisplay.forEach(item => {
        var new_row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            new_row.append("td").text(value);
        })
    });
}
//Making our filter button
var  button = d3.select("#filter-btn");
var form = d3.select("#reset-btn");


//Selecting our forms
var form = d3.select("form");
var dateinput = d3.select("#datetime");
var cityinput = d3.select("#city");
var stateinput = d3.select("#state");
var countryinput = d3.select("#country");
var shapeinput = d3.select("#shape");

//Making our filter button
var  button = d3.select("#filter-btn");

//Event handlers
datetimeInput.on("submit", runFilter);
cityInput.on("submit", runFilter);
stateInput.on("submit", runFilter);
countryInput.on("submit", runFilter);
shapeInput.on("submit", runFilter);
form.on("click", function(){
    var new_row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            new_row.append("td").text(value);
})
});


//Event handler to filter our data
function runEnter() {
    d3.event.preventDefault();
    var datetimeform = datetimeInput.property("value"); 
    var cityform = cityInput.property("value"); 
    var stateform = stateInput.property("value"); 
    var countryform = countryInput.property("value"); 
    var shapeform = shapeInput.property("value"); 

// Filtering date and other values 
    var filteredData = tableData.filter(date => 
        date.datetime === datetimeform || 
        (date.datetime === datetimeform &&
        date.city === cityform ||
        date.state === stateform ||
        date.country === countryform ||
        date.shape === shapeform) ||

// Filter with all values
        (date.datetime === datetimeInput || 
        date.city === cityInput ||
        date.state === countryInput ||
        date.country === inputCountry ||
        date.shape === shapeInput) 

        );

    //  Showin an empty table
    tbody.html("");


    filteredData.forEach(function(element) {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key,value]) => {
            row.append("td").text(value);
        })
    });
    //I give up :( 
    
  }