"use strict";

//Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
//...
// 32768
// 65536

var i = 1

while (i < 65536) {
    i = i * 2;
    console.log(i);
}