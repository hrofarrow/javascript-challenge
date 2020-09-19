// from data.js
var tableData = data;

// console.log data from data.js
// console.log(data);

// Capitalize first letter of City
data.map((sitingReport) => {
  sitingReport["city"] =
    sitingReport["city"].charAt(0).toUpperCase() +
    sitingReport["city"].slice(1);
  return sitingReport;
});

// Capitalize STATE
data.map((sitingReport) => {
  sitingReport["state"] =
    sitingReport["state"].toUpperCase() + sitingReport["state"].slice(2);
  return sitingReport;
});

// Capitalize COUNTRY
data.map((sitingReport) => {
  sitingReport["country"] =
    sitingReport["country"].toUpperCase() + sitingReport["country"].slice(2);
  return sitingReport;
});
fillInTable(data);

function fillInTable(dataForTable) {
  d3.select("tbody").remove();
  var tbody = d3.select("#ufo-table").append("tbody");
  // Break data into individual objects and add rows for every object
  dataForTable.forEach(function updateTable(sitingReport) {
    var row = tbody.append("tr");

    // use object.entries to console.log each object value
    Object.entries(sitingReport).forEach(function ([key, value]) {
      // Append a cell to each row for each value
      var cell = row.append("td");
      // Update each cells text
      cell.text(value);
    });
  });
}

// Get rid of "#44" in text
// for (var i = 0; i < sitingReport; i++) {
//     var string = sitingReport[i];
//     if (string == "#44") {
// string.replace("#44", "")
//     }

/// Search through date/time list
// create variables to select input and button
var button = d3.select("#filter-btn").on("change", changeHandler);
var inputDate = d3.select("#datetime").on("change", changeHandler);

// filter table for specific date
function changeHandler() {
  //prevent page from refreshing
  d3.event.preventDefault();
  // print out values
  console.log(inputDate.property("value"));
  // console.log(value);
  //filter table view
  var filteredTable = tableData.filter(
    (sighting) => sighting.datetime === inputDate.property("value")
  );
  console.log(filteredTable);
  fillInTable(filteredTable);
}
