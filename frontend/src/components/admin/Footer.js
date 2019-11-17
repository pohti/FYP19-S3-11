import React from "react";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" style={{position: 'absolute', bottom: '0', width: '100%'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>


        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Pegasus@SIM
        </MDBContainer>
      </div>
    </MDBFooter>
    // <React.Fragment>

    // </React.Fragment>
  );
}

export default FooterPage;