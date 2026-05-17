"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const LOGO_WIDTH = 944;
const LOGO_HEIGHT = 529;

const NAV_LINKS = [
	{ id: "nav-about-link", href: "/#about", label: "About" },
	{ id: "nav-skills-link", href: "/#skills", label: "Skills" },
	{ id: "nav-services-link", href: "/#services", label: "Services" },
	{ id: "nav-blogs-link", href: "/blogs", label: "Blogs" },
	{ id: "nav-contact-link", href: "/#contact", label: "Contact" },
] as const;

export function SiteNav() {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	const closeMenu = () => setMenuOpen(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-40 border-b border-surface-200/80 bg-surface-50/90 backdrop-blur-md supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4">
				<Link
					id="nav-logo-link"
					href="/#hero"
					className="flex shrink-0 items-center"
					aria-label={`${site.name} — home`}
					onClick={closeMenu}
				>
					<span className="inline-flex rounded-lg p-1.5">
						<Image
							src="/brand-logo.png"
							alt="Dhruv Goyal logo"
							width={LOGO_WIDTH}
							height={LOGO_HEIGHT}
							className="h-8 w-auto sm:h-12"
							priority
						/>
					</span>
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.id}
							id={link.id}
							href={link.href}
							className="text-sm font-medium text-surface-600 transition-colors duration-300 hover:text-surface-900"
						>
							{link.label}
						</Link>
					))}
					<Link
						id="nav-cta-link"
						href="/#contact"
						className="inline-flex rounded-full bg-linear-to-r from-coral-500 to-amber-500 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral-500/25"
					>
						Let&apos;s Talk
					</Link>
				</div>

				<button
					type="button"
					className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-surface-200 bg-white text-surface-800 shadow-sm transition-colors hover:bg-surface-50 md:hidden"
					aria-expanded={menuOpen}
					aria-controls="mobile-nav-panel"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					onClick={() => setMenuOpen((open) => !open)}
				>
					{menuOpen ? (
						<X className="h-5 w-5" aria-hidden />
					) : (
						<Menu className="h-5 w-5" aria-hidden />
					)}
				</button>
			</div>

			{menuOpen && (
				<button
					type="button"
					className="fixed inset-0 top-14 z-30 bg-surface-950/25 backdrop-blur-[2px] md:hidden"
					aria-label="Close menu"
					onClick={closeMenu}
				/>
			)}

			<div
				id="mobile-nav-panel"
				className={`relative z-40 border-t border-surface-200/80 bg-surface-50/95 backdrop-blur-md md:hidden ${
					menuOpen ? "block" : "hidden"
				}`}
			>
				<div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-8">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.id}
							id={`${link.id}-mobile`}
							href={link.href}
							className="rounded-xl px-4 py-3.5 text-base font-medium text-surface-700 transition-colors hover:bg-surface-100 hover:text-surface-900"
							onClick={closeMenu}
						>
							{link.label}
						</Link>
					))}
					<Link
						id="nav-cta-link-mobile"
						href="/#contact"
						className="mt-2 inline-flex items-center justify-center rounded-full bg-linear-to-r from-coral-500 to-amber-500 px-5 py-3.5 text-base font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-coral-500/25"
						onClick={closeMenu}
					>
						Let&apos;s Talk
					</Link>
				</div>
			</div>
		</nav>
	);
}
