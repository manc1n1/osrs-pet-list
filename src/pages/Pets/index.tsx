import PetGrid from '@/components/PetGrid';
import FloatingSearch from '@/components/FloatingSearch';
import { UsernameProvider } from '@/contexts/usernameContext';

const Pets = () => (
	<UsernameProvider>
		<PetGrid />
		<FloatingSearch />
	</UsernameProvider>
);

export default Pets;
