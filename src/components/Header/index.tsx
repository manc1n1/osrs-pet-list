import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squeeze as Hamburger } from 'hamburger-react';
import styles from './Header.module.css';
import useScrollDirection from '@/hooks/useScrollDirection';

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const { scrollDirection, isAtTop } = useScrollDirection();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const toggleMobileMenu = () => {
		setOpen(!isOpen);
		scrollToTop();
	};

	const scrollClasses = `
        ${scrollDirection === 'down' && !isAtTop ? styles.hidden : ''}
        ${isAtTop ? styles.atTop : ''}
				`.trim();

	return (
		<header className={`${styles.header} ${scrollClasses}`}>
			<div className={styles.headerBrand}>
				<Link
					to='/'
					onClick={scrollToTop}
				>
					<img
						src='/src/assets/images/Pet_list.png'
						alt=''
						style={{ width: '25px' }}
					/>
				</Link>
			</div>
			<nav
				className={`${styles.headerNav} ${isOpen ? styles.headerNavOpen : ''}`}
			>
				<Link
					to='/'
					onClick={toggleMobileMenu}
				>
					Menagerie
				</Link>
			</nav>
			<div className={styles.headerToggle}>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					size={25}
					label='Show menu'
				/>
			</div>
		</header>
	);
};

export default Header;
