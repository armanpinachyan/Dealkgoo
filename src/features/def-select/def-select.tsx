import React, { useState } from 'react';
import './def-select.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { RandomKey } from '../../utils/helpers';
import Icons from '../icons/icons';

declare interface Select {
  selected?: string;
  className?: string;
  items: any[];
  onChange?: (value: any) => void;
  keys?: any[];
}

function Select({ selected, className = '', items = [], keys, onChange }: Select) {
  const [value, setValue] = useState<any>(selected);

  function changeSelect(item: any) {
    setValue(item);
    onChange && onChange(item);
  }

  return (
    <div className={`def-select ${className}`}>
      <Dropdown>
        <Dropdown.Toggle variant="success">
          {value ? value : items[0]}
          <span className="icon-darkBlue ps-1">
            <Icons name="down-arrow" width={16} />
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items.map((item) => (
            <Dropdown.Item
              key={RandomKey()}
              className={value === item ? 'active' : ''}
              onClick={() => changeSelect(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Select;
