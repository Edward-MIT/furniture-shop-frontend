import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight, MessageSquare } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";



const communityHighlights = [
  {
    id: 1,
    title: 'Best Furniture Arrangements for Small Spaces',
    author: 'Design Pro',
    replies: 23,
    category: 'Tips & Tricks'
  },
  {
    id: 2,
    title: 'Quality Check: My Experience with Premium Sofas',
    author: 'Furniture Lover',
    replies: 15,
    category: 'Reviews'
  }
];

const CommunityHighlights = () => {
  return(
      <section className="community-highlights">
  <div className="community-highlights__header">
    <div>
      <h2>Community Highlights</h2>
      <p>Popular discussions from our community</p>
    </div>
    <Button variant="outline" asChild>
      <Link href="/community" className="view-all-button">
        View All <ChevronRight className="icon-chevron" />
      </Link>
    </Button>
  </div>

  <div className="community-highlights__grid">
    {communityHighlights.map((post) => (
      <Card key={post.id} className="community-highlights__card">
        <CardContent className="card-content">
          <div className="card-inner">
            <div className="card-icon">
              <MessageSquare className="icon-message" />
            </div>
            <div className="card-info">
              <Badge variant="secondary" className="post-category">
                {post.category}
              </Badge>
              <h3>{post.title}</h3>
              <div className="post-meta">
                <span>by {post.author}</span>
                <span>{post.replies} replies</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

  );
}

export default CommunityHighlights;
