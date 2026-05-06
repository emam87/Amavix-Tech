import { motion } from 'framer-motion';
import { ArrowRight, Code, Rocket, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-100/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-blue-500/10 text-blue-600 text-xs md:text-sm font-black mb-8 shadow-sm"
            >
              <Zap size={18} className="animate-pulse" />
              <span className="uppercase tracking-[0.2em]">Innovating Digital Excellence</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-10 tracking-tighter text-gray-900 break-words">
              Building <span className="text-gradient">Future-Ready</span> Digital Solutions
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-xl leading-relaxed font-medium opacity-80">
              We craft high-performance software, high-converting websites, and seamless mobile applications designed for ultimate scalability.
            </p>

            <div className="flex flex-wrap gap-5 md:gap-8">
              <motion.button
                whileHover={{ scale: 1.05, translateY: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary !px-10 !py-5 text-lg font-black flex items-center gap-4 group"
              >
                Start Your Project
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, translateY: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary !px-10 !py-5 text-lg font-black"
              >
                Our Portfolio
              </motion.button>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 glass p-8 rounded-3xl border-gray-100 shadow-2xl backdrop-blur-xl overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>

              <div className="relative">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">amavix-app-v2.0.js</div>
                </div>

                <div className="space-y-4 font-mono text-xs md:text-sm">
                  <p className="text-blue-600">const <span className="text-purple-600">Amavix</span> = () ={'>'} {'{'}</p>
                  <p className="pl-4 text-gray-700">return (</p>
                  <p className="pl-8 text-gray-700">{'<'} <span className="text-blue-600">DigitalTransformation</span></p>
                  <p className="pl-12 text-gray-500 italic">priority="high"</p>
                  <p className="pl-12 text-gray-500 italic">scalable={'{true}'}</p>
                  <p className="pl-12 text-gray-500 italic">innovation="unlimited"</p>
                  <p className="pl-8 text-gray-700">{'/>'}</p>
                  <p className="pl-4 text-gray-700">)</p>
                  <p className="text-blue-600">{'}'}</p>
                </div>

                <div className="mt-10 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                    <span className="text-xs font-bold text-blue-700">System Live</span>
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">99.9%</div>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
