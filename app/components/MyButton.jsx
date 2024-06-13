import React from 'react';

const MyButton = ({children}) => {
  return (
    <div className="bg-lime-400 p-4 m-4 text-white border-solid bottom-2 border-white">
      {children} HELLO
    </div>
  );
};

export default MyButton;
