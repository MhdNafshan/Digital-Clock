//1.
// let dateTime = new Date()

// console.log(dateTime) no need here 

/*
let now = new Date(); // current date and time
console.log(now); // e.g., 2025-04-29T10:15:30.000Z

 
now.getFullYear(); // 2025
now.getMonth();    // 0-based index (0 = January)
now.getDate();     // Day of the month
now.getHours();    // Hour

 */


//2.

// function displayTime(){
//     let hr= dateTime.getHours()
//     let min = dateTime.getMinutes()
//     let sec = dateTime.getSeconds()

// }

// setInterval(displayTime,1000)


//4.
let AMPM =document.getElementById('ampm')


/* 
if(hr>12){
        hr=hr-12
        AMPM.innerHTML='PM'

    }
    else{
        AMPM.innerHTML='AM'
    }
        
    */


//3. now intha values ellam antha antha idathukku varuvathu pol set panna veandum

// function displayTime(){
//     let dateTime = new Date()

//     let hr= dateTime.getHours()
//     let min = dateTime.getMinutes()
//     let sec = dateTime.getSeconds()
//     if(hr>12){
//         hr=hr-12
//         AMPM.innerHTML='PM'

//     }
//     else{
//         AMPM.innerHTML='AM'
//     }
//     document.getElementById('hours').innerHTML=hr
//     document.getElementById('mins').innerHTML=min
//     document.getElementById('seconds').innerHTML=sec
// }

// setInterval(displayTime,500)


//5. single digit double aaha vanthaal nalla irukkum, so single digit aaha varum pothu munnadi single 0 vanthaal ok

function displayTime(){
    let dateTime = new Date()

    let hr= dateTime.getHours()
    let min = padZero(dateTime.getMinutes())
    let sec = padZero(dateTime.getSeconds())
    if(hr>12){
        hr=hr-12
        AMPM.innerHTML='PM'

    }
    else{
        AMPM.innerHTML='AM'
    }
    document.getElementById('hours').innerHTML=padZero(hr)
    document.getElementById('mins').innerHTML=min
    document.getElementById('seconds').innerHTML=sec
}

setInterval(displayTime,1000)



function padZero(num){
    return num<10?"0"+num:num
}

// function padZero(num) {
//     if (num < 10) {
//         return "0" + num;
//     } else {
//         return num;
//     }
// }




