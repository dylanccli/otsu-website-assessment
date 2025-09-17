"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navContainer}>
				<div className={styles.logoMenuContainer}>
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
				</div>
			</nav>
		</header>
	);
}
