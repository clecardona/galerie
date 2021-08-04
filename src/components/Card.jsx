export default function Card({ item }) {
  return (
   
      <div className="card">

        <img src={item.url} alt={item.id}/>
        <div className="card-footer">#{item.title}</div>

      </div>
    
  );
}
