import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Web3ContextProvider } from './context/Web3Context';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ViewBase from './components/viewbase';
import Dashboard from './views/dashboard';
import Swap from './views/swap';
import Referral from './views/referral';

export default function App() {

    const theme = createTheme({
        typography: {
            fontFamily: 'Square'
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    },
                },
            }
        }
    });

    return (
        <Web3ContextProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <ViewBase>
                        <Routes>
                            <Route path={'/'} element={<Dashboard />} />
                            <Route path={'/swap'} element={<Swap />} />
                            <Route path={'/referral'} element={<Referral />} />
                        </Routes>
                    </ViewBase>
                </ThemeProvider>
            </BrowserRouter>
        </Web3ContextProvider >
    );
}
