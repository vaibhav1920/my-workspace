import React from 'react';
import { LayoutRouteProps,PathRouteProps,IndexRouteProps } from 'react-router-dom';

const Slide = React.lazy(() => import('./waterpark-slide'));

export const slideRoutesProps = () => {
    const props : (PathRouteProps | LayoutRouteProps | IndexRouteProps)[] = [
        { path : '/slide', element: <Slide />},
    ];
    return props;
};