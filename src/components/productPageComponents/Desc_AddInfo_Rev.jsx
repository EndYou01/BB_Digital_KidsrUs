import { useState } from "react"

import { Fade } from "react-awesome-reveal";

import { ValoracionStars } from "../valoracionStars/ValoracionStars.jsx";


export const Desc_AddInfo_Rev = ({ product }) => {

    const [activeSection, setActiveSection] = useState('Description');

    return (

        <div className="container desc_addInfo_rev">

            <div className="titles_section">
                <h2 onClick={() => setActiveSection('Description')} className={activeSection == 'Description' ? 'navigation_button_active' : ''}>Description</h2>
                {
                    product.Cantidad_stock != 0 &&
                    <h2 onClick={() => setActiveSection('Additional_Information')} className={activeSection == 'Additional_Information' ? 'navigation_button_active' : ''}>Additional Information</h2>
                }
                <h2 onClick={() => setActiveSection('Reviews')} className={activeSection == 'Reviews' ? 'navigation_button_active' : ''}>Reviews(1)</h2>
            </div>

            <div className="separator">
                {
                    activeSection == 'Description'
                    && <Fade duration={500} direction="up" triggerOnce={true}><p className="color-gray">{product.description}</p></Fade>
                }
                {
                    activeSection == 'Additional_Information'
                    &&
                    <Fade duration={500} direction="up" triggerOnce={true}>
                        <div className="additional_information dashed-cell">
                            <div>
                                <p><b>Color:</b>	<span>{product.additional_information.color}</span></p>
                            </div>
                            <div>
                                <p><b>Material:</b>	<span>{product.additional_information.material}</span></p>
                            </div>
                            <div>
                                <p><b>Age:</b>	<span>{product.additional_information.age}</span></p>
                            </div>
                        </div>
                    </Fade>
                }
                {
                    activeSection == 'Reviews'
                    &&

                    <Fade duration={500} direction="up" triggerOnce={true}>
                        <div className="reviews_section">
                            <p>1 review for {product.title}</p>

                            <div className="dashed-cell dashed-cell-pd40 reviews separator">
                                <div>
                                    <img src="assets/main/bb_logo.png" alt="" />
                                </div>
                                <div className="reviews_info">
                                    <p>cmsmasters       <span><b>December 5, 2018</b></span></p>
                                    <ValoracionStars numbersOfStars={product.valoration} />
                                    <p className="color-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque temporibus veniam dolor? Tenetur quaerat distinctio a, iure voluptates est reiciendis illo ratione cupiditate iste labore voluptatum autem dolor in.</p>

                                    <p>Rated {product.valoration} of 5</p>
                                </div>
                            </div>

                            <h3 className="center_gray">Add a review</h3>
                            <div className="dashed-cell dashed-cell-pd40">

                                <p className="center_gray">Your email address will not be published. Required fields are marked *</p>

                                <div className="separate">
                                    <p><b>Your Rating *</b></p>

                                    <ValoracionStars numbersOfStars={0} />
                                </div>

                                <input type="text" className="dashed-cell your_review" placeholder="Your Review" />

                                <div className="name_email_subtmi_section separator">
                                    <div className="name_email">
                                        <div>
                                            <p><b>Name*</b></p>
                                            <input className="dashed-cell" type="text" id="name" />
                                        </div>
                                        <div>
                                            <p><b>Email*</b></p>
                                            <input className="dashed-cell" type="text" id="email" />
                                        </div>
                                    </div>

                                    <button className="dashed-btn dashed-btn-primary dashed-btn-wd190">Submit</button>
                                </div>

                            </div>
                        </div>
                    </Fade>

                }
            </div>


        </div>
    )
}
