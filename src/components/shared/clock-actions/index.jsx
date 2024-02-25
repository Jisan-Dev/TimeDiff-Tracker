import React from 'react';

const ClockActions = ({ local = true }) => {
  return (
    <div>
      <button>Edit</button>
      {local ? <button>Delete</button> : <button>Create</button>}
    </div>
  );
};

export default ClockActions;
