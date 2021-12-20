$(function(){
/*
var brand = [];
var line = [];
var client = [];
var url = [];
var image = [];
var caption = []; 
var quotient = 0; */
var root = "./images/";
//var root = "../brailsford.info/images/";
var k = 0;
var height = window.innerHeight;
var width = window.innerWidth;
var slideWidth = width * 0.88;
var slideMaxHeight = 0;
var slideMargin = (width - slideWidth) / 2;
var padding = 0;
var	tileNames = [];
var	tilesInOrder = [];
// var columnGap = 0;
// var columnWidth = 0;
var imgHeight = 600;
// var today = new Date();

/*
background();

function background(){
	var day = today.getDay() + 1;
	var hours = today.getHours();
	if (hours < 12) {
		var image = (day * 2) - 2;
	}  else  {
		var image = (day * 2) - 1;
	}
	$.getJSON("backgrounds.json", function(json){
		$("#photo").html('<img class="background" src="./backgrounds/' + json.backgrounds[image] + '" alt="" />');
		var backgroundHeight = json.backgrounds[image].height();
	});
}
*/
$("#photo").html('<img class="background" src="./background.jpg" alt="" />');
		
function resizeElements(){
	height = window.innerHeight;
	width = window.innerWidth;	
	slideWidth = Math.floor(width * 0.88);
	if (slideWidth > 750) {
		slideMargin = Math.floor((width - slideWidth) / 2);
	} else {
		slideWidth = 750;
		slideMargin = 50;
	}
	slideMaxHeight = 0;
	padding = Math.floor(0.07 * (slideWidth - 475));
	slidePlusMargin = slideWidth + 30;
	var carouselHeight = height - 100;
	$("#menu span").css({"right": 0, "position": "absolute"});
		$("#menu").css({
		"width": slideWidth,
		"left": slideMargin
	});
	$("#pageHolder").css({
		"width": slideWidth,
		"left": slideMargin,
		"height": carouselHeight
		});
	$("#carousel").css({
		"width": slideWidth,
		"left": slideMargin,
		"height": carouselHeight
		});
	width = k * slidePlusMargin;
	$("#slides").css({ 
		"width": width + "px"
	});	
	$("#slides").css({
		"left": "-" + slidePlusMargin + "px"
	});
	$("#slides li").css({
		"width": slideWidth
	});
	$(".menu").css("margin-right", padding);
	imgHeight = $(".brand").height();
	$(".nav").css({
		"height": imgHeight
	});
	$("#easter").css({
		"width": slideWidth,
		"left": slideMargin,
		"height": imgHeight
	});
	$("#egg").css({
		"top": imgHeight
	});
	$(".client").css("color", "#8FF0E0");
	$(".text").css("color", "#FFF");
}

var slidePlusMargin = slideWidth + 30;
$("#slides").css("left", "-" + slidePlusMargin);
/*
function fetchOriginalMethod(){
	$.getJSON("guidelines.json", function(json){
		var brands = json.brands;
		for (var i=0;i<brands.length;i++){
			for(var j=0;j<brands[i].images.length;j++){
				brand[k] = brands[i].brand;
				line[k] = brands[i].line;
				client[k] = brands[i].client;
				url[k] = brands[i].url;
				image[k] = brands[i].images[j].photo;
				caption[k] = brands[i].images[j].caption; 
					var str = image[k];
					var res = str.charAt(str.length-5);
					if ( res == "1") {
						var brandEntry = "<span class='client' style='font-weight:bold;'>" + brand[k] + "</span>";
					}  else  {
						brandEntry = "";
					}
				if (client[k] == "") {
					var clientEntry = "";
				}  else  { 
					if ( res == "1") {
						clientEntry = "<span class='client'>Client: " + client[k] + "</span>";
					}  else  {
						clientEntry = "";
					}
				}
				var text = "<li class='brandHolder'>";
				text += "<img class='brand' src='" + root + image[k] + "' alt=''/><div class='text'>" + brandEntry + "<br />" + caption[k] + "<br /><span class='client'>" + clientEntry+ "</span></div>";
				text += "</li>";
				$("#slides").append(text);
				k++;
			}
		}
	}).done(function(){
		width = k * slidePlusMargin;
		$("#slides").css("width", width + "px");
		$("#slides li:first").before($("#slides li:last"));
		$("#slides").css("left", "-" + slidePlusMargin + "px");
		$("#slides li").css("width", slideWidth);
		imgHeight = $(".brand").height();
		$(".nav").css({
			"height": imgHeight
		});
		$("#easter").css({
			"height": imgHeight
		});
//	changeTexts(quotient);
//	$(".client").css("color", "#8FF0E0");
//	$(".text").css("color", "#FFF")
	});
}
*/
//fetchOriginalMethod();

resizeElements();

$(window).resize(function(){
	resizeElements();
	imgHeight = $(".brand").height();
		$(".nav").css({
			"height": imgHeight
		});
		$("#easter").css({
			"height": imgHeight
		});
});



$("#slides, #right, #left").on("swipeleft", function(){
	swipeLeft();
});

$("#slides, #right, #left").on("swiperight", function(){
	swipeRight();
})

function swipeLeft() {
	$("#slides").animate({
		"left": "-=" + slidePlusMargin + "px"
	}, 500, "easeInOutSine", function(){
		$("#slides li:last").after($("#slides li:first"));
		$("#slides").css("left", "+=" + slidePlusMargin);
	});
}

function swipeRight() {
	$("#slides").animate({
		"left": "+=" + slidePlusMargin + "px"
	}, 500, "easeInOutSine", function(){
		$("#slides li:first").before($("#slides li:last"));
		$("#slides").css("left", "-=" + slidePlusMargin);
	});
}

$("#right").on("click", function(){
	swipeLeft();
})

$("#left").on("click", function(){
	swipeRight();
})

$("#carousel").hide();

$("#work").on("click", function(){
	$("#carousel").show();
	$("#pageHolder").hide();
	resizeElements();
});

$("#contact").on("click", function(){
	$("#pageHolder").show();
	$("#carousel").hide();
});

$("#brief").on("click", function(){
	$("#pageHolder").show();
	$("#carousel").hide();
});

var group3 = $("#pageHolder p").add($("#pageHolder li"));
var group4 = $("#pageHolder span").add($("#pageHolder a")).add($("#pageHolder a:active")).add($("#pageHolder a:hover")).add($("#pageHolder a:visited"));

group3.css("color", "#DAFAF6");
group4.css("color", "#44E6CC");
/*
var purple = "#ff0087";
var orange = "#f60";
var green = "#00e8b3";
var color1 = "";
var color2 = "";
var color3 = green;
var color4 = "";
var group1 = $(".group1");
var group2 = $(".group2").add($(".menu a")).add($(".menu a:active")).add($(".menu a:hover")).add($(".menu a:visited"));

function texts(){
	var seconds = today.getSeconds();
	quotient = Math.floor(seconds / 15);
	changeTexts(quotient);
}

// Color combinations are OG, GO, GP, PG
// contact text and caption text is always green

function changeTexts(quotient){
	
	switch (quotient){
		case 0:
			color1 = orange;
			color2 = green;
			color4 = orange;
			break;
		case 1:
			color1 = green;
			color2 = orange;
			color4 = orange;
			break;
		case 2:
			color1 = green;
			color2 = purple;
			color4 = purple;
			break;
		case 3:
			color1 = purple;
			color2 = green;
			color4 = purple;
			break;
	};
	group1.css("color", color1);
	group2.css("color", color2);
	group3.css("color", color3);
	group4.css("color", color4);
	$(".client").css("color", color4);
	$(".text").css("color", color3);
	$("#egg").css("color", color4);
}

texts();
*/
$("#egg").on("click", function(){
	$(this).css("opacity", 1);
	$(this).animate({
		opacity: 0
	}, 2500);
	$("#carousel").hide();
	$("#pageHolder").hide(),
	$("#gallery").show();
})

function fetchBySpecifiedOrder(){
	tileNames = [];
	tilesInOrder = [];
	var counter = 0;
	$.get('displayOrder.txt', function(data) {
		tileNames = data.split("\n"); 
	}, 'text')
	.done(function() {
		$.getJSON("guidelines.json", function(json){
			var brands = json.brands;
			for (var i=0;i<tileNames.length;i++) {
				var name = tileNames[i];
				for (var j=0;j<brands.length;j++) {
					var brand = brands[j];
					if (brand.title == name) {
						for (var k=0;k<brand.images.length;k++) {
							var image = brand.images[k];
							var tile = {
								"position": counter,
								"brand": brand.brand,
								"line": brand.line,
								"client": brand.client,
								"url": brand.url,
								"image": image.photo,
								"caption": image.caption
							}
							tilesInOrder.push(tile);
							counter++;
						}
					}
				}
			}
		})
	.done(function(){
		k = tilesInOrder.length;
		for (var i=0;i<tilesInOrder.length;i++) {
			var tile = tilesInOrder[i];
			var str = tile.image;
			var res = str.charAt(str.length-5);
			if ( res == "1") {
				var brandEntry = "<span class='client' style='font-weight:bold;'>" + tile.brand + "</span>";
			}  else  {
				brandEntry = "";
			}
			if (tile.client == "") {
				var clientEntry = "";
			}  else  { 
				if ( res == "1") {
					clientEntry = "<span class='client'>Client: " + tile.client + "</span>";
				}  else  {
					clientEntry = "";
				}
			}
			var text = "<li class='brandHolder'>";
			text += "<img class='brand' src='" + root + str + "' alt=''/><div class='text'>" + brandEntry + "<br />" + tile.caption + "<br /><span class='client'>" + clientEntry+ "</span></div>";
			text += "</li>";
			if (i == (tilesInOrder.length - 1)) {
				$("#slides").prepend(text);
			}  else  {
				$("#slides").append(text);
			}
			}
		})
	})
	.done(function(){
		width = k * slidePlusMargin;
		$("#slides").css("width", width + "px");
		$("#slides li:first").before($("#slides li:last"));
		$("#slides").css("left", 0); //"-" + slidePlusMargin + "px");
		$("#slides li").css("width", slideWidth);
		imgHeight = $(".brand").height();
		$(".nav").css({
			"height": imgHeight
		});
		$("#easter").css({
			"height": imgHeight
		});
		//	changeTexts(quotient);
		$(".client").css("color", "#8FF0E0");
		$(".text").css("color", "#FFF");
		resizeElements();
	})
//	alert();
}

fetchBySpecifiedOrder();
	
})


