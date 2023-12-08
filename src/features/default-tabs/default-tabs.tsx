import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { RandomKey } from '../../utils/helpers';
import './default-tabs.scss';
import Select from '../def-select/def-select';
import Icons from '../icons/icons';
import apps from '../../assets/icons/apps.png';
import { Link } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

interface IThisPros {
  tabContents: { name: string; body: any }[];
  other?: boolean;
  filter?: boolean;
  clickFilter?: () => void;
  change?: boolean;
}

function DefaultTabs({
  tabContents,
  other = false,
  filter = false,
  change = false,
  clickFilter
}: IThisPros) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }} className="Table">
      <Box
        className="Table-top position-relative  "
        sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs className="Table-item" value={value} onChange={handleChange}>
          {tabContents.map((item) => (
            <Tab key={RandomKey()} label={item.name} className="Table-item-tab" />
          ))}
          {other && <Tab className="Table-item-tab more" label="Ещё" />}
        </Tabs>
        {change && <span className={'change-span'}>Изменен: 10.08.2023</span>}
      </Box>
      {filter && (
        <div className="filter">
          <div className="box1">
            <h3>Робуксы</h3>
            <Select items={['name', 'hello']} selected="По популярности" />
          </div>
          <div className="box2">
            <div className="filter-btn" onClick={clickFilter}>
              <div className="icon-darkBlue">
                <Icons name="settings-sliders" width={16} />
              </div>
              <span>Все фильтры</span>
            </div>
            <div className="menuIcon-box ">
              <div className="icon-apps icon-bakl cursor-pointer">
                <Icons name="apps" width={20} />
              </div>
              <div className="menu-bar-icon icon-darkBlue cursor-pointer">
                <Icons name="menu-burgerr" width={16} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="Table-inner">
        {tabContents.map((item, index) => (
          <CustomTabPanel key={RandomKey()} value={value} index={index}>
            {item.body}
          </CustomTabPanel>
        ))}
      </div>
    </Box>
  );
}

export default DefaultTabs;
