const characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// function generatePassword(){
//     for(let i=0;i<15;i++){

//     }
// }
let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")

function generateRandom(){
    randomNumbersOne = []
    randomNumbersTwo = []
    for (let i=0;i<15;i++){
        let randomNo = Math.floor(Math.random()*characters.length)
        randomNumbersOne.push(randomNo)
        let randomNoTwo = Math.floor(Math.random()*characters.length)
        randomNumbersTwo.push(randomNoTwo)
    }
    // for (let i=0;i<15;i++){
        
    // }

    let randomPasswordOne = []
    let randomPasswordTwo = []
    for(let i=0;i<15;i++){
        randomPasswordOne.push(characters[randomNumbersOne[i]])
        randomPasswordTwo.push(characters[randomNumbersTwo[i]])

    }
    // for(let i=0;i<15;i++){
    // }
    // console.log(randomPasswordTwo)
    password1El.textContent = randomPasswordOne.join('')
    password2El.textContent= randomPasswordTwo.join('')

    // console.log(randomNumbersOne)
    // console.log(randomNumbersTwo)

}


