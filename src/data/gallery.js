// 展览数据：每个对象是一个展览（Gallery 里的一行）
// images 可放任意多张图（横向滚动）；src 留空则显示占位图，caption 为图名
// 要接真实图片：把图片放进 src/assets/images/，import 后填到对应 src
export const exhibitions = [
  {
    poster: 'images/Shenzhen—Trienaale4.jpg',
    id: 'gallery-mediated-balancing',
    title: 'Mediated Balancing: Tech For Life',
    venue: 'OCAT B10, Shenzhen',
    date: '2026',
    description:
      'The Shenzhen edition of the Milan Triennale. Contributed to curation and exhibited two installations: Echoes of the Body, a multisensory biofeedback piece that turns breath into a shared rhythm between body and environment; and Euphoria, an EEG-driven kinetic structure rendering invisible bodily fluctuations as shifting form, light, and shadow.',
    images: [
      { src: 'images/Shenzhen—Trienaale2.avif', caption: 'Exhibition view' },
      { src: 'images/Shenzhen—Trienaale3.avif', caption: 'Echoes of the Body' },
      { src: 'images/Shenzhen—Trienaale1.avif', caption: 'Euphoria' },
    ],
  },
  {
    poster: 'images/bienaale.png',
    id: 'gallery-venice-biennale',
    title: '19th Venice Architecture Biennale',
    venue: 'Venice, Italy',
    date: '2025',
    description:
      'Contributed to Brain Storm Streaming — spatial-form research, videography, and exhibition materials — bridging architectural research with emerging technology at one of the world’s most influential architecture and design events.',
    images: [
      { src: 'images/bienaale2.jpg', caption: 'Group photo' },
      { src: 'images/bienaale6.JPG', caption: 'Exhibition view' },
      { src: 'images/bienaale1.jpg', caption: 'Detail' },
      { src: 'images/bienaale3.png', caption: 'Detail' },
      { src: 'images/bienaale4.png', caption: 'Detail' },
      { src: 'images/bienaale5.png', caption: 'Detail' },
    ],
  },
  {
    poster: 'images/invisble.png',
    id: 'gallery-invisibles',
    title: 'INVISIBLES — Presence Matters',
    venue: 'Sea World Culture & Arts Center, Shenzhen',
    date: '2025.06–07',
    description:
      'As assistant curator, shaped the exhibition\'s content, organization, and coordination, while co-designing and building the In-between and Invisible installations from concept through on-site construction.',
    images: [
      { src: 'images/invisble1.JPG', caption: 'Exhibition view' },
      { src: 'images/invisble2.JPG', caption: 'In-between' },
      { src: 'images/invisble3.JPG', caption: 'In-between — construction' },
      { src: 'images/invisble4.gif', caption: 'Invisible — detail' },
      { src: 'images/invisble5.JPG', caption: 'Opening' },
    ],
  },
  {
    poster: 'images/eating together10.png',
    id: 'gallery-edible-urban-futures',
    title: 'Edible Urban Futures',
    venue: 'Melbourne School of Design Gallery, Australia',
    date: '2025',
    description:
      'The course project Eat Together — a 2050 vision for the future of dining in Shenzhen — was exhibited here, exploring sustainability and the fusion of technology within everyday food scenarios.',
    images: [
      { src: 'images/eating together9.png', caption: 'Background' },
      { src: 'images/eating together8.png', caption: 'Journey Map' },
       { src: 'images/eating together5.png', caption: 'Food Socializing' },
      { src: 'images/eating together1.png', caption: 'Who will we eat with？' },
      { src: 'images/eating together2.png', caption: 'Who will we eat with？' },
    ],
  },
]
