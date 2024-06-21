import React from 'react'
import Navigation from './Navigation'

function HomePage() {
    
  return (
   <>
       <Navigation />
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                <h2 className="mb-3">Latest Posts</h2>
                <div className="card mb-4">
                    <h5 className="card-title">Post 1: Introduction to Responsiveness</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <p className="card-text"><small className="text-muted">Posted on January 1, 2022</small></p>
                </div>
                <div className="card mb-4">
                    <h5 className="card-title">Post 2: Building a Responsive Website</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <p className="card-text"><small className="text-muted">Posted on January 15, 2022</small></p>
                </div>
                <div className="card mb-4">
                    <h5 className="card-title">Post 3: Creating a Navigation Menu</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <p className="card-text"><small className="text-muted">Posted on January 20, 2022</small></p>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                </div>
                <div className="col-md-4">
                <h2 className="mb-3">Categories</h2>
                <ul>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Places</a></li>
                   
                </ul>
                <h2 className="mb-3">Recent Comments</h2>
                <ul>
                    <li><a href="#">This is the best Post</a></li>
                </ul>
                </div>
            </div>
        </div>
   </>
  )
}
export default HomePage