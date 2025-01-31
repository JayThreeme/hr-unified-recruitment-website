import { Link } from "react-router"; 

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="fs-2 fw-semibold">Page Not Found</h2>
      <p className="fs-5 text-muted">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-3 px-4 py-2">
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound