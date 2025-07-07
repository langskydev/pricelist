import React, { useState, useMemo } from 'react';
import { FaSearch, FaFilter, FaSortAmountUp, FaSortAmountDown, FaTag, FaStar, FaUsers, FaLock } from 'react-icons/fa';

const PriceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  // Data produk dengan berbagai varian
  const products = [
    {
      id: 1,
      name: 'Netflix',
      category: 'film',
      icon: '📺',
      variants: [
        { type: '1P2U', price: 16000, description: '1 Profile 2 User', badge: 'Popular' },
        { type: '1P1U', price: 25000, description: '1 Profile 1 User', badge: '' },
        { type: 'Semi Private', price: 30000, description: '1 Profile 1 User bisa 2 device, akun dari seller', badge: '' },
        { type: 'Private', price: 135000, description: 'Private Account', badge: 'Premium' }
      ]
    },
    {
      id: 2,
      name: 'YouTube Premium',
      category: 'film',
      icon: '📹',
      variants: [
        { type: 'Via Invite', price: 2000, description: 'Email pembeli', badge: 'Cheapest' },
        { type: 'Famplan', price: 5000, description: 'Email penjual', badge: 'Popular' },
        { type: 'Individual', price: 7000, description: 'Email penjual', badge: '' },
        { type: 'Famhead', price: 10000, description: 'Email penjual + bisa invite', badge: '' }
      ]
    },
    {
      id: 3,
      name: 'Spotify',
      category: 'musik',
      icon: '🎵',
      variants: [
        { type: 'Famplan', price: 21000, description: 'Akun dari penjual yang udah di invite', badge: '' },
        { type: 'Indplan', price: 22000, description: 'Akun pembeli yang di invite oleh penjual', badge: 'Popular' }
      ]
    },
    {
      id: 4,
      name: 'Canva Pro',
      category: 'edit',
      icon: '🎨',
      variants: [
        { type: 'Via Invite', price: 1000, description: 'Via invite', badge: 'Best Deal' },
        { type: 'Admin', price: 7000, description: 'Bisa invite 100 anggota', badge: '' },
        { type: 'Owner', price: 9000, description: 'Bisa invite 50 anggota', badge: 'Premium' }
      ]
    },
    {
      id: 5,
      name: 'Zoom',
      category: 'meeting',
      icon: '📞',
      variants: [
        { type: '1 Jam', price: 3000, description: 'Akun dari seller', badge: '' },
        { type: '7 Hari', price: 4000, description: 'Akun dari seller', badge: 'Popular' },
        { type: '14 Hari', price: 7000, description: 'Akun dari seller', badge: '' }
      ]
    },
    {
      id: 6,
      name: 'Alight Motion',
      category: 'edit',
      icon: '🎬',
      variants: [
        { type: 'Private 1 Tahun', price: 7000, description: 'Akun dari admin garansi 5 bulan', badge: 'Best Value' }
      ]
    },
    {
      id: 7,
      name: 'Apple Music',
      category: 'musik',
      icon: '🍎',
      variants: [
        { type: 'Famplan 1 Bulan', price: 10000, description: 'Via invite dan wajib fresh/belum pernah gabung family', badge: '' },
        { type: 'Indplan 3 Bulan', price: 18000, description: 'Akun dari admin', badge: 'Popular' }
      ]
    },
    {
      id: 8,
      name: 'WeTV',
      category: 'film',
      icon: '📺',
      variants: [
        { type: 'Shared 6U', price: 7000, description: '6 user, akun dari seller', badge: '' },
        { type: 'Shared 3U', price: 10000, description: '3 user anti limit, akun dari seller', badge: 'Popular' },
        { type: 'Shared 3 Bulan', price: 17000, description: 'Akun dari seller', badge: '' },
        { type: 'Private 1 Bulan', price: 27000, description: 'Akun dari seller', badge: 'Premium' }
      ]
    },
    {
      id: 9,
      name: 'Vidio',
      category: 'film',
      icon: '🎥',
      variants: [
        { type: 'Sharing Plat', price: 16000, description: 'Sharing Platinum', badge: '' },
        { type: 'Private Plat', price: 26000, description: 'Private Platinum', badge: 'Popular' },
        { type: 'Private Diamond', price: 50000, description: 'Private Diamond', badge: 'Premium' }
      ]
    },
    {
      id: 10,
      name: 'Prime Video',
      category: 'film',
      icon: '🎬',
      variants: [
        { type: 'Sharing 1 Bulan', price: 7000, description: 'Sharing 1 bulan', badge: '' },
        { type: 'Private', price: 13000, description: 'Private account', badge: 'Popular' }
      ]
    },
    {
      id: 11,
      name: 'RCTI+',
      category: 'film',
      icon: '📺',
      variants: [
        { type: 'Sharing 2U', price: 14000, description: '2 user', badge: '' },
        { type: 'Private', price: 23000, description: 'Private account', badge: 'Premium' }
      ]
    },
    {
      id: 12,
      name: 'Microsoft 365',
      category: 'office',
      icon: '💼',
      variants: [
        { type: '1 Bulan', price: 13000, description: 'Via invite', badge: 'Business' }
      ]
    }
  ];

  // Categories untuk filter
  const categories = [
    { value: 'all', label: 'Semua Kategori', icon: '🌟' },
    { value: 'film', label: 'Film & Video', icon: '🎬' },
    { value: 'musik', label: 'Musik', icon: '🎵' },
    { value: 'edit', label: 'Design & Edit', icon: '🎨' },
    { value: 'meeting', label: 'Meeting & Video Call', icon: '📞' },
    { value: 'office', label: 'Office & Productivity', icon: '💼' }
  ];

  // Filter dan sort produk
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter berdasarkan search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter berdasarkan kategori
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter berdasarkan harga
    if (priceFilter !== 'all') {
      filtered = filtered.map(product => ({
        ...product,
        variants: product.variants.filter(variant => {
          if (priceFilter === 'murah') return variant.price <= 20000;
          if (priceFilter === 'sedang') return variant.price > 20000 && variant.price <= 50000;
          if (priceFilter === 'mahal') return variant.price > 50000;
          return true;
        })
      })).filter(product => product.variants.length > 0);
    }

    // Sort berdasarkan harga terendah dari setiap produk
    filtered.sort((a, b) => {
      const minPriceA = Math.min(...a.variants.map(v => v.price));
      const minPriceB = Math.min(...b.variants.map(v => v.price));
      return sortOrder === 'asc' ? minPriceA - minPriceB : minPriceB - minPriceA;
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceFilter, sortOrder]);

  // Format harga ke Rupiah
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Get badge color
  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Popular': return 'bg-blue-500 text-white';
      case 'Premium': return 'bg-purple-500 text-white';
      case 'Best Deal': return 'bg-green-500 text-white';
      case 'Cheapest': return 'bg-red-500 text-white';
      case 'Best Value': return 'bg-orange-500 text-white';
      case 'Business': return 'bg-gray-700 text-white';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  // Get variant icon
  const getVariantIcon = (type) => {
    if (type.includes('Private')) return <FaLock className="text-purple-500" />;
    if (type.includes('Sharing') || type.includes('Famplan')) return <FaUsers className="text-blue-500" />;
    if (type.includes('Invite')) return <FaTag className="text-green-500" />;
    return <FaStar className="text-yellow-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent mb-4">
            Daftar Harga Premium Apps
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan aplikasi premium dengan harga terbaik dan transparan untuk kebutuhan Anda
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari aplikasi..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <select
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none transition-all"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.icon} {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="all">💰 Semua Harga</option>
                <option value="murah">🔥 ≤ 20.000</option>
                <option value="sedang">⭐ 20.000 - 50.000</option>
                <option value="mahal">💎  50.000</option>
              </select>
            </div>

            {/* Sort Order */}
            <div className="flex">
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-600 to-red-900 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
              >
                {sortOrder === 'asc' ? <FaSortAmountUp className="mr-2" /> : <FaSortAmountDown className="mr-2" />}
                {sortOrder === 'asc' ? 'Termurah' : 'Termahal'}
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            🎯 Menampilkan <span className="font-bold text-red-600">{filteredProducts.length}</span> produk
          </p>
        </div>

        {/* Products Cards */}
        <div className="space-y-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-xl">Tidak ada produk yang ditemukan</p>
              <p className="text-gray-400 mt-2">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-300">

                {/* Product Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-900 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{product.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold">{product.name}</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                          {categories.find(cat => cat.value === product.category)?.icon} {categories.find(cat => cat.value === product.category)?.label}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-90">Mulai dari</p>
                      <p className="text-2xl font-bold">
                        {formatPrice(Math.min(...product.variants.map(v => v.price)))}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Variants Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.variants.map((variant, variantIndex) => (
                      <div key={variantIndex} className="relative bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-200 group">

                        {/* Badge */}
                        {variant.badge && (
                          <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(variant.badge)} shadow-md`}>
                            {variant.badge}
                          </div>
                        )}

                        {/* Variant Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            {getVariantIcon(variant.type)}
                            <span className="font-semibold text-gray-800">{variant.type}</span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="mb-3">
                          <span className="text-2xl font-bold text-red-600">{formatPrice(variant.price)}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {variant.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Info Section */}
        <div className="mt-12 space-y-6">

          {/* Terms & Conditions */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
              <FaTag className="mr-3" />
              Keterangan Varian & Istilah
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { term: '1P1U', desc: '1 Profile 1 User - Akun sharing untuk 1 pengguna', icon: '👤' },
                { term: '1P2U', desc: '1 Profile 2 User - Akun sharing untuk 2 pengguna', icon: '👥' },
                { term: 'Semi Private', desc: 'Akun semi private dengan akses terbatas', icon: '🔒' },
                { term: 'Private', desc: 'Akun private penuh untuk Anda sendiri', icon: '🔐' },
                { term: 'Via Invite', desc: 'Akun melalui undangan/invite', icon: '📧' },
                { term: 'Famplan', desc: 'Family Plan - Akun keluarga', icon: '👨‍👩‍👧‍👦' },
                { term: 'Individual', desc: 'Akun individual', icon: '🎯' },
                { term: 'Famhead', desc: 'Kepala keluarga yang bisa mengundang', icon: '👑' },
                { term: 'Sharing', desc: 'Akun berbagi dengan pengguna lain', icon: '🤝' },
                { term: 'Fresh', desc: 'Akun baru yang belum pernah digunakan', icon: '✨' },
                { term: 'Anti Limit', desc: 'Tanpa batasan penggunaan', icon: '🚀' },
                { term: 'Garansi', desc: 'Jaminan waktu tertentu jika bermasalah', icon: '🛡️' }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:shadow-md transition-all">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-red-900">{item.term}</h4>
                      <p className="text-sm text-red-700 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
              <FaStar className="mr-3" />
              Catatan Penting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Email Pembeli', desc: 'Gunakan email Anda sendiri untuk layanan tertentu', icon: '📧' },
                { title: 'Email Penjual', desc: 'Menggunakan email yang disediakan seller', icon: '📮' },
                { title: 'Akun dari Seller/Admin', desc: 'Akun yang sudah disiapkan oleh penjual', icon: '🔧' },
                { title: 'Garansi', desc: 'Jika ada masalah dalam periode garansi, akan diganti dengan akun baru', icon: '🛡️' },
                { title: 'Fresh Account', desc: 'Wajib menggunakan akun yang belum pernah bergabung dengan family plan', icon: '✨' },
                { title: 'Support 24/7', desc: 'Tim support siap membantu Anda kapan saja', icon: '💬' }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:shadow-md transition-all">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-red-900">{item.title}</h4>
                      <p className="text-sm text-red-700 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PriceList;
