
var fields = [];
var font_size = 22;
var demoElement=$(".demoElement")
var slider = $("#slider")
var slider_x = $("#slider-x")
var text_y = font_size;
/* Append an <svg> element to an HTML element */
var svg = Pablo(demoElement).svg({
    width: 640,
    height: 384,
    color: "gray"
});

/* Append a <rect> element to the <svg> */
svg.rect({width:640, height:384})

    // Transform the <rect>
    .transform('translate', 0)
    

    // Change attribute
    .attr('stroke', 'black')
		.attr('fill', 'white')
    // Add events
    
    text = svg.text({
        x:5, y:text_y,
        fill:'black',
        width: 640,
        'font-size': font_size.toString() +"px",
        'font-family':'sans-serif',
        'textLength': '630px'
    });
    
    
$('.confirm_appointment').keyup(function(e) {
    
    e.preventDefault();
    fields = $(this).serializeArray();
    //text.content(fields[0].value);
    //jQuery.each( fields, function( i, field ) {
    //
    //text.attr('font-size', fields[1].value.toString() + "px" );
    
    text.content(fields[0].value);
    
    //alert([bbox.width, bbox.height]);
    //});
});
$("#slider").slider(
    {
                value:10,
                min: 0,
                max: 80,
                step: 1,
                slide: function( event, ui ) {
                   text.attr('font-size',ui.value.toString() + "px");
                }
    }
);
$('#slider').slider('value');

$("#slider-x").slider(
    {
                value:10,
                min: text_y,
                max: 384,
                orientation: "vertical",
                step: 1,
                slide: function( event, ui ) {
                   text.attr('y',ui.value.toString());
                }
    }
);
$('#slider-x').slider('value');

$('.confirm_appointment').submit(function(e) {
    e.preventDefault();
     var img = svg.toImage();
     img.appendTo(".img")

});