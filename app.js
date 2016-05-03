console.log('Im rdy')




// $('.search').on('click', function (  {
//
//
//
//   $.ajax ({
//     url: 'http://www.omdbapi.com/?s=' + params[:name] + 'r=json',
//     method: 'get'
//   }).done(function(movies){
//
//     movies.forEach(function(movie) {
//
//
//
//
//   });
//
//   });
//
//
//
// }))




$("#form").submit(function(e) {
  e.preventDefault();
    var movie = $('.movie').val();
    var url = "http://www.omdbapi.com/?s=" + movie

    $.ajax({
           type: "get",
           url: url,
          //  datatype: 'json',
         }).done(function(movies){

            movies["Search"].forEach(function(movie){
                      var $movie = $('<p>').text(movie.Title);
                      $('.movies').append($movie)
          });
          })

    });
