const ProductSkeleton = async () => {
  return (
    <div className="products_container">
      {[...new Array(24)].map((_, index) => (
        <div key={index} className="products_details animate-pulse">
          <div className="products_image_container">
            <div className="skeleton_image" />
          </div>
          <div className="products_data">
            <small className="skeleton_brand" />
            <h4 className="skeleton_name" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
