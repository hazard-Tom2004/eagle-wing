// Navigation and Organization Configuration
// Update with real values as needed

export interface NavigationLink {
  href: string;
  label: string;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface ContactInformation {
  email: string;
  phone: string;
  address: string;
  socialMedia: SocialMedia;
}

export interface OrganizationInfo {
  name: string;
  motto: string;
  vision: string;
  mission: string;
}

// Navigation links configuration - Update as pages are created
export const navigationLinks: NavigationLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/trustees",
    label: "Trustees",
  },
  {
    href: "/gallery",
    label: "Gallery",
  },
  {
    href: "/support",
    label: "Support",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

// Organization contact information - Update with real contact details
export const contactInfo: ContactInformation = {
  email: "info@eagleswings.org",
  phone: "+2348052081929",
  address: "",
  socialMedia: {},
};

// Organization core information
export const orgInfo: OrganizationInfo = {
  name: "Eagles Wings World Changers Outreach",
  motto: "Soaring on Eagles Wings",
  vision:
    "Changing the World through the Gospel of Empowerment (Spiritual and Economic Empowerment)",
  mission:
    "To empower Christian leaders, workers, and communities through spiritual development, economic empowerment, fellowship in prayer, community development, and Gospel publication.",
};
