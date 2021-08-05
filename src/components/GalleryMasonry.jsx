import Card from "./Card";
import Masonry from "react-masonry-css";
import { CSSTransitionGroup } from "react-transition-group";

export default function GalleryMasonry({ images}) {

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <CSSTransitionGroup
    transitionName="fade"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
    transitionAppear={true}
    transitionAppearTimeout={500}
  >
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
    </CSSTransitionGroup>
    
  );
}
