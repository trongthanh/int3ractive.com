/* © 2017 Int3ractive
 * @author Thanh
 * Helpers for the speaking page
 */

/**
 * re-implemetation of jQuery $
 * @param  {*} selector jQuery selector
 * @return {Array} Array of elements
 */
function $(selector) {
	return Array.from(document.querySelectorAll(selector));
}

// this script is loaded in the middle, so the event sure will not fired yet
document.addEventListener('DOMContentLoaded', function () {
	var today = new Date();
	var hasUpcoming = false;
	var pastAdded = false;

	$('.events__item__time').forEach(function (el) {
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
			// <li class="events__section"><h2>Past:</h2></li>
			var li = document.createElement('li');
			li.className = 'events__section';
			li.innerHTML = '<h2>Past:</h2>';

			el.closest('.events__item').before(li);
			pastAdded = true;
		}
	});

	if (hasUpcoming) {
		// <li class="events__section"><h2>Upcoming:</h2></li>
		var li = document.createElement('li');
		li.className = 'events__section';
		li.innerHTML = '<h2>Upcoming:</h2>';
		$('#events-list')[0].prepend(li);
	}
});
