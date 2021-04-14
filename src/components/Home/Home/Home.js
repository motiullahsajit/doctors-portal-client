import React from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <FeaturedService />
            <AppoinmentBanner />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Footer />
        </>
    );
};

export default Home;