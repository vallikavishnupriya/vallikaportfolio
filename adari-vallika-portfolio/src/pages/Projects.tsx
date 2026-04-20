import React from "react";
import { Github, ExternalLink, Cpu, BarChart3, Stethoscope, Coffee } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  const projects = [
    {
      title: "Gen-AI-Based Health Monitoring",
      description: "Machine learning system analyzing glucose, blood pressure, and pulse to predict health risk levels (Normal, Caution, High Risk). Tested multiple models including XGBoost and LightGBM.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      icon: <Stethoscope />,
      github: "https://github.com/vallikavishnupriya/health-monitoring",
      status: "Ongoing"
    },
    {
      title: "Alzheimer’s Disease Classification",
      description: "Deep learning system classifying MRI scans into four stages: Non-Demented, Very Mild, Mild, and Moderate using CNN and hybrid CNN-LSTM architectures. Achieved 97.97% accuracy.",
      technologies: ["PyTorch", "NumPy", "Matplotlib", "Google Colab"],
      icon: <Cpu />,
      github: "https://github.com/vallikavishnupriya/alzheimers-net",
      status: "Ongoing"
    },
    {
      title: "Global Health Trend Monitoring",
      description: "Analyzed large-scale social media text to identify global COVID-19 trends using NLP-based sentiment analysis and BERT transformers. Generated insights for public health monitoring.",
      technologies: ["Hugging Face", "BERT", "NLTK", "Pandas"],
      icon: <BarChart3 />,
      github: "https://github.com/vallikavishnupriya/health-sentiment",
      status: "Completed"
    },
    {
      title: "Cafe Hunting – Java GUI",
      description: "A multi-screen Java GUI application for cafe discovery and workflow management. Built using object-oriented principles and event-driven programming.",
      technologies: ["Java", "Swing", "AWT"],
      icon: <Coffee />,
      github: "https://github.com/vallikavishnupriya/cafe-java",
      status: "Completed"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-serif font-black tracking-tighter text-violet-400"
        >
          Projects
        </motion.h1>
        <p className="text-zinc-500 font-light italic">
          A selection of my technical work ranging from deep learning research to practical software applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-neutral-950 border border-zinc-900 rounded-[2.5rem] p-10 hover:border-violet-900 transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-zinc-900 rounded-2xl group-hover:scale-105 transition-transform duration-500">
                  {React.cloneElement(project.icon as React.ReactElement, {
                    className: "text-violet-500/80",
                    size: 28
                  })}
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                  project.status === "Ongoing" ? "bg-amber-950/20 text-amber-600/80 border border-amber-900/20" : "bg-emerald-950/20 text-emerald-600/80 border border-emerald-900/20"
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-zinc-100 group-hover:text-violet-300 transition-colors">{project.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-[10px] font-mono text-zinc-600 border border-zinc-900 px-3 py-1 rounded-full uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-900/50 flex gap-4">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-violet-400 transition-all"
              >
                <Github size={16} />
                GitHub
                <ExternalLink size={12} className="opacity-30" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
