import React, { useState } from 'react';
import styled from 'styled-components';
import Icons from '../../../features/icons/icons';
import { Dropdown } from 'react-bootstrap';
import { RandomKey } from '../../../utils/helpers';

const DropDownButton = styled.div<{ selected: boolean }>`
  position: relative;
  z-index: 1;
  .btnToggle {
    width: 100%;
    border: 0;
    padding: 0;
    background: transparent;

    .btnToggleBody {
      height: 60px;
      border-radius: 15px;
      filter: drop-shadow(0px 5px 12.5px rgba(184, 193, 218, 0.3));
      background-color: #ffffff;
      display: flex;
      padding-right: 20px;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
    }

    &::after {
      display: none;
    }

    .title {
      font-size: ${({ selected }) => (selected ? '14px' : '16px')};
      color: ${({ selected }) => (selected ? '#d2d4df' : '#212121')};
      font-weight: ${({ selected }) => (selected ? '300' : 'bold')};
      margin-bottom: 0;
      text-align: left;
      margin-top: ${({ selected }) => (selected ? '11px' : '0')};
    }

    .titleSelected {
      font-size: 16px;
      color: #212121;
      font-weight: bold;
      margin-top: -5px;
      text-align: left;
    }
  }

  .btn-body {
    width: 100%;
    filter: drop-shadow(0px 5px 12.5px rgba(184, 193, 218, 0.3));
    background-color: #ffffff;
    border: 0;
    margin-top: 5px;
    border-radius: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    overflow: hidden;
    z-index: 10;
  }

  .drop-down-item {
    padding-left: 20px;
    font-size: 16px;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;

    &.active {
      background-color: #efefef;
      color: #000;
    }
  }

  .dropdown {
    &.show {
      transform: rotate(0);

      .btnToggle-icon {
        transform: rotate(-180deg);
      }
    }
  }
`;

interface IThisProps {
  selected?: string;
  className?: string;
  items: any[];
  onChange?: (value: any) => void;
  placeholder: string;
}

function CatalogSelect({
  selected,
  className = '',
  items = [],
  onChange,
  placeholder
}: IThisProps) {
  const [value, setValue] = useState<any>(selected);

  function changeSelect(item: any) {
    setValue(item);
    onChange && onChange(item);
  }

  return (
    <DropDownButton selected={!!value} className={className ? className : ''}>
      <Dropdown>
        <Dropdown.Toggle className="btnToggle" variant="outline-light">
          <div className="btnToggleBody">
            <div>
              <p className="title">{placeholder}</p>
              {!!value && <p className="titleSelected">{value}</p>}
            </div>
            <Icons
              name="arrow-down-circle"
              className="btnToggle-icon"
              color="#2763fe"
              width={16}
              height={16}
            />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="btn-body">
          {items.map((item) => (
            <Dropdown.Item
              key={RandomKey()}
              className={`drop-down-item ${value === item ? 'active' : ''}`}
              onClick={() => changeSelect(item)}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </DropDownButton>
  );
}

export default CatalogSelect;
