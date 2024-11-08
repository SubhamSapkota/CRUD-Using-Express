let users = [
  { name: "nitan", gender: "male" },
  { name: "sita", gender: "female" },
  { name: "hari", gender: "male" },
  { name: "gita", gender: "female" },
  { name: "utshab", gender: "other" }
];

// let output = users.reduce((acc,user)=>{
//   if(!acc[user.gender]){
//     acc[user.gender]= [];
//   }
//  return acc[user.gender].push(user)

// },{});


// console.log(output)

// let output = users.reduce((acc, user) => {
//   if (!acc[user.gender]) {
//     acc[user.gender] = [];
//   }
//   acc[user.gender].push(user);
//   return acc;
// }, {});

// console.log(output);

let output = users.reduce((acc,user)=>{
  if(!acc[user.gender]){
    acc[user.gender]=[];
  }
  acc[user.gender].push(user);
  return acc;
},{})
console.log(output)
