import createStore from 'redux';
import Reducer from './todo/Reducers';

const store = createStore(Reducer);

export default store;
