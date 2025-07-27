import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    console.log("Stimulus HelloController подключен!");
  }

  greet() {
    console.log("Метод greet вызван!");
    this.outputTarget.textContent = "Привет от Stimulus!";
  }
}
