import { Experience, Accommodation, Package } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'LEAP Learning Lab',
    category: 'Learning',
    duration: 'Half-day',
    groupSize: '10-50',
    description: 'Interactive STEM and leadership workshops led by student facilitators from the youth village.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop' // Collaborative workshop
  },
  {
    id: '2',
    title: 'Community Farm Walk',
    category: 'Nature',
    duration: '2 hours',
    groupSize: '5-20',
    description: 'Get your hands dirty and learn about sustainable permaculture practices in our working fields.',
    image: 'https://images.unsplash.com/photo-1625246333195-58f214f76328?q=80&w=800&auto=format&fit=crop' // Agriculture/Green field
  },
  {
    id: '3',
    title: 'Traditional Dance Workshop',
    category: 'Culture',
    duration: '2 hours',
    groupSize: '10-100',
    description: 'Experience the rhythm of Rwanda through Intore dance classes led by local cultural troops.',
    image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=800&auto=format&fit=crop' // Joyful movement/culture
  },
  {
    id: '4',
    title: 'Sunrise Yoga on the Hill',
    category: 'Wellness',
    duration: '1 hour',
    groupSize: '5-30',
    description: 'Start your day with mindfulness overlooking the rolling hills of Rwamagana.',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop' // Outdoor Yoga
  },
  {
    id: '5',
    title: 'Bonfire & Storytelling',
    category: 'Culture',
    duration: '2 hours',
    groupSize: 'Any',
    description: 'End the day connecting around the fire under the stars with stories of local history.',
    image: 'https://images.unsplash.com/photo-1533575770077-052fa2c609fc?q=80&w=800&auto=format&fit=crop' // Bonfire
  },
   {
    id: '6',
    title: 'Nature Trail Guided Walk',
    category: 'Nature',
    duration: '1.5 hours',
    groupSize: '5-50',
    description: 'Explore the flora and fauna of the Eastern Province on our secure campus trails.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop' // Forest trail
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
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop' // Brick house in nature
  },
  {
    id: 'dm1',
    type: 'Dormitory',
    name: 'Community Bunk House',
    capacity: '16 Guests per unit',
    description: 'Clean, modern bunk-style lodging ideal for student groups, large teams, and budget-conscious travelers.',
    amenities: ['Shared Modern Bathrooms', 'Secure Lockers', 'Common Lounge', 'Sturdy Bunk Beds'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop' // Modern Dorm
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
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' // Modern meeting room
    },
    {
        id: 'm2',
        name: 'The Amphitheatre',
        capacity: '500 Pax',
        description: 'Open-air tiered seating for large gatherings, performances, or plenaries.',
        image: 'https://images.unsplash.com/photo-1564510714747-6d32be4fd23d?q=80&w=800&auto=format&fit=crop' // Outdoor steps/theatre
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
  { id: 1, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop', category: 'Experiences' }, // People connecting
  { id: 2, src: 'https://images.unsplash.com/photo-1489447068241-b3490214e879?q=80&w=800&auto=format&fit=crop', category: 'Nature' }, // Misty Hills
  { id: 3, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop', category: 'Conferencing' }, // Team meeting view
  { id: 4, src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop', category: 'Nature' }, // Agriculture field
  { id: 5, src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop', category: 'Experiences' }, // Music
  { id: 6, src: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop', category: 'Accommodation' }, // Brick building
  { id: 7, src: 'https://images.unsplash.com/photo-1533575770077-052fa2c609fc?q=80&w=800&auto=format&fit=crop', category: 'Experiences' }, // Bonfire
  { id: 8, src: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=800&auto=format&fit=crop', category: 'Nature' }, // Aerial view
];