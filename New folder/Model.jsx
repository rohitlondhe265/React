// pages/index.js
import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

const Model = () => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmAction = () => {
    // Put your action logic here
    console.log('Action confirmed!');
    setShowModal(false);
  };

  const handleCancelAction = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Confirmation Modal Example</h1>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded"
        onClick={() => setShowModal(true)}
      >
        Trigger Action
      </button>

      {showModal && (
        <ConfirmationModal
          title="Confirm Action"
          message="Are you sure you want to perform this action?"
          onConfirm={handleConfirmAction}
          onCancel={handleCancelAction}
        />
      )}
    </div>
  );
};

export default Model;
