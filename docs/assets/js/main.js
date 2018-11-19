//var sectionHeight = function() {
  //var total    = $(window).height(),
    //  $section = $('section').css('height','auto');

  //if ($section.outerHeight(true) < total) {
    //var margin = $section.outerHeight(true) - $section.height();
    //$section.height(total - margin - 20);
//  } else {
//    $section.css('height','auto');
  //}
//}

//$(window).resize(sectionHeight);

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

$(function() {
  $("main h1, main h2").each(function(){
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });
  
  $(".tag-h1:contains(Section 508 Conformance Tests)").each(function(){
    $(this).attr("id", "conTests");
    var $set = $(this)
      .nextUntil(".tag-h1")
      .add();
    $set.wrapAll('<ul class="testSection" id="testSection" />');
  });
  
  $("#conTests").append($("#testSection"));

  //sectionHeight();

  //$('img').on('load', sectionHeight);
});
