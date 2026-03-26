'use client';

import { ShoppingCart, Star, Heart, Filter, Search } from 'lucide-react';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 89.99, rating: 4.5, reviews: 234, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop', category: 'Electronics', badge: 'Best Seller' },
  { id: 2, name: 'Leather Backpack', price: 129.99, rating: 4.8, reviews: 89, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop', category: 'Bags', badge: 'New' },
  { id: 3, name: 'Running Shoes', price: 159.99, rating: 4.3, reviews: 567, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop', category: 'Sports', badge: null },
  { id: 4, name: 'Mechanical Keyboard', price: 149.99, rating: 4.7, reviews: 312, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&fit=crop', category: 'Electronics', badge: 'Popular' },
  { id: 5, name: 'Smart Watch', price: 299.99, rating: 4.6, reviews: 445, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop', category: 'Electronics', badge: null },
  { id: 6, name: 'Canvas Tote Bag', price: 39.99, rating: 4.2, reviews: 78, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=300&fit=crop', category: 'Bags', badge: 'Sale' },
  { id: 7, name: 'Yoga Mat Pro', price: 69.99, rating: 4.9, reviews: 201, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop', category: 'Sports', badge: null },
  { id: 8, name: 'Desk Lamp LED', price: 54.99, rating: 4.4, reviews: 156, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop', category: 'Home', badge: 'New' },
];

const categories = ['All', 'Electronics', 'Bags', 'Sports', 'Home'];

export default function ShopCatalog() {
  return (
    <div style={{ fontFamily: 'var(--t-font-body)' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--t-font-heading)' }}>Shop</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--t-muted-fg)' }}>{products.length} products</p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-2 px-3 py-2"
            style={{
              backgroundColor: 'var(--t-muted)',
              borderRadius: 'var(--t-radius)',
              border: `var(--t-border-width) solid var(--t-border)`,
            }}
          >
            <Search size={16} style={{ color: 'var(--t-muted-fg)' }} />
            <span className="text-sm" style={{ color: 'var(--t-muted-fg)' }}>Search products...</span>
          </div>
          <button
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium"
            style={{
              border: `var(--t-border-width) solid var(--t-border)`,
              borderRadius: 'var(--t-radius)',
              color: 'var(--t-fg)',
            }}
          >
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className="px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors"
            style={{
              backgroundColor: i === 0 ? 'var(--t-primary)' : 'var(--t-muted)',
              color: i === 0 ? 'var(--t-primary-fg)' : 'var(--t-fg)',
              borderRadius: 'var(--t-radius)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div
            key={product.id}
            className="group relative overflow-hidden transition-all hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--t-card)',
              border: `var(--t-border-width) solid var(--t-border)`,
              borderRadius: 'var(--t-radius)',
              boxShadow: 'var(--t-shadow)',
            }}
          >
            {/* Image area */}
            <div
              className="relative h-48 overflow-hidden"
              style={{ backgroundColor: 'var(--t-muted)' }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.badge && (
                <span
                  className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold uppercase"
                  style={{
                    backgroundColor: product.badge === 'Sale' ? 'var(--t-destructive)' : 'var(--t-primary)',
                    color: 'var(--t-primary-fg)',
                    borderRadius: 'var(--t-radius)',
                  }}
                >
                  {product.badge}
                </span>
              )}
              <button
                className="absolute top-2 right-2 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundColor: 'var(--t-card)',
                  borderRadius: '50%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <Heart size={16} style={{ color: 'var(--t-muted-fg)' }} />
              </button>
            </div>

            {/* Content */}
            <div className="p-3">
              <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--t-muted-fg)' }}>
                {product.category}
              </p>
              <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--t-font-heading)' }}>
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-2">
                <Star size={12} fill="var(--t-accent)" style={{ color: 'var(--t-accent)' }} />
                <span className="text-xs font-medium">{product.rating}</span>
                <span className="text-xs" style={{ color: 'var(--t-muted-fg)' }}>({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <button
                  className="p-2 transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: 'var(--t-primary)',
                    color: 'var(--t-primary-fg)',
                    borderRadius: 'var(--t-radius)',
                  }}
                >
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
