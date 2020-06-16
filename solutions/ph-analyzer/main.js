function phAnalyzer(pH) {
  if (pH >= 0 && pH < 7) {
    return `pH is Acidic`
  } else if (pH >= 7 && pH < 9) {
    return `pH is Netural`
  } else if (pH > 10 && pH < 14) {
    return `pH is akaline`
  } else {
    return `invalid pH value`
  }
}
  var one = phAnalyzer(7)     
  var two = phAnalyzer(4)     
  var three = phAnalyzer(12)     
  var four = phAnalyzer(25)     

  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);