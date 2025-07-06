import { Mail, MapPin, Phone, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";


const mockAgents = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialty: 'Living Room Furniture',
    rating: 4.9,
    reviews: 127,
    properties: 45,
    location: 'Downtown',
    phone: '+1 (555) 123-4567',
    email: 'sarah@furnishop.com',
    yearsExperience: 8,
    description: 'Specializing in modern and contemporary living room furniture with a focus on comfort and style.',
    verified: true,
    totalSales: 156
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialty: 'Office & Dining',
    rating: 4.8,
    reviews: 94,
    properties: 38,
    location: 'Business District',
    phone: '+1 (555) 234-5678',
    email: 'michael@furnishop.com',
    yearsExperience: 6,
    description: 'Expert in office and dining room furniture solutions for both residential and commercial clients.',
    verified: true,
    totalSales: 112
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialty: 'Bedroom Sets',
    rating: 4.9,
    reviews: 203,
    properties: 52,
    location: 'Uptown',
    phone: '+1 (555) 345-6789',
    email: 'emma@furnishop.com',
    yearsExperience: 10,
    description: 'Passionate about creating comfortable and beautiful bedroom environments for better sleep and relaxation.',
    verified: true,
    totalSales: 189
  },
  {
    id: 4,
    name: 'David Brown',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialty: 'Vintage & Antique',
    rating: 4.7,
    reviews: 76,
    properties: 29,
    location: 'Historic District',
    phone: '+1 (555) 456-7890',
    email: 'david@furnishop.com',
    yearsExperience: 12,
    description: 'Collector and dealer of vintage and antique furniture pieces with authentic restoration services.',
    verified: true,
    totalSales: 87
  },
  {
    id: 5,
    name: 'Lisa Garcia',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialty: 'Modern Minimalist',
    rating: 4.6,
    reviews: 58,
    properties: 33,
    location: 'Midtown',
    phone: '+1 (555) 567-8901',
    email: 'lisa@furnishop.com',
    yearsExperience: 5,
    description: 'Focused on clean, minimalist designs that maximize space and functionality in modern homes.',
    verified: false,
    totalSales: 67
  },
  {
    id: 6,
    name: 'James Thompson',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    specialty: 'Luxury Collections',
    rating: 4.8,
    reviews: 145,
    properties: 28,
    location: 'Premium District',
    phone: '+1 (555) 678-9012',
    email: 'james@furnishop.com',
    yearsExperience: 15,
    description: 'Curator of high-end luxury furniture collections from renowned international designers.',
    verified: true,
    totalSales: 234
  }
];

const AgentCard = ({agent}: {agent:any}) => {
  return (
         <Card className="agent-card">
           <CardContent className="agent-card__content">
             <div className="agent-card__wrapper">
               <div className="agent-card__avatar-wrapper">
                 <Avatar style={{width:'4px', height: '10px'}}>
                   <AvatarImage style={{width: '60px', height: "60px", borderRadius: "50%"}} src={agent.avatar} alt={agent.name} />
                   <AvatarFallback>{agent.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                 </Avatar>
                 {agent.verified && (
                   <div className="agent-card__verified">
                     <Star className="agent-card__verified-icon" />
                   </div>
                 )}
               </div>

               <div className="agent-card__info">
                 <div className="agent-card__header">
                   <div>
                     <h3 className="agent-card__name">{agent.name}</h3>
                     <p className="agent-card__specialty">{agent.specialty}</p>
                   </div>
                   <div className="agent-card__rating">
                     <div className="agent-card__stars">
                       <Star className="agent-card__star-icon" />
                       <span>{agent.rating}</span>
                       <span className="agent-card__review-count">({agent.reviews})</span>
                     </div>
                     <p className="agent-card__experience">{agent.yearsExperience} years exp.</p>
                   </div>
                 </div>

                 <p className="agent-card__description">{agent.description}</p>

                 <div className="agent-card__details">
                   <div className="agent-card__location">
                     <MapPin className="agent-card__icon" />
                     <span>{agent.location}</span>
                   </div>
                   <span>{agent.properties} Properties</span>
                   <span>{agent.totalSales} Sales</span>
                 </div>

                 <div className="agent-card__actions">
                   <div className="agent-card__contact-buttons">
                     <Button size="sm" variant="outline" asChild>
                       <Link href={`tel:${agent.phone}`}>
                         <Phone className="agent-card__button-icon" />
                         Call
                       </Link>
                     </Button>
                     <Button size="sm" variant="outline" asChild>
                       <Link href={`mailto:${agent.email}`}>
                         <Mail className="agent-card__button-icon" />
                         Email
                       </Link>
                     </Button>
                   </div>
                   <Button size="sm" asChild>
                     <Link href={`/agents/${agent.id}`}>View Profile</Link>
                   </Button>
                 </div>
               </div>
             </div>
           </CardContent>
         </Card>

  );
}

export default AgentCard;