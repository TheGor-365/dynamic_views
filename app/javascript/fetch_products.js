document.addEventListener("DOMContentLoaded", () => {
  const fetchButtons = document.querySelectorAll(".product-details-fetch-btn");
  const fetchTarget = document.getElementById("fetch-product-details");

  fetchButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const productId = button.dataset.id;
      console.log(`Fetch: загружаем детали продукта с ID = ${productId}`);

      fetch(`/products/${productId}/product_details?format=html`, {
        headers: { "Accept": "text/html" }
      })
        .then(response => {
          if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
          return response.text();
        })
        .then(html => {
          fetchTarget.innerHTML = html;
          console.log("Fetch: контент успешно загружен");
        })
        .catch(error => console.error("Fetch: ошибка запроса:", error));
    });
  });
});
