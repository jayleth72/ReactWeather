// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback("Peregian Beach", function(err, temp){
//   if (err) {
//     console.log('error', err);
//   }
//   else {
//     console.log('success', temp);
//   }
// });
//
// // promise only completed once
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject){
//     setTimeout(function () {
//       resolve(79);
//       reject('City bot found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Peregian beach').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

// Challenge Area
function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number')
      resolve(a + b);
    else {
      reject('A non-numerical number was entered');
    }
  });
}

addPromise(5, 4).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise('fg', 4).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
