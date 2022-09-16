$(document).ready(function () {
    settingButtonToggle();
});

function settingButtonToggle () {
    // Read, Write, Update File Json
    $.get("/assetdb/setting.json", function (response) {
        $('#btnTransitionSet').click(function () {
            if ($(this).text() == "Aktifkan") {
                $(this).text('Nonaktifkan').toggleClass('btn-primary btn-danger');
                $('body').addClass('transition');
                editSettingJson('0' ,'transition', 'true');
            }else{
                $(this).text('Aktifkan').toggleClass('btn-primary btn-danger');
                $('body').removeClass('transition');
                editSettingJson('0' ,'transition', 'false');
            }
        });

        if (response[0].setId == '0' && response[0].setVal == 'true') {
            $('#btnTransitionSet').text('Nonaktifkan').addClass('btn-danger').removeClass('btn-primary');
            $('body').addClass('transition');
        }else {
            $('#btnTransitionSet').text('Aktifkan').addClass('btn-primary').removeClass('btn-danger');
            $('body').removeClass('transition');
        }
    });
}

// Proses Update File JSON
function editSettingJson(idSet, keySet, valSet) {
    $.ajax({
        type: "POST",
        url: "/user-setting/update",
        data: {
            id : idSet,
            key : keySet,
            val : valSet
        },
        dataType: "json",
        success: function (res) {
            console.log(res);
        }
    });
}