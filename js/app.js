$(function () {
  let dataRespuesta = [];

  // Aqui esta el codigo de la primera llamada a la API

  const url = 'https://aves.ninjas.cl/api/birds';
  let respuesta = $.ajax({
    type: 'GET',
    url: url,
    data: 'data',
    dataType: 'json',
  });
  // Aqui el codigo de la respuesta
  respuesta
    .done(function (data) {
      console.log(data);
      for (let index = 0; index < 20; index++) {
        dataRespuesta[index] = {
          nombreAve: data[index].name.spanish,
          imagenAve: data[index].images.main,
          linkDescripcionAve: data[index]._links.self,
        };
        $('#seleccionAve').append(
          `<option value=${index}>${data[index].name.spanish}</option>`
        );
      }

      console.log(dataRespuesta);
      $('#seleccionAve').on('change', function () {
        $('.card').remove();
        console.log($(this).val());
        let indexMuestra = $(this).val();
        $('.contenedor').append(
          '<div class="card" style="width: 18rem;"></div>'
        );
        $('.card')
          .append(`<img src=${dataRespuesta[indexMuestra].imagenAve} />`)
          .append(`<h2>${dataRespuesta[indexMuestra].nombreAve}</h2>`);
      });

      // codigo que pinta el html
    })
    .fail(function (data) {
      console.log(error);
    });
});
