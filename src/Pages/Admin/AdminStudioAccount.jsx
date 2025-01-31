import { applicants } from "../../Information/Applicants";
import { useState } from "react";

const AdminStudioAccount = () => {
  const [selectedAppli, setSelectedAppli] = useState(null);

  return (
    <>
          <div className="">
            <div className="d-flex gap-3 justify-content-start align-items-center">
              <h5 className="m-0">Studio Account</h5>
            </div>
    
            {/* table */}
            <div className="card p-4 m-0">
              <div className="row">
                        {/* list */}
                        <div className="col-md-4 border-end">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5>Applicants</h5>
                          </div>
              
                          <div className="">
                            {applicants.map((applicants) => (
                              <div
                                key={applicants.id}
                                className={`card mb-1 cursor-pointer ${
                                  selectedAppli?.id === applicants.id ? "border-primary" : ""
                                }`}
                                onClick={() => setSelectedAppli(applicants)}
                                style={{ cursor: "pointer" }}
                              >
                                <div className="card-body">
                                  <h5 className="card-title">{applicants.name}</h5>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
              
                        {/* job details */}
                        <div className="col-md-8">
                          {selectedAppli ? (
                            <div className="p-4">
                              <div className="d-flex justify-content-between align-items-start">
                                <div>
                                  <h3>{selectedAppli.name}</h3>
                                  <div className="d-flex gap-2 mb-3">
                                    Location: Baguio City
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod adipisci nemo ducimus? Quam maiores eos ex iusto dolorum id repellat, saepe, fugit laudantium, debitis veritatis. Ea, fugiat ratione. Natus, vel?
                                  </p>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sint necessitatibus accusantium voluptatibus commodi a, error nulla minima ad voluptas aliquam rem officiis ea possimus deleniti quaerat quasi odio. Necessitatibus!</p>
                              
                                </div>
                              </div>

                            </div>
                          ) : (
                            <div className="d-flex justify-content-center align-items-center h-100 text-muted">
                              <p>Select a applicant to view details</p>
                            </div>
                          )}
                        </div>
                      </div>
            </div>
          </div>
        </>
  )
}

export default AdminStudioAccount