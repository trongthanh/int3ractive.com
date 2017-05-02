/* © 2017 Int3ractive
 * @author Thanh
 * Helpers for the speaking page
 */

// this script is loaded in the middle, so the event sure will not fired yet
document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var hasUpcoming = false;
    var pastAdded = false;

    $('.events__item__time').each(function (index, el) {
        var timeStr = el.getAttribute('datetime');
        var time = new Date(0);

        if (timeStr) {
            time = new Date(timeStr);
        }
        if (time > today) {
            console.log('upcoming time', time);
            // upcoming events found
            hasUpcoming = true;
        } else if (!pastAdded) {
            console.log('first past time', time);
            // add the past label:
            $(el).closest('.events__item').before('<li class="events__section"><h2>Past:</h2></li>');
            pastAdded = true;
        }
    });

    if (hasUpcoming) {
        $('#events-list').prepend('<li class="events__section"><h2>Upcoming:</h2></li>')
    }
});
