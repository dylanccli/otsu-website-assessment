import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
	FaEnvelope,
	FaInstagram,
	FaLocationArrow,
	FaPhone,
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer>
			<div className={styles.primaryFooter}>
				<Image
					src={"/images/otsu-logo.svg"}
					alt={"Ontario Tech Student Union logo"}
					width={160}
					height={64}
				/>
				<div className={styles.columns}>
					<div className={styles.column}>
						<FaLocationArrow />
						<div>
							<p>
								<span>North Office</span>
							</p>
							<p>Shawenjigewining Hall (SHA 115)</p>
							<p>40 Founders Drive, Oshawa, ON L1H 7K4</p>
							<p>Mon-Thu: 8:30 AM - 5:00 PM</p>
							<p>Fri: 8:30 AM - 1:30 PM</p>
						</div>
					</div>
					<div className={styles.column}>
						<FaLocationArrow />
						<div>
							<p>
								<span>Downtown Office</span>
							</p>
							<p>Charles Hall (CHA 109)</p>
							<p>61 Charles Street, Oshawa, ON L1H 4X8</p>
						</div>
					</div>
					<div className={styles.column}>
						<FaEnvelope />
						<a href={"mailto:otsu@ontariotechu.ca"}>
							<span>otsu@ontariotechu.ca</span>
						</a>
					</div>
					<div className={styles.column}>
						<FaPhone />
						<a href="tel:9057218448;3974">
							<span>(905) 721-8668 x 3974</span>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.secondaryFooter}>
				<p>© 2025 Ontario Tech Student Union</p>
				<div className={styles.socials}>
					<Link href={"https://instagram.com/ot_studentunion"}>
						<FaInstagram />
					</Link>
				</div>
			</div>
		</footer>
	);
}
