import React from 'react'
import script from 'scriptjs';
import './index.css';

// Make react global
window.React = React;

// Import Framework
script('http://d16zglms8etrud.cloudfront.net/framework/track24-framework.js', () => {
  require('./Demo')
})
