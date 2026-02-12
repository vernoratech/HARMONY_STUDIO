// Services Data
export const SERVICES = [
    {
        id: 'dance',
        slug: 'dance',
        title: 'Dance',
        tagline: 'Express Your Soul',
        description: 'Express yourself through movement. From contemporary to classical, find your rhythm and let your body tell its story. Our dance programs are designed to build confidence, coordination, and creative expression.',
        image: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770374598/Harmony_Studio/qs4v5mi4jm6mefljiaot.jpg',
        heroImage: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770374598/Harmony_Studio/qs4v5mi4jm6mefljiaot.jpg',
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
        image: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770458626/355429496_553441500330880_6564643484386808839_n_wiemtd.jpg',
        heroImage: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770372845/Harmony_Studio/dtq4toc0npn6vjltwbqv.jpg',
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
        image: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770372272/Harmony_Studio/kpleohtqgnvdesyb3ykf.jpg',
        heroImage: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770372272/Harmony_Studio/kpleohtqgnvdesyb3ykf.jpg',
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
    },
 {
  id: 'weightloss',
  slug: 'weight-loss',
  title: 'Weight Loss Programme',
  tagline: 'Burn Fat. Build Energy.',
  description: 'A holistic weight loss program that combines movement, consistency, and motivation. Designed to help you burn calories, improve stamina, and feel lighter—both physically and mentally.',
  image: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770700774/weightloss5_kluo1l.jpg',
  heroImage: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770700774/weightloss5_kluo1l.jpg',
  features: ['Fat Burn Workouts', 'HIIT Sessions', 'Cardio Dance', 'Core Training', 'Flexibility'],
  color: '#f28b54',

  deepExplanation: {
    intro: "Our weight loss program focuses on sustainable results, not quick fixes. Each session starts with a dynamic warm-up, followed by calorie-burning exercises designed to activate your entire body.",
    experience: "Expect high-energy music, guided movements, and trainers who motivate without intimidation. Classes are fun, sweat-filled, and structured so you burn fat while enjoying the process.",
    level: "Perfect for beginners and intermediates. Movements are scalable, so you progress at your own pace while still challenging yourself."
  },

  whoItsFor: [
    { persona: 'Busy Professionals', description: 'Short, effective workouts that fit your schedule.' },
    { persona: 'Weight Loss Starters', description: 'If you’re beginning your fitness journey, this is ideal.' },
    { persona: 'Consistency Seekers', description: 'Structured programs that help you stay regular.' },
    { persona: 'Energy Boosters', description: 'Feel more active, lighter, and confident.' }
  ],

  whoItsNotFor:
    "If you’re looking for bodybuilding or heavy lifting only, this program isn’t the right match.",

  benefits: [
    { category: 'Physical', title: 'Fat Reduction', description: 'Burn calories efficiently and consistently' },
    { category: 'Physical', title: 'Improved Stamina', description: 'Increase endurance and daily energy levels' },
    { category: 'Mental', title: 'Stress Reduction', description: 'Workouts that clear your mind' },
    { category: 'Mental', title: 'Motivation Boost', description: 'Stay inspired with guided sessions' },
    { category: 'Lifestyle', title: 'Healthy Routine', description: 'Build long-term fitness habits' },
    { category: 'Lifestyle', title: 'Confidence Gain', description: 'See and feel visible progress' }
  ],

  schedulePreview: [
    { day: 'Monday', time: '6:00 AM', class: 'HIIT Burn', level: 'All Levels' },
    { day: 'Tuesday', time: '7:00 PM', class: 'Cardio Dance', level: 'Beginner' },
    { day: 'Wednesday', time: '6:30 AM', class: 'Core & Fat Burn', level: 'Intermediate' },
    { day: 'Thursday', time: '7:00 PM', class: 'Full Body Burn', level: 'All Levels' },
    { day: 'Saturday', time: '8:00 AM', class: 'Weekend Fat Loss', level: 'All Levels' }
  ]
},
{
  id: 'weighttraining',
  slug: 'weight-training',
  title: 'Weight Training',
  tagline: 'Strength Builds Confidence',
  description: 'A structured strength training program focused on muscle building, body toning, and functional fitness. Learn proper techniques while getting stronger every week.',
  image: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770904844/weighttraining_orj1tb.jpg',
  heroImage: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770904844/weighttraining_orj1tb.jpg',
  features: ['Strength Training', 'Muscle Toning', 'Free Weights', 'Functional Training', 'Form Coaching'],
  color: '#5b7c99',

  deepExplanation: {
    intro: "Weight training isn’t about bulk—it’s about strength, balance, and control. Sessions begin with mobility drills and progress into resistance-based exercises using dumbbells and body weight.",
    experience: "The environment is focused but friendly. Trainers guide your posture, breathing, and movement to prevent injuries and maximize results. Progress is steady and measurable.",
    level: "Beginners start with light weights and fundamentals. Intermediate and advanced members move into split routines and progressive overload."
  },

  whoItsFor: [
    { persona: 'Strength Beginners', description: 'Learn lifting safely from day one.' },
    { persona: 'Body Toning Goals', description: 'Shape and define your physique.' },
    { persona: 'Athletic Improvers', description: 'Boost overall performance and power.' },
    { persona: 'Confidence Builders', description: 'Feel strong inside and out.' }
  ],

  whoItsNotFor:
    "If you’re only looking for cardio-based workouts or dance-focused sessions, this may not suit you.",

  benefits: [
    { category: 'Physical', title: 'Muscle Strength', description: 'Build lean and functional muscle' },
    { category: 'Physical', title: 'Bone Density', description: 'Support long-term joint and bone health' },
    { category: 'Mental', title: 'Mental Toughness', description: 'Develop discipline and focus' },
    { category: 'Mental', title: 'Confidence Growth', description: 'Strength reflects in mindset' },
    { category: 'Lifestyle', title: 'Better Posture', description: 'Improve alignment and balance' },
    { category: 'Lifestyle', title: 'Metabolic Boost', description: 'Burn more calories even at rest' }
  ],

  schedulePreview: [
    { day: 'Monday', time: '7:00 AM', class: 'Upper Body Strength', level: 'Beginner' },
    { day: 'Tuesday', time: '6:00 PM', class: 'Lower Body Training', level: 'Intermediate' },
    { day: 'Thursday', time: '7:00 AM', class: 'Full Body Strength', level: 'All Levels' },
    { day: 'Friday', time: '6:30 PM', class: 'Core & Conditioning', level: 'All Levels' },
    { day: 'Saturday', time: '9:00 AM', class: 'Strength Workshop', level: 'Intermediate' }
  ]
}



];

// Instructors Data
export const INSTRUCTORS = [
    {
        id: 'rishika-pandey',
        slug: 'rishika-pandey',
        name: 'Rishika Pandey',
        role: 'Founder & Lead Instructor',
        bio: 'Certified Yoga, Zumba, and Nutrition instructor with 7+ years of experience, specializing in mindful movement and holistic wellness.',
        fullBio: 'Rishika Pandey is the Founder and Lead Instructor at Harmony Studio with over seven years of professional experience in Yoga, Zumba, Meditation, and Nutrition. She is a K11 certified trainer and a certified Yoga, Zumba, and Nutrition instructor, dedicated to delivering structured, science-backed, and holistic training. Her approach integrates traditional yoga practices with modern fitness methodologies, focusing on sustainable health, strength, flexibility, and mental well-being.',
        image: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770524055/Instructor1_kdzjiq.jpg',
        specialties: ['Yoga', 'Zumba ', 'Meditation', 'Nutritionist '],
        social: {
            instagram: 'https://www.instagram.com/rishika_pandey/',
            // twitter: 'https://twitter.com/priyayoga'
        },
        experience: '07+ Years',
        education: 'k11 certified trainer, Certified yoga instructor, Certified Zumba instructor, Certified nutritionist '
    },
    // {
    //     id: 'marcus-johnson',
    //     slug: 'marcus-johnson',
    //     name: 'Marcus Johnson',
    //     role: 'Zumba Specialist',
    //     bio: 'International Zumba instructor with a passion for high-energy dance fitness.',
    //     fullBio: 'Marcus Johnson is an explosive energy in the world of Zumba. With a background in athletics and professional dance, he turned his passion into a mission to make fitness fun. He has led Zumba workshops across three continents and is famous for his high-energy playlists that make every class feel like a Saturday night party.',
    //     image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    //     specialties: ['Zumba Party', 'Cardio Dance', 'HIIT', 'Latin Rhythms'],
    //     social: {
    //         instagram: 'https://www.instagram.com/harmony_studio7?igsh=dHI5amRuOHoxdXVx',
    //         facebook: 'https://facebook.com/marcuszumba'
    //     },
    //     experience: '8+ Years',
    //     education: 'Licensed Zumba Instructor (ZIN)'
    // },
    // {
    //     id: 'elena-petrova',
    //     slug: 'elena-petrova',
    //     name: 'Elena Petrova',
    //     role: 'Dance Director',
    //     bio: 'Professional dancer and choreographer bringing 20 years of stage experience.',
    //     fullBio: 'Elena Petrova is a master of movement. Trained professionally since the age of 5, she has performed on global stages before turning her focus to choreography and teaching. Her pedagogical approach emphasizes technical precision without ever sacrificing the emotional soul of the dance. She believes everyone has a "rhythm within" waiting to be discovered.',
    //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600',
    //     specialties: ['Contemporary', 'Modern Jazz', 'Classical Ballet', 'Choreography'],
    //     social: {
    //         instagram: 'https://www.instagram.com/harmony_studio7?igsh=dHI5amRuOHoxdXVx',
    //         twitter: 'https://twitter.com/elenadance'
    //     },
    //     experience: '20+ Years',
    //     education: 'Master of Fine Arts in Dance & Choreography'
    // },
    // {
    //     id: 'sarah-miller',
    //     slug: 'sarah-miller',
    //     name: 'Sarah Miller',
    //     role: 'Aerobics Lead',
    //     bio: 'Certified fitness professional specializing in rhythmic aerobics and HIIT.',
    //     fullBio: 'Sarah Miller brings over 12 years of experience in the fitness industry. A former competitive gymnast, she transitioned into group fitness with a focus on high-impact aerobics and circuit training. Her classes are legendary for their intensity and Sarah\'s infectious "no-excuses" attitude that pushes every student to their personal best.',
    //     image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600',
    //     specialties: ['Step Aerobics', 'Cardio Kickboxing', 'Circuit Training', 'HIIT'],
    //     social: {
    //         instagram: 'https://www.instagram.com/harmony_studio7?igsh=dHI5amRuOHoxdXVx',
    //         twitter: 'https://twitter.com/sarahfit'
    //     },
    //     experience: '12+ Years',
    //     education: 'ACE Certified Group Fitness Instructor'
    // }
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
    name: "Ananya Sharma",
    role: "Dance Member",
    content: "Joining Harmony Studio reignited my love for dance. The choreography is expressive, the classes are well-structured, and every session leaves me feeling confident and energized.",
    rating: 5,
    image: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770524925/isolated-object-avatar-dummy-sign-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-logo-137161322_xgy2es.jpg"
  },
  {
    name: "Pooja Mehta",
    role: "Zumba Member",
    content: "Zumba at Harmony Studio is pure joy. The music, the energy, and the motivation from the instructors make workouts feel like a celebration rather than a routine.",
    rating: 5,
    image: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770524925/isolated-object-avatar-dummy-sign-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-logo-137161322_xgy2es.jpg"
  },
  {
    name: "Kritika Verma",
    role: "Dance Student",
    content: "I started as a complete beginner, but Harmony Studio made dance feel approachable and empowering. The guidance and encouragement here truly make a difference.",
    rating: 5,
    image: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770524925/isolated-object-avatar-dummy-sign-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-logo-137161322_xgy2es.jpg"
  },
  {
    name: "Sneha Iyer",
    role: "Zumba Enthusiast",
    content: "Every Zumba session lifts my mood instantly. Harmony Studio has helped me stay consistent with fitness while actually enjoying the process.",
    rating: 4,
    image: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770524925/isolated-object-avatar-dummy-sign-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-logo-137161322_xgy2es.jpg"
  },
  {
    name: "Ritika Malhotra",
    role: "Dance Performer",
    content: "Harmony Studio focuses not just on steps but on expression and confidence. Performing after training here feels natural and effortless.",
    rating: 5,
    image: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770524925/isolated-object-avatar-dummy-sign-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-logo-137161322_xgy2es.jpg"
  },
  {
    name: "Neha Joshi",
    role: "Zumba Member",
    content: "The positive atmosphere at Harmony Studio keeps me coming back. I’ve seen real improvement in my stamina, flexibility, and overall fitness.",
    rating: 5,
    image: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770524925/isolated-object-avatar-dummy-sign-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-logo-137161322_xgy2es.jpg"
  },
  {
    name: "Aditi Kulkarni",
    role: "Dance & Zumba Member",
    content: "Harmony Studio perfectly balances discipline and fun. Whether it’s dance or Zumba, every class feels thoughtfully designed and motivating.",
    rating: 5,
    image: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770524925/isolated-object-avatar-dummy-sign-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-logo-137161322_xgy2es.jpg"
  },
  {
    name: "Shreya Nair",
    role: "Zumba Student",
    content: "I’ve tried many fitness studios, but Harmony Studio stands out for its consistency and quality. Zumba here keeps me active and stress-free.",
    rating: 5,
    image: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770524925/isolated-object-avatar-dummy-sign-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-logo-137161322_xgy2es.jpg"
  }

];

// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Schedule', path: '/schedule' },
    { name: 'Gallery', path: '/gallery' },
    // { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
];
{/* <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=ABQIAAAAuPsJpk3MBtDpJ4G8cqBnjRRaGTYH6UMl8mADNa0YKuWNNa8VNxQCzVBXTx2DYyXGsTOxpWhvIG7Djw" type="text/javascript"></script> */}
// Footer Links
export const FOOTER_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Schedule', path: '/schedule' },
    { name: 'Gallery', path: '/gallery' },
    // { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
];

// Contact Info
export const CONTACT_INFO = {
    address: 'Building No. 137, Shop no 03 Shripastha Complex, 2<sup>nd</sup> Road, Nallasopara(W), Maharashtra 401203.',
    googleMaps: 'https://maps.app.goo.gl/NhRZVmiLD5eKbqNr7?g_st=aw',
    googleMapsEmbed:
    "https://maps.google.com/maps?q=19.421955,72.809553&z=17&output=embed",
    phone: '+91 9021953157',
    // email: 'harmonystudio1997@gmail.com',
    hours: {

        weekdays: '7:00 AM - 9:00 PM',
        weekends: false ? '7:00 AM - 8:00 PM' : 'No Classes on Weekends'
    },
    social: {
        instagram: 'https://www.instagram.com/harmony_studio7?igsh=dHI5amRuOHoxdXVx',
        whatsapp: 'https://wa.me/919021953157',
        youtube: 'https://www.youtube.com/@HarmonyStudio07',
        linkedin: 'https://www.linkedin.com/company/vernoratech/'
    }
};

// Stats
export const STATS = [
    { value: '40+', label: 'Happy Members' },
    { value: '30+', label: 'Classes Weekly' },
    { value: '02', label: 'Expert Instructors' },
    { value: '4+', label: 'Years Experience' }
];

// Gallery Data
export const ACTIONSHOT = [
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
        image: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770456995/IMG_0370_rgbvpa.jpg',
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
        image: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770392419/Harmony_Studio/maavjjmjt18uz2ck6cxj.jpg',
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
        image: 'https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770527680/dqnju5jjxqu3fhmouxez.jpg',
        caption: 'Latin Rhythms',
        category: 'Zumba',
        alt: 'Zumba instructor leading latin dance moves'
    },
    {
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
        caption: 'Outdoor Ambiance',
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

// Gallery Data (Instagram and Images + Videos unified)
export const GALLERY = [
    {
        id: 32,
        type: "image",
        category: "Yoga",
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
        caption: "Sunset Meditation",
    },
    {
        id: 33,
        type: "image",
        category: "General",
        src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1200",
        caption: "Outdoor Ambiance",
    },
    {
        id: 1,
        type: "instagram",
        url: "https://www.instagram.com/reel/CrkesrerwfJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770372272/Harmony_Studio/kpleohtqgnvdesyb3ykf.jpg",
        caption: "Zumba energy unleashed",
        category: "Zumba"
    },
    {
        id: 2,
        type: "instagram",
        url: "https://www.instagram.com/reel/DHnQu6zN7Hp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770372845/Harmony_Studio/dtq4toc0npn6vjltwbqv.jpg",
        caption: "Flow into balance",
        category: "Yoga"
    },
    {
        id: 47,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770528090/aero_j3dgc2.jpg",
        caption: "Where fitness meets fun",
        category: "Aerobics"
    },
    {
        id: 3,
        type: "instagram",
        url: "https://www.instagram.com/reel/DHFwTTwNpsB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770373215/Harmony_Studio/qdusyv2oc6s1ddaaykqn.jpg",
        caption: "Dance with passion",
        category: "Dance"
    },
    {
        id: 4,
        type: "instagram",
        url: "https://www.instagram.com/reel/DEhja6vtJab/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770373393/Harmony_Studio/yxzilledrjeagk8lgfjd.jpg",
        caption: "Peace in motion",
        category: "Yoga"
    },
    {
        id: 5,
        type: "instagram",
        url: "https://www.instagram.com/reel/DD_kPymtjWo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770374598/Harmony_Studio/qs4v5mi4jm6mefljiaot.jpg",
        caption: "Celebrating together",
        category: "Celebration"
    },
    {
        id: 6,
        type: "instagram",
        url: "https://www.instagram.com/reel/DAt3LB5J47Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770375231/Harmony_Studio/d26dgqrpm5zuekhd03kw.jpg",
        caption: "Joyful studio moments",
        category: "Celebration"
    },
    {
        id: 7,
        type: "instagram",
        url: "https://www.instagram.com/reel/C-qIQIlNati/?utm_source=ig_web_copy_link",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770375443/Harmony_Studio/nwcdzy2ih0wyl3uxlfvb.jpg",
        caption: "Smiles and memories",
        category: "Celebration"
    },
    {
        id: 8,
        type: "instagram",
        url: "https://www.instagram.com/reel/C9ZPnF6NQ6f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770375647/Harmony_Studio/vyc2ffmx6q6wq0uqojfu.jpg",
        caption: "Fun beyond walls",
        category: "Dance"
    },
    {
        id: 9,
        type: "instagram",
        url: "https://www.instagram.com/reel/C5NpSiDtzbl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770376009/Harmony_Studio/ylto8tzpmigfeefgeufm.jpg",
        caption: "Dance under sky",
        category: "Dance"
    },
    {
        id: 37,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770526101/Harmony_Studio/iist3pyx7opmoarg9nan.jpg",
        caption: "Rhythm meets expression",
        category: "Dance"
    },
    {
        id: 38,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770526410/Harmony_Studio/napymqadg7xuryiistyb.jpg",
        caption: "Grace in motion",
        category: "Dance"
    },
    {
        id: 10,
        type: "instagram",
        url: "https://www.instagram.com/reel/C5GtGYhtkvs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770378355/Harmony_Studio/dqhwv3pldqgei8qwo3zy.jpg",
        caption: "Moments worth cheering",
        category: "Celebration"
    },
    {
        id: 11,
        type: "instagram",
        url: "https://www.instagram.com/reel/C4Pkh7ZtKcp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770380545/Harmony_Studio/ym8vxolnzqnzg2asnxty.jpg",
        caption: "Culture in motion",
        category: "Dance"
    },
    {
        id: 12,
        type: "instagram",
        url: "https://www.instagram.com/reel/C3FAiZeN6Sa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770380622/Harmony_Studio/mpz5dnjzoyunvgvjktbo.jpg",
        caption: "Breathe and stretch",
        category: "Yoga"
    },
    {
        id: 13,
        type: "instagram",
        url: "https://www.instagram.com/reel/C1m5AZltAuD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770380681/Harmony_Studio/x3revp6eusd6mko7erti.jpg",
        caption: "Active outdoor vibes",
        category: "Celebration"
    },
    {
        id: 35,
        type: "image",
        category: "Yoga",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770458626/355429496_553441500330880_6564643484386808839_n_wiemtd.jpg",
        caption: "Slim Stretch",
    },
    {
        id: 14,
        type: "instagram",
        url: "https://www.instagram.com/reel/C1mymCothO3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770380749/Harmony_Studio/v8vgmtmvuwx4uhebprnk.jpg",
        caption: "Move in nature",
        category: "Celebration"
    },
    {
        id: 15,
        type: "instagram",
        url: "https://www.instagram.com/reel/C1U3rsHNaFC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770381020/Harmony_Studio/ynd5nzrsnm7rvmff12ql.jpg",
        caption: "Pure celebration vibes",
        category: "Celebration"
    },
    {
        id: 30,
        type: "image",
        category: "Yoga",
        src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
        caption: "Morning Yoga Session",
    },
    {
        id: 31,
        type: "image",
        category: "Dance",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770456995/IMG_0370_rgbvpa.jpg",
        caption: "Dance Practice Hall",
    },
    {
        id: 16,
        type: "instagram",
        url: "https://www.instagram.com/reel/CzjimRUtYxp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770387978/Harmony_Studio/fdqf09t5a6ne45nufcs1.jpg",
        caption: "Studio celebration moments",
        category: "Celebration"
    },
    {
        id: 34,
        type: "image",
        category: "Yoga",
        src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
        caption: "Mindful Breathing",
    },
    {
        id: 17,
        type: "instagram",
        url: "https://www.instagram.com/reel/Cyc99s6thDx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770388085/Harmony_Studio/zk27fyjnahto4zb4ifif.jpg",
        caption: "Groove and express",
        category: "Dance"
    },
    {
        id: 18,
        type: "instagram",
        url: "https://www.instagram.com/reel/CsOwdynrAgc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770388178/Harmony_Studio/qc4ibtwdwpz1wi5vjgad.jpg",
        caption: "High energy moves",
        category: "Zumba"
    },
    //one image
     {
        id:48 ,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770700774/weightloss7_yi6pvg.jpg",
        caption: "Sweat today, stronger tomorrow",
        category: "Weight Loss"
    },
    {
        id: 19,
        type: "instagram",
        url: "https://www.instagram.com/reel/CrkesrerwfJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770388261/Harmony_Studio/nn7sdwtndmipzasltay1.jpg",
        caption: "Feel the rhythm",
        category: "Zumba"
    },
    {
        id: 43,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770527807/Harmony_Studio/t3toqi0khk6qgfdims9v.jpg",
        caption: "Joy through movement",
        category: "Dance"
    },
    {
        id: 44,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770528200/content_blog_inner_34FBEBC4_hmz8tl.png",
        caption: "Smiles, sweat, and strong hearts",
        category: "Aerobics"
    },
    {
        id: 20,
        type: "instagram",
        url: "https://www.instagram.com/reel/CoogocpDaDI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770389813/Harmony_Studio/li8wmbymkl6ax1h0blal.jpg",
        caption: "Fun in motion",
        category: "Dances"
    },
    //one image
      {
        id:49,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770700774/weightloss6_vti9hg.jpg",
        caption: "Burn calories, boost confidence",
        category: "Weight Loss Programme"
    },
    {
        id: 21,
        type: "instagram",
        url: "https://www.instagram.com/reel/C4zgqieNAfn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770390099/Harmony_Studio/ws7o8yj7cvya7ktc7uxr.jpg",
        caption: "Together we celebrate",
        category: "Celebration"
    },
    {
        id: 22,
        type: "instagram",
        url: "https://www.instagram.com/reel/C8EFW9pRFKw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770390710/Harmony_Studio/bcfkdbexc14eordz53xk.jpg",
        caption: "Dance floor magic",
        category: "Dance"
    },
    {
        id: 36,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770525991/Harmony_Studio/xwb9wofbqmttnnyo7wr8.jpg",
        caption: "Energy in every move",
        category: "Dance"
    },

    {
        id: 39,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770526559/Harmony_Studio/adgyomg0bz8bcrzrv5wa.jpg",
        caption: "Movement with passion",
        category: "Dance"
    },
    {
        id: 40,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770526892/Harmony_Studio/ruw6owp785cmsjoisrg5.jpg",
        caption: "Finding calm within",
        category: "Yoga"
    },
    {
        id: 41,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770527293/Harmony_Studio/i6rfjua1y2glryph9wzp.jpg",
        caption: "Balance, breath, and flow",
        category: "Yoga"
    },
    {
        id: 42,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770527502/Harmony_Studio/rncnokdauz0s9i49ht6g.jpg",
        caption: "Dancing with confidence",
        category: "Dance"
    },

    {
        id: 45,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770528178/5c497009685b4a3eab05213d_1548316681268_w3pyfd.jpg",
        caption: "Cardio that feels like celebration",
        category: "Aerobics"
    },
    {
        id: 46,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770528125/2d848b6cdb88902a77b75e8412c1ae9d_appc7i.jpg",
        caption: "Move happy, live healthy",
        category: "Aerobics"
    },
    {
        id: 23,
        type: "instagram",
        url: "https://www.instagram.com/reel/DEb-bbGNqlk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770390861/Harmony_Studio/fpnmnkd5j6kkm7xuq9gh.jpg",
        caption: "Calm focused flow",
        category: "Yoga"
    },
    {
        id: 24,
        type: "instagram",
        url: "https://www.instagram.com/reel/DGkiU61yoCB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770391010/Harmony_Studio/u0g6nka199e07gi7gjpx.jpg",
        caption: "Expression through dance",
        category: "Dance"
    },
    //Two image
      {
        id:50,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770700774/weightloss2_cs0shv.jpg",
        caption: "Every move counts",
        category: "Weight Loss Programme"
    },
      {
        id:51,
        type: "image",
       src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770700774/weightloss5_kluo1l.jpg",
        caption: "Where energy meets results",
        category: "Weight Loss Programme"
    },
    {
        id: 25,
        type: "instagram",
        url: "https://www.instagram.com/reel/DHDTr0-NeAU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770392353/Harmony_Studio/i6ts6tjdfrx1jygemvkd.jpg",
        caption: "Move with confidence",
        category: "Dance"
    },
    {
        id: 26,
        type: "instagram",
        url: "https://www.instagram.com/reel/DL92FwgobQO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770392419/Harmony_Studio/maavjjmjt18uz2ck6cxj.jpg",
        caption: "Rhythm meets passion",
        category: "Dance"
    },
    //one image
     {
        id:52,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770700775/weightloss1_xb11zl.jpg",
        caption: "Turn effort into transformation",
        category: "Weight Loss Programme"
    },
    {
        id: 27,
        type: "instagram",
        url: "https://www.instagram.com/reel/DO5MvQMiK2B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770392613/Harmony_Studio/ipgne6qiszkjoxljwmib.jpg",
        caption: "Graceful dance moments",
        category: "Dance"
    },
    {
        id: 28,
        type: "instagram",
        url: "https://www.instagram.com/reel/DPTMqPhjOqm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770392708/Harmony_Studio/urwexfocevjvw3oilb4h.jpg",
        caption: "Feel every beat",
        category: "Dance"
    },
    //two image
         {
        id:53,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770700775/weightloss3_xfpk6g.jpg",
        caption: "High energy moves",
        category: "Weight Loss Programme"
    },
         {
        id:54,
        type: "image",
        src: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770700774/weightloss4_zq6mso.jpg",
        caption: "High intensity, higher motivation",
        category: "Weight Loss Programme"
    },
    {
        id: 29,
        type: "instagram",
        url: "https://www.instagram.com/reel/Co7nNudjINk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "https://res.cloudinary.com/dtgbaw1ul/image/upload/v1770392812/Harmony_Studio/hzlrcihvmjj4c0hnir8l.jpg",
        caption: "Stretch breathe relax",
        category: "Yoga"
    },
    // VIDEOS OF GALLERY
    //   {
    //     id: 19,
    //     type: "video",
    //     category: "Dance",
    //     src: "https://res.cloudinary.com/dg4ie90zk/video/upload/outdoor_dance_2_akcqas.mp4",
    //     thumbnailTime: 2.5,
    //     caption: "Outdoor Dance Session",
    //   },
];