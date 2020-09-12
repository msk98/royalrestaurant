$(window).resize(function() {

    if ($(this).width() > 768) {
  
      $('.x').hide();
      $('.btn-lg').hide();
  
    } else {
  
      $('.x').show();
      $('.btn-lg').show();
  
      }
  
  });

  $(function () {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function count($this) {
        var current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            setTimeout(function () {
                $this.data("isCounting", false);
                count($this);
            }, 50);
        }
    }

    $(".c-section4").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        $(this).data("isCounting", false);
    });

    function startCount() {
        $(".c-section4").each(function () {
            count($(this));
        });
    };

    $(window).scroll(function () {
        startCount();
    });

    startCount();
});
// Get the container element
$(document).ready(function(){

    $(".col-md-2 li").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
});


//active
$(function () {
    $(".col-md-2").click(function () {
        $(".col-md-2").each(function () {
            $(this).find("li").removeClass("active");
        });
        $(this).find("li").addClass("active");
    });
});
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})