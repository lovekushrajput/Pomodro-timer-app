import App from './components/App';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/index.css'
import AppContext from './utlis/context';

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <AppContext>
            <App />
        </AppContext>
    </BrowserRouter>

)
