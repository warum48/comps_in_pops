import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import LinkGA from "../GoogleAnalytics/LinkGA";
import Slider from "react-slick";
import SlickSlider from "../SlickSlider";
const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const db = [
  {
    id: 1,
    date: "1.11.2021",
    click_id: "click_1",
    view_id: "view_1",
    head: "simple html",
    content: ` 
              <h2>Simple HTML</h2>
              <h3>просто вставка хтмл кода, можно использовать ссылки</h3>
              <a className="a_text a_main"  rel="noreferrer noopener" href="https://www.google.com" target="_blank">
                <div>Ccылка в контенте</div>
              </a>`,
    iframe: "",
    reactcontent: ""
  },

  {
    id: 2,
    date: "1.11.2021",
    click_id: "click_2",
    view_id: "view_2",
    head: "spotify iframe",
    content: `<h2>Spotify Iframe</h2>`,
    iframe: `<iframe src="https://open.spotify.com/embed/playlist/0aWm5tlnNanidA6msZW2Kb?utm_source=generator&theme=0" width="250" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    reactcontent: ""
  },

  {
    id: 3,
    date: "1.11.2021",
    click_id: "click_3",
    view_id: "view_3",
    head: "video iframe",
    content: `<h2>Video Iframe</h2>`,
    iframe: `<iframe id="ytplayer" type="text/html" width="480" height="270"
    src="https://www.youtube.com/embed/ubc8MovGD7w"
    frameborder="0" allowfullscreen>`,
    reactcontent: ""
  },

  {
    id: 4,
    date: "3.11.2021",
    head: "react component example",
    content: `
              <h2>LinkGA</h2>
              `,
    reactcontent: (
      <LinkGA action="item click">
        <a className="a_text a_main" rel="noreferrer noopener" href="#">
          <div>Ccылка в контенте</div>
        </a>
      </LinkGA>
    )
  },

  {
    id: 5,
    date: "1.11.2021",
    head: "Slick predefined elements",
    content: ``,
    reactcontent: (
      <Slider {...slickSettings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    )
  },

  {
    id: 6,
    date: "1.11.2021",
    head: "Slick array",
    content: ``,
    reactcontent: (
      <Slider {...slickSettings}>
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index}>
            <h1>{item}</h1>
          </div>
        ))}
      </Slider>
    )
  },

  {
    id: 7,
    date: "1.11.2021",
    click_id: "click_1",
    view_id: "view_1",
    head: "long html",
    content: ` 
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>
              <h2>Long HTML</h2>

              <a className="a_text a_main"  rel="noreferrer noopener" href="https://www.google.com" target="_blank">
                <div>Ccылка в контенте</div>
              </a>`,
    iframe: "",
    reactcontent: ""
  },

  {
    id: 8,
    date: "1.11.2021",
    head: "Slick Slider Component",
    content: ``,
    reactcontent: <SlickSlider />
  }
];

export default db;
