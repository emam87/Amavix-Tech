import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-xl"
    >
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 opacity-70 group-hover:opacity-95"></div>
      
      <div className="absolute bottom-4 left-0 p-14 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-blue-400 text-[11px] font-black uppercase tracking-[0.3em] mb-4 block">{category}</span>
        <h3 className="text-4xl font-black text-white mb-8 tracking-tighter leading-[1.1]">{title}</h3>
        <div className="flex items-center gap-3 text-xs text-gray-300 font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span>Explore Details</span>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M13 7l5 5-5 5M6 7l5 5-5 5"></path></svg>
        </div>
      </div>

      {/* Decorative border glow effect on hover */}
      <div className="absolute inset-0 border-[3px] border-blue-500/0 group-hover:border-blue-500/30 rounded-3xl transition-all duration-500"></div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Fintech Mobile Wallet",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "AI Logistics Dashboard",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Crypto Exchange Platform",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Smart Home IoT App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="portfolio" className="bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-8 md:gap-12">
          <div>
            <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Work</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">Featured <span className="text-gradient">Projects</span></h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary whitespace-nowrap !border-gray-200 !py-2.5 !px-6 text-sm"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
