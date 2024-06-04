
$(function () {
	fetchHelloTranslation();
});
function fetchHelloTranslation() {
	$.ajax({
		url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
		type: 'GET',
		dataType: 'json',
		success: function (data) {
			$('#hello').text('data.hello');
		},
		error: function () {
			$('#hello').text('Error fetching translation');
		}
	});
}