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
				<h1>Meet Our Team</h1>
				<p className={styles.description}>The OTSU is led by student executives and a board of directors who are elected annually, and supported by a team of full-time staff.</p>
				<section className={styles.executivesSection}>
					<h2 className={styles.sectionTitle}>Executives</h2>
					<p className={styles.description}>Our elected student leaders guiding the union's vision and operations.</p>
					<div className={styles.teamGrid}>
						{executives.map((exec, index) => (
							<div key={exec.name} className={styles.member} style={{ animationDelay: `${index * 0.1}s` }}>
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
				<section className={styles.boardSection}>
					<div className={styles.content}>
						<h2 className={styles.sectionTitle}>Board of Directors</h2>
						<p className={styles.description}>Faculty representatives ensuring academic excellence and student interests.</p>
						<div className={styles.teamGrid}>
							{directors.map((dir, index) => (
								<div key={dir.name} className={`${styles.member} ${styles.boardMember}`} style={{ animationDelay: `${index * 0.1}s` }}>
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
					</div>
				</section>
				<section className={styles.staffSection}>
					<h2 className={styles.sectionTitle}>Staff</h2>
					<p className={styles.description}>Dedicated professionals providing essential services and support.</p>
					<div className={styles.teamGrid}>
						{staff.map((stf, index) => (
							<div key={stf.name} className={styles.member} style={{ animationDelay: `${index * 0.1}s` }}>
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
