import { Application } from "@hotwired/stimulus"
import ProductDetailsController from "./product_details_controller"
import TestController from "./test_controller"
import HelloController from "./hello_controller"

const application = Application.start()
console.log("Stimulus: приложение запущено")

application.register("hello", HelloController)
console.log("Stimulus: Hey")

application.register("product-details", ProductDetailsController)
console.log("Stimulus: контроллер product-details зарегистрирован")
application.register("test", TestController)
