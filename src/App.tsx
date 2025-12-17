import { Clock, Sparkles, Calendar, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Section */}
        <div className="mb-8 animate-pulse">
          <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            {/* Placeholder for logo - replace src with your actual logo path */}
            <img 
              src="/logo.png" 
              alt="Prime Events Logo" 
              className="w-20 h-20 object-contain"
              onError={(e) => {
                // Fallback if logo doesn't exist
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
            <Sparkles className="w-16 h-16 text-white/80 hidden" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Welcome Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
                Prime Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Creating unforgettable moments and extraordinary experiences
            </p>
          </div>

          {/* Under Development Message */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
                <Clock className="w-8 h-8 text-white animate-spin" style={{animationDuration: '3s'}} />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              🚀 Something Amazing is Coming
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We're putting the finishing touches on our incredible platform. 
              Our team is working around the clock to bring you the most spectacular 
              event planning experience.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-purple-300">
              <span className="text-lg">Please wait for some time</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Calendar className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Event Planning</h3>
              <p className="text-gray-400 text-sm">Comprehensive planning tools</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Premium Experiences</h3>
              <p className="text-gray-400 text-sm">Luxury event management</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <Mail className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Stay Connected</h3>
              <p className="text-gray-400 text-sm">Get notified when we launch</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-400">
              © 2025 Prime Events. Making dreams come true, one event at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}

export default App;