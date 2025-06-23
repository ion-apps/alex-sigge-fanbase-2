import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Route, Routes } from "react-router-dom";
import { Music, Calendar, Users, Play, Instagram, Twitter, Youtube, Spotify, Apple, Menu, X, Heart, Share2 } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const upcomingShows = [
    { date: "2024-03-15", venue: "The Fillmore", city: "San Francisco, CA", status: "On Sale" },
    { date: "2024-03-18", venue: "The Wiltern", city: "Los Angeles, CA", status: "Sold Out" },
    { date: "2024-03-22", venue: "Terminal 5", city: "New York, NY", status: "On Sale" },
    { date: "2024-03-25", venue: "The Riviera Theatre", city: "Chicago, IL", status: "Few Left" },
  ];

  const latestTracks = [
    { title: "Midnight Dreams", album: "Echoes", duration: "3:42" },
    { title: "Golden Hour", album: "Echoes", duration: "4:15" },
    { title: "Neon Lights", album: "Echoes", duration: "3:28" },
    { title: "City Rain", album: "Previous EP", duration: "4:01" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="text-white font-bold text-xl">Alex Sigge</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#music" className="text-white/80 hover:text-white transition-colors">Music</a>
            <a href="#tour" className="text-white/80 hover:text-white transition-colors">Tour</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
            <div className="px-6 py-4 space-y-4">
              <a href="#music" className="block text-white/80 hover:text-white transition-colors">Music</a>
              <a href="#tour" className="block text-white/80 hover:text-white transition-colors">Tour</a>
              <a href="#about" className="block text-white/80 hover:text-white transition-colors">About</a>
              <a href="#contact" className="block text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <Music size={64} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Alex Sigge</h1>
            <p className="text-xl text-white/80 mb-8">Electronic Music Producer & Artist</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all",
                  isFollowing 
                    ? "bg-white/20 text-white border border-white/30" 
                    : "bg-white text-purple-900 hover:bg-white/90"
                )}
              >
                <Heart size={20} className={isFollowing ? "fill-current" : ""} />
                {isFollowing ? "Following" : "Follow"}
              </button>
              
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">
                <Play size={20} />
                Play Latest
              </button>
              
              <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors">
                <Share2 size={20} />
                Share
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Spotify size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Apple size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Music Section */}
      <section id="music" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Tracks</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="space-y-4">
              {latestTracks.map((track, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play size={20} className="text-white ml-1" />
                    </button>
                    <div>
                      <h3 className="text-white font-semibold">{track.title}</h3>
                      <p className="text-white/60 text-sm">{track.album}</p>
                    </div>
                  </div>
                  <div className="text-white/60 text-sm">{track.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour Dates Section */}
      <section id="tour" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Shows</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="space-y-4">
              {upcomingShows.map((show, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{show.venue}</h3>
                      <p className="text-white/60 text-sm">{show.city}</p>
                      <p className="text-white/60 text-sm">{new Date(show.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <button 
                    className={cn(
                      "px-6 py-2 rounded-full font-semibold transition-colors",
                      show.status === "Sold Out" 
                        ? "bg-red-500/20 text-red-300 cursor-not-allowed"
                        : show.status === "Few Left"
                        ? "bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30"
                        : "bg-green-500/20 text-green-300 hover:bg-green-500/30"
                    )}
                    disabled={show.status === "Sold Out"}
                  >
                    {show.status}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">2.5M+</h3>
              <p className="text-white/60">Monthly Listeners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Music size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50M+</h3>
              <p className="text-white/60">Total Streams</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Calendar size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
              <p className="text-white/60">Shows This Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 mb-4">© 2024 Alex Sigge. All rights reserved.</p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;