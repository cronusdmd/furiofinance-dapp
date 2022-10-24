import React, { useState } from 'react';

import { Box, Button, Divider, MenuItem, Modal, Select, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { IconSettings } from '@tabler/icons';
import CloseIcon from '@mui/icons-material/Close';

import UsdtLogo from '../../../asset/images/crypto-usdt.png';
import UsdcLogo from '../../../asset/images/crypto-usdc.png'
import EthereumLogo from '../../../asset/images/crypto-ethereum.png';
import BtcLogo from '../../../asset/images/crypto-btc.svg';
import BusdLogo from '../../../asset/images/crypto-busd.svg';
import BnbLogo from '../../../asset/images/crypto-bnb.svg';


interface IProps {
    open: boolean;
    onClose: () => void;
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    bgcolor: '#0a172a',
    boxShadow: 24,
    borderRadius: '20px',
    '& .MuiTypography-root': {
        color: '#FFF'
    },
    '& .subText': {
        color: '#bbb'
    }
};

const TokenList = [
    {
        symbol: 'BNB', logo: BnbLogo
    }, {
        symbol: 'USDT', logo: UsdtLogo
    }, {
        symbol: 'USDC', logo: UsdcLogo
    }, {
        symbol: 'BUSD', logo: BusdLogo
    }, {
        symbol: 'WETH', logo: EthereumLogo
    }, {
        symbol: 'WBTC', logo: BtcLogo
    }
]


function InvestModal(props: IProps) {

    const { open, onClose } = props;
    const [strategy, setStratege] = useState<string>('stable');
    const [token, setToken] = useState<string>('bnb');

    const onSetStrategy = (e: React.MouseEvent<HTMLElement>, newStrategy: string) => {
        if (newStrategy !== null)
            setStratege(newStrategy);
    };

    const onTokenChange = (e) => {
        setToken(e.target.value as string);
    }

    return (
        <Modal open={open}>
            <Box sx={{ ...modalStyle }}>
                <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mt: 4, mb: 3, px: 4 }}>
                    <Typography sx={{ fontSize: '24px' }}>Add Liquidity</Typography>
                    <Box>
                        <IconSettings
                            style={{
                                width: '32px',
                                height: '32px',
                                color: '#FFF',
                                marginRight: '15px',
                                cursor: 'pointer'
                            }}
                        />
                        <CloseIcon
                            sx={{ width: '32px', height: '32px', color: '#FFF', cursor: 'pointer' }}
                            onClick={onClose}
                        />
                    </Box>
                </Box>
                <Divider sx={{ borderBottomColor: '#666' }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 3, px: 4 }}>
                    <Box sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={token}
                            sx={{
                                width: '200px',
                                '& .MuiSelect-select': { display: 'flex', alignItems: 'center' },
                                '& svg': { fill: '#FFF' }
                            }}
                            onChange={onTokenChange}
                        >
                            {TokenList.map((token, index) => (
                                <MenuItem key={index} value={token.symbol.toLocaleLowerCase()}>
                                    <img src={token.logo} style={{ width: '32px', height: '32px' }} />
                                    <Typography sx={{ px: 2 }}>
                                        {token.symbol}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <Box>
                        <TextField
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                                placeholder: 'e.g 1.83'
                            }}
                            sx={{ input: { color: '#FFF', fontSize: '20px', textAlign: 'right' } }}
                        />
                        <Typography textAlign='right'>= ${120}</Typography>
                    </Box>
                </Box>
                <Divider sx={{ borderBottomColor: '#666' }} />
                <Box sx={{ px: 4, my: 2, }}>
                    <Typography sx={{ fontSize: '18px', mb: 2 }}>Estimated Returns</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Box>
                            <Typography>Monthly Income</Typography>
                            <Typography>= ${13.80}</Typography>
                        </Box>
                        <Box>
                            <Typography>Yearly Income</Typography>
                            <Typography>= ${166.40}</Typography>
                        </Box>
                        <Box>
                            <Typography>APR</Typography>
                            <Typography>= %{0.88}</Typography>
                        </Box>
                        <Box>
                            <Typography>APY</Typography>
                            <Typography>= ${1.80}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ borderBottomColor: '#666' }} />
                <Box sx={{ px: 4, my: 2, }}>
                    <Typography sx={{ fontSize: '18px', mb: 2 }}>Choose Strategy</Typography>
                    <ToggleButtonGroup
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            '& .MuiToggleButton-root': {
                                color: '#1976d2',
                                p: 3,
                                borderRadius: '20px'
                            },
                            '& .MuiToggleButton-root.Mui-selected, & .Mui-selected:hover': {
                                bgcolor: '#0f3152',
                                color: '#FFF'
                            }
                        }}
                        value={strategy}
                        exclusive
                        onChange={onSetStrategy}
                    >
                        <ToggleButton value='stable'>
                            Stable
                        </ToggleButton >
                        <ToggleButton value='standard'>
                            Standard
                        </ToggleButton >
                        <ToggleButton value='furfi'>
                            Furiofinance
                        </ToggleButton >
                    </ToggleButtonGroup>
                    <Typography className='subText' sx={{ mt: 2 }}>All of your rewards are automatically re-invested into the two currencies of the hive, thus creating a daily compound effect. </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}></Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', '& .MuiButton-root': { p: 3, border: '1px solid #0f3152' } }}>
                    <Button sx={{ borderBottomLeftRadius: '20px', color: '#FFF', bgcolor: '#0f3152' }}>
                        Approve Strategy
                    </Button>
                    <Button sx={{ borderBottomRightRadius: '20px' }}>
                        Invest
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default InvestModal;