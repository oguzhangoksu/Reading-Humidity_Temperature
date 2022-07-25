import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
const Cardlar=(props)=>{
    console.log("props:",props.canliVeri.nem)
    return (
        <MDBCard style={{ maxWidth: '22rem',
                        marginLeft:'100px', 
                        minWidth:'150px',
                        maxHeight:'150px',
                        background:'rgb(231, 229, 210)'
                        }}>
          <MDBCardBody>
            <MDBCardTitle>Oda Bilgileri</MDBCardTitle>
            <MDBCardText>
                Oda Nemi:{props?.canliVeri?.nem}
            </MDBCardText>
            <MDBCardText>
                Oda Sicakliği:{props?.canliVeri?.sicaklik}
            </MDBCardText>
           
          </MDBCardBody>
        </MDBCard>
      );

}

export default Cardlar;