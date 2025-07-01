import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui2/ui/card";
import { Button } from "../ui2/ui/button";


 const mockEvents = [
  {
    id: 'event1',
    title: 'Modern Furniture Showcase',
    description: 'Discover the latest trends in modern furniture design',
    date: '2024-02-15',
    location: 'Design Center, Downtown',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    attendees: 150
  },
  {
    id: 'event2',
    title: 'Vintage Furniture Fair',
    description: 'Find unique vintage pieces and restoration tips',
    date: '2024-02-20',
    location: 'Heritage Hall',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    attendees: 85
  }
];



   const Events = () => {

    return (
        <section className="upcoming-events">
  <div className="container-event">
    <div className="header">
      <h2>Upcoming Events</h2>
      <p>Join our exclusive furniture showcases and design workshops</p>
    </div>
    <div className="events-grid">
      {mockEvents.map((event) => (
        <Card key={event.id} className="event-card">
          <div className="event-image-wrapper">
            <img
              src={event.image}
              alt={event.title}
              className="event-image"
            />
          </div>
          <CardHeader>
            <CardTitle className="event-title">{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="event-info">
              <div className="info-item">
                <Calendar className="icon" />
                {/* {new Date(event.date).toLocaleDateString()} */}
                20th October 2025
              </div>
              <div className="info-item">
                <MapPin className="icon" />
                {event.location}
              </div>
              <div className="info-item">
                <Users className="icon" />
                {event.attendees} attendees
              </div>
            </div>
            <Button className="register-btn">Register Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

    );
   }

   export default Events;