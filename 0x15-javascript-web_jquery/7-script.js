$(document).ready(function () {
	fetchCharacterName();
});
function fetchCharacterName() {
	$.ajax({
		url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
		type: 'GET',
		dataType: 'json',
		success: function (data) {
			$('#character').text('data.name');
		},
		error: function () {
			$('#character').text('Error fetching character name');
		}
	});
}