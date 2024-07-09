import { createRoot } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { configureStore } from 'reduxjs/toolkit';
import reducers from './reducers';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
<Provider store={configureStore(reducers)}>
  <App />
</Provider>
)