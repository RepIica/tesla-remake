$(document).ready(function(){
	$('.dropdown-content').hide();
    $('.dropdown').click(function(){
        $('.dropdown-content').toggle(); 
    });
    $("#newinv, #order").hide();

    $('img, #newinv, #order').hover(
	    function(){
	    	$("#newinv, #order").show();
	    },
	    function(){
	    	$("#newinv, #order").hide();    
	    }
	);
	
});

