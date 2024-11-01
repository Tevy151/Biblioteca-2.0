import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/layout';

import './stylesheets/index.scss';

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
