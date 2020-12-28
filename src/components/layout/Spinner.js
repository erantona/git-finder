import React from 'react';
import RingLoader from 'react-spinners/PuffLoader';

const Spinner = () => {
  return (
    <div className="mt-10 flex justify-center items-center">
      <RingLoader size={150} color={'#E2E5E9'} />
    </div>
  );
};

export default Spinner;
