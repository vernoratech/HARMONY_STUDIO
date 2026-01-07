// Services Data
export const SERVICES = [
    {
        id: 'dance',
        title: 'Dance',
        tagline: 'Express Your Soul',
        description: 'Express yourself through movement. From contemporary to classical, find your rhythm and let your body tell its story. Our dance programs are designed to build confidence, coordination, and creative expression.',
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
        features: ['Modern Jazz', 'Contemporary', 'Bollywood Beats', 'Kids Dance', 'Hip Hop', 'Classical Fusion'],
        color: '#E91E63'
    },
    {
        id: 'yoga',
        title: 'Yoga',
        tagline: 'Find Inner Peace',
        description: 'Connect with your inner peace through traditional Hatha, flowing Vinyasa, and restorative practices. Our experienced instructors guide you towards balance, flexibility, and mental clarity.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
        features: ['Hatha Yoga', 'Vinyasa Flow', 'Pranayama', 'Meditation', 'Power Yoga', 'Restorative'],
        color: '#4CAF50'
    },
    {
        id: 'zumba',
        title: 'Zumba',
        tagline: 'Dance Your Way Fit',
        description: 'The ultimate dance-fitness party! Burn calories while having the time of your life. Zumba combines Latin rhythms with easy-to-follow moves for a total body workout that feels like a celebration.',
        image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=1200',
        features: ['High Intensity', 'Cardio Burn', 'Latin Rhythms', 'Aqua Zumba', 'Zumba Gold', 'Zumba Toning'],
        color: '#FF5722'
    }
];

// Instructors Data
export const INSTRUCTORS = [
    {
        name: 'Priya Sharma',
        role: 'Head of Yoga',
        bio: '15 years of experience in traditional yoga practices. Certified in Hatha and Vinyasa.',
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600'
    },
    {
        name: 'Marcus Johnson',
        role: 'Zumba Specialist',
        bio: 'International Zumba instructor with a passion for high-energy dance fitness.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600'
    },
    {
        name: 'Elena Petrova',
        role: 'Dance Director',
        bio: 'Professional dancer and choreographer bringing 20 years of stage experience.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600'
    }
];

// Schedule Data
export const SCHEDULE = {
    Monday: [
        { time: '07:00 AM', activity: 'Morning Vinyasa', type: 'Yoga', level: 'Beginner', instructor: 'Priya', duration: '60 min' },
        { time: '09:30 AM', activity: 'Zumba Party', type: 'Zumba', level: 'All Levels', instructor: 'Marcus', duration: '45 min' },
        { time: '04:00 PM', activity: 'Kids Ballet', type: 'Dance', level: 'Junior', instructor: 'Elena', duration: '45 min' },
        { time: '06:30 PM', activity: 'Power Flow', type: 'Yoga', level: 'Intermediate', instructor: 'Priya', duration: '75 min' },
        { time: '08:00 PM', activity: 'Contemporary Fusion', type: 'Dance', level: 'Advanced', instructor: 'Elena', duration: '60 min' },
    ],
    Tuesday: [
        { time: '06:30 AM', activity: 'Sunrise Yoga', type: 'Yoga', level: 'All Levels', instructor: 'Priya', duration: '60 min' },
        { time: '10:00 AM', activity: 'Zumba Gold', type: 'Zumba', level: 'Beginner', instructor: 'Marcus', duration: '45 min' },
        { time: '05:00 PM', activity: 'Hip Hop Basics', type: 'Dance', level: 'Beginner', instructor: 'Elena', duration: '60 min' },
        { time: '07:00 PM', activity: 'Cardio Zumba', type: 'Zumba', level: 'Intermediate', instructor: 'Marcus', duration: '50 min' },
    ],
    Wednesday: [
        { time: '07:00 AM', activity: 'Hatha Yoga', type: 'Yoga', level: 'Beginner', instructor: 'Priya', duration: '60 min' },
        { time: '09:30 AM', activity: 'Zumba Toning', type: 'Zumba', level: 'All Levels', instructor: 'Marcus', duration: '45 min' },
        { time: '04:30 PM', activity: 'Jazz Fundamentals', type: 'Dance', level: 'Beginner', instructor: 'Elena', duration: '60 min' },
        { time: '06:30 PM', activity: 'Deep Stretch', type: 'Yoga', level: 'All Levels', instructor: 'Priya', duration: '45 min' },
    ],
    Thursday: [
        { time: '07:00 AM', activity: 'Flow & Glow', type: 'Yoga', level: 'Intermediate', instructor: 'Priya', duration: '75 min' },
        { time: '11:00 AM', activity: 'Aqua Zumba', type: 'Zumba', level: 'All Levels', instructor: 'Marcus', duration: '45 min' },
        { time: '05:00 PM', activity: 'Bollywood Dance', type: 'Dance', level: 'All Levels', instructor: 'Elena', duration: '60 min' },
        { time: '07:30 PM', activity: 'Latin Zumba', type: 'Zumba', level: 'Advanced', instructor: 'Marcus', duration: '50 min' },
    ],
    Friday: [
        { time: '06:30 AM', activity: 'Power Yoga', type: 'Yoga', level: 'Advanced', instructor: 'Priya', duration: '75 min' },
        { time: '10:00 AM', activity: 'Zumba Party', type: 'Zumba', level: 'All Levels', instructor: 'Marcus', duration: '45 min' },
        { time: '04:00 PM', activity: 'Kids Hip Hop', type: 'Dance', level: 'Junior', instructor: 'Elena', duration: '45 min' },
        { time: '06:00 PM', activity: 'Contemporary', type: 'Dance', level: 'Intermediate', instructor: 'Elena', duration: '60 min' },
        { time: '08:00 PM', activity: 'Candlelight Yoga', type: 'Yoga', level: 'All Levels', instructor: 'Priya', duration: '60 min' },
    ],
    Saturday: [
        { time: '08:00 AM', activity: 'Weekend Warrior Yoga', type: 'Yoga', level: 'All Levels', instructor: 'Priya', duration: '90 min' },
        { time: '10:30 AM', activity: 'Mega Zumba Party', type: 'Zumba', level: 'All Levels', instructor: 'Marcus', duration: '60 min' },
        { time: '01:00 PM', activity: 'Open Dance Floor', type: 'Dance', level: 'All Levels', instructor: 'Elena', duration: '120 min' },
    ],
};

// Pricing Plans
export const PRICING = [
    {
        name: 'Starter',
        price: 49,
        period: 'month',
        description: 'Perfect for beginners exploring their fitness journey',
        features: [
            '5 Classes per month',
            'Single Discipline Only',
            'Basic Progress Tracking',
            'Studio Access (Peak Hours)',
            'Welcome Consultation'
        ],
        highlighted: false
    },
    {
        name: 'Unlimited Flow',
        price: 129,
        period: 'month',
        description: 'Our most popular plan for dedicated practitioners',
        features: [
            'Unlimited All Classes',
            'All Disciplines Included',
            'Guest Passes (2/month)',
            'Locker Access',
            'Priority Booking',
            'Monthly Workshops Free',
            'Personalized Guidance'
        ],
        highlighted: true
    },
    {
        name: 'Annual Elite',
        price: 999,
        period: 'year',
        description: 'The ultimate commitment to your wellness',
        features: [
            'Everything in Unlimited',
            'Personal Training (1/month)',
            'VIP Event Access',
            'Merch Starter Pack',
            'Nutrition Consultation',
            'Bring a Friend Free',
            'Retreat Discounts'
        ],
        highlighted: false
    }
];

// Testimonials
export const TESTIMONIALS = [
    {
        name: 'Ananya Gupta',
        role: 'Yoga Member',
        content: 'Harmony Studio transformed my life. The instructors are incredibly skilled and the atmosphere is so welcoming. I\'ve never felt healthier!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Rajesh Kumar',
        role: 'Zumba Enthusiast',
        content: 'The Zumba classes here are unmatched! Marcus brings so much energy and makes every session feel like a celebration.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Meera Patel',
        role: 'Dance Student',
        content: 'I joined with no dance experience and now I perform in recitals! Elena is a patient and inspiring teacher.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }
];

// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
];

// Contact Info
export const CONTACT_INFO = {
    address: '123 Wellness Boulevard, Suite 100, Mumbai 400001',
    phone: '+91 98765 43210',
    email: 'hello@harmonystudio.com',
    hours: {
        weekdays: '6:00 AM - 10:00 PM',
        weekends: '7:00 AM - 8:00 PM'
    },
    social: {
        instagram: 'https://instagram.com/harmonystudio',
        facebook: 'https://facebook.com/harmonystudio',
        twitter: 'https://twitter.com/harmonystudio'
    }
};

// Stats
export const STATS = [
    { value: '5000+', label: 'Happy Members' },
    { value: '150+', label: 'Classes Weekly' },
    { value: '15', label: 'Expert Instructors' },
    { value: '10+', label: 'Years Experience' }
];
