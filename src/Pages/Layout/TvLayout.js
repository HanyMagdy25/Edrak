import React from 'react';
import MediumCard from "../../Cards/MediumCard"
import "./TvLayout.css"

const TvLayout = ({title,items}) => {
  console.log("tests  : ",items)
  return (
    <>
        <div className="edrak-tv">
        <div className="edrak-tv-layout-container">
          <h1>{title}</h1>
          <hr />
          {/* <h2 style={{margin :"20px 0px 30px" , textAlign : "center"}}> يأتي قريباً</h2>
          <div className=""><Spinner/></div> */}
          <div className="edrak-tv-container-inner">
            <div className="edrak-tv-right">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/dia1kfg4m/image/upload/v1649687417/%D8%A3%D9%85%D8%A7%D8%B1%D8%AA%D9%8A%D8%A7-%D8%B3%D9%86-%D8%AD%D8%B1%D9%8A%D8%A9_%D8%A7%D9%84%D8%AA%D9%81%D9%83%D9%8A%D8%B1-%D9%85%D8%B7%D9%88%D9%84_vhyx89.png"
                  className="img-header"
                  alt="headerImage"
                />
              </div>
              <div className="tv-content">
                {/* <div className="global-simi-btn-purple">فكر</div> */}
                <h2 className="header-headline">مراجعة كتاب : فجر كل شئ</h2>
                <p className="header-paragragh">
                  لأساطيرِ البدايةِ في العالم أجمع أثرٌ نفسِي جذري –بغض النظرِ
                  عن مصداقيتها العلمية–؛ إذ لها القوة الماكرةِ على تبرير الوضع
                  الراهن وبالتوازي تحصرُ وعيَ المرء بما يمكن أن يصير إليه شكلُ
                  العالم المستقبل. وكذا حالُ المجتمع الرأسمالي الحديث الذي أسس
                  نفسه على روايتين مختلفتين لأسطورة مماثلة.
                </p>
                <div className="about-author">
                  <h5>أمجد عبد الرازق</h5>
                  <div className="share-icon">
                    <i className="fa-solid fa-share-nodes"></i> 15
                  </div>
                  <div className="cal">
                    <i className="fa-solid fa-calendar-days"></i> 22-2-2022
                  </div>
                </div>
              </div>
            </div>

            <div className="edrak-tv-left">
              <div className="edrak-tv-left-container">
                {/* <MediumCard item={item} /> */}
                {/* <MediumCard item={item} /> */}
                {items.slice(0,2).map((item,index)=>(
                  <MediumCard item={item} type="zero" key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TvLayout