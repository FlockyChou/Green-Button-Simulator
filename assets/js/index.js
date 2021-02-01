$(function() {
    const $greenButton = $('#green-button');
    const $timer       = $('#timer');

    let timer;
    let count = 0

    $greenButton.click(function(e) {
        e.preventDefault();

        const status = $greenButton.hasClass('up') ? 'up' : 'down';
        if(status == 'up') {
            // Reset color
            $timer.css('color', 'black');
            count = 0;
            timer = setInterval(startTimer, 10);

            $greenButton.addClass('clicked').addClass('down').removeClass('clicked').removeClass('up');
        } else {
            clearInterval(timer);
            $greenButton.addClass('up').removeClass('down');
        }
    });

    function startTimer() {
        // Print the timer.
        let timerNumber = (count / 100).toFixed(2);
        const timerText = timerNumber + ' secs';
        $timer.html(timerText);

        // Do some cool colors
        if(count == 420) {
            $timer.css('color', 'green');
        } else if(count == 421) {
            $timer.css('color', 'red');
        }

        count++;
    }
});