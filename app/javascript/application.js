import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import "./products"

import $ from "jquery"
window.$ = $
window.jQuery = $

import Rails from "@rails/ujs"
Rails.start()
