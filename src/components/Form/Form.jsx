import { useState } from 'react';

import {
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Button,
} from '@chakra-ui/react';

import './Form.scss';

const EMPTY_FORMSTATE = {
  name: '',
  amount: 0,
};

const Form = (props) => {
  const { data, setData } = props;
  const [formState, setFormState] = useState(EMPTY_FORMSTATE);
  const { name, amount } = formState;

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Flex direction="column">
      <Input
        type="text"
        placeholder="Name"
        mt="1rem"
        name="name"
        value={name}
        onChange={handleInputChange}
      />

      <NumberInput
        mt="1rem"
        value={amount || ''}
        name="amount"
        onChange={handleInputChange}
      >
        <NumberInputField placeholder="$$$$" />
      </NumberInput>

      <Flex mt="1rem" justify="space-between">
        <Button colorScheme="teal" variant="outline">
          Add
        </Button>

        <Button colorScheme="teal" variant="solid">
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default Form;
