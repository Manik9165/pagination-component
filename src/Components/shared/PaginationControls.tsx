import React from 'react';
import { PaginationProps } from '../../types/pagination';
import '../../styles/components/pagination.css';

const PaginationControls: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="pagination-buttons">
      <button
        className="pagination-button"
        onClick={() => currentPage > 0 && onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Left
      </button>
      
      {[...Array(totalPages).keys()].map((n) => (
        <button
          className={`pagination-button ${currentPage === n ? 'active' : ''}`}
          key={n}
          onClick={() => onPageChange(n)}
        >
          {n}
        </button>
      ))}
      
      <button
        className="pagination-button"
        onClick={() => currentPage < totalPages - 1 && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        Right
      </button>
    </div>
  );
};

export default PaginationControls;
