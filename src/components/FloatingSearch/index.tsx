import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './FloatingSearch.module.css';
import useScrollDirection from '@/hooks/useScrollDirection';
import { useUsername } from '@/hooks/useUsername';

const FloatingSearch = () => {
	const [isOpen, setOpen] = useState(false);
	const { scrollDirection, isAtTop } = useScrollDirection();
	const { username, setUsername } = useUsername();

	const scrollClasses = `
        ${scrollDirection === 'down' && !isAtTop ? styles.hidden : ''}
        ${isAtTop ? styles.atTop : ''}
				`.trim();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const regex = /^[a-zA-Z0-9 ]*$/;
		const input = e.target.value;

		if (regex.test(input)) {
			setUsername(input);
		}
	};

	return (
		<>
			<div className={`${styles.container} ${scrollClasses}`}>
				<input
					className={`${styles.input} ${isOpen ? styles.show : ''}`}
					type='text'
					placeholder='Search RSN'
					value={username}
					onChange={handleInputChange}
					maxLength={12}
				/>
				<button
					className={styles.button}
					onClick={() => {
						setOpen(!isOpen);
					}}
				>
					<span className={styles.span}>
						<FaSearch />
					</span>
				</button>
			</div>
		</>
	);
};

export default FloatingSearch;
