import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import imgProfile from '../public/assets/img/profile.jpg'
import  imgCarousel1 from '../public/assets/img/carousel-1.jpg'
import  imgCarousel2 from '../public/assets/img/carousel-2.jpg'
import  imgCarousel3 from '../public/assets/img/carousel-3.jpg'

import  imgBlog1 from '../public/assets/img/blog-1.jpg'
import  imgBlog2 from '../public/assets/img/blog-2.jpg'
import  imgBlog3 from '../public/assets/img/blog-3.jpg'
import  imgBlog4 from '../public/assets/img/blog-4.jpg'
import  imgBlog5 from '../public/assets/img/blog-5.jpg'
import  imgBlog6 from '../public/assets/img/blog-6.jpg'
import Script from 'next/script'



export default function index() {
  return (
    <div>
  

<div className="wrapper">
            <div className="sidebar">
                <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
                    <Image className="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3" src={imgProfile} alt="Image"  />
                    <h1 className="font-weight-bold">Kate Glover</h1>
                    <p className="mb-4">
                        Justo stet no accusam stet invidunt sanctus magna clita vero eirmod, sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam justo
                    </p>
                    <div className="d-flex justify-content-center mb-5">
                        <a className="btn btn-outline-primary mr-2" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-primary mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-primary mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-primary mr-2" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <a href="" className="btn btn-lg btn-block btn-primary mt-auto">Hire Me</a>
                </div>
                <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
                    <i className="fas fa-2x fa-angle-double-right text-primary"></i>
                </div>
            </div>
            <div className="content">
                
                <div className="container p-0">
                    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                        <a href="" className="navbar-brand d-block d-lg-none">Navigation</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav m-auto">
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <a href="about.html" className="nav-item nav-link">About</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu">
                                        <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                        <a href="single.html" className="dropdown-item">Blog Detail</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
                
                
                
                <div className="container p-0">
                    <div id="blog-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Image className="w-100" src={imgCarousel1} alt="Image"/>
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h2 className="mb-3 text-white font-weight-bold">Lorem ipsum dolor sit amet</h2>
                                    <div className="d-flex text-white">
                                        <small className="mr-2"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                        <small className="mr-2"><i className="fa fa-folder"></i> Web Design</small>
                                        <small className="mr-2"><i className="fa fa-comments"></i> 15 Comments</small>
                                    </div>
                                    <a href="" className="btn btn-lg btn-outline-light mt-4">Read More</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <Image className="w-100" src={imgCarousel2} alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h2 className="text-white font-weight-bold">Lorem ipsum dolor sit amet</h2>
                                    <div className="d-flex">
                                        <small className="mr-2"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                        <small className="mr-2"><i className="fa fa-folder"></i> Web Design</small>
                                        <small className="mr-2"><i className="fa fa-comments"></i> 15 Comments</small>
                                    </div>
                                    <a href="" className="btn btn-lg btn-outline-light mt-4">Read More</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <Image className="w-100" src={imgCarousel3} alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h2 className="text-white font-weight-bold">Lorem ipsum dolor sit amet</h2>
                                    <div className="d-flex">
                                        <small className="mr-2"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                        <small className="mr-2"><i className="fa fa-folder"></i> Web Design</small>
                                        <small className="mr-2"><i className="fa fa-comments"></i> 15 Comments</small>
                                    </div>
                                    <a href="" className="btn btn-lg btn-outline-light mt-4">Read More</a>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
                

                <div className="container bg-white pt-5">
                    <div className="row blog-item px-3 pb-5">
                        <div className="col-md-5">
                            <Image className="img-fluid mb-4 mb-md-0" src={imgBlog1} alt="Image" />
                        </div>
                        <div className="col-md-7">
                            <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                            <div className="d-flex mb-3">
                                <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
                                <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                            </p>
                            <a className="btn btn-link p-0" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="row blog-item px-3 pb-5">
                        <div className="col-md-5">
                            <Image className="img-fluid mb-4 mb-md-0" src={imgBlog2} alt="Image" />
                        </div>
                        <div className="col-md-7">
                            <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                            <div className="d-flex mb-3">
                                <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
                                <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                            </p>
                            <a className="btn btn-link p-0" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="row blog-item px-3 pb-5">
                        <div className="col-md-5">
                            <Image className="img-fluid mb-4 mb-md-0" src={imgBlog3} alt="Image"/>
                        </div>
                        <div className="col-md-7">
                            <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                            <div className="d-flex mb-3">
                                <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
                                <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                            </p>
                            <a className="btn btn-link p-0" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                
                
                
                
                <div className="container py-5 px-4 bg-secondary text-center">
                    <h1 className="text-white font-weight-bold">Subscribe My Newsletter</h1>
                    <p className="text-white">Subscribe and get my latest article in your inbox</p>
                    <form className="form-inline justify-content-center">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Your Email"/>
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="submit">Subscribe</button>
                            </div>
                          </div>
                    </form>
                </div>
                
                
                
                
                <div className="container bg-white pt-5">
                    <div className="row blog-item px-3 pb-5">
                        <div className="col-md-5">
                            <Image className="img-fluid mb-4 mb-md-0" src={imgBlog4} alt="Image"/>
                        </div>
                        <div className="col-md-7">
                            <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                            <div className="d-flex mb-3">
                                <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
                                <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                            </p>
                            <a className="btn btn-link p-0" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="row blog-item px-3 pb-5">
                        <div className="col-md-5">
                            <Image className="img-fluid mb-4 mb-md-0" src={imgBlog5} alt="Image" />
                        </div>
                        <div className="col-md-7">
                            <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                            <div className="d-flex mb-3">
                                <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
                                <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                            </p>
                            <a className="btn btn-link p-0" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="row blog-item px-3 pb-5">
                        <div className="col-md-5">
                            <Image className="img-fluid mb-4 mb-md-0" src={imgBlog6} alt="Image"/>
                        </div>
                        <div className="col-md-7">
                            <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                            <div className="d-flex mb-3">
                                <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Design</small>
                                <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                            </p>
                            <a className="btn btn-link p-0" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                
                <div className="container py-4 bg-secondary text-center">
                    <p className="m-0 text-white">
                        &copy; <a className="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div>
                
            </div>
        </div>
        <a href="#" className="back-to-top"><i className="fa fa-angle-double-up"></i></a>

        <Script  defer src="https://code.jquery.com/jquery-3.4.1.min.js" strategy='beforeInteractive'></Script>
        <Script  defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" strategy='beforeInteractive'></Script>
        <Script  defer src="assets/lib/easing/easing.min.js" strategy='beforeInteractive'></Script>
        <Script  defer src="assets/lib/waypoints/waypoints.min.js" strategy='beforeInteractive'></Script>

        <Script defer  src="assets/mail/jqBootstrapValidation.min.js" strategy='beforeInteractive'></Script>
        <Script defer src="assets/mail/contact.js" strategy='beforeInteractive'></Script>
        <Script defer  src="assets/js/main.js" strategy='beforeInteractive'></Script>

    </div>
  )
}

