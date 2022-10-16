export default function Carousel() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
        <div className="d-flex w-100 h-100 align-content-center flex-wrap justify-content-center text-center">

            <h2>My Quote</h2>
            <div className="qoute_text">

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cumque fuga laborum, omnis accusantium ut, doloribus nobis cupiditate recusandae beatae ducimus. Aliquam fugit doloribus molestiae quae. Iste nobis
                    similique expedita!
                </p>
            </div>
        </div>
        <div className="carousel-caption d-none d-md-block">

        </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
                <div className="card">
                    <div className="card-body">

                        <div className="text-center class mb-4 pb-2">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp" alt="Bulb" width="100" />
                        </div>

                        <figure className="text-center mb-0">
                            <blockquote className="blockquote">
                                <p className="pb-3">
                                    <i className="fas fa-quote-left fa-xs text-primary"></i>
                                    <span className="lead font-italic">Many of life&apos;s failures are people who did not realize how
                  close they were to success when they gave up.</span>
                                    <i className="fas fa-quote-right fa-xs text-primary"></i>
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0">
                                Thomas Edison
                            </figcaption>
                        </figure>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
        <div className="d-flex w-100 h-100 align-content-center flex-wrap justify-content-center text-center">

            <h2>My Quote</h2>
            <div className="qoute_text">

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cumque fuga laborum, omnis accusantium ut, doloribus nobis cupiditate recusandae beatae ducimus. Aliquam fugit doloribus molestiae quae. Iste nobis
                    similique expedita!
                </p>
            </div>
        </div>
        <div className="carousel-caption d-none d-md-block">

        </div>
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
        </div>
    )
}