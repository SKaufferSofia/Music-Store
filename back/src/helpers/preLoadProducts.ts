// import { AppDataSource } from "../config/dataSource";
// import { IProduct } from "../dtos/productsDto";
// import { Product } from "../entities/Product";
// import { ProductRepository } from "../repositories/product.repository";

// const productsToPreLoad: IProduct[] = [
//   {
//     name: "Acoustic Guitar",
//     price: 150,
//     description: "6-string acoustic guitar with natural wood finish.",
//     image: [
//       "https://m.media-amazon.com/images/I/61X2PrME9kL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/61P9nr14jlL._AC_SL1500_.jpg",
//     ],
//     categoryId: 1,
//     stock: 20,
//   },
//   {
//     name: "Electric Guitar",
//     price: 300,
//     description: "Solid body electric guitar with dual humbucker pickups.",
//     image: [
//       "https://m.media-amazon.com/images/I/41yeOQQ1WzL._AC_SL1200_.jpg",
//       "https://m.media-amazon.com/images/I/319wB2+hPvL._AC_SL1200_.jpg",
//       "https://m.media-amazon.com/images/I/51e4+q4ALeL._AC_SL1200_.jpg",
//     ],
//     categoryId: 1,
//     stock: 15,
//   },
//   {
//     name: "Bass Guitar",
//     price: 250,
//     description:
//       "4-string electric bass guitar with solid body and smooth finish.",
//     image: [
//       "https://m.media-amazon.com/images/I/51PBT1CmhTL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/51e24nom33L._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/61gOVngwWrL._AC_SL1500_.jpg",
//     ],
//     categoryId: 1,
//     stock: 18,
//   },
//   {
//     name: "Drum Set",
//     price: 600,
//     description: "5-piece drum set with cymbals and hardware included.",
//     image: [
//       "https://m.media-amazon.com/images/I/81n1EA9TQUL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/91e2o3Ouc1L._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/81NsjkRz1fL._AC_SL1500_.jpg",
//     ],
//     categoryId: 1,
//     stock: 10,
//   },
//   {
//     name: "Digital Piano",
//     price: 500,
//     description:
//       "88-key digital piano with weighted keys and built-in speakers.",
//     image: [
//       "https://m.media-amazon.com/images/I/61q2mNWY1rL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/81pkmaBk2qL._AC_SL1500_.jpg",
//     ],
//     categoryId: 1,
//     stock: 12,
//   },
//   {
//     name: "Violin",
//     price: 200,
//     description: "4/4 full size violin with bow and case included.",
//     image: [
//       "https://m.media-amazon.com/images/I/612Klr0VAXL._AC_SL1000_.jpg",
//       "https://m.media-amazon.com/images/I/61a9aE938ZL._AC_SL1000_.jpg",
//       "https://m.media-amazon.com/images/I/61fCYFZl0+L._AC_SL1000_.jpg",
//     ],
//     categoryId: 1,
//     stock: 25,
//   },
//   {
//     name: "Condenser Microphone",
//     price: 110,
//     description:
//       "Cardioid condenser microphone ideal for recording vocals and instruments.",
//     image: [
//       "https://m.media-amazon.com/images/I/719UMpaWVWL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/31UhfHAp6wL._AC_.jpg",
//       "https://m.media-amazon.com/images/I/712pISOKpTL._AC_SL1500_.jpg",
//     ],
//     categoryId: 2,
//     stock: 25,
//   },
//   {
//     name: "USB Microphone",
//     price: 70,
//     description: "Plug-and-play USB microphone for podcasting and streaming.",
//     image: [
//       "https://m.media-amazon.com/images/I/71fvNPxUldL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/617ZUyaM92L._AC_SL1500_.jpg",
//     ],
//     categoryId: 2,
//     stock: 40,
//   },
//   {
//     name: "Lavalier Microphone",
//     price: 50,
//     description:
//       "Compact lavalier microphone for video recording and presentations.",
//     image: [
//       "https://m.media-amazon.com/images/I/41LZX427kHL._AC_SL1080_.jpg",
//       "https://m.media-amazon.com/images/I/613QgdaQbiL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/611wI85DRiL._AC_SL1500_.jpg",
//     ],
//     categoryId: 2,
//     stock: 35,
//   },
//   {
//     name: "Over-Ear Headphones",
//     price: 89,
//     description:
//       "Over-ear headphones with noise cancellation and high-fidelity sound.",
//     image: [
//       "https://m.media-amazon.com/images/I/61KHrqp9C5L._AC_SL1200_.jpg",
//       "https://m.media-amazon.com/images/I/61Qn1DZ2ZAL._AC_SL1200_.jpg",
//       "https://m.media-amazon.com/images/I/61VgeL3lwtL._AC_SL1200_.jpg",
//     ],
//     categoryId: 3,
//     stock: 50,
//   },
//   {
//     name: "Bluetooth Speaker",
//     price: 120,
//     description:
//       "Portable Bluetooth speaker with waterproof design and long battery life.",
//     image: [
//       "https://m.media-amazon.com/images/I/71eLvseXOmL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/71G0F3RKmfL._AC_SL1500_.jpg",
//     ],
//     categoryId: 3,
//     stock: 35,
//   },
//   {
//     name: "MIDI Keyboard",
//     price: 200,
//     description: "49-key MIDI keyboard with assignable pads and controllers.",
//     image: [
//       "https://m.media-amazon.com/images/I/71WVLqX+rHL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/41UfwkiZjML._AC_SL1024_.jpg",
//       "https://m.media-amazon.com/images/I/412HYGNfFWL._AC_SL1000_.jpg",
//     ],
//     categoryId: 1,
//     stock: 15,
//   },
//   {
//     name: "Effects Pedal",
//     price: 75,
//     description:
//       "Distortion pedal for electric guitar with tone and level controls.",
//     image: [
//       "https://m.media-amazon.com/images/I/41WPYwfZJlL._AC_SL1000_.jpg",
//       "https://m.media-amazon.com/images/I/51nG+u4TktL._AC_.jpg",
//     ],
//     categoryId: 3,
//     stock: 40,
//   },
//   {
//     name: "In-Ear Monitoring System",
//     price: 300,
//     description:
//       "Wireless in-ear monitoring system with receiver and transmitter.",
//     image: [
//       "https://m.media-amazon.com/images/I/41NPoljUcbL._AC_SL1000_.jpg",
//       "https://m.media-amazon.com/images/I/51N-oLvStfL._AC_SL1000_.jpg",
//       "https://m.media-amazon.com/images/I/41VvlDRTNdL._AC_SL1000_.jpg",
//     ],
//     categoryId: 3,
//     stock: 5,
//   },
//   {
//     name: "Guitar Amplifier",
//     price: 199,
//     description: "25W electric guitar amplifier with built-in effects.",
//     image: [
//       "https://m.media-amazon.com/images/I/91ldyxsaJcL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/81UWZSWJasL._AC_SL1500_.jpg",
//     ],
//     categoryId: 3,
//     stock: 30,
//   },
//   {
//     name: "DJ Mixer",
//     price: 350,
//     description: "4-channel DJ mixer with integrated USB audio interface.",
//     image: [
//       "https://m.media-amazon.com/images/I/71vi7aUb4RL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/61GS32jDPHL._AC_SL1500_.jpg",
//     ],
//     categoryId: 3,
//     stock: 8,
//   },

//   {
//     name: "Studio Monitors",
//     price: 400,
//     description:
//       "Pair of studio monitors with high-resolution sound and flat frequency response.",
//     image: [
//       "https://m.media-amazon.com/images/I/91qV9yESVAL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/91QmxGNkxWL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/91d7O1mJgYL._AC_SL1500_.jpg",
//     ],
//     categoryId: 3,
//     stock: 10,
//   },
//   {
//     name: "Audio Interface",
//     price: 150,
//     description: "2-channel USB audio interface with high-quality preamps.",
//     image: [
//       "https://m.media-amazon.com/images/I/51lq4xy-1WL._AC_SL1500_.jpg",
//       "https://m.media-amazon.com/images/I/51uxHKDVgML._AC_SL1500_.jpg",
//     ],
//     categoryId: 2,
//     stock: 25,
//   },
// ];

// export const preLoadProducts = async () => {
//   const products = await ProductRepository.find();
//   if (!products.length)
//     await AppDataSource.createQueryBuilder()
//       .insert()
//       .into(Product)
//       .values(productsToPreLoad)
//       .execute();
//   console.log("Products preloaded");
// };
