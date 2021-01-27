import users from "./users.js"

const getUsersWithEyeColor = (arr, color) => arr
    .filter(user => user.eyeColor === color)
    .map(user => user.name);

console.log(getUsersWithEyeColor(users, 'blue')); 
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ==================================
// const arr = []
// for (let i = 0; i < users.length; i++) {
//     if (users[i].eyeColor === 'blue') {
//         arr.push(users[i])
//     }
// }
// console.log(arr);

// =================================
// const getUsersWithEyeColor = users.filter(user => { 
//     if (user.eyeColor === 'blue') {
//         return true;
//     }
// })
// console.log(getUsersWithEyeColor);

// ==================================
// const getUsersWithEyeColor = users.filter(user => user.eyeColor === 'blue') 

// console.log(getUsersWithEyeColor);
