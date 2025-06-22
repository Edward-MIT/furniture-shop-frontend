
import { useState } from 'react';
import Link from 'next/link';
import { User, Globe, Menu, X, Sofa } from 'lucide-react';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import "@radix-ui/react-dropdown-menu"

export default function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/properties', label: 'PROPERTIES' },
    { href: '/agents', label: 'AGENTS' },
    { href: '/community', label: 'COMMUNITY' },
    { href: '/my-page', label: 'MY PAGE' },
    { href: '/cs-center', label: 'CS CENTER' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__wrapper">
          {/* Logo */}
          <Link href="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <Sofa className="navbar__logo-icon-svg" />
            </div>
            <span className="navbar__logo-text">FurniShop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar__links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="navbar__right">
            {/* Language */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="navbar__lang-btn">
                  <Globe className="navbar__lang-icon" />
                  EN
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='dropdown-menu-content'>
                <DropdownMenuItem className='dropdown-menu-item'>English</DropdownMenuItem>
                <DropdownMenuItem className='dropdown-menu-item'>한국어</DropdownMenuItem>
                <DropdownMenuItem className='dropdown-menu-item'>日本語</DropdownMenuItem>
                <DropdownMenuItem className='dropdown-menu-item'>中文</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Avatar */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="navbar__avatar-btn">
                  <Avatar className="navbar__avatar">
                    <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-2204.jpeg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem asChild><Link href="/my-page">My Profile</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/my-page">Settings</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/login">Sign Out</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar__mobile-toggle">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="navbar__menu-icon" /> : <Menu className="navbar__menu-icon" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="navbar__mobile">
            <div className="navbar__mobile-links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="navbar__mobile-footer">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Globe className="navbar__lang-icon" />
                      EN
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>한국어</DropdownMenuItem>
                    <DropdownMenuItem>日本語</DropdownMenuItem>
                    <DropdownMenuItem>中文</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Avatar className="navbar__avatar">
                  <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
