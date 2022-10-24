import React from 'react';
import { Divider, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Avatar, Box } from '@mui/material';
import { IconMenu2 } from '@tabler/icons';
import ConnectButton from './ConnectWallet';
import FurfiLogo from '../../asset/images/furio-icon.svg';
import BNBLogo from '../../asset/images/crypto-bnb.svg';

interface IHeader {
    handleDrawerToggle?: () => void;
}

const useStyles = makeStyles(theme => ({

    topBar: {
        backgroundColor: "transparent",
        width: "100%",
        '& .MuiTypography-root': {
            color: '#FFF',
            whiteSpace: 'nowrap'
        }
    },
    valuePanel: {
        padding: '8px 20px',
        display: 'flex',
        overflow: 'auto',
        justifyContent: 'space-between',
        background: 'linear-gradient(90deg,#0f1f2e,#e57a3b)',
        borderBottom: '1px solid #e57a3b',
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(191 131 70)'
        }
    },
    topBarShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: 1000,
        }),
        marginLeft: 0,
    },
    toggleButton: {
        marginLeft: '15px'
    }
})) as any;

function Header({ handleDrawerToggle }: IHeader) {

    const is960 = useMediaQuery("(max-width:960px)");
    const isXs = useMediaQuery('(max-width:768px)');
    const classes = useStyles();
    return (
        <div className={classes.topBar}>
            <Box className={classes.valuePanel}>
                <Box display='flex' sx={{ '& .MuiBox-root': { display: 'flex', alignItems: 'center', mx: 1 } }}>
                    <Box >
                        <img src={FurfiLogo} alt='furfi' style={{ width: '32px', height: '32px' }} />
                        <Typography mx={1}>Furfi Price : 24$</Typography>
                    </Box>
                    <Box >
                        <img src={BNBLogo} alt='bnb' style={{ width: '32px', height: '32px' }} />
                        <Typography mx={1}>BNB Price : 287$</Typography>
                    </Box>
                    <Box >
                        <Divider orientation='vertical' sx={{ bgcolor: '#FFF' }} />
                        <Typography ml={2}>TVL: $8,654,854</Typography>
                    </Box>
                </Box>
                <Box display='flex' alignItems='center' sx={{ '& .MuiTypography-root': { px: 1 } }}>
                    <Typography>Trade</Typography>
                    <Typography>Whitepaper</Typography>
                    <Typography>Website</Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'end', md: 'space-between' },
                    alignContent: 'center',
                    p: 2
                }}
            >
                {!isXs && <Box sx={{ display: 'flex', alignItems: 'center', '& .MuiTypography-root': { px: 1 } }}>
                    <Typography sx={{ fontSize: '36px', fontFamily: 'Furfi', mr: 2 }}>Furfi</Typography>
                    <Typography fontSize={20} mt={1}>App</Typography>
                    <Typography fontSize={20} mt={1}>Swap</Typography>
                    <Typography fontSize={20} mt={1}>Referral</Typography>
                </Box>}
                <Box display='flex' alignItems='center'>
                    <ConnectButton />
                    {
                        is960 && (
                            <div onClick={handleDrawerToggle} className={classes.toggleButton}>
                                <Avatar
                                    sx={{
                                        bgcolor: '#e77b3b',
                                        boxShadow: '0px 1px 4px #ccc',
                                        mt: '3px'
                                    }}

                                >
                                    <IconMenu2 color='#FFF' />
                                </Avatar>
                            </div>
                        )
                    }
                </Box>

            </Box>
        </div >
    )
}

export default Header;