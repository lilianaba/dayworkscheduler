//addiding today's day in header
var dateTime = moment();
var container = $(".container");
// var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var store = window.localStorage;
// .setItem("agenda", JSON.stringify(table));

var time = $(".row time-block").children();
// console.log("time: "+time)

//save listener
$(".saveBtn").on("click", function () {
  var textValue = $(this).siblings(".description").val();

  var timeKey = $(this).parent().attr("id");

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

//from local storage
$("#h8 .description").val(localStorage.getItem("h8"));
$("#h9 .description").val(localStorage.getItem("h9"));
$("#h10 .description").val(localStorage.getItem("h10"));
$("#h11 .description").val(localStorage.getItem("h11"));
$("#h12 .description").val(localStorage.getItem("h12"));
$("#h13 .description").val(localStorage.getItem("h13"));
$("#h14 .description").val(localStorage.getItem("h14"));
$("#h15 .description").val(localStorage.getItem("h15"));
$("#h16 .description").val(localStorage.getItem("h16"));
$("#h17 .description").val(localStorage.getItem("h17"));

function coloring() {
  var currentTime = dateTime.hours();

  $(".time-block").each(function () {
    var time = parseInt($(this).attr("id").split("h")[1]);

    if (time < currentTime) {
      $(this).addClass("past");
    } else if (time === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
coloring();
//refresh time
setTimeout(function () {
  location = "";
}, 1000 * 60);
