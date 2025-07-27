import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="product-details"
export default class extends Controller {
  static targets = ["details"]

  show(event) {
    event.preventDefault();
    const productId = event.currentTarget.dataset.id;

    console.log(`Stimulus: загружаем детали продукта с ID = ${productId}`);

    fetch(`/products/${productId}/product_details?format=html`, {
      headers: {
        "Accept": "text/html"
      }
    })
      .then(response => {
        if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
        return response.text();
      })
      .then(html => {
        console.log("Stimulus: контент успешно загружен");
        this.detailsTarget.innerHTML = html;
      })
      .catch(error => console.error("Ошибка Fetch:", error));
  }
}
