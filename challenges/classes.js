// 1. Copy and paste your prototype in here and refactor into class syntax.

// == Step 1: Base Constructor ==
  
class CuboidMakers {
    constructor (measurement){
        this.length = measurement.length;
        this.width = measurement.width;
        this.height = measurement.height;
    }

    // == Step 2: Volume Method ==
    volume() {
        return `The volume of the cuboid is ${this.length * this.width * this.height}`
    }

    //  == Step 3: Surface Area Method ==
    surfaceArea() {
        return `The surface area of the cuboid is ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`
    }
  }
  
//   == Step 4: Create a new object that uses CuboidMaker ==
 const cuboid1 = new CuboidMakers ({
    length: 4,
    width: 5,
    height: 5
  });
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.