/**
 *
 * A Trivia Bot for Slack!
 *
 * Local Testing in terminal:
 * xoxb-your-token npm start
 *
 */

/**
 * Data for Now:
 *
 * dataAll: play all | dataGeneral: play general | dataSports: play sports | dataMovies: play movies | dataCm: play cm
 * questiontype: write-in | multiple-choice
 *
 */
const dataAll = {
    dataCategory: 'dataAll',
    questions: [
        {
            question: 'Name as many countries as you can in 30 seconds.',
            questiontype: 'write-in',
            answers: [
                "Afghanistan",
                "Åland Islands",
                "Albania",
                "Algeria",
                "American Samoa",
                "AndorrA",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia",
                "Bosnia and Herzegovina",
                "Botswana",
                "Bouvet Island",
                "Brazil",
                "British Indian Ocean Territory",
                "Brunei Darussalam",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cape Verde",
                "Cayman Islands",
                "Central African Republic",
                "Chad",
                "Chile",
                "China",
                "Christmas Island",
                "Cocos (Keeling) Islands",
                "Colombia",
                "Comoros",
                "Congo",
                "Congo, The Democratic Republic of the",
                "Cook Islands",
                "Costa Rica",
                "Cote D'Ivoire",
                "Croatia",
                "Cuba",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Ethiopia",
                "Falkland Islands (Malvinas)",
                "Faroe Islands",
                "Fiji",
                "Finland",
                "France",
                "French Guiana",
                "French Polynesia",
                "French Southern Territories",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Heard Island and Mcdonald Islands",
                "Holy See (Vatican City State)",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran, Islamic Republic Of",
                "Iraq",
                "Ireland",
                "Isle of Man",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea, Democratic People's Republic",
                "Korea, Republic",
                "Kuwait",
                "Kyrgyzstan",
                "Lao People's Democratic Republic",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libyan Arab Jamahiriya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macao",
                "Macedonia, The Former Yugoslav Republic of",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Martinique",
                "Mauritania",
                "Mauritius",
                "Mayotte",
                "Mexico",
                "Micronesia, Federated States of",
                "Moldova, Republic of",
                "Monaco",
                "Mongolia",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands",
                "Netherlands Antilles",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "Niue",
                "Norfolk Island",
                "Northern Mariana Islands",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestinian Territory, Occupied",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Pitcairn",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Reunion",
                "Romania",
                "Russian Federation",
                "RWANDA",
                "Saint Helena",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Pierre and Miquelon",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia and Montenegro",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Georgia and the South Sandwich Islands",
                "Spain",
                "Sri Lanka",
                "Sudan",
                "Suriname",
                "Svalbard and Jan Mayen",
                "Swaziland",
                "Sweden",
                "Switzerland",
                "Syrian Arab Republic",
                "Taiwan, Province of China",
                "Tajikistan",
                "Tanzania, United Republic of",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tokelau",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks and Caicos Islands",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates",
                "United Kingdom",
                "United States",
                "United States Minor Outlying Islands",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Venezuela",
                "Viet Nam",
                "Virgin Islands, British",
                "Virgin Islands, U.S.",
                "Wallis and Futuna",
                "Western Sahara",
                "Yemen",
                "Zambia",
                "Zimbabwe",
            ]
        },
        {
            question: 'Name as many of the wealthiest people on the Forbes 100 list in 30 seconds.',
            questiontype: 'write-in',
            answers: [
                "Jeff Bezos",
                "Bill Gates",
                "Warren Buffett",
                "Bernard Arnault",
                "Carlos Slim Helu",
                "Amancio Ortega",
                "Larry Ellison",
                "Mark Zuckerberg",
                "Michael Bloomberg",
                "Larry Page",
                "David Koch",
                "Charles Koch",
                "Mukesh Ambani",
                "Sergey Brin",
                "Francoise Bettencourt Meyers",
                "Jim Walton",
                "Alice Walton",
                "Rob Walton",
                "Steve Ballmer",
                "Ma Huateng",
                "Jack Ma",
                "Hui Ka Yan",
                "Beate Heister & Karl Albrecht Jr.",
                "Sheldon Adelson",
                "Michael Dell",
                "Phil Knight",
                "David Thomson",
                "Li Ka-shing",
                "Lee Shau Kee",
                "François Pinault",
                "Joseph Safra",
                "Leonid Mikhelson",
                "John Mars",
                "Jacqueline Mars",
                "Jorge Paulo Lemann",
                "Azim Premji",
                "Dieter Schwarz",
                "Wang Jianlin",
                "Giovanni Ferrero",
                "Elon Musk",
                "Tadashi Yanai",
                "Yang Huiyan",
                "Masayoshi Son",
                "Jim Simons",
                "Vladimir Lisin",
                "Susanne Klatten",
                "Vagit Alekperov",
                "Alexey Mordashov",
                "Gennady Timchenko",
                "Leonardo Del Vecchio",
                "He Xiangjian",
                "Rupert Murdoch",
                "Dietrich Mateschitz",
                "Laurene Powell Jobs",
                "R. Budi Hartono",
                "Michael Hartono",
                "Ray Dalio",
                "Vladimir Potanin",
                "Len Blavatnik",
                "Stefan Quandt",
                "Carl Icahn",
                "Theo Albrecht, Jr.",
                "Lee Man Tat",
                "Thomas Peterffy",
                "Joseph Lau",
                "Hinduja brothers",
                "Lee Kun-hee",
                "Donald Bren",
                "Takemitsu Takizaki",
                "Zhang Yiming",
                "Stefan Persson",
                "Abigail Johnson",
                "Petr Kellner",
                "Iris Fontbona",
                "Gina Rinehart",
                "Lukas Walton",
                "Dhanin Chearavanont",
                "Kwong Siu-hing",
                "Pallonji Mistry",
                "Mikhail Fridman",
                "William Ding",
                "Leonard Lauder",
                "Lui Che Woo",
                "Shiv Nadar",
                "Alain Wertheimer",
                "Gerard Wertheimer",
                "Charoen Sirivadhanabhakdi",
                "Emmanuel Besnier",
                "Charlene de Carvalho-Heineken",
                "Andrey Melnichenko",
                "Lakshmi Mittal",
                "Heinz Hermann Thiele",
                "Li Shufu",
                "Hasso Plattner",
                "Colin Huang",
                "Dietmar Hopp",
                "Georg Schaeffler",
                "German Larrea Mota Velasco",
                "Zhang Zhidong",
                "Stephen Schwarzman"
            ]
        },
        {
            question: 'Name as many states in the USA as you can in 30 seconds.',
            questiontype: 'write-in',
            answers: [
                'Alabama',
                'Alaska',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'District Of Columbia',
                'Florida',
                'Georgia',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Carolina',
                'North Dakota',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Pennsylvania',
                'Rhode Island',
                'South Carolina',
                'South Dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming'
            ]
        },
        {
            question: 'Name as many elements on the periodic table as you can.',
            questiontype: 'write-in',
            answers: [
                "Hydrogen",
                "Helium",
                "Lithium",
                "Beryllium",
                "Boron",
                "Carbon",
                "Nitrogen",
                "Oxygen",
                "Fluorine",
                "Neon",
                "Sodium",
                "Magnesium",
                "Aluminum",
                "Silicon",
                "Phosphorus",
                "Sulfur",
                "Chlorine",
                "Argon",
                "Potassium",
                "Calcium",
                "Scandium",
                "Titanium",
                "Vanadium",
                "Chromium",
                "Manganese",
                "Iron",
                "Cobalt",
                "Nickel",
                "Copper",
                "Zinc",
                "Gallium",
                "Germanium",
                "Arsenic",
                "Selenium",
                "Bromine",
                "Krypton",
                "Rubidium",
                "Strontium",
                "Yttrium",
                "Zirconium",
                "Niobium",
                "Molybdenum",
                "Technetium",
                "Ruthenium",
                "Rhodium",
                "Palladium",
                "Silver",
                "Cadmium",
                "Indium",
                "Tin",
                "Antimony",
                "Tellurium",
                "Iodine",
                "Xenon",
                "Cesium",
                "Barium",
                "Lanthanum",
                "Cerium",
                "Praseodymium",
                "Neodymium",
                "Promethium",
                "Samarium",
                "Europium",
                "Gadolinium",
                "Terbium",
                "Dysprosium",
                "Holmium",
                "Erbium",
                "Thulium",
                "Ytterbium",
                "Lutetium",
                "Hafnium",
                "Tantalum",
                "Tungsten",
                "Rhenium",
                "Osmium",
                "Iridium",
                "Platinum",
                "Gold",
                "Mercury",
                "Thallium",
                "Lead",
                "Bismuth",
                "Polonium",
                "Astatine",
                "Radon",
                "Francium",
                "Radium",
                "Actinium",
                "Thorium",
                "Protactinium",
                "Uranium",
                "Neptunium",
                "Plutonium",
                "Americium",
                "Curium",
                "Berkelium",
                "Californium",
                "Einsteinium",
                "Fermium",
                "Mendelevium",
                "Nobelium",
                "Lawrencium",
                "Rutherfordium",
                "Dubnium",
                "Seaborgium",
                "Bohrium",
                "Hassium",
                "Meitnerium",
                "Darmstadtium",
                "Roentgenium",
                "Copernicium",
                "Nihonium",
                "Flerovium",
                "Moscovium",
                "Livermorium",
                "Tennessine",
                "Oganesson"
            ]
        },
        {
            question: 'Name the Schools in the Ivy League Conference',
            questiontype: 'write-in',
            answers: [
                'Brown University',
                'Columbia University',
                'Cornell University',
                'Dartmouth College',
                'Harvard University',
                'Princeton University',
                'University of Pennsylvania',
                'Yale University',
            ]
        },
        {
            question: 'Name as many Presidents of the United States as you can in 30 seconds.',
            answers: [
                "George Washington",
                "John Adams",
                "Thomas Jefferson",
                "James Madison",
                "James Monroe",
                "John Quincy Adams",
                "Andrew Jackson",
                "Martin Van Buren",
                "William Henry Harrison",
                "John Tyler",
                "James K. Polk",
                "Zachary Taylor",
                "Millard Fillmore",
                "Franklin Pierce",
                "James Buchanan",
                "Abraham Lincoln",
                "Andrew Johnson",
                "Ulysses S. Grant",
                "Rutherford B. Hayes",
                "James A. Garfield",
                "Chester A. Arthur",
                "Grover Cleveland",
                "Benjamin Harrison",
                "Grover Cleveland",
                "William McKinley",
                "Theodore Roosevelt",
                "William Howard Taft",
                "Woodrow Wilson",
                "Warren G. Harding",
                "Calvin Coolidge",
                "Herbert Hoover",
                "Franklin D. Roosevelt",
                "Harry S. Truman",
                "Dwight D. Eisenhower",
                "John F. Kennedy",
                "Lyndon B. Johnson",
                "Richard Nixon",
                "Gerald Ford",
                "Jimmy Carter",
                "Ronald Reagan",
                "George H. W. Bush",
                "Bill Clinton",
                "George W. Bush",
                "Barack Obama",
                "Donald Trump"
            ]
        },
        {
            question: 'Name as many of the U.S. capitals as you can in 30 seconds.',
            answers: [
                "Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helana", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"
            ]
        },
        {
            question: 'Name as many U.S. National Parks and monuments as you can in 30 seconds.',
            answers: [
                "Abraham Lincoln Birthplace National Historical Park",
                "Acadia National Park",
                "Adams National Historical Park",
                "African Burial Ground National Monument",
                "Ala Kahakai National Historic Trail",
                "Alagnak Wild River",
                "Alcatraz Island",
                "Aleutian World War II National Historic Area",
                "Allegheny Portage Railroad National Historic Site",
                "American Memorial Park",
                "Amistad National Recreation Area",
                "Andersonville National Historic Site",
                "Andrew Johnson National Historic Site",
                "Aniakchak National Monument & Preserve",
                "Antietam National Battlefield",
                "Apostle Islands National Lakeshore",
                "Appalachian National Scenic Trail",
                "Arches National Park",
                "Arkansas Post National Memorial",
                "Assateague Island National Seashore",
                "Aztec Ruins National Monument",
                "Badlands National Park",
                "Baltimore-Washington Parkway",
                "Bandelier National Monument",
                "Bent's Old Fort National Historic Site",
                "Bering Land Bridge National Preserve",
                "Big Bend National Park",
                "Big Cypress National Preserve",
                "Big South Fork National River & Recreation Area",
                "Big Thicket National Preserve",
                "Bighorn Canyon National Recreation Area",
                "Biscayne National Park",
                "Black Canyon of the Gunnison National Park",
                "Blue Ridge Parkway",
                "Boston Harbor Islands National Recreation Area",
                "Boston National Historical Park",
                "Brices Cross Roads National Battlefield Site",
                "Brown v. Board of Education National Historic Site",
                "Bryce Canyon National Park",
                "Buffalo National River",
                "Cabrillo National Monument",
                "California National Historic Trail",
                "Canaveral National Seashore",
                "Cane River Creole National Historical Park",
                "Canyon de Chelly National Monument",
                "Canyonlands National Park",
                "Cape Hatteras National Seashore",
                "Cape Krusenstern National Monument",
                "Cape Lookout National Seashore",
                "Capitol Reef National Park",
                "Captain John Smith Chesapeake National Historic Trail",
                "Capulin Volcano National Monument",
                "Carl Sandburg Home National Historic Site",
                "Carlsbad Caverns National Park",
                "Casa Grande Ruins National Monument",
                "Castillo de San Marcos National Monument",
                "Castle Clinton National Monument",
                "Catoctin Mountain Park",
                "Cedar Breaks National Monument",
                "Chaco Culture National Historical Park",
                "Chamizal National Memorial",
                "Channel Islands National Park",
                "Charles Pinckney National Historic Site",
                "Chattahoochee River National Recreation Area",
                "Chesapeake & Ohio Canal National Historical Park",
                "Chesapeake Bay Gateways Network",
                "Chickamauga & Chattanooga National Military Park",
                "Chickasaw National Recreation Area",
                "Chiricahua National Monument",
                "City of Rocks National Reserve",
                "Clara Barton National Historic Site",
                "Colorado National Monument",
                "Coronado National Memorial",
                "Cowpens National Battlefield",
                "Crater Lake National Park",
                "Craters of the Moon National Monument & Preserve",
                "Cumberland Gap National Historical Park",
                "Cumberland Island National Seashore",
                "Curecanti National Recreation Area",
                "Cuyahoga Valley National Park",
                "David Berger National Memorial",
                "De Soto National Memorial",
                "Death Valley National Park",
                "Delaware Water Gap National Recreation Area",
                "Denali National Park and Preserve",
                "Deshler Morris House",
                "Devils Postpile National Monument",
                "Devils Tower National Monument",
                "Dinosaur National Monument",
                "Dry Tortugas National Park",
                "Edgar Allan Poe National Historic Site",
                "Effigy Mounds National Monument",
                "Eisenhower National Historic Site",
                "El Camino Real de los Tejas National Historic Trail",
                "El Camino Real de Tierra Adentro National Historic Trail",
                "El Malpais National Monument",
                "El Morro National Monument",
                "Eleanor Roosevelt National Historic Site",
                "Ellis Island National Monument",
                "Essex National Heritage Area",
                "Eugene O'Neill National Historic Site",
                "Everglades National Park",
                "Federal Hall National Memorial",
                "Fire Island National Seashore",
                "First Ladies National Historic Site",
                "Flight 93 National Memorial",
                "Florissant Fossil Beds National Monument",
                "Fort Bowie National Historic Site",
                "Fort Davis National Historic Site",
                "Fort Donelson National Battlefield",
                "Fort Foote Park",
                "Fort Frederica National Monument",
                "Fort Larned National Historic Site",
                "Fort Matanzas National Monument",
                "Fort Necessity National Battlefield",
                "Fort Point National Historic Site",
                "Fort Pulaski National Monument",
                "Fort Raleigh National Historic Site",
                "Fort Scott National Historic Site",
                "Fort Smith National Historic Site",
                "Fort Stanwix National Monument",
                "Fort Sumter National Monument",
                "Fort Union National Monument",
                "Fort Union Trading Post National Historic Site",
                "Fort Vancouver National Historic Site",
                "Fort Washington Park",
                "Frederick Law Olmsted National Historic Site",
                "Fredericksburg & Spotsylvania National Military Park",
                "Friendship Hill National Historic Site",
                "Gates of the Arctic National Park & Preserve",
                "Gateway National Recreation Area",
                "General Grant National Memorial",
                "George Rogers Clark National Historical Park",
                "George Washington Carver National Monument",
                "Gettysburg National Military Park",
                "Gila Cliff Dwellings National Monument",
                "Glacier Bay National Park and Preserve",
                "Glacier National Park",
                "Glen Canyon National Recreation Area",
                "Glen Echo Park",
                "Golden Gate National Recreation Area",
                "Golden Spike National Historic Site",
                "Governors Island National Monument",
                "Grand Canyon National Park",
                "Grand Canyon-Parashant National Monument",
                "Grand Portage National Monument",
                "Grand Teton National Park & John D. Rockefeller Jr. Memorial Parkway",
                "Grant-Kohrs Ranch National Historic Site",
                "Great Basin National Park",
                "Great Sand Dunes National Park and Preserve",
                "Great Smoky Mountains National Park",
                "Greenbelt Park",
                "Guadalupe Mountains National Park",
                "Guilford Courthouse National Military Park",
                "Gulf Islands National Seashore",
                "Hagerman Fossil Beds National Monument",
                "Haleakala National Park",
                "Hamilton Grange National Memorial",
                "Hampton National Historic Site",
                "Harmony Hall",
                "Harpers Ferry National Historical Park",
                "Harry S Truman National Historic Site",
                "Hawai'i Volcanoes National Park",
                "Herbert Hoover National Historic Site",
                "Hohokam Pima National Monument",
                "Home of Franklin D Roosevelt National Historic Site",
                "Homestead National Monument of America",
                "Hopewell Culture National Historical Park",
                "Hopewell Furnace National Historic Site",
                "Horseshoe Bend National Military Park",
                "Hot Springs National Park",
                "Hovenweep National Monument",
                "Hubbell Trading Post National Historic Site",
                "Ice Age National Scenic Trail",
                "Independence National Historical Park",
                "Indiana Dunes National Lakeshore",
                "Inupiat Heritage Center",
                "Isle Royale National Park",
                "James A Garfield National Historic Site",
                "Jean Lafitte National Historical Park and Preserve",
                "Jefferson National Expansion Memorial",
                "Jewel Cave National Monument",
                "Jimmy Carter National Historic Site",
                "John Day Fossil Beds National Monument",
                "John Fitzgerald Kennedy National Historic Site",
                "John Muir National Historic Site",
                "Johnstown Flood National Memorial",
                "Joshua Tree National Park",
                "Juan Bautista de Anza National Historic Trail",
                "Kalaupapa National Historical Park",
                "Kaloko-Honokohau National Historical Park",
                "Katmai National Park & Preserve",
                "Kenai Fjords National Park",
                "Kennesaw Mountain National Battlefield Park",
                "Keweenaw National Historical Park",
                "Kings Mountain National Military Park",
                "Klondike Gold Rush - Seattle Unit National Historical Park",
                "Klondike Gold Rush National Historical Park",
                "Knife River Indian Villages National Historic Site",
                "Kobuk Valley National Park",
                "Lake Clark National Park & Preserve",
                "Lake Mead National Recreation Area",
                "Lassen Volcanic National Park",
                "Lava Beds National Monument",
                "Lewis & Clark National Historic Trail",
                "Lewis and Clark National Historical Park",
                "Lincoln Boyhood National Memorial",
                "Lincoln Home National Historic Site",
                "Little Bighorn Battlefield National Monument",
                "Little River Canyon National Preserve",
                "Little Rock Central High School National Historic Site",
                "Longfellow National Historic Site",
                "Lowell National Historical Park",
                "Lower East Side Tenement Museum National Historic Site",
                "Lyndon B. Johnson National Historical Park",
                "Maine Acadian Culture",
                "Mammoth Cave National Park",
                "Manassas National Battlefield Park",
                "Manzanar National Historic Site",
                "Marsh-Billings-Rockefeller National Historical Park",
                "Martin Luther King Jr National Historic Site",
                "Martin Van Buren National Historic Site",
                "Mesa Verde National Park",
                "Minidoka National Historic Site",
                "Minute Man National Historical Park",
                "Minuteman Missile National Historic Site",
                "Mississippi National River and Recreation Area",
                "Missouri National Recreational River",
                "Mojave National Preserve",
                "Monocacy National Battlefield",
                "Montezuma Castle National Monument",
                "Moores Creek National Battlefield",
                "Mormon Pioneer National Historic Trail",
                "Morristown National Historical Park",
                "Mount Rainier National Park",
                "Mount Rushmore National Memorial",
                "Muir Woods National Monument",
                "Natchez Trace National Scenic Trail",
                "Natchez Trace Parkway",
                "National Capital Parks-East",
                "National Park of American Samoa",
                "National Parks of New York Harbor",
                "Natural Bridges National Monument",
                "Navajo National Monument",
                "New Bedford Whaling National Historical Park",
                "New Orleans Jazz National Historical Park",
                "New River Gorge National River",
                "Nez Perce National Historical Park",
                "Nicodemus National Historic Site",
                "Ninety Six National Historic Site",
                "Niobrara National Scenic River",
                "Noatak National Preserve",
                "North Cascades National Park Service Complex",
                "North Country National Scenic Trail",
                "Northern Rio Grande National Heritage Area",
                "Obed Wild & Scenic River",
                "Ocmulgee National Monument",
                "Oklahoma City National Memorial",
                "Old Spanish National Historic Trail",
                "Oregon National Historic Trail",
                "Organ Pipe Cactus National Monument",
                "Overmountain Victory National Historic Trail",
                "Oxon Cove Park & Oxon Hill Farm",
                "Ozark National Scenic Riverways",
                "Padre Island National Seashore",
                "Palo Alto Battlefield National Historical Park",
                "Park News",
                "Pea Ridge National Military Park",
                "Pecos National Historical Park",
                "Perrys Victory and International Peace Memorial",
                "Petrified Forest National Park",
                "Petroglyph National Monument",
                "Pictured Rocks National Lakeshore",
                "Pinelands National Reserve",
                "Pinnacles National Monument",
                "Pipe Spring National Monument",
                "Point Reyes National Seashore",
                "Pony Express National Historic Trail",
                "Port Chicago Naval Magazine National Memorial",
                "Potomac Heritage National Scenic Trail",
                "Poverty Point National Monument",
                "Pu`uhonua o Honaunau National Historical Park",
                "Pu'ukohola Heiau National Historic Site",
                "Rainbow Bridge National Monument",
                "Redwood National and State Parks",
                "Rio Grande Wild & Scenic River",
                "Rocky Mountain National Park",
                "Roger Williams National Memorial",
                "Roosevelt Campobello International Park",
                "Rosie the Riveter / WWII Home Front National Historical Park",
                "Russell Cave National Monument",
                "Sagamore Hill American National Historic Site",
                "Saguaro National Park",
                "Saint Croix Island International Historic Site",
                "Saint Croix National Scenic Riverway",
                "Saint Paul's Church National Historic Site",
                "Saint-Gaudens National Historic Site",
                "Salem Maritime National Historic Site",
                "Salinas Pueblo Missions National Monument",
                "San Antonio Missions National Historical Park",
                "San Francisco Maritime National Historical Park",
                "San Juan National Historic Site",
                "Sand Creek Massacre National Historic Site",
                "Santa Fe National Historic Trail",
                "Santa Monica Mountains National Recreation Area",
                "Saratoga National Historical Park",
                "Saugus Iron Works National Historic Site",
                "Scotts Bluff National Monument",
                "Selma To Montgomery National Historic Trail",
                "Sequoia & Kings Canyon National Park",
                "Shiloh National Military Park",
                "Sitka National Historical Park",
                "Sleeping Bear Dunes National Lakeshore",
                "Springfield Armory National Historic Site",
                "Star-Spangled Banner National Historic Trail",
                "Statue of Liberty National Monument",
                "Steamtown National Historic Site",
                "Stones River National Battlefield",
                "Sunset Crater Volcano National Monument",
                "Tallgrass Prairie National Preserve",
                "Thaddeus Kosciuszko National Memorial",
                "Theodore Roosevelt Birthplace National Historic Site",
                "Theodore Roosevelt Inaugural National Historic Site",
                "Thomas Cole National Historic Site",
                "Thomas Edison National Historical Park",
                "Thomas Stone National Historic Site",
                "Timpanogos Cave National Monument",
                "Timucuan Ecological and Historic Preserve & Fort Caroline National Memorial",
                "Tonto National Monument",
                "Touro Synagogue National Historic Site",
                "Trail of Tears National Historic Trail",
                "Tule Lake Unit",
                "Tumacacori National Historical Park",
                "Tupelo National Battlefield",
                "Tuskegee Airmen National Historic Site",
                "Tuskegee Institute National Historic Site",
                "Tuzigoot National Monument",
                "Ulysses S Grant National Historic Site",
                "Upper Delaware Scenic and Recreational River",
                "Valley Forge National Historical Park",
                "Vanderbilt Mansion National Historic Site",
                "Vicksburg National Military Park",
                "Virgin Islands National Park",
                "Voyageurs National Park",
                "Walnut Canyon National Monument",
                "War in the Pacific National Historical Park",
                "Weir Farm National Historic Site",
                "Whiskeytown National Recreational Area",
                "White Sands National Monument",
                "William Howard Taft National Historic Site",
                "Women's Rights National Historical Park",
                "Wrangell-St. Elias National Park & Preserve",
                "Wright Brothers National Memorial",
                "Wupatki National Monument",
                "Yellowstone National Park",
                "Yosemite National Park",
                "Yucca House National Monument",
                "Yukon Charley Rivers National Preserve",
                "Zion National Park"
            ]
        }
    ]
};

const dataGeneral = {
    dataCategory: 'dataGeneral',
    questions: [
        {
            question: 'Data General Question',
            answers: [
                'Cupertino',
                'Calgary',
                'Sao Paulo',
            ]
        }
    ]
};

const dataSports = {
    dataCategory: 'dataSports',
    questions: [
        {
            question: 'Name as many MLS teams as you can in 30 Seconds.',
            questiontype: 'write-in',
            answers: [
                'Atlanta United',
                'Chicago Fire',
                'FC Cincinnati',
                'Colorado Rapids',
                'Columbus Crew',
                'FC Dallas',
                'Houston Dynamo',
                'Los Angeles Football Club',
                'LA Galaxy',
                'Minnesota United FC',
                'Montreal Impact',
                'New England Revolution',
                'New York City FC',
                'New York Red Bulls',
                'Orlando City',
                'Philadelphia Union',
                'Portland Timbers',
                'Real Salt Lake',
                'San Jose Earthquakes',
                'Seattle Sounders',
                'Sporting Kansas City',
                'Toronto FC',
                'Vancouver Whitecaps',
            ]
        }
    ]
};

const dataMovies = {
    dataCategory: 'dataMovies',
    questions: [
        {
            question: 'Top 100 Movies on IMDB.. Go!',
            answers: [
                'Shawshank Redemption',
                'Django',
                'City of God',
            ]
        }
    ]
};

const dataCm = {
    dataCategory: 'dataCm',
    questions: [
        {
            question: 'Name as many CM offices as you can in 30 seconds.',
            answers: [
                'Cupertino',
                'Calgary',
                'Sao Paulo',
            ]
        }
    ]
};

/**
 *  Helper Functions
 *
 * TODO: move to separate file
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function arrayContains(needle, arrhaystack) {
    return (arrhaystack.indexOf(needle) > -1);
}

/**
 * Define a function for initiating a conversation on installation
 * With custom integrations, we don't have a way to find out who installed us, so we can't message them :(
 */
function onInstallation(bot, installer) {
    if (installer) {
        bot.startPrivateConversation({user: installer}, function (err, convo) {
            if (err) {
                console.log(err);
            } else {
                convo.say('I am a bot that has just joined your team');
                convo.say('You must now /invite me to a channel so that I can be of use!');
            }
        });
    }
}


/**
 * Configure the persistence options
 */
var config = {};
if (process.env.MONGOLAB_URI) {
    var BotkitStorage = require('botkit-storage-mongo');
    config = {
        storage: BotkitStorage({mongoUri: process.env.MONGOLAB_URI}),
    };
} else {
    config = {
        json_file_store: ((process.env.TOKEN)?'./db_slack_bot_ci/':'./db_slack_bot_a/'), //use a different name if an app or CI
    };
}

/**
 * Are being run as an app or a custom integration? The initialization will differ, depending
 */
if (process.env.TOKEN || process.env.SLACK_TOKEN) {
    //Treat this as a custom integration
    var customIntegration = require('./lib/custom_integrations');
    var token = (process.env.TOKEN) ? process.env.TOKEN : process.env.SLACK_TOKEN;
    var controller = customIntegration.configure(token, config, onInstallation);
} else if (process.env.CLIENT_ID && process.env.CLIENT_SECRET && process.env.PORT) {
    //Treat this as an app
    var app = require('./lib/apps');
    var controller = app.configure(process.env.PORT, process.env.CLIENT_ID, process.env.CLIENT_SECRET, config, onInstallation);
} else {
    console.log('Error: If this is a custom integration, please specify TOKEN in the environment. If this is an app, please specify CLIENTID, CLIENTSECRET, and PORT in the environment');
    process.exit(1);
}


/**
 * A demonstration for how to handle websocket events. In this case, just log when we have and have not
 * been disconnected from the websocket. In the future, it would be super awesome to be able to specify
 * a reconnect policy, and do reconnections automatically. In the meantime, we aren't going to attempt reconnects,
 * WHICH IS A B0RKED WAY TO HANDLE BEING DISCONNECTED. So we need to fix this.
 *
 * TODO: fixed b0rked reconnect behavior
 */
// Handle events related to the websocket connection to Slack
controller.on('rtm_open', function (bot) {
    console.log('** The RTM api just connected!');
});

controller.on('rtm_close', function (bot) {
    console.log('** The RTM api just closed');
    // you may want to attempt to re-open
});


/**
 * Core bot logic goes here!
 */
// Global Trivia Variables
let currentQuestion,
    remainingAnswers,
    correctAnswers = [],
    roundResults = [],
    allResults = [],
    timeout,
    gameActive = false;

/**
 * Entering a channel
 */
controller.on('bot_channel_join', function (bot, message) {
    bot.reply(message, "I'm here let's play!");
});

/**
 * Help Commands
 */
controller.hears('help', ['direct_mention', 'mention', 'direct_message'], function(bot, message) {
    bot.reply(message, 'Hello I\'m Trivia Bot. I\'m here to play Trivia Games with your Team!\n\nPlay Options include: `@triviabot play all | play general | play sports | play movies | play cm`\n`STOP` to end the current game\n`SCORE` to get the current or total scores\n\n_Each round (currently) only lasts 30 seconds. Just like Tyler_');
});

/**
 * Play Commands
 * example: @triviabot play all
 *
 * options:
 * play all
 * play general
 * play sports
 * play movies
 * play cm -- play critical mass related questions
 *
 */
controller.hears('(play all|play general|play sports|play movies|play cm)', ['direct_mention', 'mention', 'direct_message'], function(bot, message) { // TODO: make this take in multiple play options
    // set correct data
    var data = dataAll;
    gameActive = true;

    if (message.text === 'play general') {
        data = dataGeneral;
    } else if (message.text === 'play sports') {
        data = dataSports;
    } else if (message.text === 'play movies') {
        data = dataMovies;
    } else if (message.text ===  'play cm') {
        data = dataCm;
    }

    // get a random question from data
    currentQuestion = getRandomInt(data.questions.length);
    remainingAnswers = data.questions[currentQuestion].answers.map(x => x.toLowerCase());

    // reply to the message with a trivia question
    bot.reply(message, data.questions[currentQuestion].question);

    // start round
    // let the rest of the functionality for each round come from here:
    startRound(data, currentQuestion);

    // start a timer with end round callback
    // each timer will be 30 seconds for now
    timeout = setTimeout(function() {
        console.log('Times up.. remaining answers:', remainingAnswers);

        bot.reply(message, 'Time\'s up!');
        bot.reply(message, '*Round Scores:*');
        for (var i = 0; i <= roundResults.length - 1; i++) {
            bot.reply(message, '<@' + roundResults[i].userid + '> with *' + roundResults[i].score + ' points*');
        }

        // reset
        gameActive = false;
        currentQuestion = null;
        roundData = null;
    }, 30000);
});

/**
 * Stop Commands
 */
controller.hears(['STOP'], ['direct_mention', 'mention', 'ambient', 'direct_message'], function(bot, message) {
    if (gameActive) {
        gameActive = false;

        var leftovers = remainingAnswers;
        bot.reply(message, 'Round Stopped!');
        bot.reply(message, '*Round Scores:*');
        for (var i = 0; i <= roundResults.length - 1; i++) {
            bot.reply(message, '<@' + roundResults[i].userid + '> with *' + roundResults[i].score + ' points*');
        }
        // bot.reply(message, 'round stopped! \n here\'s what you missed:' + leftovers);

        // stop listening/clear answers
        remainingAnswers = [];

        // cancel current timeout
        clearTimeout(timeout);

    } else {
        bot.reply(message, 'No active game right now. Play a game by messaging "@triviabot play all".');
    }
});

/**
 * Display Score
 */
controller.hears(['SCORE', 'score'], ['direct_mention', 'mention', 'ambient', 'direct_message'], function(bot, message) {
    if (gameActive) {
        bot.reply(message, '*Round Scores:*');
        for (var i = 0; i <= roundResults.length - 1; i++) {
            bot.reply(message, '<@' + roundResults[i].userid + '> with *' + roundResults[i].score + ' points*');
        }
    } else {
        bot.reply(message, '_No current game being played_ \n Here are the *Total Scores:*');
        for (var i = 0; i <= allResults.length - 1; i++) {
            bot.reply(message, '<@' + allResults[i].userid + '> with *' + allResults[i].score + ' points*');
        }
    }
});

/**
 * Round Functionality
 */
function startRound(roundData, currentQuestion) {
    // if bot hears one of the answers.. track who answered it.. notify it was answered..
    controller.hears(remainingAnswers, ['ambient'], function (bot, message) {
        // correct answer
        // display data
        bot.reply(message, message.text + ' is Correct! <@' + message.user + '>');

        // keep score
        // check if user id matches
        // TODO: make this more dynamic for multiple arrays
        var pos = roundResults.map(function(e) { return e.userid; }).indexOf(message.user);
        var pos2 = allResults.map(function(e) { return e.userid; }).indexOf(message.user);
        if (pos != -1) {
            // match -- update score
            roundResults[pos].score += 1;
        } else {
            // no match -- add user to winners list!
            roundResults.push({userid: message.user, score: 1});
        }

        if (pos2 != -1) {
            // match -- update score
            allResults[pos].score += 1;
        } else {
            // no match -- add user to winners list!
            allResults.push({userid: message.user, score: 1});
        }

        // sort
        roundResults.sort(function(a, b){ return a.score - b.score; });
        allResults.sort(function(a, b){ return a.score - b.score; });

        // remove from remaining answers
        if (remainingAnswers.indexOf(message.text.toLowerCase()) > -1) {
            remainingAnswers.splice(remainingAnswers.indexOf(message.text.toLowerCase()), 1);
        }
    });

    // if bot hears same answer twice.. notify it has been answered by whom
    // controller.hears()
}


/**
 * AN example of what could be:
 * Any un-handled direct mention gets a reaction and a pat response!
 */
// controller.on('direct_message,mention,direct_mention', function (bot, message) {
//    bot.api.reactions.add({
//        timestamp: message.ts,
//        channel: message.channel,
//        name: 'robot_face',
//    }, function (err) {
//        if (err) {
//            console.log(err)
//        }
//        bot.reply(message, 'I heard you loud and clear boss.');
//    });
// });