const caesar = string => string.replace(/([a-z])/ig, ( char => {
  let charNumber = char.charCodeAt(0)
  charNumber === 122 //'z'
    ? charNumber = 97 // 'Z'
    : charNumber === 90 //'z' => 'a'
      ? charNumber = 65 //'Z' => 'A'
      : charNumber += 1
    return String.fromCharCode(charNumber)
  }) );
module.exports = caesar;