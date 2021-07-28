import './Carousel.css';
import img_1 from '../../assets/images/img_1.png'


export const Carousel = () => {
    return(
        <section className="carousel container-fluid">
        <div className="row d-flex justify-content-center p-4">
            <div className="carousel_image col-md-4 d-flex justify-content-end">
                <img src={img_1} alt=""/>
            </div>

            <div className="carousel_message col-md-6 d-flex justify-content-center">
                <div className="carousel_message_line my-3"></div>

                <div className="carousel_message_text">
                    <h1> CREEPOWER   </h1>
                    <h2 style={{fontSize:'41px'}}>  Developers</h2>

                    
                        <div className="carousel_message_text_list gap-2"> - App Development</div>
                        <div className="carousel_message_text_list gap-2"> - Web Development</div>
                        <div className="carousel_message_text_list gap-2"> - ui/ux design</div>
                        <div className="carousel_message_text_list gap-2"> - Software Development</div>
                 
                </div>

                <button className="mx-auto my-3 p-2"> About Us</button>
            </div>
        </div>
    </section>
    );
    
} 