import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const stats = [
  {
    value: "1,200",
    label: "Saved Bookmarks",
    color: "green",
    bg: "green-50",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    ),
  },
  {
    value: "14",
    label: "Projects",
    color: "red",
    bg: "red-50",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    ),
  },
  {
    value: "49 GB",
    label: "Storage Used",
    color: "blue",
    bg: "blue-50",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    ),
  },
  {
    value: "2,400",
    label: "Images Uploaded",
    color: "orange",
    bg: "orange-50",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
];

function StatsCard({ item }) {
  return (
    <div className="p-6 w-full max-w-xs mx-auto rounded-xl border border-white/20 bg-white/50 backdrop-blur-3xl shadow-lg flex items-center 
  dark:bg-transparent dark:border-zinc-500/10">
  
      <div className={`p-2 bg-${item.bg} rounded-lg mr-3 shrink-0`}>
        <svg className={`w-5 h-5 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {item.icon}
        </svg>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900 dark:text-neutral-300">{item.value}</div>
        <div className="text-sm text-gray-500">{item.label}</div>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="px-4 py-8 bg-transparent">
      {/* Carousel for small and medium screens */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 }, 
            500: { slidesPerView: 2 }, 
            640: { slidesPerView: 2 }, 
          }}
        >
          {stats.map((item, index) => (
            <SwiperSlide key={index}>
              <StatsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Static grid for large screens */}
      <div className="hidden lg:grid grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <StatsCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
