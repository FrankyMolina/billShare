import { useState } from 'react';

import { Flex, Input, Button } from '@chakra-ui/react';

import './Form.scss';

const EMPTY_FORMSTATE = {
  name: '',
  amount: 0,
  values: [],
};

const Form = (props) => {
  const { data, setData } = props;
  const [formState, setFormState] = useState(EMPTY_FORMSTATE);
  const { name, amount, values } = formState;

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const addOnClick = () => {
    setFormState({
      ...formState,
      values: [...values, Number(amount)],
      amount: '',
    });
  };

  const nextOnClick = () => {
    setData([...data, { name: name, values: [...values, Number(amount)] }]);
    setFormState(EMPTY_FORMSTATE);
  };

  console.log('form', formState);
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

      <Input
        type="number"
        placeholder="$$$$"
        mt="1rem"
        name="amount"
        value={amount || ''}
        onChange={handleInputChange}
      />

      <Flex mt="1rem" justify="space-between">
        <Button colorScheme="teal" variant="outline" onClick={addOnClick}>
          Add
        </Button>

        <Button colorScheme="teal" variant="solid" onClick={nextOnClick}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default Form;
