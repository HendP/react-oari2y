import React, { useState, Fragment, useEffect } from "react";

import Stepper from "../components/stepper/DgStepper";
import jsonData from "../data.json";
import { formatDateTime, formatLocalDateTime } from "../helper/formatTime";

export default function TemplateSatu() {
  const [activationTrackings, setActivationTrackings] = useState(
    jsonData.activation_trackings
  );
  const [currentActivationTracking, setCurrentActivationTracking] = useState(
    jsonData.current_activation_tracking
  );
  const [index, setIndex] = useState({
    numIndex: 0,
    statusIndex: "",
  });

  // Helper Function
  const checkCurrentActivation = (data) => {
    data.map((element, index) => {
      if (element.key === currentActivationTracking.key) {
        setIndex({ numIndex: index, statusIndex: element?.status });
      }
    })
  }
  const changeCurrentActivation = () => {
    if(index.statusIndex === "waiting"){

    }
  };

  const ActivationTrackingComponent = () => {
    let steps = activationTrackings;
    checkCurrentActivation(steps);
    return (
      <>
        {steps.map((element, index) => {
          if (element) {
            return (
              <Fragment key={element.key}>
                {element?.status === "completed" ? (
                  <>
                    {index === steps.length - 1 ? (
                      <>
                        <Stepper
                          status="completed"
                          title={element?.name}
                          titleCompleted
                          badge
                          lastLine
                        />
                      </>
                    ) : (
                      <Stepper
                        status="completed"
                        title={element?.name}
                        titleCompleted
                        badge
                      />
                    )}
                    {element?.sub_tasks ? (
                      <>
                        {element?.sub_tasks.map((subElement, index) => {
                          if (subElement) {
                            return (
                              <Fragment key={subElement.key}>
                                {subElement?.status === "completed" ? (
                                  <>
                                    {index === element?.sub_tasks.length - 1 ? (
                                      <Stepper
                                        status="completed"
                                        title={subElement?.name}
                                        titleCompleted
                                        badge
                                        child
                                        lastChild
                                      />
                                    ) : (
                                      <Stepper
                                        status="completed"
                                        title={subElement?.name}
                                        titleCompleted
                                        badge
                                        child
                                      />
                                    )}
                                    <Stepper
                                      status="empty-completed"
                                      createdBy={subElement?.updated?.by}
                                      time={
                                        subElement?.updated?.at
                                          ? formatDateTime(
                                              subElement?.updated?.at
                                            )
                                          : ""
                                      }
                                      dueDate={
                                        subElement?.end_date
                                          ? formatLocalDateTime(
                                              subElement?.end_date
                                            )
                                          : ""
                                      }
                                      duration={subElement?.duration?.text}
                                      emptyCompleted
                                      child
                                    />
                                  </>
                                ) : (
                                  ""
                                )}
                              </Fragment>
                            );
                          }
                        })}
                      </>
                    ) : (
                      <Stepper
                        status="empty-completed"
                        createdBy={element?.updated?.by}
                        time={
                          element?.updated?.at
                            ? formatDateTime(element?.updated?.at)
                            : ""
                        }
                        dueDate={
                          element?.end_date
                            ? formatLocalDateTime(element?.end_date)
                            : ""
                        }
                        duration={element?.duration?.text}
                        emptyCompleted
                      />
                    )}
                  </>
                ) : element?.status === "in_progress" ? (
                  <>
                    {index === steps.length - 1 ? (
                      <>
                        <Stepper
                          status="in-progress"
                          title={element?.name}
                          titleInProgress
                          lastLine
                        />
                      </>
                    ) : (
                      <Stepper
                        status="in-progress"
                        title={element?.name}
                        titleInProgress
                      />
                    )}
                    {element?.sub_tasks ? (
                      <>
                        {element?.sub_tasks.map((subElement, index) => {
                          if (subElement) {
                            return (
                              <Fragment key={subElement.key}>
                                {subElement?.status === "in-progress" ? (
                                  <>
                                    {index === element?.sub_tasks.length - 1 ? (
                                      <Stepper
                                        status="in-progress"
                                        title={subElement?.name}
                                        titleInProgress
                                        child
                                        lastChild
                                      />
                                    ) : (
                                      <Stepper
                                        status="in-progress"
                                        title={subElement?.name}
                                        titleInProgress
                                        child
                                      />
                                    )}
                                    <Stepper
                                      status="empty-in-progress"
                                      createdBy={subElement?.updated?.by}
                                      time={
                                        subElement?.updated?.at
                                          ? formatDateTime(
                                              subElement?.updated?.at
                                            )
                                          : ""
                                      }
                                      dueDate={
                                        subElement?.end_date
                                          ? formatLocalDateTime(
                                              subElement?.end_date
                                            )
                                          : ""
                                      }
                                      duration={subElement?.duration?.text}
                                      emptyInProgress
                                      child
                                    />
                                  </>
                                ) : (
                                  ""
                                )}
                              </Fragment>
                            );
                          }
                        })}
                      </>
                    ) : currentActivationTracking.key === element.key &&
                      element?.status === "in_progress" ? (
                      <>
                        <Stepper
                          status="empty-in-progress"
                          createdBy={element?.updated?.by}
                          time={
                            element?.updated?.at
                              ? formatDateTime(element?.updated?.at)
                              : ""
                          }
                          dueDate={
                            element?.end_date
                              ? formatLocalDateTime(element?.duration.due_date)
                              : ""
                          }
                          duration={element?.duration?.text}
                          emptyInProgress
                        />
                        <Stepper status="empty-in-progress" buttonDone />
                      </>
                    ) : null}
                  </>
                ) : (
                  <>
                    {index === steps.length - 1 ? (
                      <>
                        <Stepper
                          status="waiting"
                          title={element?.name}
                          titleWaiting
                          lastLine
                        />
                      </>
                    ) : (
                      <Stepper
                        status="waiting"
                        title={element?.name}
                        titleWaiting
                      />
                    )}
                    {element?.sub_tasks ? (
                      <>
                        {element?.sub_tasks.map((subElement, index) => {
                          if (subElement) {
                            return (
                              <Fragment key={subElement.key}>
                                {subElement?.status === "waiting" ? (
                                  <>
                                    {index === element?.sub_tasks.length - 1 ? (
                                      <Stepper
                                        status="waiting"
                                        title={subElement?.name}
                                        titleWaiting
                                        child
                                        lastChild
                                      />
                                    ) : (
                                      <Stepper
                                        status="waiting"
                                        title={subElement?.name}
                                        titleWaiting
                                        child
                                      />
                                    )}
                                    {/* <Stepper
                                      status="empty-waiting"
                                      createdBy={subElement?.updated?.by}
                                      time={
                                        subElement?.updated?.at
                                          ? formatDateTime(
                                              subElement?.updated?.at
                                            )
                                          : ""
                                      }
                                      dueDate={
                                        subElement?.end_date
                                          ? formatLocalDateTime(
                                              subElement?.end_date
                                            )
                                          : ""
                                      }
                                      duration={subElement?.duration?.text}
                                      emptyWaiting
                                      child
                                    /> */}
                                  </>
                                ) : (
                                  ""
                                )}
                              </Fragment>
                            );
                          }
                        })}
                      </>
                    ) : currentActivationTracking.key === element.key &&
                      element.status === "waiting" ? (
                      <Stepper status="empty-waiting" buttonStart />
                    ) : null}
                  </>
                )}
              </Fragment>
            );
          }
        })}
      </>
    );
  };
  
  return (
    <>
      <ActivationTrackingComponent />
    </>
  );
}
