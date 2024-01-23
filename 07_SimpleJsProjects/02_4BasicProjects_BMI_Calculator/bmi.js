const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    console.log(height)
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight)

    const results = document.querySelector('#results')
    if(isNaN(height) || height<0 || height === '') {
        results.innerHTML = `Please give a valid height: ${height}`
    } else if(isNaN(weight) || weight<0 || weight === ''){
        results.innerHTML = `Please give a valid weight: ${weight}`
    } else {
        const bmi = (weight/ ((Math.pow(height,2))/10000)).toFixed(2)
        results.innerHTML = `Your Bmi is: ${bmi}`
    }

})