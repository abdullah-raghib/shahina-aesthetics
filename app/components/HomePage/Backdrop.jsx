// components/Backdrop.js
import React from 'react';

const Backdrop = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div
      className="fixed inset-0 z-30"
      onClick={onClose}
    ></div>
  ) : null;
};

export default Backdrop;
