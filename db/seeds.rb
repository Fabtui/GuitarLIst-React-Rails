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
            name:'Paf Pro',
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
            name:'The Tone Zone',
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
            name:'FRED',
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
            name:'Air Norton',
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
            description: "The Air Norton started out simply to be the Airbucker™ version of the Norton®. We thought it would make a distinctive-sounding bridge pickup with high-gain amps, but we soon discovered that it’s a radically neat neck pickup, too. The tone is deep and warm, but not muddy. It’s hot, but not distorted. It’s even got cool harmonics, which are really unusual for a neck humbucker. The patented Air Norton™ magnetic structure reduces string-pull, so sustain is improved; and pick attack and dynamics are tremendously controllable and expressive. Combine the Air Norton™ with an Air Zone™, The Tone Zone® or Steve’s Special™ in the bridge position for a perfect blend of power and tone, or use an Air Norton™ in the bridge position with an Air Classic™ Bridge model in the neck position for a distinctive medium-output blues-rock sound."
          )
steve = Pickup.create!(brand: 'DiMarzio',
            name:"Steve's Special",
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
            name:"Custom 69",
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

Guitar.create!(
  name: 'Stratocaster',
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
  neck_width_nut: '42',
  neck_attachment: '4 Bolds',
  neck_finish: 'Gloss Polyurethane',
  pickups_configuration: 'SSS',
  tuning_machines: 'Fender/Ping Vintage Style Tuning Machine'
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
  neck_width_nut: '42',
  neck_attachment: 'Tilt Join',
  neck_finish: 'Gloss Polyurethane',
  pickups_configuration: 'HH',
  tuning_machines: 'Gotoh SG381',
  purchase_date: '2017',
  serial_number: 'F0436378',
  year: '2004',
  artist: 'Joe Striani'
)
Guitar.create!(name: 'JP6', brand: 'Music Man', year:'2001', user_id: user.id)
Guitar.create!(name: 'JEM77BFP', brand: 'Ibanez', year:'1991', user_id: user.id)

p Guitar.count
p User.count
p Pickup.count
