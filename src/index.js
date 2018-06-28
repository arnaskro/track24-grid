import Grid from './components/App';
import reducer from './reducers/';

// export default {
//     component: Grid,
//     reducer
// };

import { withReducer } from 'react-redux-dynamic-reducer';

export default withReducer(reducer, 'Grid')(Grid);