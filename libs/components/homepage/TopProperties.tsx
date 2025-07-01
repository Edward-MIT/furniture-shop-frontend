import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TrendPropertyCard from "./TrendPropertyCard";
const mockProperties = [
  {
    id: 1,
    name: 'Modern Leather Sofa Set',
    price: '$299/month',
    salePrice: '$2,999',
    description: 'Luxury 3-piece leather sofa set perfect for modern living rooms',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Living Room',
    type: 'rent',
    views: 1250,
    likes: 89,
    isForSale: false,
    agent: 'Sarah Johnson'
  },
  {
    id: 2,
    name: 'Oak Dining Table',
    price: '$899',
    description: 'Solid oak dining table that seats 6 people comfortably',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dining Room',
    type: 'sale',
    views: 980,
    likes: 156,
    isForSale: true,
    agent: 'Michael Chen'
  },
  {
    id: 3,
    name: 'King Size Bed Frame',
    price: '$189/month',
    salePrice: '$1,599',
    description: 'Elegant wooden bed frame with built-in storage',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Bedroom',
    type: 'rent',
    views: 2100,
    likes: 234,
    isForSale: false,
    agent: 'Emma Wilson'
  },
  {
    id: 4,
    name: 'Modern Office Desk',
    price: '$149/month',
    salePrice: '$1,299',
    description: 'Sleek office desk with built-in cable management',
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Office',
    type: 'rent',
    views: 756,
    likes: 92,
    isForSale: false,
    agent: 'David Brown'
  }
];

const topAgents = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    properties: 45,
    rating: 4.9,
    specialty: 'Living Room Furniture'
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    properties: 38,
    rating: 4.8,
    specialty: 'Office & Dining'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    properties: 52,
    rating: 4.9,
    specialty: 'Bedroom Sets'
  }
];

const events = [
  {
    id: 1,
    title: 'Summer Furniture Sale',
    date: '2024-07-15',
    description: 'Up to 40% off on all outdoor furniture'
  },
  {
    id: 2,
    title: 'Home Styling Workshop',
    date: '2024-07-20',
    description: 'Learn interior design tips from professionals'
  }
];

const communityHighlights = [
  {
    id: 1,
    title: 'Best Furniture Arrangements for Small Spaces',
    author: 'Design Pro',
    replies: 23,
    category: 'Tips & Tricks'
  },
  {
    id: 2,
    title: 'Quality Check: My Experience with Premium Sofas',
    author: 'Furniture Lover',
    replies: 15,
    category: 'Reviews'
  }
];


const TopProperties = () => {
  const topProperties = mockProperties.slice(0,4);

  return (
       <section className="top-properties-section">
      <div className="section-header">
        <div>
          <h2 className="section-title">Top Properties</h2>
          <p className="section-subtitle">Premium quality selections</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/property" className="view-all-link">
            View All <ChevronRight className="chevron-icon" />
          </Link>
        </Button>
      </div>

      <div className="property-grid">
        {topProperties.map((property) => (
          <TrendPropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );

}

export default TopProperties;