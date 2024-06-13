import React from 'react';

const MyButton = ({children}) => {
  return (
    <div className="bg-lime-400 p-4 m-4">
      {children}
    </div>
  );
};

export default MyButton;
