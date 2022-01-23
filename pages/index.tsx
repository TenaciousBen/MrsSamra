import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Footer from "../components/Footer";
import TimelineHeader from "../components/Timeline/TimelineHeader";
import TimelineContent from "../components/Timeline/TimelineContent";
import TimelineContainer from "../components/Timeline/TimelineContainer";

const MOBILE_WIDTH = "480px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
`;

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: ${MOBILE_WIDTH}) {
	  padding: 0;
  }
`;

const CenteredColumn = styled.div`
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  align-self: center;
  width: 100px;
`;

const HeroImage = styled.img`
  width: 800px;

  @media (max-width: ${MOBILE_WIDTH}) {
	  width: 100%;
  }
`;

const Guttered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-left: 25%;

  @media (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
    margin-left: 0;
  }
`;

const Padder = styled.div`
  margin-top: 1rem;
`;

const Background = styled.div`
  background-color: #f3f3f3;
`;

const DudiName = styled.h3`
  font-size: 3rem;
  margin-bottom: 0;
  text-align: center;

  @media (max-width: ${MOBILE_WIDTH}) {
  font-size: 2rem;
  }
`;

const DudiYears = styled.p`
  font-size: 1.5rem;
`;

const SectionHeading = styled.h2``;

const AddressLine = styled.p`
  margin: 0;
`;

const MapSpacer = styled.div`
  padding-top: 0.5rem;
`;

const TimelineSectionHeading = styled.h3``;

const MapSizer = styled.div`
  width: 600px;
  height: 400px;

  @media (max-width: ${MOBILE_WIDTH}) {
	  width: 300px;
	  height: 300px;
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <title>Mrs Samra</title>
        <meta name="description" content="Mrs Surrinderjit Kaur Samra - 1940-2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Guttered>
          <Logo src="./img/Ek_onkar.svg.png" />
          <Title>Satnaam Kartaa Purakh</Title>
        </Guttered>
        <Guttered>
          <HeroImage src="./img/hero.jpg" />
          <DudiName>Late Smt Surrinderjit Kaur Samra</DudiName>
          <DudiYears>May 5th 1940 - January 6th 2022</DudiYears>
        </Guttered>
        <Background>
          <Guttered>
            <Padder />
            <SectionHeading>Service</SectionHeading>
            <TimelineContainer>
              <TimelineHeader>28th January 2022 at 2:15pm</TimelineHeader>
              <TimelineContent>
                <CenteredColumn>
                  <TimelineSectionHeading>Prayers</TimelineSectionHeading>
                  <AddressLine>Gurdwara Dasmesh Darbar</AddressLine>
                  <AddressLine>Rosebery Ave</AddressLine>
                  <AddressLine>London</AddressLine>
                  <AddressLine>E12 6PT</AddressLine>
                  <MapSpacer />
                  <MapSizer>
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJQQV5AE-m2EcRS5OgzEFtUA4&key=AIzaSyD2P5lPxQ99CuAPxjFV79U388ZkJWxlqcs"
                    ></iframe>
                  </MapSizer>
                </CenteredColumn>
              </TimelineContent>
            </TimelineContainer>
            <TimelineContainer>
              <TimelineHeader>28th January 2022 at 3:00pm</TimelineHeader>
              <TimelineContent>
                <CenteredColumn>
                  <TimelineSectionHeading>Service</TimelineSectionHeading>
                  <AddressLine>City of London Cemetery & Crematorium</AddressLine>
                  <AddressLine>Aldersbrook Road</AddressLine>
                  <AddressLine>London</AddressLine>
                  <AddressLine>E12 5DQ</AddressLine>
                  <MapSpacer />
                  <MapSizer>
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJTcHDGv-m2EcRlH1Z81_gpWk&key=AIzaSyD2P5lPxQ99CuAPxjFV79U388ZkJWxlqcs"
                    ></iframe>
                  </MapSizer>
                </CenteredColumn>
              </TimelineContent>
            </TimelineContainer>
            <TimelineContainer>
              <TimelineHeader>28th January 2022 at 2:15pm</TimelineHeader>
              <TimelineContent>
                <CenteredColumn>
                  <TimelineSectionHeading>Langar (food and prayers)</TimelineSectionHeading>
                  <AddressLine>Gurdwara Dasmesh Darbar</AddressLine>
                  <AddressLine>Rosebery Ave</AddressLine>
                  <AddressLine>London</AddressLine>
                  <AddressLine>E12 6PT</AddressLine>
                  <MapSpacer />
                  <MapSizer>
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJQQV5AE-m2EcRS5OgzEFtUA4&key=AIzaSyD2P5lPxQ99CuAPxjFV79U388ZkJWxlqcs"
                    ></iframe>
                  </MapSizer>
                  <Padder />
                </CenteredColumn>
              </TimelineContent>
            </TimelineContainer>
          </Guttered>
        </Background>
        <Guttered>
          <SectionHeading>Flowers</SectionHeading>
          <p>
            If you would like to send any flowers, then please send them to the below address either on the 27th or 28th
            January by 2pm
          </p>
        </Guttered>

        {/* 

		Flowers

		If you would like to send any flowers, then please send them to the below address either on the 27th or 28th January by 2pm

		Mrs Surrinderjit Kaur Samra
		City of London Cemetery & Crematorium
		City of London Cemetery
		Aldersbrook Road
		London 
		E12 5DQ

		If you would like to donate in memory of Mrs Surrinderjit Kaur Samra, then you can via this button below: 
*/}
      </Main>

      <Footer />
    </Container>
  );
};

export default Home;
