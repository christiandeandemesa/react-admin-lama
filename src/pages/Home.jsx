import {Box} from '@mui/material';

import Sidebar from '../components/Sidebar';

function Home() {
	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>Home</Box>
		</Box>
	);
}

export default Home;
