class Car {
  constructor(mpg, gallons, odometer, trips) {
    this.mpg = mpg;
    this.gallons = 0;
    this.odometer = 0;
    this.trips = [];
  }

  fill(gallons){
    return this.gallons += gallons;
  }

  drive(distance) {
    this.gallons -= distance / this.mpg;
    this.odometer += distance;
    this.trips.push(`${distance} miles`);
  }
}

module.exports = Car;
