/** Output: [a: Error(a is not defined), b: 4, z: 1, d: {a: 10}, f: 10] */
let z = 1;

if(true) {
    var f = 10;
    let a = 10;
    b = 4;
    let z = 5;
}

let d = {}
d['a'] = 10
d = { ...d }

// console.log(a) //
// console.log(b) //
// console.log(z) //
// console.log(d) //
// console.log(f) //
