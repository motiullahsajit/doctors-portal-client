import React from 'react';
import './Blogs.css'
import blogImg1 from '../../../images/Ellipse 2.png'
import blogImg2 from '../../../images/Ellipse 3.png'
import blogImg3 from '../../../images/Ellipse 4.png'
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    const blogs = [
        {
            image: blogImg1,
            name: 'Rashed Kabir',
            date: '22 Aug 2018',
            heading: 'Check at least a doctor in a year for your teeth',
            text: 'It is a long established fact that by the readable content of a lot layout. The point '
        },
        {
            image: blogImg2,
            name: 'Dr. Caudi',
            date: '23 April 2019',
            heading: '2 times of brush in a day can Keep you healthy',
            text: 'It is a long established fact that by the readable content of a lot layout. The point '
        },
        {
            image: blogImg3,
            name: 'Dr. John Mitchel',
            date: '23 April 2019',
            heading: 'The tooth cancer is taking a challenge',
            text: 'It is a long established fact that by the readable content of a lot layout. The point '
        }
    ]
    return (
        <section className='blogs my-5'>
            <div className="container">
                <div className="section-header text-center">
                    <h4 style={{ color: '#1CC7C1' }}>OUR BLOG</h4>
                    <h2>From Our Blog News</h2>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogs.map(blog => <BlogCard key={blog.name} blog={blog} />)
                    }
                </div>
            </div>
        </section>

    );
};

export default Blogs;