// Services Data
export const SERVICES = [
    {
        id: 'dance',
        slug: 'dance',
        title: 'Dance',
        tagline: 'Express Your Soul',
        description: 'Express yourself through movement. From contemporary to classical, find your rhythm and let your body tell its story. Our dance programs are designed to build confidence, coordination, and creative expression.',
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
        heroImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
        features: ['Modern Jazz', 'Contemporary', 'Bollywood Beats', 'Kids Dance', 'Hip Hop', 'Classical Fusion'],
        color: '#e386a5',

        deepExplanation: {
            intro: "Our dance program isn't about performing on a stage (unless you want to). It's about finding freedom in movement. Every session begins with a proper warm-up where we awaken the body gently. You'll learn foundational techniques—how to move with control, how to express emotion through gesture, how to sync with rhythm without overthinking it.",
            experience: "The studio is bright and spacious, with mirrors on one wall and natural light streaming in through large windows. Music is diverse—some days it's Bollywood, other days contemporary electronic or classical Indian. Classes are limited to 15 people so you get individual attention. The energy is supportive, not competitive. You're encouraged to explore, not perfect.",
            level: "We teach complete beginners. If you've never danced before, you start with Jazz Fundamentals or Bollywood Beats. Intermediate dancers join Contemporary Fusion. Advanced? Try our Open Dance Floor on Saturdays. You'll know which level fits after your first free trial class."
        },

        whoItsFor: [
            { persona: 'Complete Beginners', description: 'Never danced? Perfect. We start from absolute basics.' },
            { persona: 'Former Dancers Returning', description: 'Took dance as a kid? Rediscover that joy here.' },
            { persona: 'Creative Souls', description: 'If you love music and want to feel it, this is for you.' },
            { persona: 'Confidence Builders', description: 'Dance is therapy. Build self-assurance through movement.' }
        ],

        whoItsNotFor: "If you're looking for aggressive competition or audition prep for professional companies, we're not the right fit. Our focus is personal growth, not performance pressure.",

        benefits: [
            { category: 'Physical', title: 'Improved Coordination', description: 'Your body learns to move with intention and grace' },
            { category: 'Physical', title: 'Cardiovascular Fitness', description: 'Dance is cardio disguised as creativity' },
            { category: 'Mental', title: 'Stress Release', description: 'Let go of tension through expressive movement' },
            { category: 'Mental', title: 'Creative Expression', description: 'Say what words cannot through your body' },
            { category: 'Lifestyle', title: 'Community Connection', description: 'Meet people who share your love for music and movement' },
            { category: 'Lifestyle', title: 'Confidence Boost', description: 'Watch yourself transform in ways you never imagined' }
        ],

        schedulePreview: [
            { day: 'Monday', time: '8:00 PM', class: 'Contemporary Fusion', level: 'Advanced' },
            { day: 'Tuesday', time: '5:00 PM', class: 'Hip Hop Basics', level: 'Beginner' },
            { day: 'Wednesday', time: '4:30 PM', class: 'Jazz Fundamentals', level: 'Beginner' },
            { day: 'Thursday', time: '5:00 PM', class: 'Bollywood Dance', level: 'All Levels' },
            { day: 'Friday', time: '6:00 PM', class: 'Contemporary', level: 'Intermediate' },
            { day: 'Saturday', time: '1:00 PM', class: 'Open Dance Floor', level: 'All Levels' }
        ]
    },
    {
        id: 'yoga',
        slug: 'yoga',
        title: 'Yoga',
        tagline: 'Find Inner Peace',
        description: 'Connect with your inner peace through traditional Hatha, flowing Vinyasa, and restorative practices. Our experienced instructors guide you towards balance, flexibility, and mental clarity.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
        heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
        features: ['Hatha Yoga', 'Vinyasa Flow', 'Pranayama', 'Meditation', 'Power Yoga', 'Restorative'],
        color: '#4CAF50',

        deepExplanation: {
            intro: "Yoga here isn't about touching your toes or doing handstands. It's about showing up on your mat and breathing. We start every class with a few minutes of stillness—eyes closed, noticing where tension lives in your body. Then we move through poses (asanas) with intention, holding some for breath cycles, flowing through others with gentle momentum.",
            experience: "The yoga studio is calming—soft lighting, wooden floors, the faint scent of sandalwood. You practice barefoot on your own mat (we provide them if you don't have one). Classes are intimate, usually 10-12 people. Priya, our head instructor, guides you verbally and sometimes adjusts your posture with a gentle touch. There's no mirror—yoga is about feeling, not looking.",
            level: "Beginners start with Hatha Yoga, which is slow and deliberate. If you want more flow, try Vinyasa. For athleticism, Power Yoga. For pure relaxation, Restorative or Candlelight Yoga. Every class ends with Savasana (lying down in stillness). You'll leave feeling reset, not exhausted."
        },

        whoItsFor: [
            { persona: 'Stress Sufferers', description: 'If your mind never stops, yoga teaches you how to pause.' },
            { persona: 'Desk Workers', description: 'Undo the damage of sitting all day with mindful stretching.' },
            { persona: 'Beginners to Fitness', description: 'Low-impact, beginner-friendly, and deeply restorative.' },
            { persona: 'Spiritual Seekers', description: 'Yoga is a journey inward, not just physical exercise.' }
        ],

        whoItsNotFor: "If you're looking for intense calorie-burning workouts or quick fixes, try our Zumba or Dance classes first. Yoga is slow, intentional, and cumulative.",

        benefits: [
            { category: 'Physical', title: 'Increased Flexibility', description: 'Move through life with ease and fluidity' },
            { category: 'Physical', title: 'Better Posture', description: 'Undo years of slouching and tension' },
            { category: 'Mental', title: 'Reduced Anxiety', description: 'Learn to quiet the noise in your mind' },
            { category: 'Mental', title: 'Improved Focus', description: 'Train your brain to stay present' },
            { category: 'Lifestyle', title: 'Better Sleep', description: 'Fall asleep faster and wake up refreshed' },
            { category: 'Lifestyle', title: 'Mindful Living', description: 'Carry the calm from your mat into daily life' }
        ],

        schedulePreview: [
            { day: 'Monday', time: '7:00 AM', class: 'Morning Vinyasa', level: 'Beginner' },
            { day: 'Monday', time: '6:30 PM', class: 'Power Flow', level: 'Intermediate' },
            { day: 'Tuesday', time: '6:30 AM', class: 'Sunrise Yoga', level: 'All Levels' },
            { day: 'Wednesday', time: '7:00 AM', class: 'Hatha Yoga', level: 'Beginner' },
            { day: 'Thursday', time: '7:00 AM', class: 'Flow & Glow', level: 'Intermediate' },
            { day: 'Friday', time: '8:00 PM', class: 'Candlelight Yoga', level: 'All Levels' }
        ]
    },
    {
        id: 'zumba',
        slug: 'zumba',
        title: 'Zumba',
        tagline: 'Dance Your Way Fit',
        description: 'The ultimate dance-fitness party! Burn calories while having the time of your life. Zumba combines Latin rhythms with easy-to-follow moves for a total body workout that feels like a celebration.',
        image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=1200',
        heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2000',
        features: ['High Intensity', 'Cardio Burn', 'Latin Rhythms', 'Aqua Zumba', 'Zumba Gold', 'Zumba Toning'],
        color: '#FF5722',

        deepExplanation: {
            intro: "Zumba is cardio that doesn't feel like work. You walk into the studio and Latin music is already playing. Instructor Marcus is at the front demonstrating moves—simple steps, hip swings, arm waves. You follow along. You don't have to be perfect. You just move. Before you know it, 45 minutes have passed and you're drenched in sweat, smiling.",
            experience: "The Zumba studio is energetic—LED lights, a killer sound system, upbeat playlists mixing salsa, reggaeton, merengue, and Bollywood. Classes are bigger (up to 25 people) because the vibe is collective and high-energy. Nobody is watching you. We're all just here to dance, sweat, and have fun. Water breaks every 10 minutes. Expect to burn 400-600 calories in a session.",
            level: "All fitness levels welcome. There's Zumba Gold (low-impact for beginners or seniors), standard Zumba Party (medium intensity), and Cardio Zumba (high-intensity intervals). The moves repeat, so if you miss it the first time, you'll catch it the second. No dance experience needed—just show up and let loose."
        },

        whoItsFor: [
            { persona: 'Cardio Haters', description: "If you hate treadmills, Zumba is cardio in disguise." },
            { persona: 'Social Exercisers', description: 'Work out in a group and feed off collective energy.' },
            { persona: 'Busy Professionals', description: '45-minute sessions fit easily into your schedule.' },
            { persona: 'Fun Seekers', description: 'Exercise should feel like a party, not a punishment.' }
        ],

        whoItsNotFor: "If you prefer quiet, introspective workouts, try our Yoga classes. Zumba is loud, energetic, and unapologetically fun.",

        benefits: [
            { category: 'Physical', title: 'Serious Calorie Burn', description: '400-600 calories per session, effortlessly' },
            { category: 'Physical', title: 'Full-Body Toning', description: 'Legs, core, arms—everything gets worked' },
            { category: 'Mental', title: 'Mood Booster', description: 'Impossible to leave class in a bad mood' },
            { category: 'Mental', title: 'Stress Destroyer', description: 'Dance away your worries and tension' },
            { category: 'Lifestyle', title: 'High-Energy Community', description: 'Meet people who love to move and have fun' },
            { category: 'Lifestyle', title: 'No Gym Monotony', description: 'Every class is different, never boring' }
        ],

        schedulePreview: [
            { day: 'Monday', time: '9:30 AM', class: 'Zumba Party', level: 'All Levels' },
            { day: 'Tuesday', time: '7:00 PM', class: 'Cardio Zumba', level: 'Intermediate' },
            { day: 'Wednesday', time: '9:30 AM', class: 'Zumba Toning', level: 'All Levels' },
            { day: 'Thursday', time: '11:00 AM', class: 'Aqua Zumba', level: 'All Levels' },
            { day: 'Friday', time: '10:00 AM', class: 'Zumba Party', level: 'All Levels' },
            { day: 'Saturday', time: '10:30 AM', class: 'Mega Zumba Party', level: 'All Levels' }
        ]
    },
    {
        id: 'aerobics',
        slug: 'aerobics',
        title: 'Aerobics',
        tagline: 'High-Energy Cardio Blast',
        description: 'Elevate your heart rate and tone your entire body with our dynamic aerobics classes. A combination of rhythmic aerobic exercise with stretching and strength training routines to improve all elements of fitness.',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200',
        heroImage: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=2000',
        features: ['Step Aerobics', 'Hi-Low Impact', 'Cardio Kickboxing', 'Body Styling', 'Interval Training', 'Circuit Training'],
        color: '#f5a623',

        deepExplanation: {
            intro: "Aerobics at Harmony Studio is about sustained energy and rhythmic precision. It's a classic for a reason—it works. We combine choreographed movements with cardiovascular conditioning to help you build endurance and strength simultaneously. It's fast-paced, music-driven, and highly effective for those who want a structured yet high-energy workout.",
            experience: "The atmosphere is electric. Think driving beats, synchronized movement, and a group energy that's contagious. You'll be using step platforms, light weights, and your own body resistance. Instructor Sarah keeps the pace high but provides modifications for every move. You'll leave feeling empowered and physically challenged.",
            level: "We offer 'Lite' versions for those new to rhythmic cardio, focusing on basic steps and lower impact. Our 'Elite' sessions introduce complex choreography and high-intensity intervals. Most of our classes are 'Open Level', where the intensity is what you make of it. If you can move to a beat, you can do aerobics."
        },

        whoItsFor: [
            { persona: 'Fitness Purists', description: 'If you want a workout that hits every muscle and burns calories, this is it.' },
            { persona: 'Structure Lovers', description: 'Perfect for those who enjoy rhythmic, choreographed routines.' },
            { persona: 'Weight Loss Seekers', description: 'High calorie burn and muscle toning in every session.' },
            { persona: 'Endurance Builders', description: 'Great for improving cardiovascular health and stamina.' }
        ],

        whoItsNotFor: "If you're looking for a relaxing or reflective practice, stick with our Yoga sessions. Aerobics is intense, loud, and physically demanding.",

        benefits: [
            { category: 'Physical', title: 'Heart Health', description: 'Strengthen your heart and improve lung capacity' },
            { category: 'Physical', title: 'Muscle Toning', description: 'Targeted moves to sculpt and define your body' },
            { category: 'Mental', title: 'Endorphin Rush', description: 'The natural high from intense, rhythmic exercise' },
            { category: 'Mental', title: 'Coordination', description: 'Improve the mind-body connection through choreography' },
            { category: 'Lifestyle', title: 'Consistency', description: 'The fun, rhythmic nature makes it easy to keep coming back' },
            { category: 'Lifestyle', title: 'Visible Results', description: 'Fast-track your fitness goals with high-intensity cardio' }
        ],

        schedulePreview: [
            { day: 'Monday', time: '6:00 PM', class: 'Step Burn', level: 'Intermediate' },
            { day: 'Wednesday', time: '7:30 PM', class: 'Kickbox Cardio', level: 'All Levels' },
            { day: 'Thursday', time: '8:30 AM', class: 'Aerobics Lite', level: 'Beginner' },
            { day: 'Friday', time: '5:00 PM', class: 'Interval Circuit', level: 'Advanced' },
            { day: 'Saturday', time: '9:00 AM', class: 'Weekend Blast', level: 'All Levels' }
        ]
    }
];

// Instructors Data
export const INSTRUCTORS = [
    {
        id: 'priya-sharma',
        slug: 'priya-sharma',
        name: 'Priya Sharma',
        role: 'Head of Yoga',
        bio: '15 years of experience in traditional yoga practices. Certified in Hatha and Vinyasa.',
        fullBio: 'Priya Shara is a dedicated yoga practitioner with over 15 years of experience. Her journey began in the Himalayas, where she studied under renowned masters. Today, she brings that ancient wisdom to Harmony Studio, helping students find their inner focus and physical balance. Her classes are known for their blend of challenging sequences and restorative mindfulness.',
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600',
        specialties: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Pranayama'],
        social: {
            instagram: 'https://instagram.com/priyayoga',
            twitter: 'https://twitter.com/priyayoga'
        },
        experience: '15+ Years',
        education: 'RYT 500 Certified, Yoga Alliance'
    },
    {
        id: 'marcus-johnson',
        slug: 'marcus-johnson',
        name: 'Marcus Johnson',
        role: 'Zumba Specialist',
        bio: 'International Zumba instructor with a passion for high-energy dance fitness.',
        fullBio: 'Marcus Johnson is an explosive energy in the world of Zumba. With a background in athletics and professional dance, he turned his passion into a mission to make fitness fun. He has led Zumba workshops across three continents and is famous for his high-energy playlists that make every class feel like a Saturday night party.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
        specialties: ['Zumba Party', 'Cardio Dance', 'HIIT', 'Latin Rhythms'],
        social: {
            instagram: 'https://instagram.com/marcuszumba',
            facebook: 'https://facebook.com/marcuszumba'
        },
        experience: '8+ Years',
        education: 'Licensed Zumba Instructor (ZIN)'
    },
    {
        id: 'elena-petrova',
        slug: 'elena-petrova',
        name: 'Elena Petrova',
        role: 'Dance Director',
        bio: 'Professional dancer and choreographer bringing 20 years of stage experience.',
        fullBio: 'Elena Petrova is a master of movement. Trained professionally since the age of 5, she has performed on global stages before turning her focus to choreography and teaching. Her pedagogical approach emphasizes technical precision without ever sacrificing the emotional soul of the dance. She believes everyone has a "rhythm within" waiting to be discovered.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600',
        specialties: ['Contemporary', 'Modern Jazz', 'Classical Ballet', 'Choreography'],
        social: {
            instagram: 'https://instagram.com/elenadance',
            twitter: 'https://twitter.com/elenadance'
        },
        experience: '20+ Years',
        education: 'Master of Fine Arts in Dance & Choreography'
    },
    {
        id: 'sarah-miller',
        slug: 'sarah-miller',
        name: 'Sarah Miller',
        role: 'Aerobics Lead',
        bio: 'Certified fitness professional specializing in rhythmic aerobics and HIIT.',
        fullBio: 'Sarah Miller brings over 12 years of experience in the fitness industry. A former competitive gymnast, she transitioned into group fitness with a focus on high-impact aerobics and circuit training. Her classes are legendary for their intensity and Sarah\'s infectious "no-excuses" attitude that pushes every student to their personal best.',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600',
        specialties: ['Step Aerobics', 'Cardio Kickboxing', 'Circuit Training', 'HIIT'],
        social: {
            instagram: 'https://instagram.com/sarahfit',
            twitter: 'https://twitter.com/sarahfit'
        },
        experience: '12+ Years',
        education: 'ACE Certified Group Fitness Instructor'
    }
];

// Schedule Data
export const SCHEDULE = {
    Monday: [
        { time: '07:00 AM', activity: 'Morning Vinyasa', type: 'Yoga', level: 'Beginner', instructor: 'Priya Sharma', duration: '60 min' },
        { time: '09:30 AM', activity: 'Zumba Party', type: 'Zumba', level: 'All Levels', instructor: 'Marcus Johnson', duration: '45 min' },
        { time: '04:00 PM', activity: 'Kids Ballet', type: 'Dance', level: 'Junior', instructor: 'Elena Petrova', duration: '45 min' },
        { time: '06:00 PM', activity: 'Step Burn', type: 'Aerobics', level: 'Intermediate', instructor: 'Sarah Miller', duration: '60 min' },
        { time: '06:30 PM', activity: 'Power Flow', type: 'Yoga', level: 'Intermediate', instructor: 'Priya Sharma', duration: '75 min' },
        { time: '07:30 PM', activity: 'Kickbox Cardio', type: 'Aerobics', level: 'All Levels', instructor: 'Sarah Miller', duration: '45 min' },
        { time: '08:00 PM', activity: 'Contemporary Fusion', type: 'Dance', level: 'Advanced', instructor: 'Elena Petrova', duration: '60 min' },
    ],
    Tuesday: [
        { time: '06:30 AM', activity: 'Sunrise Yoga', type: 'Yoga', level: 'All Levels', instructor: 'Priya Sharma', duration: '60 min' },
        { time: '10:00 AM', activity: 'Zumba Gold', type: 'Zumba', level: 'Beginner', instructor: 'Marcus Johnson', duration: '45 min' },
        { time: '05:00 PM', activity: 'Hip Hop Basics', type: 'Dance', level: 'Beginner', instructor: 'Elena Petrova', duration: '60 min' },
        { time: '07:00 PM', activity: 'Cardio Zumba', type: 'Zumba', level: 'Intermediate', instructor: 'Marcus Johnson', duration: '50 min' },
    ],
    Wednesday: [
        { time: '07:00 AM', activity: 'Hatha Yoga', type: 'Yoga', level: 'Beginner', instructor: 'Priya Sharma', duration: '60 min' },
        { time: '09:30 AM', activity: 'Zumba Toning', type: 'Zumba', level: 'All Levels', instructor: 'Marcus Johnson', duration: '45 min' },
        { time: '04:30 PM', activity: 'Jazz Fundamentals', type: 'Dance', level: 'Beginner', instructor: 'Elena Petrova', duration: '60 min' },
        { time: '06:30 PM', activity: 'Deep Stretch', type: 'Yoga', level: 'All Levels', instructor: 'Priya Sharma', duration: '45 min' },
    ],
    Thursday: [
        { time: '07:00 AM', activity: 'Flow & Glow', type: 'Yoga', level: 'Intermediate', instructor: 'Priya Sharma', duration: '75 min' },
        { time: '08:30 AM', activity: 'Aerobics Lite', type: 'Aerobics', level: 'Beginner', instructor: 'Sarah Miller', duration: '45 min' },
        { time: '11:00 AM', activity: 'Aqua Zumba', type: 'Zumba', level: 'All Levels', instructor: 'Marcus Johnson', duration: '45 min' },
        { time: '05:00 PM', activity: 'Bollywood Dance', type: 'Dance', level: 'All Levels', instructor: 'Elena Petrova', duration: '60 min' },
        { time: '07:30 PM', activity: 'Latin Zumba', type: 'Zumba', level: 'Advanced', instructor: 'Marcus Johnson', duration: '50 min' },
    ],
    Friday: [
        { time: '06:30 AM', activity: 'Power Yoga', type: 'Yoga', level: 'Advanced', instructor: 'Priya Sharma', duration: '75 min' },
        { time: '10:00 AM', activity: 'Zumba Party', type: 'Zumba', level: 'All Levels', instructor: 'Marcus Johnson', duration: '45 min' },
        { time: '04:00 PM', activity: 'Kids Hip Hop', type: 'Dance', level: 'Junior', instructor: 'Elena Petrova', duration: '45 min' },
        { time: '05:00 PM', activity: 'Interval Circuit', type: 'Aerobics', level: 'Advanced', instructor: 'Sarah Miller', duration: '60 min' },
        { time: '06:00 PM', activity: 'Contemporary', type: 'Dance', level: 'Intermediate', instructor: 'Elena Petrova', duration: '60 min' },
        { time: '08:00 PM', activity: 'Candlelight Yoga', type: 'Yoga', level: 'All Levels', instructor: 'Priya Sharma', duration: '60 min' },
    ],
    Saturday: [
        { time: '08:00 AM', activity: 'Weekend Warrior Yoga', type: 'Yoga', level: 'All Levels', instructor: 'Priya Sharma', duration: '90 min' },
        { time: '09:00 AM', activity: 'Weekend Blast', type: 'Aerobics', level: 'All Levels', instructor: 'Sarah Miller', duration: '60 min' },
        { time: '10:30 AM', activity: 'Mega Zumba Party', type: 'Zumba', level: 'All Levels', instructor: 'Marcus Johnson', duration: '60 min' },
        { time: '01:00 PM', activity: 'Open Dance Floor', type: 'Dance', level: 'All Levels', instructor: 'Elena Petrova', duration: '120 min' },
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
    },
    {
        name: 'David Wilson',
        role: 'Aerobics Member',
        content: 'The aerobics classes here are intense but so rewarding. I\'ve lost 10kg in 3 months and my stamina has never been better!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
];

// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
];

// Footer Links
export const FOOTER_LINKS = [
    // { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    // { name: 'Schedule', path: '/schedule' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
];

// Contact Info
export const CONTACT_INFO = {
    address: '123 Wellness Boulevard, Suite 100, Mumbai 400001',
    googleMaps: 'https://maps.app.goo.gl/Vt6zyfFaRzYg8mKL8',
    phone: '+91 98765 43210',
    email: 'hello@harmonystudio.com',
    hours: {
        weekdays: '6:00 AM - 10:00 PM',
        weekends: '7:00 AM - 8:00 PM'
    },
    social: {
        instagram: 'https://instagram.com/harmonystudio',
        facebook: 'https://facebook.com/harmonystudio',
        twitter: 'https://twitter.com/harmonystudio',
        linkedin: 'https://www.linkedin.com/company/vernoratech/'
    }
};

// Stats
export const STATS = [
    { value: '5000+', label: 'Happy Members' },
    { value: '150+', label: 'Classes Weekly' },
    { value: '15', label: 'Expert Instructors' },
    { value: '10+', label: 'Years Experience' }
];

// Gallery Data
export const GALLERY = [
    {
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
        caption: 'Morning Yoga Session',
        category: 'Yoga',
        alt: 'Students in downward dog pose during morning yoga'
    },
    {
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
        caption: 'Zumba Energy Hour',
        category: 'Zumba',
        alt: 'Energetic zumba class with participants dancing'
    },
    {
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
        caption: 'Dance Practice Hall',
        category: 'Dance',
        alt: 'Dancer practicing contemporary moves in studio'
    },
    {
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
        caption: 'Sunset Meditation',
        category: 'Yoga',
        alt: 'Group meditation session at sunset'
    },
    {
        image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800',
        caption: 'Cardio Dance Workout',
        category: 'Zumba',
        alt: 'High-energy cardio workout session'
    },
    {
        image: 'https://images.unsplash.com/photo-1547153760-18fc9e4d8887?auto=format&fit=crop&q=80&w=800',
        caption: 'Ballet Elegance',
        category: 'Dance',
        alt: 'Ballerina practicing graceful movements'
    },
    {
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
        caption: 'Mindful Breathing',
        category: 'Yoga',
        alt: 'Peaceful yoga practice focusing on breath'
    },
    {
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
        caption: 'Latin Rhythms',
        category: 'Zumba',
        alt: 'Zumba instructor leading latin dance moves'
    },
    {
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
        caption: 'Studio Ambiance',
        category: 'General',
        alt: 'Beautiful studio interior with natural lighting'
    },
    {
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800',
        caption: 'Warrior Pose Mastery',
        category: 'Yoga',
        alt: 'Student holding warrior pose with perfect form'
    },
    {
        image: 'https://images.unsplash.com/photo-1520394584497-371f607e37c6?auto=format&fit=crop&q=80&w=800',
        caption: 'Hip Hop Vibes',
        category: 'Dance',
        alt: 'Hip hop dance class in action'
    },
    {
        image: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?auto=format&fit=crop&q=80&w=800',
        caption: 'Reception & Lounge',
        category: 'General',
        alt: 'Modern studio reception and waiting area'
    },
    {
        image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=800',
        caption: 'Aerobics Circuit Boot Camp',
        category: 'Aerobics',
        alt: 'Participants doing intense circuit training'
    },
    {
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
        caption: 'Step Aerobics Session',
        category: 'Aerobics',
        alt: 'Class using step platforms for cardio'
    }
];
