const form = document.querySelector("form")

//this use case will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    // const underWeight = document.querySelector('#ur')
    // const normalRange = document.querySelector('#nr')
    // const overWeight = document.querySelector('#ow')
    let weightCategory = "";


    if(height === '' || height < 0 || isNaN(height) ){ 
        results.innerHTML = `Please give valid height`
    } else if (weight === '' || weight < 0 || isNaN(weight) ){ 
        results.innerHTML = `Please give valid weight`
    } else {
       const bmi = (weight / ((height*height)/10000)).toFixed(2)

       if (bmi < 18.6 && bmi > 0 && bmi != -1){
        weightCategory = "Under Weight"
       } else if ( bmi >= 18.6 && bmi < 24.9){
        weightCategory = "Normal Range"
       } else {
        weightCategory = "Over Weight"
       }
       //Show the results
       results.innerHTML = `<span> ${bmi} which is ${weightCategory} </span>`
    }

})
