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
  }
]


const PopularProperties = ({initialInput, ...props}: any) => {
  // const [popularProperties, setPopularProperties] = useState<number[]>
  // (initialInput)

  const popularProperties = mockProperties.sort((a,b)=> b.views - a.views)

  return (
          <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Properties</h2>
              <p className="text-gray-600">Most viewed furniture pieces</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/properties" className="flex items-center gap-2">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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