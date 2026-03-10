'use client';

import { useState, useEffect } from 'react';

const menuItems = [
  {
    name: 'Espresso Classico',
    description: 'Cà phê espresso nguyên chất, đậm đà và mạnh mẽ',
    price: '35.000đ',
    tag: 'Best Seller',
    emoji: '☕',
  },
  {
    name: 'Caramel Latte',
    description: 'Sữa tươi mịn màng hòa quyện cùng caramel thơm ngọt',
    price: '55.000đ',
    tag: 'Mới',
    emoji: '🥛',
  },
  {
    name: 'Matcha Fusion',
    description: 'Matcha Nhật Bản cao cấp kết hợp với sữa oat béo ngậy',
    price: '60.000đ',
    tag: 'Hot',
    emoji: '🍵',
  },
  {
    name: 'Cold Brew Tonic',
    description: 'Cold brew ngâm 24 giờ kết hợp tonic water sảng khoái',
    price: '65.000đ',
    tag: 'Đặc biệt',
    emoji: '🧊',
  },
  {
    name: 'Phô Mai Cà Phê',
    description: 'Cà phê Việt Nam truyền thống phủ lớp phô mai béo mịn',
    price: '50.000đ',
    tag: 'Việt Nam',
    emoji: '🧀',
  },
  {
    name: 'Coconut Cold Brew',
    description: 'Cold brew thơm lừng hoà quyện nước cốt dừa nhiệt đới',
    price: '58.000đ',
    tag: 'Trending',
    emoji: '🥥',
  },
];

const features = [
  {
    icon: '🌱',
    title: 'Hạt Cà Phê Tươi',
    description:
      'Nguồn gốc từ những vườn cà phê cao nguyên Việt Nam, thu hoạch thủ công và rang tươi mỗi ngày.',
  },
  {
    icon: '👨‍🍳',
    title: 'Barista Chuyên Nghiệp',
    description:
      'Đội ngũ barista được đào tạo bài bản, đam mê với từng tách cà phê hoàn hảo nhất.',
  },
  {
    icon: '🏡',
    title: 'Không Gian Ấm Cúng',
    description:
      'Thiết kế nội thất hiện đại pha trộn phong cách vintage, tạo không gian lý tưởng để thư giãn.',
  },
  {
    icon: '⚡',
    title: 'Phục Vụ Nhanh Chóng',
    description:
      'Hệ thống đặt hàng thông minh, đảm bảo bạn nhận được ly cà phê nóng hổi trong vài phút.',
  },
  {
    icon: '🎵',
    title: 'Âm Nhạc Cuối Tuần',
    description:
      'Live music acoustic vào cuối tuần, tạo bầu không khí thư giãn và lãng mạn.',
  },
  {
    icon: '📱',
    title: 'Đặt Trước Online',
    description:
      'Đặt bàn hoặc order trực tuyến, nhận ưu đãi thành viên và tích điểm đổi quà hấp dẫn.',
  },
];

const testimonials = [
  {
    name: 'Nguyễn Minh Anh',
    role: 'Khách hàng thân thiết',
    content:
      'Cà phê ở đây thực sự tuyệt vời! Không gian ấm cúng, barista thân thiện. Tôi đến đây mỗi sáng trước khi đi làm.',
    avatar: 'M',
    rating: 5,
  },
  {
    name: 'Trần Hoàng Nam',
    role: 'Food Blogger',
    content:
      'Là một food blogger, tôi đã thử rất nhiều quán cà phê nhưng đây là nơi tôi luôn quay lại. Chất lượng ổn định và menu sáng tạo.',
    avatar: 'N',
    rating: 5,
  },
  {
    name: 'Lê Thị Thu Hà',
    role: 'Designer',
    content:
      'Không gian rất phù hợp để làm việc và sáng tạo. WiFi nhanh, ổ điện đầy đủ và đồ uống luôn ngon. Địa điểm yêu thích của tôi!',
    avatar: 'H',
    rating: 5,
  },
];

export default function CafeLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-stone-950/95 backdrop-blur-md shadow-2xl shadow-amber-900/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center text-xl shadow-lg shadow-amber-500/30">
                ☕
              </div>
              <div>
                <span className="text-xl font-bold text-amber-400 tracking-wide">
                  AROMA
                </span>
                <span className="text-xl font-light text-white"> CAFÉ</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['Trang Chủ', 'Menu', 'Về Chúng Tôi', 'Liên Hệ'].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-stone-300 hover:text-amber-400 transition-colors duration-300 text-sm font-medium tracking-wide"
                  >
                    {item}
                  </a>
                )
              )}
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300">
                Đặt Bàn
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-stone-900/95 backdrop-blur-md rounded-2xl mb-4 p-4 space-y-3">
              {['Trang Chủ', 'Menu', 'Về Chúng Tôi', 'Liên Hệ'].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-stone-300 hover:text-amber-400 py-2 px-4 rounded-lg hover:bg-stone-800 transition-all duration-300"
                  >
                    {item}
                  </a>
                )
              )}
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-full font-semibold mt-2">
                Đặt Bàn Ngay
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-amber-950/30 to-stone-950" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-3xl" />
          </div>
          {/* Coffee beans decorative */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl opacity-5 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                ☕
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
            <span className="text-amber-400 text-sm font-medium">
              Mở cửa từ 7:00 - 22:00 mỗi ngày
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white">Mỗi Ngụm</span>
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Là Một Trải
            </span>
            <span className="block text-white">Nghiệm</span>
          </h1>

          <p className="text-stone-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Khám phá thế giới cà phê đặc sản với những hạt cà phê được tuyển
            chọn kỹ càng từ cao nguyên Việt Nam. Nơi mỗi tách cà phê kể một
            câu chuyện.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Xem Menu
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>
            <button className="flex items-center gap-3 text-stone-300 hover:text-amber-400 transition-colors duration-300 group">
              <div className="w-14 h-14 border border-stone-600 group-hover:border-amber-500/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-amber-500/10">
                <span className="text-amber-400">▶</span>
              </div>
              <span className="font-medium">Xem Video</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {[
              { num: '15+', label: 'Năm Kinh Nghiệm' },
              { num: '50+', label: 'Loại Đồ Uống' },
              { num: '10K+', label: 'Khách Hàng' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  {