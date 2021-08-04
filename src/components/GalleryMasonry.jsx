import Card from "./Card";
import Masonry from "react-masonry-css";

export default function GalleryMasonry({ images}) {

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
   
    <div className="masonry">
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >

    {images.map((item) => {
      return <Card key={item.id} item={item} />;
    })}
      
    </Masonry>
    </div>
    
  );
}
