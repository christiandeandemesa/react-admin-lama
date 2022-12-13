import {Box, Divider} from '@mui/material';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function List() {
	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>
				<Navbar />
				<Divider />
				List
			</Box>
		</Box>
	);
}

export default List;
