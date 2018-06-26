module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Grid',
      externals: {
        react: 'React'
      }
    }
  }
}
