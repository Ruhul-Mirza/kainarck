import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "SEO Optimization", href: "/services#seo" },
    { name: "Web Development", href: "/services#web-development" },
    { name: "Brand Marketing", href: "/services#brand-marketing" },
    { name: "Digital Marketing", href: "/services#digital-marketing" },
    { name: "App Development", href: "/services#app-development" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/support" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/kainarck" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/kainarck" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/kainarck",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/kainarck",
  },
];

export function Footer() {
  return (
    <footer
      className="bg-background border-t"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="Kainarck - Home"
            >
              <Code2 className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Kainarck
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Leading IT company providing comprehensive digital solutions
              including SEO optimization, web development, brand marketing,
              digital marketing, and mobile app development since 2014.
            </p>
            <address className="space-y-2 not-italic">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>123 Tech Street, Digital City, DC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a
                  href="mailto:contact@kainarck.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@kainarck.com
                </a>
              </div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © 2024 Kainarck Technologies. All rights reserved.
          </div>
          <nav
            className="flex items-center space-x-4 mt-4 sm:mt-0"
            aria-label="Social media links"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
