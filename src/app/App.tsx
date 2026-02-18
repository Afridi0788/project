import React from 'react';
import { Toaster } from 'sonner';
import '../index.css';
import '../styles/fonts.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventsTimeline } from './components/EventsTimeline';
import { PrizePool } from './components/PrizePool';
import { Tracks } from './components/Tracks';
import { RacingJourney } from './components/RacingJourney';
import { Testimonials } from './components/Testimonials';
import { Sponsors } from './components/Sponsors';
import { SponsorshipRequest } from './components/SponsorshipRequest';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const Separator = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent my-0" />
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
      <Navbar />
      <Hero />
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
