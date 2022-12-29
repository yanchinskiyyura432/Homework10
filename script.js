//task 1

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, n, ...z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

//task 2

// let data = {
//   names: ["Sam", "Tom", "Ray", "Bob"],
//   ages: [20, 24, 22, 26],
// };
// let {
//   names: [, name2, , name4],
//   ages: [, age2, , age4],
// } = data;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26

//task 3

// mul = (...args) => {
//   let sum = 0;
//   for (let arg of args) {
//     if (typeof arg === "number") {
//       sum += arg;
//     }
//   }
//   return sum;
// };
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0

//task 4

// let server = {
//   data: 0,
//   convertToString: (callback) => {
//     callback(() => {
//       return server.data + "";
//     });
//   },
// };

// let client = {
//   server: server,
//   result: "",
//   calc: (data) => {
//     server.data = data;
//     server.convertToString(client.notification());
//   },

//   notification: () => {
//     return (callback) => {
//       client.result = callback();
//     };
//   },
// };
// client.calc(123);

// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"

//task 5

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];

// let mapBuilder = (keys, values) => {
//   let newMap = new Map();
//   for (let i = 0; i < keys.length; i++) {
//     newMap.set(keys[i], values[i]);
//   }
//   return newMap;
// };

// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"
