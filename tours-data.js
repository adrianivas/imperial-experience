// Comprehensive tour data for Imperial Experience
const TOURS_DATA = [
  { 
    id: 'vatican', 
    name: 'Vatican & Sistine Chapel Tour',
    type: 'vatican', 
    location: 'Rome',
    price: 99, 
    duration: '3 hours',
    durationCategory: 'half',
    description: "Explore the Vatican Museums, Sistine Chapel, and St. Peter's Basilica with an expert guide.",
    longDescription: "Immerse yourself in the artistic and spiritual heart of Rome with this comprehensive Vatican tour. Your expert guide will lead you through the vast Vatican Museums, home to one of the world's greatest art collections. Marvel at ancient Roman sculptures, Renaissance masterpieces, and the breathtaking Raphael Rooms before reaching the crown jewel: Michelangelo's Sistine Chapel ceiling. End your tour at the magnificent St. Peter's Basilica, the largest church in the world.",
    image: 'img/sistine.jpg',
    images: [
      'img/sistine.jpg', 
      'https://images.unsplash.com/photo-1583241800698-eeaa36815f63?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1585159812596-fac104f2e069?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 20,
    difficulty: 'Easy',
    meetingPoint: 'Vatican Museums Main Entrance, Viale Vaticano',
    meetingTime: '9:00 AM',
    highlights: [
      'Skip-the-line access to Vatican Museums',
      'Expert licensed guide with extensive art history knowledge',
      'Sistine Chapel with Michelangelo\'s masterpieces',
      'Raphael Rooms and Gallery of Maps',
      'St. Peter\'s Basilica (subject to religious ceremonies)'
    ],
    included: [
      'Skip-the-line entrance tickets',
      'Professional licensed tour guide',
      'Headsets for groups over 10 people',
      'All taxes and fees'
    ],
    notIncluded: [
      'Hotel pickup and drop-off',
      'Food and drinks',
      'Gratuities (optional)',
      'St. Peter\'s Basilica dome climb (€8 extra)'
    ],
    itinerary: [
      { time: '9:00 AM', activity: 'Meet your guide at Vatican Museums entrance' },
      { time: '9:15 AM', activity: 'Enter Vatican Museums with skip-the-line access' },
      { time: '9:30 AM', activity: 'Explore Gallery of Maps and Raphael Rooms' },
      { time: '10:30 AM', activity: 'Visit the breathtaking Sistine Chapel' },
      { time: '11:15 AM', activity: 'Tour St. Peter\'s Basilica' },
      { time: '12:00 PM', activity: 'Tour concludes at St. Peter\'s Square' }
    ],
    reviews: [
      { name: 'Sarah Johnson', rating: 5, date: '2024-11', comment: 'Absolutely incredible tour! Our guide Maria was so knowledgeable and the skip-the-line access saved us hours. The Sistine Chapel was breathtaking!' },
      { name: 'David Chen', rating: 5, date: '2024-10', comment: 'Best tour we took in Rome. Guide was passionate and made the art come alive. Highly recommend!' },
      { name: 'Emma Wilson', rating: 5, date: '2024-09', comment: 'Worth every penny! The Vatican is overwhelming but our guide made it manageable and fascinating.' }
    ],
    averageRating: 5.0,
    totalReviews: 847,
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour starts. Cancellations within 24 hours are non-refundable.',
    availability: 'Daily except Sundays and religious holidays'
  },
  { 
    id: 'colosseum', 
    name: 'Colosseum & Ancient Rome',
    type: 'colosseum', 
    location: 'Rome',
    price: 85, 
    duration: '3 hours',
    durationCategory: 'half',
    description: 'Walk through the Colosseum, Roman Forum, and Palatine Hill with skip-the-line access.',
    longDescription: 'Step back in time to the glory days of the Roman Empire. This immersive tour takes you through the iconic Colosseum, where gladiators once fought for glory, the Roman Forum where senators debated the fate of the empire, and Palatine Hill where emperors built their lavish palaces. Your expert guide brings ancient Rome to life with vivid storytelling and historical insights.',
    image: 'img/colosseum-day.jpg',
    images: [
      'img/colosseum-day.jpg', 
      'img/colosseum.jpg',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 25,
    difficulty: 'Moderate',
    meetingPoint: 'Colosseum Metro Station Exit, in front of the green newsstand',
    meetingTime: '9:30 AM or 2:00 PM',
    highlights: [
      'Skip-the-line entrance to the Colosseum',
      'Walk on the arena floor (subject to availability)',
      'Explore the Roman Forum and Palatine Hill',
      'Learn about gladiators, emperors, and daily Roman life',
      'Professional archaeologist guide'
    ],
    included: [
      'Skip-the-line tickets to Colosseum, Forum, and Palatine Hill',
      'Licensed archaeologist tour guide',
      'Audio headsets for clear communication',
      'All entrance fees and taxes'
    ],
    notIncluded: [
      'Hotel pickup and drop-off',
      'Food and beverages',
      'Colosseum underground access (available as upgrade)',
      'Gratuities'
    ],
    itinerary: [
      { time: '9:30 AM', activity: 'Meet at Colosseum Metro Station' },
      { time: '9:45 AM', activity: 'Enter Colosseum with priority access' },
      { time: '10:00 AM', activity: 'Explore all levels of the Colosseum with guide commentary' },
      { time: '11:00 AM', activity: 'Walk through the Roman Forum' },
      { time: '11:45 AM', activity: 'Climb Palatine Hill and visit imperial palaces' },
      { time: '12:30 PM', activity: 'Tour ends at Palatine Hill with panoramic views' }
    ],
    reviews: [
      { name: 'Michael Brown', rating: 5, date: '2024-11', comment: 'Our guide Giovanni was fantastic! So much history and the Colosseum was even more impressive than expected.' },
      { name: 'Lisa Anderson', rating: 5, date: '2024-10', comment: 'Skip-the-line was worth it alone. Guide was engaging and knowledgeable about ancient Rome.' },
      { name: 'James Taylor', rating: 4, date: '2024-09', comment: 'Great tour, lots of walking so wear comfortable shoes. Guide was excellent.' }
    ],
    averageRating: 4.8,
    totalReviews: 1024,
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour. No refunds for cancellations within 24 hours or no-shows.',
    availability: 'Daily'
  },
  { 
    id: 'city', 
    name: 'Rome City Highlights',
    type: 'city', 
    location: 'Rome',
    location: 'Rome',
    location: 'Rome',
    price: 75, 
    duration: '4 hours',
    durationCategory: 'half',
    description: 'Discover Trevi Fountain, Spanish Steps, Piazza Navona, and more on a walking tour.',
    longDescription: 'Experience the best of Rome\'s historic center on this comprehensive walking tour. Wander through charming piazzas, toss a coin in the Trevi Fountain, climb the Spanish Steps, and marvel at the Pantheon\'s ancient engineering. Your local guide shares insider stories and hidden gems along the way, making this the perfect introduction to the Eternal City.',
    image: 'img/rome.jpg',
    images: [
      'img/rome.jpg', 
      'img/rome-night.jpg',
      'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 20,
    difficulty: 'Easy',
    meetingPoint: 'Piazza di Spagna (Spanish Steps), near the fountain',
    meetingTime: '10:00 AM or 3:00 PM',
    highlights: [
      'Trevi Fountain - throw a coin for good luck',
      'Spanish Steps and Piazza di Spagna',
      'Pantheon - ancient Roman temple',
      'Piazza Navona with Bernini fountains',
      'Hidden gems and local secrets'
    ],
    included: [
      'Professional English-speaking guide',
      'Guided walking tour',
      'Audio headsets',
      'Gelato tasting'
    ],
    notIncluded: [
      'Food and drinks (except gelato)',
      'Transportation',
      'Entrance fees to monuments',
      'Gratuities'
    ],
    itinerary: [
      { time: '10:00 AM', activity: 'Meet at Spanish Steps' },
      { time: '10:15 AM', activity: 'Walk to Trevi Fountain' },
      { time: '10:45 AM', activity: 'Visit the Pantheon' },
      { time: '11:30 AM', activity: 'Explore Piazza Navona' },
      { time: '12:15 PM', activity: 'Discover hidden streets and local markets' },
      { time: '1:30 PM', activity: 'Gelato tasting and tour conclusion' }
    ],
    reviews: [
      { name: 'Sophie Martin', rating: 5, date: '2024-11', comment: 'Perfect introduction to Rome! Our guide Francesca was charming and showed us places we never would have found on our own.' },
      { name: 'Robert King', rating: 5, date: '2024-10', comment: 'Excellent walking tour. Not too rushed, great pace, and the gelato stop was a nice touch!' },
      { name: 'Anna Schmidt', rating: 5, date: '2024-09', comment: 'Highly recommend for first-time visitors. Saw all the must-see spots in Rome.' }
    ],
    averageRating: 4.9,
    totalReviews: 682,
    cancellationPolicy: 'Free cancellation up to 24 hours in advance. 50% refund for cancellations within 24 hours.',
    availability: 'Daily'
  },
  { 
    id: 'tuscany', 
    name: 'Tuscany Day Trip',
    type: 'daytrip', 
    location: 'Florence',
    location: 'Tuscany',
    price: 150, 
    duration: 'Full day',
    durationCategory: 'full',
    description: 'Enjoy wine tastings and rolling hills on a premium day trip to Tuscany.',
    longDescription: 'Escape the city for a day in the stunning Tuscan countryside. Travel through rolling hills dotted with cypress trees and medieval hilltop towns. Visit two renowned wineries for tastings of Chianti Classico and Super Tuscan wines, paired with local cheeses and olive oils. Explore the charming streets of San Gimignano or Siena, and enjoy a traditional Tuscan lunch at a family-run trattoria.',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=60', 
      'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1533671767499-5dc94ed92758?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 18,
    difficulty: 'Easy',
    meetingPoint: 'Termini Station, Platform 24',
    meetingTime: '7:30 AM',
    highlights: [
      'Scenic drive through the Tuscan countryside',
      'Visit 2 traditional wineries with tastings',
      'Explore medieval San Gimignano or Siena',
      'Traditional Tuscan lunch included',
      'Small group experience with luxury transportation'
    ],
    included: [
      'Round-trip luxury bus transportation from Rome',
      'English-speaking tour escort',
      'Wine tastings at 2 wineries',
      'Traditional Tuscan 3-course lunch with wine',
      'Guided walking tours of towns',
      'All entrance fees'
    ],
    notIncluded: [
      'Hotel pickup (meet at Termini Station)',
      'Additional food and drinks',
      'Personal expenses',
      'Gratuities'
    ],
    itinerary: [
      { time: '7:30 AM', activity: 'Depart from Rome Termini Station' },
      { time: '9:30 AM', activity: 'Arrive at first winery for tour and tasting' },
      { time: '11:00 AM', activity: 'Explore San Gimignano or Siena' },
      { time: '1:00 PM', activity: 'Traditional Tuscan lunch at local trattoria' },
      { time: '3:00 PM', activity: 'Visit second winery for tasting' },
      { time: '4:30 PM', activity: 'Depart for Rome with photo stops' },
      { time: '7:00 PM', activity: 'Return to Rome Termini Station' }
    ],
    reviews: [
      { name: 'Marco Bianchi', rating: 5, date: '2024-10', comment: 'Perfect day trip! The wine tasting was amazing and the scenery was breathtaking. Great organization from start to finish.' },
      { name: 'Jennifer Lee', rating: 5, date: '2024-09', comment: 'Absolutely loved this tour. The wineries were beautiful and the lunch was delicious. Our guide was fantastic!' },
      { name: 'Thomas Mueller', rating: 5, date: '2024-08', comment: 'Best day of our Italy trip! Tuscany is magical and the wine tastings were generous.' }
    ],
    averageRating: 4.9,
    totalReviews: 456,
    cancellationPolicy: 'Free cancellation up to 48 hours before departure. 50% refund for cancellations within 48 hours.',
    availability: 'Tuesday, Thursday, Saturday, Sunday'
  },
  { 
    id: 'foodtour', 
    name: 'Rome Food & Wine Tour',
    type: 'food', 
    location: 'Rome',
    location: 'Rome',
    price: 95, 
    duration: '4 hours',
    durationCategory: 'half',
    description: 'Taste authentic Roman cuisine and wines in historic neighborhoods with a local guide.',
    longDescription: 'Eat like a Roman on this delicious food tour through the city\'s most authentic neighborhoods. Sample traditional specialties like cacio e pepe, supplì, porchetta, and artisan gelato. Sip local wines from the Lazio region and learn about Roman food culture from your passionate local guide. Visit family-run shops, markets, and trattorias that have served locals for generations.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=60', 
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 12,
    difficulty: 'Easy',
    meetingPoint: 'Campo de\' Fiori market square, near the statue',
    meetingTime: '5:00 PM',
    highlights: [
      'Taste 10+ authentic Roman specialties',
      'Visit 5 different local food establishments',
      'Sample regional wines and craft beer',
      'Explore hidden food markets',
      'Learn about Roman food culture and traditions'
    ],
    included: [
      'Local foodie guide',
      'All food and wine tastings',
      'Walking tour of food neighborhoods',
      'Recipes and food recommendations',
      'Small group for personalized experience'
    ],
    notIncluded: [
      'Hotel pickup and drop-off',
      'Additional food and drinks',
      'Transportation',
      'Gratuities'
    ],
    itinerary: [
      { time: '5:00 PM', activity: 'Meet at Campo de\' Fiori' },
      { time: '5:15 PM', activity: 'Visit historic bakery for pizza al taglio and supplì' },
      { time: '5:45 PM', activity: 'Cheese and salumi tasting with wine' },
      { time: '6:30 PM', activity: 'Traditional trattoria for pasta tasting' },
      { time: '7:15 PM', activity: 'Porchetta and street food specialties' },
      { time: '8:00 PM', activity: 'Artisan gelato and espresso to conclude' }
    ],
    reviews: [
      { name: 'Amy Rodriguez', rating: 5, date: '2024-11', comment: 'Amazing food tour! Tried so many delicious things and our guide Paolo was hilarious and knowledgeable.' },
      { name: 'Paul Stevens', rating: 5, date: '2024-10', comment: 'Best way to experience Roman food culture. Every stop was better than the last!' },
      { name: 'Maria Garcia', rating: 5, date: '2024-09', comment: 'So much food and all of it was incredible. Perfect for food lovers!' }
    ],
    averageRating: 4.9,
    totalReviews: 523,
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour. No refunds within 24 hours.',
    availability: 'Daily except Monday'
  },
  { 
    id: 'pompeii', 
    name: 'Pompeii & Amalfi Coast',
    type: 'daytrip', 
    location: 'Naples & Amalfi',
    price: 180, 
    duration: 'Full day',
    durationCategory: 'full',
    description: 'Discover ancient Pompeii and the stunning Amalfi Coast on this memorable day trip.',
    longDescription: 'Experience two of Italy\'s most iconic destinations in one unforgettable day. Explore the remarkably preserved ruins of Pompeii with an expert archaeologist guide, walking the ancient streets frozen in time by the eruption of Mount Vesuvius in 79 AD. Then journey along the breathtaking Amalfi Coast, stopping in the picturesque town of Positano for free time to explore, shop, and enjoy lunch with sea views.',
    image: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=800&q=60', 
      'https://images.unsplash.com/photo-1557298374-7a9aee8f8e8d?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1601581987809-a874a81309c9?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 20,
    difficulty: 'Moderate',
    meetingPoint: 'Piazza del Popolo, near the obelisk',
    meetingTime: '7:00 AM',
    highlights: [
      'Skip-the-line access to Pompeii ruins',
      'Expert archaeologist guide in Pompeii',
      'Scenic drive along the Amalfi Coast',
      'Free time in Positano',
      'Small group with luxury coach transportation'
    ],
    included: [
      'Round-trip luxury coach from Rome',
      'Skip-the-line Pompeii entrance',
      '2-hour guided tour of Pompeii ruins',
      'English-speaking tour escort',
      'Amalfi Coast scenic drive',
      'All taxes and fees'
    ],
    notIncluded: [
      'Lunch and drinks',
      'Hotel pickup',
      'Gratuities',
      'Personal expenses'
    ],
    itinerary: [
      { time: '7:00 AM', activity: 'Depart from Rome' },
      { time: '9:30 AM', activity: 'Arrive at Pompeii Archaeological Site' },
      { time: '9:45 AM', activity: 'Guided tour of Pompeii ruins (2 hours)' },
      { time: '12:00 PM', activity: 'Depart for Amalfi Coast' },
      { time: '1:30 PM', activity: 'Arrive in Positano - free time for lunch and exploration' },
      { time: '4:00 PM', activity: 'Depart for Rome' },
      { time: '7:00 PM', activity: 'Return to Rome' }
    ],
    reviews: [
      { name: 'Emma Lee', rating: 5, date: '2024-10', comment: 'Incredible day trip! Pompeii was fascinating and Positano was like a postcard. Long day but worth every moment.' },
      { name: 'Carlos Martinez', rating: 5, date: '2024-09', comment: 'Both destinations were amazing. Guide at Pompeii was excellent and very informative.' },
      { name: 'Helen Wright', rating: 4, date: '2024-08', comment: 'Great tour, just wish we had more time in Positano. Still highly recommend!' }
    ],
    averageRating: 4.7,
    totalReviews: 389,
    cancellationPolicy: 'Free cancellation up to 48 hours before departure. 50% refund within 48 hours.',
    availability: 'Monday, Wednesday, Friday, Sunday'
  },
  { 
    id: 'underground', 
    name: 'Underground Rome Tour',
    type: 'city', 
    location: 'Rome',
    location: 'Rome',
    price: 70, 
    duration: '3 hours',
    durationCategory: 'half',
    description: "Explore the hidden catacombs and underground ruins beneath Rome's streets.",
    longDescription: 'Descend beneath Rome\'s streets to discover a hidden world of ancient ruins, early Christian catacombs, and underground passages. Visit the Basilica of San Clemente, which reveals three layers of history from different eras. Explore atmospheric catacombs where early Christians buried their dead and held secret ceremonies. Your expert guide illuminates this mysterious underground world with fascinating stories and historical insights.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60',
    images: ['https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60'],
    maxGroupSize: 15,
    difficulty: 'Moderate',
    meetingPoint: 'Basilica of San Clemente main entrance',
    meetingTime: '10:00 AM or 2:30 PM',
    highlights: [
      'Three levels of San Clemente Basilica',
      'Ancient Roman catacombs',
      'Early Christian underground churches',
      'Hidden archaeological sites',
      'Expert guide with special access'
    ],
    included: [
      'Professional archaeologist guide',
      'Entrance to all underground sites',
      'Skip-the-line access',
      'Flashlights for catacombs',
      'All fees and taxes'
    ],
    notIncluded: [
      'Hotel pickup',
      'Food and drinks',
      'Transportation',
      'Gratuities'
    ],
    itinerary: [
      { time: '10:00 AM', activity: 'Meet at San Clemente Basilica' },
      { time: '10:15 AM', activity: 'Explore three historical layers of San Clemente' },
      { time: '11:15 AM', activity: 'Walk to nearby catacombs' },
      { time: '11:30 AM', activity: 'Guided tour of ancient Christian catacombs' },
      { time: '12:15 PM', activity: 'Visit underground Roman ruins' },
      { time: '1:00 PM', activity: 'Tour concludes' }
    ],
    reviews: [
      { name: 'Rebecca Turner', rating: 5, date: '2024-10', comment: 'Fascinating tour of Rome\'s hidden history. Guide was knowledgeable and passionate about archaeology.' },
      { name: 'Daniel Kim', rating: 5, date: '2024-09', comment: 'Unique experience you can\'t get anywhere else. The underground layers are incredible!' },
      { name: 'Laura Rossi', rating: 4, date: '2024-08', comment: 'Very interesting tour. Some climbing stairs required but worth it.' }
    ],
    averageRating: 4.7,
    totalReviews: 312,
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour starts.',
    availability: 'Daily except Sunday morning'
  },
  { 
    id: 'borghese', 
    name: 'Borghese Gallery Tour',
    type: 'city', 
    location: 'Rome',
    price: 79, 
    duration: '2.5 hours',
    durationCategory: 'half',
    description: 'Marvel at masterpieces by Bernini, Caravaggio, and Raphael in the stunning Borghese Gallery.',
    longDescription: 'Discover one of Rome\'s greatest art treasures at the Borghese Gallery. This intimate museum houses an extraordinary collection including Bernini\'s stunning sculptures, Caravaggio\'s dramatic paintings, and works by Raphael and Titian. Set in a beautiful villa surrounded by lush gardens, the gallery offers a more personal art experience than larger museums. Expert commentary brings each masterpiece to life.',
    image: 'https://images.unsplash.com/photo-1580974852861-c381510bc98a?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1580974852861-c381510bc98a?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1578762560042-46ad127c95ea?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 12,
    difficulty: 'Easy',
    meetingPoint: 'Borghese Gallery main entrance, Villa Borghese Gardens',
    meetingTime: '10:00 AM or 3:00 PM',
    highlights: [
      'Bernini sculptures including Apollo and Daphne',
      'Caravaggio masterpieces',
      'Works by Raphael, Titian, and Rubens',
      'Beautiful Villa Borghese setting',
      'Small group for intimate experience'
    ],
    included: [
      'Reserved entrance to Borghese Gallery',
      'Professional art historian guide',
      'Audio headsets',
      'All entrance fees and reservations'
    ],
    notIncluded: [
      'Hotel pickup',
      'Food and drinks',
      'Transportation',
      'Gratuities'
    ],
    itinerary: [
      { time: '10:00 AM', activity: 'Meet at Borghese Gallery entrance' },
      { time: '10:15 AM', activity: 'Ground floor - Bernini sculptures and ancient art' },
      { time: '11:00 AM', activity: 'First floor - Painting gallery with Caravaggio and Raphael' },
      { time: '12:00 PM', activity: 'Gardens overview (optional)' },
      { time: '12:30 PM', activity: 'Tour concludes' }
    ],
    reviews: [
      { name: 'Catherine Moore', rating: 5, date: '2024-11', comment: 'Intimate and beautiful museum. The Bernini sculptures are breathtaking and our guide was exceptional!' },
      { name: 'Andrew Foster', rating: 5, date: '2024-10', comment: 'Smaller than Vatican museums but just as impressive. Highly recommend!' },
      { name: 'Olivia Bennett', rating: 5, date: '2024-09', comment: 'Perfect for art lovers. Less crowded and more enjoyable than larger museums.' }
    ],
    averageRating: 4.9,
    totalReviews: 278,
    cancellationPolicy: 'Free cancellation up to 48 hours before the tour. No refunds within 48 hours due to advance reservation requirements.',
    availability: 'Tuesday to Sunday (closed Monday)'
  },
  { 
    id: 'night-rome', 
    name: 'Rome by Night Walking Tour',
    type: 'city', 
    price: 65, 
    duration: '3 hours',
    durationCategory: 'half',
    description: 'Experience the magic of Rome after dark with illuminated monuments and charming piazzas.',
    longDescription: 'See Rome in a completely different light on this enchanting evening walking tour. As the sun sets and the crowds disperse, Rome\'s monuments are illuminated creating a magical atmosphere. Stroll through quiet streets and lively piazzas, enjoy aperitivo at a local wine bar, and discover why Romans say their city is most beautiful at night. The perfect way to experience la dolce vita.',
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=60', 
      'img/rome-night.jpg',
      'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 15,
    difficulty: 'Easy',
    meetingPoint: 'Piazza della Repubblica, near the fountain',
    meetingTime: '7:00 PM (summer) / 6:00 PM (winter)',
    highlights: [
      'Trevi Fountain illuminated at night',
      'Pantheon by night',
      'Piazza Navona evening atmosphere',
      'Aperitivo stop at local wine bar',
      'Romantic stroll through Trastevere'
    ],
    included: [
      'Professional local guide',
      'Walking tour of illuminated monuments',
      'Aperitivo with wine or prosecco',
      'Audio headsets',
      'Evening snacks'
    ],
    notIncluded: [
      'Hotel pickup and drop-off',
      'Dinner',
      'Additional drinks',
      'Gratuities'
    ],
    itinerary: [
      { time: '7:00 PM', activity: 'Meet at Piazza della Repubblica' },
      { time: '7:15 PM', activity: 'Walk to illuminated Trevi Fountain' },
      { time: '7:45 PM', activity: 'Visit Pantheon at night' },
      { time: '8:15 PM', activity: 'Aperitivo stop in Piazza Navona' },
      { time: '9:00 PM', activity: 'Stroll through Trastevere neighborhood' },
      { time: '10:00 PM', activity: 'Tour concludes in Trastevere' }
    ],
    reviews: [
      { name: 'Michelle Carter', rating: 5, date: '2024-11', comment: 'Romantic and beautiful! Rome at night is magical. The aperitivo stop was a lovely touch.' },
      { name: 'David Peterson', rating: 5, date: '2024-10', comment: 'Different perspective of Rome. Less crowded and the lighting makes everything stunning.' },
      { name: 'Julia Wagner', rating: 5, date: '2024-09', comment: 'Perfect evening activity. Guide showed us spots we hadn\'t discovered during the day.' }
    ],
    averageRating: 4.8,
    totalReviews: 445,
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour.',
    availability: 'Daily'
  },
  { 
    id: 'florence', 
    name: 'Florence Day Trip from Rome',
    type: 'daytrip', 
    price: 165, 
    duration: 'Full day',
    durationCategory: 'full',
    description: 'Visit the birthplace of the Renaissance with stops at the Duomo, Uffizi, and Ponte Vecchio.',
    longDescription: 'Discover Florence, the cradle of the Renaissance, on this comprehensive day trip from Rome. Travel by high-speed train through the Tuscan countryside and spend the day exploring Florence\'s artistic treasures. Admire the iconic Duomo, cross the medieval Ponte Vecchio, and enjoy a guided walking tour of the historic center. Optional visit to the Uffizi Gallery home to Botticelli\'s Birth of Venus and other Renaissance masterpieces.',
    image: 'https://images.unsplash.com/photo-1541630259196-9e2c184976e5?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1541630259196-9e2c184976e5?auto=format&fit=crop&w=800&q=60', 
      'https://images.unsplash.com/photo-1543429258-f9e515e5ca43?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 20,
    difficulty: 'Moderate',
    meetingPoint: 'Rome Termini Station, near Track 24',
    meetingTime: '7:00 AM',
    highlights: [
      'High-speed train from Rome to Florence',
      'Duomo and Baptistery exterior',
      'Ponte Vecchio and Palazzo Vecchio',
      'Guided walking tour of historic center',
      'Optional Uffizi Gallery visit',
      'Free time for shopping and lunch'
    ],
    included: [
      'Round-trip high-speed train tickets',
      'English-speaking tour escort',
      'Guided walking tour of Florence',
      'Headsets for clear communication',
      'City map and recommendations'
    ],
    notIncluded: [
      'Uffizi Gallery tickets (can be added)',
      'Duomo climb (can be added)',
      'Lunch and drinks',
      'Hotel pickup',
      'Gratuities'
    ],
    itinerary: [
      { time: '7:00 AM', activity: 'Meet at Rome Termini Station' },
      { time: '7:30 AM', activity: 'Depart Rome on high-speed train' },
      { time: '9:00 AM', activity: 'Arrive in Florence' },
      { time: '9:30 AM', activity: 'Guided walking tour of historic center' },
      { time: '11:30 AM', activity: 'Free time for lunch and exploration' },
      { time: '2:00 PM', activity: 'Optional Uffizi Gallery visit' },
      { time: '4:30 PM', activity: 'Meet for return journey' },
      { time: '5:00 PM', activity: 'Depart Florence' },
      { time: '6:30 PM', activity: 'Arrive back in Rome' }
    ],
    reviews: [
      { name: 'Nancy Phillips', rating: 5, date: '2024-10', comment: 'Florence is beautiful! The train was fast and comfortable. Well-organized tour with plenty of free time.' },
      { name: 'Brian Thompson', rating: 5, date: '2024-09', comment: 'Loved visiting Florence. Guide was excellent and the walking tour covered all the highlights.' },
      { name: 'Susan Clark', rating: 4, date: '2024-08', comment: 'Great day trip. Wish we had more time but you get to see the essentials.' }
    ],
    averageRating: 4.6,
    totalReviews: 334,
    cancellationPolicy: 'Free cancellation up to 72 hours before departure. 50% refund within 72 hours.',
    availability: 'Daily'
  },
  { 
    id: 'cooking-class', 
    name: 'Italian Cooking Class',
    type: 'food', 
    location: 'Naples',
    price: 110, 
    duration: '4 hours',
    durationCategory: 'half',
    description: 'Learn to cook authentic Italian dishes with a local chef and enjoy your creations.',
    longDescription: 'Roll up your sleeves and learn to cook like an Italian nonna in this hands-on cooking class. Under the guidance of a professional chef, you\'ll prepare a complete Italian meal from scratch including homemade pasta, traditional sauce, and tiramisu. Learn authentic techniques and family recipes in a warm, welcoming environment. After cooking, sit down to enjoy your creations with wine and new friends.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=60', 
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 12,
    difficulty: 'Easy',
    meetingPoint: 'Cooking school near Campo de\' Fiori (exact address provided upon booking)',
    meetingTime: '10:00 AM or 5:00 PM',
    highlights: [
      'Hands-on cooking experience',
      'Learn to make fresh pasta from scratch',
      'Traditional Italian recipes and techniques',
      'Prepare appetizer, pasta, and dessert',
      'Enjoy your meal with wine',
      'Recipe booklet to take home'
    ],
    included: [
      'Professional chef instructor',
      'All ingredients and equipment',
      'Apron and cooking utensils',
      'Full meal with wine',
      'Recipe booklet',
      'Small group experience'
    ],
    notIncluded: [
      'Hotel pickup and drop-off',
      'Additional drinks',
      'Transportation',
      'Gratuities'
    ],
    itinerary: [
      { time: '10:00 AM', activity: 'Welcome and introduction to Italian cuisine' },
      { time: '10:30 AM', activity: 'Learn to make fresh pasta dough' },
      { time: '11:30 AM', activity: 'Prepare traditional Italian sauce' },
      { time: '12:00 PM', activity: 'Make tiramisu dessert' },
      { time: '12:30 PM', activity: 'Cook and plate your dishes' },
      { time: '1:00 PM', activity: 'Enjoy your meal with wine and conversation' },
      { time: '2:00 PM', activity: 'Class concludes with recipes to take home' }
    ],
    reviews: [
      { name: 'Linda Harrison', rating: 5, date: '2024-11', comment: 'So much fun! Chef Marco was patient and funny. Best pasta I\'ve ever made!' },
      { name: 'Kevin Mitchell', rating: 5, date: '2024-10', comment: 'Highlight of our trip! Learned so much and the food was delicious. Great group activity.' },
      { name: 'Patricia Young', rating: 5, date: '2024-09', comment: 'Wonderful experience. Can\'t wait to make these recipes at home!' }
    ],
    averageRating: 4.9,
    totalReviews: 567,
    cancellationPolicy: 'Free cancellation up to 48 hours before the class. No refunds within 48 hours due to ingredient preparation.',
    availability: 'Daily'
  },
  { 
    id: 'private-vatican', 
    name: 'Private Vatican VIP Tour',
    type: 'vatican', 
    location: 'Rome',
    price: 199, 
    duration: '3 hours',
    durationCategory: 'half',
    description: 'Exclusive private tour of the Vatican with early access before the crowds arrive.',
    longDescription: 'Experience the Vatican like a VIP on this exclusive private tour with early morning access. Enter the Vatican Museums before they open to the public and enjoy the galleries, Raphael Rooms, and Sistine Chapel in near-solitude. Your private expert guide provides personalized commentary tailored to your interests, and you can ask questions freely without the distraction of large crowds. This is the ultimate Vatican experience.',
    image: 'https://images.unsplash.com/photo-1583241800698-eeaa36815f63?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1583241800698-eeaa36815f63?auto=format&fit=crop&w=800&q=60', 
      'img/sistine.jpg',
      'https://images.unsplash.com/photo-1585159812596-fac104f2e069?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1594223414809-83a17b0ad9a2?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 6,
    difficulty: 'Easy',
    meetingPoint: 'Vatican Museums entrance (private meeting with guide)',
    meetingTime: '7:30 AM',
    highlights: [
      'Private tour - just you and your expert guide',
      'Early entrance before general opening',
      'Sistine Chapel with minimal crowds',
      'Personalized commentary and route',
      'Flexible pace and focus areas',
      'Optional breakfast in Vatican cafeteria'
    ],
    included: [
      'Private expert art historian guide',
      'Early access entrance tickets',
      'Skip-all-lines access',
      'Personalized tour route',
      'Private radio headsets',
      'St. Peter\'s Basilica visit'
    ],
    notIncluded: [
      'Hotel pickup (can be arranged)',
      'Breakfast',
      'Gratuities',
      'Photos inside Sistine Chapel (prohibited)'
    ],
    itinerary: [
      { time: '7:30 AM', activity: 'Private meeting with your guide' },
      { time: '7:45 AM', activity: 'Enter Vatican Museums before public opening' },
      { time: '8:00 AM', activity: 'Explore galleries with personalized commentary' },
      { time: '9:00 AM', activity: 'Sistine Chapel with few other visitors' },
      { time: '9:45 AM', activity: 'St. Peter\'s Basilica private tour' },
      { time: '10:30 AM', activity: 'Tour concludes with recommendations' }
    ],
    reviews: [
      { name: 'Richard Anderson', rating: 5, date: '2024-11', comment: 'Worth every penny! Having the Sistine Chapel nearly to ourselves was incredible. Guide was outstanding!' },
      { name: 'Margaret Wilson', rating: 5, date: '2024-10', comment: 'Once in a lifetime experience. The early access made all the difference. Highly recommend splurging for this!' },
      { name: 'Jonathan Reed', rating: 5, date: '2024-09', comment: 'Best tour we\'ve ever taken anywhere. Private guide was knowledgeable and the empty museums were surreal.' }
    ],
    averageRating: 5.0,
    totalReviews: 189,
    cancellationPolicy: 'Free cancellation up to 48 hours before the tour. 50% refund within 48 hours.',
    availability: 'Monday to Saturday (no Sunday tours)'
  },
  { 
    id: 'vintage-vespa', 
    name: 'Vintage Vespa Rome Tour',
    type: 'city', 
    price: 135, 
    duration: '3 hours',
    durationCategory: 'half',
    description: 'Cruise through Rome on a classic Vespa scooter and see the city like a local.',
    longDescription: 'Experience Rome like a true Roman on a vintage Vespa scooter! Your professional driver navigates through the city\'s streets while you ride as a passenger, taking in iconic sights from a unique perspective. Stop for photos at the Colosseum, Circus Maximus, Aventine Hill keyhole, and more hidden gems. Feel the wind in your hair as you zip through Rome\'s historic center on this thrilling adventure.',
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 8,
    difficulty: 'Easy',
    meetingPoint: 'Office near Circus Maximus (exact address upon booking)',
    meetingTime: '9:00 AM or 2:30 PM',
    highlights: [
      'Ride as passenger on authentic vintage Vespa',
      'Professional licensed driver',
      'Colosseum, Circus Maximus, Aventine Hill',
      'Secret viewpoints and hidden gems',
      'Photo stops throughout',
      'Roman Dolce Vita experience'
    ],
    included: [
      'Vintage Vespa rental',
      'Professional Vespa driver',
      'Helmet and safety equipment',
      'Insurance coverage',
      'Route through historic center',
      'Photo stops'
    ],
    notIncluded: [
      'Hotel pickup (meeting point provided)',
      'Food and drinks',
      'Entrance fees to monuments',
      'Gratuities',
      'Personal accident insurance (optional)'
    ],
    itinerary: [
      { time: '9:00 AM', activity: 'Meet at office, safety briefing' },
      { time: '9:15 AM', activity: 'Start Vespa tour through Rome' },
      { time: '9:30 AM', activity: 'Photo stop at Circus Maximus' },
      { time: '10:00 AM', activity: 'Aventine Hill keyhole view' },
      { time: '10:30 AM', activity: 'Colosseum exterior photos' },
      { time: '11:00 AM', activity: 'Hidden squares and local neighborhoods' },
      { time: '12:00 PM', activity: 'Return to meeting point' }
    ],
    reviews: [
      { name: 'Alexandra Cole', rating: 5, date: '2024-10', comment: 'So fun! Felt like a movie star riding through Rome on a Vespa. Driver was skilled and knowledgeable.' },
      { name: 'Matthew Barnes', rating: 5, date: '2024-09', comment: 'Unique way to see Rome! Much faster than walking and way more fun than a bus tour.' },
      { name: 'Sophie Laurent', rating: 5, date: '2024-08', comment: 'Absolutely loved this experience! The vintage Vespa was beautiful and we saw parts of Rome we would have missed.' }
    ],
    averageRating: 4.8,
    totalReviews: 256,
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour. Weather-dependent (will reschedule if unsafe conditions).',
    availability: 'Daily (weather permitting)'
  },
  { 
    id: 'catacombs', 
    name: 'Catacombs & Appian Way',
    type: 'city', 
    price: 68, 
    duration: '3.5 hours',
    durationCategory: 'half',
    description: 'Journey through ancient Christian burial sites along the historic Appian Way.',
    longDescription: 'Escape the crowds and discover Rome\'s ancient Christian history along the legendary Appian Way. Visit the atmospheric catacombs where early Christians buried their dead and held secret ceremonies during times of persecution. Walk along sections of the original Roman road, still paved with ancient stones. Your guide brings this fascinating period of history to life with stories of saints, martyrs, and early Christian communities.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 18,
    difficulty: 'Moderate',
    meetingPoint: 'Circus Maximus Metro Station exit',
    meetingTime: '10:00 AM or 2:00 PM',
    highlights: [
      'Visit ancient Christian catacombs',
      'Walk along the historic Appian Way',
      'Tomb of Cecilia Metella',
      'Early Christian history and symbolism',
      'Escape tourist crowds',
      'Small group experience'
    ],
    included: [
      'Transportation along Appian Way',
      'Professional archaeologist guide',
      'Catacomb entrance and guided tour',
      'Skip-the-line access',
      'All entrance fees'
    ],
    notIncluded: [
      'Hotel pickup and drop-off',
      'Lunch and drinks',
      'Gratuities',
      'Additional site visits'
    ],
    itinerary: [
      { time: '10:00 AM', activity: 'Meet at Circus Maximus Metro' },
      { time: '10:15 AM', activity: 'Transfer to Appian Way' },
      { time: '10:30 AM', activity: 'Guided tour of catacombs' },
      { time: '11:30 AM', activity: 'Walk along ancient Appian Way' },
      { time: '12:00 PM', activity: 'Visit Tomb of Cecilia Metella' },
      { time: '12:45 PM', activity: 'Explore Roman ruins along the road' },
      { time: '1:30 PM', activity: 'Return to Rome, tour concludes' }
    ],
    reviews: [
      { name: 'Christopher Hall', rating: 5, date: '2024-10', comment: 'Fascinating history! The catacombs were eerie and beautiful. Great way to escape the crowds.' },
      { name: 'Rachel Adams', rating: 4, date: '2024-09', comment: 'Very interesting tour of lesser-known Rome. Guide was knowledgeable about early Christianity.' },
      { name: 'George Taylor', rating: 5, date: '2024-08', comment: 'Loved walking on the ancient road. Catacombs were incredible and guide made history come alive.' }
    ],
    averageRating: 4.6,
    totalReviews: 298,
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour starts.',
    availability: 'Daily except Tuesday'
  },
  { 
    id: 'naples-pizza', 
    name: 'Naples Pizza Making Tour',
    type: 'food', 
    location: 'Rome',
    price: 125, 
    duration: 'Full day',
    durationCategory: 'full',
    description: 'Visit Naples and learn the art of authentic Neapolitan pizza from master pizzaiolos.',
    longDescription: 'Journey to Naples, the birthplace of pizza, for an authentic pizza-making experience. Visit a traditional pizzeria where master pizzaiolos teach you the art of stretching dough, choosing quality ingredients, and baking in a wood-fired oven. Learn what makes Neapolitan pizza special and earn your pizza-making certificate! Includes time to explore Naples\' historic center and waterfront. Round-trip transportation from Rome included.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60', 
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 15,
    difficulty: 'Easy',
    meetingPoint: 'Rome Termini Station, Platform 24',
    meetingTime: '8:00 AM',
    highlights: [
      'Visit Naples, birthplace of pizza',
      'Hands-on pizza making class',
      'Learn from master pizzaiolo',
      'Make and eat your own authentic pizza',
      'Pizza-making certificate',
      'Free time in Naples historic center',
      'Round-trip train from Rome'
    ],
    included: [
      'Round-trip train tickets Rome-Naples',
      'Pizza making class with master pizzaiolo',
      'All ingredients and equipment',
      'Lunch (your pizzas plus drinks)',
      'Pizza-making certificate',
      'English-speaking tour escort',
      'Free time for Naples exploration'
    ],
    notIncluded: [
      'Hotel pickup',
      'Dinner',
      'Additional food and drinks',
      'Naples attraction tickets',
      'Gratuities'
    ],
    itinerary: [
      { time: '8:00 AM', activity: 'Depart Rome by train' },
      { time: '9:30 AM', activity: 'Arrive in Naples' },
      { time: '10:00 AM', activity: 'Walk to traditional pizzeria' },
      { time: '10:30 AM', activity: 'Pizza making class begins' },
      { time: '12:30 PM', activity: 'Eat your pizzas for lunch' },
      { time: '2:00 PM', activity: 'Free time in Naples historic center' },
      { time: '4:00 PM', activity: 'Meet for return journey' },
      { time: '4:30 PM', activity: 'Depart Naples' },
      { time: '6:00 PM', activity: 'Arrive back in Rome' }
    ],
    reviews: [
      { name: 'Tony Marino', rating: 5, date: '2024-10', comment: 'As an Italian-American, this was a dream come true! The pizza was incredible and the pizzaiolo was a master.' },
      { name: 'Emily Collins', rating: 5, date: '2024-09', comment: 'So much fun! Now I know the secret to real Neapolitan pizza. Naples is wonderful!' },
      { name: 'Frank Johnson', rating: 5, date: '2024-08', comment: 'Best pizza I\'ve ever had because I made it myself! Great experience, highly recommend.' }
    ],
    averageRating: 4.9,
    totalReviews: 234,
    cancellationPolicy: 'Free cancellation up to 48 hours before departure. 50% refund within 48 hours.',
    availability: 'Wednesday, Friday, Sunday'
  },
  { 
    id: 'trastevere', 
    name: 'Trastevere Food & Culture Tour',
    type: 'food', 
    price: 89, 
    duration: '3.5 hours',
    durationCategory: 'half',
    description: 'Explore the charming Trastevere neighborhood with tastings at local trattorias.',
    longDescription: 'Discover Trastevere, Rome\'s most charming and authentic neighborhood, on this food and culture tour. Wind through narrow cobblestone streets lined with ivy-covered buildings, visit hidden churches with stunning mosaics, and stop at family-run trattorias and wine bars beloved by locals. Sample Roman specialties, artisan gelato, and regional wines while learning about the neighborhood\'s bohemian history and modern revival.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=60', 
      'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1534634892-e386570e48cd?auto=format&fit=crop&w=800&q=60'
    ],
    maxGroupSize: 14,
    difficulty: 'Easy',
    meetingPoint: 'Piazza Santa Maria in Trastevere, near the fountain',
    meetingTime: '5:30 PM',
    highlights: [
      'Explore charming Trastevere neighborhood',
      'Visit 4-5 local food establishments',
      'Taste Roman specialties and wines',
      'Hidden churches and historical sites',
      'Learn about local culture and traditions',
      'Artisan gelato tasting'
    ],
    included: [
      'Local food expert guide',
      'All food and wine tastings',
      'Visit to 4-5 establishments',
      'Cultural and historical commentary',
      'Small group experience',
      'Recommendations for further exploration'
    ],
    notIncluded: [
      'Hotel pickup and drop-off',
      'Dinner (tastings are substantial)',
      'Additional drinks',
      'Gratuities'
    ],
    itinerary: [
      { time: '5:30 PM', activity: 'Meet in Piazza Santa Maria' },
      { time: '5:45 PM', activity: 'Visit historic church and learn neighborhood history' },
      { time: '6:15 PM', activity: 'First tasting stop - porchetta and supplì' },
      { time: '6:45 PM', activity: 'Traditional trattoria for pasta and wine' },
      { time: '7:30 PM', activity: 'Artisan bakery for pizza and Roman desserts' },
      { time: '8:15 PM', activity: 'Wine bar for cheese and salumi' },
      { time: '8:45 PM', activity: 'Gelato tasting to conclude' },
      { time: '9:00 PM', activity: 'Tour ends with recommendations' }
    ],
    reviews: [
      { name: 'Victoria Price', rating: 5, date: '2024-11', comment: 'Perfect evening in Trastevere! Food was amazing and our guide knew all the best spots. Felt like a local!' },
      { name: 'Marcus Green', rating: 5, date: '2024-10', comment: 'Loved this tour! Trastevere is beautiful at night and we ate so much delicious food.' },
      { name: 'Diana Ross', rating: 5, date: '2024-09', comment: 'Best food tour we\'ve done! Guide was passionate about Rome and the neighborhood was charming.' }
    ],
    averageRating: 4.9,
    totalReviews: 412,
    cancellationPolicy: 'Free cancellation up to 24 hours before the tour. No refunds within 24 hours.',
    availability: 'Daily'
  }
];

// Helpers for availability filtering
function getAllowedDays(availabilityText = 'Daily') {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const lower = availabilityText.toLowerCase();

  if (lower.includes('daily except sunday')) return days.filter(day => day !== 'Sunday');
  if (lower.includes('daily except tuesday')) return days.filter(day => day !== 'Tuesday');
  if (lower.includes('daily except monday')) return days.filter(day => day !== 'Monday');
  if (lower.includes('tuesday to sunday')) return days.filter(day => day !== 'Monday');
  if (lower.includes('monday to saturday')) return days.filter(day => day !== 'Sunday');
  if (lower.includes('daily')) return days;

  const mentionedDays = days.filter(day => lower.includes(day.toLowerCase()));
  return mentionedDays.length ? mentionedDays : days;
}

// Filter function - shared between pages
function matchesTourFilters(tour, filters) {
  let matches = true;
  
  // Text search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    const matchesName = tour.name.toLowerCase().includes(searchLower);
    const matchesDescription = tour.description.toLowerCase().includes(searchLower);
    if (!matchesName && !matchesDescription) matches = false;
  }
  
  // Type filter
  if (filters.type && tour.type !== filters.type) matches = false;
  
  // Location filter
  if (filters.location && tour.location && tour.location.toLowerCase() !== filters.location.toLowerCase()) {
    matches = false;
  }
  
  // Price filter
  if (filters.price) {
    if (filters.price === 'budget' && tour.price >= 80) matches = false;
    if (filters.price === 'standard' && (tour.price < 80 || tour.price > 100)) matches = false;
    if (filters.price === 'premium' && tour.price <= 100) matches = false;
  }
  
  // Duration filter - use durationCategory for reliable filtering
  if (filters.duration && tour.durationCategory !== filters.duration) matches = false;

  // Date availability filter
  if (filters.date) {
    const parsed = new Date(filters.date);
    if (!isNaN(parsed)) {
      const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][parsed.getDay()];
      const allowedDays = getAllowedDays(tour.availability);
      if (!allowedDays.includes(dayName)) matches = false;
    }
  }
  
  return matches;
}
