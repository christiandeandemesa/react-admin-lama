import {Box} from '@mui/material';

import Sidebar from '../components/Sidebar';

function Login() {
	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>Login</Box>
		</Box>
	);
}

export default Login;
