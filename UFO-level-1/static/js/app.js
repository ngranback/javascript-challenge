// from data.js
var tableData = data;

// YOUR CODE HERE!



// Select button/form
var button = d3.select("#filter-btn");
var form = d3.select("#my-form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);




function runEnter() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Get input value
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = data.filter(data => data.datetime === inputValue);
    console.log(filteredData)

    
      var tbody = d3.select("tbody");
      
      // clear the table of any previous results
      document.getElementById('ufo-table-body').innerHTML = "";
      console.log('cleared table??')
      // Insert new rows from filtered data
      filteredData.forEach(function(getthedata) {
        //console.log(getthedata);
        var row = tbody.append("tr");
        Object.entries(getthedata).forEach(function([key, value]) {
          //console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
        console.log('inserted rows')
      });

}

