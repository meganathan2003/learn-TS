/**
 * Below the code for data types for
 * Type script
 */
// let count = 1;
// count = 'a'; we cannot do like this because
// Complier will show the error
var a; // we can set the type like this
var b;
var c;
var d; // What type of value will be.
var e = [1, 2, 3]; // We will set the only arrays
var f = [1, 'dinesh', true]; // we will declare any type using any
var colorRed = 0;
var colorBlue = 1;
var colorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var bgColor = Color.Blue;
