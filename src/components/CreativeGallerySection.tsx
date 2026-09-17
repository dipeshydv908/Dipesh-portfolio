import React, { useState } from 'react';
import { 
  Palette, Sliders, Eye, X 
} from 'lucide-react';
import { INITIAL_CREATIVE_WORKS } from '../data/portfolioData';
import { CreativeItem } from '../types';

const CATEGORIES = [
  'All',
  'Photo Editing',
  'Video Editing',
  'Social Media Design'
];

export const CreativeGallerySection: React.FC = () => {
  const works: CreativeItem[] = INITIAL_CREATIVE_WORKS;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPreview, setSelectedPreview] = useState<CreativeItem | null>(null);
  const [comparisonSlider, setComparisonSlider] = useState(50);

  const filteredWorks = activeFilter === 'All'
    ? works
    : works.filter((w) => w.category === activeFilter || w.tags.includes(activeFilter));

  return (
    <section id="editing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono">
            <Palette className="w-3.5 h-3.5" />
            <span>06 // VISUAL ARTISTRY &amp; EDITING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Creative <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Editing Gallery</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A visual showcase of photo editing, video editing, and social media design projects.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center mb-10">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPreview(item)}
              className="group rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-purple-500/10 cursor-pointer flex flex-col justify-between"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d24] via-transparent to-transparent opacity-80" />

                {/* Category Pill on top-left */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-purple-300">
                    {item.category}
                  </span>
                </div>

                {/* If it has before/after image indicator */}
                {item.beforeImageUrl && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono font-medium text-cyan-300 flex items-center gap-1">
                      <Sliders className="w-3 h-3" /> Before/After
                    </span>
                  </div>
                )}

                {/* Hover Quick Preview Action */}
                <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500 text-white font-bold text-xs shadow-xl shadow-purple-500/30">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Showcase</span>
                  </span>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-purple-300 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {item.tags.map((tg) => (
                    <span
                      key={tg}
                      className="px-2 py-0.5 rounded-md bg-slate-950/80 text-[10px] font-mono text-slate-400"
                    >
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Creative Showcase Modal */}
      {selectedPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedPreview(null)}
        >
          <div
            className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#090d24] border border-purple-500/30 p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-[11px] font-mono mb-1 inline-block">
                  {selectedPreview.category}
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {selectedPreview.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPreview(null)}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* If Before / After exists, show interactive slider */}
            {selectedPreview.beforeImageUrl ? (
              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Slide to compare: Original vs. Retouched</span>
                  <span className="text-purple-400 font-bold">{comparisonSlider}% Edited</span>
                </div>

                <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden select-none border border-slate-800">
                  {/* Edited (After) Image */}
                  <img
                    src={selectedPreview.imageUrl}
                    alt="Retouched After"
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Original (Before) Image with clip path */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${comparisonSlider}%` }}
                  >
                    <img
                      src={selectedPreview.beforeImageUrl}
                      alt="Original Before"
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', height: '100%' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/70 text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                      BEFORE
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/70 text-[10px] font-mono text-purple-300 border border-purple-500/30">
                    AFTER
                  </div>

                  {/* Vertical Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                    style={{ left: `${comparisonSlider}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -left-3.5 w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white shadow-lg">
                      <Sliders className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Interactive Slider Input Overlay */}
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={comparisonSlider}
                    onChange={(e) => setComparisonSlider(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                  />
                </div>
              </div>
            ) : (
              /* Single Full Preview */
              <div className="mb-6 rounded-2xl overflow-hidden border border-slate-800 max-h-[60vh] flex items-center justify-center bg-slate-950">
                <img
                  src={selectedPreview.imageUrl}
                  alt={selectedPreview.title}
                  className="w-full h-full max-h-[60vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* Description & Tags */}
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {selectedPreview.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                {selectedPreview.tags.map((tg) => (
                  <span
                    key={tg}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300"
                  >
                    #{tg}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedPreview(null)}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs cursor-pointer shadow-lg shadow-purple-500/20"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
