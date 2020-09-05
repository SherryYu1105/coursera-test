( function (window) {  
    var helloSpeaker = {}; 	
     helloSpeaker.speak = function (name) { console.log(speakWord + " " + name); 	
  }  
  var speakWord = "Hello"
  function speak(name){ console.log (speakWord + " " + name);}
  window.helloSpeaker=helloSpeaker;
  })(window);
  