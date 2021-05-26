import React from 'react';

const ProgressBar = ({ result }) => {
  return (
    <div className='progress-bar'>
      <div style={{ width: (result / 765) * 300 }} className='progress-fill'>
        <p>{parseInt((result / 765) * 100)}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
