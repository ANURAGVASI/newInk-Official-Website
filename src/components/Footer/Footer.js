import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
             <div className="footer-inner">
               <div className="footer-content">
                 <div className="col-md-6 col-xs-12 footer-item">
                     <h3 className="footer-item-heading">newInk Digital Solutions</h3>
                     <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis vol.</p>
                 </div>
                 <div className="col-md-3 footer-item">
                    <h4 className="footer-item-heading">Importatant Links</h4>
                    <ul className="footer-ul">
                       <li><a href="#">Navigate</a></li><hr/>
                       <li><a href="#">Navigate</a></li><hr/>
                       <li><a href="#">Navigate</a></li><hr/>
                       <li><a href="#">Navigate</a></li>
                    </ul>
                 </div>
                 <div className="col-md-3 footer-item footer-social">
				    <h4 className="footer-item-heading">Follow US</h4>
					  <ul class="footer-ul">
						<li><a href="#"><i class="icon fa fa-twitter">&nbsp;&nbsp;</i>Twitter</a></li>
						<li><a href="#"><i class="icon fa fa-facebook">&nbsp;&nbsp;</i>Facebook</a></li>
						<li><a href="#"><i class="icon fa fa-instagram">&nbsp;&nbsp;</i>Instagram</a></li>
						<li><a href="#"><i class="icon fa fa-github">&nbsp;&nbsp;</i>Github</a></li>
					  </ul>
			     </div>
               </div>
               <hr/>
               <div className="footer-copyright">
                    <div className="col-xs-12">
                      <p>© NewInkTechnologies 2018 </p>
                    </div>
               </div>
             </div>
            </footer>
        );
    }
}

export default Footer;