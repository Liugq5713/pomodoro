import { withRouter } from 'react-router-dom';
import React from 'react';

export default withRouter(({ history }) => (
  <div>
    <div className='button is-primary is-rounded'>START</div>
    <button
      type='button'
      onClick={() => {
        history.push('/congratulation');
      }}
    >
      Click Me!
    </button>
  </div>
));
