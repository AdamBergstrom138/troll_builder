$(document).ready(onReady);

function onReady() {
  console.log("JS_Troll_Builder_CRUD");
  fetchAndRenderTroll()
  $('body').on('click', '#addTrollButton', buildTroll);
  $('body').on('click', '.delete', deleteTroll);
  $('body').on('click', '.head_toggle', toggleHead);
  $('body').on('click', '.body_toggle', toggleBody);
  $('body').on('click', '.render_troll_toggle', toggleRender);
}
// global troll count
let trollCount=0;
// renderTroll render the selected troll on the DOM
function renderTroll(troll){
    if(troll.render === true && trollCount < 1){
      console.log('troll render 1');
      $('#render').append(`
      <div>
        <h3>${troll.name}</h4>
      </div>
      <div class="troll${troll.id}">
        <img class="trollElement" src="./images/troll_element.png" />
        <img class="trollBody" src="./images/troll_body.png"/>
        <img class="trollHead" src="./images/troll_head.png" />
      </div>
      `)
    }else if(troll.render === true && trollCount === 1){
      console.log('troll render 2');
      $('#render2').append(`
      <div>
        <h3>${troll.name}</h4>
      </div>
      <div class="troll${troll.id}">
        <img class="trollElement" src="./images/troll_element.png" />
        <img class="trollBody" src="./images/troll_body.png"/>
        <img class="trollHead" src="./images/troll_head.png" />
      </div>
      `)
    }
  }


// GET and render troll data to the table
function fetchAndRenderTroll(){
  trollCount = 0;
  console.log('in fetchAndRenderTroll');
  $.ajax({
    type: 'GET',
    url: '/troll'
  }).then(function(trolls) {
    $('#trollTable').empty();
    console.log(trolls);
    for(let troll of trolls){
      trollCount++;
      $('#trollTable').append(`
      <tr data-id=${troll.id}>
        <td>${troll.name}</td>
        <td>${troll.notes}</td>
        <td>
          <div class="toggle_head">
            <input 
            class="head_toggle" 
            type="checkbox"
            ${troll.head ? 'checked' : ''}
            />
          </div>
        </td>
        <td>
          <div class="toggle_body">
            <input 
            class="body_toggle" 
            type="checkbox"
            ${troll.body ? 'checked' : ''}
            />
          </div>
        </td>
        <td><button type="button" class="delete">DELETE</button></td>
        <td>
        <div class="toggle_render">
          <input 
          class="render_troll_toggle" 
          type="checkbox"
          ${troll.render ? 'checked' : ''}
          />
        </div>
        </td>
      </tr>
      `);
      renderTroll(troll)
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
  let newRender = 'false';
  let newTroll = {
    name: newName,
    notes: newNote,
    head: newHead,
    body: newBody,
    render: newRender
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

function toggleRender(){
  let render = $(this).is(':checked');
  let idToUpdate = $(this).closest('tr').data().id;
  console.log('toggleRender id:', idToUpdate, render);

  $.ajax({
      method: 'PUT',
      url: `/troll/render/${idToUpdate}`,
      data: {render}
  }).then((res) => {
      fetchAndRenderTroll();
  }).catch((err) => {
      console.log('Error in toggleRender', err);
  })
}


