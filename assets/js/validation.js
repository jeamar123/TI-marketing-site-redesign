export const required = {
  rule: /[\w ][^\W_]/,
  error: 'This field is required',
};

export const email = {
  rule: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  error: 'Please enter valid Email',
};

export const phone = {
  rule: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
  error: 'Please enter valid phone number',
};

export const validate = (rule, value) => {
  let error = [];

  switch (rule) {
    case 'email': {
      if (!email.rule.test(value)) error = [ email.error ];
      break;
    }

    case 'phone': {
      if (!phone.rule.test(value)) error = [ phone.error ];
      break;
    }

    default: {
      if (!required.rule.test(value)) error = [ required.error ];
      break;
    }
  }

  return error;
};