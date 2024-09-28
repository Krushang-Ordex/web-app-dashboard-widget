import React from "react";

function QuickAccessSection() {
    return (
        <div className="row mx-0 px-0">
            {/* Main section for displaying quick access files */}
            <section className="col-lg-8 col-md-10 col-12 d-flex flex-column gap-md-0 gap-3 mb-lg-0 mb-4">
                <h2 className="font-24 fw-900 my-sm-3 my-2">Quick Access</h2>
                
                {/* Carousel for file access */}
                <div id="fileCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {/* First slide */}
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-around gap-4">
                                {/* File card example */}
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/792/small/Basic_Ui__28178_29.jpg" alt="Folder icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Employee Sheet</h6>
                                    </div>
                                </article>
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://icons.veryicon.com/png/o/file-type/file-type-1/pdf-icon.png" alt="PDF icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Employee history.pdf</h6>
                                    </div>
                                </article>
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://cdn-icons-png.freepik.com/256/13558/13558989.png?semt=ais_hybrid" alt="Word document icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Final Changes.doc</h6>
                                    </div>
                                </article>
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6v82M9gbjLtSTcomX8Cxq8vjywV2IwbRrw&s" alt="Image file icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Office Setup.jpg</h6>
                                    </div>
                                </article>
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://cdn-icons-png.flaticon.com/512/8361/8361484.png" alt="Excel file icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Salary Slip.xlsx</h6>
                                    </div>
                                </article>
                            </div>
                        </div>

                        {/* Second slide */}
                        <div className="carousel-item">
                            <div className="d-flex justify-content-around gap-4">
                                {/* Repeating file cards for demonstration */}
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/792/small/Basic_Ui__28178_29.jpg" alt="Folder icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Employee Sheet</h6>
                                    </div>
                                </article>
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://icons.veryicon.com/png/o/file-type/file-type-1/pdf-icon.png" alt="PDF icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Employee history.pdf</h6>
                                    </div>
                                </article>
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://cdn-icons-png.freepik.com/256/13558/13558989.png?semt=ais_hybrid" alt="Word document icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Final Changes.doc</h6>
                                    </div>
                                </article>
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6v82M9gbjLtSTcomX8Cxq8vjywV2IwbRrw&s" alt="Image file icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Office Setup.jpg</h6>
                                    </div>
                                </article>
                                <article className="card access-card d-flex justify-content-between flex-column text-center">
                                    <div className="card-body">
                                        <img src="https://cdn-icons-png.flaticon.com/512/8361/8361484.png" alt="Excel file icon" className="mb-3" width={50} height={50} />
                                        <h6 className="card-title">Salary Slip.xlsx</h6>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

                    {/* Carousel controls */}
                    <a className="carousel-control-prev" href="#fileCarousel" role="button" data-slide="prev" aria-label="Previous slide">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#fileCarousel" role="button" data-slide="next" aria-label="Next slide">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default QuickAccessSection;
