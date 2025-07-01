import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";



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


const TopAgents = () => {
  return (
      <section className="top-agents-section">
  <div className="top-agents-header">
    <div className="header-text">
      <h2>Top Agents</h2>
      <p>Featured furniture specialists</p>
    </div>
    <Button variant="outline" asChild>
      <Link href="/agents" className="view-all-link">
        View All <ChevronRight className="chevron-icon" />
      </Link>
    </Button>
  </div>

  <div className="top-agents-grid">
    {topAgents.map((agent) => (
      <Card key={agent.id} className="agent-card">
        <CardContent className="agent-card-content">
          <img
            src={agent.avatar}
            alt={agent.name}
            className="agent-avatar"
          />
          <h3>{agent.name}</h3>
          <p className="specialty">{agent.specialty}</p>
          <div className="info">
            <span>{agent.properties} Properties</span>
            <div className="rating">
              <Star className="star-icon" />
              <span>{agent.rating}</span>
            </div>
          </div>
          <Button size="sm" variant="outline" asChild>
            <Link href={`/agents/${agent.id}`}>View Profile</Link>
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

  )
}

export default TopAgents;