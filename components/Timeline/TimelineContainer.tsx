import React from "react";
import styled from "styled-components";
import { TIMELINE_WIDTH } from "./shared";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: left;
`;

const TimelineContainer = (props: React.PropsWithChildren<unknown>) => <Container>{props.children}</Container>;

export default TimelineContainer;
