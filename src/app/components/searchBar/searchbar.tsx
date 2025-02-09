"use client";
import React, { useEffect, useState } from "react";
import { BiSliderAlt } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";
import Image from "next/image";

interface Movie {
  title: string;
  year?: string;
  imdbID?: string;
  poster?: string;
}

function Searchbar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const fetchMovies = async () => {
    if (!search.trim()) return;

    setLoading(true);
    setNoResults(false);

    const options = {
      method: "GET",
      url: "https://imdb.iamidiotareyoutoo.com/search",
      params: { q: search },
    };

    try {
      const { data } = await axios.request(options);

      const movies = Array.isArray(data.description)
        ? data.description.map((item: any) => ({
            title: item["#TITLE"] || "Unknown Title",
            year: item["#YEAR"] || "N/A",
            imdbID: item["#IMDB_ID"] || "",
            poster: item["#IMG_POSTER"] || "",
          }))
        : [];

      setResults(movies);

      if (movies.length === 0) {
        setNoResults(true);
      }
    } catch (error) {
      setNoResults(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      setNoResults(false);
      return;
    }

    const delay = setTimeout(() => {
      fetchMovies();
    }, 300);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div className="pt-3 ">
      <div className="px-6 py-4 w-full flex items-center justify-center">
        <div className="relative flex items-center w-full mdx:w-96">
          <FaMagnifyingGlass className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="ค้นหาคอนเสิร์ตหรือศิลปิน"
            className="w-full p-2 pl-10 border-gray-300 rounded-full text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="ml-6">
            <BiSliderAlt className="w-9 h-9" />
          </div>
        </div>
      </div>

      <div className="w-full mdx:w-96 mx-auto flex flex-col text-white bg-neutral-800 absolute left-1/2 transform -translate-x-1/2 max-h-96 overflow-y-auto scrollbar-hide z-50 rounded-lg">
        {loading && <div className="text-center py-4">กำลังโหลด...</div>}

        {noResults && !loading && (
          <div className="text-center py-4">ไม่พบเนื้อหา</div>
        )}

        {results.map((movie, index) => (
          <div
            key={index}
            className="p-2 my-2 w-full text-center flex space-x-3">
            {movie.poster && (
              <Image
                src={movie.poster}
                alt="poster"
                className="w-24 h-24"
                width={1000}
                height={1000}
              />
            )}
            <strong className="font-bold">{movie.title}</strong> ({movie.year})
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searchbar;
