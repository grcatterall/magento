define(['jquery', 'Magento_Ui/js/modal/modal', 'jquery/ui', 'Magento_Catalog/js/price-utils'], 
function($, modal, ui, priceUtils) {
	'use strict';
	return function(config) {
        $('#form-submit').click(function(e) {
            e.preventDefault();
            var apiUrl = "https://slack.com/api/chat.postMessage";
            var token = 'xoxb-2526786934066-2533125386308-CK5YHUI5Pips8h524wDMtocb';
            var channel = "general";
            var text = "Testing slack api";
            var user = "magento";
            $.each($(this).closest('#slack-form').find('.form-control'), function(x) {
                if ($(this).val()) {
                    text += ' | ';
                    text += $(this).attr('name')  + ': ' + $(this).val();
                }
            });
            let countrySelect = $(this).closest('#slack-form').find('#country');
            text += ' | ';
            text += $(countrySelect).attr('name') + ': ' + $(countrySelect).val();
            $.ajax({                   
                data: {
                    "token": token,
                    "channel": channel,
                    "text": text,
                    "as_user": user
                },                      
                dataType: 'text',
                type: 'POST',           
                url: apiUrl,
                error: function(xhr,status,error){              
                    console.log("error: " + error);
                },
                success: function(data) {
                    console.log("result: " + data);
                    data = JSON.parse(data);
                    if (data.ok) {
                        $('.message').text('Message sent!');
                    } else {
                        $('.message').text(data.error);
                    }
                }
            });
        });
    }
});