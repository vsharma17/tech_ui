import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';





class Home extends Component {
render () {

    return (
            <div className="hero-wrap img" >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-10 d-flex align-items-center ftco-animate">
                            <div className="text text-center pt-5 mt-md-5">

                                <h1 className="mb-5">The eassiest way to expand your service business</h1>
                              
                                <div className="ftco-search my-md-5">
                                    <div className="row">

                                        <div className="col-md-12 tab-wrap">

                                            <div className="tab-content p-4" id="v-pills-tabContent">

                                                <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                                                    <form action="#" className="search-job">
                                                        <div className="row no-gutters">

                                                            <div className="col-md mr-md-2">
                                                                <div className="form-group">
                                                                    <div className="form-field">
                                                                        <div className="select-wrap">
                                                                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                                            <select name="" id="" className="form-control">
                                                                                <option value="">Select a service</option>
                                                                                <option value="">Full Time</option>
                                                                                <option value="">Part Time</option>
                                                                                <option value="">Freelance</option>
                                                                                <option value="">Internship</option>
                                                                                <option value="">Temporary</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md mr-md-2">
                                                                <div className="form-group">
                                                                    <div className="form-field">
                                                                        <div className="icon"><span className="icon-map-marker"></span></div>
                                                                        <input type="text" className="form-control" placeholder="Location" />
									              </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md">
                                                                    <div className="form-group">
                                                                        <div className="form-field">
                                                                            <button type="submit" className="form-control btn btn-primary">Search</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
				              	</form>
				              </div>

                                                    <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                                                        <form action="#" className="search-job">
                                                            <div className="row">
                                                                <div className="col-md">
                                                                    <div className="form-group">
                                                                        <div className="form-field">
                                                                            <div className="icon"><span className="icon-user"></span></div>
                                                                            <input type="text" className="form-control" placeholder="eg. Adam Scott" />
									              </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md">
                                                                        <div className="form-group">
                                                                            <div className="form-field">
                                                                                <div className="select-wrap">
                                                                                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                                                    <select name="" id="" className="form-control">
                                                                                        <option value="">Category</option>
                                                                                        <option value="">Full Time</option>
                                                                                        <option value="">Part Time</option>
                                                                                        <option value="">Freelance</option>
                                                                                        <option value="">Internship</option>
                                                                                        <option value="">Temporary</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md">
                                                                        <div className="form-group">
                                                                            <div className="form-field">
                                                                                <div className="icon"><span className="icon-map-marker"></span></div>
                                                                                <input type="text" className="form-control" placeholder="Location" />									             
                                                                            </div>
                                                                         </div>
                                                                    </div>
                                                                        <div className="col-md">
                                                                            <div className="form-group">
                                                                                <div className="form-field">
                                                                                    <button type="submit" className="form-control btn btn-primary">Search</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
				              	</form>
                                                            </div>
				            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  

    )
}

}

export default Home;