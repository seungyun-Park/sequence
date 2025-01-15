import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #151515;
  padding: 0 clamp(2rem, 4vw, 4rem);
`;

export const Title = styled.h1`
  font-size: clamp(3rem, 3.5vw, 4rem);
  color: #FFFFFF;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: clamp(2rem, 4vw, 6rem);
  margin-bottom: clamp(4rem, 6vw, 8rem);
`;

export const CategoryTitle = styled.div`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #FFFFFF;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 3vw, 4rem);
`;

export const FormGrid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: ${props => props.columns ? `repeat(${props.columns}, 1fr)` : '1fr'};
  gap: clamp(2rem, 3vw, 4rem);
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: clamp(2rem, 6vw, 4rem) 0;
`; 