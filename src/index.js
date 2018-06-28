import { withReducer } from 'react-redux-dynamic-reducer';
import Grid from './components/App';
import reducer from './reducers/';

export default withReducer(reducer, 'Grid')(Grid);