$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger");
                //reload the page to update the list
                
            }
        );
        location.reload();
    });
    $(".devour").on("click", function(event) {
        event.preventDefault()
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function(data) {
        console.log(data)
          console.log("burger devoured"+id);
          location.reload();
        }
      );
      console.log("hello")
    });
    
    // $(".devour").on("click", function (event) {
    //     event.preventDefault();
    //     var id = $(this).data("id");
    //     var devouredState = {
    //         devoured: 1
    //     }

    //     $.ajax("/api/burgers" + id, {
    //         type: "PUT",
    //         data: devouredState
    //     }).then(function (data) {
    //         console.log(data);
    //         console.log("burgerDevoured" + id)
    //         location.reload();
    //     })
       
    // });
});