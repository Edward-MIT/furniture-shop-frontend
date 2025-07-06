import { Clock, Eye, MessageSquare, Pin, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";


const boardCategories = [
  {
    id: 'general',
    name: 'General Discussion',
    description: 'General furniture topics and conversations',
    posts: 234,
    icon: '💬'
  },
  {
    id: 'reviews',
    name: 'Reviews & Ratings',
    description: 'Share your furniture experiences',
    posts: 156,
    icon: '⭐'
  },
  {
    id: 'tips',
    name: 'Tips & Tricks',
    description: 'Furniture care and styling tips',
    posts: 89,
    icon: '💡'
  },
  {
    id: 'marketplace',
    name: 'Buy & Sell',
    description: 'User-to-user furniture marketplace',
    posts: 67,
    icon: '🛒'
  },
  {
    id: 'diy',
    name: 'DIY & Restoration',
    description: 'DIY projects and furniture restoration',
    posts: 124,
    icon: '🔨'
  },
  {
    id: 'events',
    name: 'Events & News',
    description: 'Furniture events and industry news',
    posts: 45,
    icon: '📅'
  }
];

const mockPosts = [
  {
    id: 1,
    title: 'Best Furniture Arrangements for Small Spaces',
    content: 'Looking for advice on how to arrange furniture in a small apartment. Any tips?',
    author: {
      name: 'Design Pro',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Expert'
    },
    category: 'tips',
    replies: 23,
    views: 456,
    likes: 34,
    createdAt: '2024-01-15T10:30:00Z',
    isPinned: true,
    tags: ['small-space', 'arrangement', 'tips']
  },
  {
    id: 2,
    title: 'Quality Check: My Experience with Premium Sofas',
    content: 'Just got my new leather sofa and wanted to share my experience with the quality and comfort.',
    author: {
      name: 'Furniture Lover',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Regular'
    },
    category: 'reviews',
    replies: 15,
    views: 289,
    likes: 18,
    createdAt: '2024-01-14T15:45:00Z',
    isPinned: false,
    tags: ['sofa', 'review', 'quality']
  },
  {
    id: 3,
    title: 'Selling Oak Dining Table - Great Condition',
    content: 'Moving sale! Beautiful oak dining table that seats 6. Excellent condition, no scratches.',
    author: {
      name: 'HomeOwner23',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Member'
    },
    category: 'marketplace',
    replies: 8,
    views: 167,
    likes: 12,
    createdAt: '2024-01-13T09:20:00Z',
    isPinned: false,
    tags: ['dining-table', 'oak', 'for-sale']
  },
  {
    id: 4,
    title: 'DIY Bookshelf Restoration Project',
    content: 'Restored an old bookshelf I found at a garage sale. Here\'s my step-by-step process.',
    author: {
      name: 'DIY Master',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Expert'
    },
    category: 'diy',
    replies: 31,
    views: 678,
    likes: 45,
    createdAt: '2024-01-12T14:15:00Z',
    isPinned: false,
    tags: ['diy', 'bookshelf', 'restoration']
  },
  {
    id: 5,
    title: 'Upcoming Furniture Expo - Who\'s Going?',
    content: 'The annual furniture expo is coming up next month. Anyone planning to attend?',
    author: {
      name: 'EventGoer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Regular'
    },
    category: 'events',
    replies: 19,
    views: 234,
    likes: 27,
    createdAt: '2024-01-11T11:00:00Z',
    isPinned: false,
    tags: ['expo', 'event', 'meetup']
  },
  {
    id: 6,
    title: 'How to Clean Leather Furniture Properly',
    content: 'Share your best tips for maintaining and cleaning leather furniture to keep it looking new.',
    author: {
      name: 'CleanFreak',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      badge: 'Expert'
    },
    category: 'tips',
    replies: 42,
    views: 892,
    likes: 67,
    createdAt: '2024-01-10T16:30:00Z',
    isPinned: true,
    tags: ['leather', 'cleaning', 'maintenance']
  }
];

function formatTimeAgo(dateString:string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime())/1000);

  if (diffInSeconds <60) return "just now";
  if(diffInSeconds < 3600) return `${Math.floor(diffInSeconds/60)}m ago `;
  if(diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
}

const PostCard = ({post}: {post:any}) => {
  const category = boardCategories.find(news => news.id);
  return(
         <Card className="post-card">
            <CardContent className="post-card__content">
              <div className="post-card__wrapper">
                <Avatar className="post-card__avatar">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>

                <div className="post-card__body">
                  <div className="post-card__meta">
                    {post.isPinned && <Pin className="post-card__pin-icon" />}
                    <Badge variant="secondary">{category?.name}</Badge>
                    <div className="post-card__tags">
                      {post.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline"           className="post-card__tag">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <h3 className="post-card__title">
                    <Link href={`/community/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="post-card__description">{post.content}</p>

                  <div className="post-card__footer">
                    <div className="post-card__author-info">
                      <div className="post-card__author-meta">
                        <span className="post-card__author-name">{post.author.name}</          span>
                        <Badge variant="outline" className="post-card__author-badge">          {post.author.badge}</Badge>
                      </div>
                      <div className="post-card__time">
                        <Clock className="post-card__icon" />
                        <span>{formatTimeAgo(post.createdAt)}</span>
                      </div>
                    </div>

                    <div className="post-card__stats">
                      <div className="post-card__stat">
                        <MessageSquare className="post-card__icon" />
                        <span>{post.replies}</span>
                      </div>
                      <div className="post-card__stat">
                        <Eye className="post-card__icon" />
                        <span>{post.views}</span>
                      </div>
                      <div className="post-card__stat">
                        <ThumbsUp className="post-card__icon" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
     }

     export default PostCard;