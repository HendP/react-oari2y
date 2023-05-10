import React from 'react';
import './style.css';

import Stepper from './components/stepper/DgStepper';
export default function App() {
  return (
    <div>
      {/* 1 */}

      <Stepper status="completed" data="Kontrak Berlangganan" groupTitle />
      <Stepper status="completed" data="Review Order" titleCompleted />
      <Stepper
        status="empty-completed"
        data="on [dd-mm-yyyy] - [hh:mm:ss]"
        emptyCompleted
      />
      <Stepper
        status="empty-completed"
        data="Due Date: 12 April 2023 (12.09 WIB)"
        emptyCompleted
      />
      <Stepper
        status="empty-completed"
        data="Duration: [n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        emptyCompleted
      />
      <Stepper
        status="empty-completed"
        data="Created by Lina Winata Wijaya"
        emptyCompleted
      />

      {/* 2 */}

      <Stepper
        status="in-progress"
        data="Installation/Activation"
        groupTitle={true}
      />
      <Stepper
        status="in-progress"
        data="Shipment and Delivery"
        titleInProgress
      />
      <Stepper
        status="empty-in-progress"
        data="on [dd-mm-yyyy] - [hh:mm:ss]"
        emptyInProgress
      />
      <Stepper
        status="empty-in-progress"
        data="Due Date: 12 April 2023 (12.09 WIB)"
        emptyInProgress
      />
      <Stepper
        status="empty-in-progress"
        data="Duration: [n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        emptyInProgress
      />
      <Stepper
        status="empty-in-progress"
        data="Created by Lina Winata Wijaya"
        emptyInProgress
      />

      {/* 3 */}

      <Stepper status="terminated" data="BAST" groupTitle={true} />
      <Stepper status="terminated" data="Upload Berita Acara" titleTerminated />
      <Stepper
        status="empty-terminated"
        data="on [dd-mm-yyyy] - [hh:mm:ss]"
        emptyTerminated
      />
      <Stepper
        status="empty-terminated"
        data="Due Date: 12 April 2023 (12.09 WIB)"
        emptyTerminated
      />
      <Stepper
        status="empty-terminated"
        data="Duration: [n] [Second(s)/Minute(s)/Hour(s)/Day(s)"
        emptyTerminated
      />
      <Stepper
        status="empty-terminated"
        data="Created by Lina Winata Wijaya"
        emptyTerminated
      />
    </div>
  );
}
