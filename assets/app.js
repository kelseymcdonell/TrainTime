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
    time = $("#trainTimeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();

    database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
    });
    });
    
    database.ref().on("child_added", function(childSnapshot, prevChildKey){

        console.log(childSnapshot.val());
        
     var currentTime = moment();
		
		var firebaseName = childSnapshot.val().name;
		var firebaseDestination = childSnapshot.val().destination;
		var firebaseTime = childSnapshot.val().time;
        var firebaseFrequency = childSnapshot.val().frequency;
        
        var firstTimeConverted = moment(firebaseTime, "HH:mm").subtract(1, "years");
		
		var diffTime = currentTime.diff(moment(firstTimeConverted), "minutes");
      
        var timeRemainder = diffTime % firebaseFrequency ;
        
        var minutes = firebaseFrequency - timeRemainder;

		var nextTrainArrival = currentTime.add(minutes, "minutes"); 
		
	
    
        


        $("#trainTable > tbody").append("<tr><td>" 
        + firebaseName + "</td><td>"+ 
        firebaseDestination + "</td><td>" + 
        firebaseFrequency + " mins" + "</td><td>" + 
        moment(nextTrainArrival).format("hh:mm") + "</td><td>" + 
        minutes + "</td></tr>");

	});




