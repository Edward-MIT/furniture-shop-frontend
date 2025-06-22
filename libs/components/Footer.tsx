import Link from 'next/link';
import { Sofa, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer =() => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__section">
            <Link href="/" className="footer__logo">
              <div className="footer__logo-icon">
                <Sofa className="icon-white" />
              </div>
              <span className="footer__logo-text">FurniShop</span>
            </Link>
            <p className="footer__description">
              Premium furniture rental and sales platform. Find the perfect pieces for your home and office.
            </p>
            <div className="footer__socials">
              <Link href="#"><Facebook className="icon" /></Link>
              <Link href="#"><Twitter className="icon" /></Link>
              <Link href="#"><Instagram className="icon" /></Link>
              <Link href="#"><Linkedin className="icon" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li><Link href="/properties">Browse Properties</Link></li>
              <li><Link href="/agents">Find Agents</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/my-page">My Profile</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer__section">
            <h3 className="footer__heading">Categories</h3>
            <ul className="footer__links">
              <li><Link href="/properties?category=living-room">Living Room</Link></li>
              <li><Link href="/properties?category=bedroom">Bedroom</Link></li>
              <li><Link href="/properties?category=dining-room">Dining Room</Link></li>
              <li><Link href="/properties?category=office">Office</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h3 className="footer__heading">Contact Us</h3>
            <div className="footer__contact">
              <div className="footer__contact-item"><MapPin className="icon-colored" />123 Furniture St, Design City, DC 12345</div>
              <div className="footer__contact-item"><Phone className="icon-colored" />+1 (555) 123-4567</div>
              <div className="footer__contact-item"><Mail className="icon-colored" />hello@furnishop.com</div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2024 FurniShop. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cs-center">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;