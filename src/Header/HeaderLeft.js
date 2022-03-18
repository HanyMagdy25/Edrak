import React from 'react';
import "./Header.css";

import Card from '../Cards/Card';
import Authors from '../Cards/Authors';

const HeaderLeft = ({data,edrakAuthors}) => {
    console.log(data)
  return (
    <>
        <div className='header-left-container'>
                    <h2>الجديد فى الموقع</h2>
                    <hr/>
                    <div className='cards'>
                        {data.slice(0,3).map((item,index)=>(
                            <Card item={item} key={index} />
                        ))}
                        
                    </div>

                    <h2 style={{marginTop:"20px"}}>كتاب إدراك</h2>
                    <hr/>
                    <div className='edrak-authors'>
                        {edrakAuthors.map((author,index)=>(
                            <Authors author={author} key={index} />
                        ))}

                        
                    </div>
                    
        </div>
    </>
  )
}

export default HeaderLeft