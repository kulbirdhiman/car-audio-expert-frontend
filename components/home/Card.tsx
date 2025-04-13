// components/ProductCard.tsx

const ProductCard = ({
  images,
  smallTitle,
  name,
  regular_price,
  discount_price,
  in_stock,
}: {
  images: { image: string }[];
  smallTitle: string;
  name: string;
  regular_price: number;
  discount_price: number;
  in_stock: string | number;
}) => {
  const imgSrc =
    images?.[0]?.image?.includes("http")
      ? images[0].image
      : `${process.env.NEXT_PUBLIC_S3_IMG_URL}${images?.[0]?.image}`;

  const isInStock = Number(in_stock) > 0;

  return (
    <div className="border border-gray-300 p- shadow-sm hover:shadow-md transition">
      <img
        src={imgSrc || "/placeholder.png"}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <div className="text-xs text-gray-500">{smallTitle}</div>
        <h2 className="font-semibold line-clamp-1 text-base text-gray-800 mb-1">
          {name}
        </h2>
        <div className="text-lg font-bold text-black mb-1">$
            {discount_price <=0 ? regular_price : discount_price}
        </div>
        <div className={`text-sm font-semibold mb-4 ${isInStock ? "text-green-600" : "text-pink-600"}`}>
          {isInStock ? "In Stock" : "Out of Stock"}
        </div>
        <button
          disabled={!isInStock}
          className={`px-4 py-2 text-sm border rounded-full ${
            isInStock
              ? "text-purple-600 border-purple-600 hover:bg-purple-50"
              : "text-gray-400 border-gray-300 cursor-not-allowed"
          } transition`}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
