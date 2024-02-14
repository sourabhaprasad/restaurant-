import React, { useState, useEffect } from 'react';
import './testimonials.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', content: '' });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/testimonials');
      const data = await response.json();
      console.log(data)
      setReviews(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });

      console.log(response)

      if (response.ok) {
        console.log('Testimonial submitted successfully');
        setNewReview({ name: '', content: '' });
        fetchTestimonials(); // Refresh testimonials after submission
      } else {
        console.error('Error submitting testimonial:', response.status);
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    }
  };

  return (
    <div className="testimonials">
      <div className="testimonials-left">
        <h3 className='t-h3'>Testimonials</h3>
        {reviews.map((review) => (
          <div key={review.id}>
            <h1>- {review.name}</h1>
            <p>{review.content}</p>
            <hr />
          </div>
        ))}
      </div>

      <div className="testimonials-right">
        <form onSubmit={handleSubmit}>
          <h3 className='t-h3'>Add Your Review</h3>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              placeholder='your name here'
              required
            />
          </div>
          <div>
            <label htmlFor="content">Your Review:</label>
            <textarea
              id="content"
              name="content"
              value={newReview.content}
              onChange={handleInputChange}
              placeholder='your review here'
              required
            />
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
