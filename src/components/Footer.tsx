import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t bg-foreground text-background">
    <div className="container py-14">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <img src={logo} alt="BlackTech Capital" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-background/60">
            Good for People, Good for Planet.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-background/80">Pages</p>
          <Link to="/" className="text-sm text-background/50 hover:text-background transition-colors">Overview</Link>
          <Link to="/catalyst-fund" className="text-sm text-background/50 hover:text-background transition-colors">Catalyst Fund</Link>
          <Link to="/fund-i" className="text-sm text-background/50 hover:text-background transition-colors">Fund I</Link>
          <Link to="/opportunities" className="text-sm text-background/50 hover:text-background transition-colors">Opportunities</Link>
          <Link to="/contact" className="text-sm text-background/50 hover:text-background transition-colors">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-background/80">Contact</p>
          <a href="mailto:bduarte@blacktechcapital.com" className="text-sm text-background/50 hover:text-background transition-colors">bduarte@blacktechcapital.com</a>
          <a href="mailto:kmeeks@blacktechcapital.com" className="text-sm text-background/50 hover:text-background transition-colors">kmeeks@blacktechcapital.com</a>
        </div>
      </div>
      <div className="mt-12 border-t border-background/10 pt-6 text-center text-xs text-background/40">
        © {new Date().getFullYear()} BlackTech Capital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
