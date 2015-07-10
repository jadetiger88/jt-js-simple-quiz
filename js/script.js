function submitAnswers() {

	var total = 5;

	// Set the correct answer

	var answers = ["b", "a", "d", "b", "d"];
	var userAnswers = ["", "", "", "", ""];

	//Get user input
	var q1 = document.forms["quizForm"]["q1"].value; 
 	var q2 = document.forms["quizForm"]["q2"].value; 
 	var q3 = document.forms["quizForm"]["q3"].value; 
 	var q4 = document.forms["quizForm"]["q4"].value; 
 	var q5 = document.forms["quizForm"]["q5"].value; 

 	// Validate user input
    var missed = "";
    for (i=1; i<=total; i++) {
    	var q = "";
   		q = 'q' + i;
	 	if (eval(q) == null || eval(q) == "") {
	 		if (missed == "") {
	 			missed += i;
	 		} else {
	 			missed += (", " + i); 			
	 		}
	 	}
    }
 	if (missed != "") {
 		alert("You missed question(s) " + missed + ".");
 		return fales;
 	}

 	// Check the answer
    var correct = 0;
    for (i=1; i<=total; i++) {
    	var q = "";
   		q = 'q' + i;
	 	if (eval(q) == answers[i-1]) {
	 		correct++; 
	 	}
    }

    var results = document.getElementById('results');
    results.innerHTML= "<h3> You got " + correct + " out of " + total + " correct. </h3>"  
    return false;

    // alert("You got " + correct + " out of " + total + " correct.")

}