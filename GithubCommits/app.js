
const Start = () => {
    console.log('started')
    CreateSquares()
}

const RandomColour = () => {
    let i = 1
    while ( i < 101 ) {
        let x = (Math.round(Math.random() * 51) + 1)
        let y = (Math.round(Math.random() * 6) + 1)
        let day = document.querySelector(`#week${x} #day${y}`)
        
        if (day.classList.contains("blank")) {
            day.classList.replace("blank", "green")
        } else if (day.classList.contains("green")) {
            day.classList.replace("green", "dark-green")
        } else if (day.classList.contains("dark-green")) {
            day.classList.replace("dark-green", "darker-green")
        } else if (day.classList.contains("darker-green")) {
            day.classList.replace("darker-green", "darkest-green")
        }

        console.log(i)
        i ++
    }
}

const CreateSquares = () => {
    let x = 1
    let y = 1

    divCode = ''
    while ( y < 8 ) {
        innerCode = `<div id="day${y}" class="square blank"></div>`
        divCode = divCode + innerCode
        y ++
    }

    while (x < 53) {
        let area = document.getElementById('squareArea')
        let div = document.createElement('div')
        div.innerHTML = divCode
        div.setAttribute('id', `week${x}`)
        area.appendChild(div)
        x ++ 
    }
}