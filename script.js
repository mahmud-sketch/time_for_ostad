function showTime(){
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    document.getElementById('ex').innerHTML = (`${hours}:${minutes}:${seconds}`.toString());
}

setInterval((showTime),1000);

// setInterval is calling the function showtime every second and the function showtime writes in the document the following things: the hours, the minutes and the seconds which is got from the new date Object.thus function is called every second and updated time is shown every second after converting it into string bu toString method.