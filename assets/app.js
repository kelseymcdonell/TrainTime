$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

 var config = {
    apiKey: "AIzaSyCaQj72RpzHKI_T8kSCb_f6PyftM4kS0d0",
    authDomain: "train-database-6f850.firebaseapp.com",
    databaseURL: "https://train-database-6f850.firebaseio.com",
    projectId: "train-database-6f850",
    storageBucket: "train-database-6f850.appspot.com",
    messagingSenderId: "609428934812"
  };
  firebase.initializeApp(config);

  var database= firebase.database();

var name = "";
var destination = "";
var time = "";
var frequency = "";

$("#addTrainBtn").on("click",function(){


    name = $("#nameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    time = $("#timeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();

    database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
    });


	});




