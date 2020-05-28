function wordReformer(wordFragment1, wordFragment2) {
  return `${wordFragment1}${wordFragment2}`
}

var one = wordReformer("bro", "ken") // -> "broken"
var two = wordReformer("manipu", "lation") // -> "manipulation"
var three = wordReformer("excite", "ment") // -> "excitement"

console.log(one);
console.log(two);
console.log(three);