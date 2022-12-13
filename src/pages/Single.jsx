import {Box} from '@mui/material';

import Sidebar from '../components/Sidebar';

function Single() {
	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>Single</Box>
		</Box>
	);
}

export default Single;
