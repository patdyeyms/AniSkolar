import { useState, useEffect, FormEvent } from 'react';
import { 
  GraduationCap, 
  ArrowLeft, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { cn } from '../lib/utils';
import './LoginPage.css';
import logo from '../assets/logo.png';

interface LoginPageProps {
  onBackToLanding: () => void;
  onLoginSuccess: (email: string) => void;
}

function MicrosoftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="9" height="9" fill="#F25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
      <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
      <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
    </svg>
  );
}

export function LoginPage({ onBackToLanding, onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [recoverySent, setRecoverySent] = useState(false);

  // Auth transition steps
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authStep, setAuthStep] = useState(0);

  const authStates = [
    'Validating academic credentials...',
    'Syncing registrar grade databases...',
    'Decrypting verified duty hours...',
    'Authorized! Welcome to AniSkolar.'
  ];

  const handleDemoSignIn = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('scholar123');
    setErrorMsg('');
  };

  const handleMicrosoftSignIn = () => {
    setErrorMsg('');
    setEmail('scholar@dlsud.edu.ph');
    setIsAuthenticating(true);
    setAuthStep(0);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email) {
      setErrorMsg('Please enter your institutional email address.');
      return;
    }
    if (!password) {
      setErrorMsg('Please enter your portal password.');
      return;
    }

    // Trigger auth transition
    setIsAuthenticating(true);
    setAuthStep(0);
  };

  useEffect(() => {
    if (!isAuthenticating) return;

    const timer = setInterval(() => {
      setAuthStep((prev) => {
        if (prev < authStates.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onLoginSuccess(email);
          }, 600);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(timer);
  }, [isAuthenticating]);

  const handleForgotPasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!recoveryEmail) return;
    setRecoverySent(true);
    setTimeout(() => {
      setRecoverySent(false);
      setIsForgotPassword(false);
      setRecoveryEmail('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#F0F5F2] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans selection:bg-primary selection:text-white">
      <div className="w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        {/* Left Pane - Public Info & Branding (Only visible on lg devices) */}
        <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-[#016A3A] to-[#004a28] p-12 flex-col justify-between text-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.06rem,transparent_0.06rem)] [background-size:1.2rem_1.2rem] opacity-[0.05] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <button 
              onClick={onBackToLanding}
              className="inline-flex items-center gap-2 text-xs font-black text-emerald-200 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-xl border border-white/5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to main site
            </button>

            <div className="pt-8">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg p-2">
                <img src={logo} alt="AniSkolar logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-3xl font-black tracking-tight">AniSkolar Portal</h2>
              <p className="text-emerald-200/80 text-sm font-medium leading-relaxed mt-2">
                Sign in to track your scholarship renewal and access your scholar portal.
              </p>
            </div>
          </div>

          <div className="space-y-6 relative z-10">

            <p className="text-[10px] text-emerald-300 font-bold tracking-widest uppercase">
              DE LA SALLE UNIVERSITY - DASMARIÑAS
            </p>
          </div>
        </div>

        {/* Right Pane - Authentication Fields */}
        <div className="col-span-1 lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          
          {/* Back button for mobile */}
          <button 
            onClick={onBackToLanding}
            className="lg:hidden absolute top-6 left-6 inline-flex items-center gap-1.5 text-xs font-black text-slate-500 hover:text-primary transition-colors bg-slate-50 px-3 py-2 rounded-xl"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Landing
          </button>

          {/* Authentication Overlay screen (played during login sequence) */}
          {isAuthenticating && (
            <div className="absolute inset-0 bg-white z-50 p-8 sm:p-16 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
              <div className="space-y-8 max-w-sm w-full">
                <div className="relative flex justify-center">
                  <div className="w-20 h-20 border-4 border-slate-100 rounded-full animate-spin border-t-primary" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary font-black">
                    <GraduationCap className="w-8 h-8 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Authenticating Session</h3>
                  <p className="text-sm text-slate-400 font-mono tracking-wider h-6 font-bold uppercase">
                    {authStates[authStep]}
                  </p>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2">
                  {authStates.map((_, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        idx === authStep ? "w-8 bg-primary" : idx < authStep ? "w-4 bg-primary/40" : "w-1.5 bg-slate-100"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Form Containers */}
          <div className="max-w-md w-full mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Header */}
            <div>
              <div className="lg:hidden w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 p-1.5">
                <img src={logo} alt="AniSkolar logo" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                {isForgotPassword ? "Reset Password" : "Welcome Back"}
              </h1>
              <p className="text-slate-400 text-sm font-medium mt-1 leading-relaxed">
                {isForgotPassword 
                  ? "Enter your institutional email to receive recovery instructions." 
                  : "Sign in to track your scholarship renewal and access your scholar portal."}
              </p>
            </div>

            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 animate-shake">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs font-bold text-red-700">{errorMsg}</p>
              </div>
            )}

            {/* PASSWORD RECOVERY FORM */}
            {isForgotPassword ? (
              <form onSubmit={handleForgotPasswordSubmit} className="space-y-5">
                {recoverySent ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl space-y-2 text-center animate-pulse">
                    <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="text-sm font-black text-slate-900">Recovery Email Sent</h4>
                    <p className="text-xs text-slate-500 font-medium">We sent a secure password reset link to <strong className="text-primary">{recoveryEmail}</strong>.</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Institutional Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="email"
                          required
                          value={recoveryEmail}
                          onChange={(e) => setRecoveryEmail(e.target.value)}
                          placeholder="yourname@dlsud.edu.ph"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-primary text-white font-black text-sm tracking-widest rounded-xl hover:bg-[#005c31] transition-all shadow-md active:scale-95 uppercase"
                    >
                      Send Password Reset Link
                    </button>

                    <button 
                      type="button"
                      onClick={() => setIsForgotPassword(false)}
                      className="w-full text-center text-xs font-black text-slate-400 hover:text-slate-600 uppercase tracking-wider block"
                    >
                      Back to Sign In
                    </button>
                  </>
                )}
              </form>
            ) : (
              /* STANDARD PORTAL SIGN IN FORM */
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Institutional Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. scholar@dlsud.edu.ph"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                    <button 
                      type="button"
                      onClick={() => setIsForgotPassword(true)}
                      className="text-xs font-black text-primary hover:text-[#005c31] transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-0.5"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4.5 h-4.5 rounded border-slate-300 text-primary focus:ring-primary/20"
                    />
                    <span className="text-xs font-bold text-slate-500">Remember my session on this device</span>
                  </label>
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className="w-full py-3.5 bg-primary text-white font-black text-sm tracking-widest rounded-xl hover:bg-[#005c31] transition-all shadow-md active:scale-95 uppercase"
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-px flex-1 bg-slate-100" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Or continue with</span>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                {/* Microsoft Sign In */}
                <button
                  type="button"
                  onClick={handleMicrosoftSignIn}
                  className="w-full py-3.5 bg-white border border-slate-200 text-slate-700 font-black text-sm tracking-wide rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-3"
                >
                  <MicrosoftIcon className="w-4 h-4" />
                  Sign in with Microsoft
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}