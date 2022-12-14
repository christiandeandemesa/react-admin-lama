import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {useTheme, Box, Typography} from '@mui/material';
import {MoreVert, KeyboardArrowUp} from '@mui/icons-material';

import {tokens} from '../theme';

function Featured() {
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = tokens(mode);

	return (
		<Box
			sx={{
				flex: 2,
				p: '10px',
				backgroundColor: mode === 'dark' ? colors.primary[600] : '#EAEAEA',
				boxShadow: `2px 4px 10px 1px ${colors.grey[300]}`,
				borderRadius: '5px'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					color: colors.grey[100]
				}}
			>
				<Typography variant='h1' sx={{fontWeight: 'bold'}}>
					Total Revenue
				</Typography>
				<MoreVert />
			</Box>
			<Box
				sx={{
					p: '20px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '15px'
				}}
			>
				<Box sx={{width: '100%', height: '100%'}}>
					<CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
				</Box>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<Box sx={{textAlign: 'center'}}>
						<Typography variant='h5' sx={{color: colors.grey[100]}}>
							Sales made today
						</Typography>
						<Box
							sx={{
								mt: '10px',
								display: 'flex',
								alignItems: 'center',
								color: colors.blueAccent[400]
							}}
						>
							<Typography variant='h5'>$12.4k</Typography>
						</Box>
					</Box>
					<Box sx={{textAlign: 'center'}}>
						<Typography variant='h5' sx={{color: colors.grey[100]}}>
							Target
						</Typography>
						<Box
							sx={{
								mt: '10px',
								display: 'flex',
								alignItems: 'center',
								color: colors.greenAccent[400]
							}}
						>
							<KeyboardArrowUp />
							<Typography variant='h5'>$14.2k</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Featured;
