import {useTheme, Box, Divider} from '@mui/material';
import {
	PersonOutlined,
	ShoppingCartOutlined,
	MonetizationOnOutlined,
	AccountBalanceWalletOutlined
} from '@mui/icons-material';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Widget from '../components/Widget';
import Featured from '../components/Featured';
import Chart from '../components/Chart';

import {tokens} from '../theme';

function Home() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box sx={{display: 'flex'}}>
			<Sidebar />
			<Box sx={{flex: 6}}>
				<Navbar />
				<Divider />
				<Box sx={{p: '20px', display: 'flex', gap: '20px'}}>
					<Widget
						title='USERS'
						amount='100'
						subtitle='See all users'
						diff={10}
						icon={
							<PersonOutlined
								sx={{
									color: colors.orangeAccent[600],
									backgroundColor: colors.orangeAccent[300],
									borderRadius: '5px'
								}}
							/>
						}
					/>
					<Widget
						title='ORDERS'
						amount='100'
						subtitle='See all orders'
						diff={20}
						icon={
							<ShoppingCartOutlined
								sx={{
									p: '2px',
									color: colors.purpleAccent[700],
									backgroundColor: colors.purpleAccent[400],
									borderRadius: '5px'
								}}
							/>
						}
					/>
					<Widget
						title='EARNINGS'
						amount='$100.00'
						subtitle='View net earnings'
						diff={15}
						icon={
							<MonetizationOnOutlined
								sx={{
									p: '1px',
									color: colors.yellowAccent[700],
									backgroundColor: colors.yellowAccent[400],
									borderRadius: '5px'
								}}
							/>
						}
					/>
					<Widget
						title='BALANCE'
						amount='$100.00'
						subtitle='See details'
						diff={-5}
						icon={
							<AccountBalanceWalletOutlined
								sx={{
									p: '1px',
									color: colors.blueAccent[700],
									backgroundColor: colors.blueAccent[400],
									borderRadius: '5px'
								}}
							/>
						}
					/>
				</Box>
				<Box sx={{p: '5px 20px', display: 'flex', gap: '20px'}}>
					<Featured />
					<Chart />
				</Box>
			</Box>
		</Box>
	);
}

export default Home;
