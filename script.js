function realtime(){
    var d=new Date();
    var hr=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
    var pm=(hr<12)?"AM" : "PM";
    // hr=(hr>12)?hr-12 : hr;
    hr=("0" +hr).slice(-2);
    min=("0" +min).slice(-2);
    sec=("0" +sec).slice(-2);
    document.getElementById('clock').innerHTML=hr +" : " + min + " : " + sec + " " + pm;
    var a=setTimeout(realtime,500);
    
}