const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height'),value)
form.addEventListener('submit', function (e) {
    e.preventDefault() // Prevent default form submission

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value) // Use separate selector for weight
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const heightInMeters = height / 100; // Convert cm to meters
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        // Show the result
        result.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.60) {
            const textToAdd = " <br>Under Weight."
            result.innerHTML += textToAdd
        } else if (bmi >= 18.60 && bmi <= 24.90) {
            const textToAdd = " <br>Normal Range."
            result.innerHTML += textToAdd
        } else if (bmi > 24.90) {
            const textToAdd = "<br>Overweight."
            result.innerHTML += textToAdd
        }
    }
})
