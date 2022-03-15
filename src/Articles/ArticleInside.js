import React from "react";
import "./ArticleInside.css";
import { images } from "../constants";
import BigCard from "../Cards/BigCard";
import HeaderLeft from "../Header/HeaderLeft";
import { FacebookShareButton, TwitterShareButton } from "react-share";
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
          <div className="big-paragraph">
            <p>
              ودعتُ نيويورك في يونيو 2019 بعد رحلة غامرة وملونة. كانت الرحلة
              الأجمل لو قيّمتها بمقياس الفعاليات والوقت والأجواء. حفلات توقيع
              كتب مع كتّابي المفضلين وحضور مهرجان للأفلام القصيرة المستقلة
              وزيارة المناطق التي أجلت المرور بها لسنوات. وفوق كلّ هذا المنعطفات
              العفوية التي تبعت فيها قلبي. لكن نيويورك هذه المرة لم تكن كما
              عهدتها. بدت للوهلة الأولى متأهبة ومنغلقة، وساعتا الانتظار التي
              قضيتها في ممر الجوازات دليلٌ على ذلك. كنت أشرت للموظف باتجاه مكائن
              التسجيل الذاتي للمسافرين والتي كنا نستفيد منها لعدة سنوات، لكنّه
              أصر بأنها مغلقة: «قفي هنا وانتظري دورك». وعلى خلاف حرصنا في
              الطائرة على التباعد، أصبحنا جميعًا مقيدي الحركة في مساحة لا تسمح
              حتى بتمديد أطرافي بعد عناء الرحلة الطويلة. لكنني تجاهلت كل ذلك.
              ورحت أردد في خاطري: تبقى عتبة صغيرة ينبغي عليّ عبورها لأنطلق في
              شوارع منهاتن التي أحب. قلق فحص الـ «البي سي آر» حذرني الجميع من
              السفر فأوضاع العالم لا تزال مرتبكة، لكن متطلبات السفر إلى أميركا
              كانت الأسهل في قائمة الدول المتاحة. لديّ فيزا سارية لعدة سنوات،
              ولا يشترط الحصول على جرعات اللقاح كاملة أو البقاء في الحجر لأكثر
              من خمسة أيام. بعد حجز التذكرة، والذي كان سهلًا جدًا بسبب قلة
              ازدحام الرحلات، بدأت رحلة القلق من تعبئة النموذج الصحي للدخول
              لنيويورك. يتحقق هذا النموذج من حالة تلقي المسافر للقاح ومكان سكنه
              وتحديد مدة بقائه في المدينة. لكن الأسبوع الأخير من يونيو حمل
              مفاجأة لطيفة تتمثل في إلغاء إلزامية هذا النموذج، والاكتفاء بفحص
              الـ«بي سي آر» المطلوب للسفر خارج السعودية. مع ذلك بقي القلق
              يتملكني. فأكثر ما أخافني من نتيجة فحص كورونا المدة التي يتطلبها
              إجراء الفحص والتي لا تزيد عن اثنين وسبعين ساعة قبل الرحلة. ماذا لو
              أتت النتيجة إيجابية؟ وكيف أزيد على حرصي وانتباهي أكثر من الحذر
              الذي التزمته نحو سنتين؟ خياري الوحيد كان بذل كل ما في وسعي لعزل
              نفسي قدر الإمكان قبل الرحلة بأسبوعين. وبعد الفحص حبست أنفاسي حتى
              ظهرت النتيجة السلبية. مرحبًا بك في عالم بلا كمامة ما إن اعتدلت في
              جلستي مع سائق سيارة الأجرة حتى سألته: «هل يمكنني التخلي عن الكمامة
              هنا؟» فأخبرني أن المدينة كلها فعلت ذلك. وفعلًا ما إن بدأت السيارة
              تخترق زحام نيويورك حتى لمحت الجميع وقد تخففوا من كماماتهم وأوجدوا
              لها مكانًا جديدًا، أعلى المرفق وكأنها نيشان أو علامة على الخلاص.
              فبعض الأماكن لا تزال تلزم مرتاديها بوضع الكمامة. قرأت رسالة محذّرة
              على واجهة إحدى المحلات: «يسعدنا رؤية ابتسامتك إذا كنت تلقيت اللقاح
              أما إذا لم تفعل فنرجوك الاحتفاظ بكمامتك.» أذهلتني هذه التفرقة
              الفورية التي ما من دليل يثبتها. إذ لا يوجد تطبيق يحدد تلقيك
              اللقاح، ولا أحد أصلًا سيسألك. على أية حال، كنت أتنقل من مكان لآخر
              سعيدة بلحظات بلا كمامة، وكأنني عبرت إلى بعدٍ موازٍ لا تحكمه
              الجائحة. مغلق للأبد بفعل الجائحة عندما أصل لمدن أحبها أزور خارطتي
              الخاصة التي رسمتها بالأماكن المفضلة حتى أستعيد معها ذكريات دهشتي
              الأولى. لكن هذه المرة في نيويورك اصطدمت كثيرًا بعلامة الإغلاق
              الحمراء، والتي تارة كانت مؤقتة وأخرى نهائية. أقف أمام الواجهات
              بحضورها الشبحي، ألواحٌ خشبية تقفل الزجاج ولوحة أزيلت منذ شهور. هنا
              كان مقهى مفضل، وهناك مكتبة مستقلة، وعلى رأس الشارع مطعم يغير
              قائمته مع تغير الفصول. كلها غادرت المدينة بلا رجعة. مكانٌ واحد
              تبقَّى من خارطتي. مطعم بثيمة فرنسية ألقت الجائحة بظلالها عليه
              وأقفل لعدة شهور قبل أن يتبرع مرتادوه الأوفياء بميزانية إدارته ودفع
              رواتب موظفيه. عاد من جديد على ناصية الشارع بمظلاته الحمراء وكأن
              شيئًا لم يكن. مما دفعني للتفكير بكل المشاريع التي تضررت خلال
              العامين الماضيين ولم تجد من يمدّ العون لها. فأكثر من مائتي ألف
              منشأة في الولايات المتحدة أغلقت أبوابها للأبد متأثرة بالجائحة.
              والمصير ذاته لقيه 26% من المشاريع حول العالم. كم أرعبني هذا
              التسارع في استبدال الأماكن المحببة بأخرى أجهلها! وما يرعبني أكثر
              أن المدة الفاصلة بين آخر زيارة لي ووقوفي أمام الواجهة الجديدة لم
              يتجاوز العامين.
            </p>
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
