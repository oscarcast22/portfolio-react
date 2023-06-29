import { useForm, ValidationError } from '@formspree/react';
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: auto;
  gap: .3rem;
`

const Label = styled.label`
  text-align: left;
`

function ContactForm() {
  const [state, handleSubmit] = useForm("mdornpkp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">
        Your best email
      </Label>
      <input
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <Label htmlFor="name">
        Your name
      </Label>
      <input
        id="name"
        type="text" 
        name="name"
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
       <Label htmlFor="company">
        Company {`(opcional)`}
      </Label>
      <input
        id="company"
        type="text" 
        name="company"
      />
      <ValidationError 
        prefix="Company" 
        field="company"
        errors={state.errors}
      />
      <Label htmlFor="message">
        Message
      </Label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </Form>
  );
}

export default ContactForm