export default {
  component: require('./components/App'),
  reducer: require('./reducers/'),
  reducers: [
    {
      path: "Calculator",
      reducer: require('./reducers/CalculatorReducer')
    }
  ],
  name: 'Grid'
}