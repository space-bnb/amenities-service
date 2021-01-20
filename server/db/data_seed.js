let amenity_names = ["Fast Wi-fi", "Cleaning services", "Local food options", "Pet care", "Child care", "Balcony",
"Electric vehicle charging", "Free parking", "Outdoor workspace", "Bicycle services", "Nursery", "Showers", 
"Event space", "Fitness center", "Food hall", "Karaoke", "Brunch options", "Creator lab", "Game room", 
"Pool tables", "Ping pong tables", "Recording studio", "Laundry", "Swimming pool", "Library", "Wellness room", 
"Production suite", "Printers", "Onsite staff", "Music rooms"]

let amenity_images = ["wifi", "cleaning", "food", "pets", "childcare", "balcony", "evc", "parking", "outdoor",
"bicycles", "nursery", "shower", "event", "fitness", "hall", "karaoke", "brunch", "creator", "game", "pool", 
"pingpong", "recording", "laundry", "swimming", "library", "wellness", "production", "printer", "staff", "music"]

let amenity_text = [
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
"Actually woke next level pop-up franzen"
]


let generate_amenities = () => {
  let amenities = [];
  for (let index = 0; index < 30; index++) {
    let item = {};
    item.id = index;
    item.name = amenity_names[index];
    item.description = amenity_text[index];
    item.img = `/assets/icons/${amenity_images[index]}`;
    amenities.push(item);
  }
  return amenities;
}

let amenities_seed = () => {
  let amenities = generate_amenities();
  let total_amenities = []
  for (let id = 0; id < 100; id++) {
    let item = { id, amenities: [] };
    let amenity_indexes = []
    let rand = Math.floor(Math.random() * 12 + 5);
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