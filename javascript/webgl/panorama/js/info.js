function toggleInfo() {
  var $info = $('#info');
	if ($info.css('display') == 'block') {
		$info.hide(200);
	} else {
		$info.show(200);
	}
}