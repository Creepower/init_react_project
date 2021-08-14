import './Footer.css';
export const Footer = () => {
   return (
      <div className="footer-frame d-flex align-items-center flex-column">
         <div className="form d-flex flex-row p-3">
            <input type="text" className="input-field"/>
            <button className="butt">submit</button>
         </div>
         <div ClassName="icons d-flex">
            <i className="bi bi-facebook px-3 h3 text-white"></i>
            <i className="bi bi-instagram px-3 h3 text-white"></i>
            <i className="bi bi-twitter px-3 h3 text-white"></i>
            <i className="bi bi-linkedin px-3 h3 text-white"></i>
         </div>
         <div className="location pt-3">
            <span className="text-white"><i className="bi bi-geo-alt-fill text-white px-1 t"></i>P.O Box 00100 Nairobi CBD, Nairobi</span>
         </div>
         <div className="copyright text-white">
            <span>&copy;2020-2021 WPEngine, Inc All Rights Reserved</span>
         </div>
      </div>
   );

}