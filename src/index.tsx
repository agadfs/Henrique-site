import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Router from './routes';
import { RecoilRoot } from 'recoil';


ReactDOM.render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>,
  document.getElementById('root')
);
