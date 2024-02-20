import React, { useState, useEffect } from 'react';
import "../styles/Pagination.css";

const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const url = `https://dummyjson.com/products?limit=10&skip=${page*10 - 10}`

    useEffect(() => {
        getProducts()
    }, [page])

    const getProducts = async () => {
        const data = await fetch(url)
        const json = await data.json();
        setProducts(json.products)
        setTotalPages(json.total/10)
    }

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1  && selectedPage <= totalPages && selectedPage !== page) {
            setPage(selectedPage)
        }
    }

  return (
    <div>
        {products?.length > 0 && (<div className="products">
          {
            products?.map((prod) => {
                return <span key={prod.id} className="products_single">
                    <img src={prod.thumbnail} alt={prod.title} />
                    <span>{prod.title}</span>
                    </span>
            })
          }
        </div>)}
        {
            products.length > 0 && (<div className="pagination">
                <span className={ page <= 1 && "pagination_disabled" } onClick={() => selectPageHandler(page-1)}> ◀️ </span>
                {
                    [...Array(totalPages)].map((_, idx) => {
                        return <span className={page === idx+1 && "pagination_selected"} onClick={() => selectPageHandler(idx+1)} key={idx}>{idx+1}</span>
                    })
                }
                <span className={page >= totalPages && "pagination_disabled"} onClick={() => selectPageHandler(page+1)}> ▶️ </span>
            </div>)
        }
    </div>
  )
}

export default Pagination
