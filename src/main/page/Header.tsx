import React from 'react';
import styled from 'styled-components';
import LogoS from '../../asset/image/MainLogo.png'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const Logo = styled.img`
  display: flex;
  margin : 20px 10px;
  position : relative;
  width: clamp(1.5rem, 5vw, 3rem);
  height: clamp(2rem, 6.4vw, 4rem);
  color : white;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top : clamp(5px, 1vw, 10px);
`
const Now = styled.div`
  display : flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 4rem;
  color: #e22828;
  font-size: clamp(0.75rem, 1vw , 1.5rem);
  margin-right : 10px;
  font-family: 'SUIT' ;
`

const Project = styled.div`
  top: 20px;
  right: 20px;
  color: white;
  margin : 10px clamp(1.5rem, 2.5vw, 3rem) 0 0;
  font-size: clamp(2.6rem, 3vw, 5.1rem);
  font-weight: 600;
  font-family: 'Alike', serif;
`

function Header() {
  return (
    <Container>
      <Logo src = {LogoS}/>
      <ProjectContainer>
        <Now>
          NOW
        </Now>
        <Project>
          Project
        </Project>
      </ProjectContainer>  
    </Container>
  );
};

export default Header;