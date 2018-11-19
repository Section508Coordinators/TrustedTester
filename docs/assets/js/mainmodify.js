$(".tag-h1:contains(Section 508 Conformance Tests)").each(function(){
    var $set = $(this)
      .nextUntil(".tag-h1")
      .add();
    $set.wrapAll('<div class="testSection" />');
  });
