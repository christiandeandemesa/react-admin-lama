import {Link} from 'react-router-dom';

import {
	useTheme,
	Box,
	Typography,
	Divider,
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
	const colors = tokens(theme.palette.mode);

	return (
		<Box sx={{minHeight: '100vh', flex: 1, borderRight: `0.5px solid ${colors.primary[900]}`}}>
			<Box
				sx={{
					height: '50px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Typography
					variant='h4'
					component={Link}
					to='/'
					sx={{color: colors.grey[100], fontWeight: 'bold', textDecoration: 'none'}}
				>
					LOGO
				</Typography>
			</Box>
			<Box>
				<List
					component='nav'
					subheader={<ListSubheader component='div'>MAIN</ListSubheader>}
					sx={{m: '15px 0 5px 0', fontSize: '10px', fontWeight: 'bold'}}
				>
					<ListItemButton component={Link} to='/'>
						<ListItemIcon sx={{pl: '10px'}}>
							<Dashboard />
						</ListItemIcon>
						<ListItemText primary='Dashboard' />
					</ListItemButton>
				</List>
				<List
					component='nav'
					subheader={<ListSubheader component='div'>LISTS</ListSubheader>}
					sx={{m: '15px 0 5px 0', fontSize: '10px', fontWeight: 'bold'}}
				>
					<ListItemButton component={Link} to='/users'>
						<ListItemIcon sx={{pl: '10px'}}>
							<PersonOutline />
						</ListItemIcon>
						<ListItemText primary='Users' />
					</ListItemButton>
					<ListItemButton component={Link} to='/products'>
						<ListItemIcon sx={{pl: '10px'}}>
							<Store />
						</ListItemIcon>
						<ListItemText primary='Products' />
					</ListItemButton>
					<ListItemButton component={Link} to='/orders'>
						<ListItemIcon sx={{pl: '10px'}}>
							<CreditCard />
						</ListItemIcon>
						<ListItemText primary='Orders' />
					</ListItemButton>
					<ListItemButton component={Link} to='/delivery'>
						<ListItemIcon sx={{pl: '10px'}}>
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
