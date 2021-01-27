import users from "./users.js"

const getUserWithEmail = (users, email) => users
    .filter(user => user.email === email)
    .map(user => user.name);    

  
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
  