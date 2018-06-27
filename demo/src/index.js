import React from 'react'
import script from 'scriptjs';
import './index.css';

// Make react global
window.React = React;

// Import Framework
script('https://unpkg.com/track24-framework@1.1.1/umd/track24-framework.min.js', () => {
  require('./Demo')
})
