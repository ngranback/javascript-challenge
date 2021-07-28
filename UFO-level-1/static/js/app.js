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

        // Get input values from each filter
    var inputDate = d3.select("#datetime").property("value");
          console.log(inputDate);
    var inputShape = d3.select("#shape").property("value");
          console.log(inputShape);
    var inputState = d3.select("#state").property("value");
          console.log(inputState);
    var inputCity = d3.select("#city").property("value");
          console.log(inputCity);
    var inputCountry = d3.select("#country").property("value");
          console.log(inputCountry);
    var filteredData = data;
    
    
    if (inputDate != "") { // only filter if a date is entered
      filteredData = filteredData.filter(data => data.datetime === inputDate);
    };
    if (inputState != "") { //only filter if a state is entered
      filteredData = filteredData.filter(data => data.state === inputState.toLowerCase());
    };
    if (inputCity != "") { //only filter if a city is entered
      filteredData = filteredData.filter(data => data.city === inputCity.toLowerCase());
    };
    if (inputShape != "Choose a shape...") { //only filter if a shape is chosen
      filteredData = filteredData.filter(data => data.shape === inputShape);
    };
    if (inputCountry != "Choose a country...") { //only filter if a country is chosen
      filteredData = filteredData.filter(data => data.country === inputCountry);
    };
    
      var tbody = d3.select("tbody");
      
      // clear the table of any previous results
      document.getElementById('ufo-table-body').innerHTML = "";
      // Insert new rows from filtered data
      filteredData.forEach(function(getthedata) {
        //console.log(getthedata);
        var row = tbody.append("tr");
        Object.entries(getthedata).forEach(function([key, value]) {
          //console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
        });
        console.log('inserted row')
      });

}

