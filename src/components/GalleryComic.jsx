import Card from "./Card";

export default function GalleryComic({ images }) {
  return (
    <div className="comic">
      {images.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
}
