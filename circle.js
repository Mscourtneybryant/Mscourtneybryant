// 1. define a new class called circle with appropiate attributes 
// and instiantiate a few circle objects.

class circle {
    constructor(diameter){
        this.diameter = diameter;
        
    }}


// write a function that returns the area of the object

function circle_area(){
    let area = this.diameter;
    this.radius();
    return Math.PI * (this.radius() * this.radius());
}


// write a function that returns the area of an object.

function radius(){
    let r = this.diameter;
    return r / 2;
    
}

function displayCircle(){
    let area = thi.circle_area();
    let radius = this.radius();
    text = document.getElementById('circle').innerhtml = 'The area is queal to: '
+ area + 'The raodis is equal to' + radius}


// define  a new class called rectangle with appropiate attributes
// and instantiate a few rectangle objects.

class rectangle{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }
}

//function that returns area of given object

function rectangle_area(){
    return thislength * this.width;
}


//write a function that reutrns the sides

function parameter(){ 
return this.length * 2 + this.width *2;
}

function displayRectangle(){
    let area = this.rectangle_area();
    let parameter = this.parameter();
    text2 = document.getElementById(
        'rectangle').innerhtml='The area is' + area + 'the parameter is ' + parameter;
        return text2

}

const rec = new rectangle (30, 23)
rec.rectangle_area

// define a new class called square

 class square{
     constructor(sides){
         this.sides = sides;
     }
 }

 // write a function that returns the area of the square

 function square_area(){
     return Math.pow(this.sides,2);
    



 }

 // write a function that returns the number of sides

 function diagonal(){
    Math.sqrt (this.side = this.side * 2)
    text = document.getElementById('square').innerhtml = 'The number of sides is queal to: '
    + side}
 
