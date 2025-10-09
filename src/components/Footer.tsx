import React from "react";
import { Facebook } from "lucide-react"; // Facebook icon
import logo from "@/assets/Back.png"; // logo path

const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={logo}
                alt="Kimoel Trading Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">
                KIMOEL TRADING Inc.
              </span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
             Delivering reliable industrial products and engineering solutions
             from automation systems to fabrication and construction services 
             trusted across the Philippines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li>📍 Brgy. Lodlod, Lipa City, Batangas</li>
              <li>📞 +63 912 345 6789</li>
              <li>
                📧{" "}
                <a
                  href="mailto:kimoel_leotagle@yahoo.com"
                  className="hover:text-primary transition-colors"
                >
                  kimoel_leotagle@yahoo.com
                </a>
              </li>

              {/* Facebook */}
              <li className="flex items-center space-x-2">
                {/* 🟦 Facebook icon now in official blue */}
                <Facebook className="w-5 h-5" style={{ color: "#1877F2" }} />
                <a
                  href="https://www.facebook.com/profile.php?id=100075976223841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Kimoel Trading and Construction Incorporated
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} KIMOEL TRADING Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
