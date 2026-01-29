import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-lg shadow-black/5 border-b border-[#C6A664]/20">
                <div className="max-w-7xl mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Green Vista Realty"
                                width={180}
                                height={60}
                                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="hidden md:flex items-center gap-1">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "MAHA Mumbai", href: "#maha-mumbai" },
                                { name: "Locations", href: "#locations" },
                                { name: "Projects", href: "#projects" },
                                { name: "Why Us", href: "#why-us" },
                                { name: "Contact", href: "#contact" },
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1B4D3E] transition-all duration-300 group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#C6A664] to-[#D4B87A] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="tel:8655956840"
                                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1B4D3E] to-[#2A6B55] text-white text-sm font-semibold rounded-full hover:shadow-xl hover:shadow-[#1B4D3E]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                8655956840
                            </a>
                            <a
                                href="#contact"
                                className="hidden lg:inline-flex px-5 py-2.5 bg-gradient-to-r from-[#C6A664] to-[#D4B87A] text-white text-sm font-semibold rounded-full hover:shadow-xl hover:shadow-[#C6A664]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                            >
                                Enquire Now
                            </a>
                            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <svg className="w-6 h-6 text-[#1B4D3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D3E] via-[#0F3329] to-[#1B4D3E]">
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A664' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-[#C6A664]/30 mb-8">
                            <span className="w-2 h-2 bg-[#C6A664] rounded-full animate-pulse"></span>
                            <span className="text-[#C6A664] text-sm font-medium tracking-wide">Only Plots — Pure Land Ownership</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight">
                            Invest in
                            <span className="block mt-2 font-semibold bg-gradient-to-r from-[#C6A664] via-[#D4B87A] to-[#C6A664] bg-clip-text text-transparent">
                                MAHA Mumbai
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-light">
                            Premium plots in Khopoli & Alibaug with clear titles, government-approved documentation,
                            and exceptional connectivity via Atal Setu (MTHL) & upcoming Navi Mumbai International Airport.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#locations"
                                className="group px-8 py-4 bg-gradient-to-r from-[#C6A664] to-[#D4B87A] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#C6A664]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Explore Locations
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 border-2 border-[#C6A664]/50 text-white font-semibold rounded-full hover:bg-[#C6A664]/10 hover:border-[#C6A664] transition-all duration-300"
                            >
                                Schedule Site Visit
                            </a>
                        </div>

                        {/* Key Highlights */}
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {[
                                { icon: "🛣️", text: "Atal Setu: 20-25 mins" },
                                { icon: "✈️", text: "NMIA Airport Nearby" },
                                { icon: "📋", text: "Clear Title Deeds" },
                                { icon: "💰", text: "Flexible Payments" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-center gap-2 text-gray-300">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        <div className="w-8 h-12 border-2 border-[#C6A664]/50 rounded-full flex items-start justify-center p-2">
                            <div className="w-1.5 h-3 bg-[#C6A664] rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAHA Mumbai Section */}
            <section id="maha-mumbai" className="py-24 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#C6A664] font-medium tracking-widest text-sm uppercase">Pre-Planned City Development</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1B4D3E] mt-4 mb-6">MAHA Mumbai 3.0</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            A future-ready, well-structured urban region designed to decongest Old Mumbai and Navi Mumbai.
                            It acts as an <strong>economic extension of Mumbai</strong>, not a replacement.
                        </p>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {[
                            { icon: "🏛️", title: "Government-Notified", desc: "Officially approved and backed by state policies" },
                            { icon: "🏗️", title: "Infrastructure-First", desc: "Focus on large-scale infrastructure and connectivity" },
                            { icon: "📜", title: "Policy-Backed", desc: "Planning aligned with MMRDA, CIDCO, and state policies" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-[#1B4D3E] mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Connectivity Section */}
                    <div className="bg-gradient-to-br from-[#1B4D3E] to-[#0F3329] rounded-3xl p-10 md:p-16">
                        <h3 className="text-3xl font-semibold text-white text-center mb-12">Key Transport Links</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Atal Setu */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="w-16 h-16 bg-[#C6A664] rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">🌉</span>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">Atal Setu (MTHL)</h4>
                                <p className="text-[#C6A664] font-semibold mb-3">20-25 mins from Mumbai</p>
                                <ul className="text-gray-300 space-y-2 text-sm">
                                    <li>• India&apos;s longest coastal sea bridge (21.8 km)</li>
                                    <li>• Six-lane sea link</li>
                                    <li>• Connects Sewri to Nhava Sheva</li>
                                </ul>
                            </div>

                            {/* Navi Mumbai Airport */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="w-16 h-16 bg-[#C6A664] rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">✈️</span>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">Navi Mumbai Airport (NMIA)</h4>
                                <p className="text-[#C6A664] font-semibold mb-3">30 mins away</p>
                                <ul className="text-gray-300 space-y-2 text-sm">
                                    <li>• India&apos;s largest greenfield airport</li>
                                    <li>• Biggest newly developed airport in India</li>
                                    <li>• Transforms region into aviation hub</li>
                                </ul>
                            </div>

                            {/* Multi-Modal Corridor */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="w-16 h-16 bg-[#C6A664] rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">🚇</span>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">Multi-Modal Corridor</h4>
                                <p className="text-[#C6A664] font-semibold mb-3">126 km Network</p>
                                <ul className="text-gray-300 space-y-2 text-sm">
                                    <li>• Connects Virar to Alibaug</li>
                                    <li>• Enhances north-south connectivity</li>
                                    <li>• Boost to logistics & real estate</li>
                                </ul>
                            </div>
                        </div>

                        {/* Additional Connectivity */}
                        <div className="mt-12 grid md:grid-cols-4 gap-6">
                            {[
                                { icon: "🚂", title: "Local Trains", desc: "Expanding rail network" },
                                { icon: "🚇", title: "Metro Network", desc: "Siddhivinayak to Apta" },
                                { icon: "🚤", title: "Water Taxi", desc: "Mumbai to Mandwa (40 mins)" },
                                { icon: "🛣️", title: "Expressways", desc: "Mumbai-Pune & NH-66" },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <span className="text-3xl">{item.icon}</span>
                                    <h5 className="text-white font-semibold mt-2">{item.title}</h5>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section id="locations" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#C6A664] font-medium tracking-widest text-sm uppercase">Prime Investment Destinations</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1B4D3E] mt-4 mb-6">Our Locations</h2>
                    </div>

                    {/* Khopoli */}
                    <div className="mb-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-4 py-2 bg-[#1B4D3E] text-white text-sm font-semibold rounded-full mb-6">
                                    📍 Khopoli - Pali
                                </span>
                                <h3 className="text-3xl md:text-4xl font-semibold text-[#1B4D3E] mb-6">
                                    Why Invest in Plots in Khopoli?
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Khopoli is no longer just a quiet getaway—it has evolved into a rapidly growing real estate destination.
                                    With the transformative Mumbai Trans Harbour Link (MTHL) reducing travel time to South Mumbai to just 45 minutes,
                                    Khopoli is fast becoming a preferred choice for both investors and homebuyers.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { icon: "🛣️", title: "Prime Connectivity", desc: "MTHL makes it a seamless extension of Mumbai" },
                                        { icon: "📈", title: "Rising Property Values", desc: "Land prices on upward trajectory, high ROI potential" },
                                        { icon: "🌿", title: "Natural Beauty", desc: "Serene surroundings with Western Ghats backdrop" },
                                        { icon: "💎", title: "Affordable Luxury", desc: "Premium plots at competitive rates vs Mumbai" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-[#FAF8F5] rounded-xl flex items-center justify-center text-2xl">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#1B4D3E] mb-1">{item.title}</h4>
                                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#FAF8F5] rounded-3xl p-8">
                                <h4 className="text-xl font-semibold text-[#1B4D3E] mb-6">Top 10 Tourist Destinations</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        "Imagica Theme Park", "KP Falls (Kalote Waterfall)",
                                        "Zenith Waterfall", "Ashtavinayak Ballaleshwar Temple",
                                        "Gagangiri Ashram", "Tungarli Lake",
                                        "Duke's Nose", "Rajmachi Fort",
                                        "Lonavala", "Khandala"
                                    ].map((place, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                            <span className="w-2 h-2 bg-[#C6A664] rounded-full"></span>
                                            {place}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alibaug */}
                    <div className="bg-gradient-to-br from-[#1B4D3E] to-[#2A6B55] rounded-3xl p-10 md:p-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-4 py-2 bg-[#C6A664] text-white text-sm font-semibold rounded-full mb-6">
                                    🏖️ ALIBAUG: GOA OF MUMBAI
                                </span>
                                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                                    Why Alibaug is a Prime Plot Investment Destination
                                </h3>
                                <p className="text-gray-300 mb-8">
                                    Alibaug redefines South Mumbai&apos;s legacy, offering a serene haven just 20 minutes by boat from SoBo
                                    and 5 minutes from Mandwa Jetty. It&apos;s not about leaving SoBo—it&apos;s about expanding, enhancing, and elevating it.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { label: "Proximity to Mumbai", value: "1.5-2 hours by road, 1 hr via ferry from Mandwa Jetty" },
                                        { label: "Scenic Coastal Lifestyle", value: "Beaches, scenic views, quieter atmosphere" },
                                        { label: "Growth Potential", value: "Rapid evolution to a premium realty hub" },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/10 rounded-xl p-4">
                                            <span className="text-[#C6A664] text-sm font-medium">{item.label}</span>
                                            <p className="text-white mt-1">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-white mb-6">How to Reach Alibaug</h4>
                                <div className="space-y-6">
                                    {[
                                        { icon: "🚤", mode: "SEAWAYS", time: "20 min speedboat", desc: "Gateway of India to Mandwa Jetty" },
                                        { icon: "🚗", mode: "ROADWAYS", time: "1.5-2 hours", desc: "Via Mumbai-Goa Highway (NH-66)" },
                                        { icon: "✈️", mode: "AIRWAYS", time: "30 min from NMIA", desc: "Navi Mumbai International Airport" },
                                        { icon: "🚂", mode: "RAILWAYS", time: "Via Panvel", desc: "CSMT → Panvel → Pen (scenic route)" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-14 h-14 bg-[#C6A664] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h5 className="text-white font-semibold">{item.mode} <span className="text-[#C6A664]">— {item.time}</span></h5>
                                                <p className="text-gray-300 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Buyer Profiles */}
                        <div className="mt-16 pt-12 border-t border-white/20">
                            <h4 className="text-2xl font-semibold text-white text-center mb-10">Who Is Buying in Alibaug?</h4>
                            <div className="grid md:grid-cols-4 gap-6">
                                {[
                                    { icon: "💼", title: "HNIs & NRIs", desc: "Wealthy buyers, NRIs, and premium investors" },
                                    { icon: "🌏", title: "Overseas Investors", desc: "Indians in Gulf, US, Singapore, Australia" },
                                    { icon: "⭐", title: "Celebrities", desc: "Film stars, business leaders & high-profile individuals" },
                                    { icon: "🏡", title: "Holiday Home Buyers", desc: "Professionals from Mumbai & Pune seeking coastal escape" },
                                ].map((item, i) => (
                                    <div key={i} className="text-center">
                                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                                            {item.icon}
                                        </div>
                                        <h5 className="text-white font-semibold mb-2">{item.title}</h5>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#C6A664] font-medium tracking-widest text-sm uppercase">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1B4D3E] mt-4 mb-6">Projects & Development Types</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "🏗️",
                                title: "Plotted Development",
                                desc: "Land divided into individual plots, sold separately for complete customization freedom",
                                status: "Ongoing"
                            },
                            {
                                icon: "🏡",
                                title: "Weekend Villa",
                                desc: "Private holiday homes for short stays, relaxation & leisure, away from city congestion",
                                status: "Ongoing"
                            },
                            {
                                icon: "🌾",
                                title: "Farmhouse Development",
                                desc: "Planned plots with clear ownership in peaceful natural areas with basic facilities",
                                status: "Ongoing"
                            },
                            {
                                icon: "🏨",
                                title: "Resort Layout Structure",
                                desc: "Thoughtfully planned development with plots, roads, open spaces organized resort-style",
                                status: "Upcoming"
                            },
                        ].map((project, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1B4D3E] to-[#2A6B55] rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                                    {project.icon}
                                </div>
                                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${project.status === 'Upcoming' ? 'bg-[#C6A664] text-white' : 'bg-green-100 text-green-700'}`}>
                                    {project.status}
                                </span>
                                <h3 className="text-xl font-semibold text-[#1B4D3E] mb-3">{project.title}</h3>
                                <p className="text-gray-600 text-sm">{project.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row Villa Section */}
                    <div className="mt-16 bg-white rounded-3xl p-10 md:p-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-semibold text-[#1B4D3E] mb-6">Row Villa Development</h3>
                                <p className="text-gray-600 mb-8">Villa Plots Ready for Construction with complete flexibility in design and layout.</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Row Villa Layout Options",
                                        "Customizable Homes & Designs",
                                        "High Appreciation Potential",
                                        "Lifestyle-Driven Coastal Living"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-700">
                                            <span className="w-6 h-6 bg-[#C6A664] rounded-full flex items-center justify-center text-white text-sm">✓</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#FAF8F5] rounded-2xl p-8">
                                <h4 className="font-semibold text-[#1B4D3E] mb-4">Legal Documentation Included</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {["7/12 Extract", "Case File Search Report", "100% Title Clear Verification", "Paper Notice", "Ferfar", "Gat Book", "Nakasha (Map/Layout)"].map((doc, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                            <span className="text-[#C6A664]">📄</span>
                                            {doc}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="why-us" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#C6A664] font-medium tracking-widest text-sm uppercase">Our Promise</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1B4D3E] mt-4 mb-6">Why Choose Green Vista?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🏠",
                                title: "Only Plots — Pure Land Ownership",
                                desc: "We specialize exclusively in plots — not apartments or villas — giving you complete control, freedom, and customization over your future home or investment."
                            },
                            {
                                icon: "📋",
                                title: "Clear Title Deeds Guaranteed",
                                desc: "We provide plots with fully verified and clear legal titles, giving you peace of mind and a secure investment."
                            },
                            {
                                icon: "📍",
                                title: "Strategic Location Plots",
                                desc: "Our plots are located in prime Alibaug & Khopoli areas with excellent connectivity and strong growth potential."
                            },
                            {
                                icon: "💰",
                                title: "Competitive Pricing",
                                desc: "We offer attractive pricing that delivers exceptional value compared to other available land options in the region."
                            },
                            {
                                icon: "📆",
                                title: "Flexible Payment Plans",
                                desc: "Our flexible payment plans make it easier for buyers to secure their ideal plot without financial strain."
                            },
                            {
                                icon: "🤝",
                                title: "Personalized Support",
                                desc: "We provide personalized guidance through every step of the purchase process, from site visits to documentation and beyond."
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#FAF8F5] rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#1B4D3E] mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Documentation */}
                    <div className="mt-16 bg-gradient-to-br from-[#1B4D3E] to-[#0F3329] rounded-3xl p-10 text-center">
                        <h3 className="text-2xl font-semibold text-white mb-4">Clear Titles & Documentation</h3>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            All our plots come with verified and clean legal titles, government-approved documentation,
                            and transparent paperwork that ensures no hidden risks.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["✓ Verified Legal Titles", "✓ Government-Approved Docs", "✓ No Hidden Risks", "✓ 100% Transparent"].map((item, i) => (
                                <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-[#C6A664] text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#1B4D3E] via-[#0F3329] to-[#1B4D3E] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A664' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                        Ready to Own Your <span className="text-[#C6A664]">Dream Plot</span>?
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Take the first step towards owning prime land in MAHA Mumbai&apos;s most promising locations
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-gradient-to-r from-[#C6A664] to-[#D4B87A] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#C6A664]/30 transition-all duration-300 hover:scale-105"
                        >
                            Request Site Visit
                        </a>
                        <a
                            href="tel:8655956840"
                            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call: 8655956840
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <span className="text-[#C6A664] font-medium tracking-widest text-sm uppercase">Get in Touch</span>
                            <h2 className="text-4xl md:text-5xl font-semibold text-[#1B4D3E] mt-4 mb-6">
                                Schedule a Site Visit
                            </h2>
                            <p className="text-gray-600 mb-10">
                                Interested in our plots? Book a site visit today and explore your future investment in person.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#1B4D3E] rounded-xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[#C6A664]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1B4D3E] mb-1">Office Address</h4>
                                        <p className="text-gray-600">Mahaavir Icon, Office No. 1102, 11th Floor, B-Wing<br />Sector-15, CBD Belapur, Navi Mumbai - 400416</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#1B4D3E] rounded-xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[#C6A664]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1B4D3E] mb-1">Phone</h4>
                                        <p className="text-gray-600">+91 8655956840</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#1B4D3E] rounded-xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[#C6A664]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1B4D3E] mb-1">Email</h4>
                                        <p className="text-gray-600">greenvistarealtyanddeveloper@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#1B4D3E] rounded-xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[#C6A664]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1B4D3E] mb-1">Instagram</h4>
                                        <a href="https://www.instagram.com/greenvista.realty" target="_blank" rel="noopener noreferrer" className="text-[#C6A664] hover:underline">@greenvista.realty</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-semibold text-[#1B4D3E] mb-6">Request a Callback</h3>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C6A664] focus:border-transparent outline-none transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C6A664] focus:border-transparent outline-none transition-all"
                                            placeholder="+91 99999 99999"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C6A664] focus:border-transparent outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Interested Location</label>
                                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C6A664] focus:border-transparent outline-none transition-all">
                                        <option>Select Location</option>
                                        <option>Khopoli - Pali</option>
                                        <option>Alibaug</option>
                                        <option>Both Locations</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C6A664] focus:border-transparent outline-none transition-all">
                                        <option>Select Project Type</option>
                                        <option>Plotted Development</option>
                                        <option>Weekend Villa</option>
                                        <option>Farmhouse</option>
                                        <option>Row Villa</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C6A664] focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-[#C6A664] to-[#D4B87A] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#C6A664]/30 transition-all duration-300 hover:scale-[1.02]"
                                >
                                    Submit Enquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1B4D3E] text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-10 mb-12">
                        <div className="md:col-span-2">
                            <div className="bg-white p-4 rounded-2xl inline-block mb-6 shadow-lg border border-gray-200">
                                <Image
                                    src="/logo.png"
                                    alt="Green Vista Realty"
                                    width={200}
                                    height={80}
                                    className="h-16 w-auto object-contain"
                                    priority
                                />
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Green Vista Realty and Developers Pvt Ltd specializes in premium plot investments in MAHA Mumbai&apos;s
                                most promising locations — Khopoli and Alibaug. Own your piece of Mumbai&apos;s future.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/greenvista.realty"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#C6A664] transition-all duration-300 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-[#C6A664] mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "Home", href: "#home" },
                                    { name: "MAHA Mumbai", href: "#maha-mumbai" },
                                    { name: "Locations", href: "#locations" },
                                    { name: "Projects", href: "#projects" },
                                    { name: "Why Us", href: "#why-us" },
                                    { name: "Contact", href: "#contact" },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-[#C6A664] mb-6">Contact Us</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li>+91 8655956840</li>
                                <li className="text-sm">greenvistarealtyanddeveloper@gmail.com</li>
                                <li className="text-sm">Mahaavir Icon, Office 1102, 11th Floor<br />CBD Belapur, Navi Mumbai - 400416</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2025 Green Vista Realty and Developers Pvt Ltd. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
