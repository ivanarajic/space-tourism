export const navLinks = [
  {
    id: 1,
    span: '00',
    path: '/',
    name: 'HOME',
  },
  {
    id: 2,
    span: '01',
    path: '/destination',
    name: 'DESTINATION',
  },
  {
    id: 3,
    span: '02',
    path: '/crew',
    name: 'CREW',
  },
  {
    id: 4,
    span: '03',
    path: '/technology',
    name: 'TECHNOLOGY',
  },
];

export const destinationData = [
  {
    id: 0,
    title: 'MOON',
    text: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: '384,400 km',
    time: '3 days',
    img: '/assets/destination/image-moon.webp',
  },
  {
    id: 1,
    title: 'MARS',
    text: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    distance: '225 MIL. km',
    time: '9 months',
    img: '/assets/destination/image-mars.webp',
  },
  {
    id: 2,
    title: 'EUROPA',
    text: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    distance: '628 MIL. km',
    time: '3 years',
    img: '/assets/destination/image-europa.webp',
  },
  {
    id: 3,
    title: 'TITAN',
    text: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    distance: '1.6 BIL. km',
    time: '7 years',
    img: '/assets/destination/image-titan.webp',
  },
];

export const crewData = [
  {
    id: 0,
    name: 'Douglas Hurley',
    image: '/assets/crew/image-douglas-hurley.webp',
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    id: 1,
    name: 'Mark Shuttleworth',
    image: '/assets/crew/image-mark-shuttleworth.webp',
    role: 'Mission Specialist',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  {
    id: 2,
    name: 'Victor Glover',
    image: '/assets/crew/image-victor-glover.webp',
    role: 'Pilot',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  {
    id: 3,
    name: 'Anousheh Ansari',
    image: '/assets/crew/image-anousheh-ansari.webp',
    role: 'Flight Engineer',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
];

export const spaceLaunchData = [
  {
    id: 0,
    title: 'Launch vehicle',
    subtitle: 'The terminology...',
    text: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!',
    image: [
      '/assets/technology/image-launch-vehicle-landscape.jpg',
      '/assets/technology/image-launch-vehicle-portrait.jpg',
    ],
  },
  {
    id: 1,
    title: 'Spaceport',
    subtitle: 'The terminology...',
    text: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    image: [
      '/assets/technology/image-spaceport-landscape.jpg',
      '/assets/technology/image-spaceport-portrait.jpg',
    ],
  },
  {
    id: 2,
    title: 'Space capsule',
    subtitle: 'The terminology...',
    text: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
    image: [
      '/assets/technology/image-space-capsule-landscape.jpg',
      '/assets/technology/image-space-capsule-portrait.jpg',
    ],
  },
];
