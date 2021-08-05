import React, {useState} from "react";
import "./styles/base.css";
import logo from "./assets/logo.png"
import GalleryMasonry from "./components/GalleryMasonry";
import GalleryPolaroid from "./components/GalleryPolaroid";
import Footer from "./components/Footer";
import GalleryTiles from "./components/GalleryTiles";
import GalleryComic from "./components/GalleryComic";

export default function App() {

  const [gallerySelected,setGallerySelected] = useState("masonry") 
  const images = require("./assets/mockup.json");

function selectMasonry(){
  setGallerySelected("masonry")
}

function selectPolaroid(){
  setGallerySelected("polaroid")
}
function selectTiles(){
  setGallerySelected("tiles")
}
function selectComic(){
  setGallerySelected("comic")
}



  return (
    <div className="App">
      <div className="grid">
        <header>
          <img alt="headerLogo" src={logo}/>
          </header>
        
        
        <nav>
<button onClick={selectMasonry}> Masonry</button>
<button onClick={selectPolaroid}> Polaroid</button>
<button onClick={selectTiles}> Tiles</button>
<button onClick={selectComic}>Comic</button>

        </nav>
      

        <main>
         { gallerySelected === "masonry" && <GalleryMasonry images={images}/> }
         { gallerySelected === "polaroid" && <GalleryPolaroid images={images}/>}
         { gallerySelected === "tiles" && <GalleryTiles images={images}/>}
         { gallerySelected === "comic" && <GalleryComic images={images}/>}
        </main>

        <Footer/>
      </div>
    </div>
  );
}
