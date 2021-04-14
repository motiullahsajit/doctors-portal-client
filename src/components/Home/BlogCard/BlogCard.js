import React from 'react';

const BlogCard = ({ blog }) => {
    const { image, name, date, heading, text } = blog;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3 img-fluid" src={image} alt=""/>
                <div>
                    <h6 className="text-brand">{name}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{heading}</h5>
                <p className="card-text text-secondary mt-4">{text}</p>
            </div>
            
       </div>
    );
};

export default BlogCard;