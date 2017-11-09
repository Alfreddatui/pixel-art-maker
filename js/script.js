const makeGrid = () => { // Function to create the Grid
  $('#sizePicker').submit(function(e) {
    e.preventDefault(); // To make the html page not reload if you submit the form
    let height = $('#input_height').val();
    let width = $('#input_width').val();
    let content = '';

    for (let row = 0; row < height; row++) { //nested for loop to create the Grid by changing the text inside table in the html file
      content += '<tr>';
      for (let col = 0; col < width; col++) {
        content += '<td></td>';
      }
      content += '</tr>';
    }
    $('#pixel_canvas').html(content);

    /////////////////////Second solution///////////////////////////
    // const table = document.getElementById('pixel_canvas');
    // table.innerHTML = "";
    // for (let i = 0; i < height; i++) {
    //     // Inserts 10 rows into the table
    //     const row = table.insertRow(i);
    //     for (let j = 0; j < width; j++) {
    //         // Inserts 10 cells into each of the rows
    //         const cell = row.insertCell(j);
    //         cell.addEventListener('click', function() {
    //           let color = $('#colorPicker').val();
    //           cell.style.backgroundColor = color;
    //         });
    //     }
    // }
  });
};

const changeColor = () => { //change the color + add the feature where you can press alt(or command) and click to redo the coloring
  $('#pixel_canvas').click(function(e) {
    let box = e.target;
    // console.log(e.target);
    console.log(box.nodeName);
    if (box.nodeName != 'TABLE' && box.nodeName != 'TR') { //To avoid if you accidentally click the table part, so it wont change the background color entirely
      let color = $('#colorPicker').val();
      if(event.altKey || event.metaKey) { //metaKey is command key for mac
        $(box).css("background-color", "rgba(0, 0, 0, 0)");
      } else {
        $(box).css("background-color", color);
      }
    }
  })
};

makeGrid();
changeColor();

