import React, { useState, useEffect } from "react";
import Card from './../../components/Card/Card'
import ReactPaginate from 'react-paginate';
import { Row } from "carbon-components-react";
import './GridCards.scss'

export default function GridCards({ title, data }) {
 
  const itemPerPage = 12;

  const [pageCount, setPageCount] = useState(Math.ceil(data.length / itemPerPage))
  const [dataPaginated, setDataPaginated] = useState(data.slice(0, itemPerPage))

  const updatePagination = React.useCallback(page => {
    setDataPaginated(data.slice(page * itemPerPage, page * itemPerPage + itemPerPage))
    setPageCount(Math.ceil(data.length / itemPerPage))
  }, [data])

  const handlePageClick = page => {
    updatePagination(page.selected)
  }

  useEffect(() => { updatePagination(0) }, [data, updatePagination])

  return (
    <span className="gridCards">
      <div className="bx--gridbx--grid bx--grid--full-width">
        <h1 className="title">{title}</h1>
        <Row>
          <CommentList data={dataPaginated} />
        </Row>
      </div>
      <div className="pagination">

        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          pageClassName='bx--link'
        />
      </div>
    </span>
  );
}

const CommentList = (data) => data.data.map((item, index) => <Card key={index} data={item}></Card>)