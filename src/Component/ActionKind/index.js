import React from "react";
import "./style.css";

// icons
import { RiHandHeartFill } from "react-icons/ri";

function ActionKind() {
  return (
    <div className="action-kind">
      <div className="tile-wrapper">
        <div className="icon-wrapper">
          <div
            className="icon"
            style={{
              backgroundImage:
                'url("https://firebase-kanvas.imgix.net/tile_homepage/icon-donasi.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&dpr=1")',
            }}
          ></div>
          <div className="label-icon">Donasi</div>
        </div>
      </div>
      <div className="tile-wrapper">
        <div className="icon-wrapper">
          <div
            className="icon"
            style={{
              backgroundImage:
                'url("https://firebase-kanvas.imgix.net/tile_homepage/icon-zakat.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&dpr=1")',
            }}
          ></div>
          <div className="label-icon">Donasi</div>
        </div>
      </div>
      <div className="tile-wrapper">
        <div className="icon-wrapper">
          <div
            className="icon"
            style={{
              backgroundImage:
                'url("https://firebase-kanvas.imgix.net/tile_homepage/menu_galang_dana.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&h=150&w=150&dpr=1")',
            }}
          ></div>
          <div className="label-icon">Donasi</div>
        </div>
      </div>
    </div>
  );
}

export default ActionKind;
