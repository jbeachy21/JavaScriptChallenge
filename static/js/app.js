// from data.js
var tableData = data;


function populateTable() {
    var size = tableData.length;


console.log(tableData[0].datetime);
// YOUR CODE HERE!
var tbody = d3.select("tbody")
var thead = d3.select("thead");
var table = d3.select("#ufo-table");
table.attr("class", "table table-responsive table-hover table-striped");


for (var i = 0; i<size; i++) {
    var tr = tbody.append("tr");
    tr.attr("class", "text-center");
    tr.append("td").text(tableData[i].datetime);
    tr.append("td").text(tableData[i].city);
    tr.append("td").text(tableData[i].state);
    tr.append("td").text(tableData[i].country);
    tr.append("td").text(tableData[i].shape);
    tr.append("td").text(tableData[i].durationMinutes);  
    tr.append("td").text(tableData[i].comments);    
    }


}

populateTable();
