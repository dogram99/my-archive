/** **************************************************** */
/** Output: 1 = 123, 2 = 123, 3 = 321, 4 = 321 */
// function doSmth() {
// 	return Promise.resolve("123");
// }
//
// doSmth()
// 	.then(function (a) {
// 		console.log("1", a); // 123
// 		return a;
// 	})
// 	.then(function (b) {
// 		console.log("2", b); // 123
// 		return Promise.reject("321");
// 	})
// 	.catch(function (err) {
// 		console.log("3", err); // 321
// 		return '321'
// 	})
// 	.then(function (c) {
// 		console.log("4", c); // 321
// 		return c;
// 	});
/** **************************************************** */
/** Output: 1 = ab, 2 = abc, 3 = undefined!!!!!!!, 4 = abc */
// let promise = new Promise((resolve) => {
//     setTimeout(() => resolve("a"), 0)
// });
//
// promise
//     .then((res) => {
//         const value = res + "b";
//         console.log("1 = " + value); // ab
//         return value;
//     })
//     .then((res) => {
//         const value = res + "c";
//         console.log("2 = " + value); // abc
//         return value;
//     })
//     .finally((res) => { 	// .finally isn't having props
//         const value = res + "!!!!!!!";
//         console.log("3 = " + value); // undefined!!!!!!!
//         return value;
//     })
//     .catch((res) => {
//         console.log(res); // Will not be executed
//         return res + "d";
//     })
//     .then((res) => {
//         console.log("5 = " + res); // abc
//     });
/** **************************************************** */
/** Output: [1 4 6 3 2 7 5] */
// console.log(1);
//
// setTimeout(function () {
// 	console.log(2);
// 	Promise.resolve('7').then(console.log);
// });
//
// Promise.resolve('3').then(console.log);
//
// console.log(4);
//
// setTimeout(function () {
// 	console.log(5);
// }, 0);
//
// console.log(6);

// Result: ???
