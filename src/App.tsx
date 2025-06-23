import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Route, Routes } from "react-router-dom";
import { Music, Calendar, Users, Play, Instagram, Twitter, Youtube, Menu, X, Heart, Share2 } from 'lucide-react';

// Custom SVG icons for Spotify and Apple Music
const SpotifyIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="text-gray-800 font-bold text-xl">Alex & Sigge</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#music" className="text-gray-600 hover:text-gray-800 transition-colors">Music</a>
            <a href="#tour" className="text-gray-600 hover:text-gray-800 transition-colors">Tour</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <a href="#music" className="block text-gray-600 hover:text-gray-800 transition-colors">Music</a>
              <a href="#tour" className="block text-gray-600 hover:text-gray-800 transition-colors">Tour</a>
              <a href="#about" className="block text-gray-600 hover:text-gray-800 transition-colors">About</a>
              <a href="#contact" className="block text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full border-2 border-gray-200 p-1">
              <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                <Music size={64} className="text-gray-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">Alex & Sigge</h1>
            <p className="text-lg text-gray-500 mb-8">Music Producer & Artist</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all",
                  isFollowing 
                    ? "bg-gray-100 text-gray-800 border border-gray-300" 
                    : "bg-gray-800 text-white hover:bg-gray-700"
                )}
              >
                <Heart size={20} className={isFollowing ? "fill-current" : ""} />
                {isFollowing ? "Following" : "Follow"}
              </button>
              
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Play size={20} />
                Play Latest
              </button>
              
              <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors">
                <Share2 size={20} />
                Share
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <SpotifyIcon size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <AppleIcon size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Music Section */}
      <section id="music" className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Tracks</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              {latestTracks.map((track, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <Play size={20} className="text-gray-600 ml-1" />
                    </button>
                    <div>
                      <h3 className="text-gray-800 font-semibold">{track.title}</h3>
                      <p className="text-gray-500 text-sm">{track.album}</p>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">{track.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour Dates Section */}
      <section id="tour" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Shows</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              {upcomingShows.map((show, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100">
                      <Calendar size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold">{show.venue}</h3>
                      <p className="text-gray-500 text-sm">{show.city}</p>
                      <p className="text-gray-500 text-sm">{new Date(show.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <button 
                    className={cn(
                      "px-6 py-2 rounded-full font-semibold transition-colors",
                      show.status === "Sold Out" 
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : show.status === "Few Left"
                        ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                        : "bg-green-100 text-green-700 hover:bg-green-200"
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
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Users size={32} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2.5M+</h3>
              <p className="text-gray-500">Monthly Listeners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Music size={32} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">50M+</h3>
              <p className="text-gray-500">Total Streams</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Calendar size={32} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-500">Shows This Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 mb-4">© 2024 Alex & Sigge. All rights reserved.</p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;