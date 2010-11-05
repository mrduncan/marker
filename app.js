$(function () {
  function getMousePosition(event) {
    return { x: event.pageX, y: event.pageY };
  }

  var isDrawing = false,
      canvas = $("#canvas"),
      context;

  canvas.attr("height", $(window).height() - 64);
  canvas.attr("width", $(window).width());

  context = canvas.get(0).getContext("2d");
  context.lineWidth = 10.0;
  context.miterLimit = 5.0;
  context.strokeStyle = "red";

  canvas.bind("mousedown", function (e) {
    var point = getMousePosition(e);
    context.beginPath();
    context.moveTo(point.x, point.y);
    isDrawing = true;
    e.preventDefault();
  });

  canvas.bind("mousemove", function (e) {
    var point;

    if (isDrawing) {
      point = getMousePosition(e);
      context.lineTo(point.x, point.y);
      context.stroke();
    }
  });

  canvas.bind("mouseup", function (e) {
    isDrawing = false;
  });

  canvas.bind("mouseout", function (e) {
    isDrawing = false;
  });

  $("#black, #red").click(function (e) {
    context.lineWidth = 10.0;
    context.strokeStyle = $(this).css("background-color");
    e.preventDefault();
  });

  $("#eraser").click(function (e) {
    context.lineWidth = 25.0;
    context.strokeStyle = "#fff";
    e.preventDefault();
  });
});

