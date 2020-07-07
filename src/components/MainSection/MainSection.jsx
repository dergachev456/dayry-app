import React from 'react'
import './MainSection.scss'
import ItemsContainer from '../Items/ItemsContainer'
import CommentsContainer from '../Comments/CommentsContainer'
import MyColorPicker from '../MyColorPicker/MyColorPicker'
export default function MainSection() {
    return (
        <section className="main">
            <ItemsContainer />
            <CommentsContainer />
            <MyColorPicker />
        </section>
    )
}
