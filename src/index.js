import { createRoot } from 'react-dom/client';
import App from './App';
import { AvailabilityProvider } from './context/AvailabilityContext';
import './styles/index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(
    <AvailabilityProvider>
        <App />
    </AvailabilityProvider>
);

