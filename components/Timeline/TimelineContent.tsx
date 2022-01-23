import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH } from "../Responsive";
import { TIMELINE_WIDTH } from "./shared";

const TIMELINE_LINE_WIDTH = "5px";

const Aligner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const TimelineLineContainer = styled.div`
  width: ${TIMELINE_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const TimelineLine = styled.div`
  height: 600px;
  width: ${TIMELINE_LINE_WIDTH};
  background-color: #686868;

  @media (max-width: ${MOBILE_WIDTH}) {
  	height: 500px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
`;

export type TimelineContentProps = {
  hideLine?: boolean;
  lineSize?: string;
};

const TimelineHeader = (props: React.PropsWithChildren<TimelineContentProps>) => (
  <Aligner>
    <TimelineLineContainer >{!props.hideLine && <TimelineLine />}</TimelineLineContainer>
    <Content>{props.children}</Content>
  </Aligner>
);

export default TimelineHeader;
