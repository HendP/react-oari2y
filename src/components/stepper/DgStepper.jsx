import React from "react";
import "./dg-stepper.css";

import Badge from "../badge/badge";

function Stepper({
  status = null,
  title = null,
  groupTitle = false,
  badge = false,
  titleCompleted = false,
  titleInProgress = false,
  titleWaiting = false,
  emptyCompleted = false,
  emptyInProgress = false,
  emptyWaiting = false,
  child = false,
  lastChild = false,
  lastLine = false,
  sla = null,
  time = null,
  dueDate = null,
  duration = null,
  createdBy = null,
  uploadedBy = null,
}) {
  return (
    <>
      <div className={`step ${status} ${child ? "child" : ""}`}>
        <div className="v-stepper">
          {titleCompleted || titleInProgress || titleWaiting ? (
            <>
              <div className={`${lastLine ? "" : "line"}`}></div>
              <div
                className={`circle-title ${child ? "circle-title-child" : ""}`}
              ></div>
              {lastChild ? (
                <div className={`${lastLine ? "" : "line"} : ""}`}></div>
              ) : (
                <div
                  className={`${lastLine ? "" : "line"} ${
                    child ? "line-child" : ""
                  }`}
                ></div>
              )}
            </>
          ) : (
            <>
              <div className="circle"></div>{" "}
              <div className={`line ${lastLine ? "hide" : ""}`}></div>
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
                child ? "content-child" : "content"
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
                child ? "content-child" : "content"
              }  in-progress-title`}
            >
              {title}
            </div>
            {badge && <Badge status="in-progress" text="In Progress" />}
          </div>
        ) : titleWaiting ? (
          <div className="inline">
            <div
              className={`${child ? "content-child" : "content"} waiting-title`}
            >
              {title}
            </div>
            {badge && <Badge status="waiting" text="Waiting" />}
          </div>
        ) : emptyCompleted ? (
          <div
            className={`content ${
              child ? "text-complete-child" : "text-completed"
            }`}
          >
            <p style={{ lineHeight: "1.5", margin: "0" }}>
              {sla && (
                <span>
                  SLA: {sla}
                  <br />
                </span>
              )}
              {createdBy && (
                <span>
                  by {createdBy}
                  <br />
                </span>
              )}
              {uploadedBy && (
                <span>
                  Upload by {uploadedBy}
                  <br />
                </span>
              )}
              {time && (
                <span>
                  on {time}
                  <br />
                </span>
              )}
              {dueDate && (
                <span>
                  Due Date {dueDate}
                  <br />
                </span>
              )}
              {duration && (
                <span>
                  Duration: {duration}
                  <br />
                </span>
              )}
            </p>
          </div>
        ) : emptyInProgress ? (
          <div className="content text-in-progress">
            <p style={{ lineHeight: "1.5", margin: "0" }}>
              {sla && (
                <span>
                  SLA: {sla}
                  <br />
                </span>
              )}
              {createdBy && (
                <span>
                  by {createdBy}
                  <br />
                </span>
              )}
              {uploadedBy && (
                <span>
                  Upload by {uploadedBy}
                  <br />
                </span>
              )}
              {time && (
                <span>
                  on {time}
                  <br />
                </span>
              )}
              {dueDate && (
                <span>
                  Due Date {dueDate}
                  <br />
                </span>
              )}
              {duration && (
                <span>
                  Duration: {duration}
                  <br />
                </span>
              )}
            </p>
          </div>
        ) : emptyWaiting ? (
          <div className="content text-waiting">
            <p style={{ lineHeight: "1.5", margin: "0" }}>
              {sla && (
                <span>
                  SLA: {sla}
                  <br />
                </span>
              )}
              {createdBy && (
                <span>
                  by {createdBy}
                  <br />
                </span>
              )}
              {uploadedBy && (
                <span>
                  Upload by {uploadedBy}
                  <br />
                </span>
              )}
              {time && (
                <span>
                  on {time}
                  <br />
                </span>
              )}
              {dueDate && (
                <span>
                  Due Date {dueDate}
                  <br />
                </span>
              )}
              {duration && (
                <span>
                  Duration: {duration}
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
}

export default Stepper;
