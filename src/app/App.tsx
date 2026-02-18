import React from 'react';
import { Toaster } from 'sonner';
import '../index.css';
import '../styles/fonts.css';
// import { Navbar } from './components/Navbar'; // Commented out to use ThreeHero's internal nav
import { ThreeHero } from './components/ThreeHero'; // Import the new 3D component
import { EventsTimeline } from './components/EventsTimeline';
import { PrizePool } from './components/PrizePool';
import { Tracks } from './components/Tracks';
import { RacingJourney } from './components/RacingJourney';
import { Testimonials } from './components/Testimonials';
import { Sponsors } from './components/Sponsors';
import { SponsorshipRequest } from './components/SponsorshipRequest';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

// Updated Thick Neon Separator
const Separator = () => (
  <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent my-8 shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
);

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-poppins selection:bg-red-500 selection:text-white overflow-x-hidden">
      <Toaster position="top-right" theme="dark" toastOptions={{
        style: {
          background: 'rgba(0,0,0,0.8)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'white',
          backdropFilter: 'blur(10px)'
        }
      }} />

      {/* NOTE: The original <Navbar /> is commented out because <ThreeHero /> 
        contains its own navigation bar that reveals after the loader. 
      */}
      {/* <Navbar /> */}

      {/* New 3D Landing Section */}
      <ThreeHero />
      
      <Separator />
      <EventsTimeline />
      <Separator />
      <PrizePool />
      <Separator />
      <Tracks />
      <Separator />
      <RacingJourney />
      <Separator />
      <Testimonials />
      <Separator />
      <Sponsors />
      <Separator />
      <SponsorshipRequest />
      <Separator />
      <FAQ />
      <Separator />
      <Footer />
    </div>
  );
}

export default App;