// ******************************* Configuration **************************//
// ********************__author__="Noble Ackerson"************************//
// ********************************* Start ******************************// 


		

/* Scroll Button */

$(window).load(function(){
	

	if ($('.landing_enter').html()) {
		
		setTimeout("$('.landing_enter').removeClass('hided')",500);
	}
	if ($('.landing_about').html()) {
		
		setTimeout("$('.landing_about').removeClass('hided')",1000);
	}
	
/*-----------------------------------------------------------------------------------------------------------------------*/	
	
	/* Logo Animation*/
	
	if ($('.logo').html()) {
		
		setTimeout("$('.logo')",500);
	$(".logo").animate({top: -94,'opacity':'1'}, 1200);
	}

});		

/*-----------------------------------------------------------------------------------------------------------------------*/	


// Javascript for the GridRotator

$(document).ready(function() {
$(function() {
			
$( '#ri-grid' ).gridrotator( {
					
} );
			
});
});		

/*-----------------------------------------------------------------------------------------------------------------------*/	


/* Javascript for Block heights */

$(document).ready(function() {

	
	/* Block heights */
	$('.blockaboutus').css({ 'min-height' : $(window).height()-60 });

	$(window).resize(function() {
		$('.blockaboutus').animate({ 'min-height' : $(window).height()-60 });
	});

   /* Block heights */
	$('.blockhome').css({ 'min-height' : $(window).height()-60 });

	$(window).resize(function() {
		$('.blockhome').animate({ 'min-height' : $(window).height()-60 });
	});
	
	/* Block heights */
	$('.blockhome-slideshow').css({ 'min-height' : $(window).height()-60 });

	$(window).resize(function() {
		$('.blockhome-slideshow').animate({ 'min-height' : $(window).height()-60 });
	});
	
	
	/* Block heights */
	$('.blocklastpage').css({ 'min-height' : $(window).height()+0 });

	$(window).resize(function() {
		$('.blocklastpage').animate({ 'min-height' : $(window).height()+0 });
	});
	
/*-----------------------------------------------------------------------------------------------------------------------*/	
	

/* Scroll */
	$.localScroll({
		easing : 'easeInOutExpo',
		hash : true
	});

   
/*-----------------------------------------------------------------------------------------------------------------------*/	
	
/*Preload Function*/
$(document).ready(function () {
    $("body").queryLoader2({
        barColor: "#fff",
        backgroundColor: "#000",
        percentage: true,
        barHeight: 3,
        completeAnimation: "grow",
        minimumTime: 100
    });
});

/*-----------------------------------------------------------------------------------------------------------------------*/	

// jQuery countdown function
	$(document).ready(function() {
	$('.countdown').countdown({until: date, 
    	layout: $('.countdown').html()
	});
	});


	 date 		= new Date("2013/02/18"); // countdown end date set year / month / day
	
/*-----------------------------------------------------------------------------------------------------------------------*/	

// Google map customization & location //

{
		/*setting up the coordinate for the gmap*/
		var myLatlng = new google.maps.LatLng(34.0836299,-118.3337413,true);
		/*setting up the map options*/
		var myOptions = {
			zoom:5,
			streetViewControl: false,
			disableDefaultUI: true,
			zoomControl: true,
			center: new google.maps.LatLng(34.0836299, -105.3337413), /*setting up the coordinate for position of map*/
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			
			
		}
		
		
		
		/*styling the gmap by changing the color of the map options*/
		var styles = [ {
			
		 featureType: "transit", elementType: "all", stylers: [ { visibility: "simplified" }, { color: "#000000" } ] },
		 {featureType: "water", elementType: "all", stylers: [ { visibility: "simplified" }, { color: "#282828" } ] },{
	     featureType: "road", elementType: "all", stylers: [ { visibility: "simplified" }, { color: "#000000" } ] },{
	     featureType: "landscape", elementType: "all", stylers: [ { visibility: "simplified" }, { color: "#000000" } ] },{
	     featureType: "poi", elementType: "all", stylers: [ { visibility: "simplified" }, { color: "#000000" } ] },{ 
	     featureType: "all", elementType: "all", stylers: [ { visibility: "simplified" }, { "weight": 0 } ] } ];
	
		 
/*Another style*/	 
/*
	var stylez = [ {
 featureType: "transit.station", elementType: "all", stylers: [ { visibility: "on" }, { hue: "#1100ff" } ] },{
 featureType: "water", elementType: "all", stylers: [ { visibility: "on" }, { hue: "#0011ff" } ] },{
 featureType: "road.highway", elementType: "all", stylers: [ { visibility: "on" }, { hue: "#ff7700" } ] },{
 featureType: "landscape.man_made", elementType: "all", stylers: [ { visibility: "on" }, { hue: "#00a1ff" }, { saturation: 66 }, { lightness: 0 } ] },{
 featureType: "road.local", elementType: "all", stylers: [ { hue: "#08ff00" }, { saturation: 51 } ] },{
 featureType: "all", elementType: "all", stylers: [ ] } ];
*/		
		 
		        
		/*populating the gmap in the html*/
		var map = new google.maps.Map(document.getElementById('map'),myOptions);
		map.setOptions({styles: styles});
		
		}
		
		/*setting up the pointer shape of the map in this case a circle*/
		var pointer = {
				path: google.maps.SymbolPath.CIRCLE,
			    fillOpacity: 1,
			    fillColor: '#74b727',
			    strokeOpacity: 0,
			    scale: 8
		};

			
			/*First - setting up the marker of the map*/
			var myLatLng = new google.maps.LatLng(34.0836299,-118.3337413);
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon: pointer
				
			});

});


/*-----------------------------------------------------------------------------------------------------------------------*/	

<!-- Slide-out Demo Background -->
$(document).ready(function() {
 $(function(){
                                        $('.slide-out-div').tabSlideOut({
                                                tabHandle: '.handle',     
                                                pathToTabImage: 'demo/settings.png', 
                                                imageHeight: '60px',    
                                                imageWidth: '30px', 
                                                tabLocation: 'left',
                                                speed: 300,       
                                                action: 'click',   
                                                topPos: '50px', 
                                                fixedPosition: true  
                                        });
										
						});	

	
});

/*-----------------------------------------------------------------------------------------------------------------------*/	

/* Javascript for blink arrow */
$(document).ready(function() {

  // init blink  arrow
	blink('.container_arrow');
	
function blink(selector){
	$(selector).fadeOut('slow', function(){
    	$(this).fadeIn('slow', function(){
       		blink(this);
    	});	
	});
}	

});

/*-----------------------------------------------------------------------------------------------------------------------*/	

<!-- end of all-->