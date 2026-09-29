import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Home.css';

function UpcomingBatches() {
  return (
    <section className="section upcoming-batches">
      <div className="container">
        <h2 className="section-title">Check-Out the Upcoming Batches</h2>
        <div className="table-responsive">
          <table className="batches-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Start Date</th>
                <th>Duration</th>
                <th>Mode</th>
                <th>Timing</th>
                <th>Seats</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((_, idx) => (
                <tr key={idx}>
                  <td>Certified Ethical Hacker</td>
                  <td>Oct 15, 2026</td>
                  <td>40 Hrs</td>
                  <td>Online</td>
                  <td>07:00 PM IST</td>
                  <td>5 left</td>
                  <td><Link to="/enquiry" className="btn-small">Enroll Now</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default UpcomingBatches;