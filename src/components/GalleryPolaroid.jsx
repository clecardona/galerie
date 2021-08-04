import Card from "./Card";

export default function GalleryPolaroid({ images }) {
  return (
    <div className="polaroid">
      {images.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
}
