import React, { FC } from 'react'

type Props = {
    name: string
    age: number
}

const Hello: FC<Props> = ({ name, age }) => {
    return (
        <div className="about-wrapper">
            <h2 className='about-head' style={{ textAlign: 'center', marginTop:'5%' }}>
                About Us
            </h2>
            <hr />
            <h4>Our Story</h4>
            <p>
                The history of TimeZen dates back to 2020, when a jewellery
                retailer was founded. In 2023, a website was established, which
                eventually became TimeZen.co.se. Since then, the business has
                grown into the largest independent watch retailer in the SE.
            </p>
            <h4>Our Brands</h4>
            <p>
                At TimeZen, we pride ourselves on being the No. 1 for Brands in
                the designer watch world. We stock over 150 top brands, from
                luxury labels to more affordable ones. Our impressive brand
                collection includes exclusive lines from our bestselling brands,
                the ones most loved by our customers. We love giving our
                customers the VIP treatment by offering standout exclusives from
                some of the top brands in the industry.
            </p>
            <h4>Our Promise to You</h4>
            <p>
                Wondering whether our watches are genuine, considering how good
                the prices are? No need to worry; we are official stockists for
                all of our brands. Your watch will ship out of our very own
                warehouse in Reading, and before then, it will sit with the
                official manufacturer. No middle man here! This also means every
                watch you purchase with us will come in the original brand
                packaging and with a valid guarantee. Plus any extras, such as
                instructions and technical information (if applicable), will be
                present and correct.
            </p>
            <div className="about-text">
                <h4>Be the first to know</h4>
                <h5>
                    Discover how to find the best watch <br />
                    and enjoy exclusive products and offers via email
                </h5>
                <hr />
                <input type="text" placeholder={name} />
                <br />
                <label style={{ fontSize: '15px' }}>
                    <input type="checkbox" /> I accept the privacy policy
                </label>
                <br />

                <button className="about-btn">Sign Up</button>
            </div>
        </div>
    )
}

export default Hello
