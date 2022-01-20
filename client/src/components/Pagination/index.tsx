import React from "react";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  nbPage: number;
  pageStartIndex: number;
  page: number;
  setPage: (page: number) => void;
  maxDisplayedPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  nbPage,
  pageStartIndex,
  page,
  setPage,
  maxDisplayedPage,
}) => {
  return (
    <nav className={styles.Pagination}>
      <div className="btn-group" role="group">
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        {Array(Math.min(nbPage, maxDisplayedPage))
          .fill(0)
          .map((_, index) => {
            const pageIndex = pageStartIndex + index;
            return (
              <button
                key={pageIndex}
                type="button"
                className={page === pageIndex ? styles.Active : ""}
                onClick={() => setPage(pageIndex)}
                disabled={page === pageIndex}
              >
                {pageIndex + 1}
              </button>
            );
          })}
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={page === nbPage - 1}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
