const hex = [0, 1,  2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const codeColor = document.querySelector('.codeColor')
const buttonCopy = document.querySelector('.copy')
const popUp = document.querySelector('.popup')

function changeColor() {

    const color = getRandomColor()

    document.body.style.backgroundColor = color
    codeColor.innerHTML = color
}

function getRandomColor() {
    let newColor = "#"
    for (let i = 0; i < 6; i++) 
    {
        pos = parseInt(Math.random() * hex.length)
        newColor = newColor + hex[pos]
    }
    return newColor
}

buttonCopy.addEventListener('click', () =>{
    const text = codeColor.innerText

    if (navigator.clipboard) 
    {
        navigator.clipboard.writeText(text)
    } else {
        alert('The copy function is not supported in this browser')
    }

    viewPopUp()
})

function viewPopUp () {
    popUp.style.opacity = 1;
    
}