// Mock data for mission areas - Replace with real descriptions and update as needed

export interface MissionArea {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const missionAreas: MissionArea[] = [
  {
    id: 1,
    title: 'Leadership Training',
    description: 'Equipping Christian workers, leaders, and pastors with biblical knowledge, practical skills, and vision to lead effectively in their communities and globally.',
    icon: '📚',
  },
  {
    id: 2,
    title: 'Empowerment & Entrepreneurship',
    description: 'Creating pathways for economic empowerment through business training, mentorship, and resources that enable individuals to become self-sufficient.',
    icon: '💼',
  },
  {
    id: 3,
    title: 'Fellowship & Prayer Network',
    description: 'Building a powerful community of believers united in prayer, intercession, and mutual support for advancing God\'s kingdom globally.',
    icon: '🙏',
  },
  {
    id: 4,
    title: 'Community Development',
    description: 'Transforming communities through sustainable development programs, hospitality, and holistic care that addresses spiritual and practical needs.',
    icon: '🤝',
  },
  {
    id: 5,
    title: 'Gospel Publications',
    description: 'Printing and distributing Gospel materials and Christian resources to reach hearts and transform lives with the message of hope and redemption.',
    icon: '📖',
  },
];
