// MENU
$("._icon_open").click(function() {
    $("._mob_menu").addClass("_mob_menu_open");
});
$("._icon_close").click(function() {
    $("._mob_menu").removeClass("_mob_menu_open");
});

// collapse
$('.accordion-toggle').click(function(e) {
  	e.preventDefault();  
    $("a:first-of-type").removeClass('chev');
    
    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        // $this.next().removeClass('chev');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .accordion-inner').removeClass('show');
        $this.parent().parent().find('li .accordion-inner').slideUp(350);
        $this.toggleClass('chev');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
