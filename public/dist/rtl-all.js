$("#testimonial-slider").owlCarousel({center:!0,autoplay:!0,items:1,dots:!0,rtl:!0,loop:!0,smartSpeed:1e3,autoplayHoverPause:!0,responsiveClass:!0,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']}),$("#hm-testimonial .owl-prev").dblclick(()=>{$("#testimonial-slider.owl-carousel").trigger("prev.owl.carousel"),alert("salam")}),$("#hm-testimonial .owl-next").click(()=>{$("#testimonial-slider.owl-carousel").trigger("next.owl.carousel")}),$("#hm-packages-slider").owlCarousel({center:!0,autoplay:!0,rtl:!0,loop:!0,smartSpeed:1e3,autoplayTimeout:3e3,autoplayHoverPause:!0,responsiveClass:!0,nav:!0,navContainer:".owl-theme .owl-nav",navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:2},992:{items:3}}}),$(".theme-owlslider").owlCarousel({items:1,rtl:!0}),$(".gallery-owl-carousel").owlCarousel({loop:!0,rtl:!0,center:!0,autoplay:!0,smartSpeed:1e3,autoplayTimeout:2e3,autoplayHoverPause:!0,responsiveClass:!0,nav:!0,navContainer:".owl-carousel .owl-nav",navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],responsive:{0:{items:1},600:{items:2},992:{items:3}}}),$("body").on("click","#mobile-menu--bar",function(){var e=$("#mobile-menu--tbl-cell"),a=$("#mobile-menu--overlay");$("#mobile-menu--bar").addClass("mobile-menu-close"),$("#mobile-menu--bar a i").addClass("fa-times"),$("#mobile-menu--bar a i").removeClass("fa-bars"),$("body").css("overflow","hidden"),e.css("right","0"),a.css("visibility","visible")}),$("body").on("click",".mobile-menu-close",function(){var e=$("#mobile-menu--tbl-cell"),a=$("#mobile-menu--overlay");$("#mobile-menu--bar").removeClass("mobile-menu-close"),$("#mobile-menu--bar a i").addClass("fa-bars"),$("#mobile-menu--bar a i").removeClass("fa-times"),$("body").css("overflow","visible"),e.css("right","-130%"),a.css("visibility","hidden")}),$("body").on("click","#mobile-menu--overlay",function(){var e=$("#mobile-menu--tbl-cell"),a=$("#mobile-menu--overlay");$("#mobile-menu--bar").removeClass("mobile-menu-close"),$("#mobile-menu--bar a i").addClass("fa-bars"),$("#mobile-menu--bar a i").removeClass("fa-times"),$("body").css("overflow","visible"),e.css("right","-130%"),a.css("visibility","hidden")}),$(window).resize(function(){var e=$(".menu"),a=$("#mobile-menu--tbl-cell");$(window).width()>992?($("body").css("overflow","visible"),e.css("display","block"),e.css("right","inherit")):(e.css("display","none"),a.css("right","-130%"),$("#shortcodes-menu").trigger("detach.ScrollToFixed"))}),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})}),$(window).on("load",function(){$(".slider-wrapper").flexslider({animation:"fade",animationLoop:!0,pauseOnHover:!0,keyboard:!0,controlNav:!1}),$(".slider-height").removeClass()}),$('[data-toggle="tooltip"]').tooltip(),$(".theme-flexslider").flexslider({animation:"slide",animationLoop:!0,pauseOnHover:!0}),$("#hdr-wrapper").scrollToFixed(),$(".hdr-center-menu, .header-transparent-menu, #header-1").scrollToFixed({preFixed:function(){$("#header-1, .hdr-center-menu, .header-transparent-menu").addClass("hdr-fixed")},postFixed:function(){$("#header-1, .hdr-center-menu, .header-transparent-menu").removeClass("hdr-fixed")}}),$("body").on("click",".hdr-search",function(){var e=$(this);"none"===$(".search-banner").css("display")?($(".search-banner").slideDown(),e.find(".fa").addClass("fa-close")):($(".search-banner").slideUp(),e.find(".fa").removeClass("fa-close"))}),$(".theme-accordion:nth-child(1) .theme-accordion-bdy").slideDown(),$(".theme-accordion:nth-child(1) .theme-accordion-control .fa").addClass("fa-minus"),$("body").on("click",".theme-accordion-hdr",function(){var e=$(this);$(".theme-accordion-bdy").slideUp(),$(".theme-accordion-control .fa").removeClass("fa-minus"),"none"===e.parents(".theme-accordion").find(".theme-accordion-bdy").css("display")?(e.find(".theme-accordion-control .fa").addClass("fa-minus"),e.parents(".theme-accordion").find(".theme-accordion-bdy").slideDown()):(e.find(".theme-accordion-control .fa").removeClass("fa-minus"),e.parents(".theme-accordion").find(".theme-accordion-bdy").slideUp())}),$("body").on("click",".button-process",function(){var e=$(this);e.button("loading"),setTimeout(function(){e.button("reset")},8e3)});var appointment_form="sidebar";function makeAppointment(e){$.ajax({type:"post",url:"inc/make-appointment.php",data:{name:e.name,email:e.email,mobile:e.mobile,department:e.department,doctor:e.doctor,date:e.date},error:function(){"sidebar"===appointment_form?($(".side-error .alert").remove(),$(".side-error").append('<div class="alert alert-danger" role="alert">Server Error Please try again after some time...</div>')):($(".appointment-error .alert").remove(),$(".appointment-error").append('<div class="alert alert-danger" role="alert">Server Error Please try again after some time...</div>'))},success:function(e){"1"===(e=$.parseJSON(e)).flag?"sidebar"===appointment_form?($(".side-appointment").button("reset"),$(".side-error .alert").remove(),$(".side-error").append('<div class="alert alert-danger" role="alert">Please enter/select '+e.error+" ! ! !</div>")):($(".make-appointment").button("reset"),$(".appointment-error .alert").remove(),$(".appointment-error").append('<div class="alert alert-danger" role="alert">Please enter/select '+e.error+" ! ! !</div>")):"sidebar"===appointment_form?($(".side-appointment").attr("disabled",!0),$(".side-error .alert").remove(),$(".side-error").append('<div class="alert alert-success" role="alert">Appointment Created Successfully.</div>')):($(".make-appointment").attr("disabled",!0),$(".appointment-error .alert").remove(),$(".appointment-error").append('<div class="alert alert-success" role="alert">Appointment Created Successfully.</div>'))}})}$("body").on("click",".side-appointment",function(){$(this).button("loading");var e={};e.name=$("#sideapnt-name").val(),e.email=$("#sideapnt-email").val(),e.mobile=$("#sideapnt-mobile").val(),e.department=$("#sideapnt-department").val(),e.doctor=$("#sideapnt-doctor").val(),e.date=$("#sideapnt-date").val(),makeAppointment(e)}),$("body").on("click",".make-appointment",function(){$(this).button("loading");var e={};appointment_form="popup",e.name=$("#appointment-name").val(),e.email=$("#appointment-email").val(),e.mobile=$("#appointment-mobile").val(),e.department=$("#appointment-department").val(),e.doctor=$("#appointment-doctor").val(),e.date=$("#appointment-date").val(),makeAppointment(e)}),$("body").on("click",".contact-submit",function(){var e=$(this),a={};e.button("loading"),a.name=$("#contact-name").val(),a.email=$("#contact-email").val(),a.mobile=$("#contact-mobile").val(),a.subject=$("#contact-subject").val(),a.message=$("#contact-message").val(),$.ajax({type:"post",url:"inc/contact-form.php",data:{name:a.name,email:a.email,mobile:a.mobile,subject:a.subject,message:a.message},error:function(){$(".contact-error .alert").remove(),$(".contact-error").append('<div class="alert alert-danger" role="alert">Server Error Please try again after some time...</div>')},success:function(a){var t=$.parseJSON(a);"1"===t.flag?(e.button("reset"),$(".contact-error .alert").remove(),$(".contact-error").append('<div class="alert alert-danger" role="alert">Please enter '+t.error+" ! ! !</div>")):(e.button("reset"),$(".contact-error .alert").remove(),$(".contact-error").append('<div class="alert alert-success" role="alert">Request Created Successfully.</div>'))}})}),$(".counter").counterUp({delay:10,time:400}),$("body").on("click",".slider-appointment a, #appointment-now, .hdr-apointment",function(){$("#appointment").modal("show")}),$("body").on("click",".myappointment-view a",function(){$("#myappointment-popup").modal("show")}),$("body").on("click",".myappointment-view a",function(){$("#myfeedback-popup").modal("show")}),$(".blog-list-post p span").text(function(e,a){return a.substr(0,300)}),$(".service-description span").text(function(e,a){return a.substr(0,330)}),$("body").on("click",".package-page--packages-button ",function(){$("#package-page--book-modal").modal("show")}),$(".gallery-block").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),$(".type-filter").click(function(){var e=$(this),a=e.attr("data-filter");$(".type-filter").removeClass("active"),e.addClass("active"),"all"==a?$(".t-filter").show("1000"):($(".t-filter").not("."+a).hide("3000"),$(".t-filter").filter("."+a).show("3000"))}),$(".city-filter").click(function(){var e=$(this),a=e.attr("data-filter");$(".city-filter").removeClass("active"),e.addClass("active"),"all"==a?$(".c-filter").show("1000"):($(".c-filter").not("."+a).hide("3000"),$(".c-filter").filter("."+a).show("3000"))}),$(".gallery-owl-carousel .owl-prev").dblclick(()=>{$(".owl-carousel").trigger("prev.owl.carousel")}),$(".gallery-owl-carousel .owl-next").dblclick(()=>{$(".owl-carousel").trigger("next.owl.carousel")});