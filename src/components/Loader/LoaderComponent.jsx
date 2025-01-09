import React, { memo } from "react";
import { Oval } from "react-loader-spinner";
const LoaderComponent = memo(() => {
  return (
    <div>
      <Oval
        visible={true}
        height="150"
        width="150"
        color="#FF4500"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
});

export default LoaderComponent;
