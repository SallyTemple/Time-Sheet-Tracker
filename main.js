 var config = {
   apiKey: "AIzaSyAjQO5BREeNEJF0CpYmNjh8Zexed-uAIgc",
   authDomain: "timesheettracker-966b5.firebaseapp.com",
   databaseURL: "https://timesheettracker-966b5.firebaseio.com",
   projectId: "timesheettracker-966b5",
   storageBucket: "timesheettracker-966b5.appspot.com",
   messagingSenderId: "442780605488"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

var name= "";
var date= "";
var role= "";
var rate= "";


// get info from form
$("#add-info").on("click", function (event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    name = $("#name").val().trim();
    date = $("#date").val().trim();
    role = $("#role").val().trim();
    rate = $("#rate").val().trim();

    database = usersRef.push({

        name : name,
        date : date,
        role : role,
        rate : rate

    })
 



});

