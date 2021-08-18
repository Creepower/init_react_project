import React from 'react'
import img from '../../assets/images/img_3.png';
import './about.css'

const About = () => {
    return (
        <div className="container-fluid p-4 about" id="about" >
            <div className="row text-white ">
                <div className="col-lg-5">

                    <div className="my-2">
                        <h1 className="h2 text-center">ABOUT US</h1>
                        <div className="mx-auto rounded" style={{ height: '4px', width: "130px", background: "#e1b7bf" }}></div>
                    </div>


                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam at unde, atque totam architecto dolores expedita fugiat nemo esse eius quam nobis voluptas nulla numquam culpa aliquid ipsam facere, omnis, ut magni officia! Repudiandae nisi blanditiis explicabo soluta tempora amet distinctio sint dolor porro placeat ratione ducimus impedit dicta quos, voluptas facilis quasi maxime adipisci itaque et id eveniet! Saepe similique tempore in eveniet cupiditate. Tenetur autem eligendi ratione delectus voluptatem dolor aliquid repellendus at rem recusandae iure consequuntur, similique laborum. Amet officiis consectetur, velit repellendus sit ipsa facilis, illo voluptates corrupti dicta minus, tempore rerum voluptate? Molestias sunt est ullam nesciunt consequatur qui error adipisci ut, magnam delectus necessitatibus velit harum non dignissimos deleniti et. Repudiandae itaque earum officiis hic ad fugit unde! Eligendi aspernatur adipisci distinctio quos nulla inventore veritatis corporis culpa recusandae facilis mollitia rerum qui sit provident quas quisquam, et ipsum similique laboriosam impedit repellendus?
                </div>
                <div className="col-lg-6 py-4">
                    <img src={img} className="w-100" alt="" />

                </div>
            </div>
        </div>
    )
}

export default About
