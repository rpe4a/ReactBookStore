import React from "react";
import { Message } from "semantic-ui-react";

const ConfirmEmailMessage = () => (
  <Message info>
    <Message.Header>
      Please, verify your email to unlock awesome stuff.
    </Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We
      recommend reviewing the changes.
    </p>
  </Message>
);

export default ConfirmEmailMessage;
