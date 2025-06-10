
import React from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
function TalkToAdvisor() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className="mb-3 scroll-anime right"
      >
        <Form.Control type="text" placeholder="Full Name" />
      </FloatingLabel>
      <FloatingLabel className="mb-3 scroll-anime left" controlId="floatingemail" label="Email">
        <Form.Control type="email" placeholder="Email" />
      </FloatingLabel>
      <FloatingLabel className="mb-3 scroll-anime right" controlId="floatingPhone" label="Phone">
        <Form.Control type="phone" placeholder="Phone" />
      </FloatingLabel>
      <div className="scroll-anime bottom">
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={`By clicking 'Submit,' you confirm that we have your consent to contact you by phone, email, or text message. Calls may be recorded for training purposes. Data and messaging rates may apply.`}
            />
          </div>
        ))}
      </div>
      <div className="text-center scroll-anime bottom">
        <Button className="mt-3 submit-btn" type="submit">Submit</Button>
      </div>
    </>
  );
}
export default TalkToAdvisor;