$(function () {
  $('#nav-btn').on('click', function () {
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});
$(function () {
  new WOW().init();
});
$(function () {
  $('#nav .anm').on('click', function () {
    $('#nav').toggleClass('-active');
    $('#nav-btn').toggleClass('-active');
  });
});

$('#nav #anm-features').click(function () {
  $('.features').hide();
  $('.features').fadeIn(1500);
  $('.inner').toggleClass('padding');
});
$('#nav #anm-service').click(function () {
  $('.service').hide();
  $('.service').fadeIn(1500);
});
$('#nav #anm-works').click(function () {
  $('.works').hide();
  $('.works').fadeIn(1500);
});
$('#nav #anm-flow').click(function () {
  $('.flow').hide();
  $('.flow').fadeIn(1500);
});
