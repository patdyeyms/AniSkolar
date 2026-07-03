import { useState } from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ChevronDown, 
  BookOpen, 
  Users, 
  Award, 
  HelpCircle, 
  LogIn, 
  ChevronRight, 
  Layers,
  HeartHandshake
} from 'lucide-react';
import { cn } from '../lib/utils';
import { AVAILABLE_SCHOLARSHIPS } from '../constants';
import logo from '../assets/logo.png';
import heroImage from '../assets/hero-campus.jpg';
import './LandingPage.css';

interface LandingPageProps {
  onSignInClick: () => void;
}

export function LandingPage({ onSignInClick }: LandingPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedScholarship, setSelectedScholarship] = useState<string | null>(null);

  const stats = [
    { label: 'Active Scholars', value: '1,500+', icon: Users, description: 'Grantees currently enrolled' },
    { label: 'Tuition Discount', value: '100%', icon: Award, description: 'Available for qualified students' },
    { label: 'Accredited Offices', value: '24+', icon: Layers, description: 'Departments hosting service duties' },
    { label: 'Service Requirement', value: '80 Hrs', icon: Clock, description: 'Standard duty contribution' },
  ];

  const processSteps = [
    {
      title: 'Duty Hours & logs',
      description: 'Render your assigned 80 hours and submit your Digital Pink Form & Printed Calculation online or at the Scholarship Unit.',
      icon: Clock,
      badge: 'Step 1'
    },
    {
      title: 'Academic Performance',
      description: 'Resubmit your latest Certificate of Grades (COG) showing you maintained the GPA required by your specific grant.',
      icon: FileText,
      badge: 'Step 2'
    },
    {
      title: 'Department Evaluation',
      description: 'The office forwards an evaluation request to your assigned Department Head. You will receive email notifications of remarks.',
      icon: HeartHandshake,
      badge: 'Step 3'
    },
    {
      title: 'Grant Renewal',
      description: 'Receive an exclusive, private link to submit the final SFAG Renewal Form. Your scholarship remains active for the next sem.',
      icon: GraduationCap,
      badge: 'Step 4'
    }
  ];

  const faqs = [
    {
      q: 'Where do I submit my duty logs and printed calculation?',
      a: 'You can easily upload your Digital Pink Form (Duty Logs) inside the Scholar Portal under the "Grant Renewal" tab. Alternatively, physical forms can still be submitted directly to the Scholarship Office.'
    },
    {
      q: 'What is the required GPA for the Student Financial Aid (SFA) Grant?',
      a: 'For upperclassmen SFAG grantees, you need to maintain a General Point Average of 2.50 or better with no failing or incomplete grades.'
    },
    {
      q: 'How does the Department Head evaluation work?',
      a: 'The Scholarship Coordinator automatically dispatches the evaluation form to your Department Head. They rate your punctuality, initiative, productivity, professionalism, and teamwork on a scale of 1-5. Comments are optional.'
    },
    {
      q: 'Can I share my SFAG renewal link with classmates?',
      a: 'No. The SFAG Renewal Form link is strictly exclusive and private to grantees who have successfully completed all duties and met all academic criteria. Sharing is strictly prohibited.'
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#F8FAF8] text-slate-800 min-h-screen selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AniSkolar Logo" className="w-10 h-10 object-contain" />
          <div>
            <span className="text-xl font-black text-primary tracking-widest block leading-none">AniSkolar</span>
            <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase block">DLSU-D Portal</span>
          </div>
        </div>

        {/* Public Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#programs" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Programs</a>
          <a href="#process" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Process</a>
          <a href="#stats" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Impact</a>
          <a href="#faqs" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">FAQs</a>
        </nav>

        <div>
          <button 
            onClick={onSignInClick}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-black rounded-xl hover:bg-[#005c31] transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <LogIn className="w-4 h-4" />
            Scholar Portal
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden px-6 lg:px-16 py-24 lg:py-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-[#F8FAF8]" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Wala pa pala tayo, <br className="hidden sm:inline" />
              <span className="text-emerald-300">Slogan for this</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-100 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to <strong>AniSkolar</strong>, ... blah, blah, blah. Proper name. Place name. Backstory stuff...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onSignInClick}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-black rounded-2xl hover:bg-[#005c31] transition-all shadow-xl hover:shadow-primary/20 hover:-translate-y-px active:scale-95 text-base"
              >
                Access Portal
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="#programs"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/95 border border-white/20 text-slate-700 font-bold rounded-2xl hover:bg-white transition-all text-base"
              >
                View Available Grants
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="stats" className="max-w-6xl mx-auto px-6 lg:px-16 py-12">
        <div className="bg-primary text-white rounded-[2.5rem] p-8 lg:p-14 grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 relative z-10 border-r border-white/10 last:border-0 pr-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-200">
                <stat.icon className="w-5 h-5" />
              </div>
              <h4 className="text-3xl lg:text-4xl font-black tracking-tight">{stat.value}</h4>
              <p className="text-xs font-black text-emerald-100 uppercase tracking-wider">{stat.label}</p>
              <p className="text-[10px] text-emerald-200/70 font-medium leading-tight">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarship Programs */}
      <section id="programs" className="max-w-6xl mx-auto px-6 lg:px-16 py-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Accredited Scholarship Programs
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Explore DLSU-D’s premium scholarship grants. We support academically outstanding, athletic, creative, and financially challenged individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AVAILABLE_SCHOLARSHIPS.map((scholarship) => (
            <div 
              key={scholarship.id}
              className={cn(
                "bg-white border p-8 rounded-[2.5rem] flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                selectedScholarship === scholarship.id ? "border-primary ring-2 ring-primary/10" : "border-slate-100"
              )}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black bg-emerald-50 text-primary px-3 py-1 rounded-full uppercase tracking-widest border border-primary/10">
                    {scholarship.type}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{scholarship.provider}</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 tracking-tight">{scholarship.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 font-medium">
                  {scholarship.description}
                </p>

                {selectedScholarship === scholarship.id && (
                  <div className="pt-6 border-t border-slate-50 space-y-4 animate-in fade-in duration-300">
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2">Academic Criteria</h4>
                      <ul className="space-y-1.5">
                        {scholarship.eligibility.map((el, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2 font-medium">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2">Submission Documents</h4>
                      <ul className="space-y-1.5">
                        {scholarship.requirements.map((req, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button 
                  onClick={() => setSelectedScholarship(selectedScholarship === scholarship.id ? null : scholarship.id)}
                  className="text-xs font-black text-primary hover:text-[#005c31] transition-colors flex items-center gap-1.5"
                >
                  {selectedScholarship === scholarship.id ? 'Hide requirements' : 'View requirements'}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", selectedScholarship === scholarship.id && "rotate-180")} />
                </button>

                <button 
                  onClick={onSignInClick}
                  className="px-4 py-2 bg-slate-50 hover:bg-primary hover:text-white transition-all text-xs font-black text-slate-700 rounded-xl flex items-center gap-1.5"
                >
                  Apply
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow Timeline */}
      <section id="process" className="bg-[#F0F5F2] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our 4-Step Renewal Process
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              We make maintaining your scholarship clear, transparent, and digital. Follow this simple roadmap to secure your next semester’s grant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative group flex flex-col justify-between h-full">
                <span className="absolute right-6 top-6 text-sm font-black text-primary/30 uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-full">
                  {step.badge}
                </span>

                <div className="space-y-4 pt-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section id="faqs" className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Everything you need to know about academic evaluations and logging your service obligations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm transition-all hover:border-slate-200"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown className={cn("w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300", activeFaq === index && "rotate-180")} />
              </button>
              
              {activeFaq === index && (
                <div className="px-6 pb-6 pt-2 animate-in fade-in duration-300">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8 font-medium">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 px-6 lg:px-16 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Ready to secure your academic grant?
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed font-medium">
            Sign in with your institutional credentials to upload grade reports, calculate duty progress, and access official department comments.
          </p>
          <div className="flex justify-center pt-2">
            <button 
              onClick={onSignInClick}
              className="flex items-center gap-3 px-8 py-4 bg-white text-primary font-black rounded-2xl hover:bg-emerald-50 transition-all shadow-xl hover:-translate-y-px text-base"
            >
              Sign In to Portal
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121A16] text-slate-400 py-12 px-6 lg:px-16 border-t border-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-black text-white tracking-widest uppercase block">AniSkolar</span>
              <span className="text-[8px] text-slate-500 block uppercase">DLSU-D Scholarship Unit</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 font-medium">
            © 2026 De La Salle University - Dasmariñas Scholarship Unit. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
