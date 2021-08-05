import Card from "./Card";

export default function GalleryTiles({ images }) {
  return (
    <div className="tiles">
      {images.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
}
