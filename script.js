let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");


function analogClock() {
    let now = new Date();
    let hourTime = now.getHours();
    let hourMinute = now.getMinutes();
    let hourSeconds = now.getSeconds();
  
    // Formulas 
  let hourFormula = (hourTime * 30) + (0.5 *hourMinute);   
  let minuteFormula = (hourMinute * 6) ;   
  let secondFormula = (hourSeconds * 60) ;
  
  hour.style.transform = `rotate(${hourFormula}deg)`
  minute.style.transform = `rotate(${minuteFormula}deg)`
  second.style.transform = `rotate(${hourSeconds}deg)`
  console.log(minuteFormula)
}
 setInterval(analogClock, 1000);