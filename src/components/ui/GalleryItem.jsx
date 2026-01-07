import { useState } from 'react';

const GalleryItem = ({ item }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
            {/* Image */}
            <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Loading Placeholder */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 !p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm !mb-1">
                        {item.caption}
                    </p>
                    <span className="text-[#F5A623] text-xs uppercase tracking-wider">
                        {item.category}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;
