import React, { useState, Fragment } from "react";

import Stepper from "../components/stepper/DgStepper";
import jsonData from "../data.json";
import { formatDateTime, formatLocalDateTime } from "../helper/formatTime";

export default function TemplateSatu() {
  const [activationTrackings, setActivationTrackings] = useState(
    jsonData.activation_trackings
  );

  const ActivationTrackingComponent = () => {
    let steps = activationTrackings;
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
                          badge
                          lastLine
                        />
                      </>
                    ) : (
                      <Stepper
                        status="in-progress"
                        title={element?.name}
                        titleInProgress
                        badge
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
                                        badge
                                        child
                                        lastChild
                                      />
                                    ) : (
                                      <Stepper
                                        status="in-progress"
                                        title={subElement?.name}
                                        titleInProgress
                                        badge
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
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <>
                    {index === steps.length - 1 ? (
                      <>
                        <Stepper
                          status="waiting"
                          title={element?.name}
                          titleWaiting
                          badge
                          lastLine
                        />
                      </>
                    ) : (
                      <Stepper
                        status="waiting"
                        title={element?.name}
                        titleWaiting
                        badge
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
                                        badge
                                        child
                                        lastChild
                                      />
                                    ) : (
                                      <Stepper
                                        status="waiting"
                                        title={subElement?.name}
                                        titleWaiting
                                        badge
                                        child
                                      />
                                    )}
                                    <Stepper
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
                      ""
                    )}
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
