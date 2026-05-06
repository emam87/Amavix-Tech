import { motion } from 'framer-motion';
import { Globe, Smartphone, Server, Layout, Shield, Database, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="glass p-6 md:p-8 rounded-3xl group cursor-pointer relative overflow-hidden transition-all duration-500 hover:shadow-xl"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>

      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-6 md:mb-8 shadow-xl shadow-blue-500/10 transition-transform group-hover:rotate-6">
        <Icon size={32} />
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 leading-snug break-words">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium opacity-90 break-words">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        Learn More
        <ArrowRight size={16} />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "High-performance websites and web applications built with modern frameworks for ultimate scalability.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that provide seamless user experiences across all devices.",
    },
    {
      icon: Server,
      title: "SaaS Solutions",
      description: "Custom software-as-a-service platforms designed to streamline business operations and drive recurring value.",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "User-centric design strategies that blend aesthetics with functionality for maximum engagement.",
    },
    {
      icon: Database,
      title: "Cloud Infrastructure",
      description: "Secure and robust cloud architecture to support your growing digital presence and data needs.",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Comprehensive security audits and implementations to protect your digital assets from emerging threats.",
    }
  ];

  return (
    <section id="services" className="bg-gray-50/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-8 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-gray-900 leading-[1.1] tracking-tighter max-w-4xl mx-auto">
              Comprehensive <span className="text-gradient">Tech Solutions</span>
            </h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto font-medium text-lg md:text-xl leading-relaxed opacity-80">
              We provide a full spectrum of software development services to help you build, scale, and secure your digital future.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
