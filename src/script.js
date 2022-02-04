function calcHours()
{
    var hour=parseInt(document.getElementById("hr").value);
    var option=document.querySelector('input[name="hours"]:checked').value;
    let min, sec;
    if(option=="HourstoMin")
    {
        min=hour*60;
        document.getElementById("typ").innerText="Minutes";
        document.getElementById("ans").innerText=min;
    }
    else{
        sec=hour*3600;
        document.getElementById("typ").innerText="Seconds";
        document.getElementById("ans").innerText=sec;
    }
 
}