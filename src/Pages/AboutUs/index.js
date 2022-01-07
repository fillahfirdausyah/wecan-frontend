import React from "react";
import "./style.css";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import BottomNav from "../../Component/BottomNav";

function AboutUsPage() {
  return (
    <div className="max-w-screen-sm">
      <TopNav>
        <HeaderNav title="Tetang Kami" />
      </TopNav>
      <div className="main-page-wrapper">
        <div className="about-us-container">
          <h3>Tentang Kami</h3>
          <span>Kelompok 1 Pemograman Web Lanjut</span>
        </div>
        <hr className="section-breaker" />
        <div className="member-info-container">
          <CardMember
            img="https://octatech.netlify.app/static/media/fajar.1d212120.JPG"
            name="Moh. Fajar Abdillah"
            role="Presenter"
          />
          <CardMember
            img="https://octatech.netlify.app/static/media/fill.f81fb8ab.jpg"
            name="Fillah Akbar Firdausyah"
            role="Programmer"
          />
          <CardMember
            img={
              "https://octatech.netlify.app/static/media/aqsal.f9bcfd47.jpeg"
            }
            name="Aqsal Haris P"
            role="Database Designer and Pitch Deck Maker"
          />
          <CardMember
            img={
              "https://scontent.fjog3-1.fna.fbcdn.net/v/t1.6435-9/123369345_3369095373174231_2077239512791680592_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFfoVysqtPxR17Kgmgb_yOBThYdoF_MrfdOFh2gX8yt9-uBsPGPNE3oARZ3SFi8BG1OyLNWydQG98RDUkQJKFu_&_nc_ohc=N--8ZQ9p_G0AX9qOehP&_nc_ht=scontent.fjog3-1.fna&oh=00_AT-GwzRoopqYps-pgon5UOVg2xVAQofOAqZsj2CIAnJb6Q&oe=61FF3DC0"
            }
            name="Akhmad Taajudin"
            role="Tester 1"
          />
          <CardMember
            img={"https://octatech.netlify.app/static/media/nando.b78c1596.jpg"}
            name="Fernando W."
            role="Tester 2"
          />
          <CardMember
            img={
              "https://octatech.netlify.app/static/media/farid1.6626ea3c.png"
            }
            name="M. H. Faridh Nur"
            role="UI/UX Designer"
          />
        </div>
        <hr className="section-breaker" />
        <div className="copy-right">
          <h4>Copyright 2022 Kitabisa. All Rights Reserved</h4>
          <span>This website is for assignment purposes only</span>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

function CardMember({ img, name, role }) {
  return (
    <>
      <div className="card-campaign member">
        <figure>
          <div className="image-campaign-wrapper member">
            <img src={img} alt="" />
          </div>
        </figure>
        <div className="info-campagin-content member">
          <span className="title-campaign">
            <span className="title-wrapper">{name}</span>
          </span>
          <div className="member-role">
            <span>{role}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
