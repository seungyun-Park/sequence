// 11-19 1909 정준용
// 멤버 평가 도표 컴포넌트
import React from 'react';
import styled from 'styled-components';

export type DataItem = {
  label: string;
  value: number;
  profile: string;
  content: string;
}

type EvaluationBarProps = {
  item: DataItem;
  maxValue: number;
}

const BarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: none;
`

const BarWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #212121;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: clamp(0.5rem, 1.5vw, 0.8rem);
`

const BarFill = styled.div<{ width: number }>`
  display: flex;
  width: ${(props) => props.width}%; 
  background-color: #616161;
  align-items: center;
  padding: clamp(0.2rem, 0.8vw, 0.3rem);
  color: #ffffff;
  font-size: clamp(0.8rem, 1.5vw, 1rem); 
  font-weight: bold;
  white-space: nowrap;
`

const ProfileImage = styled.img`
  display: flex;
  width: clamp(1.5rem, 3vw, 2rem);
  height: clamp(1.5rem, 3vw, 2rem);
  border-radius: 50%;
  margin-left: clamp(0.5rem, 1.5vw, 1rem); 
  margin-right: clamp(1rem, 3vw, 2rem); 
`

const BarValue = styled.div`
  display: flex;
  color: #ff9393;
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: bold;
  margin-right: clamp(0.5rem, 2vw, 1rem);
`

export const GrayBar = styled.div`
  width: 100%;
  height: clamp(1rem, 2vw, 1.5rem);
  background: linear-gradient(to bottom, #212121, #21212100);
  margin: clamp(0.3rem, 1vw, 0.5rem) auto;
`



export const MemberSummaryComponent = ({item, maxValue}: EvaluationBarProps) => {
  return (
    <BarContainer>
    <BarWrapper>
      <BarFill width={(item.value / maxValue) * 100}>
        <ProfileImage src={item.profile} alt="프로필 이미지" />
        {item.label}
      </BarFill>
      <BarValue>{item.value}</BarValue>
    </BarWrapper>
  </BarContainer>
  );
};