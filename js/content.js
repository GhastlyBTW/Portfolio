// ============================================================
//  SITE COPY — edit all text here, no need to touch main.js
// ============================================================

const CONTENT = {

  // Rotating greeting shown on the index page
  greetings: [
    'Good day!',
    'Hello there.',
    'Welcome in.',
    'Nice to see you.',
    'Look around.',
    'Stay a while.',
    'Glad you\'re here.',
    'Loading screen means "creativity" in Korean.',
    'Hi, I\'m Branden.',
    'I make things.',
    '1-800-NEED-ART-DIRECTOR',
    'Aren\'t I so cool? (Yes, I am.)',
  ],

  // About page bio paragraphs (HTML allowed for italics/bold)
  about: {
    bio: [
      'Hey! My name is Branden Chi. I was born and raised in the middle of nowhere in Delaware (yes, it\'s a real place), and I\'m now working as an Art Director in the crazy city of New York. I\'ve loved all things art and design ever since I was a kid, and now I get to create cool and crazy things for a living! I originally started my journey with video games and computers, and naturally segued into digital design and now into advertising and art direction.',
      'When I was younger, I\'d see all these amazing pieces of art, design, and media and always thought to myself, <em>"damn, I wish I had thought of that,"</em> and that feeling is what really drives me to create. I would love to be able to create a piece of work that inspires at least one person to create for themselves.',
      'Besides games and art, I love creating things with my hands. I have about 20 different incomplete hobbies and many more to explore. Most recently, I\'ve picked up the guitar. Am I good? — No. But it\'s okay — I love being able to (try) playing some of my favorite songs, one of which is featured here on this about page! Other than music, I love to cook. My father loved cooking for the people he loved, and I naturally picked up that trait. So I\'m constantly cooking Korean food for my friends and family and baking chocolate cake for myself (lmk if you want some). Thanks for stopping by, and I hope you learned a little more about me :)',
    ],
  },

  // ── Projects ─────────────────────────────────────────────
  // Index must match the projects array order in main.js (0–5).
  // galleryText entries map to each {type:'text'} block in that
  // project's gallery, in order top-to-bottom.
  projects: [

    // 0 — Detention Watch Network
    {
      name: 'Detention Watch Network',
      category: 'Art Direction | Copy Writing',
      year: '2025',

      // Short blurb shown on the index card
      cardDescription: 'Each piece of media tells a story through the eyes of a victim of ICE. From a child being separated from their family, to an elderly man being beaten up. The visuals are made to invoke emotions of empathy to show the reality of the emotions these people are facing.',

      // Used for SEO meta description tag
      metaDescription: 'A social awareness campaign examining the documented concerns surrounding U.S. Immigration and Customs Enforcement. Each piece tells a story through the eyes of a victim of ICE — invoking empathy to show the reality of what these people are facing.',

      // Accordion — The brief
      brief: 'Create a social awareness campaign about a topic that is relevent in today\'s society',

      // Accordion — My insight
      insight: 'With Phones and social media, and all of the information that is available to us, it is easy to ignore these very real scenarios and stories that are happening as we speak. Individuals are not seeing the human impact of these situations.',

      // Accordion — My strategy
      strategy: 'Each piece of media — poster, social post, or video — tells a story through the eyes of an ICE victim, a story too many across the U.S. have heard before. The strategy: put these stories somewhere impossible to ignore.',

      // Accordion — Credits
      credits: 'Art Direction: Branden Chi | Copy Writing: Branden Chi | Design: Branden Chi | Photography: Midjourney',

      // Section headings + text for the split project layout
      sections: [
        {
          title: 'Wild Posting',
          text: 'We brought the stories of ICE victims to places where they\'re not so easy to ignore. Placed in high-foot-traffic metro areas, the wild postings and guerrilla installations were built to be seen by as many people as possible.',
        },
        {
          title: 'Social Media',
          text: 'We also created a series of social posts for Instagram, Facebook, and Twitter — designed to be reposted and circulated the way viral videos on this topic tend to spread. It\'s another avenue to reach as many people as possible.',
        },
        {
          title: 'Website',
          text: 'We sustained the campaign with a landing page for the Detention Watch Network — a hub where people can learn more about the cause and organization, as well as seek help if they or a loved one need assistance.',
        },
      ],
    },

    // 1 — Liquid Dove
    {
      name: 'Liquid Dove',
      category: 'Art Direction | Copy Writing | Packaging',
      year: '2025',

      cardDescription: 'Collaboration campaign with Liquid Death and Dove to bring edible Dove, and Liquid Death scented, hygiene products to market to disrupt and disturb viewers.',

      metaDescription: 'What happens when the calm meets the storm? The Liquid Death and Dove collaboration bridges two distinctly different audiences that value the same thing — through edible Dove products inspired by Liquid Death\'s bold flavors and fearless energy.',

      brief: 'Dove and Liquid Death needed a campaign that could combine two opposite brand identities — gentle skincare and edgy canned water — into a single collab: a limited-edition Dove bar scented like Liquid Death, and edible Liquid Death "snacks" made to look like bars of soap.',

      insight: 'Both brands sat on opposite ends of the spectrum. Content that provokes a strong reaction — shock, disbelief, even a little outrage — gets remembered and shared more than content that plays it safe.',

      strategy: 'Use that opposition directly. Combine the two brands into a product so unexpected that people stop and stare in disbelief — the contrast does the work of grabbing attention, and the "wacky" factor is what makes it stick.',

      credits: 'Art Direction: Branden Chi | Design: Branden Chi | Copy Writing: Matthew Payne | Packaging: Matthew Payne',

      sections: [
        { title: 'Rage Bait', text: 'The point of the visuals — and the product itself — was to make people stop and stare in utter disbelief. Something this strange, and the first question is always the same: why would anyone eat that? That\'s exactly the reaction we were after. Some people say all publicity is good publicity — we leaned into that philosophy hard, building imagery striking enough to make people recoil at the thought. The stronger the reaction, the harder it sticks, and sometimes that\'s what makes a damn good ad.' },
        { title: 'Packaging', text: 'The packaging\'s job was to replace the product it was mimicking entirely — not reference it, replace it. Since none of this was ever going to sit on a shelf, there was no need for the frills or bright lettering that usually do the selling. Instead, each product got to fully commit to the world it was borrowing from: the Liquid Death–scented Dove body wash packaged exactly like a can of Liquid Death, and the Liquid Death–flavored soap bars packaged exactly like a bar of Dove.' },
        { title: 'Press', text: 'A project this outrageous was bound to stir up controversy — in fact, there was A LOT to say. But we weren\'t just interested in what the media had to say — we asked all of you. We ran a survey on rage bait to see how people REALLY react to it. Safe to say — our idea worked.' },
      ],
    },

    // 2 — Emporio Armani - Unforgettable Night
    {
      name: 'Emporio Armani - Unforgettable Night',
      category: 'Art Direction | Copy Writing',
      year: '2025',

      cardDescription: 'Everyone knows that first dates come with nerves. A small boost of comfort can shift the whole night — scent delivers that edge.',

      metaDescription: 'Everyone knows that first dates come with nerves. A small boost of comfort can shift the whole night — scent delivers that edge. Fragrance is a subtle extension of you, often the first thing noticed and the last thing forgotten. Have an unforgettable night with Emporio Armani.',

      brief: 'Introduce Emporio Armani\'s new cologne line through a campaign built entirely on copy.',

      insight: 'Everyone knows that first dates come with nerves. A small boost of comfort can shift the whole night. Scent delivers that edge. Smelling good lifts your confidence and lingers in someone else\'s memory. Fragrance is a subtle extension of you, often the first thing noticed and the last thing forgotten. So have an unforgettable night with Emporio Armani.',

      strategy: 'Create a top 10 tips list for individuals to follow on first dates. Finish all 10, and receive a complimentary Emporio Armani cologne or perfume for a job well done.',

      credits: 'Art Direction: Branden Chi | Copy Writing: Branden Chi | Design: Branden Chi',

      sections: [
        { title: 'Tease', text: 'We\'ll tease with online polls asking netizens about how important smelling good is on a first date. Inviting everyone to weigh in and debate before the campaign drops.' },
        { title: 'Launch', text: 'We\'ll launch by partnering with top date-night restaurants across New York City to slip Emporio Armani\'s date tips onto custom cocktail napkins. Guests who collect every tip over the course of their evening can scan the final one to unlock a complimentary Emporio Armani fragrance voucher.' },
        { title: 'Sustain', text: 'We\'ll partner up with apps like Open Table to deliver these date tips with every booking confirmation and table-ready alert.' },
      ],
    },

    // 3 — Lemaire
    {
      name: 'Lemaire',
      category: 'Art Direction',
      year: '2025',

      cardDescription: 'Fast fashion generates 92 million tons of textile waste every year. Lemaire confronts that reality head-on — using striking visuals to make the scale of the crisis impossible to ignore.',

      metaDescription: 'Lemaire is rooted in sustainability — creating long-lasting pieces meant to be repaired, reworn, and recycled. This social awareness campaign confronts the 92 million tons of textile waste produced globally every year, using striking urban visuals to make the scale of the crisis impossible to ignore.',

      brief: 'Every year around 92 million tons of textile waste is produced globally. That is as heavy as roughly 300 Empire State Buildings — an entire city skyline. Lemaire is a brand rooted in sustainability and creating long-lasting pieces of clothing, meant to be repaired, reworn, and recycled.',

      insight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',

      strategy: 'Turn a skyscraper into a tower of textile waste to visually quantify how badly fast fashion has affected our world. Prime the market with fact-based visual billboards in urban environments, launch a surrealism commercial where a character navigates a world of fast fashion waste, and dress landmark skyscrapers in cities around the world with discarded clothing to symbolize the sheer volume created every year.',

      credits: 'Art Direction: Branden Chi | Design: Branden Chi',

      sections: [
        { title: 'Tease', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Launch', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Sustain', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      ],
    },

    // 4 — Polaroid - Frame the Moment
    {
      name: 'Polaroid - Frame the Moment',
      category: 'Art Direction | Copy Writing',
      year: '2025',

      cardDescription: 'In a world where travel lives and dies in camera rolls, moments disappear as fast as they\'re captured. Polaroid pushes back by making memories physical again.',

      metaDescription: 'With the rise of digital, film cameras have become irrelevant — but Polaroids are physical, personal, and immediate. This guerrilla campaign frames iconic landmarks around the world in the iconic Polaroid frame, turning tourist spots into living instant photos.',

      brief: 'Polaroid has been known for their iconic instant nostalgic photos. With the rise of digital, film cameras have become irrelevant in the marketplace today. Polaroids are physical, personal, and immediate — Polaroid keeps the moment with you.',

      insight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',

      strategy: 'Frame iconic tourist spots around the world with the iconic Polaroid photo frame as a guerrilla installation. Each frame carries a short handwritten caption, mimicking how people naturally jot notes on instant prints, doubling as postcard-style messages from the journey. The frames tell a loose travel narrative and showcase Polaroid\'s role in documenting real moments, anywhere in the world.',

      credits: 'Art Direction: Branden Chi | Copy Writing: Branden Chi | Design: Branden Chi',

      sections: [
        { title: 'Campaign', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'World Tour', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      ],
    },

    // 5 — Photography: Personal (index card only — no detail page)
    {
      name: 'Photography: Personal',
      category: 'Digital & Film Photography',
      year: '2021 - Present',

      cardDescription: 'A collection of my photography that makes me feel fulfilled as an artist and creator. Filled with works from my passion for cars to travels, this gallery is a peek into what makes me who I am.',

      metaDescription: 'Personal photography by Branden Chi spanning digital car photography, street photography, and 35mm film — shot on Sony A7C and Canon Sureshot.',

      brief: '',
      insight: '',
      strategy: '',
      credits: '',
      galleryText: [],
    },

  ],

};
