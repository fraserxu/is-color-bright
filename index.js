/**
 * it takes in a rgb string and
 * @return {Boolean} true/false
 */
function isColorBright (rgbString) {
  const rgbObj = toRgbObj(rgbString)
  const brightess = getBrightness(rgbObj)

  return brightess > 240
}

function getBrightness (rgbObj) {
  return Math.round(((parseInt(rgbObj.r) * 299) + (parseInt(rgbObj.g) * 587) + (parseInt(rgbObj.b) * 114)) /1000)
}

function toRgbObj (rgbString) {
  return rgbString.match(/\([^\)]+\)/g)[0]
  .replace('(', '')
  .replace(')', '')
  .split(',')
  .map(function(val) {return val.trim()})
  .reduce(function(prev, curr, index) {
    if (index === 0) {
      prev['r'] = curr;
      return prev}
    else if (index === 1) {
      prev['g'] = curr;
      return prev
    } else if (index === 2) {
      prev['b'] = curr;
      return prev
    }
  }, {})
}

module.exports = isColorBright
