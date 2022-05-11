# form-control-react

> Control and Validate forms in React

[![NPM](https://img.shields.io/npm/v/form-control-react.svg)](https://www.npmjs.com/package/form-control-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save form-control-react
```

## Example

[Demo](https://codesandbox.io/s/form-control-react-example-hrxvs)

## Usage

### Create config object (can be a separate file to increase readability)

```ts
// App.config.ts

export const config = {
  firstName: {
    required: true,
    validators: [
      value => ({
        valid: value.length > 2,
        errorMsg: "Must be at least 3 characters long"
      })
    ]
  }
};
```

### Implement the hook directly onto native/custom HTML Elements/React Components

```tsx
//App.tsx

import React from "react";
import { useForm } from "form-control-react";
import { config } from "./App.config";

export default const App = () => {
  const { getFields,handleChange,valid } = useForm(config);

  const { firstName } = getFields();
  return (
    <>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            {...firstName}
          />
          <span>{firstName.errorMsg}</span>
        </div>
      </form>
      <button disabled={!valid}>Submit</button>
    </>
  );
};

export default App;
```

## API

```ts
// CONFIG OBJECT
{
  fieldName: {
    disabled?: boolean, // should the field be disabled
    required?: boolean, // if the field should be counted when validating the form
    value?: string | number | [] | {} | boolean, // if you want to initially set values to a form
    valid?: boolean, // if you want to intitially manually set validity
    validators?: [ // an array of validator functions
      (value) => ({
        valid: value > 0, // validation expression or regex match
        errorMsg: 'Must be higher than 0' // message in case of invalidity
    })],
  }
}

// useForm API
{
  getValues, // collects all values from fields
  getFields, // returns all fields along with their validity states
  handleBlur, // on required fields it will delete value if invalid, otherwise updates the value
  handleChange, // updates the state and validates the form on keystroke
  reset, // resets the form to initial values
  setFields, // sets the fields dynamically (if data comes from an API)
  valid, // global form validity flag
  validate, // run global validation and return validity flag
}

```

## License

MIT © [NicolasBG87](https://github.com/NicolasBG87)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
