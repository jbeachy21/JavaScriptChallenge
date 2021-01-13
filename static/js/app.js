// from data.js
var tableData = data;


function populateTable() {
    var size = tableData.length;


 
 
    var tbody = d3.select("tbody");
    tbody.attr("id","ufo-tbody");
    var thead = d3.select("thead");
    var table = d3.select("#ufo-table");
    table.attr("class", "table table-responsive table-hover table-striped");


for (var i = 0; i<size; i++) {
    var tr = tbody.append("tr");
    tr.attr("class", "text-center");
    tr.attr("id", "row"+i);
    tr.append("td").text(tableData[i].datetime).attr("class","date");
    tr.append("td").text(tableData[i].city);
    tr.append("td").text(tableData[i].state);
    tr.append("td").text(tableData[i].country);
    tr.append("td").text(tableData[i].shape);
    tr.append("td").text(tableData[i].durationMinutes);  
    tr.append("td").text(tableData[i].comments);    
    }


}

populateTable();



var filterButton = d3.select("#filter-btn");


filterButton.on("click", function() {
    
     
     
    var date = document.getElementById("datetime").value;
    // var date = d3.select("#datetime").node().value; 
    // console.log(date);
    var rows = [{}];
    var table = document.getElementById("ufo-table");
    var tbody = document.getElementById("ufo-tbody");
    for (var i = 0, row; row = table.rows[i]; i++) {
        // console.log(row);
        for (var j = 0, col; col = row.cells[j]; j++) {
            // console.log(col.innerText);
            // catches the date and check if the date is the same as the input
            if (j % 7 === 0 && date !== col.innerText) {
                
                // console.log(document.getElementById("row"+i))
                d3.select(row).remove(row);
                // debugger;
            }
            
            
      
   }  
}
// console.log(rows);
// document.getElementById("ufo-tbody").remove();
// var tbody = document.createElement("tbody");
// document.appendChild(tbody);
// tbody.appendChild(rows);
     
  });


function test() {
    // var row1 = document.getElementById("row1");
    // var tbl = document.getElementById("table"); // Get the table
    // tbl.removeChild(document.getElementsByTagName("tbody")[0]);

    // document.getElementById("row1").remove(); 
    // console.log(row1);





    // document.getElementById("ufo-table").remove();
    // var tbody = document.getElementById("ufo-tbody");
    // console.log(table);
    // console.log(tbody);
    // var table = d3.select("#ufo-table").remove();
    // var table = d3.select("#ufo-table");
    // var tbody = d3.select("#ufo-tbody");
    // console.log(tbody.length);


  


}
 

