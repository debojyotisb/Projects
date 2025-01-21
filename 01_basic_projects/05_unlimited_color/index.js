// Need to do first..

//Generate random color
//event loop

const hexCode = document.querySelector('#hex');

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}



// button reference

let intervalId;
const startChangingColor = function () {

   if(!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
   }
    function changeBgColor () {
        document.body.style.backgroundColor = randomColor();
        hexCode.innerHTML = `Hex Code: ${randomColor()}`;
        // console.log(randomColor());
    }
    
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId  = null;
}

document.querySelector("#play").addEventListener('click', startChangingColor);

document.querySelector("#pause").addEventListener('click', stopChangingColor);
