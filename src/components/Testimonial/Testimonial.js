import React from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";

export default function Testimonial({testimonials}) {
    const paginate = (arr, size) => {
        return arr.reduce((acc, val, i) => {
            let idx = Math.floor(i / size)
            let page = acc[idx] || (acc[idx] = [])
            page.push(val)

            return acc
        }, [])
    }

    if (!testimonials || testimonials?.length <= 0) {
        return "";
    }
    return <MDBContainer>
        <MDBCarousel showControls dark>
            <MDBCarouselInner>
                { paginate(testimonials, 3).map((p,i) => {
                    return <MDBCarouselItem className={"" + (i === 0 ? 'active' : '')} key={`testimonial-row-${i}`}>
                        <MDBContainer>
                            <MDBRow className="text-center">
                                { p.map((e,j) => {
                                    return <MDBCol lg="4" className="mb-5 mb-md-0" key={`testimonial-elem-${j}`}>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2"/>
                                            { e.review }
                                        </p>
                                        <h5 className="mb-3">{ e.name }</h5>
                                    </MDBCol>
                                })}
                            </MDBRow>
                        </MDBContainer>
                    </MDBCarouselItem>
                }) }
            </MDBCarouselInner>
        </MDBCarousel>
    </MDBContainer>;
}