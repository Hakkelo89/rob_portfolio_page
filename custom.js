    function makeid() {
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      return possible.charAt(Math.floor(Math.random() * possible.length));
    }

    function randomTime(){
      return Math.round(Math.random() * 2000 );
    }
    function changeAnimationTime(element){
      var random = randomTime();
      element.setAttribute('animation-delay', random + "ms");
      
      console.log('animation-delay', random + "ms")
    }


    var mapFn = function(element) {
        changeAnimationTime(element);
        var i = 0;
        var originalAttribute = element.getAttribute('data-letter');
        console.log(originalAttribute);
        var test = [makeid(), makeid(), makeid(), makeid(), makeid(),makeid(), makeid(), makeid(), makeid(), makeid(), makeid(), originalAttribute];
        element.addEventListener("animationend", function() {
          element.setAttribute('data-letter', originalAttribute);
        }, false);
        element.addEventListener("animationiteration", function() {
          element.setAttribute('data-letter', test[i++]);
        }, false);
    };

    function letterRun(){
       var changingElements = Array.from(document.querySelectorAll('[data-letter]'), mapFn);
    }
    letterRun();
