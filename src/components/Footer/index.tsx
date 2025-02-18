import { Link } from 'react-router-dom';
import { FaGithub, FaTrophy } from 'react-icons/fa6';
import { PiEyeglassesBold } from 'react-icons/pi';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerText}>
				<p className={styles.p}>
					<a href='https://oldschool.runescape.com/'>Old School RuneScape</a>
					&nbsp;is a trademark of&nbsp;
					<a href='https://www.jagex.com/'>Jagex Ltd.</a>
				</p>
			</div>
			<div className={styles.footerIcons}>
				<Link
					to='https://github.com/manc1n1/osrs-pet-list'
					target='_blank'
					rel='noreferrer noopener'
				>
					<FaGithub />
				</Link>
				<Link
					to='https://secure.runescape.com/m=hiscore_oldschool/hiscorepersonal?user1=Suspext'
					target='_blank'
					rel='noreferrer noopener'
				>
					<FaTrophy />
				</Link>
				<Link
					to='https://wiseoldman.net/players/Suspext'
					target='_blank'
					rel='noreferrer noopener'
				>
					<PiEyeglassesBold />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
