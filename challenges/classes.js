// 1. Copy and paste your prototype in here and refactor into class syntax.

class ClassCuboidMaker {
    constructor(ClassCuboidMakerAttributes){
        this.length = ClassCuboidMakerAttributes.length;
        this.width = ClassCuboidMakerAttributes.width;
        this.height = ClassCuboidMakerAttributes.height;
    };
    volume(){
        return this.length * this.width * this.height; 
    };
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
};

class ClassCubeMaker extends ClassCuboidMaker {
    constructor(ClassCubeMakerAttributes){
        super(ClassCubeMakerAttributes);
        this.length = ClassCubeMakerAttributes.length;
        this.width = ClassCubeMakerAttributes.width;
        this.height = ClassCubeMakerAttributes.height;
    }
    secondVolume(){
        return `${this.length * this.width * this.height}`;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

  let ClassCuboid = new ClassCuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });

  let cube = new ClassCubeMaker({
      length: 7,
      width: 7,
      height: 7,
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(ClassCuboid.volume()); // 100
console.log(ClassCuboid.surfaceArea()); // 130
console.log(cube.secondVolume());
console.log(cube.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.