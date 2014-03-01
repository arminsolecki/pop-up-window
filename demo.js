$(document).ready(function () {
    //basic pop-up
    $('#open-pop-up-1').click(function(e) {
        e.preventDefault();
        $('#pop-up-1').popUpWindow({action: "open"});
    });

    //Buttons pop-up
    $('#open-pop-up-2').click(function (e) {
        e.preventDefault();
        $('#pop-up-2').popUpWindow({
            action: "open",
            buttons: [{
                text: "Yes",
                click: function () {
                    this.close();
                }
            }, {
                text: "No",
                click: function () {
                    this.close();
                }
            }]
        });
    });

    //Custom buttons popup
    $('#open-pop-up-3').click(function (e) {
        e.preventDefault();
        $('#pop-up-3').popUpWindow({
            action: "open",
            buttons: [{
                text: "Yes",
                cssClass: "btn-yes",
                click: function () {
                    this.close();
                }
            }, {
                text: "No",
                cssClass: "btn-no",
                click: function () {
                    this.close();
                }
            }]
        });
    });

    //On close callback
    $('#open-pop-up-4').click(function (e) {
        e.preventDefault();
        $('#pop-up-4').popUpWindow({
            action: "open",
            onClose: function(){
                alert('Window Closed');
            }
        });
    });

    //advanced modal popup
    $('#open-pop-up-5').click(function (e) {
        e.preventDefault();
        $('#pop-up-5').popUpWindow({
            action: "open",
            modal: true,
            onClose: function () {
                alert('Window Closed');
            },
            buttons: [{
                text: "Yes",
                click: function () {
                    alert('Yes clicked');
                    this.close();
                }
            }]
        });
    });

    //small size popup
    $('#open-pop-up-6').click(function (e) {
        e.preventDefault();
        $('#pop-up-6').popUpWindow({
            action: "open",
            size: "small"
        });
    });

    //medium size popup
    $('#open-pop-up-7').click(function (e) {
        e.preventDefault();
        $('#pop-up-7').popUpWindow({
            action: "open",
            size: "medium"
        });
    });
});