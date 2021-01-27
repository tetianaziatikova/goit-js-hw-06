import users from "./users.js"

const getNamesSortedByFriendsCount = users => users
    .sort((userOne, userTwo) => userOne.friends.lenght - userTwo.friends.lenght)
    .map(user => user.name);
  
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
  