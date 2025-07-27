import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import "./products"
import "./fetch_products"

import $ from "jquery"
window.$ = $
window.jQuery = $

// import Rails from "@rails/ujs"
// Rails.start()

document.addEventListener("turbo:before-fetch-request", (event) => {
  if (event.target.getAttribute("data-turbo-prefetch") === "false") {
    event.preventDefault();
  }
});
