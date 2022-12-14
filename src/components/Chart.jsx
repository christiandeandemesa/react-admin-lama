import {useTheme, Box} from '@mui/material';

import {ResponsiveLine} from '@nivo/line';

import {tokens} from '../theme';

const mockLineData = [
	{
		id: 'pants',
		color: tokens('dark').greenAccent[500],
		data: [
			{
				x: 'Jan',
				y: 101
			},
			{
				x: 'Feb',
				y: 75
			},
			{
				x: 'Mar',
				y: 36
			},
			{
				x: 'Apr',
				y: 216
			},
			{
				x: 'May',
				y: 35
			},
			{
				x: 'Jun',
				y: 236
			},
			{
				x: 'Jul',
				y: 88
			},
			{
				x: 'Aug',
				y: 232
			},
			{
				x: 'Sep',
				y: 281
			},
			{
				x: 'Oct',
				y: 1
			},
			{
				x: 'Nov',
				y: 35
			},
			{
				x: 'Dec',
				y: 14
			}
		]
	},
	{
		id: 'shirt',
		color: tokens('dark').blueAccent[300],
		data: [
			{
				x: 'Jan',
				y: 212
			},
			{
				x: 'Feb',
				y: 190
			},
			{
				x: 'Mar',
				y: 270
			},
			{
				x: 'Apr',
				y: 9
			},
			{
				x: 'May',
				y: 75
			},
			{
				x: 'Jun',
				y: 175
			},
			{
				x: 'Jul',
				y: 33
			},
			{
				x: 'Aug',
				y: 189
			},
			{
				x: 'Sep',
				y: 97
			},
			{
				x: 'Oct',
				y: 87
			},
			{
				x: 'Nov',
				y: 299
			},
			{
				x: 'Dec',
				y: 251
			}
		]
	},
	{
		id: 'dress',
		color: tokens('dark').redAccent[200],
		data: [
			{
				x: 'Jan',
				y: 191
			},
			{
				x: 'Feb',
				y: 136
			},
			{
				x: 'Mar',
				y: 91
			},
			{
				x: 'Apr',
				y: 190
			},
			{
				x: 'May',
				y: 211
			},
			{
				x: 'Jun',
				y: 152
			},
			{
				x: 'Jul',
				y: 189
			},
			{
				x: 'Aug',
				y: 152
			},
			{
				x: 'Sep',
				y: 8
			},
			{
				x: 'Oct',
				y: 197
			},
			{
				x: 'Nov',
				y: 107
			},
			{
				x: 'Dec',
				y: 170
			}
		]
	}
];

function Chart({isDashboard}) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box sx={{height: '70vh', flex: 4}}>
			<ResponsiveLine
				data={mockLineData}
				theme={{
					axis: {
						domain: {
							line: {
								stroke: colors.grey[100]
							}
						},
						legend: {
							text: {
								fill: colors.grey[100]
							}
						},
						ticks: {
							line: {
								stroke: colors.grey[100],
								strokeWidth: 1
							},
							text: {
								fill: colors.grey[100]
							}
						}
					},
					legends: {
						text: {
							fill: colors.grey[100]
						}
					},
					tooltip: {
						container: {
							color: colors.primary[500]
						}
					}
				}}
				colors={isDashboard ? {datum: 'color'} : {scheme: 'nivo'}} // If this component is on the dashboard, use the color scheme in mockLineData.
				margin={{top: 50, right: 110, bottom: 50, left: 60}}
				xScale={{type: 'point'}}
				yScale={{
					type: 'linear',
					min: 'auto',
					max: 'auto',
					stacked: true,
					reverse: false
				}}
				yFormat=' >-.2f'
				curve='catmullRom'
				axisTop={null}
				axisRight={null}
				axisBottom={{
					orient: 'bottom',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: isDashboard ? undefined : 'MONTHS',
					legendOffset: 36,
					legendPosition: 'middle'
				}}
				axisLeft={{
					orient: 'left',
					tickValues: isDashboard ? 5 : 10,
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: isDashboard ? undefined : 'AMOUNT',
					legendOffset: -40,
					legendPosition: 'middle'
				}}
				enableGridX={false}
				pointSize={10}
				pointColor={{theme: 'background'}}
				pointBorderWidth={2}
				pointBorderColor={{from: 'serieColor'}}
				pointLabelYOffset={-12}
				useMesh
				legends={[
					{
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: 'left-to-right',
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: 'circle',
						symbolBorderColor: 'rgba(0, 0, 0, .5)',
						effects: [
							{
								on: 'hover',
								style: {
									itemBackground: 'rgba(0, 0, 0, .03)',
									itemOpacity: 1
								}
							}
						]
					}
				]}
			/>
		</Box>
	);
}

export default Chart;
