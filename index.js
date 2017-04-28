$(document).ready(function() {
// What hapeens on click of button
  $("button").click(function() {
// Total change calculation
    var total = $("#totalDollarAmount").val();
    var customerAmount = $("#customerAmount").val();
    var change = (customerAmount - total).toFixed(2);
// How many $'s, quarters, dimes etc.'
    var dollars = Math.floor(change).toFixed(0);
    var leftover = ((change - dollars) * 100).toFixed(0);
    var quarters = Math.floor(leftover / 25).toFixed(0);
    leftover %= 25;
    var dimes = Math.floor(leftover / 10).toFixed(0);
    leftover %= 10;
    var nickels = Math.floor(leftover / 5).toFixed(0);
    leftover %= 5
    var pennies = leftover;
// Return amounts to HTML
    $("#totalChangeDue").html("$" + change);
    $("#dollars").html(dollars);
    $("#quarters").html(quarters);
    $("#dimes").html(dimes);
    $("#nickels").html(nickels);
    $("#pennies").html(pennies);

  }) //end of click


  $(".nmt").each(function() {
  var nmtTable = $(this);
  var nmtHeadRow = nmtTable.find("thead tr");
  nmtTable.find("tbody tr").each(function () {
  var curRow = $(this);
  for (var i = 0; i < curRow.find("td").length; i++) {
  var rowSelector = "td:eq(" + i + ")";
  var headSelector = "th:eq(" + i + ")";
  curRow.find(rowSelector).attr('data-title', nmtHeadRow.find(headSelector).html());
  }
  });

  });



}); //main ready state
