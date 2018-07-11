import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

render(
    <BrowserRouter>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            {routes}
          </div>
        </div>
      </div>
    </BrowserRouter>,
  document.getElementById('app')
);