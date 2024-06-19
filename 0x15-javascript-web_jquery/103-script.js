    <script>
        $(function() {
            $('#btn_translate').click(fetchTranslation);

            $('#language_code').keypress(function(event) {
                if (event.which === 13) {
                    fetchTranslation();
                }
            });

            function fetchTranslation() {
                var languageCode = $('#language_code').val();
                var apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/' + languageCode;

                $.ajax({
                    url: 'apiUrl',
                    type: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        $('#hello').text(data.hello);
                    },
                    error: function() {
                        $('#hello').text('Error fetching translation');
                    }
                });
            }
        });
    </script>
