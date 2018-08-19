(function () {

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function(event) { 
  for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          console.log(event.results[i][0].transcript);
          document.getElementById('result').append( event.results[i][0].transcript);
        }
    } 
}
recognition.start();

})();