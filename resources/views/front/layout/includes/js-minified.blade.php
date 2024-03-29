
<script  src="/dist/minified.js"></script>
<!-- <script  src="/js/smoothscroll.min.js"></script> -->

<!--Custom JavaScript for Klinik Template-->
@if(!$is_rtl)
    <script src="/dist/ltr-all.js?t={{time()}}"></script>
@else
    <script src="/js/bootstrap4rtl.min.js"></script>
    <script  src="/dist/rtl-all.js?t={{time()}}"></script>
@endif
<link href="{{asset('/js/languages/'.App::getLocale().'.js?t='.time())}}" rel="stylesheet">
<script>
    $(window).scroll(function(e){
        if ($(this).scrollTop() > 100) {
            $(".fix-social-bar").css("visibility", "visible");
            // $("#mobile-menu--hdr").css("background-color","rgba(1, 82, 89, 0.8)");
        } else {
            $(".fix-social-bar").css("visibility", "hidden");
            // $("#mobile-menu--hdr").css("background-color","transparent")
        }
        if ($(this).scrollTop() > 10) {
            // $(".fix-social-bar").css("visibility", "visible");
            $("#mobile-menu--hdr").css("background","linear-gradient(-192deg, rgba(0, 219, 158, 0.68), rgba(0, 90, 133, 0.68))");
            $("#header-1").css("background","linear-gradient(-192deg, rgba(0, 219, 158, 0.68), rgba(0, 90, 133, 0.68))");
        } else {
            // $(".fix-social-bar").css("visibility", "hidden");
            $("#mobile-menu--hdr").css("background","transparent")
            $("#header-1").css("background","transparent")
        }
    });
    $(window).load(function() {
        $('.preloader').fadeOut('slow');
    });

    $('body').on('click', '.slider-appointment a, #appointment-now, .hdr-apointment', function () {
        $('#make-appointment').modal('show');
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos ) {
            // if( prevScrollpos + 500 > currentScrollPos ){
            setTimeout(() =>{
                document.getElementById("header-1").style.top = "0";
                document.getElementById("mobile-menu--hdr").style.top = "0";
            },200);

            // }
        } else {
            document.getElementById("header-1").style.top = "-76px";
            document.getElementById("mobile-menu--hdr").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }

    // let owl = $('.owl-carousel');
    function isMobile()
    {
        return (/Android|webOS|iPhone|iPad|iPod|Windows Phone|IEMobile|Mobile|BlackBerry/i.test(navigator.userAgent) ); 
    }
    var elm = jQuery('a[href*="whatsapp.com"]');
    jQuery.each(elm, function(index, value){
        var item = jQuery(value).attr('href');
        if(item.indexOf('chat') != -1){
            //nothing
        } else if (item.indexOf('web') != -1 && isMobile()){
            var itemLink = item;
            var newLink = itemLink.replace('web', 'api');
            jQuery(value).attr("href", newLink);
        } else if (item.indexOf('api') != -1 && !isMobile()){
            var itemLink = item;
            var newLink = itemLink.replace('api', 'web');
            jQuery(value).attr("href", newLink);
        } 
    });


    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
        // ... more custom settings?
    });
    @if(Session::has('message'))

        // TODO: change Controllers to use AlertsMessages trait... then remove this
        var alertType = {!! json_encode(Session::get('alert-type', 'info')) !!};
        var alertMessage = {!! json_encode(Session::get('message')) !!};
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-bottom-left",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        var alerter = toastr[alertType];
        @if($is_rtl)
            toastr.options.rtl = true;
        @endif
        if (alerter) {
            alerter(alertMessage);
        } else {
            toastr.error("toastr alert-type " + alertType + " is unknown");
        }

    @endif

    MaterialTextfield.prototype.checkValidity = function () {
    if (this.input_.validity.valid) {
        this.element_.classList.remove(this.CssClasses_.IS_INVALID);
    } else {
        if (this.element_.getElementsByTagName('input')[0].value.length > 0) {
            this.element_.classList.add(this.CssClasses_.IS_INVALID);
        }
    }
};
$(function() {
    $("iframe[data-src]").Lazy();
});
</script>
@yield('js')