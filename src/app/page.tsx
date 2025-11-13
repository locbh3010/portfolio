"use client";

import { useEffect, useState } from "react";

import { motion, type Transition, type Variants } from "framer-motion";
import Link from "next/link";

const highlights = [
	{
		label: "Dòng code đã deploy",
		value: "2.4M+",
	},
	{
		label: "Độ hài lòng của khách hàng",
		value: "98%",
	},
	{
		label: "Dự án thành công",
		value: "35",
	},
	{
		label: "Năm kinh nghiệm",
		value: "6+",
	},
];

const skillGroups = [
	{
		title: "Front-end Core",
		skills: [
			"Next.js 15/16",
			"React 19",
			"TypeScript",
			"Tailwind CSS",
			"Vitest & Playwright",
			"React Compiler",
		],
	},
	{
		title: "UI Engineering",
		skills: [
			"Design System Architecture",
			"Interactive Animations (Framer Motion)",
			"Headless UI Patterns",
			"Storybook Automation",
			"Accessibility (WCAG 2.1 AA)",
			"Design Tokens",
		],
	},
	{
		title: "Performance & Ops",
		skills: [
			"Edge Rendering (Vercel)",
			"React Server Components",
			"Core Web Vitals Optimization",
			"CI/CD GitHub Actions",
			"Sentry & Datadog Monitoring",
			"PNPM Monorepo",
		],
	},
	{
		title: "Soft Skills",
		skills: [
			"Product Discovery",
			"Technical Leadership",
			"Mentoring & Coaching",
			"Agile & Async Collaboration",
			"Stakeholder Management",
			"Design Critique Facilitation",
		],
	},
];

const projects = [
	{
		name: "LumenFlow Design Platform",
		description:
			"Xây dựng một hệ thống design platform hợp nhất cho 14 squad, dùng Next.js App Router với UI động theo vai trò, tối ưu TTFB giảm 43%.",
		role: "Lead Front-end Engineer",
		year: "2024",
		stack: ["Next.js", "Turborepo", "Tailwind CSS", "Storybook", "GraphQL"],
	},
	{
		name: "SkyRoute Travel Intelligence",
		description:
			"Triển khai dashboard dữ liệu thời gian thực với React Server Components và React Query, kết nối 27 API khác nhau, đạt Lighthouse 95+.",
		role: "Senior Front-end",
		year: "2023",
		stack: ["React", "React Query", "D3.js", "Supabase", "Mapbox"],
	},
	{
		name: "Aurora Commerce OS",
		description:
			"Thiết kế kiến trúc micro-frontend, chia sẻ design system và module thanh toán, giúp onboarding dev mới giảm còn 3 ngày.",
		role: "Tech Lead UI",
		year: "2022",
		stack: ["Next.js", "Module Federation", "Tailwind CSS", "Nx", "Playwright"],
	},
];

const timelines = [
	{
		period: "2024 ↔ 2025",
		title: "Principal Front-end Engineer · Nimbus Labs",
		description:
			"Dẫn dắt guild UI, triển khai Next.js 15 với React Compiler, tự động hóa E2E multi-tenant, giúp tăng tốc độ release lên 2 lần/tuần.",
	},
	{
		period: "2021 ↔ 2024",
		title: "Senior Front-end Developer · Stellar Studio",
		description:
			"Đồng kiến tạo design system đa nền tảng, tích hợp Theme Editor real-time, chuẩn hóa codebase TypeScript và test coverage 92%.",
	},
	{
		period: "2019 ↔ 2021",
		title: "Front-end Engineer · Pixel Forge",
		description:
			"Tập trung vào performance, tối ưu bundle và lazy-hydration, xây dựng component library hỗ trợ 9 ngôn ngữ.",
	},
];

const contactItems = [
	{
		label: "Email",
		value: "hello@locbh.dev",
		href: "mailto:hello@locbh.dev",
	},
	{
		label: "Điện thoại",
		value: "+84 911 123 456",
		href: "tel:+84911123456",
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/locbh",
		href: "https://www.linkedin.com/in/locbh",
	},
	{
		label: "Github",
		value: "github.com/locbh",
		href: "https://github.com/locbh",
	},
	{
		label: "Địa điểm",
		value: "TP. Hồ Chí Minh · Remote-friendly",
	},
];

const navItems = [
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "experience", label: "Experience" },
	{ id: "contact", label: "Contact" },
];

const baseTransition: Transition = {
	duration: 0.8,
	ease: "easeOut",
};

const fadeInUp: Variants = {
	initial: { opacity: 0, y: 40 },
	animate: {
		opacity: 1,
		y: 0,
		transition: baseTransition,
	},
};

const fadeInStagger: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.15,
		},
	},
};

export default function Home() {
	const [activeSection, setActiveSection] = useState<string>(
		navItems[0]?.id ?? ""
	);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				rootMargin: "-40% 0px -45% 0px",
				threshold: [0.2, 0.4, 0.6],
			}
		);

		navItems.forEach(item => {
			const section = document.getElementById(item.id);
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className="relative min-h-screen bg-slate-950 text-slate-100">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<motion.div
					aria-hidden
					className="absolute inset-0 opacity-70"
					animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
					transition={{
						duration: 28,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage:
							"radial-gradient(circle at 20% 20%, rgba(244,114,182,0.18), transparent 55%), radial-gradient(circle at 80% 30%, rgba(56,189,248,0.18), transparent 48%), radial-gradient(circle at 50% 85%, rgba(129,140,248,0.2), transparent 52%)",
						backgroundSize: "120% 120%",
					}}
				/>
				<motion.div
					aria-hidden
					className="absolute inset-0 opacity-20 mix-blend-screen"
					style={{
						backgroundImage:
							"linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
					}}
					animate={{
						backgroundPosition: ["0px 0px, 0px 0px", "32px 32px, 32px 32px"],
					}}
					transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
				/>
				<motion.div
					aria-hidden
					className="absolute top-40 -left-10 h-64 w-64 rounded-full bg-fuchsia-500/40 blur-3xl"
					animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
					transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					aria-hidden
					className="absolute right-0 bottom-32 h-52 w-52 rounded-full bg-cyan-500/40 blur-3xl"
					animate={{ y: [0, 25, 0], scale: [1, 0.9, 1] }}
					transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
				/>
				<div className="absolute inset-x-0 top-0 h-72 bg-linear-to-b from-slate-900 via-transparent to-transparent" />
				<div className="absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
			</div>

			<header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/80 backdrop-blur">
				<div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5 md:flex-row md:flex-wrap md:justify-center md:gap-8">
					<span className="font-heading text-sm font-semibold tracking-[0.25em] text-slate-200 uppercase">
						Bùi Hữu Lộc · locbh
					</span>
					<nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium tracking-[0.2em] text-slate-300 uppercase sm:text-sm">
						{navItems.map(item => (
							<a
								key={item.id}
								className={`border-b border-transparent pb-1 transition hover:text-white/90 ${
									activeSection === item.id
										? "border-fuchsia-400 text-white"
										: ""
								}`}
								href={`#${item.id}`}
							>
								{item.label}
							</a>
						))}
					</nav>
					<Link
						href="#contact"
						className="rounded-full border border-slate-700 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-slate-100 uppercase transition hover:border-fuchsia-500 hover:text-white"
					>
						Let&apos;s talk
					</Link>
				</div>
			</header>

			<main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 md:gap-32 md:py-28">
				<motion.section
					id="about"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
					className="relative flex flex-col items-center gap-12 rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/60 via-slate-950 to-slate-950/80 p-10 pt-12 text-center shadow-2xl shadow-fuchsia-500/10"
				>
					<div className="space-y-6 md:max-w-3xl">
						<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-slate-200 uppercase">
							Principal Front-end · Next.js Specialist
						</p>
						<h1 className="font-heading text-4xl leading-tight font-semibold text-white sm:text-5xl md:text-6xl">
							Tôi là Bùi Hữu Lộc (locbh) — biến ý tưởng thành trải nghiệm web
							đẳng cấp, mượt mà và có tác động.
						</h1>
						<p className="text-lg text-slate-300">
							Là Principal Front-end Engineer tập trung vào Next.js và React,
							tôi kết hợp product mindset, kiến trúc Design System và tình yêu
							dành cho UX để mang lại giá trị thật cho doanh nghiệp. Ưu tiên
							performance, accessibility và khả năng mở rộng lâu dài.
						</p>
						<div className="flex flex-wrap justify-center gap-3 text-sm text-slate-300">
							<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
								React Server Components
							</span>
							<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
								Design System Strategy
							</span>
							<span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
								Performance Obsessed
							</span>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
							<Link
								href="#projects"
								className="inline-flex items-center justify-center rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
							>
								Xem dự án tiêu biểu
							</Link>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-fuchsia-500 hover:text-white"
							>
								Đặt lịch tư vấn nhanh
							</Link>
						</div>
					</div>
				</motion.section>

				<motion.section
					id="highlights"
					className="grid gap-6 md:grid-cols-4"
					variants={fadeInStagger}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					{highlights.map(item => (
						<motion.div
							key={item.label}
							variants={fadeInUp}
							className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-slate-900/40"
							whileHover={{ scale: 1.04, translateY: -4 }}
							transition={{ type: "spring", stiffness: 220, damping: 16 }}
						>
							<p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
								{item.label}
							</p>
							<p className="mt-4 text-3xl font-semibold text-white">
								{item.value}
							</p>
						</motion.div>
					))}
				</motion.section>

				<motion.section
					id="skills"
					className="space-y-10"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
								Skill Radar
							</p>
							<h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
								Bộ kỹ năng nâng tầm sản phẩm
							</h2>
						</div>
						<p className="max-w-xl text-sm text-slate-300">
							Tôi biến knowledge thành quy trình thực chiến: từ dựng foundation,
							build component scale đến đo lường kết quả. Không chỉ code, mà còn
							giúp đội ngũ cùng phát triển.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						{skillGroups.map(group => (
							<motion.div
								key={group.title}
								variants={fadeInUp}
								className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-8"
								whileHover={{ translateY: -6 }}
								transition={{ type: "spring", stiffness: 260, damping: 22 }}
							>
								<h3 className="text-lg font-semibold text-white">
									{group.title}
								</h3>
								<ul className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
									{group.skills.map(skill => (
										<li
											key={skill}
											className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
										>
											<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
											{skill}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</motion.section>

				<motion.section
					id="projects"
					className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-10"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase">
								Featured Project Stories
							</p>
							<h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
								Những sản phẩm để đời tôi tự hào
							</h2>
						</div>
						<p className="max-w-lg text-sm text-slate-200">
							Mỗi dự án là một bài toán khác nhau: đa nền tảng, real-time,
							multi-tenant hay chuyên sâu về UX. Điểm chung: đều deliver đúng
							hạn với chất lượng vượt mong đợi.
						</p>
					</div>

					<div className="grid gap-8 lg:grid-cols-3">
						{projects.map(project => (
							<motion.article
								key={project.name}
								className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-fuchsia-500/60 hover:shadow-2xl hover:shadow-fuchsia-500/10"
								variants={fadeInUp}
								whileHover={{ translateY: -8 }}
								transition={{ type: "spring", stiffness: 240, damping: 18 }}
							>
								<div className="flex items-center justify-between text-xs tracking-[0.2em] text-slate-400 uppercase">
									<span>{project.role}</span>
									<span>{project.year}</span>
								</div>
								<h3 className="text-2xl font-semibold text-white">
									{project.name}
								</h3>
								<p className="text-sm text-slate-300">{project.description}</p>
								<div className="mt-auto flex flex-wrap gap-2 text-xs text-slate-200">
									{project.stack.map(tech => (
										<span
											key={tech}
											className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
										>
											{tech}
										</span>
									))}
								</div>
							</motion.article>
						))}
					</div>
				</motion.section>

				<motion.section
					id="experience"
					className="grid gap-8 rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950 to-slate-950/80 p-10 md:grid-cols-[1.2fr_0.8fr]"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="space-y-6">
						<p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
							Career Timeline
						</p>
						<h2 className="text-3xl font-semibold text-white md:text-4xl">
							Hành trình nâng cấp kỹ năng liên tục
						</h2>
						<p className="text-sm text-slate-300">
							Tôi tạo ảnh hưởng không chỉ bằng dòng code, mà còn bằng cách xây
							dựng quy trình, chia sẻ kiến thức và thúc đẩy đội ngũ đi nhanh hơn
							với chất lượng cao hơn.
						</p>
						<div className="space-y-6 border-l border-white/10 pl-6">
							{timelines.map(item => (
								<div key={item.title} className="space-y-2">
									<p className="text-xs tracking-[0.2em] text-fuchsia-300 uppercase">
										{item.period}
									</p>
									<h3 className="text-lg font-semibold text-white">
										{item.title}
									</h3>
									<p className="text-sm text-slate-300">{item.description}</p>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-6">
						<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
							<h3 className="text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">
								Impact Metrics
							</h3>
							<ul className="mt-4 space-y-4 text-sm text-slate-200">
								<li>
									• Tối ưu Core Web Vitals cho sản phẩm multi-tenant, tăng 23%
									conversion.
								</li>
								<li>
									• Rút ngắn thời gian build release từ 18 phút xuống còn 7 phút
									nhờ Turborepo & distributed caching.
								</li>
								<li>
									• Tạo chương trình mentorship nội bộ, nâng cấp kỹ năng UI cho
									12 developer chỉ trong 3 tháng.
								</li>
							</ul>
						</div>
						<div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
							<h3 className="text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">
								Sáng tạo khác biệt
							</h3>
							<p className="mt-4 text-sm text-slate-300">
								Tôi yêu thích thử nghiệm công nghệ mới như React Compiler,
								Generative UI và các workflow GitHub Copilot để nâng cao tốc độ
								phát triển mà vẫn đảm bảo chất lượng.
							</p>
						</div>
					</div>
				</motion.section>

				<motion.section
					className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-[0.7fr_1.3fr]"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="space-y-4">
						<p className="text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase">
							Testimonials
						</p>
						<h2 className="text-3xl font-semibold text-white md:text-4xl">
							Được tin tưởng bởi team toàn cầu
						</h2>
						<p className="text-sm text-slate-300">
							Đồng đội mô tả tôi là người kết nối giữa business, thiết kế và
							engineering — giúp đội ngũ tập trung vào outcome thay vì output.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						<blockquote className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6">
							<p className="text-sm text-slate-200">
								“Lộc mang đến mindset sản phẩm sắc bén và khả năng biến mockup
								phức tạp thành UI sống động, performance cao trong thời gian
								đáng kinh ngạc.”
							</p>
							<footer className="mt-auto text-xs text-slate-400">
								Quang Tran · VP of Product, Nimbus Labs
							</footer>
						</blockquote>
						<blockquote className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6">
							<p className="text-sm text-slate-200">
								“Khả năng dẫn dắt guild front-end giúp chúng tôi chuẩn hóa code
								base, giảm 40% bug do regression. Lộc luôn đi đầu trong việc
								chia sẻ kiến thức.”
							</p>
							<footer className="mt-auto text-xs text-slate-400">
								Thao Le · Engineering Manager, Stellar Studio
							</footer>
						</blockquote>
					</div>
				</motion.section>

				<motion.section
					className="grid gap-8 rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/60 via-slate-950 to-slate-950/80 p-10 md:grid-cols-[1fr_1fr]"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="space-y-4">
						<p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
							Workflow
						</p>
						<h2 className="text-3xl font-semibold text-white md:text-4xl">
							Quy trình cộng tác từng bước rõ ràng
						</h2>
						<p className="text-sm text-slate-300">
							Tôi tin rằng sản phẩm tuyệt vời được tạo nên từ sự hợp tác thân
							thiện và minh bạch. Đây là cách tôi làm việc với đối tác và đội
							ngũ.
						</p>
					</div>
					<div className="grid gap-4 text-sm text-slate-200">
						<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
							<p className="text-xs tracking-[0.2em] text-fuchsia-300 uppercase">
								01 · Immersion
							</p>
							<p className="mt-2">
								Nghiên cứu business, persona, journey và constraint kỹ thuật để
								cùng chốt mục tiêu rõ ràng.
							</p>
						</div>
						<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
							<p className="text-xs tracking-[0.2em] text-fuchsia-300 uppercase">
								02 · Blueprint
							</p>
							<p className="mt-2">
								Thiết kế kiến trúc front-end, define contract API, xây dựng
								component plan và test strategy.
							</p>
						</div>
						<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
							<p className="text-xs tracking-[0.2em] text-fuchsia-300 uppercase">
								03 · Build & Iterate
							</p>
							<p className="mt-2">
								Code sạch, review kỹ, pair programming và liên tục đo lường
								performance để đảm bảo chất lượng.
							</p>
						</div>
						<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
							<p className="text-xs tracking-[0.2em] text-fuchsia-300 uppercase">
								04 · Launch & Scale
							</p>
							<p className="mt-2">
								Deploy tự tin, monitor liên tục và optimize dựa trên dữ liệu
								thực tế của người dùng.
							</p>
						</div>
					</div>
				</motion.section>

				<motion.section
					id="contact"
					className="rounded-3xl border border-white/10 bg-white/5 p-10"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
						<div className="max-w-lg space-y-4">
							<p className="text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase">
								Contact
							</p>
							<h2 className="text-3xl font-semibold text-white md:text-4xl">
								Cùng tạo ra sản phẩm đáng nhớ
							</h2>
							<p className="text-sm text-slate-300">
								Mở lòng với cơ hội freelance, project ngắn hạn hoặc hợp tác dài
								hơi. Tôi ưu tiên những dự án tạo tác động lớn đến người dùng.
							</p>
							<Link
								href="mailto:hello@locbh.dev"
								className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
							>
								Gửi email ngay
							</Link>
						</div>
						<div className="grid gap-4 text-sm text-slate-200 md:grid-cols-2">
							{contactItems.map(item => (
								<div
									key={item.label}
									className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
								>
									<p className="text-xs tracking-[0.2em] text-slate-400 uppercase">
										{item.label}
									</p>
									{item.href ? (
										<Link
											href={item.href}
											className="mt-2 block text-base font-semibold text-white transition hover:text-fuchsia-400"
										>
											{item.value}
										</Link>
									) : (
										<p className="mt-2 text-base font-semibold text-white">
											{item.value}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
				</motion.section>
			</main>
		</div>
	);
}
