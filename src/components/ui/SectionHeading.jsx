const SectionHeading = ({
    label,
    title,
    subtitle,
    centered = true,
    light = false
}) => {
    return (
        <div className={`!mb-16 ${centered ? 'text-center' : ''}`}>
            {label && (
                <span className="inline-block text-[#F5A623] text-sm font-bold uppercase tracking-[0.2em] !mb-4">
                    {label}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold !mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-400' : 'text-gray-600'}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
