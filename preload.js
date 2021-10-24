// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.


function makeArray(a,b) {
    var arr = new Array(a)
    for (var i =0; i < a; i++) {
        arr[i] = new Array(b)
    }

    return arr
}

window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector(".wrapper")

    var gridArray = makeArray(10,10)

    for (var i=0; i < gridArray.length; i++){
        for (var j=0; j < gridArray[i].length; j++){
        // i is row, j is column
        element = document.createElement('div')
        element.setAttribute('class', 'box')
        element.setAttribute('onclick', 'turnOn(this.id)')
        element.id = `${i}${j}`
        //element.innerText = `${i}${j}`
        wrapper.appendChild(element)
        }
    }

})