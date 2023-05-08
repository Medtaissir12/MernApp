import React from 'react'
import styled from "styled-components";



const Container = styled.div`
`
const Trend = styled.h2`
    font-size: 28px;
    text-transform:capitalize;
    text-align:center;
    margin-bottom:30px;
    color:blue;
`
const TrendSpan = styled.span`
color:red;
`

const AnnouncementTwo = () => {
  return (
    <Container>
      <Trend>our trending <TrendSpan> products</TrendSpan></Trend>
    </Container>
  );
}

export default AnnouncementTwo