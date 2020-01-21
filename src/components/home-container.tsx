import React from 'react';
import styled from '@emotion/styled';

import HeaderNavigation from './header-navigation'

const WorkoutLogContainer: React.FC = () => (<div></div>)

const HomeContainer: React.FC = () => {
    return (
        <div className="wrapper">
            <HeaderNavigation />
            <WorkoutLogContainer />
        </div>
    )
}

export default HomeContainer

