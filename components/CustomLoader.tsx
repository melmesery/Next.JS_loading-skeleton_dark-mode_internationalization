import React from "react";
import { Blocks } from "react-loader-spinner";

const CustomLoader = () => {
  return (
    <div className="loader_container">
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export default CustomLoader;
