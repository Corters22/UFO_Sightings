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
        var cities = report['city'].split(" ");
        var city1 = cities.map((city)=> {
            return city[0].toUpperCase() + city.substring(1);
            }).join(" ");
        newRow.append('td').text(city1);
        var state = report['state'].toUpperCase();
        newRow.append('td').text(state);
        var country = report['country'].toUpperCase();
        newRow.append('td').text(country);
        var shape = report['shape'];
        newRow.append('td').text(shape[0].toUpperCase() + shape.substring(1));
        newRow.append('td').text(report.durationMinutes);
        var comment = report['comments']
        newRow.append('td').html(comment).text();
    })
};

addData(tableData);