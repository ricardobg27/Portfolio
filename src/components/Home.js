import React from "react";
import Me from "../imgs/eu.png";
import * as S from "../Styles/home";
import Whatsapp from "../logos/whatsapp.png";
import Linkedin from "../logos/linkedin.png";
import Instagram from "../logos/instagram.png";

export default function Home() {
  return (
    <S.Section>
      <S.DivTwo>
        <h1>Bem vindos ao meu portfólio</h1>
        <S.DivInfo>
          <h2>Ricardo Borges, Dev Front End (Ele/ Dele)</h2>
        </S.DivInfo>
        <S.DivLogo>
          <a href="https://wa.me/5524981635961/" target="_blank">
            <S.Logo src={Whatsapp} alt="whatsapp" />
          </a>
          <a
            href="https://br.linkedin.com/?trk=guest_homepage-basic_nav-header-logo/"
            target="_blank"
          >
            <S.Logo src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/ricardobm_borges/" target="_blank">
            <S.Logo src={Instagram} alt="" />
          </a>
        </S.DivLogo>
      </S.DivTwo>
      <S.Figure>
        <img src={Me} alt="Eu" />
      </S.Figure>
    </S.Section>
  );
}
