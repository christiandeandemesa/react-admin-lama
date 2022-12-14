import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {useTheme, Box, Typography} from '@mui/material';
import {MoreVert, KeyboardArrowUp, KeyboardArrowDown} from '@mui/icons-material';

import {tokens} from '../theme';

function Featured() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box
			sx={{
				flex: 2,
				p: '10px',
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
				<Typography variant='h3' sx={{color: colors.grey[100], fontWeight: 'bold'}}>
					Total sales made today
				</Typography>
				<Typography variant='h4'>$420</Typography>
				<Typography variant='h6' sx={{color: colors.grey[100], textAlign: 'center'}}>
					Previous transactions processing. Last payments may not be included.
				</Typography>
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
								color: colors.redAccent[400]
							}}
						>
							<KeyboardArrowDown />
							<Typography variant='h5'>$1.2k</Typography>
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
