// var names = ['bob', 'ass0', 'anus', 'butt'];
// //
// // names.forEach(function (name) {
// //   console.log('forEach', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// // });
// //
// // names.forEach((asses) => console.log(asses
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('jason'));
//
// var person = {
//   name: 'Jay',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
    return a + b;
};

var addExpression = (a, b) => a + b;

console.log(add(1, 5));
console.log(add(78, 89));

console.log(addStatement(7, 4));
console.log(addExpression(10, 34));
