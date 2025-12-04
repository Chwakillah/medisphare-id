import React, { useState } from "react";
import { X, Package } from "lucide-react";

// Sample placeholder images
import img1 from "../../assets/products/1.png";
import img2 from "../../assets/products/2.png";
import img3 from "../../assets/products/3.png";
import img4 from "../../assets/products/4.png";
import img5 from "../../assets/products/5.png";
import img6 from "../../assets/products/6.png";

// Icon helper function
const iconFor = (cat) => {
  const k = cat?.toLowerCase?.() || "";
  if (k.includes("tablet")) return "💊";
  if (k.includes("sirup")) return "🧪";
  if (k.includes("infus")) return "💉";
  if (k.includes("injeksi")) return "💉";
  if (k.includes("internasal")) return "👃";
  if (k.includes("inhaler")) return "🌬️";
  if (k.includes("tetes")) return "👂";
  return "📦";
};

const products = [
  {
    id: 1,
    name: "Amoxicillin",
    category: "Tablet",
    specific_category: "Antibiotik Penisilin",
    image: img1,
    description: "Antibiotik untuk mengatasi berbagai infeksi bakteri",
    dosage: "500mg",
    price: 45000,
  },
  {
    id: 2,
    name: "Azithromycin",
    category: "Tablet",
    specific_category: "Antibiotik Makrolida",
    image: img2,
    description: "Antibiotik spektrum luas untuk infeksi saluran pernapasan",
    dosage: "500mg",
    price: 75000,
  },
  {
    id: 3,
    name: "Cefuroxime Axetil",
    category: "Tablet",
    specific_category: "Sefalosporin Generasi II",
    image: img3,
    description: "Antibiotik generasi kedua untuk infeksi bakteri",
    dosage: "500mg",
    price: 85000,
  },
  {
    id: 4,
    name: "Cetirizine HCl",
    category: "Tablet",
    specific_category: "Antihistamin Non-Sedatif",
    image: img4,
    description: "Obat alergi untuk meredakan gejala alergi dan gatal",
    dosage: "10mg",
    price: 25000,
  },
  {
    id: 5,
    name: "Clavamox",
    category: "Tablet",
    specific_category: "Antibiotik Kombinasi",
    image: img5,
    description: "Kombinasi antibiotik untuk infeksi yang resisten",
    dosage: "500mg",
    price: 95000,
  },
  {
    id: 6,
    name: "Phenylephrine HCl",
    category: "Tablet",
    specific_category: "Dekongestan",
    image: img6,
    description: "Meredakan hidung tersumbat akibat flu dan alergi",
    dosage: "10mg",
    price: 35000,
  },
];

const ProdukKami = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
            <Package className="w-4 h-4" />
            Produk Berkualitas Tinggi
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Produk <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Rangkaian produk farmasi berkualitas tinggi yang telah terpercaya
            dan teruji untuk mendukung kesehatan Anda dan keluarga
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <p>Klik untuk detail</p>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/produk"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Package className="w-5 h-5" />
            Jelajahi Semua Produk
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:flex">
              {/* Left Side - Image */}
              <div className="md:w-1/2 relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-xl hover:bg-white transition-all duration-200 hover:rotate-90 transform"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-full min-h-[400px] flex items-center justify-center p-8">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col">
                {/* Category Badge */}
                <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 w-fit">
                  {iconFor(selectedProduct.category)} {selectedProduct.category}
                </span>

                {/* Product Name */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {selectedProduct.name}
                </h3>

                {/* Kategori Spesifik */}
                {selectedProduct.specific_category && (
                  <p className="text-blue-600 font-semibold text-sm mb-4">
                    {selectedProduct.specific_category}
                  </p>
                )}

                {/* Price Badge */}
                {selectedProduct.price && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl px-5 py-3 mb-5 inline-block w-fit">
                    <p className="text-xs text-green-700 font-semibold mb-1">
                      Harga
                    </p>
                    <p className="text-2xl font-bold text-green-800">
                      Rp {selectedProduct.price?.toLocaleString("id-ID")}
                    </p>
                  </div>
                )}

                {/* Description */}
                {selectedProduct.description && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                      Deskripsi Produk
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {selectedProduct.description}
                    </p>
                  </div>
                )}

                {/* Product Details Panel */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-5 mb-6 border border-gray-200">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    Informasi Detail
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600 flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        Kategori
                      </span>
                      <span className="font-semibold text-gray-900">
                        {selectedProduct.category}
                      </span>
                    </div>
                    {selectedProduct.dosage && (
                      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                        <span className="text-sm text-gray-600 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                          Dosis
                        </span>
                        <span className="font-semibold text-gray-900">
                          {selectedProduct.dosage}
                        </span>
                      </div>
                    )}
                    {selectedProduct.specific_category && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Jenis
                        </span>
                        <span className="font-semibold text-gray-900 text-right text-sm">
                          {selectedProduct.specific_category}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={closeModal}
                    className="flex-1 px-8 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all duration-200 hover:shadow-md"
                  >
                    Tutup
                  </button>
                  {selectedProduct.price && (
                    <button className="flex-1 px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      Hubungi Kami
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ProdukKami;