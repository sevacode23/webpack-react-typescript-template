import { createRoot } from 'react-dom/client';

import { App } from '@/screens/app';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found');
}

createRoot(container).render(<App />);
