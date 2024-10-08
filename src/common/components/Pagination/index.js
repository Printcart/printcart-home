import Router from "next/router";
import ReactPaginate from "react-paginate";

const Pagination = ({ page }) => {
  //Set Page
  let count = "";
  if (page > 10) {
    count = 10;
  } else {
    count = page;
  }

  //Next Page
  const handlePagination = (e) => {
    const path = Router.pathname;
    const query = Router.query;
    if (isNaN(parseFloat(e.selected)) || e.selected == 0) {
      e.selected = 0;
      delete query.page;
    } else {
      query.page = e.selected + 1;
    }

    Router.push({
      pathname: path,
      query: query
    });
  };

  return (
    <ReactPaginate
      className="paginateWrap"
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      initialPage={0}
      pageCount={count}
      onPageChange={handlePagination}
      disableInitialCallback={true}
      subContainerClassName={"paginate-inner"}
      pageClassName={"paginate-li"}
      pageLinkClassName={"paginate-a"}
      activeClassName={"paginate-active"}
      nextLinkClassName={"paginate-next-a"}
      previousLinkClassName={"paginate-prev-a"}
      breakLinkClassName={"paginate-break-a"}
    />
  );
};

export default Pagination;
