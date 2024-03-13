import Country from "../models/country";
import Destination from "../models/destination";

export const COUNTRY = [
  new Country("c1", "Korea", "#ABCDEF"), // Red
  new Country("c2", "Japan", "#F74D66"), // Blue
  new Country("c3", "Vietnam", "#FFB0BC"), // Green
  new Country("c4", "Brazil", "#CDFFB0"), // Orange
  new Country("c5", "Italy", "#B0FFF1"), // Purple
  new Country("c6", "England", "#9DB3AF"), // Yellow
  new Country("c7", "France", "#F5A1DC"), // Light Blue
  new Country("c8", "Argentina", "#CFFDFF"), // Light Green
  new Country("c9", "Spain", "#DB99AD"), // Deep Orange
  new Country("c10", "Mexico", "#D3EBB3"), // Deep Purple
];

export const DESTINATION = [
  new Destination(
    "d1",
    "c1",
    "Seoul Forest",
    0,
    2005,
    4.5,
    "https://th.bing.com/th/id/OIP.nD8P57RPE2ZFq-PbDQ0RrwHaE7?rs=1&pid=ImgDetMain"
  ),
  new Destination(
    "d2",
    "c2",
    "Kyoto Tours",
    129.30,
    1989,
    4.4,
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/c1/d3/21.jpg"
  ),
  new Destination(
    "d3",
    "c3",
    "Cu Chi Tunnels",
    18,
    1940,
    5.0,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/36/20/1f/cu-chi-tunnels-morning.jpg?w=1100&h=-1&s=1"
  ),
  new Destination(
    "d4",
    "c4",
    "Parque Municipal do Itiquira",
    20,
    1982,
    4.7,
    "https://cache.quantocustaviajar.com/blog/wp-content/uploads/2020/01/salto-itiquira-goias-4-1920x1083.jpg"
  ),
  new Destination(
    "d5",
    "c5",
    "Leaning Tower of Pisa",
    18,
    1173,
    4.0,
    "http://toptravellists.com/wp-content/uploads/2015/02/Leaning-Tower-of-Pisa-Tilt.jpg"
  ),
  new Destination(
    "d6",
    "c6",
    "Birmingham Museums and Art Gallery",
    0,
    1885,
    5.0,
    "https://www.bing.com/th?id=OLC.+Bq7S8kOtuiuzA480x360&w=210&h=140&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d7",
    "c7",
    "Eiffel Tower",
    12.30,
    1889,
    4.7,
    "https://www.bing.com/th?id=OLC.W7KND7TVbwajaw480x360&w=186&h=140&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d8",
    "c8",
    "Plaza Espana",
    0.00,
    1928,
    4.3,
    "https://www.bing.com/th?id=OLC.FZh3O+gJk2LR8Q480x360&w=210&h=140&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d9",
    "c9",
    "Valencia Cathedral",
    5.00,
    1238,
    3.5,
    "https://www.bing.com/th?id=OLC.kSM%2f3LQfj7Zg6Q480x360&w=208&h=149&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d10",
    "c10",
    "Guadaldjara Cathedral",
    0.00,
    1541,
    4.8,
    "https://www.bing.com/th?id=OLC.x5I8Cmw0TVs2hg480x360&w=139&h=110&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d11",
    "c1",
    "Seodaemun Museum of Natural History ",
    4.57,
    2003,
    4.2,
    "https://lh3.googleusercontent.com/-lOMcwrMUEcI/TWsMGrQNLeI/AAAAAAAAACY/vMt1HpFXAuU/s1600/IMG_3493.JPG"
  ),
  new Destination(
    "d12",
    "c2",
    "Mt Fuji Bullet Train Tour",
    189.87,
    286,
    4.3,
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/aa/09/aa.jpg"
  ),
  new Destination(
    "d13",
    "c3",
    "2.	Hoi An: Memories Show & Hoi An Impression Theme Park ",
    41.19,
    2019,
    4.6,
    "https://cdn.getyourguide.com/img/tour/981be3325d8f03ce5e39c32ae2fd08d222dedaf795504e8c49dd5e7deb7d9e32.jpeg/98.jpg"
  ),
  new Destination(
    "d14",
    "c4",
    "Santuario Dom Cosco",
    30,
    1981,
    4.0,
    "https://www.bing.com/th?id=OLC.%2fBT4sZQ3y2oVyA480x360&w=210&h=140&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d15",
    "c5",
    "San Severo Chapel",
    0.00,
    1963,
    4.2,
    "https://www.bing.com/th?id=OLC.DmEhHe1ZvdkgRQ480x360&w=226&h=140&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d16",
    "c6",
    "London Eye",
    29.50,
    1999,
    4.2,
    "https://th.bing.com/th?id=OLC.fJ7ujh1p8i%2fG1Q480x360&w=200&h=129&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=Local"
  ),
  new Destination(
    "d17",
    "c7",
    "Louvre",
    22,
    1190,
    4.1,
    "https://th.bing.com/th?id=OLC.FkJ7OYcothPtrg480x360&w=210&h=140&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d18",
    "c8",
    "Parque de La Costa",
    137.35,
    1997,
    4.2,
    "https://www.bing.com/th?id=OLC.kMvcktMV2euB3g480x360&w=186&h=140&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d19",
    "c9",
    "Oceanografic",
    95,
    2003,
    3.8,
    "https://www.bing.com/th?id=OLC.OspPMwU7b0q0tQ480x360&w=210&h=140&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
  new Destination(
    "d20",
    "c10",
    "Museo Dolores Olmedo Patino ",
    100,
    1994,
    4.7,
    "https://www.bing.com/th?id=OLC.ajCuTEymzSLm2A480x360&w=208&h=149&c=8&rs=1&qlt=90&dpr=1.3&pid=3.1&rm=2"
  ),
];
