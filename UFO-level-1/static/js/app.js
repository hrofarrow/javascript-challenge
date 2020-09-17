// from data.js
var tableData = data;

// Reference the table body
var tbody = d3.select("tbody");

// console.log data from data.js
console.log(data);

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

// Break data into individual objects and add rows for every object
data.forEach(function (sitingReport) {
  console.log(sitingReport);
  var row = tbody.append("tr");

  // use object.entries to console.log each object value
  Object.entries(sitingReport).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to each row for each value
    var cell = row.append("td");
    // Update each cells text
    cell.text(value);
  });
});
