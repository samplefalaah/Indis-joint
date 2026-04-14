import { MapPin, Clock, DollarSign, Star, Phone, MessageCircle, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 md:px-10 md:py-5 border-b border-black/10 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="text-2xl font-serif font-bold text-primary tracking-tight">Indi's Joint</div>
        <nav className="hidden md:flex gap-8 font-medium text-sm">
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#location" className="hover:text-primary transition-colors">Location</a>
        </nav>
        <div className="flex items-center gap-2 bg-accent/20 text-text px-3 py-1.5 rounded-full text-sm font-semibold">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span>4.8 (998)</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_0.8fr] gap-6 p-6 md:p-10 max-w-[1600px] mx-auto w-full">
        
        {/* Hero Panel */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[400px] lg:min-h-full flex flex-col justify-end group">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" 
            alt="Restaurant Interior" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="relative z-10 p-8 md:p-10 text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight">Indi's Joint</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md font-light">Cozy, local gem near Kandy train station.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md cursor-pointer">
                View Menu
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 cursor-pointer">
                <Phone className="w-4 h-4" />
                076 499 4939
              </button>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
            <h2 className="text-2xl font-serif font-bold mb-4 text-primary">About Us</h2>
            <p className="text-text/80 leading-relaxed">Warm atmosphere, decent food, beloved by locals and tourists alike.</p>
          </div>

          <div className="bg-secondary text-white rounded-2xl p-8 shadow-md border border-secondary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <h3 className="text-xl font-serif font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl">🛺</span> Free Tuk Tuk Ride!
            </h3>
            <p className="text-white/90 italic leading-relaxed">
              "If you're too tired to walk to our restaurant! Take a tuk tuk — come to us! We will pay for your tuk tuk (within city limits)."
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 flex flex-col gap-4">
            <div className="flex items-start gap-4 pb-4 border-b border-black/5">
              <div className="bg-bg p-2 rounded-lg text-primary"><MapPin className="w-5 h-5" /></div>
              <div>
                <p className="font-medium">33 William Gopallawa Mawatha</p>
                <p className="text-sm text-text/60">Kandy 20000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-4 border-b border-black/5">
              <div className="bg-bg p-2 rounded-lg text-primary"><Clock className="w-5 h-5" /></div>
              <p className="font-medium">Opens 8 AM daily</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-bg p-2 rounded-lg text-primary"><DollarSign className="w-5 h-5" /></div>
              <p className="font-medium">Rs 2,000–3,000 per person</p>
            </div>
          </div>
        </div>

        {/* Menu & Review Panel */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-primary">Popular Items</h2>
              <button className="text-sm text-primary font-medium hover:underline flex items-center cursor-pointer">Full Menu <ChevronRight className="w-4 h-4" /></button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Kottu Roti', price: 'Rs 1,200', desc: 'Chopped flatbread with vegetables and meat' },
                { name: 'Devilled Chicken', price: 'Rs 1,500', desc: 'Spicy, sweet and sour Sri Lankan style chicken' },
                { name: 'Rice & Curry', price: 'Rs 800', desc: 'Traditional spread with 5 curries' },
              ].map((item, i) => (
                <div key={i} className="group p-4 rounded-xl hover:bg-bg transition-colors border border-transparent hover:border-black/5">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <span className="font-medium text-primary bg-primary/10 px-2 py-1 rounded text-sm">{item.price}</span>
                  </div>
                  <p className="text-sm text-text/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent/10 rounded-2xl p-8 shadow-sm border border-accent/20">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <p className="text-lg italic font-serif leading-relaxed mb-4 text-text/90">
              "Nice atmosphere and decent food. Good spot to wait for the train departure."
            </p>
            <p className="font-medium text-sm text-text/70 uppercase tracking-wider">- Happy Customer</p>
          </div>
        </div>

      </main>

      {/* Gallery Strip */}
      <div className="px-6 md:px-10 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop"
          ].map((src, i) => (
            <div key={i} className="aspect-square md:aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-sm">
              <img 
                src={src} 
                alt={`Gallery ${i + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-black/10 px-6 py-8 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text/60">
        <p>© 2024 Indi's Joint. All rights reserved.</p>
        <div className="flex gap-4 font-medium">
          <span>Dine-in</span>
          <span>•</span>
          <span>Takeaway</span>
          <span>•</span>
          <span>Delivery</span>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform hover:shadow-xl z-50 flex items-center justify-center cursor-pointer">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
