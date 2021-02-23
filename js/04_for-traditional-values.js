const user = {
  id: 1,
  username: 'timsully',
  first_name: 'Tim',
  last_name: 'Sullivan'
}

// const values = Object.values(user);

// for (let i = 0; i < values.length; i++) {
//   console.log(values[i]);
// }

for (let keys in user) {
  console.log(user[keys]);
}
