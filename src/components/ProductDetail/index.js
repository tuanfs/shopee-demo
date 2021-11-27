import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getItemProduct,
  remmoveSelectedProduct,
  fetchAsyncItemProduct,
} from "features/productSlice";
import ProductOverview from "components/ProductOverview";
function ProductDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productItem = useSelector(getItemProduct);
  useEffect(() => {
    dispatch(fetchAsyncItemProduct(id));
    return dispatch(remmoveSelectedProduct());
  }, [dispatch, id]);
  return (
    <div>
      <ProductOverview productItem={productItem} />
    </div>
  );
}

export default ProductDetail;
