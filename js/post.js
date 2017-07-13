 $(document).ready(function(){
          $('.QuizResults').hide()
          $('.quiz_cell').hide()
          $("#submit").on('click', function(e) {
            $('.quiz_cell').hide()
            $('.QuizResults').show()
            $('.Loading').show()
            var rawtext = $('#rawtextinput').val()       
            console.log(rawtext)

            alert("click");
            $.ajax({
               type:'POST',
               url :"api",
               data: $.param({ raw: $('#rawtextinput').val()}) ,
               contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
               success: function(data) {
                 $('.Loading').hide(function(){$('.loading').remove() })
                 $('.quiz_cell').show()
                 console.log('success',data);
                 $('#quiz_result').text(data.result)
               },
              error: function (xhr, ajaxOptions, thrownError) {
              alert('status', xhr.status);
              alert(thrownError);
              }

            });
            e.preventDefault();
          });
        });