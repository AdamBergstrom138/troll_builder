$(document).ready(onReady);

function onReady() {
  console.log("JS_Troll_Builder_CRUD");
  fetchAndRenderTroll()
  $('body').on('click', '#addTrollButton', buildTroll);
  $('body').on('click', '.delete', deleteTroll);
  $('body').on('click', '.head_toggle', toggleHead);
  $('body').on('click', '.body_toggle', toggleBody);
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
        <td>
          <div class="toggle">
            <input 
            class="head_toggle" 
            type="checkbox"
            ${troll.head ? 'checked' : ''}
            />
          </div>
        </td>
        <td>
          <div class="toggle">
            <input 
            class="body_toggle" 
            type="checkbox"
            ${troll.body ? 'checked' : ''}
            />
          </div>
        </td>
        <td><button type="button" class="delete">DELETE</button></td>
      </tr>
      `);
    }
  }).catch((error) => {
    console.log('error in GET', error);
});
}

//<td>${troll.head}</td>
//<td>${troll.body}</td>
//

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
};

// Delete
function deleteTroll(){
  console.log('in delete');
  let idToDelete = $(this).closest('tr').data().id;
  console.log(idToDelete);
  $.ajax({
    method: 'DELETE',
    url: `/troll/${idToDelete}`
  }).then((response) => {
    fetchAndRenderTroll();
  }).catch((err) => {
    console.log('Error in deleteTroll', err);
  });
};

// PUT
function toggleBody(){
  let body = $(this).is(':checked');
  let idToUpdate = $(this).closest('tr').data().id;
  console.log('toggleBody id:', idToUpdate, body);

  $.ajax({
      method: 'PUT',
      url: `/troll/body/${idToUpdate}`,
      data: {body}
  }).then((res) => {
      fetchAndRenderTroll();
  }).catch((err) => {
      console.log('Error in toggleBody', err);
  })
}

function toggleHead(){
  let head = $(this).is(':checked');
  let idToUpdate = $(this).closest('tr').data().id;
  console.log('toggleHead id:', idToUpdate, head);

  $.ajax({
      method: 'PUT',
      url: `/troll/head/${idToUpdate}`,
      data: {head}
  }).then((res) => {
      fetchAndRenderTroll();
  }).catch((err) => {
      console.log('Error in toggleHead', err);
  })
}


