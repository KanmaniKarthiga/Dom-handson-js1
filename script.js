// Q1...
var ans1 = document.getElementById("text")
ans1.style.backgroundColor = "peachpuff"
console.log(ans1)

//Q2...
var ans2 = document.getElementsByTagName("h1")
ans2[1].style.color = "purple"
console.log(ans2)

//Q3...
var ans3 = document.getElementsByClassName("box")
ans3[0].innerHTML = "Colorful Circle!"
console.log(ans3)

// Q4...

var ans4 = document.getElementById("changetext")
let count = 0
ans4.addEventListener('click', () => {
    ans4.innerHTML = "Hello World"
    ans4.style.color = "Green"
    if (count % 2 === 0) {
        ans4.innerHTML = "Hello World"
        ans4.style.color = "Green"
        count++
    }
    else {
        ans4.innerHTML = "Hello"
    }
})

//Q5...
var ans5 = document.getElementById("q5")
function replacetext() {
    ans5.innerText = "Welcome to Elevation Academy"
}
console.log(ans5)

//Q6...
var ans6 = document.getElementById("heading")
ans6.style.color = "red"
console.log(ans6)

//Q7...
var ans7 = document.querySelector(".content7")
let count1 = true
function directionchange() {
    if (count1) {
        ans7.style.display = "block"
        count1 = false
    }
    else {
        ans7.style.display = "flex"
        count1 = true
    }
}

// Q8...
var ans8 = document.getElementsByClassName("line1")
ans8[0].innerHTML = "DOCUMENT"
ans8[1].innerHTML = "WINDOW"
ans8[2].innerHTML = "It represents any HTML document or web page that is loaded in the browser."
ans8[3].innerHTML = "It represents a browser window or frame that displays the contents of the webpage."
ans8[4].innerHTML = "It is loaded inside the window and it is the object of window property."
ans8[5].innerHTML = "It is the very first object that is loaded in the browser and it is the object of the browser."
ans8[6].innerHTML = "We can access the document from a window using the window. document.The document is part of BOM (browser object model) and dom (Document object model)"
ans8[7].innerHTML = "We can access the window from the window only. i.e. window.window and The window is part of BOM, not DOM."
ans8[8].innerHTML = "All the tags, elements with attributes in HTML are part of the document."
ans8[9].innerHTML = "Global objects, functions, and variables of JavaScript are members of the window object."

// Q9...
setInterval(startclock, 1000);
function startclock() {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let period = "AM"

    if (hrs === 0) {
        hrs = 12;
    }
    if (hrs >= 12) {
        hrs -= 12;
        period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
 
    let current_time = `${hrs} : ${mins} : ${secs}`
    document.getElementById("clock").innerHTML = current_time
}
startclock()
