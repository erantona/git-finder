import React, { Fragment } from 'react';
import spinner from '../../assets/spiner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading.." className="block m-auto w-48" />
    </Fragment>
  );
};

export default Spinner;
