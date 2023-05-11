import React from 'react';
import './dg-stepper.css';

import Badge from '../badge/badge';

const Stepper = ({
  status,
  data,
  groupTitle,
  titleCompleted,
  titleInProgress,
  titleTerminated,
  emptyCompleted,
  emptyInProgress,
  emptyTerminated,
}) => {
  return (
    <>
      {console.log(`step ${status}`)}
      <div className={`step ${status}`}>
        <div className="v-stepper">
          {titleCompleted ? (
            <div className="circle-title"></div>
          ) : titleInProgress ? (
            <div className="circle-title in-progress"></div>
          ) : titleTerminated ? (
            <div className="circle-title"></div>
          ) : (
            <div className="circle"></div>
          )}
          <div className="line"></div>
        </div>

        {groupTitle ? (
          <div className="content group-title">{data}</div>
        ) : titleCompleted ? (
          <div className="inline">
            <div className="content completed-title">{data}</div>
            <Badge status="completed" text="Completed" />
          </div>
        ) : titleInProgress ? (
          <div className="inline">
            <div className="content in-progress-title">{data}</div>
            <Badge status="in-progress" text="In Progress" />
          </div>
        ) : titleTerminated ? (
          <div className="inline">
            <div className="content terminated-title">{data}</div>
            <Badge status="terminated" text="Waited" />
          </div>
        ) : emptyCompleted ? (
          <div className="content text-completed">{data}</div>
        ) : emptyInProgress ? (
          <div className="content text-in-progress">{data}</div>
        ) : emptyTerminated ? (
          <div className="content text-terminated">{data}</div>
        ) : (
          <div className="content">{data}</div>
        )}
      </div>
    </>
  );
};

export default Stepper;
