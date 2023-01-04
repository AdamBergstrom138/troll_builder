$(document).ready(onReady);

function onReady() {
  console.log("JS_Troll_Builder_CRUD");
  fetchAndRenderTroll()
  $('body').on('click', '#addTrollButton', buildTroll);
}
// GET and render troll data to the table
function fetchAndRenderTroll(){
  console.log('in fetchAndRenderTroll');
  $.ajax({
    type: 'GET',
    url: '/troll'
  }).then(function(trolls) {
    $('#trollTable').empty();
    console.log(trolls);
    for(let troll of trolls){
      $('#trollTable').append(`
      <tr data-id=${troll.id}>
        <td>${troll.name}</td>
        <td>${troll.notes}</td>
        <td>${troll.head}</td>
        <td>${troll.body}</td>
      </tr>
      `);
    }
  }).catch((error) => {
    console.log('error in GET', error);
});
}
// POST
function buildTroll(){
  console.log('in buildTroll');
  let newName = $('#trollNameIn').val();
  let newNote = $('#trollNotesIn').val();
  let newHead = 'true';
  let newBody = 'true';
  let newTroll = {
    name: newName,
    notes: newNote,
    head: newHead,
    body: newBody
  };
  $.ajax({
    method: 'POST',
    url: '/troll',
    data: newTroll
  }).then((response) => {
    fetchAndRenderTroll();
  }).catch((err) => {
    console.log('Error in buildTroll', err);
  });
  $('#trollNameIn').val('');
  $('#trollNotesIn').val('');
}

// function submit(){
//   console.log('in submit');
//   letNewTask = $('#toDoIn').val();
//   letNewEdit = 'none';
//   letNewComplete = 'N';
//   let taskToSend = {
//       task: letNewTask,
//       edit: letNewEdit,
//       complete: letNewComplete
//   };
//   $.ajax({
//       method: 'POST',
//       url: '/todo',
//       data: taskToSend
//   }).then((response) => {
//       fetchAndRenderToDo();
//   }).catch((error) => {
//       console.log('Error in submit:', error);
//   });
//   $('#toDoIn').val('');
// }
