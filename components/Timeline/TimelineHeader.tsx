import React from "react";
import styled from "styled-components";
import { TIMELINE_WIDTH } from "./shared";

const Aligner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TimelineBullet = styled.div`
  width: ${TIMELINE_WIDTH};
  height: ${TIMELINE_WIDTH};
  border-radius: 50%;
  border: solid 5px #686868;
`;

const Content = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
`;

const TimelineHeader = (props: React.PropsWithChildren<unknown>) => (
  <Aligner>
    <TimelineBullet />
    <Content>{props.children}</Content>
  </Aligner>
);

export default TimelineHeader;
