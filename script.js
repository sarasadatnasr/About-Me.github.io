$('.handle').on('click', function(){
  $('nav ul').toggleClass('showing');
});

$(document).ready(function(){
      $(".roledetails1").click(function(){
           $(".listeddetails1").toggle();
      });
});

$(document).ready(function(){
      $(".roledetails2").click(function(){
           $(".listeddetails2").toggle();
      });
});

$(document).ready(function(){
      $(".roledetails3").click(function(){
           $(".listeddetails3").toggle();
      });
});


function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  // Check if the sidebar has 'show' class and toggle it
  sidebar.classList.toggle('show');
}


$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('div');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});



