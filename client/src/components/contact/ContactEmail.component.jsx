import React from "react";
import { Email, Item } from "react-html-email";

const ContactEmail = ({ email, subject, message }) => {
  return (
    <Email title="Portfolio Email!">
      <Item>Heey, you just received an email from the Portfolio!</Item>
      <Item>Email: {email}</Item>
      <Item>Subject: {subject}</Item>
      <Item>Message: {message}</Item>
    </Email>
  );
};

export default ContactEmail;