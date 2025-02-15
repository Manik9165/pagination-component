import React, { useEffect, useState } from "react";
import { Product } from "../../types/pagination";
import { fetchAllProducts } from "../../services/productService";
import PaginationControls from "../shared/PaginationControls";
import "../../styles/components/pagination.css";

const LIMIT = 10;

const Pagination = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const loadProducts = async () => {
      const productData = await fetchAllProducts();
      setProducts(productData);
    };
    loadProducts();
  }, []);

  const TOTAL = products?.length;
  const TOTAL_PAGES = Math.ceil(TOTAL / LIMIT);
  const START = currentPage * LIMIT;
  const END = START + LIMIT;

  return (
    <>
      <PaginationControls
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={setCurrentPage}
      />
      <div>
        {products?.length ? (
          <ol className="pagination-list">
            {products.slice(START, END).map((product) => (
              <li key={product.id} className="pagination-item">
                {product.title}
              </li>
            ))}
          </ol>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
};

const FrontendPagination: React.FC = () => {
  return (
    <div className="pagination-container">
      <h4 className="pagination-title">Frontend Pagination Component</h4>
      <p className="pagination-description">
        Here we will make only one API call, and fetch whole data in one go.
        Then we will handle pagination on whole data.
      </p>
      <Pagination />
    </div>
  );
};

export default FrontendPagination;
