export default function ProductCard(props) {
    console.log(props);
    return (
        <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            
            {/* Product Image */}
            <img 
                src={props.image} 
                alt={props.name} 
                className="w-full h-48 object-cover"
            />
            
            {/* Content */}
            <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800 truncate">
                    {props.name}
                </h1>
                <p className="text-gray-600 mt-1 text-sm">
                    ${props.price}
                </p>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 active:scale-95 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
