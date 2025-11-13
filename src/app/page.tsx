"use client";

import type { MouseEvent, TouchEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { motion, type Transition, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const highlights = [
	{
		label: "Lines of code deployed",
		value: "2.4M+",
	},
	{
		label: "Client satisfaction",
		value: "98%",
	},
	{
		label: "Successful projects",
		value: "8",
	},
	{
		label: "Years of experience",
		value: "2+",
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
			"A11y",
			"React Compiler",
		],
	},
	{
		title: "UI Engineering & Libraries",
		skills: [
			"Redux + Zustand",
			"Supabase",
			"WebSockets / Socket.io",
			"Headless UI Patterns",
			"Accessibility",
			"Design Tokens",
		],
	},
	{
		title: "Performance & SEO",
		skills: [
			"Core Web Vitals",
			"SSR & SSG",
			"Image Optimization",
			"Code Splitting",
			"Lighthouse Auditing",
			"SEO Strategy",
		],
	},
	{
		title: "Core & Soft Skills",
		skills: [
			"Git & Version Control",
			"Technical Leadership",
			"Mentoring & Coaching",
			"Teamwork & Collaboration",
			"Remote Work",
			"Accessibility",
		],
	},
];

const projects = [
	{
		name: "LumenFlow Design Platform",
		description:
			"Built a unified design platform system for 14 squads, using Next.js App Router with role-based dynamic UI, optimizing TTFB by 43%.",
		role: "Lead Front-end Engineer",
		year: "2024",
		image: "/projects/lumenflow.svg",
		imageAlt:
			"Design system dashboard interface with charts and component preview",
		stack: ["Next.js", "Turborepo", "Tailwind CSS", "Storybook", "GraphQL"],
	},
	{
		name: "SkyRoute Travel Intelligence",
		description:
			"Implemented real-time data dashboard with React Server Components and React Query, connecting 27 different APIs, achieving Lighthouse 95+.",
		role: "Senior Front-end",
		year: "2023",
		image: "/projects/skyroute.svg",
		imageAlt: "Travel data dashboard with map and trip route visualization",
		stack: ["React", "React Query", "D3.js", "Supabase", "Mapbox"],
	},
	{
		name: "Aurora Commerce OS",
		description:
			"Designed micro-frontend architecture, shared design system and payment module, reducing new developer onboarding to 3 days.",
		role: "Tech Lead UI",
		year: "2022",
		image: "/projects/aurora.svg",
		imageAlt: "E-commerce system with innovative UI modules",
		stack: ["Next.js", "Module Federation", "Tailwind CSS", "Nx", "Playwright"],
	},
];

const timelines = [
	{
		period: "2024 ↔ 2025",
		title: "Principal Front-end Engineer · Nimbus Labs",
		description:
			"Led UI guild, implemented Next.js 15 with React Compiler, automated E2E multi-tenant testing, increasing release velocity to 2x per week.",
	},
	{
		period: "2021 ↔ 2024",
		title: "Senior Front-end Developer · Stellar Studio",
		description:
			"Co-created cross-platform design system, integrated real-time Theme Editor, standardized TypeScript codebase with 92% test coverage.",
	},
	{
		period: "2019 ↔ 2021",
		title: "Front-end Engineer · Pixel Forge",
		description:
			"Focused on performance, optimized bundle and lazy-hydration, built component library supporting 9 languages.",
	},
];

const contactItems = [
	{
		label: "Email",
		value: "hello@locbh.dev",
		href: "mailto:hello@locbh.dev",
	},
	{
		label: "Phone",
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
		label: "Location",
		value: "Ho Chi Minh City · Remote-friendly",
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

	const setSpotlightPosition = useCallback(
		(element: HTMLElement, clientX: number, clientY: number) => {
			const bounds = element.getBoundingClientRect();
			const x = ((clientX - bounds.left) / bounds.width) * 100;
			const y = ((clientY - bounds.top) / bounds.height) * 100;

			element.style.setProperty("--spotlight-x", `${x}%`);
			element.style.setProperty("--spotlight-y", `${y}%`);
		},
		[]
	);

	const resetSpotlight = useCallback((element: HTMLElement) => {
		element.style.removeProperty("--spotlight-x");
		element.style.removeProperty("--spotlight-y");
	}, []);

	const handleSpotlightMove = useCallback(
		(event: MouseEvent<HTMLElement>) => {
			setSpotlightPosition(event.currentTarget, event.clientX, event.clientY);
		},
		[setSpotlightPosition]
	);

	const handleSpotlightLeave = useCallback(
		(event: MouseEvent<HTMLElement>) => {
			resetSpotlight(event.currentTarget);
		},
		[resetSpotlight]
	);

	const handleSpotlightTouchMove = useCallback(
		(event: TouchEvent<HTMLElement>) => {
			const touch = event.touches[0];
			if (!touch) return;

			setSpotlightPosition(event.currentTarget, touch.clientX, touch.clientY);
		},
		[setSpotlightPosition]
	);

	const handleSpotlightTouchEnd = useCallback(
		(event: TouchEvent<HTMLElement>) => {
			resetSpotlight(event.currentTarget);
		},
		[resetSpotlight]
	);

	const spotlightHandlers = useMemo(
		() => ({
			onMouseMove: handleSpotlightMove,
			onMouseLeave: handleSpotlightLeave,
			onTouchMove: handleSpotlightTouchMove,
			onTouchEnd: handleSpotlightTouchEnd,
		}),
		[
			handleSpotlightMove,
			handleSpotlightLeave,
			handleSpotlightTouchMove,
			handleSpotlightTouchEnd,
		]
	);

	const renderProjectCard = (
		project: (typeof projects)[number],
		index: number,
		{
			className = "",
			keySuffix = "",
			hoverShift = true,
		}: {
			className?: string;
			keySuffix?: string;
			hoverShift?: boolean;
		} = {}
	) => (
		<motion.article
			key={`${project.name}-${keySuffix || index}`}
			className={`spotlight-card group flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-fuchsia-500/60 hover:shadow-2xl hover:shadow-fuchsia-500/10 sm:p-7 ${className}`}
			variants={fadeInUp}
			whileHover={hoverShift ? { translateY: -8 } : undefined}
			transition={{ type: "spring", stiffness: 240, damping: 18 }}
			{...spotlightHandlers}
		>
			<div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:aspect-5/3">
				<Image
					src={project.image}
					alt={project.imageAlt}
					fill
					className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
					sizes="(min-width: 1280px) 360px, (min-width: 768px) 320px, 90vw"
					priority={index === 0}
				/>
				<div className="absolute inset-0 bg-linear-to-tr from-slate-950/65 via-slate-900/20 to-fuchsia-900/40 transition-opacity duration-500 group-hover:opacity-80" />
				<div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 pb-4 text-[0.6rem] font-semibold tracking-[0.25em] text-slate-200/80 uppercase sm:text-[0.65rem]">
					<span>{project.role}</span>
					<span>{project.year}</span>
				</div>
			</div>
			<div className="space-y-3">
				<h3 className="text-xl font-semibold text-white sm:text-2xl">
					{project.name}
				</h3>
				<p className="text-sm text-slate-300 sm:text-[0.95rem]">
					{project.description}
				</p>
			</div>
			<div className="mt-auto flex flex-wrap gap-2 text-[0.7rem] text-slate-200 sm:text-xs">
				{project.stack.map(tech => (
					<span
						key={`${project.name}-${tech}`}
						className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
					>
						{tech}
					</span>
				))}
			</div>
		</motion.article>
	);

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

			<header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/90 backdrop-blur">
				<div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between gap-3">
						<span className="font-heading text-[0.8rem] font-semibold tracking-[0.3em] text-slate-200 uppercase">
							Bùi Hữu Lộc · locbh
						</span>
						<Link
							href="#contact"
							className="hidden rounded-full border border-slate-700 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.25em] text-slate-100 uppercase transition hover:border-fuchsia-500 hover:text-white sm:inline-flex"
						>
							Let&apos;s talk
						</Link>
					</div>
					<nav className="flex items-center gap-2 overflow-x-auto pb-1 text-[0.65rem] font-semibold tracking-[0.22em] text-slate-300 uppercase sm:text-[0.7rem]">
						{navItems.map(item => {
							const isActive = activeSection === item.id;

							return (
								<a
									key={item.id}
									className={`rounded-full border px-4 py-1.5 whitespace-nowrap transition ${
										isActive
											? "border-fuchsia-400 bg-fuchsia-500/10 text-white shadow-[0_0_12px_rgba(236,72,153,0.25)]"
											: "border-white/10 bg-white/5 hover:border-fuchsia-400 hover:text-white"
									}`}
									href={`#${item.id}`}
								>
									{item.label}
								</a>
							);
						})}
					</nav>
					<Link
						href="#contact"
						className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.25em] text-slate-100 uppercase transition hover:border-fuchsia-500 hover:text-white sm:hidden"
					>
						Let&apos;s talk
					</Link>
				</div>
			</header>

			<main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:gap-20 sm:px-6 sm:py-20 lg:gap-32 lg:px-8 lg:py-28">
				<motion.section
					id="about"
					variants={fadeInUp}
					initial="initial"
					animate="animate"
					className="relative flex flex-col items-start gap-10 rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/60 via-slate-950 to-slate-950/80 p-6 pt-10 text-left shadow-2xl shadow-fuchsia-500/10 sm:items-center sm:gap-12 sm:p-8 sm:pt-12 sm:text-center lg:p-12"
				>
					<div className="space-y-6 md:max-w-3xl">
						<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.25em] text-slate-200 uppercase sm:px-4 sm:text-xs">
							Principal Front-end · Next.js Specialist
						</p>
						<h1 className="font-heading text-3xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
							I&apos;m Bùi Hữu Lộc (locbh) — transforming ideas into premium,
							smooth, and impactful web experiences.
						</h1>
						<p className="text-base text-slate-300 sm:text-lg">
							As a Principal Front-end Engineer focused on Next.js and React, I
							combine product mindset, Design System architecture, and a passion
							for UX to deliver real business value. Prioritizing performance,
							accessibility, and long-term scalability.
						</p>
						<div className="flex flex-wrap justify-start gap-2 text-sm text-slate-300 sm:justify-center sm:gap-3">
							<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
								React Server Components
							</span>
							<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
								Design System Strategy
							</span>
							<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
								Performance Obsessed
							</span>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
							<Link
								href="#projects"
								className="inline-flex items-center justify-center rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
							>
								View featured projects
							</Link>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-fuchsia-500 hover:text-white"
							>
								Schedule quick consultation
							</Link>
						</div>
					</div>
				</motion.section>

				<motion.section
					id="highlights"
					className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
					variants={fadeInStagger}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					{highlights.map(item => (
						<motion.div
							key={item.label}
							variants={fadeInUp}
							className="spotlight-card group rounded-3xl border border-white/10 bg-white/5 p-5 text-left shadow-lg shadow-slate-900/40 transition hover:border-fuchsia-500/60 hover:shadow-fuchsia-500/10 sm:text-center lg:p-6"
							whileHover={{ scale: 1.02, translateY: -6 }}
							transition={{ type: "spring", stiffness: 220, damping: 16 }}
							{...spotlightHandlers}
						>
							<p className="text-[0.7rem] font-semibold tracking-[0.25em] text-slate-400 uppercase">
								{item.label}
							</p>
							<p className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl">
								{item.value}
							</p>
						</motion.div>
					))}
				</motion.section>

				<motion.section
					id="skills"
					className="space-y-8 sm:space-y-10"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
						<div className="space-y-1">
							<p className="text-[0.7rem] font-semibold tracking-[0.25em] text-slate-400 uppercase sm:text-xs">
								Skill Radar
							</p>
							<h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
								Skills that elevate products
							</h2>
						</div>
						<p className="max-w-xl text-sm text-slate-300 sm:text-base">
							I transform knowledge into battle-tested processes: from building
							foundations, scaling components to measuring outcomes. Not just
							coding, but helping teams grow together.
						</p>
					</div>

					<div className="grid gap-5 sm:gap-6 md:grid-cols-2">
						{skillGroups.map(group => (
							<motion.div
								key={group.title}
								variants={fadeInUp}
								className="spotlight-card group flex flex-col gap-4 rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-6 transition hover:border-fuchsia-500/60 hover:shadow-2xl hover:shadow-fuchsia-500/10 sm:p-8"
								whileHover={{ translateY: -8 }}
								transition={{ type: "spring", stiffness: 260, damping: 22 }}
								{...spotlightHandlers}
							>
								<h3 className="text-base font-semibold text-white sm:text-lg">
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
					className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:space-y-10 sm:p-8 lg:p-10"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
						<div className="space-y-2">
							<p className="text-[0.7rem] font-semibold tracking-[0.25em] text-slate-300 uppercase sm:text-xs">
								Featured Project Stories
							</p>
							<h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
								Products I&apos;m proud to have built
							</h2>
						</div>
						<p className="max-w-xl text-sm text-slate-200 sm:text-[0.95rem]">
							Each project is a different challenge: cross-platform, real-time,
							multi-tenant, or UX-focused. Common thread: all delivered on time
							with quality that exceeds expectations.
						</p>
					</div>

					<motion.div
						className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3"
						variants={fadeInStagger}
					>
						{projects.map((project, index) =>
							renderProjectCard(project, index)
						)}
					</motion.div>
				</motion.section>

				<motion.section
					id="experience"
					className="grid gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950 to-slate-950/80 p-6 sm:gap-8 sm:p-8 md:grid-cols-[1.1fr_0.9fr] lg:p-10"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="space-y-5 sm:space-y-6">
						<p className="text-[0.7rem] font-semibold tracking-[0.25em] text-slate-400 uppercase sm:text-xs">
							Career Timeline
						</p>
						<h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
							Journey of continuous skill elevation
						</h2>
						<p className="text-sm text-slate-300 sm:text-[0.95rem]">
							I create impact not just through code, but by building processes,
							sharing knowledge, and empowering teams to move faster with higher
							quality.
						</p>
						<div className="space-y-4 sm:space-y-5 md:space-y-6 md:border-l md:border-white/10 md:pl-6">
							{timelines.map(item => (
								<div key={item.title} className="relative md:pl-6">
									<span className="absolute top-5 -left-3 hidden h-2.5 w-2.5 rounded-full bg-fuchsia-400 md:block" />
									<div
										className="spotlight-card group transform-gpu space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1.5 hover:border-fuchsia-500/60 hover:shadow-lg hover:shadow-fuchsia-500/10 md:rounded-none md:border-0 md:bg-transparent md:p-0"
										{...spotlightHandlers}
									>
										<p className="text-[0.7rem] tracking-[0.25em] text-fuchsia-300 uppercase sm:text-xs">
											{item.period}
										</p>
										<h3 className="text-base font-semibold text-white sm:text-lg">
											{item.title}
										</h3>
										<p className="text-sm text-slate-300 sm:text-[0.95rem]">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-5 sm:gap-6">
						<div
							className="spotlight-card group transform-gpu rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-2 hover:border-fuchsia-500/60 hover:shadow-2xl hover:shadow-fuchsia-500/10 sm:p-6"
							{...spotlightHandlers}
						>
							<h3 className="text-[0.75rem] font-semibold tracking-[0.25em] text-slate-300 uppercase sm:text-sm">
								Impact Metrics
							</h3>
							<ul className="mt-3 space-y-3 text-sm text-slate-200 sm:mt-4 sm:space-y-4">
								<li className="leading-relaxed">
									<span className="mr-2 text-fuchsia-300">•</span>Optimized Core
									Web Vitals for multi-tenant product, increased conversion by
									23%.
								</li>
								<li className="leading-relaxed">
									<span className="mr-2 text-fuchsia-300">•</span>Reduced build
									release time from 18 minutes to 7 minutes using Turborepo &
									distributed caching.
								</li>
								<li className="leading-relaxed">
									<span className="mr-2 text-fuchsia-300">•</span>Created
									internal mentorship program, upgraded UI skills for 12
									developers in just 3 months.
								</li>
							</ul>
						</div>
						<div
							className="spotlight-card group transform-gpu rounded-3xl border border-white/10 bg-slate-950/60 p-5 transition hover:-translate-y-2 hover:border-fuchsia-500/60 hover:shadow-2xl hover:shadow-fuchsia-500/10 sm:p-6"
							{...spotlightHandlers}
						>
							<h3 className="text-[0.75rem] font-semibold tracking-[0.25em] text-slate-300 uppercase sm:text-sm">
								Creative differentiation
							</h3>
							<p className="mt-3 text-sm text-slate-300 sm:mt-4 sm:text-[0.95rem]">
								I love experimenting with new technologies like React Compiler,
								Generative UI, and GitHub Copilot workflows to accelerate
								development while maintaining quality.
							</p>
						</div>
					</div>
				</motion.section>

				<motion.section
					className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:grid-cols-[0.75fr_1.25fr] lg:p-10"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="space-y-3 sm:space-y-4">
						<p className="text-[0.7rem] font-semibold tracking-[0.25em] text-slate-300 uppercase sm:text-xs">
							Testimonials
						</p>
						<h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
							Trusted by global teams
						</h2>
						<p className="text-sm text-slate-300 sm:text-[0.95rem]">
							Colleagues describe me as a bridge between business, design, and
							engineering — helping teams focus on outcomes rather than outputs.
						</p>
					</div>
					<div className="grid gap-4 sm:gap-6 md:grid-cols-2">
						<motion.blockquote
							className="spotlight-card group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:-translate-y-3 hover:border-fuchsia-500/60 hover:shadow-2xl hover:shadow-fuchsia-500/10 sm:p-6"
							whileHover={{ translateY: -12 }}
							transition={{ type: "spring", stiffness: 240, damping: 20 }}
							{...spotlightHandlers}
						>
							<p className="text-sm text-slate-200 sm:text-[0.95rem]">
								&ldquo;Loc brings sharp product mindset and the ability to
								transform complex mockups into vibrant, high-performance UI in
								remarkably short time.&rdquo;
							</p>
							<footer className="mt-auto text-[0.75rem] text-slate-400 sm:text-xs">
								Quang Tran · VP of Product, Nimbus Labs
							</footer>
						</motion.blockquote>
						<motion.blockquote
							className="spotlight-card group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:-translate-y-3 hover:border-fuchsia-500/60 hover:shadow-2xl hover:shadow-fuchsia-500/10 sm:p-6"
							whileHover={{ translateY: -12 }}
							transition={{ type: "spring", stiffness: 240, damping: 20 }}
							{...spotlightHandlers}
						>
							<p className="text-sm text-slate-200 sm:text-[0.95rem]">
								&ldquo;His ability to lead the front-end guild helped us
								standardize our codebase, reducing regression bugs by 40%. Loc
								is always at the forefront of knowledge sharing.&rdquo;
							</p>
							<footer className="mt-auto text-[0.75rem] text-slate-400 sm:text-xs">
								Thao Le · Engineering Manager, Stellar Studio
							</footer>
						</motion.blockquote>
					</div>
				</motion.section>

				<motion.section
					className="grid gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-slate-900/60 via-slate-950 to-slate-950/80 p-6 sm:gap-8 sm:p-8 md:grid-cols-[1fr_1fr] lg:p-10"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="space-y-3 sm:space-y-4">
						<p className="text-[0.7rem] font-semibold tracking-[0.25em] text-slate-400 uppercase sm:text-xs">
							Workflow
						</p>
						<h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
							Clear step-by-step collaboration process
						</h2>
						<p className="text-sm text-slate-300 sm:text-[0.95rem]">
							I believe great products are built through friendly and
							transparent collaboration. This is how I work with partners and
							teams.
						</p>
					</div>
					<div className="grid gap-3 text-sm text-slate-200 sm:gap-4">
						<div
							className="spotlight-card group transform-gpu rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-2 hover:border-fuchsia-500/60 hover:shadow-xl hover:shadow-fuchsia-500/10"
							{...spotlightHandlers}
						>
							<p className="text-[0.7rem] tracking-[0.25em] text-fuchsia-300 uppercase sm:text-xs">
								01 · Immersion
							</p>
							<p className="mt-2 leading-relaxed">
								Research business, personas, user journeys, and technical
								constraints to align on clear objectives together.
							</p>
						</div>
						<div
							className="spotlight-card group transform-gpu rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-2 hover:border-fuchsia-500/60 hover:shadow-xl hover:shadow-fuchsia-500/10"
							{...spotlightHandlers}
						>
							<p className="text-[0.7rem] tracking-[0.25em] text-fuchsia-300 uppercase sm:text-xs">
								02 · Blueprint
							</p>
							<p className="mt-2 leading-relaxed">
								Design front-end architecture, define API contracts, build
								component plans and test strategy.
							</p>
						</div>
						<div
							className="spotlight-card group transform-gpu rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-2 hover:border-fuchsia-500/60 hover:shadow-xl hover:shadow-fuchsia-500/10"
							{...spotlightHandlers}
						>
							<p className="text-[0.7rem] tracking-[0.25em] text-fuchsia-300 uppercase sm:text-xs">
								03 · Build & Iterate
							</p>
							<p className="mt-2 leading-relaxed">
								Clean code, thorough reviews, pair programming, and continuous
								performance monitoring to ensure quality.
							</p>
						</div>
						<div
							className="spotlight-card group transform-gpu rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-2 hover:border-fuchsia-500/60 hover:shadow-xl hover:shadow-fuchsia-500/10"
							{...spotlightHandlers}
						>
							<p className="text-[0.7rem] tracking-[0.25em] text-fuchsia-300 uppercase sm:text-xs">
								04 · Launch & Scale
							</p>
							<p className="mt-2 leading-relaxed">
								Deploy with confidence, monitor continuously, and optimize based
								on real user data.
							</p>
						</div>
					</div>
				</motion.section>

				<motion.section
					id="contact"
					className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10"
					variants={fadeInUp}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
						<div className="max-w-lg space-y-3 sm:space-y-4">
							<p className="text-[0.7rem] font-semibold tracking-[0.25em] text-slate-300 uppercase sm:text-xs">
								Contact
							</p>
							<h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
								Let&apos;s create memorable products together
							</h2>
							<p className="text-sm text-slate-300 sm:text-[0.95rem]">
								Open to freelance opportunities, short-term projects, or
								long-term collaborations. I prioritize projects that create
								significant impact for users.
							</p>
							<Link
								href="mailto:hello@locbh.dev"
								className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400 sm:px-6"
							>
								Send email now
							</Link>
						</div>
						<div className="grid gap-3 text-sm text-slate-200 sm:gap-4 md:grid-cols-2">
							{contactItems.map(item => (
								<div
									key={item.label}
									className="spotlight-card group transform-gpu rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:-translate-y-2 hover:border-fuchsia-500/60 hover:shadow-xl hover:shadow-fuchsia-500/10"
									{...spotlightHandlers}
								>
									<p className="text-[0.7rem] tracking-[0.25em] text-slate-400 uppercase sm:text-xs">
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
