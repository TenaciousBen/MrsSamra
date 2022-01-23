import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/Footer";
import TimelineHeader from "../components/Timeline/TimelineHeader";
import TimelineContent from "../components/Timeline/TimelineContent";
import TimelineContainer from "../components/Timeline/TimelineContainer";
import ImageViewer from "react-simple-image-viewer";
import { useCallback, useState } from "react";

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
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const Padder = styled.div`
  margin-top: 5rem;
`;

const Background = styled.div`
  background-color: #f7f7f7;
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

const ImageGallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-flow: wrap;
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 200px;
  object-fit: contain;
  display: inline-block;
  padding: 1rem;

  @media (max-width: ${MOBILE_WIDTH}) {
    height: 150px;
    width: 150px;
  }
`;

const QuoteLeft = styled.p`
  color: #444;
  font-size: 4rem;
  align-self: flex-start;
  margin: 0;
  font-family: "Secular One", sans-serif;
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
`;

const QuoteRight = styled.p`
  color: #444;
  font-size: 4rem;
  align-self: flex-end;
  margin: 0;
  font-family: "Secular One", sans-serif;
`;

const PunjabiQuote = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const DonateButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgb(50 50 93 / 10%) 0 0 0 1px inset, rgb(50 50 93 / 10%) 0 2px 5px 0, rgb(0 0 0 / 7%) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 2.5;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  text-align: center;
  text-transform: none;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: all 0.2s, box-shadow 0.08s ease-in;
  transition: all 0.2s, box-shadow 0.08s ease-in;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 150px;

  :focus {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset, rgba(50, 50, 93, 0.2) 0 6px 15px 0,
      rgba(0, 0, 0, 0.1) 0 2px 2px 0, rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
`;

const Home: NextPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [...Array(13).keys()].map((i) => `./img/${i + 1}.jpg`);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />
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
              <TimelineContent hideLine={true}>
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
          <AddressLine>Mrs Surrinderjit Kaur Samra</AddressLine>
          <AddressLine>City of London Cemetery & Crematorium</AddressLine>
          <AddressLine>Aldersbrook Road</AddressLine>
          <AddressLine>London </AddressLine>
          <AddressLine>E12 5DQ</AddressLine>
        </Guttered>
        <Padder />
        <Guttered>
          <ImageGallery>
            {images.map((src, index) => (
              <ImageContainer key={src}>
                <img
                  src={src}
                  onClick={() => openImageViewer(index)}
                  width="100%"
                  height="100%"
                  key={index}
                  style={{ margin: "2px", objectFit: "contain" }}
                  alt=""
                />
              </ImageContainer>
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={images}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                disableScroll={true}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                }}
                closeOnClickOutside={true}
              />
            )}
          </ImageGallery>
        </Guttered>
        <Background>
          <Guttered>
            <QuoteLeft>&quot;</QuoteLeft>
            <PunjabiQuote>ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥</PunjabiQuote>

            <p>Ik Onkaar Satnaam Kartaa Purakh Nirbhau Nirvair Akaal Moorat Ajooni Saibhang Gurprasaad</p>

            <p>
              One Universal Creator God. The Name Is Truth. Creative Being Personified. No Fear. No Hatred. Image Of The
              Undying, Beyond Birth, Self-Existent. By Guru&apos;s Grace
            </p>
            <QuoteRight>&quot;</QuoteRight>
          </Guttered>
        </Background>

        <Guttered>
          <SectionHeading>Donations</SectionHeading>

          <p>
            If you would like to donate in memory of Mrs Surrinderjit Kaur Samra, then you can via this button below:{" "}
          </p>

          <DonateButton href="https://surrinderjitsamra.muchloved.com/" target="_blank">
            Donate
          </DonateButton>
        </Guttered>

        {/* 

		If you would like to donate in memory of Mrs Surrinderjit Kaur Samra, then you can via this button below: 
*/}
      </Main>

      <Footer />
    </Container>
  );
};

export default Home;
