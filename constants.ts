import { Experience, Accommodation, Package } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'LEAP Learning Lab',
    category: 'Learning',
    duration: 'Half-day',
    groupSize: '10-50',
    description: 'Interactive STEM and leadership workshops led by student facilitators from the youth village.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop' // Collaborative workshop/students
  },
  {
    id: '2',
    title: 'Community Farm Walk',
    category: 'Nature',
    duration: '2 hours',
    groupSize: '5-20',
    description: 'Get your hands dirty and learn about sustainable permaculture practices in our working fields.',
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=800&auto=format&fit=crop' // Agriculture/Green field
  },
  {
    id: '3',
    title: 'Traditional Dance Workshop',
    category: 'Culture',
    duration: '2 hours',
    groupSize: '10-100',
    description: 'Experience the rhythm of Rwanda through Intore dance classes led by local cultural troops.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop' // Joyful movement/culture
  },
  {
    id: '4',
    title: 'Sunrise Yoga on the Hill',
    category: 'Wellness',
    duration: '1 hour',
    groupSize: '5-30',
    description: 'Start your day with mindfulness overlooking the rolling hills of Rwamagana.',
    image: 'https://images.unsplash.com/photo-1544367563-12123d8975bd?q=80&w=800&auto=format&fit=crop' // Outdoor Yoga
  },
  {
    id: '5',
    title: 'Bonfire & Storytelling',
    category: 'Culture',
    duration: '2 hours',
    groupSize: 'Any',
    description: 'End the day connecting around the fire under the stars with stories of local history.',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop' // Bonfire
  },
   {
    id: '6',
    title: 'Nature Trail Guided Walk',
    category: 'Nature',
    duration: '1.5 hours',
    groupSize: '5-50',
    description: 'Explore the flora and fauna of the Eastern Province on our secure campus trails.',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop' // Forest trail
  }
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'gh1',
    type: 'Guest House',
    name: 'Family Guest Cottage',
    capacity: '2-4 Guests',
    description: 'Private, comfortable brick cottages perfect for facilitators, families, or leadership teams seeking quiet.',
    amenities: ['Private Bath', 'Wifi', 'Veranda', 'Queen Bed', 'Work Desk'],
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop' // Brick house/cozy room
  },
  {
    id: 'dm1',
    type: 'Dormitory',
    name: 'Community Bunk House',
    capacity: '16 Guests per unit',
    description: 'Clean, modern bunk-style lodging ideal for student groups, large teams, and budget-conscious travelers.',
    amenities: ['Shared Modern Bathrooms', 'Secure Lockers', 'Common Lounge', 'Sturdy Bunk Beds'],
    image: 'https://images.unsplash.com/photo-1520277739336-7bf67edfa6c4?q=80&w=800&auto=format&fit=crop' // Modern Dorm/Bunk beds
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'p1',
    title: 'Corporate Leadership Retreat',
    targetAudience: 'Companies & NGOs',
    duration: '2 Days / 1 Night',
    inclusions: ['Boardroom Access', 'Full Board Dining', '1 Team Building Activity', 'Guest House Stay'],
    priceStart: '200,000 RWF / person'
  },
  {
    id: 'p2',
    title: 'Cultural Immersion Day',
    targetAudience: 'Tour Groups',
    duration: 'Full Day',
    inclusions: ['Welcome Coffee', 'Village Tour', 'Lunch', 'Dance Workshop', 'Craft Session'],
    priceStart: '85,000 RWF / person'
  },
  {
    id: 'p3',
    title: 'Youth Innovators Camp',
    targetAudience: 'Schools & Universities',
    duration: '3 Days / 2 Nights',
    inclusions: ['Dorm Accommodation', 'LEAP Workshops', 'Farm Experience', 'All Meals', 'Bonfire'],
    priceStart: '120,000 RWF / student'
  }
];

export const MEETING_SPACES = [
    {
        id: 'm1',
        name: 'Main Boardroom',
        capacity: '20 Pax',
        description: 'A focused space with natural light and climate control.',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop' // Modern meeting room
    },
    {
        id: 'm2',
        name: 'The Amphitheatre',
        capacity: '500 Pax',
        description: 'Open-air tiered seating for large gatherings, performances, or plenaries.',
        image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=800&auto=format&fit=crop' // Outdoor steps/theatre
    },
    {
        id: 'm3',
        name: 'Rooftop Terrace',
        capacity: '100 Pax',
        description: 'Panoramic views of the hills. Perfect for sundowners or informal breakouts.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop' // Terrace view
    }
];

export const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop', category: 'Experiences' }, // People connecting
  { id: 2, src: 'https://images.unsplash.com/photo-1505232962135-26038144bb27?q=80&w=800&auto=format&fit=crop', category: 'Nature' }, // Misty Hills / Tea
  { id: 3, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop', category: 'Gathering' }, // Team meeting view
  { id: 4, src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop', category: 'Nature' }, // Agriculture field
  { id: 5, src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop', category: 'Experiences' }, // Music/Dance
  { id: 6, src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop', category: 'Accommodation' }, // Brick building
  { id: 7, src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop', category: 'Experiences' }, // Bonfire
  { id: 8, src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop', category: 'Nature' }, // Aerial view/Forest
];