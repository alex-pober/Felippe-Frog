'use client';

import { scrollToMedia } from '@/utils/scrollUtils';
import { useEffect, useState } from 'react';

interface MediaItem {
  title: string;
  url: string;
  type: 'video' | 'image';
}

const LoadingFrogs = () => {
  const [frogIndex, setFrogIndex] = useState(0);
  const frogs = [
    `  🐸  
  ribbit...`,
    `  🐸  
  loading...`,
    ` (•‿•) 
  hop!`,
    `  🐸  
  almost...`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrogIndex((prev) => (prev + 1) % frogs.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-full flex flex-col items-center justify-center p-8 font-mono">
      <pre className="text-2xl whitespace-pre text-center text-green-600 animate-bounce">
        {frogs[frogIndex]}
      </pre>
      <div className="mt-4 text-green-500">Loading your media...</div>
    </div>
  );
};

export function MediaGrid() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const determineMediaType = (url: string): 'video' | 'image' => {
    // Common video platform patterns
    const videoPatterns = [
      'youtube.com',
      'youtu.be',
      'vimeo.com',
      'dailymotion.com',
      'facebook.com/video',
      'player.vimeo.com'
    ];
    
    return videoPatterns.some(pattern => url.includes(pattern)) ? 'video' : 'image';
  };

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        console.log('Fetching media from Google Sheets...');
        const response = await fetch(
          'https://sheets.googleapis.com/v4/spreadsheets/1dBJsbyAqPW7mCfUK75PhNpYogvdBzUNSo8MhWpN1-m4/values/Sheet1?key=AIzaSyAGe_OI64jR8xEQNpQ_mNYXAhLUpon7lYg'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }

        const data = await response.json();
        console.log('Received data:', data);

        // Skip header row if it exists and map the values
        const items = (data.values || [])
          .slice(1)
          .map((row: string[]) => {
            const url = row[1] || '';
            return {
              title: row[0] || 'Untitled',
              url,
              type: determineMediaType(url)
            };
          });

        console.log('Processed media items:', items);
        setMediaItems(items);
      } catch (err) {
        console.log('Error fetching media:', err);
        setError('Failed to load media. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const renderMediaContent = (item: MediaItem) => {
    if (item.type === 'video') {
      return (
        <div className="relative h-full w-full pt-[56.25%] bg-black flex items-center justify-center">
          <iframe
            src={item.url}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    } else {
      return (
        <div className="relative w-full pt-[75%] overflow-hidden">
          {/* Blurred background image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              filter: 'blur(10px) brightness(0.9)',
              transform: 'scale(1.1)', // Prevent blur edges from showing
            }}
          />
          {/* Main image */}
          <img
            src={item.url}
            alt={item.title}
            className="absolute top-0 left-0 w-full h-full object-contain hover:scale-105 transition-transform duration-300 z-10"
            loading="lazy"
          />
        </div>
      );
    }
  };

  return (
    <div id="media-section" className="mt-6 md:mt-12">
      <div className="flex justify-center mb-8">
        <button 
          onClick={scrollToMedia}
          className="px-6 md:px-8 py-3 md:py-4 bg-green-500/80 text-white rounded-xl text-lg md:text-xl hover:bg-green-600/80 transition-colors"
        >
          Media
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {loading && <LoadingFrogs />}
        {error && <div className="col-span-full text-center text-red-500">{error}</div>}
        {mediaItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col bg-white rounded-xl overflow-hidden border-2 border-yellow-200 hover:border-yellow-300 transition-colors"
          >
            <div className="p-2 bg-yellow-100/50">
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
            {renderMediaContent(item)}
          </div>
        ))}
      </div>
    </div>
  );
}