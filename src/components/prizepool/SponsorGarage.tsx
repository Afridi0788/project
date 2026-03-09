import { motion } from "framer-motion";

type SponsorGarageProps = {
  raceFinished: boolean;
};

const sponsorPrizes = [
  { title: "AWS Cloud Prize", amount: "$2000" },
  { title: "Polygon Web3 Prize", amount: "$1500" },
  { title: "Best AI Agent", amount: "$1000" },
];

export default function SponsorGarage({ raceFinished }: SponsorGarageProps) {
  return (
    <motion.section
      className="mt-16"
      initial={{ opacity: 0, y: 24 }}
      animate={raceFinished ? { opacity: 1, y: 0 } : { opacity: 0.14, y: 20 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.14 }}
    >
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
          Bonus Lane
        </p>
        <h3 className="mt-2 text-3xl font-black uppercase tracking-wide text-white">
          Sponsor Garage
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {sponsorPrizes.map((sponsor, index) => (
          <motion.article
            key={sponsor.title}
            className="relative overflow-hidden rounded-2xl border border-zinc-700/70 bg-[linear-gradient(160deg,#111319,#0a0b0f)] p-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.45 }}
            animate={
              raceFinished
                ? { boxShadow: "0 0 24px rgba(239,68,68,0.2)" }
                : { boxShadow: "0 0 0 rgba(0,0,0,0)" }
            }
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.14),transparent_58%)]" />
            <p className="relative text-xs uppercase tracking-wide text-zinc-400">
              {sponsor.title}
            </p>
            <p className="relative mt-3 text-2xl font-black text-white">
              {sponsor.amount}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
