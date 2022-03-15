import React from 'react';
import "./Header.css";
import headerImg from "../assets/header.png"
import Card from '../Cards/Card';
import Authors from '../Cards/Authors';
import BigCard from '../Cards/BigCard';
import CardPodcast from '../Cards/CardPodcast';
import MediumCard from '../Cards/MediumCard';
import {images} from "../constants"


const cards = [
    {
      title: "إنزال التعليم العالي أرضًا",
      description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
      authorName: "أمجد عبدالرازق",
      history:"20-3-2022",
      share:"11",
      imgUrl: images.card1b,
    },
    {
      title: "إنزال التعليم العالي أرضًا",
      description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
      authorName: "أمجد عبدالرازق",
      history:"9-3-2021",
      share:"20",
      imgUrl: images.card2b,
    },
    {
      title: "إنزال التعليم العالي أرضًا",
      description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
      authorName: "هانى مجدىٍ",
      history:"22-1-2022",
      share:"10",
      imgUrl: images.card3b,
    },
    {
      title: "إنزال التعليم العالي أرضًا",
      description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
      authorName: "أمجد منير",
      history:"25-3-2022",
      share:"15",
      imgUrl: images.card1b,
    },
  ];

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
  ];

  const threeCards = [
    {
      id:"1",
      title: "مراجعة كتاب : فجر كل شئ",
      description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
      authorName: "أمجد عبدالرازق",
      history:"20-3-2020",
      share:"51",
      imgUrl: images.card1b,
      button:"مراجعات",
    },
    {
        id:"2",
        title: "إنزال التعليم العالي أرضًا",
        description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
        authorName: "هانى مجدى",
        history:"20-3-2021",
        share:"11",
        imgUrl: images.card2b,
        button:"فكر",
    },
    {
        id:"3",
        title: "إنزال التعليم العالي أرضًا",
        description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
        authorName: "أمجد أحمد",
        history:"20-3-2022",
        share:"16",
        imgUrl: images.card3b,
        button:"هوية",
    },
]


const Header = () => {
  return (
    <div className='header'>
        <div className='header-container'>
            <div className='header-right'> 
                <div className='img-container'>
                    <img src={images.header} className="img-header" alt="headerImage" />
                </div>
                <div className='header-right-content'>
                    <div className='global-simi-btn'>مراجعات</div>
                    <h2 className='header-headline' >مراجعة كتاب : فجر كل شئ</h2>
                    <p className='header-paragragh'>لأساطيرِ البدايةِ في العالم أجمع أثرٌ نفسِي جذري –بغض النظرِ عن مصداقيتها العلمية–؛ إذ لها القوة الماكرةِ على تبرير الوضع الراهن وبالتوازي تحصرُ وعيَ المرء بما يمكن أن يصير إليه شكلُ العالم المستقبل. وكذا حالُ المجتمع الرأسمالي الحديث الذي أسس نفسه على روايتين مختلفتين لأسطورة مماثلة.</p>
                    <div className='about-author'>
                        <h5>أمجد عبد الرازق</h5>
                        <div className='share-icon'><i className="fa-solid fa-share-nodes"></i> 15</div>
                        <div className='cal'><i className="fa-solid fa-calendar-days"></i> 22-2-2022</div>
                    </div>
                </div>
            </div>

            <div className='header-left'>
            <div className='header-left-container'>
                    <h2>الجديد فى الموقع</h2>
                    <hr/>
                    <div className='cards'>
                    {threeCards.map((item,index)=>(
                            <Card item={item} key={index} />
                        ))}
                    </div>

                    <h2>كتاب إدراك</h2>
                    <hr/>
                    <div className='edrak-authors'>
                        {edrakAuthors.map((author,index)=>(
                            <Authors author={author} key={index} />
                        ))}
                        
                    </div>
                    
                </div>
            </div>
        </div>
            {/* الاكثر مشاهدة */}
        <div className='most-popular'>
            <div className='most-popular-container'>
                <h1>الأكثر مشاهدة</h1>
                <hr/>
                <div className='most-popular-cards'>
                    {cards.map((card, index) => (
                        <BigCard key={index} data={card} />
                    ))}
                </div>
            </div>
        </div>
            {/* البودكاست */}
        <div className='podcast'>
        <div className='podcast-container'>
                <h1>البودكاست</h1>
                <hr/>
                <div className='podcast-cards'>
                    <CardPodcast headerImg={headerImg}/>
                    <CardPodcast headerImg={headerImg}/>
                    <CardPodcast headerImg={headerImg}/>
                </div>
            </div>
        </div>
            {/* تلفزيون إدراك */}
        <div className='edrak-tv'>
            <div className='edrak-tv-container'>
                <h1>تلفزيون إدراك</h1>
                <hr/>
                <div className='edrak-tv-container-inner'>
                    <div className='edrak-tv-right'>
                        <div className='img-container'>
                            <img src={images.header3} className="img-header" alt="headerImage" />
                        </div>
                        <div className='header-right-content'>
                            <div className='global-simi-btn-purple'>فكر</div>
                            <h2 className='header-headline' >مراجعة كتاب : فجر كل شئ</h2>
                            <p className='header-paragragh'>لأساطيرِ البدايةِ في العالم أجمع أثرٌ نفسِي جذري –بغض النظرِ عن مصداقيتها العلمية–؛ إذ لها القوة الماكرةِ على تبرير الوضع الراهن وبالتوازي تحصرُ وعيَ المرء بما يمكن أن يصير إليه شكلُ العالم المستقبل. وكذا حالُ المجتمع الرأسمالي الحديث الذي أسس نفسه على روايتين مختلفتين لأسطورة مماثلة.</p>
                            <div className='about-author'>
                                <h5>أمجد عبد الرازق</h5>
                                <div className='share-icon'><i className="fa-solid fa-share-nodes"></i> 15</div>
                                <div className='cal'><i class="fa-solid fa-calendar-days"></i> 22-2-2022</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='edrak-tv-left'>
                        <div className='edrak-tv-left-container'>
                            <MediumCard headerImg={images.header3}/>
                            <MediumCard headerImg={images.header3}/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>

    </div>
  )
}

export default Header