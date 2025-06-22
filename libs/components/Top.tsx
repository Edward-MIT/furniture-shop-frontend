// import { Stack } from "@mui/material"

// const Top = () => {
//   return(
//     <Stack>Top</Stack>
//   )
// }

// export default Top;

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { User, Globe, Menu, X, Sofa } from 'lucide-react';

// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
// import { Button } from './ui/button';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

// export default function HomeNavbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { href: '/', label: 'HOME' },
//     { href: '/properties', label: 'PROPERTIES' },
//     { href: '/agents', label: 'AGENTS' },
//     { href: '/community', label: 'COMMUNITY' },
//     { href: '/my-page', label: 'MY PAGE' },
//     { href: '/cs-center', label: 'CS CENTER' },
//   ];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="bg-amber-600 p-2 rounded-lg">
//               <Sofa className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold text-gray-900">FurniShop</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Right Side Icons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Language Selector */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="sm">
//                   <Globe className="w-4 h-4 mr-2" />
//                   EN
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuItem>English</DropdownMenuItem>
//                 <DropdownMenuItem>한국어</DropdownMenuItem>
//                 <DropdownMenuItem>日本語</DropdownMenuItem>
//                 <DropdownMenuItem>中文</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* User Avatar */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//                   <Avatar className="h-8 w-8">
//                     <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="User" />
//                     <AvatarFallback>U</AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56" align="end" forceMount>
//                 <DropdownMenuItem asChild>
//                   <Link href="/my-page">My Profile</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/my-page">Settings</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/login">Sign Out</Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-gray-200">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="block px-3 py-2 text-gray-700 hover:text-amber-600 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200 mt-4">
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="sm">
//                       <Globe className="w-4 h-4 mr-2" />
//                       EN
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuItem>English</DropdownMenuItem>
//                     <DropdownMenuItem>한국어</DropdownMenuItem>
//                     <DropdownMenuItem>日本語</DropdownMenuItem>
//                     <DropdownMenuItem>中文</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="User" />
//                   <AvatarFallback>U</AvatarFallback>
//                 </Avatar>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Public as GlobeIcon,
  AccountCircle,
} from '@mui/icons-material';
import { SofaIcon } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/properties', label: 'PROPERTIES' },
  { href: '/agents', label: 'AGENTS' },
  { href: '/community', label: 'COMMUNITY' },
  { href: '/my-page', label: 'MY PAGE' },
  { href: '/cs-center', label: 'CS CENTER' },
];

export default function HomeNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);
  const [userAnchorEl, setUserAnchorEl] = useState<null | HTMLElement>(null);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLangClick = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setLangAnchorEl(null);
    setUserAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            {/* <SofaIcon sx={{ color: 'white', backgroundColor: 'orange', borderRadius: 1, p: 0.5, mr: 1 }} /> */}
            <Typography variant="h6" component={Link} href="/" sx={{ textDecoration: 'none', color: 'black', fontWeight: 700 }}>
              FurniShop
            </Typography>
          </Box>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navLinks.map((link) => (
              <Button key={link.href} component={Link} href={link.href} sx={{ color: 'text.primary' }}>
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Right-side Icons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {/* Language Menu */}
            <Button
              onClick={handleLangClick}
              startIcon={<GlobeIcon />}
              variant="outlined"
              size="small"
            >
              EN
            </Button>
            <Menu anchorEl={langAnchorEl} open={Boolean(langAnchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>한국어</MenuItem>
              <MenuItem onClick={handleClose}>日本語</MenuItem>
              <MenuItem onClick={handleClose}>中文</MenuItem>
            </Menu>

            {/* User Menu */}
            <IconButton onClick={handleUserClick}>
              <Avatar
                alt="User"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
            <Menu anchorEl={userAnchorEl} open={Boolean(userAnchorEl)} onClose={handleClose}>
              <MenuItem component={Link} href="/my-page">My Profile</MenuItem>
              <MenuItem component={Link} href="/my-page">Settings</MenuItem>
              <MenuItem component={Link} href="/login">Sign Out</MenuItem>
            </Menu>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer}
            sx={{ display: { md: 'none' } }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="top" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ px: 2, py: 3, backgroundColor: 'white' }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.href}
                component={Link}
                href={link.href}
                onClick={toggleDrawer}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}

            {/* Language Selector */}
            <MenuItem onClick={handleLangClick}>
              <GlobeIcon sx={{ mr: 1 }} /> EN
            </MenuItem>
            <Menu anchorEl={langAnchorEl} open={Boolean(langAnchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>한국어</MenuItem>
              <MenuItem onClick={handleClose}>日本語</MenuItem>
              <MenuItem onClick={handleClose}>中文</MenuItem>
            </Menu>

            {/* User Avatar */}
            <Box display="flex" justifyContent="center" mt={2}>
              <Avatar
                alt="User"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                sx={{ width: 48, height: 48 }}
              />
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
