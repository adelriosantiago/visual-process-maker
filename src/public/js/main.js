//value input
$("#name").keyup(function () {
    var name = $(this).val();
    $("#text-name").html(name);
});

$("#author").keyup(function () {
    var author = $(this).val();
    $("#text-author").html(author);
});

// validate

window.onload = function start() {
    $('#helpName').hide();
    $('#btnValidate').click(validate);
}

function validate(e) {
    var name = document.getElementById('name').value;
    if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
        $('#name').parent().attr('class', 'form-group has-error');
        $('#helpName').text('Requerid field').show();
        e.preventDefault();

      } else{
          alert('el campo esta validado');
          $('#helpName').hide();
      }
}


// editor

var editor = ace.edit("editor");
  editor.setTheme("ace/theme/xcode");
  editor.session.setMode("ace/mode/javascript");

  editor.getSession().on('change', _.debounce(on_change, 100));
  
  on_change();
  
function on_change() {

    $('#diagram').text('');
    var diagram = flowchart.parse(editor.getValue());
    diagram.drawSVG('diagram', {
      'line-width': 2,
      'line-length': 60,
      'text-margin': 10,
      'font-size': 14,
      'font-color': 'black',
      'line-color': '#C3C3C5',
      'element-color': '#4AD670',
      'fill': '#4AD670',
      // style symbol types
      'symbols': {
        'start': {
          'font-color': 'white',
          'element-color': '#00003b',
          'fill': '#00003b'
        },
        'end':{
          'class': 'end-element',
          'font-color': '#890000',
          'element-color': '#890000',
          'fill': 'white'
        },
        'condition':{
          'font-color': 'white',
          'element-color': '#ff6500',
          'fill': '#ff6500'
        },
        'inputoutput':{
          'font-color': 'white',
          'element-color': '#1098F7',
          'fill': '#1098F7'
        },
        'subroutine':{
          'font-color': 'white',
          'element-color': '#450045',
          'fill': '#6c006c'
        }
      },
      // even flowstate support ;-)
      'flowstate' : {
          'past' : { 'fill' : '#9FA2B2','element-color': '#9FA2B2', 'font-color' : 'white'},
          'current' : {'fill' : '#ffd500', 'font-color' : 'white', 'font-weight' : 'bold','element-color': '#ffd500',},
          'successive' : { 'fill' : '#577399',  'element-color': '#577399','font-color' : 'white'},
          'request' : { 'fill' : '#EC0B43',  'element-color': '#EC0B43','font-color' : 'white'},
          'invalid' : { 'fill' : '#736B60',  'element-color': '#4B4237','font-color' : 'white'},
          'approved' : { 'fill' : '#379634', 'element-color': '#379634','font-color' : 'white','font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
          'rejected' : { 'fill' : '#4C1011', 'element-color': '#4C1011','font-color' : 'white','font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
        }
    })
}


// var svgElement = document.querySelector('#zoom');
// var panZoomTiger = svgPanZoom(svgElement);