import {Link} from 'react-router-dom';

import {
	useTheme,
	Box,
	Typography,
	List,
	ListSubheader,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import {Dashboard, PersonOutline, Store, CreditCard, LocalShipping} from '@mui/icons-material';

import {tokens} from '../theme';

function Sidebar() {
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = tokens(mode);

	return (
		<Box
			sx={{
				minHeight: '100vh',
				flex: 1,
				borderRight: `0.5px solid ${colors.grey[100]}`
			}}
		>
			<Box
				sx={{
					height: '50px',
					p: '40px 0',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Typography
					variant='h3'
					component={Link}
					to='/'
					sx={{
						color: colors.blueAccent[400],
						fontWeight: 'bold',
						textDecoration: 'none'
					}}
				>
					ADMIN
				</Typography>
			</Box>
			<Box>
				<List
					component='nav'
					subheader={
						<ListSubheader
							component='div'
							sx={{
								backgroundColor: mode === 'dark' ? colors.primary[700] : '#DADADA',
								fontSize: '15px'
							}}
						>
							MAIN
						</ListSubheader>
					}
					sx={{m: '15px 0 5px 0'}}
				>
					<ListItemButton component={Link} to='/' sx={{color: colors.blueAccent[400]}}>
						<ListItemIcon sx={{pl: '10px', color: colors.blueAccent[400]}}>
							<Dashboard />
						</ListItemIcon>
						<ListItemText primary='Dashboard' />
					</ListItemButton>
				</List>
				<List
					component='nav'
					subheader={
						<ListSubheader
							component='div'
							sx={{
								backgroundColor: mode === 'dark' ? colors.primary[700] : '#DADADA',
								fontSize: '15px'
							}}
						>
							LISTS
						</ListSubheader>
					}
					sx={{m: '15px 0 5px 0'}}
				>
					<ListItemButton
						component={Link}
						to='/users'
						sx={{color: colors.blueAccent[400]}}
					>
						<ListItemIcon sx={{pl: '10px', color: colors.blueAccent[400]}}>
							<PersonOutline />
						</ListItemIcon>
						<ListItemText primary='Users' />
					</ListItemButton>
					<ListItemButton
						component={Link}
						to='/products'
						sx={{color: colors.blueAccent[400]}}
					>
						<ListItemIcon sx={{pl: '10px', color: colors.blueAccent[400]}}>
							<Store />
						</ListItemIcon>
						<ListItemText primary='Products' />
					</ListItemButton>
					<ListItemButton
						component={Link}
						to='/orders'
						sx={{color: colors.blueAccent[400]}}
					>
						<ListItemIcon sx={{pl: '10px', color: colors.blueAccent[400]}}>
							<CreditCard />
						</ListItemIcon>
						<ListItemText primary='Orders' />
					</ListItemButton>
					<ListItemButton
						component={Link}
						to='/delivery'
						sx={{color: colors.blueAccent[400]}}
					>
						<ListItemIcon sx={{pl: '10px', color: colors.blueAccent[400]}}>
							<LocalShipping />
						</ListItemIcon>
						<ListItemText primary='Delivery' />
					</ListItemButton>
				</List>
			</Box>
		</Box>
	);
}

export default Sidebar;
