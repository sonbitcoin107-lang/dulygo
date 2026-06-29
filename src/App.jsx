// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import { hasOnboarded } from './utils/storage';
import TopBar from './components/layout/TopBar';
import BottomNav from './components/layout/BottomNav';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Lesson from './pages/Lesson';
import Result from './pages/Result';
import Profile from './pages/Profile';
import Speaking from './pages/Speaking';
import PhonicsMap from './pages/PhonicsMap';
import PhonicsLesson from './pages/PhonicsLesson';

function AppLayout({ children, showNav = true }) {
  return (
    <div className="app-shell">
      {showNav && <TopBar />}
      <main className="page-content">
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
}

function ProtectedRoute({ children }) {
  if (!hasOnboarded()) {
    return <Navigate to="/onboarding" replace />;
  }
  return children;
}

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter basename="/dulygo">
        <Routes>
          {/* Onboarding — no nav bars */}
          <Route
            path="/onboarding"
            element={
              <div className="app-shell">
                <main style={{ flex: 1, overflowY: 'auto' }}>
                  <Onboarding />
                </main>
              </div>
            }
          />

          {/* Lesson — no nav bars (fullscreen) */}
          <Route
            path="/lesson/:courseId"
            element={
              <ProtectedRoute>
                <AppLayout showNav={false}>
                  <Lesson />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* Result — no nav bars */}
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <AppLayout showNav={false}>
                  <Result />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* Main app with nav */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Home />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Profile />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/phonics"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <PhonicsMap />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/phonics/:id"
            element={
              <ProtectedRoute>
                <AppLayout showNav={false}>
                  <PhonicsLesson />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/speaking"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Speaking />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* Redirect to onboarding if not yet done */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}
