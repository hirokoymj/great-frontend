const guest = {
  name: 'Alice',
  loves: ['avocado', 'quinoa', 'kale'],
};

const recipes = [
  {
    name: 'Honey-Glazed Ham',
    ingredients: ['pork', 'banana', 'brown sugar', 'kale', 'butter'],
  },
  {
    name: 'Hotcake',
    ingredients: ['apple', 'avocado', 'cherry', 'butter'],
  },
];

const final = recipes.filter((recipe) => {
  const result = recipe.ingredients.some((d) => {
    const hasLove = guest.loves.includes(d);
    return hasLove;
  });
  return result && recipe;
});

console.log(final);

///
const foo = 0;
// switch (foo)

switch (foo) {
  case foo === 1:
    console.log(1);
    break;
  case foo === 2:
    console.log(1);
    break;
  default:
    console.log('99');
}

const myObject = { a: 1, b: 2, c: 3 };
// for (let key in myObject) {
//   console.log(`${key}- ${myObject[key]}`);
// }

// Object.keys(myObject).map((key) => console.log(`${key} === ${myObject[key]}`));

// Object.entries(myObject).map(([key, value]) => {
//   console.log(key);
//   console.log(value);
// });

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj3 = {
  a: 1,
  b: 2,
  c: 4,
};
// diff(obj1, obj2); // RETURNS true
// diff(obj1, obj3); // RETURNS false

// const diff = (o1, o2) => {
//   let result = true;

//   for (let key in o1) {
//     if (o1[key] !== o2[key]) {
//       return result = false;
//     }
//   }
//   return result;
// };

const diff = (o1, o2) => {
  for (let key in o1) {
    if (o1[key] !== o2[key]) {
      return false;
    }
  }
  return true;
};

console.log(diff(obj1, obj2)); //True
console.log(diff(obj1, obj3)); //undefined

const employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' },
];
[
  { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
  { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
  { skill: 'html', user: ['Sue'], count: 1 },
];

const result = employees.reduce((acc, currentVal) => {
  const found = acc.find((d) => d.skill === currentVal.skill);
  if (found) {
    found.user.push(currentVal.user);
    found.count++;
  } else {
    acc.push({
      skill: currentVal.skill,
      user: [currentVal.user],
      count: 1,
    });
  }
  return acc;
}, []);

console.log(result);

// [
//   { skill: 'css', user: <ref *1> [ 'Bill', [Circular *1] ], count: 2 },
//   {
//     skill: 'javascript',
//     user: <ref *2> [ 'Chad', [Circular *2], [Circular *2] ],
//     count: 3
//   },
//   { skill: 'html', user: [ 'Sue' ], count: 1 }
// ]
