module.exports = function diffThan(leftArray, rightArray, eqFn = (a, b) => a === b) {
  function than(left, right) {
    return left.filter(le => !right.find(re => eqFn(le, re)))
  }

  return {
    left: than(leftArray, rightArray),
    right: than(rightArray, leftArray)
  }
}
