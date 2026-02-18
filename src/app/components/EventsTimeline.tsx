import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Flag, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    name: "Night Circuit GP",
    date: "MAR 15",
    track: "Singapore Marina",
    timeLeft: "2d 14h",
    image: "https://images.unsplash.com/photo-1686426781747-7cd27a8e05a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcmFjZSUyMHRyYWNrJTIwbmlnaHQlMjBsaWdodHN8ZW58MXx8fHwxNzcxNDE3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Desert Storm",
    date: "APR 02",
    track: "Bahrain International",
    timeLeft: "20d 05h",
    image: "https://images.unsplash.com/photo-1763805508094-901f2a79ff77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBmaWJlciUyMHRleHR1cmUlMjBkYXJrfGVufDF8fHx8MTc3MTM4Mjc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" // Placeholder
  },
  {
    id: 3,
    name: "Monaco Elite",
    date: "MAY 21",
    track: "Circuit de Monaco",
    timeLeft: "45d 12h",
    image: "https://images.unsplash.com/photo-1760456015398-c0119ffb0593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmMSUyMHJhY2luZyUyMGNhciUyMHNwZWVkaW5nfGVufDF8fHx8MTc3MTQxNzcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "Speed Temple",
    date: "JUN 10",
    track: "Suzuka Circuit",
    timeLeft: "65d 08h",
    image: "https://images.unsplash.com/photo-1686426781747-7cd27a8e05a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcmFjZSUyMHRyYWNrJTIwbmlnaHQlMjBsaWdodHN8ZW58MXx8fHwxNzcxNDE3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

export const EventsTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2">
            <span className="text-red-600">RACE</span> CALENDAR
          </h2>
          <div className="h-1 w-20 bg-red-600 skew-x-[-20deg]"></div>
        </div>
        <div className="hidden md:flex gap-4">
            <div className="flex items-center gap-2 text-gray-400 font-orbitron text-sm">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                LIVE UPDATES
            </div>
        </div>
      </div>

      <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar" ref={containerRef}>
        {/* Track Line */}
        <div className="absolute top-1/2 left-0 w-[200%] h-1 bg-white/10 -translate-y-1/2 z-0"></div>
        <div className="absolute top-1/2 left-0 w-[200%] h-[1px] bg-red-600/50 -translate-y-1/2 z-0 blur-sm"></div>

        <motion.div 
            className="flex gap-8 px-6 min-w-max"
            style={{ x }}
        >
            {events.map((event, index) => (
                <div key={event.id} className="relative group w-[300px] md:w-[400px] h-[450px] bg-zinc-900/50 backdrop-blur-sm border border-white/10 overflow-hidden rounded-xl hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2">
                    {/* Image Background */}
                    <div className="absolute inset-0">
                        <img src={event.image} alt={event.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                        <div className="flex justify-between items-end mb-4">
                            <div className="text-5xl font-orbitron font-bold text-white/10 absolute top-4 right-4 group-hover:text-red-600/20 transition-colors">
                                {`0${index + 1}`}
                            </div>
                            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold font-orbitron skew-x-[-10deg]">
                                UPCOMING
                            </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold font-orbitron text-white mb-1 group-hover:text-red-500 transition-colors">{event.name}</h3>
                        <div className="flex items-center gap-2 text-gray-400 mb-4 font-poppins text-sm">
                            <MapPin className="w-4 h-4 text-red-500" /> {event.track}
                        </div>
                        
                        <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Date</span>
                                <span className="text-lg font-bold text-white font-orbitron">{event.date}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1"><Clock className="w-3 h-3" /> Starts In</span>
                                <span className="text-lg font-bold text-red-500 font-orbitron">{event.timeLeft}</span>
                            </div>
                        </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/30 rounded-xl pointer-events-none transition-colors duration-300 box-border"></div>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};
