
// Update
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newHunger = $(this).data("newhunger");
  
      var newHungerState = {
        hungry: newHunger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newHungerState
      }).then(
        function() {
          console.log("changed status to", newHunger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
       // devoured: $("#eat").val().trim()
       devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  