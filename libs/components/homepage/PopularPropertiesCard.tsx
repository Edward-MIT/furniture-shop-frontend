import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Bed, ChefHat, Eye, Heart, Home, Sofa } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";


const PopularPropertyCard = ({property}: {property:any}) => {
  const [liked, setLiked] = useState(false);

  return(
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge
          className={`absolute top-2 right-2 ${property.type === 'rent' ? 'bg-blue-500' : 'bg-green-500'}`}
        >
          {property.type === 'rent' ? 'For Rent' : 'For Sale'}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{property.name}</h3>
          <div className="text-right">
            <p className="font-bold text-amber-600">{property.price}</p>
            {property.salePrice && (
              <p className="text-sm text-gray-500">{property.salePrice}</p>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{property.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {property.category === 'Living Room' && <Sofa className="w-4 h-4" />}
            {property.category === 'Bedroom' && <Bed className="w-4 h-4" />}
            {property.category === 'Dining Room' && <ChefHat className="w-4 h-4" />}
            {property.category === 'Office' && <Home className="w-4 h-4" />}
            <span className="text-sm text-gray-600">{property.category}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{property.views}</span>
            </div>
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-1 hover:text-red-500 transition-colors"
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
              <span>{property.likes + (liked ? 1 : 0)}</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">by {property.agent}</span>
          <Button size="sm" asChild>
            <Link href={`/property/${property.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default PopularPropertyCard;