import React from 'react';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';

const Pagination = ({ skip, setSkip, total, limit = 5 }) => {
  const currentPage = skip + 1;
  const totalPages = Math.ceil(total / limit);

  const handlePrev = () => {
    if (skip > 0) {
      setSkip(skip - 1);
    }
  };

  const handleNext = () => {
    if (skip < totalPages - 1) {
      setSkip(skip + 1);
    }
  };

  const handleClick=(page)=>{
    setSkip(page-1);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startpage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 3);

    for (let i = startpage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() =>handleClick(i)}
          className={`w-[35px] h-[35px] text-sm font-medium border-2 rounded-full flex items-center justify-center ${
            i === currentPage
              ? 'bg-blue-500 text-white border-blue-500'
              : 'text-gray-500 border-blue-500'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-x-5 justify-center">
        <FaCircleArrowLeft
          size={35}
          onClick={handlePrev}
          className={`cursor-pointer ${
            currentPage === 1 ? 'text-gray-300' : 'text-blue-500'
          }`}
        />
        {renderPageNumbers()}
        <FaCircleArrowRight
          size={35}
          onClick={handleNext}
          className={`cursor-pointer ${
            currentPage === totalPages ? 'text-gray-300' : 'text-blue-500'
          }`}
        />
      </div>
    </div>
  );
};

export default Pagination;
