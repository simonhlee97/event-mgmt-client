const events = [
  {
    id: 1,
    name: "Intro to Python (free workshop)",
    date: "2022-04-15",
    time: "2pm",
    description: "Free introduction to python class. Come and learn the basics of programming.",
    imageUrl: "https://picsum.photos/1440/900",
    location: "Starbucks, Gangnam Station, Seoul",
    category: 'python'
  },
  {
    id: 2,
    name: "Hello World - Intro to JavaScript",
    date: "2022-04-19",
    time: "2pm",
    description: "Free introduction to JavaScript class. Come and learn the basics of JavaScript.",
    imageUrl: "https://picsum.photos/id/100/1440/900",
    location: "Twosome Place, Gangnam Station, Seoul",
    category: 'javascript'
  },
  {
    id: 3,
    name: "Korea IT Horror Stories, by Beege",
    date: "2022-04-22",
    time: "2pm",
    description: "Beege is working on a book about Korea IT: the good, bad, and the ugly. Mostly ugly.",
    imageUrl: "https://picsum.photos/id/239/1440/900",
    location: "Starbucks, Gangnam Station, Seoul",
    category: 'Korea IT'
  },
  {
    id: 4,
    name: "Intro to MongoDB (free workshop)",
    date: "2022-04-27",
    time: "2pm",
    description: "Free introduction to MongoDB class. Come and learn the basics of NoSQL databases.",
    imageUrl: "https://picsum.photos/id/27/1440/900",
    location: "Starbucks, Gangnam Station, Seoul",
    category: 'databases'
	},
	{
    id: 5,
    name: "Intro to VueJS",
    date: "2022-05-10",
    time: "2pm",
    description: "An introduction to the Progressive Frontend Framework, VueJS.",
    imageUrl: "https://picsum.photos/id/11/1440/900",
    location: "Starbucks, Gangnam Station, Seoul",
    category: 'javascript'
  }
]

export function getEvents() {
  return events;
}

export function getEvent(id) {
  return events.find(
    (e) => e.id === id
  );
}
