
var Form =(function(){
	
	function init(){
		$('#privacy').change(function(){
			if($('#privacy').prop("checked")){
					$("#submit-btn").removeAttr("disabled");
				}else{
					$("#submit-btn").attr("disabled", "disabled");
				}
		  })
	};
	
	return{
		init:init
	}
	
	
})();

$(document).ready(function(e) {
    Form.init();

            $('.checkdisableb7').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox7').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox7").attr("disabled", true);             
					});
				} else {
					$('.cbox7').each(function() { //loop through each checkbox
						$(".cbox7").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb7


            $('.checkdisableb9').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox9').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox9").attr("disabled", true);             
					});
				} else {
					$('.cbox9').each(function() { //loop through each checkbox
						$(".cbox9").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb 9


    		 $('.checkdisableb13').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox13').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox13").attr("disabled", true);             
					});
				} else {
					$('.cbox13').each(function() { //loop through each checkbox
						$(".cbox13").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb 13	


    		 $('.checkdisableb15').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox15').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox15").attr("disabled", true);             
					});
				} else {
					$('.cbox15').each(function() { //loop through each checkbox
						$(".cbox15").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb 13	


    		  $('.checkdisableb12').click(function() {  //on click
				if (this.checked) { // check select status
					$('.cbox12').each(function() { //loop through each checkbox
					    this.checked = false; 
					    $(".cbox12").attr("disabled", true);             
					});
				} else {
					$('.cbox12').each(function() { //loop through each checkbox
						$(".cbox12").removeAttr("disabled");

					});
				}
    		});// end of class checkdisableb 12	

    		 //Word limit

    		var maxLength = 400;
			$('textarea').keyup(function() {
			  var length = $(this).val().length;
			  var length = maxLength-length;
			  $('#display_count').text(length);
			});




		/*var days = 10;
		var message = 'Please wait '+days+' days  before you can submit again.';
	
		$('#submit-btn').submit(function(e){
			e.preventDefault();
			var data = new Array();
			
			$('section').each(function(){
				var classname = $(this).attr('class');
				var value = new Array();
				if( $(this).find('input[type="radio"]').length > 0 ){
					value.push($(this).find('input[type="radio"]:checked:first').val());
				}
				else if( $(this).find('input[type="checkbox"]').length > 0 ){
					value.push( $(this).find('input[type="checkbox"]:checked').val() );
				}
				else if( $(this).find('textarea').length > 0 )
					value.push( $(this).find('textarea').val() );
				else if( $(this).find('select').length > 0 )
					value.push( $(this).find('select option:selected').val() );
				
				data.push(  { 	
								'class' : classname,
								'value' : value
							} );
			});
			

			console.log( data );
			//set_cookie( 'space_cookie', JSON.stringify( data ), days, '/' );
			$.cookie('space_cookie', JSON.stringify( data ), {expires : days, path: '/'});

			$('#formsubmit').submit();
				
		});
		
		if( $.cookie('space_cookie') ){
			var sections = JSON.parse( $.cookie('space_cookie') );
			console.log(sections);
			for( var i=0; i<sections.length; i++ ){
				var element = $('.'+sections[i].class);
				if( element.find('input[type="radio"]').length > 0 ){
					$(this).find('input[value="'+sections[i].value[0]+'"]').attr('checked', 'checked');
				}
				else if( element.find('input[type="checkbox"]').length > 0 ){
					element.find('input[type="checkbox"]').each(function(){
					
						for( var j=0; j<sections[i].value.length; j++ )
							if( $(this).val() == sections[i].value[j] )
								$(this).attr('checked', 'checked');
					});
					
						
				}
				else if( element.find('textarea').length > 0 )
					element.find('textarea').val( sections[i].value[0] );
				else if( $(this).find('select').length > 0 )
					element.find('select option[value="'+sections[i].value[0]+'"]').attr('selected', 'selected');
			}
			$('input, textarea, select').attr('disabled','disabled')
			alert(message);
		}
		else
			alert('no cookie');*/



});// end of document







