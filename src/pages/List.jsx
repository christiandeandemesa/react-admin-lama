import {Link} from 'react-router-dom';

import {useTheme, Box, Divider, Typography, Button} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {AdminPanelSettingsOutlined, LockOpenOutlined} from '@mui/icons-material';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import {tokens} from '../theme';

const mockDataUsers = [
	{
		id: 1,
		firstName: 'Christian',
		lastName: 'Demesa',
		email: 'cd@gmail.com',
		isAdmin: true
	},
	{
		id: 2,
		firstName: 'Bianca',
		lastName: 'Vazquez',
		email: 'bv@gmail.com',
		isAdmin: true
	},
	{
		id: 3,
		firstName: 'James',
		lastName: 'Vazquez',
		email: 'jv@gmail.com',
		isAdmin: false
	},
	{
		id: 4,
		firstName: 'Mateo',
		lastName: 'Vazquez',
		email: 'mv@gmail.com',
		isAdmin: false
	},
	{
		id: 5,
		firstName: 'Markus',
		lastName: 'Messiah',
		email: 'mm@gmail.com',
		isAdmin: true
	},
	{
		id: 6,
		firstName: 'CJ',
		lastName: 'Miller',
		email: 'cm@gmail.com',
		isAdmin: false
	}
];

function List() {
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = tokens(mode);

	// Creates the column headers in the MUI Table.
	const columns = [
		{field: 'id', headerName: 'ID', cellClassName: 'green-column'},
		{field: 'firstName', headerName: 'First Name', flex: 1},
		{field: 'lastName', headerName: 'Last Name', flex: 1, cellClassName: 'green-column'},
		{field: 'email', headerName: 'Email', flex: 1},
		{
			field: 'isAdmin',
			headerName: 'Access',
			flex: 1,
			// Gives this column a class name.
			cellClassName: 'green-column',
			// renderCell styles the data in a specific column.
			renderCell: ({row: {isAdmin}}) => {
				return (
					<Box
						sx={{
							width: '60%',
							m: '0 auto',
							p: '5px',
							display: 'flex',
							justifyContent: 'center',
							backgroundColor:
								isAdmin === true
									? colors.greenAccent[600]
									: colors.greenAccent[700],
							borderRadius: '4px'
						}}
					>
						{isAdmin === true ? <AdminPanelSettingsOutlined /> : <LockOpenOutlined />}
						<Typography sx={{ml: '5px', color: colors.grey[100]}}>
							{isAdmin === true ? 'Admin' : 'User'}
						</Typography>
					</Box>
				);
			}
		},
		{
			field: 'action',
			headerName: 'Actions',
			flex: 1,
			renderCell: params => {
				return (
					<Box sx={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
						<Button
							variant='outlined'
							color='info'
							component={Link}
							to={`/users/${params.row.id}`}
						>
							<Typography sx={{color: colors.blueAccent[400]}}>View</Typography>
						</Button>
						<Button
							variant='outlined'
							color='error'
							onClick={() => handleDelete(params.row.id)}
						>
							<Typography sx={{color: colors.redAccent[400]}}>Delete</Typography>
						</Button>
					</Box>
				);
			}
		}
	];

	const handleDelete = userId => {
		console.log(userId);
	};

	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>
				<Navbar />
				<Divider />
				<Box sx={{m: '20px'}}>
					{/* MUI Table */}
					<Box
						sx={{
							height: '75vh',
							m: '40px 0 0 0',
							// Removes border around the table's perimeter.
							'& .MuiDataGrid-root': {border: 'none'},
							// Toolbar's text color.
							'& .MuiButtonBase-root': {
								color: colors.grey[100]
							},
							// Column headers' background color.
							'& .MuiDataGrid-columnHeaders': {
								backgroundColor: colors.blueAccent[700],
								borderBottom: 'none'
							},
							// Every other column's text color.
							'& .green-column': {
								color: colors.greenAccent[300]
							},
							// Checkbox color.
							'& .MuiCheckbox-root.Mui-checked': {
								color: colors.grey[100]
							},
							// Removes the bottom border of each row.
							'& .MuiDataGrid-cell': {
								borderBottom: `1px solid ${colors.grey[400]}`
							},
							// Rows' background color.
							'& .MuiDataGrid-virtualScroller': {
								backgroundColor: mode === 'dark' ? colors.primary[600] : '#EAEAEA'
							},
							// Footer's background color.
							'& .MuiDataGrid-footerContainer': {
								backgroundColor: colors.blueAccent[700],
								borderTop: 'none'
							}
						}}
					>
						<DataGrid
							rows={mockDataUsers}
							columns={columns}
							components={{Toolbar: GridToolbar}} // Enables the toolbar
							checkboxSelection // Enables the checkboxes
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default List;
