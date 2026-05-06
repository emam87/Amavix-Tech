import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ value, label, suffix = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  
  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2"
      >
        {inView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {value}
          </motion.span>
        ) : "0"}
        <span className="text-blue-600">{suffix}</span>
      </motion.div>
      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-xs mb-8 block">Who We Are</span>
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-gray-900 leading-[1.1] tracking-tighter break-words">
              Innovating at the Intersection of <span className="text-gradient">Vision and Technology</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-loose font-medium break-words">
              Amavix Tech is a leading software development firm dedicated to building high-performance digital products. Our team of experts combines creative design with technical excellence to deliver solutions that drive business growth.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-loose font-medium opacity-80 break-words">
              From startups to enterprises, we help organizations navigate the digital landscape with custom-built software that is both scalable and future-proof.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 border-t border-gray-100 pt-10">
              <Counter value={150} label="Projects" suffix="+" />
              <Counter value={80} label="Clients" suffix="+" />
              <Counter value={10} label="Experience" suffix="Y" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4.5] lg:aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
               <div 
                 className="absolute inset-0 w-full h-full bg-center bg-cover transition-transform duration-1000 group-hover:scale-110"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000')" }}
               ></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
            
            {/* Overlay card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 glass p-4 md:p-6 rounded-2xl border-white hidden sm:block shadow-2xl"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shadow-sm">
                     <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                     <div className="text-sm font-bold text-gray-900 leading-tight">Industry Standard</div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">ISO 27001 Certified</div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
