// Car constructor function

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};

// Our Car prototype method

Car.prototype.getDescription = function () {
return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

// Define our ElectricCar function as a subclass of Car giving our range as well

function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
};

// ElectricCar will inherit from our Car prototype

ElectricCar.prototype = Object.create(Car.prototype);

// Our ElectricCar prototype method will then override the Car prototype method returning our cars description and range in miles

ElectricCar.prototype.getDescription = function() {
    const carDescription = Car.prototype.getDescription.call(this);
    return `${carDescription}, Range: ${this.range} miles`;
};

// Now we create our instance using the Make: Tesla, Model: Model S, Year: 2019, and Range 300

const Tesla = new ElectricCar("Tesla", "Model S", 2019, 300);

// Finally we will console.log our getDescription method on our new instance Tesla

console.log(Tesla.getDescription());

// Giving us "Make: Tesla, Model: Model S, Year: 2019, Range: 300 miles" in our console.