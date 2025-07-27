import $ from "jquery";

$(document).on("click", ".product-details-btn", function (e) {
  e.preventDefault();
  console.log("Клик по кнопке Details");
  let id = $(this).data("id");

  $.ajax({
    url: `/products/${id}/product_details`,
    dataType: "script",
    success: function () {
      console.log("AJAX запрос выполнен успешно");
    },
    error: function (xhr) {
      console.log("Ошибка AJAX:", xhr);
    }
  });
});
