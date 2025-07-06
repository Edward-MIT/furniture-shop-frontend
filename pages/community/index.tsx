import PostCard from "@/libs/components/community/CommunityCard";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Button } from "@/libs/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/libs/components/ui/card";
import { Input } from "@/libs/components/ui/input";
import { Separator } from "@/libs/components/ui/separator";
import { Stack } from "@mui/material";
import { MessageSquare, Plus, Search, Users } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

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

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState<string |null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = mockPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
  });

  const sortedPosts = filteredPosts.sort((a, b) => {
    if(a.isPinned && !b.isPinned) return -1;
    if(!a.isPinned && b.isPinned) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return (
     <div className="community-board">
      {/* Header */}
      <div className="community-board__header">
        <div className="community-board__header-row">
          <div>
            <h1 className="community-board__title">Community Board</h1>
            <p className="community-board__subtitle">Connect with fellow furniture enthusiasts</p>
          </div>
          <Button asChild>
            <Link href="/community/new-post">
              <Plus className="community-board__icon" />
              New Post
            </Link>
          </Button>
        </div>
      </div>

      <div className="community-board__layout">
        {/* Sidebar */}
        <div className="community-board__sidebar">
          <Card className="community-board__sidebar-card">
            <CardHeader>
              <CardTitle className="community-board__sidebar-title">
                <Users className="community-board__icon" />
                Board Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="community-board__sidebar-content">
              <div className="category-list">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`category-button ${!selectedCategory ? 'category-button--active' : ''}`}
                >
                  <div className="category-button__row">
                    <div className="category-button__info">
                      <span>🏠</span>
                      <span className="category-button__name">All Boards</span>
                    </div>
                    <span className="category-button__count">{mockPosts.length}</span>
                  </div>
                </button>

                {boardCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`category-button ${selectedCategory === category.id ? 'category-button--active' : ''}`}
                  >
                    <div className="category-button__row mb-1">
                      <div className="category-button__info">
                        <span>{category.icon}</span>
                        <span className="category-button__name">{category.name}</span>
                      </div>
                      <span className="category-button__count">{category.posts}</span>
                    </div>
                    <p className="category-button__description">{category.description}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="community-board__main">
          {/* Search */}
          <Card className="community-board__search-card">
            <CardContent className="community-board__search-content">
              <div className="community-board__search-wrapper">
                <Search className="community-board__search-icon" />
                <Input
                  placeholder="Search posts, tags, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="community-board__search-input"
                />
              </div>
            </CardContent>
          </Card>

          {/* Selected category info */}
          {selectedCategory && (
            <div className="community-board__category-info">
              <div className="community-board__category-header">
                <span className="community-board__category-icon">
                  {boardCategories.find(cat => cat.id === selectedCategory)?.icon}
                </span>
                <h2 className="community-board__category-title">
                  {boardCategories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
              </div>
              <p className="community-board__category-description">
                {boardCategories.find(cat => cat.id === selectedCategory)?.description}
              </p>
              <Separator className="community-board__separator" />
            </div>
          )}

          {/* Posts */}
          <div className="community-board__posts">
            {sortedPosts.length > 0 ? (
              sortedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              <Card>
                <CardContent className="community-board__empty">
                  <MessageSquare className="community-board__empty-icon" />
                  <h3 className="community-board__empty-title">No posts found</h3>
                  <p className="community-board__empty-text">
                    {searchQuery
                      ? "Try adjusting your search terms or browse different categories."
                      : "Be the first to start a discussion in this category!"}
                  </p>
                  <Button asChild>
                    <Link href="/community/new-post">Create New Post</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Load More */}
          {sortedPosts.length > 0 && (
            <div className="community-board__load-more">
              <Button variant="outline">Load More Posts</Button>
            </div>
          )}
        </div>
      </div>
      </div>

  );
}

export default withLayoutBasic(Community);