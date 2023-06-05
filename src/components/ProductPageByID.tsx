import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Product {
  title: string;
  synopsis: string;
  author: string;
  stock: number;
  image_url: string;
}

const ProductPageByID = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>({
    title: "",
    synopsis: "",
    author: "",
    stock: 0,
    image_url: "",
  });

  useEffect(() => {
    fetch(`https://readify-seven.vercel.app/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleAddToLoan = () => {
    // Implementasi logika penambahan buku ke daftar pinjaman
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-auto">
        <div className="flex justify-center items-center">
          <img
            src={product.image_url}
            alt={product.title}
            className="w-40 h-52 object-cover rounded-lg shadow-md"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <h2 className="text-lg font-medium mb-2">Penulis: {product.author}</h2>
            <p className="text-gray-700 text-base mb-2">{product.synopsis}</p>
            <p className="text-gray-700 text-base mb-2">Stock: {product.stock} buku</p>
            <div className="flex items-center mb-4">
              {product.stock > 0 ? (
                <p className="text-green-500 font-medium">In Stock</p>
              ) : (
                <p className="text-red-500 font-medium">Out of Stock</p>
              )}
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2"
                disabled={product.stock === 0}
                onClick={handleAddToLoan}
              >
                Loan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageByID;
