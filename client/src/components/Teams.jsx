import React, { useState } from "react";
import { easternConfernece, westernConfernece } from "../data";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleEast = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 35px;
  text-align: center;
`;
const TitleWest = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 35px;
  text-align: center;
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-left: 5%;
  margin-bottom: 30px;

  img {
    width: 60%;
    height: 50%;
    object-fit: cover;
    margin-bottom: 8px;
  }
`;

const TeamLogoWrapper = styled.div`
  position: relative;
  img {
    width: 60%;
    height: 50%;
    object-fit: cover;
    margin-bottom: 8px;
    border: 5px solid rgba(0, 0, 255, 0.3);
    border-radius: 50%;
  }

  img:hover {
    border: 5px solid rgba(0, 0, 255, 0.6);
    box-shadow: 0 0 10px white;
    cursor: pointer;
  }
  &:hover .tooltip {
    visibility: visible;
  }

  .tooltip {
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: rgba(250, 0, 0, 0.8);
    color: white;
    text-align: center;
    padding: 7px;
    position: absolute;
    z-index: 999;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: auto;
  }
`;

const Teams = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);

  const handleTeamMouseEnter = (team) => {
    setHoveredTeam(team);
  };

  const handleTeamMouseLeave = () => {
    setHoveredTeam(null);
  };

  return (
    <div>
      <TitleEast>Eastern Conference</TitleEast>
      <Container>
        {easternConfernece.map((team) => (
          <TeamWrapper key={team.id}>
            <TeamLogoWrapper
              onMouseEnter={() => handleTeamMouseEnter(team)}
              onMouseLeave={() => handleTeamMouseLeave()}
              showTooltip={hoveredTeam === team}
            >
              <img src={team.img} alt={team.name} />
              <div className="tooltip">{team.name}</div>
            </TeamLogoWrapper>
          </TeamWrapper>
        ))}
      </Container>
      <TitleWest>Western Conference</TitleWest>
      <Container>
        {westernConfernece.map((team) => (
          <TeamWrapper key={team.id}>
            <TeamLogoWrapper
              onMouseEnter={() => handleTeamMouseEnter(team)}
              onMouseLeave={() => handleTeamMouseLeave()}
              showTooltip={hoveredTeam === team}
            >
              <img src={team.img} alt={team.name} />
              <div className="tooltip">{team.name}</div>
            </TeamLogoWrapper>
          </TeamWrapper>
        ))}
      </Container>

      <img
        style={{ width: "100%", height: "auto" }}
        src="https://store.nba.com/content/ws/all/6d257249-a858-49ae-b811-398a3aea303f__1600X661.jpg"
        alt="nbastore"
      />
    </div>
  );
};

export default Teams;
