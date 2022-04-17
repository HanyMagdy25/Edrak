import React, { useEffect, useState } from "react";
import MediumCard from "../../Cards/MediumCard";
import "./Papers.css";
import ReactPaginate from "react-paginate";


const Papers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/papers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log("papers", data);
      });
  }, []);

  // arrows
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="papers">
      <div className="papers-container">
        <div className="all-papers">
          {data.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index) => (
            <MediumCard item={item} key={index}  type="first" />
          ))}
        </div>
        <div className="bottom-arrows">
        <ReactPaginate
        previousLabel={"السابق"}
        nextLabel={"التالى"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageRangeDisplayed={3}
        breakLabel="..."
      />
        </div>
      </div>
    </div>
  );
};

export default Papers;
