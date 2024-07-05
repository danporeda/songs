import { createRoot } from 'react-dom';
import App from './components/App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(<App />)