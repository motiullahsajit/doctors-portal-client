import React from 'react';
import person1 from '../../../images/Ellipse 1.png'
import person2 from '../../../images/Ellipse 2.png'
import person3 from '../../../images/Ellipse 3.png'
import testimonialicon from '../../../images/quote.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonials = [
    {
        name: 'Winson Herry',
        from: 'California',
        meassage: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
        image: person1
    },
    {
        name: 'Winson Herren',
        from: 'California',
        meassage: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
        image: person2
    },
    {
        name: 'Ema Winson ',
        from: 'California',
        meassage: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
        image: person3
    }
]

const Testimonials = () => {
    return (
        <div className='my-5 container'>
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="col-md-10">
                    <h4 classNam='text-brand'>TESTIMONIAL</h4>
                    <h2>What's Our Patients <br />
                    Says
                    </h2>
                </div>
                <div className="col-md-2">
                    <img src={testimonialicon} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="row d-flex justify-content-around">
                {
                    testimonials.map(testimonial => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)
                }
            </div>
        </div>
    );
};

export default Testimonials;