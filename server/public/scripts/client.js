$(document).ready(onReady);

function onReady() {
  console.log("JS_Troll_Builder_CRUD");
  fetchAndRenderTroll()
}

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
