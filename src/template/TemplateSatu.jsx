import React from "react";
import Stepper from "../components/stepper/DgStepper";

export default function TemplateSatu() {
  return (
    <div>
      {/* Order Created */}

      <Stepper status="completed" title="Order Created" titleCompleted />
      <Stepper
        status="empty-completed"
        createdBy="[Name]"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        emptyCompleted
      />

      {/* Review Order */}

      <Stepper status="completed" title="Review Order" groupTitle />
      <Stepper status="completed" title="Review Order" titleCompleted badge />
      <Stepper
        status="empty-completed"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        dueDate="12 April 2023 (12.09 WIB)"
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
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        dueDate="13 April 2023 (12.09 WIB)"
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
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        dueDate="13 April 2023 (12.09 WIB)"
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
        lastChild
      />

      <Stepper
        status="empty-completed"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        dueDate="13 April 2023 (12.09 WIB)"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        createdBy="[Name]"
        emptyCompleted
        child
      />

      {/* 4 */}
      <Stepper
        status="completed"
        title="Inform to Customer via email"
        titleCompleted
        badge
      />

      <Stepper
        status="empty-completed"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        dueDate="14 April 2023 (12.09 WIB)"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        createdBy="[Name]"
        emptyCompleted
      />

      {/* 5 */}

      <Stepper status="completed" title="Upload Berita Acara" groupTitle />
      <Stepper status="completed" title="BAST" titleCompleted badge lastLine />

      <Stepper
        status="empty-completed"
        uploadedBy="Lina Winata Wijaya"
        time="[dd-mm-yyyy] - [hh:mm:ss]"
        dueDate="16 April 2023 (12.09 WIB)"
        duration="[n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        emptyCompleted
      />
    </div>
  );
}
