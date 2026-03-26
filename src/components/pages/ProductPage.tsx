'use client';

import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, Minus, Plus } from 'lucide-react';

const mainImage = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop';
const thumbImages = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=200&h=200&fit=crop',
  'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&h=200&fit=crop',
];

const reviews = [
  { name: 'Alex M.', rating: 5, date: '2 days ago', text: 'Absolutely love these headphones! Sound quality is incredible and they\'re super comfortable for long listening sessions.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
  { name: 'Sarah K.', rating: 4, date: '1 week ago', text: 'Great product overall. Battery life could be better but the noise cancellation is top notch.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face' },
  { name: 'James L.', rating: 5, date: '2 weeks ago', text: 'Best purchase I\'ve made this year. Worth every penny.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face' },
];

export default function ProductPage() {
  return (
    <div style={{ fontFamily: 'var(--t-font-body)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div>
          <div
            className="h-96 overflow-hidden mb-4"
            style={{
              borderRadius: 'var(--t-radius)',
              border: `var(--t-border-width) solid var(--t-border)`,
            }}
          >
            <img
              src={mainImage}
              alt="Wireless Headphones Pro"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2">
            {thumbImages.map((img, i) => (
              <div
                key={i}
                className="w-20 h-20 overflow-hidden cursor-pointer"
                style={{
                  borderRadius: 'var(--t-radius)',
                  border: `var(--t-border-width) solid ${i === 0 ? 'var(--t-primary)' : 'var(--t-border)'}`,
                }}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product details */}
        <div>
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--t-muted-fg)' }}>Electronics</p>
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--t-font-heading)' }}>
            Wireless Headphones Pro
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={16} fill={i <= 4 ? 'var(--t-accent)' : 'none'} style={{ color: 'var(--t-accent)' }} />
              ))}
            </div>
            <span className="text-sm font-medium">4.5</span>
            <span className="text-sm" style={{ color: 'var(--t-muted-fg)' }}>(234 reviews)</span>
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold">$89.99</span>
            <span className="text-lg line-through" style={{ color: 'var(--t-muted-fg)' }}>$129.99</span>
            <span
              className="px-2 py-0.5 text-xs font-bold"
              style={{
                backgroundColor: 'var(--t-success)',
                color: '#fff',
                borderRadius: 'var(--t-radius)',
              }}
            >
              30% OFF
            </span>
          </div>

          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--t-muted-fg)' }}>
            Premium wireless headphones with active noise cancellation, 40-hour battery life,
            and Hi-Res Audio support. Features comfortable memory foam ear cushions and a
            lightweight titanium frame.
          </p>

          {/* Color selection */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Color</p>
            <div className="flex gap-2">
              {['#1e293b', '#f5f5f4', '#dc2626', '#2563eb'].map((c, i) => (
                <button
                  key={c}
                  className="w-8 h-8 rounded-full"
                  style={{
                    backgroundColor: c,
                    border: i === 0 ? '3px solid var(--t-primary)' : '2px solid var(--t-border)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Quantity</p>
            <div
              className="inline-flex items-center"
              style={{
                border: `var(--t-border-width) solid var(--t-border)`,
                borderRadius: 'var(--t-radius)',
              }}
            >
              <button className="p-2 hover:opacity-70"><Minus size={16} /></button>
              <span className="px-4 text-sm font-medium">1</span>
              <button className="p-2 hover:opacity-70"><Plus size={16} /></button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mb-6">
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors hover:opacity-90"
              style={{
                backgroundColor: 'var(--t-primary)',
                color: 'var(--t-primary-fg)',
                borderRadius: 'var(--t-radius)',
              }}
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button
              className="p-3 transition-colors hover:opacity-70"
              style={{
                border: `var(--t-border-width) solid var(--t-border)`,
                borderRadius: 'var(--t-radius)',
              }}
            >
              <Heart size={18} />
            </button>
          </div>

          {/* Features */}
          <div
            className="grid grid-cols-3 gap-3 p-4"
            style={{
              backgroundColor: 'var(--t-muted)',
              borderRadius: 'var(--t-radius)',
            }}
          >
            {[
              { icon: Truck, label: 'Free Shipping' },
              { icon: Shield, label: '2 Year Warranty' },
              { icon: RotateCcw, label: '30-Day Return' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-1">
                <Icon size={18} style={{ color: 'var(--t-primary)' }} />
                <span className="text-[10px] font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--t-font-heading)' }}>Customer Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="p-4"
              style={{
                backgroundColor: 'var(--t-card)',
                border: `var(--t-border-width) solid var(--t-border)`,
                borderRadius: 'var(--t-radius)',
                boxShadow: 'var(--t-shadow)',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{review.name}</span>
                </div>
                <span className="text-xs" style={{ color: 'var(--t-muted-fg)' }}>{review.date}</span>
              </div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={12} fill={s <= review.rating ? 'var(--t-accent)' : 'none'} style={{ color: 'var(--t-accent)' }} />
                ))}
              </div>
              <p className="text-sm" style={{ color: 'var(--t-muted-fg)' }}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
