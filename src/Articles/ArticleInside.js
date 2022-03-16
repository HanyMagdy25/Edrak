import React from "react";
import "./ArticleInside.css";
import { images } from "../constants";
import BigCard from "../Cards/BigCard";
import HeaderLeft from "../Header/HeaderLeft";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Paragraph from "./Paragraph";
// import HeaderLeft from "../../Header/HeaderLeft";

const cards = [
    {
      title: "مراجعة كتاب : فجر كل شئ",
      description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
      authorName: "أمجد عبدالرازق",
      history:"20-3-2020",
      share:"51",
      imgUrl: images.card1b,
      button:"مراجعات",
    },
    {
        title: "إنزال التعليم العالي أرضًا",
        description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
        authorName: "هانى مجدى",
        history:"20-3-2021",
        share:"11",
        imgUrl: images.card2b,
        button:"فكر",
    },
    {
        title: "إنزال التعليم العالي أرضًا",
        description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
        authorName: "أمجد أحمد",
        history:"20-3-2022",
        share:"16",
        imgUrl: images.card3b,
        button:"هوية",
    },
]

const edrakAuthors =[
  {
    name: "عمار رزق",
    imgUrl: images.author1,
  },
  {
    name: "مهند الهويدي",
    imgUrl: images.author2,
  },
  {
    name: "أمجد عبد الرازق",
    imgUrl: images.author3,
  },
  {
    name: "مؤمن أشرف",
    imgUrl: images.author1,
  },
]

// الداتا هتكون هنا مش على الريدكس مؤقتا
const paragraphs =[
  {
    title: " مرحبا بك فى عالم بلا قمامة",
    article: " الرحلة الأجمل لو قيّمتها بمقياس الفعاليات والوقت والأجواء. حفلات توقيع كتب مع كتّابي المفضلين وحضور مهرجان للأفلام القصيرة المستقلة وزيارة المناطق التي أجلت المرور بها لسنوات. ",
  },
  {
    title: "مهند الهويدي",
    article: ", الرحلة. ماذا لو أتت النتيجة إيجابية؟ وكيف أزيد على حرصي وانتباهي أكثر من الحذر الذي التزمته نحو سنتين؟ خياري الوحيد كان بذل كل ما في وسعي لعزل نفسي قدر الإمكان قبل الرحلة بأسبوعين. وبعد الفحص حبست أنفاسي حتى ظهرت النتيجة السلبية. مرحبًا بك في عالم بلا كمامة ما إن اعتدلت في جلستي مع سائق س الرحلة الأجمل لو قيّمتها بمقياس الفعاليات والوقت والأجواء. حفلات توقيع كتب مع كتّابي المفضلين وحضور مهرجان للأفلام القصيرة المستقلة وزيارة المناطق التي أجلت المرور بها لسنوات. ",
  },
  {
    title: "أمجد عبد الرازق",
    article: " الرحلة الأجمل لو قيّمتها بمقياس الفعاليات والوقت والأجواء. حفلات توقيع كتب مع كتّابي المفضلين وحضور مهرجان للأفلام القصيرة المستقلة وزيارة المناطق التي أجلت المرور بها لسنوات. ",
  },
  {
    title: "مؤمن أشرف",
    article: " الرحلة الأجمل لو قيّمتها بمقياس الفعاليات والوقت والأجواء. حفلات توقيع كتب مع كتّابي المفضلين وحضور مهرجان للأفلام القصيرة المستقلة وزيارة المناطق التي أجلت المرور بها لسنوات. ",
  },
]

// To Copy The URL
function copy() {
  const el = document.createElement('input');
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('URL Copied');
}

const ArticleInside = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-right">
          <div className="header-right-content">
            <div className="global-simi-btn">مراجعات</div>
            <h1 className="header-headline">مراجعة كتاب : فجر كل شئ</h1>
            <div className="about-author">
              <h5>أمجد عبد الرازق</h5>
              <div className="share-icon">
                <i className="fa-solid fa-share-nodes"></i> 15
              </div>
              <div className="cal">
                <i className="fa-solid fa-calendar-days"></i> 22-2-2022
              </div>
            </div>
            <div className="social-icons-small">
              <span onClick={copy}>
                <i className="fa-solid fa-share-from-square"></i>
              </span>
              <span>
                <TwitterShareButton
                  url="https://www.npmjs.com/package/react-share"
                >
                  <i className="fa-brands fa-twitter"></i>
                </TwitterShareButton> 
              </span>
              <span>
                <FacebookShareButton
                  url="https://www.npmjs.com/package/react-share"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </FacebookShareButton>
              </span>
            </div>
          </div>
          <div className="img-container">
            <img src={images.header} className="img-header" alt="headerImage" />
          </div>
            {/* هنا المقالات بتغير الداتا من فوق */}
          <div className="big-paragraph">
            {paragraphs.map((paragraph,index)=>(
              <Paragraph paragraph={paragraph}/>
            ))}
          </div>


          
          {/* المزيد من المدونات */}
          <div className="more-blogs">
                <h1>المزيد من المدونات</h1>
                <hr/>
                <div className="articles-inside">
                {cards.map((card, index) => (
                    <BigCard key={index} data={card} />
                ))}
                </div>
          </div>
        </div>

        <div className="header-left">
          <HeaderLeft data={cards} edrakAuthors={edrakAuthors} />
        </div>
      </div>
    </div>
  );
};

export default ArticleInside;
