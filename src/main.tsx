import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

async function enableMocking() {
  if (
    import.meta.env.MODE !== 'development' &&
    import.meta.env.VITE_MSW === 'false'
  ) {
    return;
  }

  const { worker } = await import('./config/setupWorker.ts');

  return worker.start();
}

enableMocking()
  .then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <BrowserRouter future={{ v7_startTransition: true }}>
        <App />
      </BrowserRouter>,
    );
  })
  .catch((error) => {
    console.log('Error during mocking setup: ', error);
  });
