// from data.js



function populateTable() {
    var tableData = data;
    var size = tableData.length;

    var x = tableData.map( data => data);
 
 
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

var sightings = populateTable();
 


var filterButton = d3.select("#filter-btn");


filterButton.on("click", function() {
    
     
    
    
    console.log(typeof date);
    // var date = d3.select("#datetime").node().value; 
    // console.log(date);
    
    
    // console.log(typeof tbody);
    // tbody.map(element => console.log(element));

    // var text =  document.getElementById("row0").innerText;
    // text = text.slice(0,9);
    // console.log(text.trim());
    // var length1 = text.length;
    // console.log("string length is " + length1);


    // var text2 = document.getElementById("row90").innerText;
    // text2 = text2.slice(0,9);
    // console.log(text2.trim());
    // var length2 = text2.length;
    // console.log("string length is " + length2); 
    
    //  console.log(typeof Date.parse(date));
    var a = 0;
    var datasize = data.length;
    var date = document.getElementById("datetime").value;

    date = Date.parse(date);

    var table = document.getElementById("ufo-table");
    var tbody = document.getElementById("ufo-tbody");
     
    var index, currentRow, currentDate, htmlRow;
    for (var i = 0; i<datasize; i++) {
        console.log("a = " + a);
        a++;
        
        index = "row" + i;
        currentRow = document.getElementById(index).innerText;
        currentDate = currentRow.slice(0,9);
        currentDate = currentDate.trim();
 
        currentDate = Date.parse(currentDate);

         
        console.log(date === currentDate);
        console.log("row#: " + i)
            if (date !== currentDate) {
                
                console.log("row to be removed is #" + index + " date is: " + currentDate);
                console.log(htmlRow);
                htmlRow = document.getElementById(index);
                htmlRow.remove();
            }  
        
            
}
     
  });


 
 

