const user = {
  id: 1,
  username: 'timsully',
  first_name: 'Tim',
  last_name: 'Sullivan'
}

const userKeys = Object.keys(user);

for (const i in userKeys) {
  console.log(userKeys[i]);
}
