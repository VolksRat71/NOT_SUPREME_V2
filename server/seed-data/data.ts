function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: 'Santa Cruz Hi Top',
    description:
      "Clash of the titans. Vans, the first skate shoe company, and Santa Cruz, the longest running skateboard company, team up to bring us these Sk8-Hi Pro black and white skate shoes. The classic Vans silhouette features Santa Cruz's iconic dot logo at the sidewalls, with the inner ankles in Kanji script, and the outer ankles in English. Santa Cruz script along the outer foxing tape tops off the look of these super comfortable shoes, which feature Vans' new Pop Cush insole to give your feet a ton of impact support",
    photo: {
      id: '605025682427fb325c0e7097',
      filename: 'ojrg0k1fnqjxvgiozchy.jpg',
      originalFilename: 'ojrg0k1fnqjxvgiozchy.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: 'dc544dd9eac73639dc981908eabd735e',
        public_id: 'NotSupremeV2/605025682427fb325c0e7097',
        version: 1615865191,
        version_id: '4930ee59d7cd2f7aa2df33c74930ca24',
        signature: '211c15a0ade72620a7abbab1e088f79d52328671',
        width: 500,
        height: 594,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 28605,
        type: 'upload',
        etag: 'a688101b28f7f47fd805010d7ea15ba4',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615865191/NotSupremeV2/605025682427fb325c0e7097.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615865191/NotSupremeV2/605025682427fb325c0e7097.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Santa Cruz Hi Top',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 8995,
    __v: 0,
  },
  {
    name: "Matt Stikker's Bad Friends",
    description:
      'Display your love for Matt Stikker\'s artwork in the Good Times Bad Friends long sleeve tee shirt from Lurking Class By Sketchy Tank. A black, 100% cotton long sleeve tee shirt features a bold, white graphic of a bunch of zombies, skeletons, hooded Grim Reapers partying on the back with "Good Times Bad Friends" text surrounding. Each arm is then finished with broken branches, thorns and eyeballs for a dramatic touch.',
    photo: {
      id: '605025c22427fb325c0e709a',
      filename: 'aolkb2efs5f3wbdfcgnv.jpg',
      originalFilename: 'aolkb2efs5f3wbdfcgnv.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '1f37dd18214b7d081a13d028f5a2cd39',
        public_id: 'NotSupremeV2/605025c22427fb325c0e709a',
        version: 1615865281,
        version_id: '0729905d4d46c8611e2331080ca27e1a',
        signature: '75b19e889e553f3650f91db6864db7caa59ee50a',
        width: 1000,
        height: 1188,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 91164,
        type: 'upload',
        etag: 'ad04f2239e07dbf9aa46c060342fa3aa',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615865281/NotSupremeV2/605025c22427fb325c0e709a.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615865281/NotSupremeV2/605025c22427fb325c0e709a.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: "Matt Stikker's Bad Friends",
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 3795,
    __v: 0,
  },
  {
    name: 'Thrasher Roses',
    description:
      'Represent your love for Thrasher with the Roses Black Boyfriend Fit T-Shirt. With a white script logo screen-printed across the chest with rose images throughout, this tee is a great way to show your love for skateboard style in floral fashion.',
    photo: {
      id: '6050260e2427fb325c0e709d',
      filename: 'df8vt0b0gs3omemzhbna.jpg',
      originalFilename: 'df8vt0b0gs3omemzhbna.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '37683f0d0c26e1dbb5cbc4b976aa51d7',
        public_id: 'NotSupremeV2/6050260e2427fb325c0e709d',
        version: 1615865358,
        version_id: 'e70c9d642ec9890840b960f86e04a638',
        signature: 'cfc34d841e1bf1e9965636040062c19511a7ea32',
        width: 1000,
        height: 1184,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 69182,
        type: 'upload',
        etag: '2138553319c4b45d70b407d27dadfe93',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615865358/NotSupremeV2/6050260e2427fb325c0e709d.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615865358/NotSupremeV2/6050260e2427fb325c0e709d.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Thrasher Roses',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 2995,
    __v: 0,
  },
  {
    name: 'Hoonigan Cali Plate',
    description:
      "Throw it back to the good ol' days with the Cali OG license plate from Hoonigan! The blue-on-yellow colorway evokes those classic California license plate design, ensuring your room has some excellent, retro style.",
    photo: {
      id: '605026602427fb325c0e70a1',
      filename: 'eocsxyljgjp9oeow0ejn.jpg',
      originalFilename: 'eocsxyljgjp9oeow0ejn.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '77400f2e4cc67a33daee11a0e90429d3',
        public_id: 'NotSupremeV2/605026602427fb325c0e70a1',
        version: 1615865440,
        version_id: '92dfb3c796ebba7cc7c6f53e5bcf0586',
        signature: 'f81fbf5286e058e2ad114c231e13a912805f27ea',
        width: 1000,
        height: 1190,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 61706,
        type: 'upload',
        etag: '1327e09419b4b4d121307c5d190ab48f',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615865440/NotSupremeV2/605026602427fb325c0e70a1.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615865440/NotSupremeV2/605026602427fb325c0e70a1.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Hoonigan Cali Plate',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 1495,
    __v: 0,
  },
  {
    name: 'Lurking Key Tray',
    description:
      'Add a functional accent to your room or apartment with the Lurking Class by Sketchy Tank Crack black key tray. This mostly black tray comes in an acrylic construction for durability and the image of a skull is placed at the center surrounded by horizontal line detailing for a bold look and classic pattern detailing.',
    photo: {
      id: '605026bb2427fb325c0e70a4',
      filename: 'it3ay9cip8jl4dkcxys2.jpg',
      originalFilename: 'it3ay9cip8jl4dkcxys2.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '92f4fb9d8f6b042ea8c3ca825dc53b3a',
        public_id: 'NotSupremeV2/605026bb2427fb325c0e70a4',
        version: 1615865530,
        version_id: 'c3bc7306542cd8a4c0c3250458aefbce',
        signature: '9b578039c5757424c17fcbfba21c2b6354ab3e11',
        width: 1000,
        height: 1192,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 84513,
        type: 'upload',
        etag: 'db0d33e423f32807e2b4e1ed79cdafd6',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615865530/NotSupremeV2/605026bb2427fb325c0e70a4.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615865530/NotSupremeV2/605026bb2427fb325c0e70a4.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Lurking Key Tray',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 1999,
    __v: 0,
  },
  {
    name: 'Lurking Class Hoody',
    description:
      'Grab an edgy new addition to your Lurking Class by Sketchy Tank collection with the Don\'t Pray For Me black hoodie. This black hoodie features a unique combination of embroidered and screen-printed graphics throughout the chest, with "Don\'t pray for me" text screen-printed down the right sleeve to complete the dooming look. The cotton-poly blended construction ensure this hoodie is just as comfortable as it is stylish.',
    photo: {
      id: '605026f92427fb325c0e70a7',
      filename: 'nuc6jau6wgexvplghlyy.jpg',
      originalFilename: 'nuc6jau6wgexvplghlyy.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: 'df8c860a85f0626ac38ae2e31c433f78',
        public_id: 'NotSupremeV2/605026f92427fb325c0e70a7',
        version: 1615865593,
        version_id: 'a8b0b9cf92e5bc92c7d7939de9e6eeb5',
        signature: 'f8b5e8696708152389cf6f95dbb5c0643131ca65',
        width: 1000,
        height: 1192,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 44307,
        type: 'upload',
        etag: 'ca2ae2f1f7016457110f129eefdf1767',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615865593/NotSupremeV2/605026f92427fb325c0e70a7.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615865593/NotSupremeV2/605026f92427fb325c0e70a7.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Lurking Class Hoody',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 4999,
    __v: 0,
  },
  {
    name: 'Probe Purple Tee',
    description:
      "Pay homage to the sly, up-to-no-good, feline nermal with the Probe purple tie dye pocket t-shirt from RIPNDIP. This t-shirt comes in a purple tie dye treatment for some vibrant color featuring a graphic of lord alien abducting four nermals up into lord aliens UFO to take them where the sun don't shine and the birdies are aren't allow to be flipped, which is god knows where but no one wants to be there.",
    photo: {
      id: '60502a9edc24a72d28bec1ae',
      filename: 'es56ulvcwhi5n3flrips.jpg',
      originalFilename: 'es56ulvcwhi5n3flrips.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '678f845f1230539334480cc7fb15ed11',
        public_id: 'NotSupremeV2/60502a9edc24a72d28bec1ae',
        version: 1615866526,
        version_id: 'eee90ac85a3b34154b14e07819352792',
        signature: 'd78edbce9fab737ff726b5358a8fbea390e461c6',
        width: 1000,
        height: 1194,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 57187,
        type: 'upload',
        etag: '3597ea0b19c3c33d60bf25a20e821c5f',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615866526/NotSupremeV2/60502a9edc24a72d28bec1ae.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615866526/NotSupremeV2/60502a9edc24a72d28bec1ae.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Probe Purple Tee',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 3695,
    __v: 0,
  },
  {
    name: 'Vans Old Skool',
    description:
      "Perhaps some elegance will do your feet well. Find out for sure with the Old Skool rose dawn and white skate shoes from Vans! A rose pink upper in suede and canvas is complemented by the white leather side logo and black foxing stripe, making shoes a uniquely striking update to one of Vans' most enduring styles. And if the looks don't win you over enough, these sick kicks are given a cushioned insole and Vans' signature flexible vulcanized sole, combining to give your feet some serious all-day comfort.",
    photo: {
      _id: '60502ac9dc24a72d28bec1b2',
      filename: 'pki7pnllkhvgjajdoste.jpg',
      originalFilename: 'pki7pnllkhvgjajdoste.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '0a2e9fd2c1283798bc5aac24dcab4f6e',
        public_id: 'NotSupremeV2/60502ac8dc24a72d28bec1b1',
        version: 1615866568,
        version_id: '4f819fc1a3df69de3bc18a439e5ba07d',
        signature: 'efe11bc08788c80235b36119f8135e86539197a4',
        width: 1000,
        height: 1186,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 30510,
        type: 'upload',
        etag: 'b7159395b817602bb8b82acbbd22bc29',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615866568/NotSupremeV2/60502ac8dc24a72d28bec1b1.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615866568/NotSupremeV2/60502ac8dc24a72d28bec1b1.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Vans Old Skool',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 5995,
    __v: 0,
  },
  {
    name: 'Champion Reversable',
    description:
      'The "King of Sweatshirts" lives up to the royal title with the Reverse Weave Embroidered C black hoodie. Champion\'s iconic C logo is embroidered at the chest for some classic, athleisure style. The signature Reverse Weave construction helps retain the shape longer than a conventional weave, making this sweatshirt worthy of its regal name.',
    photo: {
      _id: '60502afddc24a72d28bec1b5',
      filename: 'rqzuncokwyxwvlxne6h0.jpg',
      originalFilename: 'rqzuncokwyxwvlxne6h0.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: 'f5b101fa478b568583baece6172c2f73',
        public_id: 'NotSupremeV2/60502afcdc24a72d28bec1b4',
        version: 1615866619,
        version_id: '2d93c4efa7b91f1bef53cf7da1242e5c',
        signature: 'cf227885cf101453bb65828efac6b670abaa5b77',
        width: 1000,
        height: 1186,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 46272,
        type: 'upload',
        etag: '1106938d6b44be3c0e97513e212806aa',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615866619/NotSupremeV2/60502afcdc24a72d28bec1b4.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615866619/NotSupremeV2/60502afcdc24a72d28bec1b4.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Champion Reversable',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 5995,
    __v: 0,
  },
  {
    name: 'Cookies Backpack',
    description:
      'Pull up to the function in some discrete style with the Smell Proof Orion backpack from Cookies. This backpack comes built with smell proof technology and double zippered compartments to make sure any smelly dankness stays in the shadows while the translucent embroidered Cookies patch on front adds some subtle branded flair so you can still light up the room as you plug about your day while keeping your items under wraps in this 27 liter perfect sized backpack.',
    photo: {
      _id: '60502b27dc24a72d28bec1b8',
      filename: 'd0idnrxjanyzgo3ljg5i.jpg',
      originalFilename: 'd0idnrxjanyzgo3ljg5i.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: 'b1f3294f2cffd2e633d1f630462eac99',
        public_id: 'NotSupremeV2/60502b27dc24a72d28bec1b7',
        version: 1615866662,
        version_id: 'e0e03b701a2a1bba2463d5a48c571ff2',
        signature: '4a5e3cfc11a34ced64a8385f8c57ea536f89526b',
        width: 1000,
        height: 1188,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 67766,
        type: 'upload',
        etag: '69939ff26502d4c53e598d29bb7c2621',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615866662/NotSupremeV2/60502b27dc24a72d28bec1b7.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615866662/NotSupremeV2/60502b27dc24a72d28bec1b7.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Cookies Backpack',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 8995,
    __v: 0,
  },
  {
    name: 'Thrasher Godzilla',
    description:
      'Pick up a legendary new hoodie for your collection with the Godzilla red hoodie from Thrasher. Featuring faux-Japanese Thrasher logo graphics at the chest in white for some striking contrast to the red colorway, this red sweatshirt has a subversive, international look. With a comfortable cotton-poly construction and adjustable drawstring hood, you can be outfitted in great, comfortable style.',
    status: 'AVAILABLE',
    price: 6795,
    __v: 0,
    photo: {
      _id: '60502b7fdc24a72d28bec1bc',
      filename: 'qqps1ktue48oxoddjdpo.jpg',
      originalFilename: 'qqps1ktue48oxoddjdpo.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '98bf52c5499271dc65a90c62cbc7e97a',
        public_id: 'NotSupremeV2/60502b7fdc24a72d28bec1bb',
        version: 1615866750,
        version_id: '169f4887d1fa439de458c628311b99b6',
        signature: '1cc441751d8610ccc326c405937dcf4fb671ab0a',
        width: 1000,
        height: 1192,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 66681,
        type: 'upload',
        etag: '4d8636414e899c199d0036a18fc592e4',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615866750/NotSupremeV2/60502b7fdc24a72d28bec1bb.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615866750/NotSupremeV2/60502b7fdc24a72d28bec1bb.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Thrasher Godzilla',
      __v: 0,
    },
  },
  {
    name: 'Go Away Classic Shirt',
    description:
      'When you\'ve had enough and just want to be alone, the Go Away black, white and multicolor long sleeve polo shirt from Salem7 is the perfect way to let your clothes do the talking. This rugby-style shirt features a black and white blocked construction at the body, with the text, "Go away" embroidered at the chest. The red, yellow and blue sleeves offer a contrasting, somewhat mixed-up look, while the classic fold-down collar give the shirt a touch of old-school class.',
    status: 'AVAILABLE',
    price: 4995,
    __v: 0,
    photo: {
      _id: '60502bafdc24a72d28bec1bf',
      filename: 'xkzjgcgpayjb97rs8efc.jpg',
      originalFilename: 'xkzjgcgpayjb97rs8efc.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '2580e59ab84cb24f8f52ec8499cb0993',
        public_id: 'NotSupremeV2/60502bafdc24a72d28bec1be',
        version: 1615866798,
        version_id: 'dd1be87e3853558b2df2d2713718055f',
        signature: '7315d92bbed6ae8eabf598149be4c6da3d533af2',
        width: 1000,
        height: 1186,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 63431,
        type: 'upload',
        etag: '4720732a6cd0263a3884e8cbd86b9629',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615866798/NotSupremeV2/60502bafdc24a72d28bec1be.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615866798/NotSupremeV2/60502bafdc24a72d28bec1be.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Go Away Classic Shirt',
      __v: 0,
    },
  },
  {
    name: 'Empyre Rose Hoody',
    description:
      'For classic floral style and a bold splash of color, reach for the Empyre Fredia Rose light pink & lavender hoodie. An embroidered skeleton hand holding a rose sits at the left chest and screen-printed roses lining both sleeves provide additional floral style. Mostly pink throughout and featuring a fleece interior lining for tons of comfort, this is destined to be your new go-to hoodie.',
    status: 'AVAILABLE',
    price: 3495,
    __v: 0,
    photo: {
      _id: '60502bf9dc24a72d28bec1c2',
      filename: 'qah2fjwdue8ihd3vac9w.jpg',
      originalFilename: 'qah2fjwdue8ihd3vac9w.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: 'e17a03c21bcb858b1a09b2c9935fe589',
        public_id: 'NotSupremeV2/60502bf8dc24a72d28bec1c1',
        version: 1615866872,
        version_id: '732e63b196672b12cf51319137e99b1f',
        signature: 'fcc5272193325494d0f1477f3a1b0f8a7fcfa97c',
        width: 1000,
        height: 1184,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 55718,
        type: 'upload',
        etag: '79b3e682291347adf3cc69d80994cec4',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615866872/NotSupremeV2/60502bf8dc24a72d28bec1c1.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615866872/NotSupremeV2/60502bf8dc24a72d28bec1c1.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Empyre Rose Hoody',
      __v: 0,
    },
  },
  {
    name: 'Fun Guy Hoody',
    description:
      "Equal parts comfortable and trippy, the Magic Fungi black hoodie from A-Lab is a must-have addition to any warlock's wardrobe. This black hoodie features a cotton-polyester blended construction and a soft fleece lining for comfort. Six mushrooms are screen-printed at the left chest, while the back displays a magical graphic of a wizard casting spells over his mushroom garden. An adjustable drawstring hood and kangaroo pocket complete the design of this fun style from A-Lab.",
    photo: {
      _id: '60502c25dc24a72d28bec1c4',
      filename: 'cqkk94svibwxf0wln5hf.jpg',
      originalFilename: 'cqkk94svibwxf0wln5hf.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '376d83ddb2c0cede3fc0862758f606d0',
        public_id: 'NotSupremeV2/60502c24dc24a72d28bec1c3',
        version: 1615866916,
        version_id: 'e8949f23101da2f90488706abc0bfcb1',
        signature: '39a808416a33e2190056bd61ff9a5f89180035db',
        width: 1000,
        height: 1192,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 77561,
        type: 'upload',
        etag: '895fc6d769956cdccfca2aa3902548d8',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615866916/NotSupremeV2/60502c24dc24a72d28bec1c3.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615866916/NotSupremeV2/60502c24dc24a72d28bec1c3.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Fun Guy Hoody',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 4995,
    __v: 0,
  },
  {
    name: 'Bruce Lee Tee',
    description:
      'Bruce up your wardrobe in legendary style with the DGK x Bruce Lee Focused black t-shirt. This all-black tee is tagless for comfort and features the image of Bruce Lee on the center chest ready to charge into battle. The back is highlighted by screen-printed script that reads "be water my friend" in red for a powerful message.',
    status: 'AVAILABLE',
    price: 2975,
    __v: 0,
    photo: {
      _id: '60502c58dc24a72d28bec1c8',
      filename: 'o6qdg2ktdcjafbecmfgf.jpg',
      originalFilename: 'o6qdg2ktdcjafbecmfgf.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '7d48cbdbcf1857201802149bc8b39b7e',
        public_id: 'NotSupremeV2/60502c58dc24a72d28bec1c7',
        version: 1615866967,
        version_id: 'a3d4b9486b890729d25355b4105d7192',
        signature: '881a935fca52b870724d270c6a652205a70c1881',
        width: 500,
        height: 595,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 34850,
        type: 'upload',
        etag: 'e97c87db6333dfee8e0d9248c424db6f',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615866967/NotSupremeV2/60502c58dc24a72d28bec1c7.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615866967/NotSupremeV2/60502c58dc24a72d28bec1c7.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Bruce Lee Tee',
      __v: 0,
    },
  },
  {
    name: 'Make Art Not War',
    description:
      'Spread peaceful vibes with your style in the Make Art Not War boxy black t-shirt from Obey. This pure cotton design features a ribbed crew neck collar and a wide, boxy fit for modern styling. It is finished with a blue, red and yellow gradient "Make Art Not War" graphic screen printed on the chest for style.',
    photo: {
      _id: '60502c8edc24a72d28bec1ca',
      filename: 'jh5ignkrrnh74pdcn0py.jpg',
      originalFilename: 'jh5ignkrrnh74pdcn0py.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: 'deaca6f0d796e663b873c1e4ab6693b6',
        public_id: 'NotSupremeV2/60502c8ddc24a72d28bec1c9',
        version: 1615867021,
        version_id: '96abacb328f67273b93e996dd2faac34',
        signature: '304b58df19e8d9e36ac8806c77e5c5ff6ab0d522',
        width: 1000,
        height: 1096,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 47491,
        type: 'upload',
        etag: 'bab6c27e3b4935adbcaf67977b169df8',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615867021/NotSupremeV2/60502c8ddc24a72d28bec1c9.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615867021/NotSupremeV2/60502c8ddc24a72d28bec1c9.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Make Art Not War',
      __v: 0,
    },
    status: 'DRAFT',
    price: 2995,
    __v: 0,
  },
  {
    name: 'Converse All Star',
    description:
      'Step into a timeless classic with the Chuck Taylor All Star High Top Sneakers by Converse. Since 1917, these shoes have been a staple of fashion, sports, and comfort. Featuring a black canvas design with durable white rubber soles and toe caps. Emblazed with the iconic Converse Chuck Taylor All Star Logo on the outside this shoe is sure to pair with any outfit.',
    photo: {
      _id: '60502cb8dc24a72d28bec1cd',
      filename: 'vpuwujnhoasjiw2khpdb.jpg',
      originalFilename: 'vpuwujnhoasjiw2khpdb.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '101107d2625176e3de234faae155ec34',
        public_id: 'NotSupremeV2/60502cb8dc24a72d28bec1cc',
        version: 1615867063,
        version_id: '8ea6f16ee19b91faaea83905340d2ab8',
        signature: '8545d10b97bf02475fa6ddcd516e43d7dd8efc67',
        width: 1000,
        height: 1190,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 45017,
        type: 'upload',
        etag: '14098e6159318b05e47b4b273039f4ae',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615867063/NotSupremeV2/60502cb8dc24a72d28bec1cc.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615867063/NotSupremeV2/60502cb8dc24a72d28bec1cc.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Converse All Star',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 5995,
    __v: 0,
  },
  {
    name: 'Stay In Skewl Notebook',
    description:
      'Write down your thoughts, dreams, aspirations and notes in the joyously lighthearted RIPNDIP Stay In Skewl notebook. Featured with wide ruled lined paper and a Lord Nermal camouflage print pattern throughout the exterior, this stylish accessory is perfect for class or work.',
    photo: {
      _id: '60502ce1dc24a72d28bec1d0',
      filename: 't4j3ellltgj1iunwkqog.jpg',
      originalFilename: 't4j3ellltgj1iunwkqog.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '24706fdd6e1b77e43292af57e5255ce7',
        public_id: 'NotSupremeV2/60502ce0dc24a72d28bec1cf',
        version: 1615867104,
        version_id: '8ad3e20f366fafe27992381dd220553d',
        signature: '9db7229c937b0ad4b3f99d22998cadcc25168d8e',
        width: 1000,
        height: 1184,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 105666,
        type: 'upload',
        etag: '65916728cc2e51e2f5f335006e396303',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615867104/NotSupremeV2/60502ce0dc24a72d28bec1cf.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615867104/NotSupremeV2/60502ce0dc24a72d28bec1cf.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Stay In Skewl Notebook',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 595,
    __v: 0,
  },
  {
    name: 'Thrasher Flames Crop',
    description:
      'Add a fresh splash of classic skate-inspired style into your hoodie rotation with the Thrasher Flame Logo black crop hoodie. A fleece lined interior makes this hoodie extremely comfortable and the cropped silhouette offers some fashion-forward style points as well. Finished with a flaming Thrasher logo screen-printed across the center chest, this hoodie boasts a truly fiery look.',
    photo: {
      _id: '60502d0bdc24a72d28bec1d3',
      filename: 'hquzeeldvgpnpchz6hqy.jpg',
      originalFilename: 'hquzeeldvgpnpchz6hqy.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: 'c6e9b33cdba7c95aff6e633da1f692d3',
        public_id: 'NotSupremeV2/60502d0bdc24a72d28bec1d2',
        version: 1615867146,
        version_id: 'd9f6778da383e186716e88e0c8dcaa5f',
        signature: '5cbef79f89546207bc52065679bc872afbe5814d',
        width: 1000,
        height: 1190,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 62872,
        type: 'upload',
        etag: 'b4ac33e48530be1a966ed62179c0e32f',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615867146/NotSupremeV2/60502d0bdc24a72d28bec1d2.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615867146/NotSupremeV2/60502d0bdc24a72d28bec1d2.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Thrasher Flames Crop',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 5995,
    __v: 0,
  },
  {
    name: 'Anime Eyes',
    description:
      "For some awesome, anime-inspired style, look no further than the Hypland x Hunter x Hunter Gon Eye black t-shirt. A closeup of Gon's eyes is pictured at the center, with his name written beneath in Kanji script for some sick, fashion-forward flair. With a comfortable construction a bold, striking graphic, the Gon Eye t-shirt is a perfect pickup for any collection.",
    photo: {
      _id: '60502d40dc24a72d28bec1d6',
      filename: 'k26ttievlwpphmfym2cj.jpg',
      originalFilename: 'k26ttievlwpphmfym2cj.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        asset_id: '1503fb21c50554f470bb40b6782148ac',
        public_id: 'NotSupremeV2/60502d3fdc24a72d28bec1d5',
        version: 1615867199,
        version_id: '2eb390963bbd08e823d60f826635f84b',
        signature: '2b98d92f0e1bf682ce5905ed1f6d90329a13f15a',
        width: 1000,
        height: 912,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 51381,
        type: 'upload',
        etag: '5ac09896412481d75de4614fe74a705c',
        placeholder: false,
        url:
          'http://res.cloudinary.com/notsupreme/image/upload/v1615867199/NotSupremeV2/60502d3fdc24a72d28bec1d5.jpg',
        secure_url:
          'https://res.cloudinary.com/notsupreme/image/upload/v1615867199/NotSupremeV2/60502d3fdc24a72d28bec1d5.jpg',
        access_mode: 'public',
        original_filename: 'file',
      },
      altText: 'Anime Eyes',
      __v: 0,
    },
    status: 'AVAILABLE',
    price: 2995,
    __v: 0,
  },
];
