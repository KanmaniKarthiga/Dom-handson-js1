let inputvalue = document.querySelector('input')
let randomnumber = parseInt(Math.random()*100 + 1)
console.log(randomnumber)

var message = document.getElementById('message')
var chances = document.getElementById('chance')
var highscore = document.getElementById('score')
var ans = document.getElementsByClassName('box')

let count = 100;
function checknumber(){
    console.log(inputvalue.value)
    if(randomnumber > inputvalue.value){
        console.log('Your guess is Low')
        message.innerHTML = "Your guess is Low"
        count--
        console.log(count)
        chances.innerHTML = count
    }
    else if(randomnumber < inputvalue.value){
        console.log('Your guess is high')
        count--
        console.log(count)
        message.innerHTML = "Your guess is High"
        chances.innerHTML = count

    }
    else{
        console.log('Your guess is Right')
        console.log(count)
        message.innerHTML = "🤩Hurrah You WON🤩"
        ans[0].innerHTML = inputvalue.value
        document.body.style.backgroundColor = "green"
        inputvalue.style.backgroundColor = "green"
        chances.innerHTML = count
        highscore.innerHTML = count

    }
}




