// 1. Initialize Firebase
var config = {
   apiKey: "AIzaSyAN8dJT4NdMDHsHn6FalGNeq1i-AA5TpFE",
    authDomain: "trainscheduler-903a0.firebaseapp.com",
    databaseURL: "https://trainscheduler-903a0.firebaseio.com",
    projectId: "trainscheduler-903a0",
    storageBucket: "",
    messagingSenderId: "6511491472"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Create button for adding new train - then update the html + update the database
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var firstTrainTime = $("#first-train-time-input").val().trim();
  var trainFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    trainName: trainName,
    trainDestination: trainDestination,
    firstTrainTime: firstTrainTime,
    trainFrequency: trainFrequency,
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.trainName);
  console.log(newTrain.trainDestination);
  console.log(newTrain.firstTrainTime);
  console.log(newTrain.trainFrequency);

  // Alert
  alert("Choo Choo, Train successfully added!");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-time-input").val("");
  $("#frequency-input").val("");

  //Prevents moving to new page
	return false;
});

// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().trainName;
  var trainDestination = childSnapshot.val().trainDestination;
  var firstTrainTime = childSnapshot.val().firstTrainTime;
  var trainFrequency = childSnapshot.val().trainFrequency;

  // Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(firstTrainTime);
  console.log(trainFrequency);


  //Create variables for table above
    // First Train Time (pushed back 1 year to make sure it comes before current time)
    var firstTrainTimeConverted = moment(firstTrainTime, "hh:mm A").subtract(1, "years");
    // console.log(firstTrainTimeConverted);

    // Current Time
    var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTrainTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % trainFrequency;
    // console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = trainFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    var nextTrainFormatted = moment(nextTrain).format("hh:mm A");

//Append each input to Table
$("#schedule-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + 
  trainFrequency + "</td><td>" + nextTrainFormatted + "</td><td>" + tMinutesTillTrain + "</td><tr>");

});

  
  
