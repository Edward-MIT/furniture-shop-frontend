import AgentCard from "@/libs/components/agent/AgentCard";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Button } from "@/libs/components/ui/button";
import { Card, CardContent } from "@/libs/components/ui/card";
import { Input } from "@/libs/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/libs/components/ui/select";
import { Stack } from "@mui/material";
import { Filter, Search, SortAsc } from "lucide-react";
import { NextPage } from "next";
import { useState } from "react";

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
  },
];

const AgentList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage =6;

  // filter and sort agents

  let filteredAgents = mockAgents.filter(agent=>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (filterBy !== 'all') {
    filteredAgents = filteredAgents.filter(agent => {
      switch(filterBy) {
        case 'verified':
          return agent.verified;
        case 'top-rated':
          return agent.rating >= 4.8;
        case 'experieced':
          return agent.yearsExperience >= 10;
        default:
          return true;
      };
    });
  }
  // Sort agents
  filteredAgents.sort((a,b) => {
    switch(sortBy) {
      case 'rating':
        return b.rating -a.rating;
      case 'experience':
        return b.yearsExperience -a.yearsExperience;
      case 'properties':
        return b.properties - a.properties;
      case 'sales':
        return b.totalSales - a.totalSales;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(filteredAgents.length / itemsPerPage);
  const startIndex = (currentPage -1)*itemsPerPage;
  const currentAgents = filteredAgents.slice(startIndex, startIndex + itemsPerPage);

  return(
      <div className="agent-page">
  {/* Header */}
  <div className="agent-page__header">
    <h1 className="agent-page__title">Furniture Agents</h1>
    <p className="agent-page__subtitle">Connect with experienced furniture specialists</p>
  </div>

  {/* Search and Filters */}
  <Card className="agent-page__filters-card">
    <CardContent className="agent-page__filters-content">
      <div className="agent-page__filters-row">
        {/* Search */}
        <div className="agent-page__search-box">
          <Search className="agent-page__search-icon" />
          <Input
            placeholder="Search agents by name or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="agent-page__search-input"
          />
        </div>

        {/* Filter */}
        <Select value={filterBy} onValueChange={setFilterBy}>
          <SelectTrigger className="agent-page__select">
            <Filter className="agent-page__select-icon" />
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Agents</SelectItem>
            <SelectItem value="verified">Verified Only</SelectItem>
            <SelectItem value="top-rated">Top Rated (4.8+)</SelectItem>
            <SelectItem value="experienced">Experienced (10+ years)</SelectItem>
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="agent-page__select">
            <SortAsc className="agent-page__select-icon" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="experience">Most Experienced</SelectItem>
            <SelectItem value="properties">Most Properties</SelectItem>
            <SelectItem value="sales">Most Sales</SelectItem>
            <SelectItem value="name">Name A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </CardContent>
  </Card>

  {/* Results */}
  <div className="agent-page__result-count">
    <p>
      Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAgents.length)} of {filteredAgents.length} agents
    </p>
  </div>

  {/* Agents Grid */}
  <div className="agent-page__grid">
    {currentAgents.map((agent) => (
      <AgentCard key={agent.id} agent={agent} />
    ))}
  </div>

  {/* Pagination */}
  {totalPages > 1 && (
    <div className="agent-page__pagination">
      <Button
        variant="outline"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'default' : 'outline'}
          onClick={() => setCurrentPage(page)}
          className="agent-page__page-button"
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  )}
</div>


  );
}


export default withLayoutBasic(AgentList);