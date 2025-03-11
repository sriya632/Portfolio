import React from 'react'
import styled from 'styled-components'
import adventureImg from '../../SkyDivingImg.jpg'
import travelImg from '../../TravelImg.png'

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 800px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
`;

const CardDesc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  width: 100%;
  margin-top: 40px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const FunFact = styled.div`
  background: ${({ theme }) => theme.primary + '15'};
  border-left: 4px solid ${({ theme }) => theme.primary};
  padding: 16px;
  margin-top: 24px;
  border-radius: 8px;
`;

const FunFactText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const BeyondWork = () => {
  return (
    <Container id="BeyondWork">
      <Title>Beyond Work</Title>
      <Desc>
        Outside of my professional life, I am passionate about traveling, engaging in adventurous activities,
        and giving back to the community through volunteering.
      </Desc>
      
      <CardContainer>
        <Card>
          <CardTitle>Volunteering</CardTitle>
          <CardDesc>• Rescued and provided food and shelter support to stray dogs, ensuring animal welfare.</CardDesc>
          <CardDesc>• Distributed and promoted public health by donating masks, sanitizers, and hygiene products to street vendors.</CardDesc>
          <CardDesc>• Participated in local community clean-up drives to help maintain a healthier environment.</CardDesc>
        </Card>
        
        <Card>
          <CardTitle>Adventures & Travel</CardTitle>
          <CardDesc>• Explored multiple countries across different continents, experiencing diverse cultures and cuisines.</CardDesc>
          <CardDesc>• Engaged in thrilling activities like skydiving, zip-lining, white water rafting, and mountain trekking.</CardDesc>
          <CardDesc>• Documented travel experiences through photography and personal travel blogs.</CardDesc>
          <FunFact>
            <FunFactText>✨ Fun Fact: I have a Scuba Diving Certification!</FunFactText>
          </FunFact>
        </Card>
      </CardContainer>
      
      <ImagesContainer>
        <ImageWrapper>
          <Image
            src={adventureImg}
            alt="Adventure Experience"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={travelImg}
            alt="Travel Experience"
          />
        </ImageWrapper>
      </ImagesContainer>
    </Container>
  );
};

export default BeyondWork;