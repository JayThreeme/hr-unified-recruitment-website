

const AdminCalendar = () => {
  return (
    <>
          <div className="">
            <div className="d-flex gap-3 justify-content-start align-items-center">
              <h5 className="m-0">Calendar</h5>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    New
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Interview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Screening
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hired
                  </a>
                </li>
              </ul>
            </div>
    
            {/* table */}
            <div className="card p-4 m-0">
              
            </div>
          </div>
        </>
  )
}

export default AdminCalendar