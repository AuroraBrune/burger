$(function () {
    $(".addBurger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger");
                //reload the page to update the list
                location.reload();
            }
        );
    });
    $(".devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devouredState = {
            devoured: true
        }

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        })
    });
});