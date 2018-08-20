import React from 'react';
import ACELERADORES from './mightyFood/mightyFoodAceleradores'

const Aceleradores = () => {

    return (
        <div>
            {
                ACELERADORES.CARNES_E_PEIXES.items.map((item, index) => (
                    <p key={index} >
                        {item.name}
                    </p>
                ))
            }
        </div>
    )


}

export default Aceleradores