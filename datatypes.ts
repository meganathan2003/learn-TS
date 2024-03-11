/**
 * Below the code for data types for
 * Type script
 */

// let count = 1;
// count = 'a'; we cannot do like this because
// Complier will show the error

let a: number; // we can set the type like this
let b: string;
let c: boolean;
let d: any; // What type of value will be.
let e: number[] = [1, 2, 3] // We will set the only arrays
let f: any[] = [1, 'dinesh', true] // we will declare any type using any

let colorRed = 0;
let colorBlue = 1;
let colorGreen = 2;

enum Color { Red, Blue, Green };
let bgColor = Color.Green;
console.log(bgColor);

