const newYear='1 jan 2023';
const daysel=document.getElementById('days');
const hoursel=document.getElementById('hours');
const minsel=document.getElementById('mins');
const secel=document.getElementById('sec');

function countdown(){
    const newYeardate=new Date(newYear);
    const currentdate=new Date();
    const totalseconds=(newYeardate-currentdate)/1000;
    const days =Math.floor((totalseconds)/3600/24);
    const hours =Math.floor(totalseconds/3600)%24;
    const mins =Math.floor(totalseconds/60)%60;
    const sec =Math.floor(totalseconds)%60;
    
    daysel.innerHTML=days;
    hoursel.innerHTML=hours;
    minsel.innerHTML=mins;
    secel.innerHTML=sec;
    console.log(days,hours,mins,sec)

}
countdown();
setInterval(countdown,1000);