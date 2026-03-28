// Mock data for trustees - Replace with real data from your database

export interface Trustee {
  id: number;
  name: string;
  role: string;
  bio: string;
  email?: string;
  phone?: string;
  image?: string;
}

export const trustees: Trustee[] = [
  {
    id: 1,
    name: 'Rev. (Dr )  Abraham Olu Adeoye',
    role: 'President & Founder',
    bio: 'Founder and president of the ministry, leading strategic vision and spiritual direction.',
    email: 'adeoyeao@yahoo.com',
    phone: '08052081929',
    image: 'https://res.cloudinary.com/duhpmbxst/image/upload/v1774727530/WhatsApp_Image_2026-03-25_at_9.26.33_PM_odmib9.jpg', 
  },
  {
    id: 2,
    name: 'Pastor (Mrs.) Oluwaseun Esther Adeoye',
    role: 'Vice-President',
    bio: 'Provides pastoral leadership and supports ministry programs across the organization.',
    email: 'jicdivinity@yahoo.co.uk',
    phone: '08058638858', 
    image: 'https://res.cloudinary.com/duhpmbxst/image/upload/v1774727251/WhatsApp_Image_2026-03-25_at_9.26.33_PM_1_k06u8u.jpg',
  },
  {
    id: 3,
    name: 'Victoria Oluwadarasimi Adeoye',
    role: 'Secretary',
    bio: 'Responsible for administrative coordination, documentation and trustee communications.',
    email: 'adeoyevictoria056@gmail.com',
    phone: '+2347056036519',
    image: 'https://res.cloudinary.com/duhpmbxst/image/upload/v1774727249/WhatsApp_Image_2026-03-25_at_9.26.34_PM_lcppyj.jpg', 
  },
  {
    id: 4,
    name: 'Evangelist  Daniel Collins Osita',
    role: 'PRO',
    bio: 'Public relations officer, managing outreach, media and communication strategy.',
    email: 'dosittta@yahoo.com',
    phone: '08034659285',
    image: 'https://res.cloudinary.com/duhpmbxst/image/upload/v1774727248/WhatsApp_Image_2026-03-25_at_9.26.34_PM_1_pa5syz.jpg', 
  },
  {
    id: 5,
    name: 'Pastor NELSON NELSCO EVANGEL',
    role: 'Trustee Member',
    bio: 'Active trustee member focused on ministry development and community engagement.',
    email: 'nelscobeloved01@gmail.com',
    phone: '+2347069231104/ +2348059349620',
    image: 'https://res.cloudinary.com/duhpmbxst/image/upload/v1774727248/WhatsApp_Image_2026-03-25_at_9.26.35_PM_2_nng6a1.jpg', 
  },
  {
    id: 6,
    name: 'Victor Oluwatobi Adeoye',
    role: 'Trustee Member',
    bio: 'Trustee member supporting ministry operations, logistics and stakeholder relations.',
    email: 'adeoyevictor2004@gmail.com',
    phone: '+2347056036507',
    image: 'https://res.cloudinary.com/duhpmbxst/image/upload/v1774727247/WhatsApp_Image_2026-03-25_at_9.26.35_PM_3_x1mae5.jpg', 
  },
];
