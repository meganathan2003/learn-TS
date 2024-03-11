/**
 * 
 * @param message 
 * Below the code for sample create the function
 */
function log(message) {
    console.log(message);
}

log('Dinesh');

// How to declare the variable in ts
function printNumber() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);

}
printNumber();

/**
 * type Assertions concept
 */

let color;
color = 'red';
/**
 * <String > --> This is called type assertion we give 
 * say the TS this type is String and we use as well
 */
// let sample = (color as String).endsWith('d');

/**
 * Below the code for Arrow function 
 * in TS -- This is same as inn js
 */
let doLog = (message) => {
    console.log(message);
}

/**
 * Below the code for interface
 * interface is like we have create something
 * manually 
 */
interface Point {
    x: number,
    y: number,
    z: number
}

let draw = (point: Point) => {

}
// draw({ x: 1, y: 2, z: 5 });


/**
 * Below the code for create a new 
 * class in TS 
 */
class Point {
    x: number;
    y: number;
    z: number;
    draw = (): any => {
        console.log(this.x);

    }
    drawRectangle: () => {
        draw()
    }
}
let Shape: Point = new Point(); // this create a new obj i means create a new memory
Shape.x = 
Shape.draw();