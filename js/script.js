 $(document).ready(function() {
    // var myUL = $('ul');
    // myUL.addClass('khoa').children().css('font-size','35');
    var count =0;
    $('button').on('click', function() {
         count++;
         $('#count').html(count).css('color','red').css('border','0.5px solid red').css('width','1rem').css('border-radius','50%').css('height','1rem').css('text-align','center');
         
    });
    $('#email').on('focus',function() {
      //set to empty string
       $(this).val('');
    })
      $('#updatesbutton').on('click', function() {
        var email = $('#email').val();
        if (email != ''){
          var valid = isValidEmailAddress(email);
          
          if (valid) {
            var message = 'Your email is ' + email + ' Thanks for subscribing';
            var title = "Aloha Shop Message"
            //alert('Your email is ' + email + ' Thanks for subscribing');
            alert(title, message);
          }
           
        }
        else{
          alert('You forgot to enter an email');
        }

      //console.log($('#email').val()  );
  });
 });

 function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

 function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    debugger;
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 4000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

// function subscribe() {
//   $('#updatesbutton').on('click', function() {
//       console.log($('#email').attr("value"));
//   });
// }  
