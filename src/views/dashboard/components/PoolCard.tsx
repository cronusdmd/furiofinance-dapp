import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, Typography } from '@mui/material';
import InvestModal from './InvestModal';

const useStyles = makeStyles((theme) => ({
    cardView: {
        minWidth: '360px',
        height: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '20px',
        borderRadius: '30px',
        border: '1px solid #2e5387',
        background: 'linear-gradient(150deg,#102747 -87%,#102747)',
        '& .MuiTypography-root': {
            color: '#FFF'
        }
    }
})) as any;

export interface IPoolCard {
    aTokenLogo: string;
    bTokenLogo: string;
    poolName: string;
    apy: number;
    tvl: number;
    lpRewardsApr: number;
    blockRewardsApr: number;
}

interface IProps {
    poolInfo: IPoolCard
}

function PoolCard(props: IProps) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {
        aTokenLogo,
        bTokenLogo,
        poolName,
        apy,
        tvl,
        lpRewardsApr,
        blockRewardsApr
    } = props.poolInfo;

    return (
        <div className={classes.cardView}>
            <Box display='flex' alignItems='center' sx={{ mt: 4, ml: 4 }}>
                <Box sx={{ position: 'relative' }}>
                    <img src={aTokenLogo} alt='tokenA' />
                    <img
                        src={bTokenLogo}
                        alt='tokenB'
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: '20px',
                            width: '28px',
                            height: '28px',
                            borderRadius: '9999px',
                            border: '1px solid yellow',
                            backgroundColor: '#000'
                        }}
                    />
                </Box>
                <Box ml={3}>
                    <Typography sx={{ fontSize: '20px' }}>{poolName}</Typography>
                </Box>
            </Box>
            <Box display='flex' justifyContent='space-around' mt={-4}>
                <Box>
                    <Typography my={1}>APR:</Typography>
                    <Typography fontSize={'24px'}>{apy}%</Typography>
                </Box>
                <Box>
                    <Typography my={1}>TVL:</Typography>
                    <Typography fontSize={'24px'}>${tvl}</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Button
                    sx={{
                        flexGrow: 1,
                        bgcolor: '#0f3152',
                        color: '#FFF',
                        borderBottomLeftRadius: '30px',
                        py: 2
                    }}
                    onClick={() => setOpen(!open)}
                >
                    Invest
                </Button>
                <Button sx={{
                    flexGrow: 1,
                    bgcolor: '#0a172a9f',
                    borderBottomRightRadius: '30px',
                    py: 2,
                    '&:hover': {
                        color: '#FFF'
                    }
                }}>
                    Details
                </Button>
            </Box>
            <InvestModal open={open} onClose={() => setOpen(false)} />
        </div>
    )
}

export default PoolCard;