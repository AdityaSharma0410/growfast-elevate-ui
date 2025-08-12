import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-lg font-semibold">GrowFast</div>
            <p className="subtle mt-2">Learn from world-class instructors and accelerate your career.</p>
          </div>
          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 subtle">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="#" className="hover:text-foreground">Careers</Link></li>
              <li><Link to="#" className="hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Support</div>
            <ul className="space-y-2 subtle">
              <li><Link to="#" className="hover:text-foreground">Help Center</Link></li>
              <li><Link to="#" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="#" className="hover:text-foreground">Terms & Privacy</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Newsletter</div>
            <p className="subtle mb-3">Join our mailing list for course updates.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="glass" />
              <Button variant="hero">Subscribe</Button>
            </div>
            <div className="flex gap-3 mt-4">
              <a aria-label="GitHub" className="glass p-2 rounded-md hover:shadow-glow" href="#"><Github className="h-4 w-4"/></a>
              <a aria-label="Twitter" className="glass p-2 rounded-md hover:shadow-glow" href="#"><Twitter className="h-4 w-4"/></a>
              <a aria-label="LinkedIn" className="glass p-2 rounded-md hover:shadow-glow" href="#"><Linkedin className="h-4 w-4"/></a>
            </div>
          </div>
        </div>
        <div className="subtle mt-10 border-t border-border pt-6">© {new Date().getFullYear()} GrowFast. All rights reserved.</div>
      </div>
    </footer>
  );
}
