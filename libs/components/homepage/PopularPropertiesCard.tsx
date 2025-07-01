import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Bed, ChefHat, Eye, Heart, Home, Sofa } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";


const PopularPropertyCard = ({property}: {property:any}) => {
  const [liked, setLiked] = useState(false);

  return(

       <Card className="popular-card">
      <div className="property-image-wrapper">
        <img
          src={property.image}
          alt={property.name}
          className="property-image"
        />
        <Badge
          className={`property-badge ${property.type === "rent" ? "rent" : "sale"}`}
        >
          {property.type === "rent" ? "For Rent" : "For Sale"}
        </Badge>
      </div>

      <CardContent className="property-content">
        <div className="property-header">
          <h3 className="property-name">{property.name}</h3>
          <div className="property-pricing">
            <p className="price">{property.price}</p>
            {property.salePrice && (
              <p className="sale-price">{property.salePrice}</p>
            )}
          </div>
        </div>

        <p className="property-desc">{property.description}</p>

        <div className="property-meta">
          <div className="category">
            {property.category === "Living Room" && <Sofa className="icon" />}
            {property.category === "Bedroom" && <Bed className="icon" />}
            {property.category === "Dining Room" && <ChefHat className="icon" />}
            {property.category === "Office" && <Home className="icon" />}
            <span className="category-label">{property.category}</span>
          </div>

          <div className="stats">
            <div className="views">
              <Eye className="icon" />
              <span>{property.views}</span>
            </div>
            <button
              onClick={() => setLiked(!liked)}
              className={`likes ${liked ? "liked" : ""}`}
            >
              <Heart className="icon" />
              <span>{property.likes + (liked ? 1 : 0)}</span>
            </button>
          </div>
        </div>

        <div className="property-footer">
          <span className="agent">by {property.agent}</span>
          <Button size="sm" asChild>
            <Link href={`/property/${property.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>

  )
}

export default PopularPropertyCard;