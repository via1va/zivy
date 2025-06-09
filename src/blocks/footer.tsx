import './footer.css';

export default function Footer() {
  return (
    <>
      <div className='container'>
        <div className='Footer'>
          <div>
            <h1>Zivy</h1>
          </div>
          <div className='Footer__links'>
            <div className='Footer__items'>
              <ul>
                <div className='top'>
                  <li>Man </li>
                  <li>Woman</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                </div>
                <div className='bottom'>
                  <li>Privacy & Cookies Policy</li>
                </div>
              </ul>

            </div>
            <div className=''>
              <ul>
                <div className='top'>
                  <li>Instagramm</li>
                  <li>Twitter/X</li>
                  <li>Pinterest</li>
                  <li>Facebook</li>
                </div>
                <div className='bottom'>
                  <li>Accessibility Statement</li>
                </div>
              </ul>
            </div>
            <div className=''>
              <ul>
                <div className='top'>
                  <li>FAQ</li>
                  <li>Shipping & Returns</li>
                  <li>Terms & Conditions</li>
                  <li>Contact us</li>
                </div>
                <div className='bottom'>
                  <li>
                    &nbsp;
                    @2023 Zivy
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
