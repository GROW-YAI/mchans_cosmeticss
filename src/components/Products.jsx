import React from 'react'

const Products = () => {
  return (
    <div id="products" className="py-20 px-6 lg:px-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
          Our Products
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our range of premium cosmetics made with natural ingredients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product 1: Shower Gel */}
        <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/showergel.webp"
              alt="Luxury Shower Gel"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Shower Gel</h3>
          <p className="text-gray-600 mb-4">Hydrating formula with natural extracts</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-pink-500">$24.99</span>
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product 2 */}
        <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center" aria-label="Moisturizing Cream product image not available">
            <span className="text-gray-400 text-lg sr-only">Product image not available</span>
            <span className="text-gray-400 text-lg" aria-hidden="true">Coming Soon</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Moisturizing Cream</h3>
          <p className="text-gray-600 mb-4">Deep hydration for all skin types</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-pink-500">$32.99</span>
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-pink-500 disabled:hover:to-pink-600" disabled>
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product 3 */}
        <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center" aria-label="Facial Serum product image not available">
            <span className="text-gray-400 text-lg sr-only">Product image not available</span>
            <span className="text-gray-400 text-lg" aria-hidden="true">Coming Soon</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Facial Serum</h3>
          <p className="text-gray-600 mb-4">Anti-aging with vitamin C</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-pink-500">$45.99</span>
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-pink-500 disabled:hover:to-pink-600" disabled>
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product 4 */}
        <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center" aria-label="Body Lotion product image not available">
            <span className="text-gray-400 text-lg sr-only">Product image not available</span>
            <span className="text-gray-400 text-lg" aria-hidden="true">Coming Soon</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Body Lotion</h3>
          <p className="text-gray-600 mb-4">Silky smooth and long-lasting</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-pink-500">$28.99</span>
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-pink-500 disabled:hover:to-pink-600" disabled>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
