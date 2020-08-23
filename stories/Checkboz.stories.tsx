import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Checkbox } from '../src';

storiesOf('Checkbox', module)
  .add('Checkbox Group', () => {
    const allOptions = [
      { id: 1, value: 'Alpha' },
      { id: 2, value: 'Beta' },
    ];

    const [options, setOptions] = useState([allOptions[1].id]);

    function toggleOption(id: number) {
      setOptions(
        options.includes(id)
          ? options.filter((option) => option !== id)
          : [...options, id]
      );
    }

    return (
      <form>
        {allOptions.map((item) => (
          <Checkbox
            name="Checkbox"
            key={item.id}
            label={item.value}
            value={item.value}
            checked={options.includes(item.id)}
            onChange={() => toggleOption(item.id)}
          />
        ))}
      </form>
    );
  })
  .add('Checked Box', () => (
    <Checkbox
      name="Checkbox"
      label="Checked"
      value="Checked"
      defaultChecked={true}
      readOnly
    />
  ))
  .add('Unchecked Box', () => (
    <Checkbox
      name="Checkbox"
      label="Unchecked"
      value="Unchecked"
      checked={false}
      readOnly
    />
  ));