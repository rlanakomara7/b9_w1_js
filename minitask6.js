const data = { id: 1, meta: { author: "jane", tags: ["js", "es6"] } };

const {
  id,
  meta: {
    author,
    tags: [i, q],
  },
} = data;

console.log(id);
console.log(author);
console.log(i);
console.log(q);
