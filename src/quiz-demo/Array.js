//https://github.com/hirokoymj/react-vitest/blob/main/src/components/PostList.jsx
//- may only occur once;
//- A new Set object.
// const mockPosts = [
//   { id: 1, userId: 1, title: 'Post one' },
//   { id: 2, userId: 1, title: 'Post two' },
//   { id: 3, userId: 2, title: 'Post three' },
//   { id: 4, userId: 2, title: 'Post four' },
// ];

const userIdList = new Set(posts.map((p) => p.userId));

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

const uniqueFruits = [...new Set(fruits)];

console.log(uniqueFruits);
// ['apple', 'banana', 'orange']

const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

const keyedUsers = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// Result: { '1': { id: '1', name: 'Alice' }, '2': { id: '2', name: 'Bob' } }
