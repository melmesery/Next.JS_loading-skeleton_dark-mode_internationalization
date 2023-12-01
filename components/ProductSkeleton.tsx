const ProductSkeleton = async () => {
  return (
    <div className="products">
      {[...new Array(24)].map((_, index) => (
        <div className="skeleton product" key={index}>
          <div className="skeleton product-container">
            <div
              className="skeleton product_image_skeleton" 
            />
          </div>
          <div className="product_data">
            <small className="skeleton product_brand_skeleton"></small>
            <h4 className="skeleton product_name_skeleton"></h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
