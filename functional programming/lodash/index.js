var _ = require('lodash');
console.log("Hello, lodash!");

let myName = "JooYoungho".split('');

//chunk
console.log("chunk");
let chunk = _.chunk(myName, 3);
for (chunkText of chunk) {
    console.log(chunkText);
}

//compact
console.log("compact");
let compact = _.compact([...myName, 0, 1, 2, NaN, undefined, false, true]);
console.log(compact);

//concat
console.log("concat");
let concat = _.concat(...myName, 2, [3], [4], [[5]]);
console.log(concat);