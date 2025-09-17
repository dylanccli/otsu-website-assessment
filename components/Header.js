"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header className={styles.header}>
			<nav className={styles.navContainer}>
				<Link
					href={"/"}
					className={styles.logoContainer}
				>
					<Image
						src={"/images/otsu-logo.svg"}
						alt={"Ontario Tech Student Union logo"}
						width={160}
						height={64}
					/>
				</Link>
				<button
					className={styles.hamburger}
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					<span className={styles.hamburgerLine}></span>
					<span className={styles.hamburgerLine}></span>
					<span className={styles.hamburgerLine}></span>
				</button>
				<ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
					<li><a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>Latest</a></li>
					<li><a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>Governance</a></li>
					<li><a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</a></li>
					<li><a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>Clubs & Societies</a></li>
					<li><a href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact</a></li>
				</ul>
			</nav>
		</header>
	);
}
