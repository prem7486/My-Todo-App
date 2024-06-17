import React from 'react';
import './ListMenu.css'; 
import Notes from './Notes';
import Reminders from './Reminders';
import AboutMe from './AboutMe';
import EditLabels from './EditLabels';
import Archive from './Archive';
import Bin from './Bin';

const ListMenu = ({ minimizedMenu }) => {
  const getWidth = () => {
    return minimizedMenu ? '5%' : '30%';
  };

  return (
    <div className="list-menu" style={{ width: getWidth() }}>
      <Notes />
      <Reminders />
      <AboutMe />
      <EditLabels />
      <Archive />
      <Bin />
    </div>
  );
};

export default ListMenu;
