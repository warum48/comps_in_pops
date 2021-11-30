import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import LinkGA from "../GoogleAnalytics/LinkGA";
import Slider from "react-slick";
import SlickSlider from "../SlickSlider";
import Typograff from "../Typograff";
const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

/*const DB = (props) => {
  db.setCurId = (curId) => {
    db.curId = curId;
  }*/
export default function DBFunc(props) {
  this.curId = "initial";
  this.setCurId = (curId) => {
    this.curId = curId;
  };
  this.getCurId = () => {
    return this.curId;
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
      reactcontent: <SlickSlider id={props.curId} />
    },

    {
      id: 10,
      date: "3.11.2021",
      head: "react component - Typograf",
      content: `
              <h2>Typograf</h2>
              `,
      reactcontent: (
        <Typograff>
          {`<p>
          Проснувшись однажды утром после беспокойного сна, Грегор Замза
          обнаружил, что он у себя в постели превратился в страшное насекомое.
        </p>

        <p>
          Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову,
          свой коричневый, выпуклый, разделенный дугообразными чешуйками живот,
          на верхушке которого еле держалось готовое вот-вот окончательно
          сползти одеяло. Его многочисленные, убого тонкие по сравнению с
          остальным телом ножки беспомощно копошились у него перед глазами.
        </p>

        <p>
          «Что со мной случилось?» – подумал он. Это не было сном. Его комната,
          настоящая, разве что слишком маленькая, но обычная комната, мирно
          покоилась в своих четырех хорошо знакомых стенах. Над столом, где были
          разложены распакованные образцы сукон – Замза был коммивояжером, –
          висел портрет, который он недавно вырезал из иллюстрированного журнала
          и вставил в красивую золоченую рамку.
        </p>

        <p>
          На портрете была изображена дама в меховой шляпе и боа, она сидела
          очень прямо и протягивала зрителю тяжелую меховую муфту, в которой
          целиком исчезала ее рука. Затем взгляд Грегора устремился в окно, и
          пасмурная погода – слышно было, как по жести подоконника стучат капли
          дождя – привела его и вовсе в грустное настроение. «Хорошо бы еще
          немного поспать и забыть всю эту чепуху», – подумал он, но это было
          совершенно неосуществимо, он привык спать на правом боку, а в
          теперешнем своем
        </p>`}
        </Typograff>
      )
    }
  ];

  //db.props = props;
  // return db;
  //export default db;
}

//export default DBFunc;
