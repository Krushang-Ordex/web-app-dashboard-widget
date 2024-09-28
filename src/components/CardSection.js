import React from "react";

function CardSection() {
  return (
    <div className="row mx-0 px-0">
      {/* Main section for displaying storage statistics */}
      <section className="col-12 section d-flex flex-wrap justify-content-between align-items-center gap-md-0 gap-3">
        
        {/* Card for Total Images */}
        <article className="col-lg-3 col-md-6 col-12 d-flex gap-3 card-1">
          <div className="storage-card d-flex">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">Total Images</h6>
              <h5 className="card-title">36,476 GB</h5>
              <div className="d-flex gap-4 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-solid fa-arrow-trend-up text-success"></i>
                  <p className="text-success percentage mb-0">+32.40% <span className="text-secondary">last month</span></p>
                </div>
              </div>
            </div>
            <div className="circular-progress-bar d-flex align-items-center justify-content-center">
              <div className="progress-circle">
                <div className="progress-circle-inner">
                  <div className="progress-circle-value">32%</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Card for Total Video */}
        <article className="col-lg-3 col-md-6 col-12 d-flex gap-3 card-2">
          <div className="storage-card d-flex">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">Total Video</h6>
              <h5 className="card-title">53,406 GB</h5>
              <div className="d-flex gap-4 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-solid fa-arrow-trend-down text-danger"></i>
                  <p className="text-danger percentage mb-0">-18.45% <span className="text-secondary">last month</span></p>
                </div>
              </div>
            </div>
            <div className="circular-progress-bar d-flex align-items-center justify-content-center">
              <div className="progress-circle">
                <div className="progress-circle-inner">
                  <div className="progress-circle-value">48%</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Card for Total Documents */}
        <article className="col-lg-3 col-md-6 col-12 d-flex gap-3 card-3">
          <div className="storage-card d-flex">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">Total Documents</h6>
              <h5 className="card-title">90,875 GB</h5>
              <div className="d-flex gap-4 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-solid fa-arrow-trend-up text-success"></i>
                  <p className="text-success percentage mb-0">+20.34% <span className="text-secondary">last month</span></p>
                </div>
              </div>
            </div>
            <div className="circular-progress-bar d-flex align-items-center justify-content-center">
              <div className="progress-circle">
                <div className="progress-circle-inner">
                  <div className="progress-circle-value">89%</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Card for Total Music */}
        <article className="col-lg-3 col-md-6 col-12 d-flex gap-3 card-4">
          <div className="storage-card d-flex">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">Total Musics</h6>
              <h5 className="card-title">63,076 GB</h5>
              <div className="d-flex gap-4 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-solid fa-arrow-trend-up text-success"></i>
                  <p className="text-success percentage mb-0">+14.45% <span className="text-secondary">last month</span></p>
                </div>
              </div>
            </div>
            <div className="circular-progress-bar d-flex align-items-center justify-content-center">
              <div className="progress-circle">
                <div className="progress-circle-inner">
                  <div className="progress-circle-value">54%</div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default CardSection;
