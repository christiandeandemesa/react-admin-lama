import {useTheme, Box, Typography} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {AdminPanelSettingsOutlined, LockOpenOutlined} from '@mui/icons-material';

import {tokens} from '../theme';

const mockDataOrders = [
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
	},
	{
		id: 2,
		name: 'Albert Singleterry',
		products: [
			{
				id: 12,
				name: 'Christmas Sweater',
				price: 25.99,
				size: ['L'],
				color: ['Red'],
				quantity: 1
			},
			{
				id: 13,
				name: 'Wool Cap',
				price: 22.9,
				size: ['L'],
				color: ['White'],
				quantity: 7
			}
		],
		address: '123 Imaginary Lane, Los Angeles, CA 90001',
		totalPrice: 186.29
	}
];

function Table() {
	const theme = useTheme();
	const mode = theme.palette.mode;
	const colors = tokens(mode);

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
						backgroundColor: mode === 'dark' ? colors.primary[500] : '#fcfcfc'
					},
					// Footer's background color.
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: colors.blueAccent[700],
						borderTop: 'none'
					}
				}}
			>
				<DataGrid
					rows={mockDataOrders}
					columns={columns}
					components={{Toolbar: GridToolbar}} // Enables the toolbar
					checkboxSelection // Enables the checkboxes
				/>
			</Box>
		</Box>
	);
}

export default Table;
