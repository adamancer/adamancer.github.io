(function(da, $, undefined) {

  // Private properties
  var mainData = false;


  // Initializes the da object
  da.initialize = function() {
    console.log("Initializing da container");
    readJSON();
  }

  function readJSON() {
    $.ajax({
      dataType: "json",
      method: "GET",
      url: "data.json"
    }).then(function(data) { parseAndStoreJSON(data) },
            function() { console.log("Could not read data.js"); });
  }


  function parseAndStoreJSON(data) {
    mainData = JSON.parse(data);
    console.log(mainData);
  }


  da.searchData = function(term) {
    var results = [];
    for (var i = 0; i < mainData.length; i++) {
      var obj = mainData[i];
      if (obj['species'] == term) {
        results.push(obj);
      }
    }
    console.log(results);
    return results;
  }

}( window.da = window.da || {}, jQuery ));


$(document).ready(function() {
  da.initialize();
  da.searchData("cat");
});
