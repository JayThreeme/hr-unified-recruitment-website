import { useState } from "react";
import { feedbacks } from "../../Information/Feedback";

const AdminReviewFeedback = () => {
  const [show, setShow] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const handleShow = (feedback) => {
    setSelectedFeedback(feedback);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="d-flex gap-5 justify-content-start align-items-center mb-3">
        <h5 className="m-0">Review and Feedback</h5>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              All
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Today
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Past-Week
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Past-Month
            </a>
          </li>
        </ul>
      </div>

      {/* Feedback Table */}
      <div className="card p-3 mb-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Rating</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.user}</td>
                <td>{feedback.rating}</td>
                <td>{feedback.date}</td>
                <td>
                  <button
                    className="btn btn-link"
                    onClick={() => handleShow(feedback)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Feedback Modal */}
      {show && (
        <>
          <div className="modal-backdrop fade show" />
          <div
            className="modal fade show"
            style={{ display: "block", color: "#343A40" }}
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Feedback Details</h1>
                </div>
                <div className="modal-body">
                  {selectedFeedback && (
                    <div>
                      <p style={{ color: "#343A40" }}>
                        <strong>User:</strong> {selectedFeedback.user}
                      </p>
                      <p style={{ color: "#343A40" }}>
                        <strong>Feedback:</strong> {selectedFeedback.feedback}
                      </p>
                      <p style={{ color: "#343A40" }}>
                        <strong>Rating:</strong> {selectedFeedback.rating}
                      </p>
                      <p style={{ color: "#343A40" }}>
                        <strong>Date:</strong> {selectedFeedback.date}
                      </p>
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="card p-2 mb-3">
        <div className="d-flex gap-3 justify-content-start align-items-center">
          <button className="btn btn-primary">Download Report</button>
          <button className="btn btn-secondary">Print Report</button>
        </div>
      </div>
    </div>
  );
};

export default AdminReviewFeedback;
