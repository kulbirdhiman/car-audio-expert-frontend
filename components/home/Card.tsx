// components/ProductCard.tsx

const ProductCard = ({
  image,
  smallTitle,
  title,
  price,
  stock,
}: {
  image: string;
  smallTitle: string;
  title: string;
  price: number;
  stock: string;
}) => {
  return (
    <div className="border border-gray-300  p- shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contai"
      />
      <div className="p-3">
        <div className="text-xs text-gray-500">{smallTitle}</div>
        <h2 className="font-semibold line-clamp-1 text-base text-gray-800 mb-1">
          {title}
        </h2>
        <div className="text-lg font-bold text-black mb-1">${price}</div>
        <div className="text-sm text-pink-600 font-semibold mb-4">{stock}</div>
        <button className="px-4 py-2 text-sm border rounded-full text-purple-600 border-purple-600 hover:bg-purple-50 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
