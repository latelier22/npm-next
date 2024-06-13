import React from 'react';
const MyButton = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-lime-400 p-4 m-4 text-white border-solid bottom-2 border-white"
  }, children, " HELLO");
};
export default MyButton;