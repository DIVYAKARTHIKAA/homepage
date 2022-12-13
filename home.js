import React from 'react';
import './home.css';
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
const App=()=>{
    return(
            <>
            <div className="bc">
            <div className="car1">
            <div className="bpcar1">
            <h1 id="head1">Bodhi Plus</h1>
            <div className="ic1">
                    <LocalHospitalSharpIcon />
                    </div>
            </div>
            <div className="abcar1">
                <p id="ab1">About Us</p>
                </div>
            <div className="regcar1">
                <p id="r1">Sign Up</p>
            </div>
            <div className="logcar1">
                <p id="l1">Login</p>
            </div>
            
            <div className="img">
            <div class="tr">Caring. Healing. Leading.</div>
            <div class="tr11">For you,</div>
            <div class="tr13">For your family,</div>. 
            <div class="tr12">For life.</div>
            <div class="tr2">Patient centric care.</div>
            </div>
            <div className="img1"></div>
            </div>
            <div className="ce1">
                <div className="cus">
                <ContactPhoneSharpIcon/><h3 id="headc">Contact Us :</h3>
                <p id="p1">(+91) 9487609321</p>
                <p id="p2">0422-2466696</p>
                <div className="vl1"></div>
                <h3 id="headc1">Reach Us At:</h3>
                <p id="p3">BodhiPlus@gmail.com</p>
                <h4 id="p4">www.BodhiPlus.com</h4>
                <div className="vl2"></div>
                <h3 id="headc2">Patient care:</h3>
                <p id="p5">Get Medical Records At your Fingertip</p>
                <div className="vl3"></div>
                <h3 id="headc3">GOING SMALL TO</h3>
                <h3 id="headc4">GET A BIG PICTURE</h3>
                </div>
                
            </div>
            </div>


       </>
    );
}

export default App;