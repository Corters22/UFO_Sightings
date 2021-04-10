// from data.js
var tableData = data;

// Use D3 to select the table
var table1 = d3.select("#ufo-table");
// Use D3 to select the table body
var tableBody = d3.select("tbody");

// adding data into table

data.forEach((report) => {
    var row = tableBody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var button = d3.select("#filter-btn")
var form = d3.selectAll('form')

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // tableBody.remove()
    
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
  
    // Get the value property of the input element
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");
  
    console.log("date entered:", dateValue);
    console.log("city entered:", cityValue);
    console.log("state entered:", stateValue);
    console.log("country entered:", countryValue);
    console.log("shape entered:", shapeValue);

    filteredObject = {}

    if (dateValue === '') {
      return tableData;
    }
    else {
      filteredByDate = tableData.filter(report => report.datetime === dateValue);
    }

    if (cityValue === '') {
      return filteredByDate;
    }
    else {
      
    }
    
      
    // var filteredByDate = tableData.filter(report => report.datetime === dateValue);
    // var filteredByCity = filteredByDate.filter(report => report.city === cityValue);
    // var filteredByState = filteredByCity.filter(report => report.state === stateValue);
    // var filteredByCountry = filteredByState.filter(report => report.country === countryValue);
    // var filteredData = filteredByCountry.filter(report => report.shape === shapeValue);

    // console.log('filteredData:', filteredData);

    // tableBody.html('')

    // filteredData.forEach((report) => {
    //     var row = tableBody.append("tr");
    //     Object.entries(report).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
};


