/* Перебор ключей и значений в объекте через метод for in 
Iterating over keys and values in an object via a method*/
let user = {
  balance: "$1,250.89",
  age: 24,
  name: "Golden Clements",
  company: "EWAVES",
  email: "golden.clements@ewaves.io",
  friends: 5,
  favoriteFruit: "strawberry",
};

for (const key in user) {
  console.log(`Ключ ${key} = ${user[key]}`);
}
