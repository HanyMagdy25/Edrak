import React from 'react';
import "./Header.css";
import headerImg from "../assets/header.png"
import Card from '../Cards/Card';
import Authors from '../Cards/Authors';
import ammarImg from "../assets/ammar.png"
import BigCard from '../Cards/BigCard';
import CardPodcast from '../Cards/CardPodcast';
import MediumCard from '../Cards/MediumCard';
// import RepeatHead from './RepeatHead/RepeatHead';


const Header = () => {
  return (
    <div className='header'>
        <div className='header-container'>
            <div className='header-right'> 
                <div className='img-container'>
                    <img src={headerImg} className="img-header" alt="headerImage" />
                </div>
                <div className='header-right-content'>
                    <div className='global-simi-btn'>مراجعات</div>
                    <h2 className='header-headline' >مراجعة كتاب : فجر كل شئ</h2>
                    <p className='header-paragragh'>لأساطيرِ البدايةِ في العالم أجمع أثرٌ نفسِي جذري –بغض النظرِ عن مصداقيتها العلمية–؛ إذ لها القوة الماكرةِ على تبرير الوضع الراهن وبالتوازي تحصرُ وعيَ المرء بما يمكن أن يصير إليه شكلُ العالم المستقبل. وكذا حالُ المجتمع الرأسمالي الحديث الذي أسس نفسه على روايتين مختلفتين لأسطورة مماثلة.</p>
                    <div className='about-author'>
                        <h5>أمجد عبد الرازق</h5>
                        <div className='share-icon'><i className="fa-solid fa-share-nodes"></i> 15</div>
                        <div className='cal'><i class="fa-solid fa-calendar-days"></i> 22-2-2022</div>
                    </div>
                </div>
            </div>

            <div className='header-left'>
                <div className='header-left-container'>
                    <h2>الجديد فى الموقع</h2>
                    <hr/>
                    <div className='cards'>
                        <Card headerImg={headerImg} paragraph="كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟"/>
                        <Card headerImg={headerImg} paragraph="كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟"/>
                        <Card headerImg={headerImg} paragraph="كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟"/>
                    </div>

                    <h2>كتاب إدراك</h2>
                    <hr/>
                    <div className='edrak-authors'>
                        <div className='edrak-authors-top'>
                            <Authors ammarImg={ammarImg} authorName="مهند الهويدي"/>
                            <Authors ammarImg={ammarImg} authorName="عمار رزق" />
                        </div>
                        <div className='edrak-authors-bottom'>
                             <Authors ammarImg={ammarImg} authorName="أمجد عبد الرازق"/>
                             <Authors ammarImg={ammarImg} authorName="مؤمن أشرف"/> 
                        </div>
                        
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
                    <BigCard headerImg={headerImg}/>
                    <BigCard headerImg={headerImg}/>
                    <BigCard headerImg={headerImg}/>
                    <BigCard headerImg={headerImg}/>
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
                            <img src={headerImg} className="img-header" alt="headerImage" />
                        </div>
                        <div className='header-right-content'>
                            <div className='global-simi-btn'>مراجعات</div>
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
                            <MediumCard headerImg={headerImg}/>
                            <MediumCard headerImg={headerImg}/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>

    </div>
  )
}

export default Header