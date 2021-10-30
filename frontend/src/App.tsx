import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import Client from './services/api';

function App() {
    return (
        <ApolloProvider client={Client}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header />
                <Main />
                <Footer />
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
