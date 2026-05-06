import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://formspree.io/f/xvgzlowq", { // Replace with a real Formspree ID later
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-gray-50/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/10 rounded-full blur-[160px] -z-10"></div>

      <div className="container">
        <div className="max-w-[1400px] mx-auto glass p-10 md:p-16 lg:p-24 rounded-[4rem] border-white/80 shadow-[0_40px_80px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Left Content - Shifted slightly right for balance */}
            <div className="lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Connect with Us</span>
                <h2 className="text-5xl md:text-7xl font-black mb-10 text-gray-900 leading-[1.05] tracking-tighter">
                  Ready to <span className="text-gradient">Start Your Project?</span>
                </h2>
                <p className="text-xl text-gray-600 mb-16 leading-loose font-medium opacity-80 max-w-lg">
                  Have a vision? We have the expertise to bring it to life. Reach out today and let's build something extraordinary together.
                </p>
              </motion.div>

              <div className="space-y-10">
                {[
                  { icon: Mail, text: "amavixtech@gmail.com", label: "Direct Email", color: "text-blue-600" },
                  { icon: Phone, text: "+880 1758 347587", label: "Phone Support", color: "text-purple-600" },
                  { icon: MapPin, text: "Dhaka, Bangladesh", label: "Our Headquarters", color: "text-cyan-600" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className={`w-16 h-16 rounded-2xl glass flex items-center justify-center ${item.color} group-hover:scale-110 transition-all duration-500 shadow-sm border-white`}>
                      <item.icon size={28} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-2">{item.label}</div>
                      <div className="text-gray-900 font-black text-xl md:text-2xl truncate tracking-tight">{item.text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Form - Refined Professional Look */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12 bg-white/80 p-10 md:p-16 rounded-[3.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
              action="https://formspree.io/f/xvgzlowq"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12">
                <div className="space-y-5">
                  <label className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.3em] ml-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder=""
                    className="w-full bg-gray-50/30 border border-gray-100 rounded-2xl px-8 py-5 outline-none focus:border-blue-500 focus:bg-white focus:ring-8 focus:ring-blue-500/5 transition-all font-semibold text-gray-900 placeholder:text-gray-400 shadow-sm text-lg"
                  />
                </div>
                <div className="space-y-5">
                  <label className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.3em] ml-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder=""
                    className="w-full bg-gray-50/30 border border-gray-100 rounded-2xl px-8 py-5 outline-none focus:border-blue-500 focus:bg-white focus:ring-8 focus:ring-blue-500/5 transition-all font-semibold text-gray-900 placeholder:text-gray-400 shadow-sm text-lg"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <label className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.3em] ml-2">Service Interested In</label>
                <div className="relative">
                  <select 
                    name="service"
                    className="w-full bg-gray-50/30 border border-gray-100 rounded-2xl px-8 py-5 outline-none focus:border-blue-500 focus:bg-white focus:ring-8 focus:ring-blue-500/5 transition-all font-semibold text-gray-900 appearance-none cursor-pointer shadow-sm text-lg"
                  >
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>SaaS Solutions</option>
                    <option>UI/UX Design</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <label className="text-[12px] font-bold text-gray-500 uppercase tracking-[0.3em] ml-2">Project Details</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder=""
                  className="w-full bg-gray-50/30 border border-gray-100 rounded-2xl px-8 py-6 outline-none focus:border-blue-500 focus:bg-white focus:ring-8 focus:ring-blue-500/5 transition-all font-semibold text-gray-900 resize-none placeholder:text-gray-400 shadow-sm text-lg leading-relaxed"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, translateY: -3 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-5 py-6 text-xl font-black shadow-2xl shadow-blue-500/20 rounded-2xl transition-all"
              >
                Send Message
                <Send size={28} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
