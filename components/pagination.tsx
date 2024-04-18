import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePrev: () => void;
  handleNext: () => void;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePrev,
  handleNext,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-center gap-2">
      {[...Array(totalPages)].map((_, page) => (
        <button
          key={page}
          title='button pagination'
          className={`w-4 h-4 rounded-full border border-[#FB8971] ${
            currentPage === page ? 'bg-[#FB8971] text-white' : 'bg-transparent text-[#FB8971]'
          }`}
          onClick={() => setCurrentPage(page)}
        />
      ))}
    </div>
  );
};

export default Pagination;
