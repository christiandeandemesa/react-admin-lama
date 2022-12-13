import {Box} from '@mui/material';

import Sidebar from '../components/Sidebar';

function New() {
	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>New</Box>
		</Box>
	);
}

export default New;
