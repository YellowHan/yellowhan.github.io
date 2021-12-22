$(function () {
  $("#show_list").mouseenter(function () {
    $("#sub_menu_list").show("fast");
  });
  $("#sub_menu_list").mouseleave(function () {
    $("#sub_menu_list").hide("fast");
  });
});