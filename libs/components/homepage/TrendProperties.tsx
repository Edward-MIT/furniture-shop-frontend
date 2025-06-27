import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight, TrendingDown } from "lucide-react";
import TrendPropertyCard from "./TrendPropertyCard";


const TrendProperties = () => {
  const [trendProperties, setTrendProperties] = useState<number[]>([
    1,2,3,4
  ]);
  return(
        <section className="trending-section">
      <div className="trending-header">
        <div>
          <h2 className="trending-title">Trending Properties</h2>
          <p className="trending-subtitle">Most liked furniture this week</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/property" className="trending-button-link">
            View All <ChevronRight className="trending-icon" />
          </Link>
        </Button>
      </div>

      <div className="trending-grid">
        {trendProperties.map((property, index) => (
          <TrendPropertyCard key={index} />
        ))}
      </div>
    </section>

  )
}

export default TrendProperties;