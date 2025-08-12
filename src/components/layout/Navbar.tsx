import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, ShoppingCart, User, ChevronDown, Menu, Home, Compass, Info } from "lucide-react";

const navLinkCls = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground";

export function Navbar() {
  const [query, setQuery] = useState("");

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-xl glass shadow-elevated">
          <div className="flex items-center gap-4 px-4 py-3">
            {/* Mobile menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="premium" size="icon" aria-label="Open menu">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="glass w-72">
                  <SheetHeader>
                    <SheetTitle>GrowFast</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-6 grid gap-2">
                    <NavLink to="/" className={navLinkCls} end>
                      <div className="flex items-center gap-2"><Home className="h-4 w-4"/> Home</div>
                    </NavLink>
                    <NavLink to="/explore" className={navLinkCls}>
                      <div className="flex items-center gap-2"><Compass className="h-4 w-4"/> Explore</div>
                    </NavLink>
                    <NavLink to="/about" className={navLinkCls}>
                      <div className="flex items-center gap-2"><Info className="h-4 w-4"/> About</div>
                    </NavLink>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">My Courses</Link>
                    <div>
                      <div className="text-sm mb-2 text-muted-foreground">Categories</div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {['ChatGPT','Data Science','Python','Machine Learning','Deep Learning','AI'].map((c) => (
                          <Link key={c} to={`/explore?cat=${encodeURIComponent(c)}`} className="glass-soft rounded-md px-2 py-1 hover:shadow-glow">{c}</Link>
                        ))}
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link to="/" className="mr-2 font-semibold tracking-tight text-lg">
              GrowFast
            </Link>

            {/* Search */}
            <div className="hidden lg:flex flex-1 items-center">
              <div className="relative w-full max-w-xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for courses, topics, or instructors"
                  className="pl-9 rounded-full focus-visible:ring-2 focus-visible:ring-ring/80 glow-ring"
                />
              </div>
            </div>

            {/* Nav links */}
            <nav className="hidden lg:flex items-center gap-4 ml-auto">
              <NavLink to="/" className={navLinkCls} end>Home</NavLink>
              <NavLink to="/explore" className={navLinkCls}>Explore</NavLink>
              <NavLink to="/about" className={navLinkCls}>About</NavLink>
              <Link to="#" className="text-muted-foreground hover:text-foreground">My Courses</Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="premium" className="rounded-full">
                    Categories <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass">
                  {['ChatGPT','Data Science','Python','Machine Learning','Deep Learning','AI'].map((c) => (
                    <DropdownMenuItem key={c} asChild>
                      <Link to={`/explore?cat=${encodeURIComponent(c)}`}>{c}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="premium" size="icon" aria-label="Cart"><ShoppingCart /></Button>
              <Button variant="hero" size="icon" aria-label="Profile"><User /></Button>
            </nav>
          </div>

          {/* Mobile search bar */}
          <div className="lg:hidden px-4 pb-4 -mt-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses"
                className="pl-9 rounded-full focus-visible:ring-2 focus-visible:ring-ring/80 glow-ring"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
