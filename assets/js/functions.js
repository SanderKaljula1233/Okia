$( document ).ready(function() {

  $('#navList a').click(function(e) {
    $(this).siblings('a').removeClass('active');
    $(this).addClass('active');

    $('.contact__elem .container .row').hide();
    var selectTab = $(this).attr("href");
    $(selectTab).css("display", "flex").fadeIn();
    e.preventDefault();
  });

  $.getJSON('people.json', function(data) {
      var persons = data;
      var research = document.getElementById("research");
      var marketing = document.getElementById("marketing");
      var legal = document.getElementById("legal");

      var researchContact = persons.map( function(person) {
        if(person.department === "Research and Development") {
          var phone = person.phone ? person.phone : "No number";
          var email = person.email ? person.email : "No email";

          return '<div class="card col-lg-6"><div class="card-body"><ul class="list-unstyled"><li class="name__elem">' + person.first_name +' '+ person.last_name + '</li><li class="pos__elem">' + person.position + '</li><li class="info__elem">' + phone + '</li><li class="info__elem">' + email + '</li></ul><img src="' + person.thumbnail + '" /></div></div>';
        } 
      }).join('');
    
      var marketingContact = persons.map( function(person) {

        if(person.department === "Marketing") {
          var phone = person.phone ? person.phone : "No number";
          var email = person.email ? person.email : "No email";

          return '<div class="card col-lg-6"><div class="card-body"><ul class="list-unstyled"><li class="name__elem">' + person.first_name +' '+ person.last_name + '</li><li class="pos__elem">' + person.position + '</li><li class="info__elem">' + phone + '</li><li class="info__elem">' + email + '</li></ul><img src="' + person.thumbnail + '" /></div></div>';
        } 
      }).join('');
    
      var legalContact = persons.map( function(person) {
        if(person.department === "Legal") {
          var phone = person.phone ? person.phone : "No number";
          var email = person.email ? person.email : "No email";
          
          return '<div class="card col-lg-6"><div class="card-body"><ul class="list-unstyled"><li class="name__elem">' + person.first_name +' '+ person.last_name + '</li><li class="pos__elem">' + person.position + '</li><li class="info__elem">' + phone + '</li><li class="info__elem">' + email + '</li></ul><img src="' + person.thumbnail + '" /></div></div>';
        } 
      }).join('');
    
      research.innerHTML = researchContact;
      marketing.innerHTML = marketingContact;
      legal.innerHTML = legalContact;
    
  });
});