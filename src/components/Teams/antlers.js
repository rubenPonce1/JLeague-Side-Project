/*
Filename: .js
Date: 12/01/23
Authors: Ruben Ponce
Description: This is the team page for 
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Kashima_Antlers from "../images/Team_Logos/Kashima_Antlers.png";
import { Link } from "react-router-dom";

export default function Kashima() {
  return (
    <div className="kasm">
      <h1 className="header">
        {" "}
        <img src={Kashima_Antlers} alt="logo" className="team-page-logo"></img>
        Kashima Antlers
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value"> 1947 </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Sumitomo Metal FC (1947-1991)
            <br />
            Kashima Antlers(1992-present)
            <br />
            Nickname: The Perrennial Winners
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            Kashima Soccer Stadium
            <br />
            Capacity: 40,728
            <br />
            <i class="fas fa-map-marker-alt"> </i> Kashima City, Ibaraki
            Prefecture <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Sumitomo Metal FC: <br />
            &emsp; JSL Division 2 (1984, 1986)
            <br />
            &emsp; All Japan Senior Football Championship(1973) <br />
            <br />
            Kashima Antlers: <br />
            &emsp; J1 League (1996, 1998, 2000, 2001, 2007, 2008, 2009, 2016)
            <br />
            &emsp; Emperor's Cup (1997, 2000, 2007, 2010, 2016)
            <br />
            &emsp; J.League Cup (1997, 2000, 2002, 2011, 2012, 2015)
            <br />
            &emsp; Japanese Super Cup (1997, 1998, 1999, 2009, 2010, 2017)
            <br />
            &emsp; AFC Champions League (2018)
            <br />
            &emsp; Suruga Bank Championship (2012, 2013)
            <br />
            &emsp; A3 Champions Cup (2003)
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Kashima Antlers</h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/2L_3tytiWc0?si=eTc1YwscNJmqYTFx"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-disc">
          Title of Channel:
          <Link
            className="video-chnl-link"
            to={"https://www.youtube.com/@JLEAGUEInternational"}
          >
            J.LEAGUE International <br />
          </Link>
          Title: GET TO KNOW J.LEAGUE: Kashima Antlers
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title">
            Kashima Antlers Social Pages
          </div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/atlrs_official"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="antlers_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title"> @atlrs_official </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/kashima.antlers/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="antlers_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title"> @kashima.antlers </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/user/kashimaantlers12fd"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="antlers_yt"
                    className="social-media-img"
                    icon="fab fa-youtube"
                  />
                </div>
                <div className="social-media-title"> Official Youtube </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.tiktok.com/@kashima.antlers"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="antlers_tiktok"
                    className="social-media-img"
                    icon="fab fa-tiktok"
                  />
                </div>
                <div className="social-media-title"> @kashima.antlers </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="facebook.com/official.KashimaAntlersFC"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="antlers_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title"> @KashimaAntlersFC </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
