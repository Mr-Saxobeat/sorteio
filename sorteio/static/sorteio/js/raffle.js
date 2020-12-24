$("document").ready(function() {
  $("#picwinner").hide();
  $("#winner").hide();
  rollClick();
});

var index = 0;

function nextName() {
  index++;
  var l = entrants.length;
  var name = entrants[index % l].nome;
  var pic = entrants[index % l].foto;
  $("#names").text(name);
  $("#pic").attr('src', pic);
}

function rollClick() {
  $("#roll").on("click", function(e) {
    $("#picwinner").hide();
    $("#winner").hide();
    $("#names").show();
    $("#pic").show();

    setDeceleratingTimeout(
      function() {
        nextName();
      },
      5,
      80
    );

    setTimeout(function() {
      var rand = Math.floor(Math.random() * restantes.length);
      console.log(restantes[rand].foto);
      $("#winner").text(restantes[rand].nome);
      $("#picwinner").attr('src', restantes[rand].foto);
      $("#names").hide();
      $("#pic").hide();
      $("#picwinner").show();
      $("#winner").show();
      restantes.splice(rand, 1);
    }, 9000);

    e.preventDefault();
  });
}

function setDeceleratingTimeout(callback, factor, times) {
  var internalCallback = (function(t, counter) {
    return function() {
      if (--t > 0) {
        window.setTimeout(internalCallback, ++counter * factor);
        callback();
      }
    };
  })(times, 0);

  window.setTimeout(internalCallback, factor);
}
