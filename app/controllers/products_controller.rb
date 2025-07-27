class ProductsController < ApplicationController
  # Отключаем CSRF-проверку только для product_details
  protect_from_forgery except: :product_details

  def index
    @products = Product.all
  end

  def product_details
    # if request.headers["X-Sec-Purpose"] == "prefetch"
    #   head :ok # ничего не рендерим
    # else
    @product = Product.find(params[:id])
    respond_to do |format|
      format.js   # product_details.js.erb
      format.turbo_stream   # для Turbo
    end
  end
end
