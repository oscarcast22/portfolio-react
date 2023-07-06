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

const Input = styled.input`
  
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
`

function ContactForm() {
  const [state, handleSubmit] = useForm("mdornpkp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Info>
        <Field>
          <Label htmlFor="name">
            Name
          </Label>
          <Input id="name" type="text" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors}/>
        </Field>
        <Field>
          <Label htmlFor="email">
            Email
          </Label>
          <Input id="email" type="email" name="email" required/>
          <ValidationError prefix="Email" field="email" errors={state.errors}/>
        </Field>
      </Info>
      <Label htmlFor="message">
        Message
      </Label>
      <textarea id="message" name="message" required/>
      <ValidationError prefix="Message" field="message" errors={state.errors}/>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </Form>
  );
}

export default ContactForm