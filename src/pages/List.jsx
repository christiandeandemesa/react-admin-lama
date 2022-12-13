import {Box} from '@mui/material';

import Sidebar from '../components/Sidebar';

function List() {
	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>List</Box>
		</Box>
	);
}

export default List;
