function calculate() {
    // Get the user's input from the form. Assume it is all valid.
    // Convert interest from a percentage to a decimal, and convert from
    // an annual rate to a monthly rate. Convert payment period in years
    // to the number of monthly payments.
	"use strict";
    var interest = document.loandata.interest.value / 100 / 12;
    var payments = document.loandata.years.value * 12;
	var amountBorrowed = document.loandata.principal.value - document.loandata.downPayment.value;

    // Now compute the monthly payment figure, using esoteric math.
	var pmt = (interest * amountBorrowed) / (1 - (Math.pow((1 + interest), (-payments))));
	

    // Check that the result is a finite number. If so, display the results.
function postPayment (monthlyPayment, totalPayment, totalInterest) {
		
	monthlyPayment = round(pmt);
	totalPayment = round(pmt * payments);
	totalInterest = round((pmt * payments) - amountBorrowed);
	
	var htmlEl1 = document.getElementById("payment");
	var htmlEl2 = document.getElementById("total");
	var htmlEl3 = document.getElementById("totalinterest");
    
	
	htmlEl1.innerText = "\t$" + monthlyPayment.toLocaleString('en');
	htmlEl2.innerText = "\t$" + totalPayment.toLocaleString('en');
	htmlEl3.innerText = "\t$" + totalInterest.toLocaleString('en');
}

    if (!isNaN(pmt) && 
        (pmt !== Number.POSITIVE_INFINITY) &&
        (pmt !== Number.NEGATIVE_INFINITY)) {


        document.getElementById("payment").value = postPayment(pmt);
        document.getElementById("total").value = postPayment(pmt * payments);
        document.getElementById("totalinterest").value = postPayment((pmt * payments) - amountBorrowed);
            
    }
    // Otherwise, the user's input was probably invalid, so don't
    // display anything.
    else {
        document.getElementById("payment").value = "";
        document.getElementById("total").value = "";
        document.getElementById("totalinterest").value = "";
    }
}

function round(pmt) {
"use strict";
  return Math.round(pmt*100)/100;
}
