import React from 'react';
import Banner from '../banner/Banner';
import LogoCard from '../logocard/LogoCard';
import OnSell from '../onsell/OnSell';
import OnSellCard from '../onsell/OnSellCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LogoCard></LogoCard>
            <OnSell>
            </OnSell>
        </div>
    );
};

export default Home;