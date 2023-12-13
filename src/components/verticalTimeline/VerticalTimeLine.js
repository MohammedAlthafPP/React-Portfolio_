import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Education } from "../../data/Education";

function VerticalTimeLine() {
  return (
    <VerticalTimeline>
      {Education && Education.map((data) => (
        <VerticalTimelineElement key={data.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(21,24,31)' }}
            date={data.date}
            iconStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
            icon={data.icon}>
          <h3 className="vertical-timeline-element-title">{data.under}</h3>
          <h4 className="vertical-timeline-element-subtitle">{data.institute}</h4>
          <p>{data.course}</p>
        </VerticalTimelineElement>

      ))}
    </VerticalTimeline>
  )

}

export default VerticalTimeLine;
