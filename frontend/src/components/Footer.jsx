import { Mail } from 'lucide-react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 border-t border-gray-100 bg-gray-50/30 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md">
                <img src={logo} alt="Amavix Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-gray-900">
                Amavix<span className="text-gradient">Tech</span>
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-600 max-w-sm mb-8 leading-loose font-medium break-words">
              Building future-ready digital solutions for businesses that want to stay ahead of the curve.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61588749856921" },
                { Icon: FaGithub, href: "#" },
                { Icon: FaLinkedin, href: "#" },
                { Icon: Mail, href: "mailto:amavixtech@gmail.com" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-2xl glass flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-500/30 transition-all shadow-sm"
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-900">Company</h4>
            <ul className="space-y-4 text-gray-600 text-sm font-bold">
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-900">Services</h4>
            <ul className="space-y-4 text-gray-600 text-sm font-bold">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Web Dev</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-900">Support</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600 text-sm font-bold">
                <Mail size={16} className="text-blue-600" />
                <a href="mailto:amavixtech@gmail.com" className="hover:text-blue-600 transition-colors break-all">
                  amavixtech@gmail.com
                </a>
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Available 24/7 for your digital needs.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} AMAVIX TECH. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
