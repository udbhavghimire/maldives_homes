"use client";
import Image from "next/image";
import { useState } from "react";

export default function TheVilla() {
  const [activeTab, setActiveTab] = useState("pills-1bd");

  return (
    <div className="main pt-md-5 pt-3">
      <section className="pt-3 py-md-5">
        <div className="container" id="">
          <div className="row me-0 row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="col order-2 order-md-1 pt-5 pt-md-0">
              <div>
                <div>
                  <h1 className="main-titlee mb-0 mt-0 mb-0 pb-0 center-sm">
                    The Villa
                  </h1>
                </div>
                <div className="pt-2 pt-sm-2 pt-md-4 rounded-mine mt-4">
                  <p className="headline-textt headline-textt-sm">
                    THE VILLA by Premier on Goidhoo Island offers luxurious
                    beach and garden villas with modern amenities, including a
                    cafe, restaurant, spa, gym, and water sports. Just 98 km
                    from Velana International Airport, it's accessible via
                    seaplane, speed boat, or the proposed domestic airport. The
                    nearby Baa Atoll features world-famous diving spots.
                  </p>
                  <div className="list d-block headline-textt pt-1">
                    <p className="mybot pb-md-0 pb-0">
                      Builder: Premier Properties
                    </p>
                    <p className="mybot pb-md-0 pb-0">
                      Address: Goidhoo, Baa Atoll, The Maldives
                    </p>
                    <p className="mybot pb-md-0 pb-0">Occupancy: TBA</p>
                    <p className="mybot pb-md-0 pb-0">
                      Pricing : Not Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col position-relative order-1 order-md-2">
              <img
                src="/the-villa.png"
                className="img-fluid"
                id="myVideo"
                alt=""
              />
            </div>
          </div>

          <section>
            <div className="container" id="gallery">
              <div className="my-md-5 my-5"></div>
              <div className="pt-md-5 pt-5">
                <h2 className="fw-bold fs-1 ps-3 ps-md-0 d-flex justify-content-center ">
                  Model and Renderings
                </h2>
                <span className="small-text text-center d-flex justify-content-center custom-underline pb-3">
                  Discover beautiful inside and out
                </span>
                <div>
                  <section>
                    <div className="rounded-3">
                      <div className="d-flex justify-content-between pb-3">
                        <div className="row me-0 row-cols-2 row-cols-sm-2 row-cols-lg-2 justify-content-center g-md-3 g-2 me-0">
                          {[
                            "/img8.jpg",
                            "/img16.jpg",
                            "/img32.jpg",
                            "/img52.jpg",
                          ].map((src, index) => (
                            <div className="col" key={index}>
                              <div className="afte">
                                <img
                                  src={src}
                                  alt="Clover Condos"
                                  className="img-fluid imghei"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className="py-md-5 pt-5 container" id="plans">
            <h2 className="fw-bold fs-1 py-3 pt-lg-0 pt-2 text-center custom-underline mt-5">
              Floor <span className="">Plans</span>
            </h2>
            <ul
              className="nav nav-pills d-flex justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item me-2 me-md-3 my-2 " role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "pills-1bd" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("pills-1bd")}
                >
                  Beach Villas
                </button>
              </li>
              <li className="nav-item me-2 me-md-3 my-2" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "pills-1bdden" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("pills-1bdden")}
                >
                  Garden Villas
                </button>
              </li>
            </ul>
            <div className="my-5"></div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "pills-1bd" ? "show active" : ""
                }`}
                id="pills-1bd"
                role="tabpanel"
              >
                <div className="row me-0 row-cols-1 row-cols-md-3 row-cols-lg-3 g-md-4 g-2 me-0 d-flex justify-content-center">
                  {["beach-villa1", "beach-villa2"].map((villa, index) => (
                    <div className="col floorbtns" key={index}>
                      <div className="card border-0 shadow-lg rounded-mine">
                        <a
                          href={`/plans/${villa}.jpg`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`/plans/${villa}.jpg`}
                            className="card-img-top rounded-top-mine"
                            alt={villa}
                          />
                        </a>
                        <div className="card-body">
                          <h4 className="fw-bold mb-1">
                            {index === 0 ? "Ground" : "First"} Floor Plan
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "pills-1bdden" ? "show active" : ""
                }`}
                id="pills-1bdden"
                role="tabpanel"
              >
                <div className="row me-0 row-cols-1 row-cols-md-3 row-cols-lg-3 g-md-4 g-2 me-0 d-flex justify-content-center">
                  {["garden-villa1", "garden-villa2"].map((villa, index) => (
                    <div className="col floorbtns" key={index}>
                      <div className="card border-0 shadow-lg rounded-mine">
                        <a
                          href={`/plans/${villa}.jpg`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`/plans/${villa}.jpg`}
                            className="card-img-top rounded-top-mine"
                            alt={villa}
                          />
                        </a>
                        <div className="card-body">
                          <h4 className="fw-bold mb-1">
                            {index === 0 ? "Ground" : "First"} Floor Plan
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="my-md-5 my-5"></div>
          <div className="py-md-5 pt-5 container">
            <div>
              <img
                src="/plans/site-layout.jpg"
                className="img-fluid"
                alt="Site Layout"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
