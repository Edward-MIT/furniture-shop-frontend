import { Eye, Heart } from "lucide-react"
import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"



const TrendPropertCard = () => {
  return (
       <Card className="property-card">
      <div className="property-image-container">
        <img
          src='https://tse2.mm.bing.net/th?id=OIP.ajRJhWSQygdDZ4lYhVvViAHaHa&pid=Api&P=0&h=220'
          alt={'Bella'}
          className="property-image"
        />
        <Badge
         className="property-badge"
          // className={`property-badge ${
          //   property.type === "rent" ? "rent" : "sale"
          // }`}
        >
          {/* {property.type === "rent" ? "For Rent" : "For Sale"} */}
          Rent
        </Badge>
      </div>

      <CardContent className="property-content">
        <div className="property-header">
          <h3 className="property-title">Furniture</h3>
          <div className="property-prices">
            <p className="price">1300</p>
             1300(
              <p className="sale-price">1200</p>
            )
          </div>
        </div>

        <p className="property-description">best for sleep</p>

        <div className="property-meta">
          <div className="category">
            {/* {property.category === "Living Room" && <Sofa className="icon" />}
            {property.category === "Bedroom" && <Bed className="icon" />}
            {property.category === "Dining Room" && <ChefHat className="icon" />}
            {property.category === "Office" && <Home className="icon" />} */}
            <span>Office</span>
          </div>

          <div className="stats">
            <div className="views">
              <Eye className="icon" />
              <span>23</span>
            </div>
            <button
              // onClick={() => setLiked(!liked)}
              // className={`likes ${liked ? "liked" : ""}`}
            >
              <Heart className="icon" />
              <span>23000
                {/* {property.likes + (liked ? 1 : 0)} */}

              </span>
            </button>
          </div>
        </div>

        <div className="property-footer">
          <span className="agent">by Edward</span>
          <Button size="sm" asChild>
            <Link href={`/property/`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>

  )
}

export default TrendPropertCard