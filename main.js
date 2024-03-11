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
var color;
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
var doLog = function (message) {
    console.log(message);
};
var draw = function (point) {
};
// draw({ x: 1, y: 2, z: 5 });
/**
 * Below the code for create a new
 * class in TS
 */
var Point = /** @class */ (function () {
    function Point() {
        var _this = this;
        this.draw = function () {
            console.log(_this.x);
        };
    }
    return Point;
}());
var Shape = new Point(); // this create a new obj i means create a new memory
Shape.draw();
