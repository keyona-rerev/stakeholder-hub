import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-secondary/50">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">BlackTech Capital</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Good for People, Good for Planet.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-foreground">Pages</p>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Overview</Link>
          <Link to="/catalyst-fund" className="text-sm text-muted-foreground hover:text-foreground">Catalyst Fund</Link>
          <Link to="/fund-i" className="text-sm text-muted-foreground hover:text-foreground">Fund I</Link>
          <Link to="/opportunities" className="text-sm text-muted-foreground hover:text-foreground">Opportunities</Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-foreground">Contact</p>
          <a href="mailto:bduarte@blacktechcapital.com" className="text-sm text-muted-foreground hover:text-foreground">bduarte@blacktechcapital.com</a>
          <a href="mailto:kmeeks@blacktechcapital.com" className="text-sm text-muted-foreground hover:text-foreground">kmeeks@blacktechcapital.com</a>
        </div>
      </div>
      <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BlackTech Capital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
