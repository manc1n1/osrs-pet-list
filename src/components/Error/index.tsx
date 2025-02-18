import { Link } from 'react-router-dom';
import styles from './Error.module.css';
import { useUsername } from '@/hooks/useUsername';

type ErrorProps = {
	err?: string;
};

const Error = ({ err }: ErrorProps) => {
	const { username } = useUsername();

	return (
		<>
			{err && username ? (
				<>
					<div className={styles.container}>
						<Link
							to={`https://secure.runescape.com/m=hiscore_oldschool/hiscorepersonal?user1=${username}`}
							target='_blank'
							rel='noreferrer noopener'
						>
							{username}
						</Link>
						<p>&nbsp;does not use&nbsp;</p>
						<Link
							to='https://runelite.net/plugin-hub/show/collection-log'
							target='_blank'
							rel='noreferrer noopener'
						>
							Collection Log Plugin
						</Link>
					</div>
				</>
			) : (
				<>
					<div className={styles.container}>Error: {err}</div>
				</>
			)}
		</>
	);
};

export default Error;
