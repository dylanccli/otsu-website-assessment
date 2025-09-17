import { executives, directors, staff } from "./employees";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
	title: "Our Team | Contact Us",
	description:
		"The OTSU is led by student executives and a board of directors who are elected annually, and supported by a team of full-time staff.",
};

export default async function OurTeamPage() {
	return (
		<main>
			<section className={styles.teamSection}>
				<h1>Our Team</h1>
				<section>
					<h2>Executives</h2>
					<div className={styles.teamGrid}>
						{executives.map((exec) => (
							<div key={exec.name} className={styles.member}>
								<Image
									src={exec.image}
									alt={`Photo of ${exec.name}, ${exec.title}`}
									width={150}
									height={150}
								/>
								<h3>{exec.name}</h3>
								<p>{exec.title}</p>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2>Board of Directors</h2>
					<div className={styles.teamGrid}>
						{directors.map((dir) => (
							<div key={dir.name} className={styles.member}>
								<Image
									src={dir.image}
									alt={`Photo of ${dir.name}, ${dir.title}`}
									width={150}
									height={150}
								/>
								<h3>{dir.name}</h3>
								<p>{dir.title}</p>
							</div>
						))}
					</div>
				</section>
				<section>
					<h2>Staff</h2>
					<div className={styles.teamGrid}>
						{staff.map((stf) => (
							<div key={stf.name} className={styles.member}>
								<Image
									src={stf.image}
									alt={`Photo of ${stf.name}, ${stf.title}`}
									width={150}
									height={150}
								/>
								<h3>{stf.name}</h3>
								<p>{stf.title}</p>
							</div>
						))}
					</div>
				</section>
			</section>
		</main>
	);
}
