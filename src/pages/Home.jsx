import {Box, Divider} from '@mui/material';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>
				<Navbar />
				<Divider />
				Home
			</Box>
		</Box>
	);
}

export default Home;
