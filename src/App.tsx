import './App.css';
import './assets/styles/animates.css';
import './assets/styles/tags.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomePage from './pages/HomePage';
import Spinner from './components/ui/Spinner/Spinner';
const CreatePage = lazy(() => import('./pages/CreatePage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/criar"
            element={
              <Suspense fallback={<Spinner />}>
                <CreatePage />
              </Suspense>
            }
          />
          <Route
            path="/privacidade"
            element={
              <Suspense fallback={<Spinner />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
