export interface Experience {
  id: string;
  title: string;
  category: 'Learning' | 'Nature' | 'Culture' | 'Wellness' | 'Creative' | 'Team-building';
  duration: string;
  groupSize: string;
  description: string;
  image: string;
}

export interface Accommodation {
  id: string;
  type: 'Guest House' | 'Dormitory';
  name: string;
  capacity: string;
  description: string;
  amenities: string[];
  image: string;
}

export interface Package {
  id: string;
  title: string;
  targetAudience: string;
  duration: string;
  inclusions: string[];
  priceStart: string;
}

export interface BookingState {
  dates: { start: string; end: string } | null;
  accommodationId: string | null;
  selectedExperiences: string[];
  groupSize: number;
  contact: {
    name: string;
    email: string;
    organization: string;
    phone: string;
  };
}