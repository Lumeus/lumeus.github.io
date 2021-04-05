function calculate() {
	
	var A = document.getElementById('A');
	var B = document.getElementById('B');
	var C = document.getElementById('C');

	var head = document.getElementById('head');
	var res

	if (! (A.value == '' || B.value == '' || C.value == '')) {
		if (A.value == 0) {
			X1 = -C.value/B.value;
			res = "<td colspan='2'>" + X1.toPrecision(9) + "</td>";
			if (isNaN(X1)) res = "<td colspan='2'>can't be calculate</td>";
		}
		else {
			var D = Math.pow(B.value, 2) - (4 * A.value * C.value);
			if (D >= 0) {
				var X1 = (-(B.value) + Math.sqrt(D))/(2 * A.value);
				var X2 = (-(B.value) - Math.sqrt(D))/(2 * A.value);
				if (isNaN(X1)) X1 = "can't be calculate";
				if (isNaN(X2)) X2 = "can't be calculate";
				res = "<td>" + X1.toPrecision(9) + "</td><td>" + X2.toPrecision(9) + "</td>";
			} else {
				res = "<td colspan='2'>discriminant less than zero</td>";
			}
			
    	}
		
		var tr = document.createElement('tr');

		tr.onclick = function() {
	        this.parentNode.removeChild(this);
		}

	    tr.classList.add("del")

		tr.innerHTML = "<td>" + A.value + 
					   "&bull;X&sup2;+" + B.value + 
					   "&bull;X+" + C.value + 
					   "=0</td>" + res;
		head.after(tr);
	}
}

function handleChange(event) {
    if (event.currentTarget.value < -99.99) event.currentTarget.value = -99.99;
    if (event.currentTarget.value > 99.99) event.currentTarget.value = 99.99;
    if (event.currentTarget.value[0] == '-'){
    	if (event.currentTarget.value.length > 6) event.currentTarget.value = event.currentTarget.value.slice(0, 6);
    } else{
    	if (event.currentTarget.value.length > 5) event.currentTarget.value = event.currentTarget.value.slice(0, 5);
	}
}

function click(event) {
    event.currentTarget.value = '';
}

function createListeners() {
	document.getElementById('A').addEventListener('input', handleChange);
	document.getElementById('B').addEventListener('input', handleChange);
	document.getElementById('C').addEventListener('input', handleChange);
	document.getElementById('A').addEventListener('click', click);
	document.getElementById('B').addEventListener('click', click);
	document.getElementById('C').addEventListener('click', click);
	document.getElementById('ok').addEventListener('click', calculate);
}

document.addEventListener('DOMContentLoaded', createListeners);
