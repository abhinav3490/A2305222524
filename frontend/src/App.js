import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import ShortenPage from './pages/ShortenPage';
const StatsPage    = lazy(() => import('./pages/StatsPage'));
const RedirectPage = lazy(() => import('./pages/RedirectPage'));

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading…</div>}>
          <Routes>
            <Route path="/" element={<ShortenPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/:code" element={<RedirectPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;