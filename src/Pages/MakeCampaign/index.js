import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../Helpers/ApiEndpoint";
import { useHistory } from "react-router-dom";

import TopNav from "../../Component/TopNav";
import HeaderNav from "../../Component/HeaderNav";
import BottomNav from "../../Component/BottomNav";

function MakeCampaignPage() {
  const history = useHistory();
  const [fundraiserName, setFundraiserName] = useState("");
  const [userId, setUserId] = useState(0);
  const [coverCampaign, setCoverCampaign] = useState("");
  const [campaignData, setCampaignData] = useState({
    title: "",
    description: "",
    over: "",
    goal: "",
    collected: "",
    status: false,
    url: "",
  });

  let token = localStorage.getItem("token");

  // Get user detail
  useEffect(() => {
    const verifyToken = async () => {
      try {
        let theData = await api.get("/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFundraiserName(theData.data.username);
        setUserId(theData.data.id);
      } catch (err) {
        console.log(err);
      }
    };

    verifyToken();
  }, []);

  // Handle change all input value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({
      ...campaignData,
      [name]: value,
    });
  };

  // Handle image input
  const handleFile = (e) => {
    setCoverCampaign(e.target.files[0]);
  };

  // Add Campaign
  const makeCampaign = async (e) => {
    e.preventDefault();

    let newCampaignData = new FormData();
    newCampaignData.append("user_id", userId);
    newCampaignData.append("title", campaignData.title);
    newCampaignData.append("description", campaignData.description);
    newCampaignData.append("over", campaignData.over);
    newCampaignData.append("goal", campaignData.goal);
    newCampaignData.append("collected", 0);
    newCampaignData.append("status", campaignData.status);
    newCampaignData.append("url", campaignData.url);
    newCampaignData.append("cover", coverCampaign);

    await api.post("api/campaign/add", newCampaignData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setCampaignData({
      title: "",
      description: "",
      over: "",
      goal: "",
      collected: "",
      status: false,
      url: "",
    });

    history.push("/my-campaign");
  };

  return (
    <>
      <div className="max-w-screen-sm">
        <TopNav>
          <HeaderNav title="Buat Campagin" />
        </TopNav>
        <div className="main-page-wrapper">
          <div className="make-campaign">
            <form onSubmit={makeCampaign}>
              <input type="text" defaultValue={userId} name="userid" hidden />
              <div className="info-fundaiser-form">
                <div className="campaign-form-controll">
                  <h3>Nama Penggalang Dana</h3>
                  <input
                    required
                    type="text"
                    className="info-form"
                    placeholder="Nama Penggalang Dana"
                    value={fundraiserName}
                    disabled
                  />
                </div>
              </div>
              <hr className="form-breaker" />
              <div className="info-fundaiser-form">
                <div className="campaign-form-controll mb-3">
                  <h3>Nama campaign</h3>
                  <input
                    required
                    value={campaignData.title}
                    onChange={handleChange}
                    type="text"
                    className="info-form"
                    placeholder="Nama Campaign"
                    name="title"
                  />
                </div>
                <div className="campaign-form-controll mb-3">
                  <h3>Target dana terkumpul</h3>
                  <input
                    required
                    value={campaignData.goal}
                    onChange={handleChange}
                    type="number"
                    className="info-form"
                    placeholder="Rp.."
                    name="goal"
                  />
                </div>
                <div className="campaign-form-controll mb-3">
                  <h3>Lama galang dana berlangsung</h3>
                  <input
                    required
                    value={campaignData.over}
                    onChange={handleChange}
                    type="date"
                    className="info-form"
                    name="over"
                  />
                </div>
                <div className="campaign-form-controll mb-3">
                  <h3>Cerita</h3>
                  <textarea
                    required
                    value={campaignData.description}
                    onChange={handleChange}
                    name="description"
                  ></textarea>
                </div>
                <div className="campaign-form-controll mb-3">
                  <h3>Nama link campaign</h3>
                  <input
                    required
                    value={campaignData.url}
                    onChange={handleChange}
                    type="text"
                    className="info-form"
                    placeholder="nama link campaign, huruf kecil dan tanpa spasi"
                    name="url"
                  />
                </div>
                <div className="campaign-form-controll">
                  <h3>Foto galang dana</h3>
                  <input
                    required
                    type="file"
                    className="info-form"
                    placeholder="Rp.."
                    name="cover"
                    onChange={handleFile}
                  />
                </div>
              </div>
              <hr className="form-breaker" />
              <button type="submit" className="btn btn-primary w-100">
                Buat Campaign
              </button>
            </form>
          </div>
        </div>
        <BottomNav />
      </div>
    </>
  );
}

export default MakeCampaignPage;
