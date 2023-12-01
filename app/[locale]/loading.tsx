export default function Loading() {
  return (
    <div className="products">
      {[...new Array(24)].map((_, index) => (
        <div key={index} className="product animate-pulse">
          <div className="product-container">
            <div className="skeleton_image" />
          </div>
          <div className="product_data">
            <small className="skeleton_brand" />
            <h4 className="skeleton_name" />
          </div>
        </div>
      ))}
    </div>
  );
}
