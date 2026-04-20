import { Mail, Phone, MapPin, Code2, Brain, FlaskConical, GraduationCap, User } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const personalDetails = {
    name: "Adari Vallika",
    phone: "9494987722",
    personalEmail: "vallikavishnupriya14@gmail.com",
    collegeEmail: "vallika.adari@mahindrauniversity.edu.in", // Assumed format based on institution
    skills: ["Python", "Machine Learning", "NLP", "C", "Java", "Deep Learning"],
    university: "Mahindra École Centrale",
    course: "Bachelor of Technology (Artificial Intelligence Engg)",
    location: "Hyderabad",
    skillCategories: [
      { name: "Computational", items: ["C", "Python", "Java", "MATLAB", "MS Excel", "HTML", "SQL"] },
      { name: "Design Software", items: ["Canva", "Figma", "Google sites"] },
      { name: "Developer Tools", items: ["Git", "VS Code"] },
      { name: "Libraries", items: ["NumPy", "Matplotlib", "Pandas"] }
    ]
  };

  const researchInterests = [
    "Generative AI in Healthcare Diagnostics",
    "NLP-Based Sentiment Analysis & Trend Monitoring",
    "Computer Vision for Medical Image Classification",
    "Deep Learning Architectures for Alzheimer's Detection"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 border-b border-neutral-900">
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-serif font-black tracking-tighter leading-none text-violet-400"
          >
            {personalDetails.name}
          </motion.h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed italic">
            AI Engineering student at {personalDetails.university}, passionate about creating intelligent solutions for real-world healthcare challenges.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {personalDetails.skills.map((skill) => (
              <span key={skill} className="px-4 py-1 bg-zinc-900 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest border border-zinc-800">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About & Research Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-500/80">
            About Me
          </h2>
          <div className="prose prose-invert">
            <p className="text-zinc-400 leading-relaxed italic text-lg">
              "I am Adari Vallika, a dedicated student pursuing my B.Tech in Artificial Intelligence. My journey is driven by a deep curiosity for how large-scale data and neural networks can transform medical diagnostics and monitoring."
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-500/80">
            Research Interests
          </h2>
          <ul className="space-y-4">
            {researchInterests.map((interest, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-neutral-950 border border-zinc-900 rounded-3xl hover:border-violet-900/50 transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-violet-900 mt-2.5 flex-shrink-0" />
                <span className="text-zinc-300 leading-tight">{interest}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 opacity-30">
          <div className="h-px bg-zinc-800 flex-1"></div>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
            Technical Expertise
          </h2>
          <div className="h-px bg-zinc-800 flex-1"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {personalDetails.skillCategories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-6 p-8 rounded-[2rem] bg-black border border-zinc-900 hover:border-violet-950 transition-colors"
            >
              <h3 className="text-[10px] font-mono text-violet-500/70 uppercase tracking-[0.3em]">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(skill => (
                  <span key={skill} className="text-zinc-500 text-xs py-1 px-3 bg-zinc-950 rounded-full border border-zinc-900/50">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Details Section */}
      <section className="space-y-12 bg-neutral-950 border border-zinc-900 p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-500 max-md:text-center">
          Personal Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 block">Contact</span>
            <div className="space-y-2">
              <p className="text-zinc-300 break-all">{personalDetails.personalEmail}</p>
              <p className="text-zinc-600 text-sm italic">{personalDetails.collegeEmail}</p>
              <p className="text-violet-400 mt-4 tracking-wider">{personalDetails.phone}</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 block">Education</span>
            <div className="space-y-2 text-zinc-300">
              <p className="font-medium text-violet-200">{personalDetails.course}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{personalDetails.university}</p>
              <p className="text-zinc-600 text-sm italic">CGPA: 6.63 (till 5th sem)</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 block">Location</span>
            <div className="space-y-2">
              <p className="text-zinc-300">{personalDetails.location}</p>
              <p className="text-zinc-600 text-sm">Mahindra École Centrale Campus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
