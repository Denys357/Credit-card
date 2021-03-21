let btn = document.getElementById("btn");
let result = document.getElementById("information").innerText;
let show = document.getElementById("show");

btn.addEventListener("click", btnHandler);
show.addEventListener("click", showResult);



function btnHandler(event) {
event.preventDefault();
let information = {
	name: document.getElementById("firstName").value,
	surname: document.getElementById("lastName").value,
	year: 2030,
	all: function (){
		return (`${this.name} ${this.surname}`);
	},
	cvv: function (min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return (Math.floor(Math.random() * (max - min)) + min);
	},
	"card number": {
		"1-4": document.getElementById("first").value,
		"5-8": document.getElementById("second").value,
		"9-12": document.getElementById("third").value,
		"13-16": document.getElementById("fourth").value,
		full: function(){
			return (`${this["1-4"]} ${this["5-8"]} ${this["9-12"]} ${this["13-16"]}`);
		} 
	}
	}
	document.getElementById("information").innerText = 
	`Пользователь : ${information.all()}; 
	Номер карты : ${information["card number"].full()}; 
	Срок годности до ${information.year}; 
	CVV ${information.cvv(100, 999)}`  
}
	function showResult() {
		let accResult = document.getElementById("information");
		let accOpen = accResult.getAttribute("data-open");
		if (accOpen == "true" ){
			accResult.setAttribute("data-open", "false");
		}
		else {
			accResult.setAttribute("data-open", "true");
		}
	}





