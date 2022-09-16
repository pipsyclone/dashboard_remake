$(document).ready(function () {
    togglerButton();
    scrollTop();
    settingShowHide();
});

function togglerButton() {
    let windowPage  = $(window);
    let sidebar     = $('.sidebar');
    let sidebarBrand = $('.sidebar-brand');
    let topbarMobile = $('.topbar');
    let contentContainer = $('.content-container');
    var windowSize = windowPage.width();
        
    if (windowSize >= 950) { // Dekstop
        topbarMobile.removeClass('fixed-top');
        sidebar.toggleClass('sidebar-toggled-block').removeClass('sidebar-toggled-none');
    }else if (windowSize >= 400 && windowSize <= 949){ // Ipad & Mobile
        sidebar.toggleClass('sidebar-toggled-none').removeClass('sidebar-toggled-block');
        sidebarBrand.addClass('sidebar-brand-mobile');
        topbarMobile.addClass('fixed-top');
        contentContainer.addClass('mt-90');
    }else{ // Minim Device
        sidebar.toggleClass('sidebar-toggled-none').removeClass('sidebar-toggled-block');
        sidebarBrand.addClass('sidebar-brand-mobile');
        topbarMobile.addClass('fixed-top');
        contentContainer.addClass('mt-90');
    }

    $('#btnToggler').click(function () { 
        $('#togglerDekstopIcon').toggleClass('fa-bars fa-xmark');
        $('#togglerMobileIcon').toggleClass('fa-bars fa-xmark');
        function checkWidth() {
            var windowSize = windowPage.width();
        
            if (windowSize >= 950) { // Dekstop
                topbarMobile.removeClass('fixed-top');
                sidebar.toggleClass('sidebar-toggled-none').removeClass('sidebar-toggled-block');
            }else if (windowSize >= 400 && windowSize <= 949){ // Ipad & Mobile
                topbarMobile.addClass('fixed-top');
                sidebar.toggleClass('sidebar-toggled-block').removeClass('sidebar-toggled-none');
                sidebarBrand.addClass('sidebar-brand-mobile');
            }else{ // Minim Device
                topbarMobile.addClass('fixed-top');
                sidebar.toggleClass('sidebar-toggled-block').removeClass('sidebar-toggled-none');
                sidebarBrand.addClass('sidebar-brand-mobile');
            }
        }

        checkWidth();
        $(windowPage).resize(checkWidth);
    });
}

function scrollTop() {
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('#btnScrollTop').fadeIn();
        } else {
            $('#btnScrollTop').fadeOut();
        }
    });

    $('#btnScrollTop').click(function () {
        $('html, body').animate({scrollTop : 0}, 0);
    });
}

function settingShowHide() {
    $('#btnProfileInformation').click(function () {
        $('#profileInformationContainer').removeClass('d-none');
        $('#accountContainer').addClass('d-none');
        $('#securityContainer').addClass('d-none');
        $('#preferencesContainer').addClass('d-none');
    });

    $('#btnAccountSetting').click(function () {
        $('#profileInformationContainer').addClass('d-none');
        $('#accountContainer').removeClass('d-none');
        $('#securityContainer').addClass('d-none');
        $('#preferencesContainer').addClass('d-none');
    });

    $('#btnSecuritySetting').click(function () {
        $('#profileInformationContainer').addClass('d-none');
        $('#accountContainer').addClass('d-none');
        $('#securityContainer').removeClass('d-none');
        $('#preferencesContainer').addClass('d-none');
    });

    $('#btnPreferences').click(function () {
        $('#profileInformationContainer').addClass('d-none');
        $('#accountContainer').addClass('d-none');
        $('#securityContainer').addClass('d-none');
        $('#preferencesContainer').removeClass('d-none');
    });
}

/* Format Rupiah Output*/
function rupiahOutput (bilangan) {
    var	reverse = bilangan.toString().split('').reverse().join(''),
        rupiah 	= reverse.match(/\d{1,3}/g);
        rupiah	= rupiah.join('.').split('').reverse().join('');
    
    // Cetak hasil	
    return "Rp. " + rupiah;
}

function btnIconCollapseToggle (iconToggle) {
    $(iconToggle).toggleClass('fa-angle-right fa-angle-down');
}