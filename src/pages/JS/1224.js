const users = [
  { id: 1, name: 'Alice', skills: ['js', 'css'] },
  { id: 2, name: 'Bob', skills: ['python'] },
  { id: 3, name: 'Charlie', skills: ['js', 'node', 'css'] },
  { id: 4, name: 'Dana', skills: [] },
];

//Question 1 (Warm-up – Boolean)
const result = users.some((user) => {
  const hasNodeSkill = user.skills.includes('node');
  return hasNodeSkill;
});
console.log(result);

//Question 2 (Find one item)
const found = users.find((d) => d.skills.length === 0);
console.log(found);

//Question 3 (Filtering)
const filtered = users.filter((d) => d.skills.includes('js'));
console.log(filtered);

//Question 4 (Transformation)
// ['Alice', 'Bob', 'Charlie', 'Dana']
const usersOnly = users.map((d) => d.name);
console.log(usersOnly);

//Question 5 (Reduce – Counting)
//6
const count = users.reduce((acc, currentVal) => {
  acc = acc + currentVal.skills.length;
  return acc;
}, 0);
console.log(count);

//Question 6 (Reduce – Object accumulator)
// {
//   js: 2,
//   css: 2,
//   python: 1,
//   node: 1
// }
const countSkill = users.reduce((acc, currentVal) => {
  currentVal.skills.forEach((skill) => {
    const exist = acc.hasOwnProperty(skill);
    if (exist) {
      acc[skill]++;
    } else {
      acc[skill] = 1;
    }
  });
  currentVal.skills.length;
  return acc;
}, {});
console.log(countSkill);

const revised = users.reduce((acc, user) => {
  user.skills.forEach((skill) => {
    acc[skill] = (acc[skill] || 0) + 1;
  });
  return acc;
}, {});
console.log(revised);

//Bonus (Optional – String output)
//'js,css,python,node'
