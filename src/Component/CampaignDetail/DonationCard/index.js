import React from "react";
import "./style.css";

function DonationCard() {
  return (
    <div className="donation-card-body">
      <img
        src="data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx4BBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/AABEIADwAPAMBIgACEQEDEQH/xABwAAACAQUBAAAAAAAAAAAAAAAABgcBAgMEBQgQAAEDAwMCAwYFBQAAAAAAAAECAwQABREGEjEhQVFhcQciMoGhsRMUQnKRM0RSYsEBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APRVFFAGSAMDJ5oMM2VGhRVypkhuOw38Ti1YA8B5k+ApYk6/s7bm1iHOkJH68JbB9ATmlDWF7Xe7utaFn8kwooit9scFZ/2V9sVxqCWrJqiz3d9MZh5yPJV8LMhO0rPgk5wT5c12vvUFEZGPnzUp6Bvbl3tKmpbhcmRCEOLPLiD8Kz59CD6UDHRRRQFat2Wtu0TnG870xnCPXaa2qoUoWlSHBlC0lKh5EYP0zQQS1/SR+0VdWzdre9abnItz+d7CsJP+aP0qHkRj61rUBTb7KlqGoJSATtXDO75KBH/aUqkH2WW5bMKTd3QR+aw0xkctpOSr0Kug9KB0ooooChIKugyaX9T6qg2VwxkoMydjJZSrCW/Dert6Dr6VH971FeLwCiXKKGD/AG7PuN/MDqr5mgedSN6Zv8xi0u3FpFzGUsOsncUHnYo/Cc9cJzzxSzJ0HfWnClhcKQjssPbP5SoZFKwSAkADbjjb0x4EY4qTdG6qZuMBxm7SG2ZkVsrcdWcB5scr/cOmR36EUHFjaOjWyOq56ontIiNY3MRyTvJ4SVcnPgnqevWnq2TIE6Mly2SI77CEhIDJ6IA4G3lOPSot1ZfXr/cUlCHEQ2lbYrGOpJ6biBytXT06Cuc+xPtFxw4h+FMQAoKSrCgDwdyTgg4PfsRQTZRUd2PXk1hSWry0JjPH47YCXU+ZHC/oaf7fIYuMNuZBdEhhwZStH2I7EeBoIQcWpx1briipbiitajypROSTVKKKAqhweQKrRQXxwTIZSEuqJdQAlpW1ajuGAk9lHsexxT7q1wotdyaalwW3CyDJQWVJLwJASW8rwAQClPunC0On3d2TH+M81c+47IeL8h1x94gZcdUVKPbk9aC081nizZsRCkRZj8dClblJQspBPGfoP4rBRQf/2Q=="
        alt=""
      />
      <div className="donation-card-info">
        <span className="donation-card-username">Anonim</span>
        <span className="donation-card-amount-wrapper">
          Berdonasi sebesar{" "}
          <span className="donation-card-amount">Rp 555.000</span>
        </span>
        <span className="donation-card-time">sejam yang lalu</span>
      </div>
    </div>
  );
}

export default DonationCard;
