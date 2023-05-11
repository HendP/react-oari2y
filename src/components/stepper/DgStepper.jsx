import React from 'react';
import './dg-stepper.css';

import Badge from '../badge/badge';

const Stepper = ({
  status,
  title,
  groupTitle,
  badge,
  titleCompleted,
  titleInProgress,
  titleWaiting,
  emptyCompleted,
  emptyInProgress,
  emptyWaiting,
  child,
  sla,
  time,
  duration,
  createdBy,
}) => {
  return (
    <>
      <div className={`step ${status} ${child ? 'child' : ''}`}>
        <div className="v-stepper">
          {titleCompleted || titleInProgress || titleWaiting ? (
            <>
              <div className={`line`}></div>
              <div
                className={`circle-title ${child ? 'circle-title-child' : ''}`}
              ></div>
              <div className={`line ${child ? 'line-child' : ''}`}></div>
            </>
          ) : (
            <>
              <div className="circle"></div> <div className="line"></div>
            </>
          )}
        </div>

        {groupTitle ? (
          <div className="content group-title" s>
            {title}
          </div>
        ) : titleCompleted ? (
          <div className="inline">
            <div
              className={`${
                child ? 'content-child' : 'content'
              } completed-title`}
            >
              {title}
            </div>
            {badge && <Badge status="completed" text="Completed" />}
          </div>
        ) : titleInProgress ? (
          <div className="inline">
            <div
              className={`${
                child ? 'content-child' : 'content'
              }  in-progress-title`}
            >
              {title}
            </div>
            {badge && <Badge status="in-progress" text="In Progress" />}
          </div>
        ) : titleWaiting ? (
          <div className="inline">
            <div
              className={`${child ? 'content-child' : 'content'} waiting-title`}
            >
              {title}
            </div>
            {badge && <Badge status="waiting" text="Waiting" />}
          </div>
        ) : emptyCompleted ? (
          <div
            className={`content ${
              child ? 'text-complete-child' : 'text-completed'
            }`}
          >
            <p style={{ lineHeight: '1.5', margin: '0' }}>
              {sla && (
                <span>
                  SLA: {sla}
                  <br />
                </span>
              )}
              {time && (
                <span>
                  on {time}
                  <br />
                </span>
              )}
              {duration && (
                <span>
                  Duration: {duration}
                  <br />
                </span>
              )}
              {createdBy && (
                <span>
                  Created By {createdBy}
                  <br />
                </span>
              )}
            </p>
          </div>
        ) : emptyInProgress ? (
          <div className="content text-in-progress">
            <p style={{ lineHeight: '1.5', margin: '0' }}>
              {sla && (
                <span>
                  SLA: {sla}
                  <br />
                </span>
              )}
              {time && (
                <span>
                  on {time}
                  <br />
                </span>
              )}
              {duration && (
                <span>
                  Duration: {duration}
                  <br />
                </span>
              )}
              {createdBy && (
                <span>
                  Created By {createdBy}
                  <br />
                </span>
              )}
            </p>
          </div>
        ) : emptyWaiting ? (
          <div className="content text-waiting">
            <p style={{ lineHeight: '1.5', margin: '0' }}>
              {sla && (
                <span>
                  SLA: {sla}
                  <br />
                </span>
              )}
              {time && (
                <span>
                  on {time}
                  <br />
                </span>
              )}
              {duration && (
                <span>
                  Duration: {duration}
                  <br />
                </span>
              )}
              {createdBy && (
                <span>
                  Created By {createdBy}
                  <br />
                </span>
              )}
            </p>
          </div>
        ) : (
          <div className="content">{title}</div>
        )}
      </div>
    </>
  );
};

export default Stepper;
