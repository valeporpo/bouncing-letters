let letters = document.querySelectorAll('body div.title-container div.title-character')
console.log(letters)

let animate = setInterval(function() {
    /*let fromDegree = letters[currentIndex].style.transform.substr(8)
    let degree = Number(fromDegree.substr(0, fromDegree.length - 4))
    if(degree == 270)
      changeColor(currentIndex)
    if(degree < 360) {
      newDegree = degree + 1
      changeRotation(currentIndex, newDegree)
    } else {
      newDegree = 0
      changeRotation(currentIndex, newDegree)
      currentIndex = changeLetter(currentIndex)
    }*/
    letters.forEach(function(letter){
        console.log(getScale(letter))
    })
    
}, 1)

function getScale(el) {
    let style = window.getComputedStyle(el)
    let matrix = new WebKitCSSMatrix(style.transform)
    /*let scaleObj = {
        'x' : matrix.a,
        'y' : matrix.d,
    }*/
    return matrix.d
}