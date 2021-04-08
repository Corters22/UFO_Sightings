// from data.js
var tableData = data;

// adding data into table

// Use D3 to select the table
var table1 = d3.select("#ufo-table");
// Use D3 to select the table body
var tableBody = d3.select("tbody");

function addData (userObject) {
    userObject.forEach((report)=> {
        var newRow = tableBody.append('tr');
        newRow.append('td').text(report.datetime);
        var city = report['city'].toUpperCase();
        newRow.append('td').text(city);
        var state = report['state'].toUpperCase();
        newRow.append('td').text(state);
        var country = report['country'].toUpperCase();
        newRow.append('td').text(country);
        var shape = report['shape'].toUpperCase();
        newRow.append('td').text(shape);
        var duration = report['durationMinutes'].toUpperCase();
        newRow.append('td').text(duration);
        newRow.append('td').text(report.comments);
    })
};

addData(tableData);