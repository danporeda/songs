import { createRoot } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
<Provider store={createStore(reducers)}>
  <App />
</Provider>
)