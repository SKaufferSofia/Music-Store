"use client";

import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

export function CarouselDefault() {
  return (
    <Carousel
      placeholder="image"
      className="rounded-xl"
      style={{ height: "700px" }}
      autoplay={true}
      loop={true}
    >
      <div className="relative h-full w-full">
        <img
          src="carousel/guitar-carousel.avif"
          alt="image 1"
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(80%)" }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-1/2">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Complete Electric Guitar Set
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Everything you need to start playing electric guitar. Includes a
              high-quality electric guitar, a powerful amplifier, and a
              versatile pedal for all your sound effects.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link href="/store">
                <button className="button">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="carousel/drum-carousel.avif"
          alt="image 1"
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(80%)" }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-1/2">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Complete Drum Set
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              A full drum kit with all the essentials for beginners and pros
              alike. Includes a bass drum, snare drum, toms, cymbals, and all
              necessary hardware.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link href="/store">
                <button className="button">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="carousel/piano-carousel.avif"
          alt="image 1"
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(80%)" }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-1/2">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Complete Music Production Set
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              A perfect set for music enthusiasts. Includes a high-quality piano
              for all your compositions, professional headphones for clear sound
              monitoring, and a studio microphone for recording.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link href="/store">
                <button className="button">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
