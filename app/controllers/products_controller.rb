class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
    render partial: "products/product_details", locals: { product: @product }
  end
end
