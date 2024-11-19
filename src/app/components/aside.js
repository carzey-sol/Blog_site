'use client'
import React from 'react'
import { useState } from 'react';
import { BiCategoryAlt } from "react-icons/bi";
import { FaTags } from "react-icons/fa";

const aside = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toogleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const [isTagVisible, setIsTagVisible] = useState(false);
    const tagVisibility = () => {
        setIsTagVisible(!isTagVisible);
    }

    return (
        <div>
            <div className='flex justify-between md:block ml-8 mr-8 md:mr-0'>
                <div>
                <span className='flex text-xl font-bold items-center gap-2' onClick={toogleVisibility}><BiCategoryAlt />Categories</span>
                <div className={`${isVisible ? 'block' : 'hidden'}`}>
                    <p>Category 1</p>
                    <p>Category 2</p>
                    <p>Category 3</p>
                    </div>
                </div>
                

                <div>
                    <span className='flex text-xl font-bold items-center gap-2' onClick={tagVisibility}><FaTags />Tags</span>
                    <div className={` ${isTagVisible ? 'block' : 'hidden'}`}>
                        <p>Category 1</p>
                        <p>Category 2</p>
                        <p>Category 3</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default aside