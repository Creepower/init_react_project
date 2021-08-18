import React from 'react'
import img1 from '../assets/images/img_6.jpg'
import img2 from '../assets/images/img_7.png'
import img3 from '../assets/images/img_8.jpg'
import img4 from '../assets/images/img_9.png'
import img5 from '../assets/images/img_10.png'
import '../assets/css/projects.css'

const projects = () => {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row w-100 d-flex m-auto justify-content-between">
                    <div className="col-lg-3 col-sm-6 col-md-4 p-1">
                        <img src={img1} alt="" className="w-95" />

                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-4 p-1">
                        <img src={img2} alt="" className="w-95" />

                    </div> <div className="col-lg-3 col-sm-6 col-md-4 p-1">
                        <img src={img3} alt="" className="w-95" />

                        <div className="P-1">

                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-4 p-1">
                        <img src={img4} alt="" className="w-95" />
                    </div>
                    {/* </div>
                <div className="row w-100 d-flex m-auto justify-content-between"> */}
                    <div className="col-lg-3 col-sm-6 col-md-4 p-1">
                        <img src={img5} alt="" className="w-95" />

                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-4 p-1">
                        <img src={img4} alt="" className="w-95" />

                    </div> <div className="col-lg-3 col-sm-6 col-md-4 p-1">
                        <img src={img5} alt="" className="w-95" />

                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-4 p-1">
                        <img src={img1} alt="" className="w-95" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects
