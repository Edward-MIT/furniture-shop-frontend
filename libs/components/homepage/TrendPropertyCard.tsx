import { Bed, ChefHat, Eye, Heart, Home, Sofa } from "lucide-react"
import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"
import { useState } from "react"



const TrendPropertyCard = ({property}: {property:any}) => {
  const [liked, setLiked] = useState(false);
  return (
        <Card className="property-card">
      <div className="image-wrapper">
        <img
          src={property.image}
          alt={property.name}
          className="property-image"
        />
        <Badge className={`property-badge ${property.type === "rent" ? "rent" : "sale"}`}>
          {property.type === "rent" ? "For Rent" : "For Sale"}
        </Badge>
      </div>

      <CardContent className="card-content">
        <div className="card-header">
          <h3 className="property-name">{property.name}</h3>
          <div className="price-section">
            <p className="price">{property.price}</p>
            {property.salePrice && (
              <p className="sale-price">{property.salePrice}</p>
            )}
          </div>
        </div>

        <p className="property-desc">{property.description}</p>

        <div className="card-meta">
          <div className="category">
            {property.category === "Living Room" && <Sofa className="icon" />}
            {property.category === "Bedroom" && <Bed className="icon" />}
            {property.category === "Dining Room" && <ChefHat className="icon" />}
            {property.category === "Office" && <Home className="icon" />}
            <span className="label">{property.category}</span>
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

        <div className="card-footer">
          <span className="agent">by {property.agent}</span>
          <Button size="sm" asChild>
            <Link href={`/properties/${property.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>

  )
}

export default TrendPropertyCard