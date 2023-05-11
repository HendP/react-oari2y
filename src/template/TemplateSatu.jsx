import React from 'react';
import Stepper from '../components/stepper/DgStepper';

export default function TemplateSatu() {
  return (
    <div>
      {/* Order Created */}

      <Stepper status="completed" title="Order Created" titleCompleted />
      <Stepper
        status="empty-completed"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        createdBy="[Name]"
        emptyCompleted
      />

      {/* Review Order */}

      <Stepper status="completed" title="Review Order" groupTitle />
      <Stepper status="completed" title="Review Order" titleCompleted badge />
      <Stepper
        status="empty-completed"
        sla="1 days"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        createdBy="[Name]"
        emptyCompleted
      />

      {/* 2 */}

      <Stepper status="completed" title="Shipment and Delivery" groupTitle />
      <Stepper
        status="completed"
        title="Shipment and Delivery"
        titleCompleted
        badge
      />
      <Stepper
        status="empty-completed"
        sla="1 days"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        createdBy="[Name]"
        emptyCompleted
      />

      {/* 3 */}

      <Stepper status="completed" title="Activate Service" groupTitle />
      <Stepper
        status="completed"
        title="Activate Service"
        titleCompleted
        badge
      />

      <Stepper
        status="completed"
        title="Activate Service"
        titleCompleted
        badge
        child
      />

      <Stepper
        status="empty-completed"
        sla="5 days"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        createdBy="[Name]"
        emptyCompleted
        child
      />

      <Stepper
        status="completed"
        title="Activate Service"
        titleCompleted
        badge
        child
      />

      <Stepper
        status="empty-completed"
        sla="5 days"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        createdBy="[Name]"
        emptyCompleted
        child
      />

      {/* 4 */}

      <Stepper status="waiting" title="Upload Berita Acara" groupTitle />
      <Stepper status="waiting" title="Upload Berita Acara" titleWaiting />

      {/* <Stepper
        status="empty-completed"
        sla="5 days"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        createdBy="[Name]"
        emptyCompleted
      /> */}

      {/* 5 */}

      <Stepper status="waiting" title="Activate Service" groupTitle />
      <Stepper status="waiting" title="Activate Service" titleWaiting />

      {/* <Stepper
        status="empty-completed"
        sla="5 days"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        createdBy="[Name]"
        emptyCompleted
      /> */}
    </div>
  );
}
