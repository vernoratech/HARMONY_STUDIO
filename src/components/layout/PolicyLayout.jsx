const PolicyLayout = ({ title, lastUpdated, children }) => {
  return (
    <section className="bg-[#0A0A0A] !py-24 min-h-screen">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white !mb-2">
          {title}
        </h1>
        <p className="text-sm text-gray-500 !mb-10">
          Last updated: {lastUpdated}
        </p>

        <div className="text-gray-400 leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default PolicyLayout;
