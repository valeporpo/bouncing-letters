let letters = document.querySelectorAll('body div.title-container div.title-character')
const minHeight = 0
const maxHeight = -200
const minScale = 0.5
const maxScale = 3
const scaleStep = 0.01

let animate = setInterval(function() {
    letters.forEach(function(letter){
        let currentScaleY = getScaleY(letter)
        if(letter.dataset.direction == 'is-expanding') {
          if(currentScaleY >= minScale && currentScaleY < maxScale) { 
             let newScale = Number(currentScaleY) + scaleStep
             let newTranslate = computeTranslateY(newScale, letter)  
             letter.style.transform = 'matrix(1, 0, 0, ' + newScale + ', 0, '+newTranslate+')'
          }
          if(currentScaleY == maxScale) {
             letter.dataset.direction = 'is-contracting'
          }
        } else if(letter.dataset.direction == 'is-contracting') {
           if(currentScaleY > minScale && currentScaleY <= maxScale) {
             let newScale = Number(currentScaleY) - scaleStep
             let newTranslate = computeTranslateY(newScale, letter)
             letter.style.transform = 'matrix(1, 0, 0, ' + newScale + ', 0, ' + newTranslate + ')'
           }
           if(currentScaleY == minScale) {
             letter.dataset.direction = 'is-expanding'
           }
        }
    })
}, 8)

function getScaleY(el) {
    let style = window.getComputedStyle(el)
    let matrix = new WebKitCSSMatrix(style.transform)
    return matrix.d
}

function getTranslateY(el) {
    let style = window.getComputedStyle(el)
    let matrix = new WebKitCSSMatrix(style.transform)
    return matrix.m42
}

function setScaleY(el) {
    let style = window.getComputedStyle(el)
    let matrix = new WebKitCSSMatrix(style.transform)
    return matrix.d
}

function computeTranslateY(currentScale, el) {
    if(getScaleY(el) > 1)
      newTranslate = currentScale/(maxScale-minScale)*(maxHeight-minHeight)
    else  
      newTranslate = getTranslateY(el)
    return newTranslate 
}