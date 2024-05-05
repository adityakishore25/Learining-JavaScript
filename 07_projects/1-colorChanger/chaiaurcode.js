const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        // using if-else
        // if (e.target.id == 'grey') {
        //     body.style.background = e.target.id
        // }
        // else if (e.target.id == 'white') {
        //     body.style.background = e.target.id
        // }
        // else if (e.target.id == 'blue') {
        //     yellow
        //     body.style.background = e.target.id
        // }
        // else
        //     body.style.background = 'yellow'
        // using switch case
        switch (e.target.id) {
            case 'grey':
                body.style.background = 'grey'
                break;
            case 'yellow':
                body.style.background = 'yellow'
                break;
            case 'blue': 
                body.style.background = 'blue'
                break;
            default:
                body.style.background = 'white'
        }
    })
})