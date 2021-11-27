import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductListing.module.scss";
import ProductItem from "../ProductItem";
import { fetchAsyncProduct, getAllProducts } from "features/productSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PaginationPage from "../PaginationPage";

function ProductListting(props) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const productList = useSelector(getAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncProduct());
  }, []);
  const handleOnchange = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };
  const listingProduct = productList.filter(
    (item, index) => index < page * pageSize
  );
  return (
    <div className={styles.productList}>
      <div className={styles.heading}>
        <h3 className={styles.text}>Gợi Ý Hôm Nay</h3>
        <div className={styles.line}></div>
      </div>
      <ProductItem productList={listingProduct} />
      <PaginationPage
        page={page}
        pageSize={pageSize}
        onChange={handleOnchange}
      />
    </div>
  );
}

export default ProductListting;
