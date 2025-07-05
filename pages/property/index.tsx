import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import PropertyCard from "@/libs/components/property/PropertyCard";
import { Button } from "@/libs/components/ui/button";
import { Card } from "@/libs/components/ui/card";
import { Checkbox } from "@/libs/components/ui/checkbox";
import { Input } from "@/libs/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/libs/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/libs/components/ui/sheet";
import { Slider } from "@/libs/components/ui/slider";
import { CardContent, Stack } from "@mui/material";
import { Grid, List, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";


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
    agent: 'Sarah Johnson',
    location: 'Downtown',
    condition: 'Excellent'
  },
  {
    id: 2,
    name: 'Oak Dining Table',
    price: '$899',
    description: 'Solid oak dining table that seats 6 people comfortably',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dining Room',
    type: 'sale',
    views: 980,
    likes: 156,
    isForSale: true,
    agent: 'Michael Chen',
    location: 'Midtown',
    condition: 'Good'
  },
  {
    id: 3,
    name: 'King Size Bed Frame',
    price: '$189/month',
    salePrice: '$1,599',
    description: 'Elegant wooden bed frame with built-in storage',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Bedroom',
    type: 'rent',
    views: 2100,
    likes: 234,
    isForSale: false,
    agent: 'Emma Wilson',
    location: 'Uptown',
    condition: 'Excellent'
  },
  {
    id: 4,
    name: 'Modern Office Desk',
    price: '$149/month',
    salePrice: '$1,299',
    description: 'Sleek office desk with built-in cable management',
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Office',
    type: 'rent',
    views: 756,
    likes: 92,
    isForSale: false,
    agent: 'David Brown',
    location: 'Business District',
    condition: 'Very Good'
  },
  {
    id: 5,
    name: 'Vintage Armchair',
    price: '$129/month',
    salePrice: '$999',
    description: 'Classic vintage armchair with restored upholstery',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Living Room',
    type: 'rent',
    views: 654,
    likes: 78,
    isForSale: false,
    agent: 'Sarah Johnson',
    location: 'Historic District',
    condition: 'Good'
  },
  {
    id: 6,
    name: 'Glass Coffee Table',
    price: '$399',
    description: 'Modern glass coffee table with chrome legs',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Living Room',
    type: 'sale',
    views: 432,
    likes: 56,
    isForSale: true,
    agent: 'Michael Chen',
    location: 'Downtown',
    condition: 'Excellent'
  }
];

const PropertyList = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProperties = mockProperties.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="properties-page">
        {/* Header */}
      <div className="properties-page__header">
        <h1>Properties</h1>
        <p>Find the perfect furniture for your space</p>
      </div>
       {/* Search and Filter */}
       <Card className="properties-page__filter-card">
         <CardContent className="filter-card__content">
          <div className="filter-card__row">
            {/* Search */}
            <div className="search-box">
              <Search className="search-icon"/>
              <Input
                placeholder="Search furniture, categories, agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className = "search-input"
              />
            </div>
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
             <SelectTrigger className="sort-select">
               <SelectValue  placeholder="Sort by"/>
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="newest">
                   Newest First
                </SelectItem>
               <SelectItem value="price-low">
                   Price: Low to High
                </SelectItem>
               <SelectItem value="price-high">
                   Price: High to Low
                </SelectItem>
               <SelectItem value="popular">
                   Most Popular
                </SelectItem>
               <SelectItem value="liked">
                   Most Liked
                </SelectItem>
             </SelectContent>
            </Select>
            {/* Filters */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant= "outline"      className="filters-button">
                <SlidersHorizontal className="icon"/>
                Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Advanced Filters</SheetTitle>
                  <SheetDescription>
                    Refine your search with detailed filters
                  </SheetDescription>
                </SheetHeader>

                <div className="filters-content">
                  {/* Price */}
                  <h3>Price Range</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    step={50}
                  />
                  <div className="price-range">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                {/* Categories */}
                <div className="filter-section">
                  <h3>Categories</h3>
                  {['Living Room', 'Bedroom', 'Dining Room', 'Office'].map((category)=> (
                  <div key={category} className="checkbox-row">
                  <Checkbox
                   id = {category}
                   checked={selectedCategories.includes(category)}
                   onCheckedChange={(checked: any) => {
                    if (checked) {
                      setSelectedCategories([...selectedCategories, category]);
                    } else {
                      setSelectedCategories(selectedCategories.filter(c => c!==category))
                    }
                   }}
                  />
                  <label htmlFor={category}>{category}</label>
                   </div>
                  ))}
                </div>
                {/* Type */}
                <div className="filter-section">
                  <h3>Type</h3>
                  {['rent', 'sale'].map((type) => (
                    <div key={type} className="checkbox-row">
                      <Checkbox
                      id={type}
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={(checked :any) =>{
                        if(checked) {
                          setSelectedTypes([...selectedTypes, type]);
                        } else{
                          setSelectedTypes(selectedTypes.filter(t=>t !== type))
                        }
                      }}
                      />
                      <label htmlFor={type}>{type === 'rent' ? 'For Rent': 'For Sale'}</label>
                    </div>
                  ))}

                </div>
              </SheetContent>
            </Sheet>
            {/* View Mode  */}
            <div className="view-mode-toggle">
              <Button
                 variant ={viewMode === 'grid' ? 'default' : 'ghost'}
                 size='sm'
                 onClick={() => setViewMode('grid')}
              >
                <Grid className="icon" />
              </Button>
              <Button
                 variant={viewMode === 'list' ? 'default' : 'ghost'}
                 size = 'sm'
                 onClick={() => setViewMode('list')}
              >
                <List className="icon" />
              </Button>
            </div>
          </div>
         </CardContent>
       </Card>
       {/*  Result Count*/}
       <div className="results-count">
         <p>
             Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, mockProperties.length)} of {mockProperties.length} properties
         </p>
        </div>
        {/* Properties Grid/List */}
        <div className={`properties-layout ${viewMode}`}>
           {currentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} viewMode={viewMode} />
          ))}
        </div>
       {/* Pagination */}
       <div className="pagination">
        <Button
          variant='outline'
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled = {currentPage === 1}
        >
         Previous
        </Button>
         {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? 'default' : 'outline'}
            onClick={() => setCurrentPage(page)}
            className="page-btn"
          >
          {page}
          </Button>
         ))}

         <Button
           variant='outline'
           onClick = {() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
           disabled = {currentPage === totalPages}
         >
          Next
         </Button>
       </div>
    </div>
  )
}

export default withLayoutBasic(PropertyList);