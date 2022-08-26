# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Guitar.destroy_all
Pickup.destroy_all
User.destroy_all

user = User.create!(email: 'toto@mail.com', password: 'azerty')

paf = Pickup.create!(brand: 'DiMarzio',
                     name: 'Paf Pro',
                     product_name: 'DP151',
                     output: 300,
                     resistance: 8.4,
                     bass: 3.5,
                     low_middle: 4.5,
                     high_middle: 4.5,
                     treble: 6.0,
                     pickup_type: 'Humbucker',
                     magnet: 'Alnico 5',
                     active: false,
                     description: 'The PAF Pro® was created when chops-intensive playing was first starting to happen, and high-gain amps and rack systems were becoming popular. A pickup was needed that combined a lot of presence and “cut” with an open-sounding PAF® vibe. The transparency of its sound lets the PAF Pro® slice through heavy processing, where darker-sounding pickups get lost in the mud of the effects chain. Low notes have both snap and chunk, and there is a spike in the mid-range that gives the pickup a subtle “aw” vowel sound, like a wah-wah pedal stopped in the middle. Treble response is tweaked to produce highs that stand out without getting brittle. The PAF Pro® makes an outstanding neck pickup in almost any guitar, and it’s an exceptional bridge pickup when high output isn’t required.'
                   )

zone = Pickup.create!(brand: 'DiMarzio',
                      name: 'The Tone Zone',
                      product_name: 'DP155',
                      output: 375,
                      resistance: 17.31,
                      bass: 9.5,
                      low_middle: 8.5,
                      high_middle: 8.0,
                      treble: 4.0,
                      pickup_type: 'Humbucker',
                      magnet: 'Alnico 5',
                      active: false,
                      description: 'Have you ever heard a bridge pickup that made a guitar sound like a giant mosquito attack? If you’ve run into this problem, The Tone Zone® is the solution. The Tone Zone® is hot enough to qualify as a high-output pickup, but it has a wider dynamic range — hard picking will produce a lot of power, and softer picking will be much cleaner and quieter. It’s got tremendous bass and low-mid response to reinforce the bottom end and make the overall sound bigger. The highest single notes have depth, and chords sound huge. Patented dual-resonance coils reproduce more overtones than you’d expect from such a fat-sounding pickup. It makes a great match with an Air Norton™, PAF Joe™, or PAF Pro®, and split-coil mode produces an excellent single-coil sound as well.'
                    )

fred = Pickup.create!(brand: 'DiMarzio',
                      name: 'FRED',
                      product_name: 'DP153',
                      output: 305,
                      resistance: 10.38,
                      bass: 4.5,
                      low_middle: 4.5,
                      high_middle: 5.5,
                      treble: 5.5,
                      pickup_type: 'Humbucker',
                      magnet: 'Alnico 5',
                      active: false,
                      description: "We designed FRED to bump the mid-range of the PAF Pro® EQ up a notch, but in the process something unusual happened. Harmonics that humbuckers usually don’t reproduce started popping out, particularly with overdriven amps and distortion units. FRED® has about the same power as the PAF Pro®, but the unusual overtones create a sound with more crank and growl. Joe Satriani was the first player to discover and exploit these qualities, and it’s been his main bridge pickup until the introduction of the Mo' Joe™. FRED® is really sensitive to changes in pick attack and control settings, and its distinctive tone makes a great recorded sound for both penetrating solos and tight rhythm tracks."
                    )

norton = Pickup.create!(brand: 'DiMarzio',
                        name: 'Air Norton',
                        product_name: 'DP193',
                        output: 270,
                        resistance: 12.58,
                        bass: 6.0,
                        low_middle: 6.0,
                        high_middle: 6.0,
                        treble: 5.5,
                        pickup_type: 'Humbucker',
                        magnet: 'Alnico 5',
                        active: false,
                        description: 'The Air Norton started out simply to be the Airbucker™ version of the Norton®. We thought it would make a distinctive-sounding bridge pickup with high-gain amps, but we soon discovered that it’s a radically neat neck pickup, too. The tone is deep and warm, but not muddy. It’s hot, but not distorted. It’s even got cool harmonics, which are really unusual for a neck humbucker. The patented Air Norton™ magnetic structure reduces string-pull, so sustain is improved; and pick attack and dynamics are tremendously controllable and expressive. Combine the Air Norton™ with an Air Zone™, The Tone Zone® or Steve’s Special™ in the bridge position for a perfect blend of power and tone, or use an Air Norton™ in the bridge position with an Air Classic™ Bridge model in the neck position for a distinctive medium-output blues-rock sound.'
                      )

steve = Pickup.create!(brand: 'DiMarzio',
                       name: "Steve's Special",
                       product_name: 'DP161',
                       output: 390,
                       resistance: 18.21,
                       bass: 9.0,
                       low_middle: 4.5,
                       high_middle: 4.5,
                       treble: 5.0,
                       pickup_type: 'Humbucker',
                       magnet: 'Ceramic',
                       active: false,
                       description: "Steve’s Special™ is a non-traditional approach to high-output bridge humbucking pickup design. Hot humbuckers usually concentrate most of the pickup’s power in a narrow frequency bandwidth for maximum impact. Using our patented dual-resonance design, Steve’s Special™ takes the opposite path, spreading the sound over a broad range. Bass and treble frequencies are boosted while the mids are pulled back, so the pickup’s power doesn’t kick a high-gain amp into overdrive as easily. This makes Steve’s Special™ a good choice for both fast soloing and clean chords, because individual notes won’t smear together with heavy overdrive, and clean sounds have an almost “hi-fi” quality."
                     )

custom69 = Pickup.create!(brand: 'Fender',
                          name: 'Custom 69',
                          product_name: '0992114000',
                          resistance: 5.6,
                          bass: 5.0,
                          low_middle: 4.0,
                          high_middle: 4.0,
                          treble: 5.0,
                          pickup_type: 'Single Coil',
                          magnet: 'Alnico 5',
                          active: false,
                          description: "Fender Custom Shop '69 Stratocaster pickups produce one of the most revered guitar sounds in popular music history-the full, punchy late-'60s blues rock tone that ruled the era from Monterey on the West Coast to Woodstock on the East Coast. Because of the clarity and transparency created by the unique coil wind and magnet structure, the '69 pickup design works especially well with pedals allowing the low end to thump and the high end to soar."
                        )

wb6000 = Pickup.create!(brand: 'Washburn',
                        name: 'WB6000',
                        pickup_type: 'Single Coil',
                        active: false,
                      )

bucker_n = Pickup.create!(brand: 'Gibson',
                        name: 'Burstbucker Pro Neck',
                        pickup_type: 'Humbucker',
                        magnet: 'Alnico 5',
                        active: false,
                        resistance: 8.3
                      )

bucker_b = Pickup.create!(brand: 'Gibson',
                        name: 'Burstbucker Pro Bridge',
                        pickup_type: 'Humbucker',
                        magnet: 'Alnico 5',
                        active: false,
                        resistance: 7.4
                      )

jems = Pickup.create!(brand: 'DiMarzio',
                      name: 'JEM Single',
                      product_name: 'ISCV1',
                      pickup_type: 'Single Coil',
                      active: false,
                      magnet: 'Alnico 5',
                      resistance: 14.97,
                      output: 90,
                      bass: 8.0,
                      low_middle: 4.0,
                      high_middle: 3.5,
                      treble: 6.0,
                    )

blaze_n = Pickup.create!(brand: 'DiMarzio',
                         name: 'Blaze II Neck',
                         product_name: 'DP700',
                         output: 280,
                         resistance: 15.8,
                         bass: 8.5,
                         low_middle: 5.5,
                         high_middle: 6.0,
                         treble: 4.5,
                         pickup_type: 'Humbucker',
                         magnet: 'Ceramic',
                         active: false,
                         description: 'This is the model originally designed for the neck position of the Ibanez® Universe. The neck position needed to be warm, but not too fat (nobody wants the low “B” sounding like a tuba, right?), so we scooped out some of the mids to brighten up the low notes and we kept the power down to a reasonable level to avoid unnecessary sludge. You can get everything from a good jazz sound with a clean amp to a wall-of-sound with heavy overdrive. Many players have discovered the Blaze™ Neck Model is also a very good bridge pickup when playing with a serious amount of distortion — power chords retain more openness, and single notes have a lot of clarity.'
                        )

blaze_b = Pickup.create!(brand: 'DiMarzio',
                         name: 'Blaze II Bridge',
                         product_name: 'DP702',
                         output: 380,
                         resistance: 20.75,
                         bass: 9.5,
                         low_middle: 4.5,
                         high_middle: 4.0,
                         treble: 4.5,
                         pickup_type: 'Humbucker',
                         magnet: 'Ceramic',
                         active: false,
                         description: 'The Blaze™ Bridge Model bears a strong resemblance to the Steve’s Special™. The mids are scooped out, and both treble and bass are boosted. The hot bass response gives the seventh string a lot of impact, while opening up the midrange keeps it from getting muddy. This enables the Blaze™ Bridge Model to handle both fast soloing and clean chords, because individual notes won’t smear together with heavy overdrive, and clean sounds have an almost “hi-fi” quality.'
                        )

blaze_m = Pickup.create!(brand: 'DiMarzio',
                         name: 'Blaze II Middle',
                         product_name: 'DP701',
                         output: 200,
                         resistance: 13.46,
                         bass: 7.0,
                         low_middle: 5.0,
                         high_middle: 3.0,
                         treble: 6.0,
                         pickup_type: 'Single Coil',
                         magnet: 'Ceramic',
                         active: false,
                         description: 'Seven-string guitars are hard to amplify. Most players tune the seventh string to a low “B” (or even “A”), and it s a real trick to get a big, solid tone from the other strings without the seventh turning to mud. The Blaze™ Middle single-coil is exceptionally tight, and is designed to be a match for the Blaze™ humbuckers in split mode. Both lows and highs are bright and clean.'
                        )

modern77_n = Pickup.create!(brand: 'Custom 77',
                         name: 'Modern77 Neck',
                         resistance: 7.98,
                         pickup_type: 'Humbucker',
                         magnet: 'Alnico V',
                         active: false,
                         description: "Ils sont caractérisés par une bosse dans les mediums pour un son plus « rock », facilitant le placement dans le mix au sein d’un groupe, et un niveau de sortie plus élevé sans que cela ne se fasse au détriment de sa musicalité. Comme leur nom l'indique, ils sont une version plus moderne de nos micros. Supportant mieux les gros niveaux de gains. Ils sont donc très appréciés des joueurs de rock qui cherchent souvent des sons à la GnR. Les habitués de micros simples les apprécient également. Surement lié à leur dynamique plus élevée et à leur clareté."
                        )

modern77_b = Pickup.create!(brand: 'Custom 77',
                         name: 'Modern77 Bridge',
                         resistance: 13.8,
                         pickup_type: 'Humbucker',
                         magnet: 'Alnico V',
                         active: false,
                         description: "Ils sont caractérisés par une bosse dans les mediums pour un son plus « rock », facilitant le placement dans le mix au sein d’un groupe, et un niveau de sortie plus élevé sans que cela ne se fasse au détriment de sa musicalité. Comme leur nom l'indique, ils sont une version plus moderne de nos micros. Supportant mieux les gros niveaux de gains. Ils sont donc très appréciés des joueurs de rock qui cherchent souvent des sons à la GnR. Les habitués de micros simples les apprécient également. Surement lié à leur dynamique plus élevée et à leur clareté."
                        )

Guitar.create!(
  name: "Stratocaster Classic Player '60s",
  brand: 'Fender',
  user_id: user.id,
  neck_pickup_id: custom69.id,
  center_pickup_id: custom69.id,
  bridge_pickup_id: custom69.id,
  made_in: 'Mexico',
  color: '3-Color Sunburst',
  body_wood: 'Alder',
  body_finish: 'Polyester',
  neck_wood: 'Maple',
  fingerboard_wood: 'Rosewood',
  bridge: 'Vintage Style 2-Point Synchronized Tremolo',
  neck_radius: 305,
  frets_number: 21,
  frets_type: 'Medium Jumbo',
  scale_length: 648,
  neck_shape: 'C',
  neck_width_nut: 42,
  neck_attachment: '4 Bolds',
  neck_finish: 'Gloss Polyurethane',
  nut_material: 'Synthetic Bone',
  pickups_configuration: 'SSS',
  tuning_machines: 'Fender/Ping Vintage Style',
  price: 1099,
  serial_number: 'MZ7017048',
  year: 2007,
  photo_id: 'lbyh9e6p3ikhcuuh9xp2ivl6ctkt',
  photos_ids: %w[StratocasterClassicPlayer'60s-0" StratocasterClassicPlayer'60s-1" StratocasterClassicPlayer'60s-2" StratocasterClassicPlayer'60s-3"]
)

Guitar.create!(
  name: 'JS1000',
  brand: 'Ibanez',
  user_id: user.id,
  neck_pickup_id: paf.id,
  bridge_pickup_id: fred.id,
  made_in: 'Japan',
  color: 'Burnt Transparent Blue',
  body_wood: 'Basswood',
  neck_wood: 'Maple',
  fingerboard_wood: 'Rosewood',
  bridge: 'Edge Pro',
  neck_radius: 250,
  frets_number: 22,
  frets_type: 'Dunlop 6105',
  scale_length: 648,
  neck_shape: 'JS Prestige',
  neck_width_nut: 42,
  neck_attachment: 'Tilt Join',
  neck_finish: 'Gloss Polyurethane',
  pickups_configuration: 'HH',
  tuning_machines: 'Gotoh SG381',
  purchase_date: '2017',
  serial_number: 'F0436378',
  year: '2004',
  artist: 'Joe Striani',
  price: 1499,
  photo_id: 'vsl276ssdu5f5g5k7mzpp8m4hk6f',
  photos_ids: %w[JS1000-0" JS1000-1" JS1000-2" JS1000-3"]
)

Guitar.create!(
  name: 'WG850',
  brand: 'Washburn',
  user_id: user.id,
  neck_pickup_id: paf.id,
  center_pickup_id: wb6000.id,
  bridge_pickup_id: zone.id,
  made_in: 'Korea',
  color: 'MBL Metallic Blue',
  body_wood: 'Basswood',
  body_finish: 'Polish',
  neck_wood: 'Maple',
  neck_finish: 'Varnished',
  fingerboard_wood: 'Rosewood',
  bridge: 'Floyd Rose',
  frets_number: 24,
  frets_type: 'Jumbo',
  scale_length: 648,
  neck_radius: 400,
  neck_width_nut: 43,
  neck_attachment: 'Bolt on',
  inlays: 'Acrylic Dots',
  pickups_configuration: 'HSH',
  tuning_machines: 'Grover 18:1',
  purchase_date: '2001',
  price: 749,
  year: 1999,
  photo_id: 'mpu6lk3pvfjlk3t2dow8j6j158b6',
  photos_ids: %w[WG850-0 WG850-1 WG850-2 WG850-3]
)

Guitar.create!(
  name: 'JP6',
  brand: 'Music Man',
  user_id: user.id,
  neck_pickup_id: norton.id,
  bridge_pickup_id: steve.id,
  made_in: 'United States',
  color: 'Pearl Redburst',
  body_wood: 'Basswood',
  body_finish: 'High Gloss Polyester',
  neck_wood: 'Maple',
  neck_finish: 'Gunstock Oil',
  fingerboard_wood: 'Rosewood',
  bridge: 'Custom John Petrucci Music Man',
  frets_number: 24,
  frets_type: 'High Profile Wide',
  scale_length: 648,
  neck_radius: 381,
  neck_shape: 'Flat D',
  neck_width_nut: 43,
  neck_width_last_fret: 57,
  neck_attachment: '5 Bolts',
  pickups_configuration: 'HH',
  tuning_machines: 'Schaller M6-IND Locking',
  artist: 'John Petrucci',
  nut_material: 'Melamine',
  serial_number: 'G26140',
  year: '2004',
  price: 2680,
  photo_id: 'v95bkfdqlmqbd8lgctz3twfudu77',
  photos_ids: %w[JP6-0 JP6-1 JP6-2 JP6-3]
)

Guitar.create!(
  name: 'JEM77',
  brand: 'Ibanez',
  user_id: user.id,
  neck_pickup_id: paf.id,
  center_pickup_id: jems.id,
  bridge_pickup_id: paf.id,
  made_in: 'Japan',
  color: 'BFP Blue FLower Patern',
  body_wood: 'Basswood',
  neck_wood: 'Maple',
  fingerboard_wood: 'Maple',
  bridge: 'Lo-Pro Edge',
  frets_number: 24,
  neck_width_nut: 43,
  neck_width_last_fret: 56,
  neck_radius: 430,
  nut_material: 'Locking Nut',
  body_finish: 'Gloss',
  neck_attachment: '4 Bolts',
  pickups_configuration: 'HSH',
  artist: 'Steve Vai',
  year: '1991',
  inlays: 'Blue Vine Tree Of Life',
  price: 1699,
  scale_length: 648,
  frets_type: 'Dunlop 6140',
  tuning_machines: 'Gotoh SG38',
  neck_shape: 'JEM',
  serial_number: '914831',
  photo_id: 'nz4plr06smo7tel5we73taogmz3n',
  photos_ids: %w[JEM77-0 JEM77-1 JEM77-2 JEM77-3"]
)

Guitar.create!(
  name: 'UV7',
  brand: 'Ibanez',
  user_id: user.id,
  neck_pickup_id: blaze_n.id,
  center_pickup_id: blaze_m.id,
  bridge_pickup_id: blaze_b.id,
  made_in: 'Japan',
  color: 'BK Black',
  body_wood: 'Basswood',
  neck_wood: 'Maple',
  neck_shape: 'UV',
  fingerboard_wood: 'Rosewood',
  bridge: 'Lo-Pro Edge7',
  frets_number: 24,
  neck_attachment: '4 Bolts',
  pickups_configuration: 'HSH',
  artist: 'Steve Vai',
  year: '1991',
  inlays: 'Green Dot',
  price: 1499,
  scale_length: 648,
  frets_type: 'Dunlop 6140',
  nut_material: 'Top-Lok III',
  tuning_machines: 'Gotoh SG38',
  neck_radius: 430,
  neck_width_nut: 48,
  neck_width_last_fret: 65,
  serial_number: '910708',
  photo_id: 'sp9c6fq86wdgvs1ux458xt1187ca',
  photos_ids: %w[UV7-0 UV7-1 UV7-2 UV7-3]
)

Guitar.create!(
  name: 'Les Paul Standard',
  brand: 'Gibson',
  user_id: user.id,
  neck_pickup_id: bucker_n.id,
  bridge_pickup_id: bucker_b.id,
  made_in: 'United States',
  color: 'Lemon Burst',
  body_wood: 'Mohagany',
  body_finish: 'Nitrocellulose',
  body_top_wood: 'Carved AA Maple',
  neck_wood: 'Mohagany',
  scale_length: 628,
  fingerboard_wood: 'Rosewood',
  neck_attachment: 'Glued',
  bridge: 'Tune-O-Matic',
  frets_number: 22,
  neck_width_nut: 43,
  neck_radius: 305,
  pickups_configuration: 'HH',
  year: '2005',
  neck_shape: '’60s Slim Taper',
  frets_type: 'Medium/Jumbo',
  inlays: 'Pearl Trapezoid',
  price: 3899,
  serial_number: '01725536',
  photo_id: '6t2tnhx9715plc4m47puw43shafm',
  photos_ids: %w[LesPaulStandard-0 LesPaulStandard-1 LesPaulStandard-2 LesPaulStandard-3]
)

Guitar.create!(
  name: 'Variax 500',
  brand: 'Line 6',
  user_id: user.id,
  made_in: 'Korea',
  color: 'Black',
  body_wood: 'Basswood',
  neck_wood: 'Maple',
  fingerboard_wood: 'Rosewood',
  neck_attachment: '4 Bolds',
  scale_length: 648,
  neck_radius: 254,
  frets_number: 20,
  serial_number: '3070574',
  photo_id: 'zas944asyltsdol6xc8snzmtthfe',
  photos_ids: %w[Variax500-0 Variax500-1 Variax500-2 Variax500-3]
)

Guitar.create!(
  name: "London's Burning CS3",
  brand: 'Custom 77',
  user_id: user.id,
  neck_pickup_id: modern77_n.id,
  bridge_pickup_id: modern77_b.id,
  made_in: 'Korea',
  color: 'Amber',
  body_wood: 'Mohagany',
  body_top_wood: 'AAA Flamed Maple',
  neck_wood: 'Mohagany',
  fingerboard_wood: 'Rosewood',
  neck_attachment: 'Glued',
  scale_length: 628,
  neck_radius: 356,
  frets_number: 22,
  serial_number: '8070169',
  inlays: 'Acrylic Trapezoid',
  nut_material: 'Bone',
  neck_width_nut: 43,
  tuning_machines: 'Custom77 MHDC (18:1)',
  bridge: 'Tune-O-Matic style',
  photo_id: 'm0co1pc3caz2r11sv6wz8batoo54',
  photos_ids: %w[London'sBurningCS3-0 London'sBurningCS3-1 London'sBurningCS3-2 London'sBurningCS3-3]
)

p Guitar.count
p User.count
p Pickup.count
