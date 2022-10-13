//addiding today's day in header

// var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var store = window.localStorage
// .setItem("agenda", JSON.stringify(table));

// var rootSchedule  = document.getElementById("root");
var container = $('#root');

// var today = moment();
var now = (moment().format("HH:00"));

var time = $('<td>').addClass('col-1 py-2 px-lg-5 border bg-light justify-content-end').text(now);
var taskArea=$("<textarea>").addClass('col-9 py-2 px-lg-5 border bg-light justify-content-start');
var savebtn = $('<button>').addClass('fas fa-saven text-xl col-1 py-3 px-lg-5 border bg-light justify-content-center').text('');


function saveAgenda() {
    // Save related form data as an object
    var table ={
        time:time.value,
        taskArea:taskArea.value
    };
    store.setItem("agenda", JSON.stringify(table))
    // store;
}


// function saveAgenda() {
//     // Use JSON.parse() to convert text to JavaScript object
//     var savedAgenda = JSON.parse(localStorage.getItem("agenda"));
//     // Check if data is returned, if not exit out of the function
//     if (lastGrade !== null) {
//     document.getElementById("saved-name").innerHTML = savedAgenda.time;
//     document.getElementById("saved-grade").innerHTML = savedAgenda.taskArea;
    
//       return;
//     }
//   }
  

savebtn.bind("click", function (event) {
        event.preventDefault();
        saveAgenda();

        var savedAgenda = JSON.parse(localStorage.getItem("agenda"));
        time.innerHTML=savedAgenda.time;
        taskArea.innerHTML =  savedAgenda.taskArea
        console.log("item saved:" +time + taskArea)
        // displayAgenda();
    });


// start creating the table structure elements




function color(time) {
    return time.text === now.text
      ? "bg-red-300"
      : time.hour < now
      ? "bg-gray-300"
      : "bg-green-200";
  }

  


// var taskArea = $('<>textarea>').addClass('col-9 py-2 px-lg-5 border bg-light justify-content-start').val() ;


// var savebtn = $('<button>').addClass('fas fa-saven text-xl col-1 py-3 px-lg-5 border bg-light justify-content-center').text('');

// function time(){
//     time = moment(time).add(1, 'hours');
//     return time;
// }

// function save(){
//     savebtn.submit();
// }

var table = $('<tr>');

table.append(time);
table.append(taskArea);
table.append(savebtn);

container.append(table);

// Creating a row;
// var row = $('<tr>');

// // // var columns = document.createElement("h1");
// // var col1 = $('<td>').addClass('col-1 py-2 px-lg-5 border bg-light justify-content-end');
// // var col2 = $('<td>').addClass('col-9 py-2 px-lg-5 border bg-light justify-content-start');
// // var col3 = $('<td>').addClass('fas fa-saven text-xl col-1 py-3 px-lg-5 border bg-light justify-content-center');

// // // columns.textContent = "names";
// // col1.text('Time');
// // col2.text('Task');
// // col3.text('');
// // //FIX THE SAVE BUTTON!!!

// // row.append(col1,col2,col3);
// // console.log("this is a row : "+ row);
// // rootSchedule.append(col1,col2,col3);


// //Creating table based on qty hours requested
// var from = 9; 
// // var to = 17; 



// for (var i = 0  ; i < 8 ; i++){

//     // // var columns = document.createElement("h1");
//     // var col1 = $('<td>').addClass('col-1 py-2 px-lg-5 border bg-light justify-content-end');
//     // var col2 = $('<textarea>').addClass('col-9 py-2 px-lg-5 border bg-light justify-content-start');
    
//     // // var col2 = $('<td>').addClass('col-9 py-2 px-lg-5 border bg-light justify-content-start');
//     // var col3 = $('<button>').addClass('fas fa-saven col-span-2 h-16 bg-indigo-500 text-black font-bold hover:bg-indigo-400 transition duration-500 ease-in-out text-xl');
    
//     // field= $('textarea[name="task"]').val();

    
//     // var row = $('<tr>').append(col1,col2,col3);

//     // console.log ("creating table row: " + i +", hour: "+ from );

//     // col1.text(moment(from).format("HH:mm"));
//     // from = moment(from).add(1, 'hours');
//     // // from ++;
//     // col3.text('');
//     // rootSchedule.append(row);
    
// }


