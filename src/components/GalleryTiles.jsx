import Card from "./Card";
import { CSSTransitionGroup } from "react-transition-group";

export default function GalleryTiles({ images }) {
  return (
    <CSSTransitionGroup
    transitionName="fade"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
    transitionAppear={true}
    transitionAppearTimeout={500}
  >
    <div className="tiles">
      {images.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
    </CSSTransitionGroup>
  );
}
