import React from 'react';
import './badge.css';

function Badge(props) {
  const { status, text } = props;

  let badgeColor = '';
  switch (status) {
    case 'completed':
      badgeColor = 'green';
      break;
    case 'in-progress':
      badgeColor = 'primary';
      break;
    case 'waiting':
      badgeColor = 'primary';
      break;
    default:
      badgeColor = '';
  }

  return <div className={`badge ${badgeColor}`}>{text}</div>;
}

export default Badge;
