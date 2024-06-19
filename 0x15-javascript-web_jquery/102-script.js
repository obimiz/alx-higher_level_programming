$(function () {
	$('#btn_translate').click(function () {
		var languageCode = $('#language_code').val();
		var apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/' + languageCode;

		$.ajax({
			url: apiUrl,
			type: 'GET',
			dataType: 'json',
			success: function (data) {
				$('#hello').text(data.hello);
			},
			error: function () {
				$('#hello').text('Error fetching translation');
			}

		});
	});
});