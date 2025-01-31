import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { eventsinfo } from "../../Information/EventsInfo";

const localizer = momentLocalizer(moment);

const AdminCalendar = () => {
  const [events, setEvents] = useState(eventsinfo);

  return (
    <>
      <div className="">
        <div className="d-flex gap-3 justify-content-start align-items-center">
          <h5 className="m-0">Calendar</h5>
          
        </div>

        {/* table */}
        <div className="card p-4 m-0">
          <div>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{width: "100%", height: "600px"}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCalendar;
