import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Main />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
