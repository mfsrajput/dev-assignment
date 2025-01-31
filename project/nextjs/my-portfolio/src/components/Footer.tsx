
import {  SiGithub,SiLinkedin } from "react-icons/si"; // Import LinkedIn icon from Simple Icons

const Footer = () => {
  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Farhan Rajput. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/mfsrajputgithub.com/mfsrajput" className="text-secondary-foreground hover:text-primary" aria-label="GitHub">
              <SiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/muhammad-farhan-rajput-78b5062b9" className="text-secondary-foreground hover:text-primary" aria-label="LinkedIn">
              <SiLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
