import {useTheme, Box, Divider} from '@mui/material';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import {tokens} from '../theme';

function Single() {
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = tokens(mode);

	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>
				<Navbar />
				<Divider sx={{backgroundColor: colors.grey[100]}} />
			</Box>
		</Box>
	);
}

export default Single;
