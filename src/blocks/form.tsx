import './form.css';

export function Form() {
  return (
    <>
      <div className="form">
        <div className='container'>
          <div className='form'>
            <div className='form__title'>
              <h1>Get access<br /> to exclusive drops <br />and redefine <br />your style</h1>
            </div>
            <form>
              <input type="email" placeholder="E-Mail" />


              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <p>      I consent to receive communications from Zivy</p>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
