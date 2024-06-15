import React from 'react';
import Styles from "./css/admin.css";
import { colorModeContext, useMode } from '../Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

const Admin = () => {
    const [theme, colorMode] = useMode();


    return (
        <colorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={Styles.admincontainer}>
                    <h3>Welcome to Admin</h3>
                    <p>welsome ajonjnjnje jnjnkwenks jnejs k nej jno a sj ksd  dknd n djw</p>
                </div>
            </ThemeProvider>

        </colorModeContext.Provider>
    )
}

export default Admin