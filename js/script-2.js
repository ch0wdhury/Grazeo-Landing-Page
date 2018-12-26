  $(document).ready(function () {
  	$(".reg_btn1").click(function () {
      $(".title").text("Become a Grazeo Affiliate");
      $(".lead").text("And earn money by sharing ads through your social media");
      $(".custom_btn").attr("href", "http://www.facebook.com/")
      	$(this).addClass('active').siblings().removeClass('active');
    });
    $(".reg_btn2").click(function () {
      $(".title").text("Become a Seller");
      $(".lead").text("And only pay marketing for actual sales");
      $(".custom_btn").attr("href", "http://www.google.com/")
      	$(this).addClass('active').siblings().removeClass('active');
    });
  }); 


  $(".animsition").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-left',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '',
    timeout: false,
    timeoutCountdown: 3000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
