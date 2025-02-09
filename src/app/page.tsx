"use client";

import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import JustWatch from "./components/jushWatch/justWatch";
import Activity from "./components/activity/Activity";

interface Movie {
  title: string;
  year?: string;
  imdbID?: string;
  photo_url?: string;
}

export default function MovieSlider() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [constraint, setConstraint] = useState(0);
  const [dragX, setDragX] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://imdb.iamidiotareyoutoo.com/justwatch",
        { params: { q: "thailand" } }
      );

      const moviesData = Array.isArray(response.data.description)
        ? response.data.description.slice(0, 10).map((item: any) => ({
            title: item.title,
            year: item.year,
            imdbID: item.imdbId,
            photo_url: item.photo_url[0],
          }))
        : [];

      setMovies(moviesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const updateConstraint = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.scrollWidth;
        const containerWidth = sliderRef.current.clientWidth;
        setConstraint(-(sliderWidth - containerWidth));
      }
    };

    updateConstraint();
    window.addEventListener("resize", updateConstraint);
    return () => window.removeEventListener("resize", updateConstraint);
  }, [movies]);

  return (
    <div className="h-full  pt-6 flex flex-col items-center px-6">
      <div className="w-full xs:max-w-5xl  overflow-hidden">
        <h2 className="text-2xl text-start w-full font-bold mb-5 ml-6">
          คอนเสิร์ตใหม่มาแรง
        </h2>
        <div ref={sliderRef} className="w-full max-w-4xl overflow-hidden">
          <motion.div
            className="flex gap-4 cursor-grab"
            drag="x"
            dragConstraints={{ left: constraint, right: 0 }}
            whileTap={{ cursor: "grabbing" }}>
            {movies.map((movie) => (
              <motion.div key={movie.imdbID} className="min-w-[200px]">
                <Image
                  src={movie.photo_url || "/placeholder.jpg"}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-center mt-2">{movie.title}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="h-0.5 w-6 bg-gradient-to-r from-purple-900 to-fuchsia-800 mx-auto mt-4"
            style={{
              transform: `translateX(${dragX * 0.1}px)`,
            }}
          />
        </div>

        <JustWatch />
        <Activity />
      </div>
    </div>
  );
}
