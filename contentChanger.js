$(document).ready(function () {
    $('#content-card').show();
    $('#content-setting').hide();

    $('#btnDashboard').click(function () {
        $('#content-card').show();
        $('#content-setting').hide();
    });

    $('#btnSetting').click(function () {
        $('#content-card').hide();
        $('#content-setting').show();
    });
});