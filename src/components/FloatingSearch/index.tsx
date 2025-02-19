import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './FloatingSearch.module.css';
import useScrollDirection from '@/hooks/useScrollDirection';
import { useUsername } from '@/hooks/useUsername';

const FloatingSearch = () => {
	const [isOpen, setOpen] = useState(false);
	const { scrollDirection, isAtTop } = useScrollDirection();
	const { username, setUsername } = useUsername();
	const inputRef = useRef<HTMLInputElement>(null);

	const scrollClasses = `${
		scrollDirection === 'down' && !isAtTop ? styles.hidden : ''
	}`.trim();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const regex = /^[a-zA-Z0-9 ]*$/;
		const input = e.target.value;

		if (regex.test(input)) {
			setUsername(input);
		}
	};

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => inputRef.current?.focus(), 50);
		}
	}, [isOpen]);

	const handleBlur = () => {
		setTimeout(() => setOpen(false), 500);
	};

	return (
		<>
			<div className={`${styles.container} ${scrollClasses}`}>
				<input
					ref={inputRef}
					className={`${styles.input} ${isOpen ? styles.show : ''}`}
					type='text'
					placeholder='Search RSN'
					value={username}
					onChange={handleInputChange}
					onBlur={handleBlur}
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
