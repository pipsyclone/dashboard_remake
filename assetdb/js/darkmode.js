$(document).ready(function () {
    // Gunakan ID pada button switch mode anda
    // Dan tulis ID nya pada function dibawah
    // Misalkan pada button untuk switch mode anda id="switchMode"
    // Anda tulis "switchMode" dibawah dengan tambahan tanda pagar

    togglemode('#darkmodeToggle', '#icon-darkmode');
});

// Function Tema berisikan tema darkmode
function darkmode() {
    // Background Body
    $('.body-bg-darkmode').toggleClass('bg-dm');
    $('.grey-100_body-bg-darkmode').toggleClass('bg-grey-100 bg-dm');
    $('.grey-200_body-bg-darkmode').toggleClass('bg-grey-200 bg-dm');
    $('.grey-300_body-bg-darkmode').toggleClass('bg-grey-300 bg-dm');
    $('.grey-400_body-bg-darkmode').toggleClass('bg-grey-400 bg-dm');
    $('.grey-500_body-bg-darkmode').toggleClass('bg-grey-500 bg-dm');
    $('.grey-600_body-bg-darkmode').toggleClass('bg-grey-600 bg-dm');
    $('.grey-700_body-bg-darkmode').toggleClass('bg-grey-700 bg-dm');
    $('.grey-800_body-bg-darkmode').toggleClass('bg-grey-800 bg-dm');
    $('.grey-900_body-bg-darkmode').toggleClass('bg-grey-900 bg-dm');
    $('.white_body-bg-darkmode').toggleClass('bg-white bg-dm');
    $('.primary_body-bg-darkmode').toggleClass('bg-primary bg-dm');
    $('.dark_body-bg-darkmode').toggleClass('bg-dark bg-dm');
    $('.secondary_body-bg-darkmode').toggleClass('bg-secondary bg-dm');
    $('.light_body-bg-darkmode').toggleClass('bg-light bg-dm');
    $('.info_body-bg-darkmode').toggleClass('bg-info bg-dm');
    $('.warning_body-bg-darkmode').toggleClass('bg-warning bg-dm');
    $('.danger_body-bg-darkmode').toggleClass('bg-danger bg-dm');

    // Background Components
    $('.bg-darkmode').toggleClass('bg-dm-1');
    $('.grey-100_bg-darkmode').toggleClass('bg-grey-100 bg-dm-1');
    $('.grey-200_bg-darkmode').toggleClass('bg-grey-200 bg-dm-1');
    $('.grey-300_bg-darkmode').toggleClass('bg-grey-300 bg-dm-1');
    $('.grey-400_bg-darkmode').toggleClass('bg-grey-400 bg-dm-1');
    $('.grey-500_bg-darkmode').toggleClass('bg-grey-500 bg-dm-1');
    $('.grey-600_bg-darkmode').toggleClass('bg-grey-600 bg-dm-1');
    $('.grey-700_bg-darkmode').toggleClass('bg-grey-700 bg-dm-1');
    $('.grey-800_bg-darkmode').toggleClass('bg-grey-800 bg-dm-1');
    $('.grey-900_bg-darkmode').toggleClass('bg-grey-900 bg-dm-1');
    $('.blue-100_bg-darkmode').toggleClass('bg-blue-100 bg-dm-1');
    $('.blue-200_bg-darkmode').toggleClass('bg-blue-200 bg-dm-1');
    $('.blue-300_bg-darkmode').toggleClass('bg-blue-300 bg-dm-1');
    $('.blue-400_bg-darkmode').toggleClass('bg-blue-400 bg-dm-1');
    $('.blue-500_bg-darkmode').toggleClass('bg-blue-500 bg-dm-1');
    $('.blue-600_bg-darkmode').toggleClass('bg-blue-600 bg-dm-1');
    $('.blue-700_bg-darkmode').toggleClass('bg-blue-700 bg-dm-1');
    $('.blue-800_bg-darkmode').toggleClass('bg-blue-800 bg-dm-1');
    $('.blue-900_bg-darkmode').toggleClass('bg-blue-900 bg-dm-1');
    $('.white_bg-darkmode').toggleClass('bg-white bg-dm-1');
    $('.primary_bg-darkmode').toggleClass('bg-primary bg-dm-1');
    $('.dark_bg-darkmode').toggleClass('bg-dark bg-dm-1');
    $('.secondary_bg-darkmode').toggleClass('bg-secondary bg-dm-1');
    $('.light_bg-darkmode').toggleClass('bg-light bg-dm-1');
    $('.info_bg-darkmode').toggleClass('bg-info bg-dm-1');
    $('.warning_bg-darkmode').toggleClass('bg-warning bg-dm-1');
    $('.danger_bg-darkmode').toggleClass('bg-danger bg-dm-1');

    // Text
    $('.text-darkmode').toggleClass('text-white text-dm');
    $('.grey-100_text-darkmode').toggleClass('text-grey-100 text-grey-100-dm');
    $('.grey-200_text-darkmode').toggleClass('text-grey-200 text-grey-200-dm');
    $('.grey-300_text-darkmode').toggleClass('text-grey-300 text-grey-300-dm');
    $('.grey-400_text-darkmode').toggleClass('text-grey-400 text-grey-400-dm');
    $('.grey-500_text-darkmode').toggleClass('text-grey-500 text-grey-500-dm');
    $('.grey-600_text-darkmode').toggleClass('text-grey-600 text-grey-600-dm');
    $('.grey-700_text-darkmode').toggleClass('text-grey-700 text-grey-700-dm');
    $('.grey-800_text-darkmode').toggleClass('text-grey-800 text-grey-800-dm');
    $('.grey-900_text-darkmode').toggleClass('text-grey-900 text-grey-900-dm');
    $('.primary_text-darkmode').toggleClass('text-primary text-dm');
    $('.dark_text-darkmode').toggleClass('text-dark text-dm');
    $('.secondary_text-darkmode').toggleClass('text-secondary text-dm');
    $('.light_text-darkmode').toggleClass('text-light text-dm');
    $('.info_text-darkmode').toggleClass('text-info text-dm');
    $('.warning_text-darkmode').toggleClass('text-warning text-dm');
    $('.danger_text-darkmode').toggleClass('text-danger text-dm');

    // Button
    $('.btn-darkmode').toggleClass('btn button-dm');
    $('.white_btn-darkmode').toggleClass('btn btn-white button-dm');
    $('.primary_btn-darkmode').toggleClass('btn btn-primary button-dm');
    $('.dark_btn-darkmode').toggleClass('btn btn-dark button-dm');
    $('.secondary_btn-darkmode').toggleClass('btn btn-secondary button-dm');
    $('.light_btn-darkmode').toggleClass('btn btn-light button-dm');
    $('.info_btn-darkmode').toggleClass('btn btn-info button-dm');
    $('.warning_btn-darkmode').toggleClass('btn btn-warning button-dm');
    $('.danger_btn-darkmode').toggleClass('btn btn-danger button-dm');

    // Input Form
    $('.input-darkmode').toggleClass('input-dm');

    // Table
    $('.table-darkmode').toggleClass('table-dm');
}

function togglemode(btnToggleMode, iconChange) {
    // Jika menemukan key "theme" value darkmode
    // Maka darkmode = true, artinya darkmode hidup
    if (localStorage.getItem('theme', 'darkmode')) {
        $(iconChange).addClass('fa-sun').removeClass('fa-moon');
        darkmode();
    }




    // Kondisi jika button toggle/switch ditekan
    $(btnToggleMode).click(function () {
        // Jika pada key pada localstorage browser sudah ada
        // Maka tema default adalah "darkmode"
        // Begitu pun sebaliknya
        darkmode();
        if (localStorage.getItem('theme')) {
            localStorage.removeItem('theme');
            $(iconChange).addClass('fa-moon').removeClass('fa-sun');
        }else{
            localStorage.setItem('theme','darkmode');
            $(iconChange).addClass('fa-sun').removeClass('fa-moon');
        }
    });
}