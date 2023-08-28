function showUser(id) {
  if (id < 0) {
    throw new Error("ID must not be negative: " + id);
  }
  return {id: id};
}
function showUsers(ids) {
  const users = [];
  for (const id of ids) {
    try {
      const user = showUser(id);
      users.push(user);
    } catch (error) {
      console.error(error.message);
    }
  }
  return users;
}
const result = showUsers([7, -12, 44, 22]);
console.log(result);
