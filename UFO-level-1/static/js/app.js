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

        // Get input values
    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate);

    var inputShape = d3.select("#shape").property("value");
    console.log(inputShape);

    var inputState = d3.select("#state").property("value");
    console.log(inputState);

    var filteredData = data;
    
    
    if (inputDate != "") { // only filter if a date is entered
      filteredData = filteredData.filter(data => data.datetime === inputDate);
      console.log(filteredData)
    };
    if (inputShape != "Choose a shape...") { //only filter if a shape is chosen
      filteredData = filteredData.filter(data => data.shape === inputShape);
      console.log(filteredData)
    };
    if (inputState != "") { //only filter if a state is entered
      filteredData = filteredData.filter(data => data.state === inputState.toLowerCase());
      console.log(filteredData)
    };


    
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

