export function MediaGrid() {
  const mediaItems = [
    { title: "Video 1", subtitle: "Tomorrowland" },
    { title: "Video 2", subtitle: "LIB" },
    { title: "Video 3", subtitle: "Interview" },
    { title: "Picture 1", subtitle: "Sunflwr" },
    { title: "Picture 2", subtitle: "Shanin Blake" },
    { title: "Picture 3", subtitle: "???" },
  ];

  return (
    <div className="mt-20 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {mediaItems.map((item, i) => (
          <div
            key={i}
            className="aspect-video bg-yellow-100/50 rounded-xl p-4 md:p-6 border-2 border-yellow-200 hover:border-yellow-300 transition-colors cursor-pointer group"
          >
            <div className="h-full flex flex-col justify-between">
              <h3 className="text-xl md:text-2xl font-semibold text-green-800">
                {item.title}
              </h3>
              <p className="text-green-700 group-hover:text-green-900 transition-colors">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}