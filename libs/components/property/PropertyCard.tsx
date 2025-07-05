import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Bed, ChefHat, Eye, Heart, Home, Sofa } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";


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
    agent: 'Sarah Johnson',
    location: 'Downtown',
    condition: 'Excellent'
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
    agent: 'Michael Chen',
    location: 'Midtown',
    condition: 'Good'
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
    agent: 'Emma Wilson',
    location: 'Uptown',
    condition: 'Excellent'
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
    agent: 'David Brown',
    location: 'Business District',
    condition: 'Very Good'
  },
  {
    id: 5,
    name: 'Vintage Armchair',
    price: '$129/month',
    salePrice: '$999',
    description: 'Classic vintage armchair with restored upholstery',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Living Room',
    type: 'rent',
    views: 654,
    likes: 78,
    isForSale: false,
    agent: 'Sarah Johnson',
    location: 'Historic District',
    condition: 'Good'
  },
  {
    id: 6,
    name: 'Glass Coffee Table',
    price: '$399',
    description: 'Modern glass coffee table with chrome legs',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Living Room',
    type: 'sale',
    views: 432,
    likes: 56,
    isForSale: true,
    agent: 'Michael Chen',
    location: 'Downtown',
    condition: 'Excellent'
  }
];


const PropertyCard = ({property, viewMode}: {property: any; viewMode: 'grid' | 'list'}) => {
  const [liked, setLiked] = useState(false);
  if (viewMode === 'list') {
    return (
      <Card className="property-card">
        <CardContent className="property-card__content">
          <div className="property-card__inner">
            <div className="property-card__image-wrapper">
              <img
                src={property.image}
                alt={property.name}
                className="property-card__image"
              />
              <Badge
                className={`property-card__badge ${property.type === 'rent' ? 'rent' : 'sale'}`}
              >
                {property.type === 'rent' ? 'For Rent' : 'For Sale'}
              </Badge>
            </div>

            <div className="property-card__info">
              <div className="property-card__header">
                <div>
                  <h3>{property.name}</h3>
                  <p className="description">{property.description}</p>
                  <div className="property-card__meta">
                    <span className="category">
                      {property.category === 'Living Room' && <Sofa className="icon" />}
                      {property.category === 'Bedroom' && <Bed className="icon" />}
                      {property.category === 'Dining Room' && <ChefHat className="icon" />}
                      {property.category === 'Office' && <Home className="icon" />}
                      {property.category}
                    </span>
                    <span>📍 {property.location}</span>
                    <span>✨ {property.condition}</span>
                  </div>
                </div>
                <div className="property-card__price">
                  <p>{property.price}</p>
                  {property.salePrice && <p className="sale">{property.salePrice}</p>}
                </div>
              </div>

              <div className="property-card__footer">
                <div className="footer-left">
                  <span className="agent">by {property.agent}</span>
                  <div className="views-likes">
                    <div className="views">
                      <Eye className="icon" />
                      <span>{property.views}</span>
                    </div>
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`like-btn ${liked ? 'liked' : ''}`}
                    >
                      <Heart className="icon" />
                      <span>{property.likes + (liked ? 1 : 0)}</span>
                    </button>
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/properties/${property.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
       </ Card>
    );
  };
  return(
    <Card className="property-card-sm">
  <div className="property-card-sm__image-wrapper">
    <img
      src={property.image}
      alt={property.name}
      className="property-card-sm__image"
    />
    <Badge
      className={`property-card-sm__badge ${property.type === 'rent' ? 'rent' : 'sale'}`}
    >
      {property.type === 'rent' ? 'For Rent' : 'For Sale'}
    </Badge>
  </div>

  <CardContent className="property-card-sm__content">
    <div className="property-card-sm__header">
      <h3>{property.name}</h3>
      <div className="price">
        <p>{property.price}</p>
        {property.salePrice && <p className="sale">{property.salePrice}</p>}
      </div>
    </div>

    <p className="description">{property.description}</p>

    <div className="property-card-sm__meta">
      <div className="category">
        {property.category === 'Living Room' && <Sofa className="icon" />}
        {property.category === 'Bedroom' && <Bed className="icon" />}
        {property.category === 'Dining Room' && <ChefHat className="icon" />}
        {property.category === 'Office' && <Home className="icon" />}
        <span>{property.category}</span>
      </div>

      <div className="stats">
        <div className="views">
          <Eye className="icon" />
          <span>{property.views}</span>
        </div>
        <button
          onClick={() => setLiked(!liked)}
          className={`like-btn ${liked ? 'liked' : ''}`}
        >
          <Heart className="icon" />
          <span>{property.likes + (liked ? 1 : 0)}</span>
        </button>
      </div>
    </div>

    <div className="property-card-sm__footer">
      <span className="agent">by {property.agent}</span>
      <Button size="sm" asChild>
        <Link href={`/properties/${property.id}`}>View Details</Link>
      </Button>
    </div>
  </CardContent>
</Card>

  );
}

export default PropertyCard;