import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className="animate-pulse max-w-lg mt-3 m-auto text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
        <span className="text-xl inline-block mr-5 align-middle">
          <i className="fas fa-info-circle" />
        </span>
        <span className="inline-block align-middle mr-8">
          <b className="capitalize">Warning!</b> {alert.msg}
        </span>
        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
          <span>×</span>
        </button>
      </div>
    )
  );
};

export default Alert;
