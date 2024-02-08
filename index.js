<script>
    alert('projet Anna');
</script>
//Original code By Webdevtrick ( https://webdevtrick.com )
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? "0" + h : h ;
    h = (m < 10) ? "0" + m : m ;
    h = (s < 10) ? "0" + s : s ;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;

    setTimeout( showTime, 1000);
}
showTime();