import React from 'react';
import articleImg from '../../../images/articleImg.png'

const FeaturedService = () => {
    return (
        <div className='container my-5'>
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <img src={articleImg} alt="" style={{ height: '500px' }} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <h3>Exceptional Dental <br />
                Care, on Your Terms</h3>
                    <p className='text-secondary'>It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsumis that it has
                    a more-or-less normal distribution of letters,as opposed
                    to using ‘Content here, content here’, making it look like
                    readable English. Many desktop publishing packages
                and web page </p>
                    <button className='btn btn-brand' style={{ backgroundColor: '#19D3AE' }}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;