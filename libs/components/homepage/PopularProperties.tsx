import { useState } from "react"
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PopularPropertyCard from "./PopularPropertiesCard";

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
]


const PopularProperties = ({initialInput, ...props}: any) => {
  // const [popularProperties, setPopularProperties] = useState<number[]>
  // (initialInput)

  const popularProperties = mockProperties.sort((a,b)=> b.views - a.views)

  return (

    <section className="popular-properties">
      <div className="popular-header">
        <div>
          <h2 className="popular-title">Popular Properties</h2>
          <p className="popular-subtitle">Most viewed furniture pieces</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/properties" className="view-all-link">
            View All <ChevronRight className="view-all-icon" />
          </Link>
        </Button>
      </div>

      <div className="property-grid">
        {popularProperties.map((property) => (
          <PopularPropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>

  );
}

PopularProperties.defaultProps = {
  initialInput:[1,2,3,4]
}

export default PopularProperties;