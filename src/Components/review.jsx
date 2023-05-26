import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function Review({ avatar, name, comment, rating }) {
  return (
    <Row className="review">
      <Col xs={12} md={3}>
        <Image width={'100px'} src={avatar} alt="User Avatar" className="avatar" />
        <h5>{name}</h5>
      </Col>
      <Col xs={12} md={9}>
        <div className="review-body">{comment}</div>
        <div className="rating">
          {Array.from({ length: rating }, (_, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
        </div>
      </Col>
    </Row>
  );
}

function ProductReviews() {
    const reviews = [
        {
          id: 1,
          avatar: 'https://steamuserimages-a.akamaihd.net/ugc/1812137159941922588/5E2FF038780AA4A392A9DA0F3264078C9CB654F3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
          name: 'John Smith',
          rating: 5,
          comment: 'This product is amazing! I love it so much. Highly recommended.',
        },
        {
          id: 2,
          avatar: 'https://steamuserimages-a.akamaihd.net/ugc/1812137159941922588/5E2FF038780AA4A392A9DA0F3264078C9CB654F3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
          name: 'Mary Johnson',
          rating: 4,
          comment: 'Good product overall, but could be improved in some areas. Would buy again though.',
        },
        {
          id: 3,
          avatar: 'https://steamuserimages-a.akamaihd.net/ugc/1812137159941922588/5E2FF038780AA4A392A9DA0F3264078C9CB654F3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
          name: 'Bob Jones',
          rating: 2,
          comment: 'Disappointed with this product. It did not live up to my expectations. Would not recommend.',
        },
        // ...
      ];
      
  return (
    <div className="product-reviews">
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <Review
          key={index}
          avatar={review.avatar}
          name={review.name}
          comment={review.comment}
          rating={review.rating}
        />
      ))}
    </div>
  );
}

export default ProductReviews;
