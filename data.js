(function(da, $, undefined) {
  // Debug variable. Set to false for production.
  var debug = false;

  // Private properties. These can't be accessed outside this container.
  var $active = null;


  // Initializes the ae object
  da.initialize = function() {
    alert("hello world");
  }

}( window.da = window.da || {}, jQuery ));


$(document).ready(function() {
  da.initialize();
});
