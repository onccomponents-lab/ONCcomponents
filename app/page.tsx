\
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Factory,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Settings,
  Wrench,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-[28px] border border-slate-200 bg-white ${className}`}>
      {children}
    </div>
  );
}

function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition";
  const style =
    variant === "solid"
      ? "bg-red-600 text-white hover:bg-red-700"
      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50";

  if (href) {
    return (
      <a href={href} className={`${base} ${style} ${className}`}>
        {children}
      </a>
    );
  }

  return <button className={`${base} ${style} ${className}`}>{children}</button>;
}

const navItems = [
  { label: "Trang chủ", href: "#home" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Giải pháp", href: "#solutions" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Kiến thức", href: "#insights" },
  { label: "Liên hệ", href: "#contact" },
];

const categories = [
  {
    title: "Linh kiện khuôn ép nhựa",
    key: "Khuôn ép nhựa",
    desc: "Các dòng linh kiện tiêu chuẩn phục vụ khuôn ép nhựa với yêu cầu chính xác, ổn định và dễ thay thế theo nhu cầu sản xuất.",
    items: ["Chốt đẩy", "Bạc cuống phun", "Chốt hồi", "Bạc dẫn hướng"],
    icon: Layers,
  },
  {
    title: "Linh kiện khuôn dập",
    key: "Khuôn dập",
    desc: "Danh mục linh kiện tiêu chuẩn cho khuôn dập, phù hợp môi trường làm việc cường độ cao và yêu cầu độ bền lớn.",
    items: ["Chày", "Cối", "Lò xo khuôn", "Linh kiện dẫn hướng"],
    icon: Factory,
  },
  {
    title: "Phụ kiện đánh bóng khuôn mẫu",
    key: "Đánh bóng",
    desc: "Danh mục vật tư và dụng cụ đánh bóng khuôn như đá mài, giấy nhám, paste kim cương, dụng cụ đánh bóng giúp nâng cao độ bóng bề mặt khuôn.",
    items: ["Đá mài", "Giấy nhám", "Paste kim cương", "Dụng cụ đánh bóng"],
    icon: Wrench,
  },
  {
    title: "Tư vấn giải pháp khuôn mẫu",
    key: "Giải pháp khuôn mẫu",
    desc: "Hỗ trợ phân tích nhu cầu, tư vấn chọn linh kiện phù hợp và đề xuất phương án tối ưu cho cấu trúc khuôn mẫu thực tế.",
    items: ["Tư vấn thiết kế sản phẩm", "Thiết kế khuôn", "Phân tích dòng chảy", "Gia công & xử lý bề mặt"],
    icon: Settings,
  },
];

const products = [
  {
    name: "Ejector Pin SKD61",
    category: "Hệ đẩy",
    standard: "SKD61 / Tiêu chuẩn",
    use: "Khuôn ép nhựa",
    desc: "Độ cứng ổn định, phù hợp cho nhiều cấu hình hệ đẩy tiêu chuẩn.",
    image: "/images/products/ejector-pin-skd61.png",
  },
  {
    name: "Leader Bushing",
    category: "Dẫn hướng",
    standard: "Chuẩn dẫn hướng",
    use: "Khuôn ép nhựa / khuôn dập",
    desc: "Gia tăng độ chính xác định hướng trong quá trình đóng mở khuôn.",
    image: "/images/products/leader-bushing.png",
  },
  {
    name: "Return Pin",
    category: "Hệ đẩy",
    standard: "Tiêu chuẩn thay thế",
    use: "Khuôn ép nhựa",
    desc: "Hỗ trợ hoàn trả hệ đẩy, tăng tính ổn định cho chu kỳ vận hành.",
    image: "/images/products/return-pin.png",
  },
  {
    name: "Leader Pin",
    category: "Dẫn hướng",
    standard: "Chuẩn khuôn mẫu",
    use: "Khuôn ép nhựa / khuôn dập",
    desc: "Chốt dẫn hướng chính giúp đảm bảo độ chính xác khi đóng mở khuôn và tăng độ bền hệ thống.",
    image: "/images/products/leader-pin.png",
  },
  {
    name: "Date Mark Insert",
    category: "Phụ kiện",
    standard: "Insert marking",
    use: "Khuôn ép nhựa",
    desc: "Giải pháp hiển thị ký hiệu thời gian sản xuất trực tiếp trên sản phẩm ép nhựa.",
    image: "/images/products/date-mark-insert.png",
  },
  {
    name: "Tapered Pin Set",
    category: "Định vị",
    standard: "Định vị côn",
    use: "Khuôn dập / khuôn ép nhựa",
    desc: "Tăng độ chính xác khi định vị và lặp lại vị trí giữa các cụm khuôn.",
    image: "/images/products/tapered-pin-set.png",
  },
  {
    name: "Quick-Fitting Joints",
    category: "Khí nén",
    standard: "Pneumatic fittings",
    use: "Hệ thống khí nén / tự động hóa",
    desc: "Đầu nối nhanh khí nén giúp kết nối ống nhanh chóng, kín khí, dễ tháo lắp và phù hợp nhiều cấu hình hệ thống.",
    image: "/images/products/quick-fitting-joints.png",
  },
  {
    name: "Mold Spring",
    category: "Khuôn dập",
    standard: "Lò xo khuôn",
    use: "Khuôn dập",
    desc: "Lò xo khuôn tiêu chuẩn với nhiều mức tải, đảm bảo độ đàn hồi ổn định và tuổi thọ cao trong môi trường làm việc cường độ lớn.",
    image: "/images/products/mold-spring.png",
  },
];

const polishingProducts = [
  { name: "AG-035 Máy mài khí nén mini", specs: ["Kẹp 3.0mm + 6.0mm", "30.000 vòng/phút", "0,35kg"] },
  { name: "AG-636 Máy mài khí nén mini", specs: ["Kẹp 3.0mm + 6.0mm", "35.000 vòng/phút", "0,3kg"] },
  { name: 'CAL-630A Máy mài khí nén mini', specs: ['Kẹp 3.0mm + 3/32"', "50.000 vòng/phút", "0,3kg"] },
  { name: 'CAL-680A Máy mài khí nén mini', specs: ['Kẹp 3.0mm + 3/32"', "60.000 vòng/phút", "0,25kg"] },
  { name: "UTR-30 Máy rà khí nén turbo", specs: ["Hành trình 0,3mm", "52.000 nhịp/phút", "0,7kg"] },
  { name: "UTR-70 Máy rà khí nén turbo", specs: ["Hành trình 0,7mm", "35.000 nhịp/phút", "0,7kg"] },
  { name: "MAG-123A Máy mài khí nén đầu góc", specs: ["Đế nhám 30mm", "23.500 vòng/phút", "0,34kg"] },
  { name: "MAG-093A Máy mài khí nén đầu góc", specs: ["Đế nhám 30mm", "23.500 vòng/phút", "0,34kg"] },
  { name: "CAL-622-4 Máy mài khí nén", specs: ["Kẹp 3.0mm + 6.0mm", "22.000 vòng/phút", "0,63kg"] },
  { name: "CAL-501A Bút khắc khí nén mini", specs: ["Đầu hợp kim 2.0mm", "18.000 nhịp/phút", "0,24kg"] },
];

const solutions = [
  {
    title: "Tư vấn thiết kế sản phẩm",
    desc: "Phân tích khả năng sản xuất, dự đoán biến dạng, co rút và tối ưu thiết kế ngay từ giai đoạn đầu.",
  },
  {
    title: "Tư vấn và thiết kế khuôn",
    desc: "Kết hợp thiết kế khuôn với phân tích kỹ thuật nhằm đảm bảo tính khả thi, giảm lỗi và tối ưu hiệu suất sản xuất.",
  },
  {
    title: "Phân tích dòng chảy",
    desc: "Phân tích dòng chảy vật liệu để dự đoán lỗi như short shot, weld line, air trap và tối ưu cấu trúc khuôn.",
  },
  {
    title: "Giải pháp gia công và xử lý bề mặt",
    desc: "Đề xuất phương án gia công kết hợp xử lý bề mặt nhằm tăng độ bền, độ chính xác và tuổi thọ khuôn.",
  },
];

const insights = [
  {
    title: "Cách chọn chốt đẩy phù hợp cho khuôn ép nhựa",
    excerpt: "Các yếu tố về vật liệu, độ cứng, đường kính và môi trường vận hành ảnh hưởng trực tiếp đến tuổi thọ chốt đẩy.",
  },
  {
    title: "Khi nào nên thay thế bạc dẫn hướng?",
    excerpt: "Nhận biết dấu hiệu mài mòn, lệch tâm và các rủi ro nếu tiếp tục sử dụng linh kiện dẫn hướng xuống cấp.",
  },
  {
    title: "Lợi ích của việc chuẩn hóa linh kiện khuôn",
    excerpt: "Chuẩn hóa giúp tăng khả năng thay thế, rút ngắn thời gian dừng máy và tối ưu công tác bảo trì.",
  },
];

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filterOptions = ["Tất cả", "Khuôn ép nhựa", "Khuôn dập"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "Tất cả" ||
        product.category === activeCategory ||
        product.use.includes(activeCategory);
      const q = searchTerm.trim().toLowerCase();
      const matchesSearch =
        q.length === 0 ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.use.toLowerCase().includes(q) ||
        product.standard.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        <a href="tel:0387356896" className="rounded-full bg-red-600 p-3 text-white shadow-lg transition hover:scale-105">
          <Phone className="h-5 w-5" />
        </a>
        <a href="#contact" className="rounded-full bg-slate-900 p-3 text-white shadow-lg transition hover:scale-105">
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <a href="#home" className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-white shadow-sm font-bold">
                ONC
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Mold Components & Solutions
                </p>
                <h1 className="truncate text-sm font-bold md:text-base">
                  Công ty TNHH Linh kiện và Giải pháp khuôn mẫu ONC
                </h1>
              </div>
            </div>
          </a>

          <div className="hidden max-w-xl flex-1 lg:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm theo tên linh kiện, ứng dụng, tiêu chuẩn..."
                className="h-11 w-full rounded-2xl border border-slate-300 pl-11 pr-4 outline-none focus:border-slate-400"
              />
            </div>
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <div className="text-right">
              <p className="text-xs text-slate-500">Hotline</p>
              <a href="tel:0387356896" className="text-lg font-bold text-red-600">
                0387 356 896
              </a>
            </div>
            <Button href="#contact" className="bg-slate-900 hover:bg-slate-800">
              Báo giá nhanh
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-2xl border border-slate-200 p-2 lg:hidden"
            aria-label="Mở menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="border-t border-slate-100">
          <div className="mx-auto hidden max-w-7xl items-center justify-between px-6 lg:flex">
            <nav className="flex items-center gap-1 py-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-red-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-red-600" />
              <span>101/55/46 Lạch Tray, Lê Chân, Hải Phòng</span>
            </div>
          </div>

          {mobileOpen && (
            <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm sản phẩm..."
                  className="h-11 w-full rounded-2xl border border-slate-300 pl-11 pr-4 outline-none focus:border-slate-400"
                />
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        <section id="home" className="bg-gradient-to-br from-slate-50 via-white to-red-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm text-red-700 shadow-sm">
                <CheckCircle2 className="h-4 w-4" />
                Nhà cung cấp linh kiện tiêu chuẩn & giải pháp khuôn mẫu
              </div>
              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Linh kiện tiêu chuẩn khuôn mẫu và tư vấn giải pháp kỹ thuật cho doanh nghiệp sản xuất
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                ONC tập trung vào các nhóm linh kiện khuôn ép nhựa, khuôn dập, hệ dẫn hướng, hệ đẩy sản phẩm và các giải pháp tối ưu vận hành khuôn phù hợp nhu cầu thực tế.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#products">
                  Xem danh mục sản phẩm <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="#solutions" variant="outline">
                  Nhận tư vấn giải pháp
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="overflow-hidden shadow-xl">
                <div className="bg-[linear-gradient(135deg,#111827_0%,#dc2626_100%)] p-8 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-red-100">Danh mục trọng tâm</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <div key={category.title} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                          <div className="flex items-start gap-3">
                            <div className="rounded-xl bg-white/15 p-2">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold">{category.title}</p>
                              <p className="mt-1 text-sm leading-6 text-red-50/90">{category.items.join(" • ")}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Sản phẩm</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Danh mục linh kiện tiêu chuẩn khuôn mẫu
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Cấu trúc danh mục được xây theo hướng dễ tra cứu, phù hợp với cách khách hàng kỹ thuật tìm kiếm linh kiện theo nhóm ứng dụng và tiêu chuẩn.
              </p>
            </div>
            <Button href="#contact" variant="outline">
              Yêu cầu tư vấn danh mục
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="h-full shadow-sm hover:shadow-lg">
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-2xl bg-red-50 p-3 text-red-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-400" />
                    </div>
                    <h4 className="mt-5 text-xl font-bold">{category.title}</h4>
                    <p className="mt-3 leading-7 text-slate-600">{category.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-14 rounded-[32px] border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="mb-10 rounded-[28px] border border-slate-200 bg-white p-6 md:p-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Danh mục đánh bóng khuôn mẫu
                </p>
                <h4 className="mt-3 text-2xl font-bold md:text-3xl">
                  Dụng cụ đánh bóng và gia công tinh theo catalog tiếng Việt
                </h4>
                <p className="mt-3 leading-7 text-slate-600">
                  File GitHub-ready này đã tích hợp danh sách sản phẩm đánh bóng đã Việt hóa. PDF catalog gốc cũng được đính kèm trong thư mục public để bạn tiếp tục tách ảnh hoặc bổ sung chi tiết nếu cần.
                </p>
              </div>

              <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
                  File PDF gốc nằm tại:
                  <div className="mt-2 rounded-xl bg-white px-4 py-3 font-mono text-xs text-slate-700">
                    /public/images/catalog/polishing-catalog-source.pdf
                  </div>
                  Bạn có thể thay tiếp ảnh cắt riêng từng trang catalog vào thư mục:
                  <div className="mt-2 rounded-xl bg-white px-4 py-3 font-mono text-xs text-slate-700">
                    /public/images/catalog/
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  {polishingProducts.map((item) => (
                    <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.specs.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h4 className="text-2xl font-bold">Sản phẩm nổi bật</h4>
                <p className="mt-2 text-slate-600">Tìm nhanh theo nhóm linh kiện hoặc từ khóa kỹ thuật.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setActiveCategory(option)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeCategory === option
                        ? "bg-red-600 text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <Card key={product.name} className="shadow-sm">
                  <div className="p-5">
                    <div className="flex h-36 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={240}
                        className="h-full w-full rounded-xl object-contain"
                      />
                    </div>
                    <h5 className="mt-5 text-lg font-bold leading-7">{product.name}</h5>
                    <div className="mt-3 space-y-2 text-sm text-slate-600">
                      <p><span className="font-semibold text-slate-800">Nhóm:</span> {product.category}</p>
                      <p><span className="font-semibold text-slate-800">Ứng dụng:</span> {product.use}</p>
                      <p><span className="font-semibold text-slate-800">Tiêu chuẩn:</span> {product.standard}</p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{product.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-slate-900 py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                Giải pháp khuôn mẫu
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                ONC không chỉ cung cấp linh kiện mà còn đồng hành tư vấn giải pháp kỹ thuật
              </h3>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {solutions.map((solution) => (
                <Card
                  key={solution.title}
                  className="border-white/10 bg-white/5 text-white shadow-none"
                >
                  <div className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/20 text-red-200">
                      <Settings className="h-5 w-5" />
                    </div>
                    <h4 className="mt-5 text-xl font-bold leading-8">{solution.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{solution.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="shadow-sm">
              <div className="p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Giới thiệu ONC
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Đơn vị cung cấp linh kiện tiêu chuẩn và giải pháp hỗ trợ khuôn mẫu
                </h3>
                <p className="mt-5 leading-8 text-slate-600">
                  ONC định hướng xây dựng hình ảnh là đối tác kỹ thuật đáng tin cậy cho doanh nghiệp sản xuất, xưởng gia công khuôn và các đơn vị cần nguồn linh kiện tiêu chuẩn ổn định.
                </p>
              </div>
            </Card>

            <Card className="bg-slate-50 shadow-sm">
              <div className="p-7">
                <h4 className="text-2xl font-bold">Thông tin doanh nghiệp</h4>
                <div className="mt-5 space-y-4 text-slate-700">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                    <p>101/55/46 Lạch Tray, Lê Chân, Hải Phòng, Việt Nam</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                    <p>0387356896 / 0343632506</p>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                    <p>email@onc.vn</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="insights" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Kiến thức / SEO
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Nội dung kỹ thuật giúp tăng uy tín và khả năng tìm kiếm
            </h3>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {insights.map((item) => (
              <Card key={item.title} className="shadow-sm">
                <div className="p-6">
                  <div className="flex h-40 items-center justify-center rounded-2xl bg-slate-50 text-center text-sm text-slate-400">
                    Ảnh bài viết / minh họa kỹ thuật
                  </div>
                  <h4 className="mt-5 text-xl font-bold leading-8">{item.title}</h4>
                  <p className="mt-3 leading-7 text-slate-600">{item.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white md:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="border-white/10 bg-white/5 text-white shadow-none">
              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                  Điểm mạnh
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">
                  Website nên truyền tải điều gì?
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Phản hồi nhanh, tư vấn rõ nhu cầu kỹ thuật.",
                    "Danh mục định hướng tốt cho khách tìm linh kiện theo nhóm.",
                    "Phong cách làm việc phù hợp doanh nghiệp sản xuất và xưởng khuôn.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200"
                    >
                      “{item}”
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card id="contact" className="border-white/10 bg-white text-slate-900 shadow-none">
              <div className="p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Liên hệ / báo giá
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">Gửi yêu cầu cho ONC</h3>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <input
                    className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-slate-400"
                    placeholder="Họ và tên"
                  />
                  <input
                    className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-slate-400"
                    placeholder="Số điện thoại"
                  />
                  <input
                    className="h-12 rounded-2xl border border-slate-300 px-4 outline-none focus:border-slate-400 md:col-span-2"
                    placeholder="Tên công ty / xưởng"
                  />
                  <textarea
                    className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-400 md:col-span-2"
                    placeholder="Mô tả nhu cầu, tiêu chuẩn, kích thước hoặc vấn đề kỹ thuật cần hỗ trợ"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
