jQuery(document).ready(function () {
    function showTime() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var session = "AM";

        if (hours == 0) {
            hours = 12;
        }
        if (hours >= 12) {
            session = "PM";
        }
        if (hours > 12) {
            hours = hours - 12;
        }

        // ternary operator for this: 09,08 and 10, 11 > less then 10 and the zero will be added before the number

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        jQuery("#hours").text(hours);
        jQuery("#minutes").text(minutes);
        jQuery("#seconds").text(seconds);
        jQuery("#periods").text(session);

        setTimeout(showTime, 1000);
    }
    showTime();
});
