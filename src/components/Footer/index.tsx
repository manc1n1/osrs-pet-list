import { Link } from 'react-router-dom';
import { VscGithub } from 'react-icons/vsc';
import { IoMdTrophy } from 'react-icons/io';
import { RiBook2Fill } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa6';
// import { PiEyeglassesBold } from 'react-icons/pi';
import { ReactComponent as WOMLogo } from '@/assets/images/wom.svg';
import { ReactComponent as RuneLiteLogo } from '@/assets/images/runelite.svg';
import { ReactComponent as OSRSWikiLogo } from '@/assets/images/osrswiki.svg';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerText}>
				<p className={styles.p}>
					<a
						href='https://oldschool.runescape.com/'
						target='_blank'
						rel='noreferrer noopener'
					>
						Old School RuneScape
					</a>
					&nbsp;is a trademark of&nbsp;
					<a
						href='https://www.jagex.com/'
						target='_blank'
						rel='noreferrer noopener'
					>
						Jagex Ltd.
					</a>
				</p>
			</div>
			<div className={styles.footerIcons}>
				<Link
					to='https://github.com/manc1n1/osrs-pet-list'
					target='_blank'
					rel='noreferrer noopener'
				>
					<VscGithub />
				</Link>
				<Link
					to='https://secure.runescape.com/m=hiscore_oldschool/hiscorepersonal?user1=Suspext'
					target='_blank'
					rel='noreferrer noopener'
				>
					<IoMdTrophy />
				</Link>
				<Link
					to='https://collectionlog.net/'
					target='_blank'
					rel='noreferrer noopener'
				>
					<RiBook2Fill />
				</Link>
				<Link
					to='https://runelite.net/'
					target='_blank'
					rel='noreferrer noopener'
				>
					<RuneLiteLogo
						width='24px'
						height='24px'
					/>
				</Link>
				<Link
					to='https://oldschool.runescape.wiki/'
					target='_blank'
					rel='noreferrer noopener'
				>
					<OSRSWikiLogo
						width='24px'
						height='24px'
					/>
				</Link>
				<Link
					to='https://wiseoldman.net/players/Suspext'
					target='_blank'
					rel='noreferrer noopener'
				>
					<WOMLogo
						width='24px'
						height='24px'
					/>
				</Link>
				<Link
					to='https://discord.gg/geuddJ5Htf'
					target='_blank'
					rel='noreferrer noopener'
				>
					<FaDiscord />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
