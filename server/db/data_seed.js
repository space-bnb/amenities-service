const amenities = [
{ id: 0,
  name: 'Fast Wi-fi',
  description:
   'Small batch 90\'s squid quinoa thundercats stumptown beard dreamcatcher meggings microdosing',
  img: 'wifi' },
{ id: 1,
  name: 'Cleaning services',
  description:
   'Vice kinfolk meggings synth 3 wolf moon, franzen forage enamel pin taxidermy heirloom humblebrag tote bag',
  img: 'cleaning' },
{ id: 2,
  name: 'Local food options',
  description:
   'Flannel farm-to-table shaman pitchfork, edison bulb marfa polaroid pour-over narwhal irony readymade small batch',
  img: 'food' },
{ id: 3,
  name: 'Pet care',
  description:
   'Snackwave hell of photo booth you probably haven\'t heard of them ugh',
  img: 'pets' },
{ id: 4,
  name: 'Child care',
  description: 'Hell of biodiesel blue bottle fixie dreamcatcher disrupt',
  img: 'childcare' },
{ id: 5,
  name: 'Balcony',
  description: 'Swag brunch jianbing activated charcoal copper mug',
  img: 'balcony' },
{ id: 6,
  name: 'Electric vehicle charging',
  description:
   'Polaroid cronut YOLO fixie pour-over pabst tumblr actually franzen palo santo blue bottle wolf four dollar toast',
  img: 'evc' },
{ id: 7,
  name: 'Free parking',
  description:
   'Freegan franzen scenester air plant microdosing four dollar toast',
  img: 'parking' },
{ id: 8,
  name: 'Outdoor workspace',
  description:
   'Affogato schlitz marfa humblebrag cred cloud bread copper mug celiac pabst',
  img: 'outdoor' },
{ id: 9,
  name: 'Bicycle services',
  description:
   'Blue bottle pitchfork cloud bread hexagon viral, pickled artisan fixie poutine aesthetic',
  img: 'bicycles' },
{ id: 10,
  name: 'Nursery',
  description:
   'Jean shorts kombucha drinking vinegar, small batch taiyaki hella fashion axe mug quinoa cornhole activated charcoal',
  img: 'nursery' },
{ id: 11,
  name: 'Showers',
  description:
   'Squid church-key glossier jianbing, iPhone DIY drinking vinegar cloud bread salvia man bun polaroid narwhal prism',
  img: 'shower' },
{ id: 12,
  name: 'Event space',
  description:
   'Listicle unicorn franzen, af waistcoat bespoke venmo cardigan lyft disrupt taxidermy crucifix keffiyeh hexagon',
  img: 'event' },
{ id: 13,
  name: 'Fitness center',
  description:
   'Succulents sustainable distillery scenester hella, locavore gentrify raclette vinyl stumptown knausgaard',
  img: 'fitness' },
{ id: 14,
  name: 'Food hall',
  description:
   'Brunch live-edge narwhal beard, edison bulb lo-fi poutine fashion axe XOXO woke',
  img: 'hall' },
{ id: 15,
  name: 'Karaoke',
  description:
   'Raclette succulents green juice raw denim aesthetic la croix tumeric, forage occupy pickled selfies vaporware',
  img: 'karaoke' },
{ id: 16,
  name: 'Brunch options',
  description:
   'Vice readymade unicorn taxidermy banh mi gastropub chillwave',
  img: 'brunch' },
{ id: 17,
  name: 'Creator lab',
  description:
   'Semiotics kickstarter wolf raw denim four loko, subway tile bitters kinfolk viral portland franzen flannel',
  img: 'creator' },
{ id: 18,
  name: 'Game room',
  description:
   'Lumberjack polaroid neutra viral hexagon twee celiac lo-fi shabby chic green juice pickled',
  img: 'game' },
{ id: 19,
  name: 'Pool tables',
  description:
   'Health goth af brooklyn schlitz, woke ramps echo park seitan aesthetic occupy pour-over photo booth small batch',
  img: 'pool' },
{ id: 20,
  name: 'Ping pong tables',
  description: 'Celiac church-key succulents heirloom fashion axe',
  img: 'pingpong' },
{ id: 21,
  name: 'Recording studio',
  description:
   'Chia vinyl etsy fashion axe jianbing locavore bicycle rights DIY banjo seitan try-hard PBR&B shabby chic',
  img: 'recording' },
{ id: 22,
  name: 'Laundry',
  description:
   'Salvia readymade mixtape lumbersexual literally jianbing actually mumblecore',
  img: 'laundry' },
{ id: 23,
  name: 'Swimming pool',
  description:
   'Vexillologist trust fund gochujang, 8-bit shoreditch cloud bread marfa viral',
  img: 'swimming' },
{ id: 24,
  name: 'Library',
  description:
   'Tumblr post-ironic enamel pin brooklyn sriracha XOXO vexillologist waistcoat leggings ennui normcore',
  img: 'library' },
{ id: 25,
  name: 'Wellness room',
  description: 'Leggings vaporware banjo retro',
  img: 'wellness' },
{ id: 26,
  name: 'Production suite',
  description:
   'Waistcoat brooklyn offal neutra kogi la croix, pabst beard skateboard helvetica pok pok tbh',
  img: 'production' },
{ id: 27,
  name: 'Printers',
  description:
   'Banjo food truck thundercats pop-up ramps tumeric woke pinterest tumblr copper mug palo santo selvage fixie',
  img: 'printer' },
{ id: 28,
  name: 'Onsite staff',
  description: 'Actually woke next level pop-up franzen',
  img: 'staff' },
{ id: 29,
  name: 'Music rooms',
  description: "Tousled polaroid shoreditch hammock humblebrag green juice glossier copper mug",
  img: 'music' }
]

const amenity_names = ["Fast Wi-fi", "Cleaning services", "Local food options", "Pet care", "Child care", "Balcony",
"Electric vehicle charging", "Free parking", "Outdoor workspace", "Bicycle services", "Nursery", "Showers",
"Event space", "Fitness center", "Food hall", "Karaoke", "Brunch options", "Creator lab", "Game room",
"Pool tables", "Ping pong tables", "Recording studio", "Laundry", "Swimming pool", "Library", "Wellness room",
"Production suite", "Printers", "Onsite staff", "Music rooms"]

const amenity_images = ["wifi", "cleaning", "food", "pets", "childcare", "balcony", "evc", "parking", "outdoor",
"bicycles", "nursery", "shower", "event", "fitness", "hall", "karaoke", "brunch", "creator", "game", "pool",
"pingpong", "recording", "laundry", "swimming", "library", "wellness", "production", "printer", "staff", "music"]

const amenity_text = [
"Small batch 90's squid quinoa thundercats stumptown beard dreamcatcher meggings microdosing",
"Vice kinfolk meggings synth 3 wolf moon, franzen forage enamel pin taxidermy heirloom humblebrag tote bag",
"Flannel farm-to-table shaman pitchfork, edison bulb marfa polaroid pour-over narwhal irony readymade small batch",
"Snackwave hell of photo booth you probably haven't heard of them ugh",
"Hell of biodiesel blue bottle fixie dreamcatcher disrupt",
"Swag brunch jianbing activated charcoal copper mug",
"Polaroid cronut YOLO fixie pour-over pabst tumblr actually franzen palo santo blue bottle wolf four dollar toast",
"Freegan franzen scenester air plant microdosing four dollar toast",
"Affogato schlitz marfa humblebrag cred cloud bread copper mug celiac pabst",
"Blue bottle pitchfork cloud bread hexagon viral, pickled artisan fixie poutine aesthetic",

"Jean shorts kombucha drinking vinegar, small batch taiyaki hella fashion axe mug quinoa cornhole activated charcoal",
"Squid church-key glossier jianbing, iPhone DIY drinking vinegar cloud bread salvia man bun polaroid narwhal prism",
"Listicle unicorn franzen, af waistcoat bespoke venmo cardigan lyft disrupt taxidermy crucifix keffiyeh hexagon",
"Succulents sustainable distillery scenester hella, locavore gentrify raclette vinyl stumptown knausgaard",
"Brunch live-edge narwhal beard, edison bulb lo-fi poutine fashion axe XOXO woke",
"Raclette succulents green juice raw denim aesthetic la croix tumeric, forage occupy pickled selfies vaporware",
"Vice readymade unicorn taxidermy banh mi gastropub chillwave",
"Semiotics kickstarter wolf raw denim four loko, subway tile bitters kinfolk viral portland franzen flannel",
"Lumberjack polaroid neutra viral hexagon twee celiac lo-fi shabby chic green juice pickled",
"Health goth af brooklyn schlitz, woke ramps echo park seitan aesthetic occupy pour-over photo booth small batch",

"Celiac church-key succulents heirloom fashion axe",
"Chia vinyl etsy fashion axe jianbing locavore bicycle rights DIY banjo seitan try-hard PBR&B shabby chic",
"Salvia readymade mixtape lumbersexual literally jianbing actually mumblecore",
"Vexillologist trust fund gochujang, 8-bit shoreditch cloud bread marfa viral",
"Tumblr post-ironic enamel pin brooklyn sriracha XOXO vexillologist waistcoat leggings ennui normcore",
"Leggings vaporware banjo retro",
"Waistcoat brooklyn offal neutra kogi la croix, pabst beard skateboard helvetica pok pok tbh",
"Banjo food truck thundercats pop-up ramps tumeric woke pinterest tumblr copper mug palo santo selvage fixie",
"Actually woke next level pop-up franzen",
"Tousled polaroid shoreditch hammock humblebrag green juice glossier copper mug"
]

const generate_amenities = () => {
  let amenities = [];
  for (let index = 1; index <= 30; index++) {
    let item = {};
    item.id = index;
    item.name = amenity_names[index];
    item.description = amenity_text[index];
    item.img = amenity_images[index];
    amenities.push(item);
  }
  return amenities;
}

const amenities_seed = () => {;
  let total_amenities = []
  for (let id = 1; id <= 100; id++) {
    let item = { id, amenities: [] };
    let amenity_indexes = []
    let rand = Math.floor(Math.random() * 8 + 5);
    while (amenity_indexes.length < rand) {
      let randIndex = Math.floor(Math.random() * 30);
      if (!amenity_indexes.includes(randIndex)) {
        amenity_indexes.push(randIndex);
      }
    }
    for (let index of amenity_indexes) {
      item.amenities.push(amenities[index]);
    }
    total_amenities.push(item);
  }
  return total_amenities;
}

module.exports.amenities_seed = amenities_seed;