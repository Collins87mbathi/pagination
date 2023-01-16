import React from "react";

const Pagination = ({
  totalPost,
  postPerPage,
  setNextPage,
  nextPage,
  previousPage,
}) => {
  const pages = totalPost.length / postPerPage;
  let pageItems = [];
  for (let i = 1; i <= pages; i++) {
    pageItems.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={() => previousPage()}>
          <a className="page-link" href="#home" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageItems.map((number, i) => (
          <li className="page-item" key={i} onClick={() => setNextPage(number)}>
            <a className="page-link" href="#home">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item" onClick={() => nextPage()}>
          <a className="page-link" href="#home" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
