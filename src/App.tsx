import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';

export default function App() {
  const [session, setSession] = useState<'landing' | 'login' | 'authenticated'>('landing');

  if (session === 'landing') {
    return <LandingPage onSignInClick={() => setSession('login')} />;
  }

  if (session === 'login') {
    return (
      <LoginPage
        onBackToLanding={() => setSession('landing')}
        onLoginSuccess={() => setSession('authenticated')}
      />
    );
  }

  // Placeholder post-login screen. The scholar portal (dashboard, sidebar,
  // renewal tools, etc.) has been removed from this trimmed-down build.
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F5F2] p-6 text-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-black text-primary">Signed in successfully</h1>
        <p className="text-slate-500 max-w-md">
          The scholar portal beyond this point has been removed from this build.
        </p>
        <button
          onClick={() => setSession('landing')}
          className="mt-4 px-6 py-3 bg-primary text-white font-bold rounded-xl"
        >
          Back to Landing
        </button>
      </div>
    </div>
  );
}
