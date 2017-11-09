$(document).ready(jQueryTotal);

function jQueryTotal() {
  makeGrid();
  changeColor();
}

const makeGrid = () => { // Function to create the Grid
  $('#sizePicker').submit(function(e) {
    e.preventDefault(); // To make the html page not reload if you submit the form
    let height, width;
    height = $('#input_height').val();
    width = $('#input_width').val();
    let content = '';
  
    for (let row = 0; row < height; row++) { //nested for loop to create the Grid by changing the text inside table in the html file
      content += '<tr>';
      for (let col = 0; col < width; col++) {
        content += '<td></td>';
      }
      content += '</tr>';
    }
    $('#pixel_canvas').html(content);
  });
};

const changeColor = () => { //change the color + add the feature where you can press alt(or command) and click to redo the coloring
  $('#pixel_canvas').click(function(e) {
    let box = e.target;
    // console.log(e.target);
    if (e.target != 'table') { //To avoid if you accidentally click the table part, so it wont change the background color entirely
       let color = $('#colorPicker').val();
      if(event.altKey || event.metaKey) { //metaKey is command key for mac
        $(box).css("background-color", "rgba(0, 0, 0, 0)");
      } else {
        $(box).css("background-color", color);
      }
    }
  })
};