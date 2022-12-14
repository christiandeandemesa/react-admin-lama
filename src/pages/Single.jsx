import {useTheme, Box, Divider, Button, Typography, Avatar} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {AdminPanelSettingsOutlined, LockOpenOutlined} from '@mui/icons-material';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';

import {tokens} from '../theme';
import Profile from '../assets/profile.jpg';

const mockDataOrder = [
	{
		id: 1,
		name: 'Simonette Reyes',
		products: [
			{
				id: 12,
				name: 'Christmas Sweater',
				price: 25.99,
				size: ['L'],
				color: ['Red'],
				quantity: 1
			}
		],
		address: '123 Imaginary Lane, Los Angeles, CA 90001',
		totalPrice: 25.99
	}
];

function Single() {
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = tokens(mode);

	const isAdmin = true;

	// Creates the column headers in the MUI Table.
	const columns = [
		{field: 'id', headerName: 'ID', cellClassName: 'green-column'},
		{field: 'name', headerName: 'Customer', flex: 1},
		{
			field: 'products',
			headerName: 'Products',
			flex: 1,
			cellClassName: 'green-column',
			renderCell: ({row: {products}}) => {
				return (
					<div>
						{products.map(({id, name, price, size, color, quantity}) => (
							<div key={id}>
								{quantity} {size} {color} {name} ${price.toFixed(2)}
							</div>
						))}
					</div>
				);
			}
		},
		{field: 'address', headerName: 'Address', flex: 2},
		{
			field: 'totalPrice',
			headerName: 'Total Price',
			flex: 1,
			cellClassName: 'green-column',
			renderCell: ({row: {totalPrice}}) => {
				return <div>${totalPrice.toFixed(2)}</div>;
			}
		}
	];

	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>
				<Navbar />
				<Divider sx={{backgroundColor: colors.grey[100]}} />
				<Box sx={{p: '20px', display: 'flex', gap: '20px'}}>
					<Box
						sx={{
							p: '20px',
							flex: 2,
							position: 'relative',
							backgroundColor: mode === 'dark' ? colors.primary[600] : '#EAEAEA',
							boxShadow: `2px 4px 10px 1px ${colors.grey[400]}`,
							borderRadius: '5px'
						}}
					>
						<Button
							color='info'
							sx={{
								p: '5px',
								position: 'absolute',
								top: 0,
								right: 0,
								color: colors.blueAccent[400],
								borderRadius: '0px 0px 0px 5px'
							}}
						>
							Edit
						</Button>
						<Typography variant='h2' sx={{mb: '40px'}}>
							Information
						</Typography>
						<Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
							<Avatar
								alt='John Doe'
								src={Profile}
								sx={{width: '250px', height: '250px'}}
							/>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: '20px'
								}}
							>
								<Typography variant='h1'>John Doe</Typography>
								<Typography variant='h5'>Email: jd@gmail.com</Typography>
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
									{isAdmin === true ? (
										<AdminPanelSettingsOutlined />
									) : (
										<LockOpenOutlined />
									)}
									<Typography sx={{ml: '5px', color: colors.grey[100]}}>
										{isAdmin === true ? 'Admin' : 'User'}
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box sx={{flex: 3}}>
						<Typography variant='h3' sx={{textAlign: 'end'}}>
							Purchases (Last 6 months)
						</Typography>
						<Chart />
					</Box>
				</Box>
				<Box
					sx={{
						m: '10px 20px',
						p: '20px',
						backgroundColor: mode === 'dark' ? colors.primary[600] : '#EAEAEA',
						boxShadow: `2px 4px 10px 1px ${colors.grey[400]}`,
						borderRadius: '5px'
					}}
				>
					<Typography variant='h2'>Last Transactions</Typography>
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
									borderBottom: `1px solid ${colors.grey[500]}`
								},
								// Rows' background color.
								'& .MuiDataGrid-virtualScroller': {
									backgroundColor:
										mode === 'dark' ? colors.primary[500] : '#fcfcfc'
								},
								// Footer's background color.
								'& .MuiDataGrid-footerContainer': {
									backgroundColor: colors.blueAccent[700],
									borderTop: 'none'
								}
							}}
						>
							<DataGrid
								rows={mockDataOrder}
								columns={columns}
								components={{Toolbar: GridToolbar}} // Enables the toolbar
								checkboxSelection // Enables the checkboxes
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Single;
