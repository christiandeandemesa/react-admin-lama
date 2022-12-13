import {Routes, Route} from 'react-router-dom';

import {CssBaseline, ThemeProvider} from '@mui/material';

import Home from './pages/Home';
import Login from './pages/Login';
import List from './pages/List';
import Single from './pages/Single';
import New from './pages/New';

import {ColorModeContext, useMode} from './theme';

function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='login' element={<Login />} />
						<Route path='users'>
							<Route index element={<List />} />
							<Route path=':userId' element={<Single />} />
							<Route path='new' element={<New />} />
						</Route>
					</Route>
				</Routes>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
