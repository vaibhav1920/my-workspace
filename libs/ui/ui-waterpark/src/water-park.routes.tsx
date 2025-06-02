import { Route } from 'react-router-dom';
import { waterParkRoutesProps } from './lib/Client-List/client-list.routes';
import { foodRoutesProps } from './lib/food/waterpark-food.routes';
import { slideRoutesProps } from './lib/slide/waterpark-slide.routes';

export const getWaterParkRoutes = () => {
    const routerProps = [...waterParkRoutesProps(), ...foodRoutesProps(), ...slideRoutesProps()];
    return routerProps.map((props,index) => 
        <Route
            {...props}
            key={index}
        ></Route>
    );
};