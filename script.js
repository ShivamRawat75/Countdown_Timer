const d=document.getElementById('days');
const h=document.getElementById('hours');
const m=document.getElementById('mins');
const s=document.getElementById('sec');





const newYears="1 Jan 2023";
function countdown(){
    const newYearDate=new Date(newYears);
    const currentDate=new Date();
    const totalseconds=Math.floor((newYearDate-currentDate)/1000);
    
    const day=Math.floor(totalseconds/3600/24);
    const hr=Math.floor(totalseconds/3600)%24;
    const min=Math.floor(totalseconds/60)%60;
    const sec=totalseconds%60;

    d.innerHTML=day;
    h.innerHTML=formatTime(hr);
    m.innerHTML=formatTime(min);
    s.innerHTML=formatTime(sec);

    
}
function formatTime(time){
    return time<10?`0${time}`:time;

}
countdown();
setInterval(countdown,1000);