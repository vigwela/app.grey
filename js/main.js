$(function () {
   $("#create_act_btn").prop("disabled");
   $("#create_act_btn").css({ cursor: "not-allowed"});
   $("#first_name").keypress((e) => {
      var first_name = $("#first_name").val();
      $("#create_act_btn").prop("disabled", false);
      $("#create_act_btn").css({ cursor: "pointer", color: "white", "background-color": "rgb(61, 135, 245)" });
   });
});