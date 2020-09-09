function strToFloat(str) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)){
    	return parseFloat(value);
    } else {
    	return NaN;
    }
}

function step4(str) {
	console.log("step4");
	var i1 = str.indexOf('-');
	var i2 = str.indexOf('+');/*
	console.log("- at " + i1);
	console.log("+ at " + i2);*/
	while (i1 != -1 && i2 != -1) {
		console.log("- at " + i1);
		console.log("+ at " + i2);
		if (i1 < i2) {
			//-
			var end = str.indexOf('-', i1+1);
			if (end == -1 || end > i2) {
				end = i2;
			}
			if (end == -1) {
				end = str.length;
			}
			var temp = str.slice(0, i1) - str.slice(i1+1, end);
			temp += str.slice(end);
			str = temp;
			i1 = str.indexOf('-');
			i2 = str.indexOf('+');
		} else {
			//+
			var end = str.indexOf('+', i2+1);
			if (end == -1 || end > i1) {
				end = i1;
			}
			if (end == -1) {
				end = str.length;
			}
			var temp = parseFloat(str.slice(0, i2)) + parseFloat(str.slice(i2+1, end));
			temp += str.slice(end);
			str = temp;
			i1 = str.indexOf('-');
			i2 = str.indexOf('+');
		}
		console.log('on 4 "' + str + '"');
	}
	while (i1 != -1) {
		console.log("- at " + i1);
		//console.log("+ at " + i2);
		//-
		var end = str.indexOf('-', i1+1);
		if (end == -1) {
			end = str.length;
		}
		var temp = str.slice(0, i1) - str.slice(i1+1, end);
		console.log('temp on 4 "' + temp + '"');
		temp += str.slice(end);
		str = String(temp);
		i1 = str.indexOf('-');
		console.log('on 4 "' + str + '"');
	}
	while (i2 != -1) {
		//console.log("- at " + i1);
		console.log("+ at " + i2);
		//+
		var end = str.indexOf('+', i2+1);
		if (end == -1) {
			end = str.length;
		}
		var temp = parseFloat(str.slice(0, i2)) + parseFloat(str.slice(i2+1, end));
		temp += str.slice(end);
		str = String(temp);
		i2 = str.indexOf('+');
		console.log('on 4 "' + str + '"');
	}
	console.log('from 4 "' + str + '"');
	return str;
}

function step3(str) {
	console.log("step3");
	var i1 = str.indexOf('/');
	var i2 = str.indexOf('*');
	console.log("/ at " + i1);
	console.log("* at " + i2);
	while (i1 != -1 && i2 != -1) {
		if (i1 < i2) {
			///
			var ind = str.indexOf('-');
			if (ind != -1 && ind < i1) {
				var temp = str.indexOf('-', ind+1);
				while (temp != -1 && temp < i1) {
					ind = temp;
					temp = str.indexOf('-', ind+1);
				}
				temp = str.indexOf('+', ind);
				while (temp != -1 && temp < i1) {
					ind = temp;
					temp = str.indexOf('+', ind+1);
				}
			} else {
				ind = str.indexOf('+');
				if (ind != -1 && ind < i1) {
					var temp = str.indexOf('+', ind+1);
					while (temp != -1 && temp < i1) {
						ind = temp;
						temp = str.indexOf('+', ind+1);
					}	
				} else {
					ind = -1;
				}
			}
			var t1 = str.indexOf('/', i1+1);
			var t2 = str.indexOf('*', i1+1);
			var t3 = str.indexOf('+', i1+1);
			var t4 = str.indexOf('-', i1+1);
			var end = i1;
			var l = str.length;
			for (; end < l; end++) {
				if (end == t1) break;
				if (end == t2) break;
				if (end == t3) break;
				if (end == t4) break;
			}
			var temp = str.slice(0, ind+1);
			temp += str.slice(ind+1, i1) / str.slice(i1+1, end);
			temp += str.slice(end);
			str = temp;
			i1 = str.indexOf('/')
			i2 = str.indexOf('*')
		} else {
			//*
			var ind = str.indexOf('-');
			if (ind != -1 && ind < i2) {
				var temp = str.indexOf('-', ind+1);
				while (temp != -1 && temp < i2) {
					ind = temp;
					temp = str.indexOf('-', ind+1);
				}
				temp = str.indexOf('+', ind);
				while (temp != -1 && temp < i2) {
					ind = temp;
					temp = str.indexOf('+', ind+1);
				}
			} else {
				ind = str.indexOf('+');
				if (ind != -1 && ind < i2) {
					var temp = str.indexOf('+', ind+1);
					while (temp != -1 && temp < i2) {
						ind = temp;
						temp = str.indexOf('+', ind+1);
					}	
				} else {
					ind = -1;
				}
			}
			var t1 = str.indexOf('/', i2+1);
			var t2 = str.indexOf('*', i2+1);
			var t3 = str.indexOf('+', i2+1);
			var t4 = str.indexOf('-', i2+1);
			var end = i2;
			var l = str.length;
			for (; end < l; end++) {
				if (end == t1) break;
				if (end == t2) break;
				if (end == t3) break;
				if (end == t4) break;
			}
			var temp = str.slice(0, ind+1);
			temp += str.slice(ind+1, i2) * str.slice(i2+1, end);
			temp += str.slice(end);
			str = temp;
			i1 = str.indexOf('/')
			i2 = str.indexOf('*')
		}
	}
	while (i1 != -1) {
		///
		var ind = str.indexOf('-');
		if (ind != -1 && ind < i1) {
			var temp = str.indexOf('-', ind+1);
			while (temp != -1 && temp < i1) {
				ind = temp;
				temp = str.indexOf('-', ind+1);
			}
			temp = str.indexOf('+', ind);
			while (temp != -1 && temp < i1) {
				ind = temp;
				temp = str.indexOf('+', ind+1);
			}
		} else {
			ind = str.indexOf('+');
			if (ind != -1 && ind < i1) {
				var temp = str.indexOf('+', ind+1);
				while (temp != -1 && temp < i1) {
					ind = temp;
					temp = str.indexOf('+', ind+1);
				}	
			} else {
				ind = -1;
			}
		}
		var t1 = str.indexOf('/', i1+1);
		var t2 = str.indexOf('*', i1+1);
		var t3 = str.indexOf('+', i1+1);
		var t4 = str.indexOf('-', i1+1);
		var end = i1;
		var l = str.length;
		for (;end < l ;end++) {
			if (end == t1) break;
			if (end == t2) break;
			if (end == t3) break;
			if (end == t4) break;
		}
		var temp = str.slice(0, ind+1);
		temp += str.slice(ind+1, i1) / str.slice(i1+1, end);
		temp += str.slice(end);
		str = temp;
		i1 = str.indexOf('/')
	}
	while (i2 != -1) {
		//*
		var ind = str.indexOf('-');
		if (ind != -1 && ind < i2) {
			var temp = str.indexOf('-', ind+1);
			while (temp != -1 && temp < i2) {
				ind = temp;
				temp = str.indexOf('-', ind+1);
			}
			temp = str.indexOf('+', ind);
			while (temp != -1 && temp < i2) {
				ind = temp;
				temp = str.indexOf('+', ind+1);
			}
		} else {
			ind = str.indexOf('+');
			if (ind != -1 && ind < i2) {
				var temp = str.indexOf('+', ind+1);
				while (temp != -1 && temp < i2) {
					ind = temp;
					temp = str.indexOf('+', ind+1);
				}	
			} else {
				ind = -1;
			}
		}
		var t1 = str.indexOf('/', i2+1);
		var t2 = str.indexOf('*', i2+1);
		var t3 = str.indexOf('+', i2+1);
		var t4 = str.indexOf('-', i2+1);
		var end = i2;
		var l = str.length;
		for (;end < l ;end++) {
			if (end == t1) break;
			if (end == t2) break;
			if (end == t3) break;
			if (end == t4) break;
		}
		var temp = str.slice(0, ind+1);
		temp += str.slice(ind+1, i2) * str.slice(i2+1, end);
		temp += str.slice(end);
		str = temp;
		i2 = str.indexOf('*', i2+1)
	}
	console.log('from 3 "' + str + '"');
	return step4(str);
}

function step2(str){
	console.log("step2");
	var ind = str.indexOf('\u221a');
	console.log("\u221a at " + ind);
	while (ind != -1){
		var i1 = str.indexOf('/', ind+1);
		var i2 = str.indexOf('*', ind+1);
		var i3 = str.indexOf('+', ind+1);
		var i4 = str.indexOf('-', ind+1);
		var end = ind;
		var l = str.length;
		for (;end < l ;end++) {
			if (end == i1) break;
			if (end == i2) break;
			if (end == i3) break;
			if (end == i4) break;
		}
		var temp = str.slice(0, ind);
		temp += Math.sqrt(str.slice(ind+1, end));
		temp += str.slice(end);
		str = temp;
		ind = str.indexOf('\u221a');
	}
	console.log('from 2 "' + str + '"');
	return step3(str);
}

function step1(str) {
	console.log("step1");
	var ind = str.indexOf('(');
	while (ind != -1) {
		var ic = str.indexOf(')', ind+1);
		var io = str.indexOf('(', ind+1);
		while (io != -1 && io < ic) {
			ic = str.indexOf(')', ic+1);
			io = str.indexOf('(', io+1);
		}
		var temp = str.slice(0, ind);
		temp += step1(str.slice(ind+1, ic));
		temp += str.slice(ic+1);
		str = temp;
		ind = str.indexOf('(');
	}
	console.log('from 1 "' + str + '"');
	return step2(str);
}

function btnDown(event) {
	//document.write("down");
	event.currentTarget.classList.add('down');
}

function btnUp(event) {
	//document.write("up");
	event.currentTarget.classList.remove('down');
	var s1 = document.getElementById("s1");
	var text = event.currentTarget.innerHTML;
	if (text == "C") {
		s1.innerHTML = '';
		event.currentTarget.innerHTML = "=";
	} else if (text == "del") {
		s1.innerHTML = s1.innerHTML.substr(0, s1.innerHTML.length - 1);
	} else if (text == '=') {
		var s2 = document.getElementById("s2");
		s2.innerHTML = step1(s1.innerHTML);
		event.currentTarget.innerHTML = "C";
	} else {
		s1.innerHTML += text;
	}
}

function createListeners() {
	//document.write("listener");
	arr = document.getElementsByClassName("btn");
	for (var i=0; i<20; i++) {
		arr[i].addEventListener('mousedown', btnDown);
		arr[i].addEventListener('mouseup', btnUp);
	}
}

document.addEventListener('DOMContentLoaded', createListeners);