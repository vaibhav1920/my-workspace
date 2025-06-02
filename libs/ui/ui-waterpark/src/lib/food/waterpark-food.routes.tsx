import React from 'react';
import { LayoutRouteProps,PathRouteProps,IndexRouteProps } from 'react-router-dom';

const Food = React.lazy(() => import('./waterpark-food'));

export const foodRoutesProps = () => {
    const props : (PathRouteProps | LayoutRouteProps | IndexRouteProps)[] = [
        { path : '/food', element: <Food />},
    ];
    return props;
};