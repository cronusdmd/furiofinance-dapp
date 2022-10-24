import React, { useState, useContext } from 'react';
import { Web3Context } from '../../context/Web3Context';
// import { makeStyles } from '@mui/styles';
import { Button, Box, Typography, Modal, useMediaQuery } from '@mui/material';

import { IconX } from '@tabler/icons';
import { formart } from '../../helper/formatAddress';

import BNBLogo from '../../asset/images/crypto-bnb.svg';
import MetamaskIcon from '../../asset/images/metamask.svg'
import WalletConnectIcon from '../../asset/images/walletconnect.svg'


const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    bgcolor: '#0a172a',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px'
};

const wallets = [
    {
        logo: MetamaskIcon,
        name: 'Metamask'
    }, {
        logo: WalletConnectIcon,
        name: 'Wallet Connect'
    }
]

function ConnectButton() {

    const isXs = useMediaQuery('(max-width:370px)');
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false)
    }
    const web3 = useContext(Web3Context);
    const onConnectWallet = async (wallet: string) => {

    }
    const userAddress = web3?.address;

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    bgcolor: '#5361DC0F',
                    borderRadius: '10000px',
                    padding: '3px 5px 5px',
                    // boxShadow: '0px 0px 2px #e57a3b'

                }}
            >
                {!isXs && <Box display='flex' alignItems='center' mx={2}>
                    <img src={BNBLogo} alt='bnb' style={{ width: '32px', height: '32px' }} />
                    <Typography sx={{ color: '#666', lineHeight: '36px', px: '10px' }}>
                        Smart Chain
                    </Typography>
                </Box>}
                <Button
                    sx={{
                        bgcolor: '#e57a3b',
                        borderRadius: '10000px',
                        textTransform: 'none',
                        color: '#FFF',
                        padding: '5px 10px 10px',
                        fontSize: '18px',
                        // boxShadow: '0px 1px 2px #ccc',
                        '&:hover': {
                            bgcolor: '#e57a3b'
                        }
                    }}
                    onClick={() => setOpen(!open)}
                >
                    {userAddress ? formart(userAddress as string) : isXs ? 'Connect' : 'Connect Wallet'}
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={onClose}
            >
                <Box sx={{ ...modalStyle, width: { xs: '95%', md: '400px' } }}>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}
                        onClick={() => setOpen(false)}
                    >
                        <IconX color='#eee' />
                    </Box>
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mb: 3, color: '#eee' }}>
                        Connect Wallet
                    </Typography>
                    {
                        wallets.map((wallet, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    bgcolor: '#0f3152',
                                    // boxShadow: '0px 1px 4px #ccc',
                                    padding: '20px',
                                    borderRadius: '15px',
                                    my: 2,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        // boxShadow: '0px 1px 4px #5361DC60',
                                    }
                                }}
                                onClick={() => onConnectWallet(wallet.name.toLocaleLowerCase())}
                            >
                                <img src={wallet.logo} alt='walletlogo' style={{ width: '32px', height: '32px' }} />
                                <Typography sx={{ lineHeight: '30px', px: 3, color: '#eee' }}>{wallet.name}</Typography>
                            </Box>
                        ))
                    }
                </Box>
            </Modal>
        </div>
    )
}

export default ConnectButton;