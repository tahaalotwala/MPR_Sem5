
function FavouritesCard({ image, title, price }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex justify-between">
        <p className="text-gray-800 font-bold">{price}</p>
        <button className="tracking-wide border-2 px-2 py-1 rounded-lg hover:bg-black hover:text-white font-semibold transition-all duration-300 ease-linear">View Room</button>
        </div>
      </div>
    </div>
  );
}

export default FavouritesCard;
