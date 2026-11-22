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

  // Rotating quip in the top-right of the Photography page —
  // a new one is picked every time the page is opened or refreshed
  photoQuips: [
    'Everybody look at me i shoot 35mm!',
    'Sony > Canon, argue with the wall.',
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
  // Index must match the projects array order in main.js (0–3).
  // shortName is the condensed label for the bottom nav bar.
  // galleryText entries map to each {type:'text'} block in that
  // project's gallery, in order top-to-bottom.
  projects: [

    // 0 — Detention Watch Network
    {
      name: 'Detention Watch Network — Through Their Eyes',
      shortName: 'DWN',   // used in the bottom nav bar
      category: 'Art Direction | Copy Writing',
      year: '2025',

      // Short blurb shown on the index card
      cardDescription: 'Each piece of media tells a story through the eyes of a victim of ICE. From a child being separated from their family, to an elderly man being beaten up. The visuals are made to invoke emotions of empathy to show the reality of the emotions these people are facing.',

      // Used for SEO meta description tag
      metaDescription: 'A social awareness campaign examining the documented concerns surrounding U.S. Immigration and Customs Enforcement. Each piece tells a story through the eyes of a victim of ICE — invoking empathy to show the reality of what these people are facing.',

      // Accordion — The brief
      brief: 'Detention Watch Network has spent decades fighting immigration detention through reports, research and policy work — but data alone doesn\'t make people stop and feel it. DWN needed a campaign that embodied its message in a way it had never tried before: one that set the statistics aside and put the public face to face with the people living it.',

      // Accordion — My insight
      insight: 'With phones, social media, and the abundance of information that is available to us today, it is easy to ignore very real scenarios and stories that are happening as we speak. Individuals are not seeing the human impact of these situations.',

      // Accordion — My strategy
      strategy: 'The strategy was to take the very real stories happening to thousands of people across America every day and put them in places that are almost impossible to ignore. We slapped wild posting posters up in high-traffic areas and along commuter routes in cities throughout the United States, then paired the postings and billboards with live audio from ICE detention moments captured on camera. Together, the dramatic imagery, real stories, and unforgettable audio created a 360-degree picture of what thousands of people in this country go through every day — for everyone who passes.',

      // Accordion — Credits
      credits: 'Art Direction: Branden Chi | Copy Writing: Branden Chi | Design: Branden Chi | Photography: Midjourney | Video: Seedance 2.0 & Magnific AI',

      // Section headings + text for the split project layout
      sections: [
        {
          title: 'Wild Posting',
          text: 'The visuals show realities many individuals face in the wake of ICE detentions. The body copy is pulled from quotes of real people: children, husbands, fathers, wives, mothers. The posters would be paired with speakers playing audio of recorded ICE detentions from phones, body cameras, and more, so people can not only see but hear the visceral emotion of these situations. All to tell a story that no one can ignore.',
        },
        {
          title: 'Audible Billboards',
          text: 'Same concept as the wild postings. These would be placed in high-traffic electronic billboard areas. Think subways, city streets, etc. This particular placement is from inside the Oculus at the World Trade Center in NYC, which sees approximately 200,000 people in foot traffic every day.',
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

    // 1 — Polaroid — Frame the Moment
    {
      name: 'Polaroid — Frame the Moment',
      shortName: 'Polaroid',   // used in the bottom nav bar
      category: 'Art Direction | Copy Writing',
      year: '2025',

      cardDescription: 'In a world where travel lives and dies in camera rolls, moments disappear as fast as they\'re captured. Polaroid pushes back by making memories physical again.',

      metaDescription: 'With the rise of digital, film cameras have become irrelevant — but Polaroids are physical, personal, and immediate. This guerrilla campaign frames high-traffic scenic spots across New York City in the iconic Polaroid frame, turning everyday views into living instant photos.',

      brief: 'With the release of the Go Gen 3, Polaroid needed a new way to promote a camera built for travel. We wanted New Yorkers to see the Go Gen 3 as a more permanent, meaningful way to capture memories — not another phone photo you\'d never look at twice.',

      insight: 'Polaroid has been known for their iconic instant nostalgic photos. With the rise of digital, film cameras have become irrelevant in the marketplace today. Polaroids are physical, personal, and immediate — Polaroid keeps the moment with you.',

      strategy: 'Frame high-traffic scenic spots around New York City with the iconic Polaroid photo frame as a guerrilla installation. Each frame carries a short handwritten caption, mimicking how people naturally jot notes on instant prints, doubling as postcard-style messages from the journey. The frames tell a loose travel narrative and showcase Polaroid\'s role in documenting real moments, right here in the city.',

      credits: 'Art Direction: Branden Chi | Copy Writing: Branden Chi | Design: Branden Chi | Photography: Branden Chi',

      sections: [
        { title: 'Campaign', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Expanding the Campaign', text: 'Frame the Moment doesn\'t stop at the installations. We bring it into people\'s everyday lives through social media and wild postings — traditional media that sits alongside the guerrilla frames and spotlights the precious moments our users have captured on their Go Gen 3.' },
      ],
    },

    // 2 — Dove
    {
      name: 'Dove — Done with Gentle',
      shortName: 'Dove',   // used in the bottom nav bar
      category: 'Art Direction | Concept | Copywriting',
      year: '2025',

      cardDescription: 'The softest brand on the shelf stops playing nice, in a city that never did.',

      metaDescription: 'Dove — Done with Gentle: the softest brand on the shelf stops playing nice, in a city that never did. People eat Dove, and we don\'t explain why.',

      // Custom labels for the intro blocks (instead of Brief / Insight / Strategy)
      introBlocks: [
        { label: 'Brief',    text: 'Dove is one of the most recognized names in personal care. Gen Z is no stranger to Dove, but with fresh new brands popping up left and right, Dove needed a way to put itself back at the top of mind for a younger audience.' },
        { label: 'Insight',  text: 'Gentle used to be Dove\'s edge. Now that a gentle, caring tone is the category norm, Dove blends in with everyone else.' },
        { label: 'The Idea', text: 'Fill the city with provocative, un-gentle imagery that makes people question what they\'re seeing and why, and turn that reaction into earned media.' },
      ],

      brief: '',
      insight: '',
      strategy: '',
      credits: '',   // no credits — the Credits button is hidden

      sections: [
        { title: 'How It Works', text: 'Across New York, billboards and posters show people calmly biting into a bar of Dove, with nothing but the logo. No headline, no reassurance, just the question everyone asks out loud: why are they eating Dove? Then the bars turn up in bodega freezers, white chocolate over vanilla ice cream in the classic Dove box, for people to find. Dove\'s done being the brand that tells you to be careful.' },
      ],
    },

    // 3 — Photography: Personal (index card only — no detail page)
    {
      name: 'Photography: Personal',
      shortName: 'Photography',   // used in the bottom nav bar
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
