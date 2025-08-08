import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  User,
  ChevronDown,
  Music,
  Camera,
  Mic,
  Users,
  MapPin,
  MessageSquare,
  Settings,
  LogOut,
  Eye,
  Calendar,
  Palette,
  Sparkles,
  Volume2,
  Play,
} from "lucide-react";

const categories = [
  { name: "Dancer", icon: Music },
  { name: "Singer", icon: Mic },
  { name: "Live Band", icon: Users },
  { name: "Photographer", icon: Camera },
  { name: "Anchor", icon: Mic },
  { name: "Makeup Artist", icon: Palette },
  { name: "Speaker", icon: Volume2 },
  { name: "Comedian", icon: Sparkles },
  { name: "Magician", icon: Sparkles },
  { name: "Instrumentalist", icon: Music },
  { name: "DJ", icon: Play },
];

export function Navigation() {
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg hero-gradient">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ArtistHub
            </span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Category Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  Category
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border shadow-elegant">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.name}
                    className="gap-3 cursor-pointer hover:bg-accent/10"
                  >
                    <category.icon className="h-4 w-4 text-accent" />
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Location Selector */}
            <Button variant="ghost" className="gap-2">
              <MapPin className="h-4 w-4" />
              Select City
            </Button>

            {/* Contact Us */}
            <Button variant="ghost">Contact Us</Button>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              {hasNotifications && (
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-glow" />
              )}
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border shadow-elegant" align="end">
                <DropdownMenuItem className="gap-3 cursor-pointer hover:bg-accent/10">
                  <Eye className="h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-3 cursor-pointer hover:bg-accent/10">
                  <Calendar className="h-4 w-4" />
                  My Bookings
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-3 cursor-pointer hover:bg-accent/10">
                  <MessageSquare className="h-4 w-4" />
                  Messages
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-3 cursor-pointer hover:bg-accent/10">
                  <Settings className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-3 cursor-pointer hover:bg-destructive/10 text-destructive">
                  <LogOut className="h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}