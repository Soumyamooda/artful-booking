import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Eye } from "lucide-react";

const featuredArtists = [
  {
    id: 1,
    name: "Priya Sharma",
    category: "Classical Dancer",
    image: "https://images.unsplash.com/photo-1594736797933-d0301ba094fe?w=400",
    rating: 4.9,
    reviewCount: 127,
    location: "Mumbai",
    startingPrice: "₹8,000",
    isFeatured: true,
  },
  {
    id: 2,
    name: "The Melody Makers",
    category: "Live Band",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    rating: 4.8,
    reviewCount: 89,
    location: "Delhi",
    startingPrice: "₹25,000",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Rahul Saxena",
    category: "Stand-up Comedian",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    rating: 4.7,
    reviewCount: 156,
    location: "Bangalore",
    startingPrice: "₹12,000",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Sneha Photography",
    category: "Wedding Photographer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b9e3?w=400",
    rating: 4.9,
    reviewCount: 203,
    location: "Pune",
    startingPrice: "₹15,000",
    isFeatured: true,
  },
  {
    id: 5,
    name: "Magic Mike",
    category: "Professional Magician",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 4.6,
    reviewCount: 74,
    location: "Chennai",
    startingPrice: "₹6,000",
    isFeatured: false,
  },
  {
    id: 6,
    name: "Aria Vocals",
    category: "Professional Singer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    rating: 4.8,
    reviewCount: 142,
    location: "Kolkata",
    startingPrice: "₹10,000",
    isFeatured: true,
  },
];

function ArtistCard({ artist }: { artist: typeof featuredArtists[0] }) {
  return (
    <div className="relative bg-card rounded-2xl overflow-hidden shadow-elegant artist-card">
      {/* Featured Badge */}
      {artist.isFeatured && (
        <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground font-semibold">
          Featured
        </Badge>
      )}

      {/* Artist Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Artist Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{artist.name}</h3>
            <p className="text-accent font-medium">{artist.category}</p>
          </div>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-foreground">{artist.rating}</span>
          </div>
          <span className="text-muted-foreground">({artist.reviewCount} reviews)</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{artist.location}</span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Starts at</p>
            <p className="text-xl font-bold text-primary">{artist.startingPrice}</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm">
            <Eye className="mr-2 h-4 w-4" />
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FeaturedArtists() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Artists & Bands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our top-rated performers who have amazed audiences across the country
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 bg-muted/50 rounded-xl">
            <Button variant="default" size="sm" className="rounded-lg">
              Trending
            </Button>
            <Button variant="ghost" size="sm" className="rounded-lg">
              Top Rated
            </Button>
            <Button variant="ghost" size="sm" className="rounded-lg">
              Near You
            </Button>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Artists
          </Button>
        </div>
      </div>
    </section>
  );
}