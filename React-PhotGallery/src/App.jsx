


// App.jsx
import React, { useState, createContext } from "react";
import Gallery from "./Components/Gallery.jsx";
import Images from "./Components/Images.jsx";
import useAxios from "./Hooks/useAxios.jsx"
import Jumbutron from "./Components/Jumbutron.jsx";
import SearchField from "./Components/SearchField.jsx";

export const ImageContext = createContext();

export default function App() {
  const [searchImage, setSearchImage] = useState("");

  const {
    response,
    isLoading,
    error,
    fetchData,
  } = useAxios(`search/photos?page=1&query=office&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <div className="flex flex-col items-center text-black bg-white min-h-screen w-full">
        <h1 className="text-3xl my-4">Welcome to My Gallery App</h1>
        <Gallery /> {/* Static gallery from week-6-api */}
        <Jumbutron>
          <SearchField /> {/* Unsplash search */}
        </Jumbutron>
        <Images /> {/* Unsplash results */}
      </div>
    </ImageContext.Provider>
  );
}
