import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
				<ul className={styles.menu}>
					<li><a href="#" className={styles.navLink}>Latest</a></li>
					<li><a href="#" className={styles.navLink}>Governance</a></li>
					<li><a href="#" className={styles.navLink}>Services</a></li>
					<li><a href="#" className={styles.navLink}>Clubs & Societies</a></li>
					<li><a href="#" className={styles.navLink}>Contact</a></li>
				</ul>
			</nav>
		</header>
	);
}
