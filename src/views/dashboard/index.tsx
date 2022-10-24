import React from 'react';
import { makeStyles } from '@mui/styles';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PoolCard, { IPoolCard } from './components/PoolCard';

import UsdtLogo from '../../asset/images/crypto-usdt.png';
import UsdcLogo from '../../asset/images/crypto-usdc.png'
import DaiLogo from '../../asset/images/crypto-dai.svg';
import EthereumLogo from '../../asset/images/crypto-ethereum.png';
import BtcLogo from '../../asset/images/crypto-btc.svg';
import BusdLogo from '../../asset/images/crypto-busd.svg';
import BnbLogo from '../../asset/images/crypto-bnb.svg';

const useStyles = makeStyles((theme) => ({
    dashboardView: {
        display: 'flex',
        justifyContent: 'center',
        '& .MuiTypography-root': {
            color: '#FFF'
        }
    }
})) as any;

function Dashboard() {

    const classes = useStyles();
    const stablePools: Array<IPoolCard> = [
        {
            aTokenLogo: UsdcLogo,
            bTokenLogo: BusdLogo,
            poolName: 'USDC-BUSD',
            apy: 13.27,
            tvl: 24000,
            lpRewardsApr: 9,
            blockRewardsApr: 4
        }, {
            aTokenLogo: UsdcLogo,
            bTokenLogo: UsdtLogo,
            poolName: 'USDC-USDT',
            apy: 13.27,
            tvl: 10000,
            lpRewardsApr: 9,
            blockRewardsApr: 4
        }, {
            aTokenLogo: DaiLogo,
            bTokenLogo: BusdLogo,
            poolName: 'DAI-BUSD',
            apy: 13.27,
            tvl: 35000,
            lpRewardsApr: 9,
            blockRewardsApr: 4
        }, {
            aTokenLogo: UsdtLogo,
            bTokenLogo: BusdLogo,
            poolName: 'USDT-BUSD',
            apy: 13.27,
            tvl: 23000,
            lpRewardsApr: 9,
            blockRewardsApr: 4
        }
    ]

    const mixedPools: Array<IPoolCard> = [
        {
            aTokenLogo: EthereumLogo,
            bTokenLogo: UsdcLogo,
            poolName: 'ETH-USDT',
            apy: 13.27,
            tvl: 32000,
            lpRewardsApr: 9,
            blockRewardsApr: 4
        }, {
            aTokenLogo: BtcLogo,
            bTokenLogo: BusdLogo,
            poolName: 'BTCB-BUSD',
            apy: 13.27,
            tvl: 10000,
            lpRewardsApr: 9,
            blockRewardsApr: 4
        }, {
            aTokenLogo: BnbLogo,
            bTokenLogo: BusdLogo,
            poolName: 'BUSD-BNB',
            apy: 13.27,
            tvl: 65000,
            lpRewardsApr: 9,
            blockRewardsApr: 4
        }
    ]

    return (
        <div className={classes.dashboardView}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: { xs: '95%', md: '80%' } }} >
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    mb: 4
                }}>
                    <Box mb={2} ml={4}>
                        <Typography sx={{ fontSize: '24px' }}>Your Info</Typography>
                        <Typography >Welcome Back</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        padding: '10px 30px',
                        borderRadius: '20px',
                        width: 'fit-content',
                        border: '1px solid #e57a3bA0',
                        boxShadow: '0px 1px 4px #e57a3b',
                        '& .MuiTypography-root': {
                            color: '#FFF'
                        }
                    }}>
                        <Box mx={1}>
                            <Typography>Total Investment</Typography>
                            <Typography sx={{ fontSize: '24px' }}>$ 1600</Typography>
                        </Box>
                        <Divider orientation='vertical' sx={{ mx: 1, bgcolor: '#e57a3b', display: { xs: 'none', md: 'block' } }} />
                        <Box mx={1}>
                            <Typography>Estimate Monthly Income</Typography>
                            <Typography sx={{ fontSize: '24px' }}>$ 300</Typography>
                        </Box>
                        <Divider orientation='vertical' sx={{ mx: 1, bgcolor: '#e57a3b', display: { xs: 'none', md: 'block' } }} />
                        <Box mx={1}>
                            <Typography>Estimate APY</Typography>
                            <Typography sx={{ fontSize: '24px' }}>3.50%</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '32px', ml: 4 }}>Stablecoin Farmings</Typography>
                    <Box display='flex' flexWrap='wrap' justifyContent='center'>{
                        stablePools.map((pool, index) => (
                            <PoolCard key={index} poolInfo={pool} />
                        ))
                    }</Box>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '32px', ml: 4 }}>Mixed Farmings</Typography>
                    <Box display='flex' flexWrap='wrap' justifyContent='center'>{
                        mixedPools.map((pool, index) => (
                            <PoolCard key={index} poolInfo={pool} />
                        ))
                    }</Box>
                </Box>
            </Box>
        </div>
    )
}

export default Dashboard;