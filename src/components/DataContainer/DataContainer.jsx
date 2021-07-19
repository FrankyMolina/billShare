import { useState } from 'react';

import Form from '../Form';
import List from '../List';

import { Flex } from '@chakra-ui/react';
import './DataContainer.scss';

export const EMPTY_DATA = [];

const DataContainer = () => {
const [data, setData] = useState([])

  return (
    <Flex direction="column" align="center">
      DATA
      <div>
        <Form data={data} setData={setData} />
        <List />
      </div>
    </Flex>
  );
};

export default DataContainer;
