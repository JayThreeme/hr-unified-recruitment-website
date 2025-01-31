import { jobs } from "../../Information/JobsInfo"

const AdminJobs = () => {
  return (
    <>
      <div className="">
        <div className="d-flex gap-3 justify-content-start align-items-center">
          <h5 className="m-0">Dashboard</h5>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fulltime
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Remote
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Part-time
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Intern
              </a>
            </li>
          </ul>
        </div>

        {/* charts */}
        <div className="card p-4 m-0">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Location</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Tools</th>
              </tr>
            </thead>
            <tbody>
            {/* id: 1,
    title: "Software Engineer",
    location: "Manila, Philippines",
    type: "Full-time",
    workMode: "Remote Work",
    description: "Develop and maintain software systems.",
    about: */}
              {jobs.map((jobs, idx) => (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{jobs.title}</td>
                  <td>{jobs.location}</td>
                  <td>{jobs.type}</td>
                  <td>
                    <span className="col-2 text-truncate">{jobs.description}</span>
                  </td>
                  <td>
                    <a href="#">View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AdminJobs