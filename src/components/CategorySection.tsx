import {
  Music,
  Mic,
  Users,
  Camera,
  Palette,
  Volume2,
  Sparkles,
  Play,
  Headphones,
  Heart,
  Briefcase,
  Star,
} from "lucide-react";

const categories = [
  {
    name: "Dancers",
    icon: Music,
    count: 87,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
  },
  {
    name: "Singers",
    icon: Mic,
    count: 124,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    name: "Live Bands",
    icon: Users,
    count: 45,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    name: "Photographers",
    icon: Camera,
    count: 156,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    name: "Makeup Artists",
    icon: Palette,
    count: 73,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    name: "Speakers",
    icon: Volume2,
    count: 62,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
  },
  {
    name: "Comedians",
    icon: Sparkles,
    count: 38,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
  },
  {
    name: "DJs",
    icon: Play,
    count: 91,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
  },
  {
    name: "Instrumentalists",
    icon: Headphones,
    count: 67,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
  },
  {
    name: "Anchors",
    icon: Briefcase,
    count: 54,
    color: "from-slate-500 to-gray-500",
    bgColor: "bg-slate-50 dark:bg-slate-950/20",
  },
  {
    name: "Magicians",
    icon: Star,
    count: 29,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
  },
  {
    name: "Wedding Experts",
    icon: Heart,
    count: 142,
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
  },
];

function CategoryCard({ category }: { category: typeof categories[0] }) {
  return (
    <div className={`group relative p-6 rounded-2xl ${category.bgColor} category-card cursor-pointer overflow-hidden`}>
      {/* Background Gradient on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
            <category.icon className="h-6 w-6" />
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-foreground">{category.count}</p>
            <p className="text-sm text-muted-foreground">Artists</p>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        
        {/* Hover Arrow */}
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-sm text-primary font-medium">Explore →</span>
        </div>
      </div>
    </div>
  );
}

export function CategorySection() {
  return (
    <section className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our diverse range of talented artists and find the perfect match for your event
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>

        {/* View All Categories */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-smooth shadow-elegant">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}