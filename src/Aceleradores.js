import React from 'react';
import { ListItem, ListItemText, Checkbox, Paper } from '@material-ui/core';

import ACELERADORES from './mightyFood/mightyFoodAceleradores'

const Aceleradores = () => {

    return (
        <div>

            <div>{ACELERADORES.CARNES_E_PEIXES.category}</div>

            {
                ACELERADORES.CARNES_E_PEIXES.items.map((item, index) => (
                    <Paper className="food-acelerator">
                        <ListItem>
                            <ListItemText
                                key={index}
                                primary={item.name}>
                            </ListItemText>
                        </ListItem>
                    </Paper>
                ))
            }
        </div>
    )


}

export default Aceleradores