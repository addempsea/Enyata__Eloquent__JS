let word = "'You're not a very 'good' friend";

console.log(word.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
