import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../config/theme';
import Header from '../components/Header/Header';
import SubHeader from '../components/SubHeader/SubHeader';
import PlansSection from '../components/PlansSection/PlansSection';
import PriceSection from '../components/PriceSection/PriceSection';

export default function Home() {
	return (
		<div className="wrapper">
			<Head>
				<title>DocHQ</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Header></Header>
				<SubHeader></SubHeader>
				<main>
					<PlansSection></PlansSection>
					<PriceSection></PriceSection>
				</main>
			</ThemeProvider>
		</div>
	)
}