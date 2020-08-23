import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { FaUser } from 'react-icons/fa';

import { Input } from '../src';

storiesOf('Input', module)
  .add('Default', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="name"
        placeholder="Nome completo"
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add('With Icon', () => {
    const [inputValue, setInputValue] = useState('');
    return (
      <Input
        name="name"
        icon={<FaUser />}
        placeholder="Nome completo"
        value={inputValue}
        setValue={setInputValue}
      />
    );
  });