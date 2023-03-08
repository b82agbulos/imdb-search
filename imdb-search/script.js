// Get the input link
const inputLink = prompt('Please enter a link:');


// List of names to search for
const namesToSearch = [
 'Bud Abbott',
  'Lou Costello',
  'Forrest J Ackerman',
  'Julie Adams',
  'Alexandre Aja',
  'Dario Argento',
  'Tom Atkins',
  'Lionel Atwill',
  'Rick Baker',
  'Jaume Balagueró',
  'Charles Band',
  'Adrienne Barbeau',
  'Mario Bava',
  'Tobin Bell',
  'Michael Berryman',
  'Peter Bogdanovich',
  'Rob Bottin',
  'Doug Bradley',
  'Ricou Browning',
  'Tod Browning',
  'Tim Burton',
  'James Cameron',
  'Bruce Campbell',
  'René Cardona',
  'René Cardona Jr.',
  'John Carpenter',
  'John Carradine',
  'William Castle',
  'Lon Chaney',
  'Lon Chaney Jr.',
  'Bob Clark',
  'Larry Cohen',
  'Jeffrey Combs',
  'Roger Corman',
  'Don Coscarelli',
  'Barbara Crampton',
  'Wes Craven',
  'David Cronenberg',
  'Jamie Lee Curtis',
  'Peter Cushing',
  'Joe Dante',
  'Frank Darabont',
  'Guillermo Del Toro',
  'Brian De Palma',
  'Johnny Depp',
  'Brad Dourif',
  'Dracula',
  'Vampire',
  'Vampires',
  'Robert Englund',
  'Larry Fessenden',
  'Terence Fisher',
  'Ken Foree',
  'Frankenstein',
  'Dwight Frye',
  'William Friedkin',
  'Lucio Fulci',
  'Mick Garris',
  'William Girdler',
  'Stuart Gordon',
  'Sid Haig',
  'Danielle Harris',
  'Ray Harryhausen',
  'Rondo Hatton',
  'Hellraiser',
  'Lance Henriksen',
  'Bernard Herrmann',
  'Bill Hinzman',
  'Alfred Hitchcock',
  'Kane Hodder',
  'Tobe Hooper',
  'Anthony Hopkins',
  'Peter Jackson',
  'Alejandro Jodorowsky',
  'Amy Holden Jones',
  'Doug Jones',
  'Skelton Knaggs',
  'Boris Karloff',
  'Lloyd Kaufman',
  'Ray Kellogg',
  'Udo Kier',
  'Stephen King',
  'KNB EFX',
  'Freddy Krueger',
  'Heather Langenkamp',
  'Hannibal Lecter',
  'Serial Killer',
  'Christopher Lee',
  'Herschell Gordon Lewis',
  'Val Lewton',
  'Peter Lorre',
  'H.P. Lovecraft',
  'Bela Lugosi',
  'William Lustig',
  'William Malone',
  'Richard Matheson',
  'Glenn McQuaid',
  'Dick Miller',
  'Bill Moseley',
  'Mummy',
  'Michael Myers',
  'Paul Naschy',
  'Dan O’Bannon',
  'Bill Paxton',
  'Emily Perkins',
  'Ron Perlman',
  'Ingrid Pitt',
  'Donald Pleasence',
  'Edgar Allan Poe',
  'Roman Polanski',
  'Michael Powell',
  'Vincent Price',
  'Linnea Quigley',
  'Craig Reardon',
  'Sam Raimi',
  'Michael Ripper',
  'Jean Rollin',
  'George A. Romero',
  'Eli Roth',
  'Tom Savini',
  'John Saxon',
  'Angus Scrimm',
  'Mark Shostrom',
  'Tod Slaughter',
  'Dick Smith',
  'Steven Spielberg',
  'Richard Stanley',
  'Barbara Steele',
  'Sergio Stivaletti',
  'Jacques Tourneur',
  'Shin/ya Tsukamoto',
  'Vampira',
  'Maila Nurmi',
  'Paul Verhoeven',
  'Jason Voorhees',
  'Christopher Walken',
  'Edgar Wallace',
  'Tommy Lee Wallace',
  'James Wan',
  'Andy Warhol',
  'Sigourney Weaver',
  'The Werewolf',
  'James Whale',
  'Leigh Whannell',
  'Joss Whedon',
  'Kevin Williamson',
  'Stan Winston',
  'Fay Wray',
  'Kevin Yagher',
  'Richard D. Zanuck',
  'Zombie',
  'Zombies',
  'Rob Zombie',
  'George Zucco'
];


// Fetch the HTML content of the link
fetch(inputLink)
  .then(response => response.text())
  .then(html => {
    // Create a temporary DOM element to parse the HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;


    // Search for the names in the link text and print them
    const linkText = tempElement.textContent;
    const foundNames = namesToSearch.filter(name => linkText.includes(name));
    console.log('Names found in link:', foundNames);


    // Find the "Full Cast & Crew" link within the page and print its href attribute
    const fullCastCrewLink = tempElement.querySelector('a[href*="/fullcredits"]');
    if (fullCastCrewLink) {
      console.log('Full Cast & Crew link found:', fullCastCrewLink.href);
    } else {
      console.log('Full Cast & Crew link not found.');
    }
  })
  .catch(error => console.error(error));








