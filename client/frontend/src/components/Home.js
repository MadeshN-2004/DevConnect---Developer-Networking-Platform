import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // ADD THIS LINE
import { Code2, Users, Zap, ArrowRight, Github, Play, Sparkles, Target, Rocket, Heart, Coffee, Terminal, X, MessageCircle, User, FolderOpen, Search, Monitor, Smartphone, Globe,Star, Award, TrendingUp, Shield, Lightbulb, Database, Cloud, Cpu, Layers } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate(); // ADD THIS LINE
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  const words = ['innovate', 'collaborate', 'create', 'inspire', 'connect'];

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Typing animation
    const wordInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, 300);
    }, 2500);

    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
      observer.disconnect();
    };
  }, [words.length]);

  // ADD THIS FUNCTION
  const handleGetStarted = () => {
    navigate('/login');
  };

  const features = [
    { icon: Code2, text: "Code Together", color: "from-blue-500 to-cyan-500" },
    { icon: Users, text: "Build Network", color: "from-purple-500 to-pink-500" },
    { icon: Zap, text: "Ship Faster", color: "from-orange-500 to-red-500" },
    { icon: Target, text: "Focus Mode", color: "from-green-500 to-emerald-500" }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'text-blue-400' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-400' },
    { name: 'TypeScript', icon: '🔷', color: 'text-blue-500' },
    { name: 'Docker', icon: '🐳', color: 'text-blue-300' },
    { name: 'AWS', icon: '☁️', color: 'text-orange-400' }
  ];

  const devConnectFeatures = [
    {
      icon: User,
      title: "Create Your Developer Profile",
      description: "Build a stylish profile showcasing your skills, location, projects, and upload a professional profile picture.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "Showcase Your Skills",
      description: "Add all technologies you know - HTML, CSS, JavaScript, React, etc. Keep your skillset updated in real-time.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FolderOpen,
      title: "Share Your Projects",
      description: "Upload your best work with GitHub links, live demos, and descriptions for other developers and recruiters to see.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "Chat With Developers",
      description: "Connect directly with other developers through our clean, real-time chat system. Collaborate and grow together.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Search,
      title: "Find Other Developers",
      description: "Browse through developer profiles, discover their skills and projects. Maybe even team up on something exciting!",
      color: "from-pink-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      company: "TechCorp",
      avatar: "👩‍💻",
      quote: "DevConnect helped me find amazing collaborators for my open source projects. The community is incredibly supportive!",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Frontend Engineer",
      company: "StartupXYZ",
      avatar: "👨‍💻",
      quote: "I landed my dream job through connections I made on DevConnect. The networking features are game-changing.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "DevOps Engineer",
      company: "CloudTech",
      avatar: "👩‍🔧",
      quote: "The project collaboration tools are fantastic. Built three successful apps with teams I met here!",
      rating: 5
    }
  ];

  const platformFeatures = [
    {
      icon: Monitor,
      title: "Desktop Experience",
      description: "Full-featured desktop interface with advanced project management tools",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Seamless mobile experience for coding on the go",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with developers from around the world",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { icon: Users, label: "Active Developers", value: "25K+", color: "text-purple-400" },
    { icon: Github, label: "Open Projects", value: "5.2K+", color: "text-blue-400" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞", color: "text-orange-400" },
    { icon: Heart, label: "Success Stories", value: "1.8K+", color: "text-pink-400" }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Sign Up & Create Profile",
      description: "Join our community and create your developer profile in minutes",
      icon: User,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "02",
      title: "Showcase Your Work",
      description: "Upload projects, add skills, and let your code speak for itself",
      icon: Code2,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "03",
      title: "Connect & Collaborate",
      description: "Find like-minded developers and start building amazing things together",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Grow Your Career",
      description: "Get discovered by recruiters and level up your development journey",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge features built by developers, for developers",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Powerful Tools",
      description: "Advanced project management and collaboration features",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Built for the cloud with seamless integrations",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors duration-200 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <video 
              controls 
              autoPlay 
              className="w-full rounded-xl shadow-2xl"
            >
              <source src="/devconnect.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Enhanced Background Layers */}
      <div className="fixed inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse opacity-70" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-l from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-gradient-to-t from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Trendy Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Code Snippets */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { code: 'const dev = "amazing"', pos: 'top-16 left-16', color: 'text-purple-400/30' },
            { code: 'npm run build', pos: 'top-32 right-24', color: 'text-cyan-400/30' },
            { code: 'git commit -m "✨"', pos: 'bottom-40 left-20', color: 'text-green-400/30' },
            { code: 'docker compose up', pos: 'bottom-32 right-16', color: 'text-blue-400/30' },
            { code: 'yarn dev', pos: 'top-1/2 left-8', color: 'text-pink-400/30' }
          ].map((snippet, i) => (
            <div 
              key={i}
              className={`absolute ${snippet.pos} ${snippet.color} font-mono text-xs animate-bounce`}
              style={{ 
                animationDuration: `${3 + i * 0.5}s`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              {snippet.code}
            </div>
          ))}
        </div>
        
        {/* Glassmorphism Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl rotate-12 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl -rotate-12 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Interactive Mouse Glow */}
      <div 
        className="fixed w-96 h-96 bg-gradient-radial from-purple-400/20 via-blue-400/10 to-transparent rounded-full blur-3xl transition-all duration-500 ease-out pointer-events-none z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: `translate3d(0, ${scrollY * 0.1}px, 0)`
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className={`text-center transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Enhanced Logo */}
            <div className="mb-8 relative group">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Code2 className="w-12 h-12 text-white relative z-10" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Dynamic Title */}
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
                Dev
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 delay-100">
                Connect
              </span>
            </h1>

            {/* Animated Subtitle */}
            <div className="h-20 mb-8 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                Where developers{' '}
                <span className="inline-block min-w-[200px] text-left">
                  <span className={`bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold transition-all duration-300 ${isTyping ? 'opacity-100' : 'opacity-0'}`}>
                    {words[currentWord]}
                  </span>
                </span>
              </p>
            </div>

            {/* Enhanced Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/90 text-sm font-medium">{feature.text}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              ))}
            </div>

            {/* CTA Section - UPDATED WITH onClick */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={handleGetStarted}
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <Rocket className="w-5 h-5" />
                  Launch Your Journey
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </button>
              
              <button 
                onClick={() => setShowVideo(true)}
                className="group relative px-10 py-5 bg-black/50 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
              >
                <span className="flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  Watch Demo
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </span>
              </button>
            </div>

            {/* Technology Stack */}
            <div className={`mb-12 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-white/60 text-sm mb-4 uppercase tracking-widest">Built with modern tech</p>
              <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className={`text-sm font-medium ${tech.color}`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className={`flex flex-wrap justify-center gap-8 text-center transition-all duration-1000 delay-1400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                    <stat.icon className={`w-8 h-8 ${stat.color} transform group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 transition-all duration-1000 delay-1600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="group flex flex-col items-center gap-3 text-white/50 hover:text-white/80 transition-colors duration-300 cursor-pointer">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-mono">Scroll to explore</span>
              </div>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1 group-hover:border-white/50 transition-colors duration-300">
                <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Rest of sections remain the same... */}
        {/* I'll keep the rest as is since it's too long. The key changes are:
           1. Added useNavigate import
           2. Added navigate constant
           3. Added handleGetStarted function
           4. Added onClick handler to the button */}

        {/* For brevity, I'm showing that the rest continues... */}
        {/* You can keep all the other sections (Features, How It Works, etc.) exactly as they are */}
        
      </div>
    </div>
  );
};

export default Home;