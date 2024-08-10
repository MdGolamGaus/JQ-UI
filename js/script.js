//JS Code first

//JQ

//Example-1 draggable
$(document).ready(function(){
    $( "#draggable1" ).draggable({containment: "#containment-wrapper", scroll: false});
});
// $( function() {
   
//    );

//Example-2
$(document).ready(function(){
    $( "#draggable, #draggable-nonvalid" ).draggable();
    $( "#droppable" ).droppable({
      accept: "#draggable",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
});
//Example-3
$(document).ready(function(){
  $("#resizable" ).resizable();
});
//Example-4
$(document).ready( function() {
  $( "#selectable" ).selectable();
} );
//Example-5
$( function() {
  $( "#sortable" ).sortable();
} );
//Example-6
$( function() {
  $( "#accordion" ).accordion();
} );
//Example-7
$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );
//Example-8
$( function() {
  $( "#menu" ).menu();
} );
//Example-9
$( function() {
  $( "#datepicker" ).datepicker();
} );
//Example-10
$( function() {
  $( "#dialog" ).dialog({
    autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
    $("#opener").on("click", function(){
      $( "#dialog" ).dialog( "open" );
  });
} );
//Example-11
$( function() {
  $( "#slider" ).slider();
} );
//Example-12
$( function() {
  $( "#tabs" ).tabs();
} );
//Example-13
$( function() {
  $( document ).tooltip();
} );