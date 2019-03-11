var carArry = new Array();

var carImg = ['images/64gto.jpg', 'images/68shelby.jpg', 'images/69firebird.jpeg', 'images/69z28.jpg', 'images/70Chevelle.jpg', 'images/70plymoth.jpg'];

class carClass
{
    constructor (Price, Year, Make, Model)
        {
		    this.Price = Price;
		    this.Year = Year;
            this.Make = Make;
            this.Model = Model;
	    }

	toStringTitle(){
		return "Price:" + this.Price;
	}
	toStringDirector(){
		return "Year: " + this.Year;
	}
	toStringYear(){
		return "Make: " + this.Make;
	}
	toStringDescription(){
		return "Model: " + this.Model;
	}
}

function initializeArray() {
	var car0 = new carClass(" $58,700", "1964", "Pontiac", "GT0");
	var car1 = new carClass(" $125,000", "1968", "Shelby", "Mustang");
	var car2 = new carClass(" $40,000", "1969", "Pontiac", "Firebird");
	var car3 = new carClass(" $57,900", "1969", "Chevrolet", "Camaro Z28");
	var car4 = new carClass(" $73,000", "1970", "Chevrolet", "Chevelle ");
	var car5 = new carClass(" $32,200", "1970", "Plymoth", " Road Runner");

    carArry.push(car0,car1,car2,car3,car4,car5);
}

function accessInformation() {
	var x = Math.floor((Math.random() * 5) +1 );

    document.getElementById("Images").src= carImg[x];
    document.getElementById("Price").innerHTML = carArry[x].toStringTitle();
	document.getElementById("Year").innerHTML = carArry[x].toStringDirector();
	document.getElementById("Make").innerHTML = carArry[x].toStringYear();
	document.getElementById("Model").innerHTML = carArry[x].toStringDescription();

}