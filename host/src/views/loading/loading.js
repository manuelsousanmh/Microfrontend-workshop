import React from 'react';

import './loading.less';

const Loading = () => {
  return (
    <div className="loading-mfe">
      <div>
        <div className="loader"></div>
        <div className="loading-text">Loading</div>
      </div>
    </div>
  );
};

export default Loading;
