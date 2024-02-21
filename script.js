$(".flip-container").each(function() {

  var leftRand = Math.floor(Math.random()*8);
  leftRand = leftRand - 4;
  var topRand = Math.floor(Math.random()*8);
  topRand = topRand - 4;
  $(this).css({ marginLeft: leftRand, marginTop: topRand });
  var rotRand = Math.floor(Math.random()*6);
  rotRand = rotRand - 3;
  $(this).css({transform: "rotate(" + rotRand + "deg)"});
  
  
});

/*
$('.show').click(function() {
  */

setTimeout(function() {

    $(".wrapper").addClass("showing");
    var time = 50;
  
  $(".flip-container").each(function() {
  
    var $this = $(this);
    
    $(this).css({ marginLeft: "", marginTop: "" });
    $(this).css({transform: ""});
    
    setTimeout(function() {  
  
      var item = $this.attr("id");
      
      $this.css({zIndex: item});
      
      $this.removeClass("flip");
    
      if(item < 5) {
        leftPos = (item - 1) * 240;
        $this.css({ left: leftPos, top: 0 });
      }
      
      else {
        leftPos = (item - 5) * 240;
        $this.css({ left: leftPos, top: 320 });
      }
    }, time);
    time += 50;
    
    
  });
}, 800);



$(".shuffle").click(function() {
  
    $(".wrapper").removeClass("showing").addClass("shuffling");
    var time = 50;
  
  //flip the cards
  $(".flip-container").each(function() {
    
    var $this = $(this);
    setTimeout(function() {
      $this.addClass("flip");
    }, time);
    time += 50;
  });
  
  //collect the cards
  
  setTimeout(function() {
      
    $(".flip-container").each(function() {
      $(this).css({ left: "", top: "" });
    });
      
  }, 500);
  
  setTimeout(function() {
      
    $(".flip-container").each(function() {
      $this = $(this);
      /*setTimeout(function() {*/
        var numRand = Math.floor(Math.random()*9);
        $this.css({ zIndex: numRand});
        
        var leftRand = Math.floor(Math.random()*400);
        leftRand = leftRand - 200;
        var topRand = Math.floor(Math.random()*300);
        topRand = topRand - 150;
      $this.css({left: "-=" + leftRand + "", top: "-=" + topRand + "" });
        
      
    });
    
    
      
  }, 900);
  
  setTimeout(function() {
      
    
    $(".flip-container").each(function() {
      $this = $(this);
      $this.css({left: "", top: ""});
        
      
    });
    
    
      
  }, 1300);
  
    setTimeout(function() {
      
    $(".flip-container").each(function() {
      $this = $(this);
      /*setTimeout(function() {*/
        var numRand = Math.floor(Math.random()*9);
        $this.css({ zIndex: numRand});
        
        var leftRand = Math.floor(Math.random()*600);
        leftRand = leftRand - 300;
        var topRand = Math.floor(Math.random()*500);
        topRand = topRand - 250;
      $this.css({left: "-=" + leftRand + "", top: "-=" + topRand + "" });
    }); 
  }, 1600);
  
  setTimeout(function() {
    $(".flip-container").each(function() {
      $this = $(this);
      $this.css({left: "", top: ""});
    });
      
  }, 1900);
  
  
  setTimeout(function() {
      
    $(".flip-container").each(function() {
      $this = $(this);
      /*setTimeout(function() {*/
        var numRand = Math.floor(Math.random()*9);
        $this.css({ zIndex: numRand});
        
        var leftRand = Math.floor(Math.random()*600);
        leftRand = leftRand - 300;
        var topRand = Math.floor(Math.random()*500);
        topRand = topRand - 250;
      $this.css({left: "-=" + leftRand + "", top: "-=" + topRand + "" });
    }); 
  }, 2100);
  
  setTimeout(function() {
    $(".flip-container").each(function() {
      $this = $(this);
      $this.css({left: "", top: ""});
      
      var leftRand = Math.floor(Math.random()*8);
      leftRand = leftRand - 4;
      var topRand = Math.floor(Math.random()*8);
      topRand = topRand - 4;
      $this.css({ marginLeft: leftRand, marginTop: topRand }); 
     
    });
      
  }, 2400);
  
  
  
  //line the cards up to choose from
    setTimeout(function() {
      
      $parent = $(".wrapper");
      $elems = $parent.children();

    $parent.each(function(){
        $(this).children().sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });
      
    var itemCount = 1;
    $(".flip-container").each(function() {
      $this = $(this);
      
      $(".wrapper").removeClass("shuffling").addClass("choose");
      
      $this.css({zIndex: ""});
      
        var leftPos = itemCount*50 + 180;
        $this.css({left: leftPos});
        
        if(itemCount < 5) {
          var topPos = (itemCount*10)*-1;
          $this.css({marginTop: topPos});
        }
        else {
          var topPos = (itemCount-9)*10;
          $this.css({marginTop: topPos});
        }
        
        var rotate = ((itemCount - 4)*8)-4;
        $(this).css({transform: "rotate(" + rotate + "deg)"});
      
      itemCount += 1;
    });
      
    $(".flip-container").click(function() {
      
      $this = $(this);
      if($this.parent(".wrapper").hasClass("chosen")) {
        event.preventDefault;
      }
      else {
      
      $this.css({top: -50});
      $this.removeClass("flip");
      $this.css({transform: ""});
      $(".wrapper").removeClass("choose").addClass("chosen");
      
      setTimeout(function() {
        $this.css({top: "", left: ""}).addClass("choice");
      }, 300);
      }
    });
      
      
      
  }, 2800);
  
});