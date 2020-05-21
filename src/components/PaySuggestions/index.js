import React from 'react';

import { Container, Option, Img, Label, Description } from './styles';

import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img3 from '../../images/03.png'
import img4 from '../../images/04.png'
import img5 from '../../images/05.png'
import img6 from '../../images/06.png'
import img7 from '../../images/07.png'

const items = [
    {
        key: String(Math.random()),
        img: img1,
        label: 'Recarga',
        description: 'Recarregue seu celular.',
    },
    {
        key: String(Math.random()),
        img: img2,
        label: 'Uber',
        description: 'Peça uma corrida.',
    },
    {
        key: String(Math.random()),
        img: img3,
        label: 'Ônibus',
        description: 'Recarregue seu cartão.',
    },
    {
        key: String(Math.random()),
        img: img4,
        label: 'TV',
        description: 'Pague suas assinaturas de TV.',
    },
    {
        key: String(Math.random()),
        img: img5,
        label: 'Doações',
        description: 'Faça uma doação.',
    },
    {
        key: String(Math.random()),
        img: img6,
        label: 'Barras',
        description: 'Pague via código de barras.',
    },
    {
        key: String(Math.random()),
        img: img7,
        label: 'Cobrar',
        description: 'Envie um boleto.',
    },
];

export default function PaySuggestions() {
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.img} /> 
                    <Label>{item.label}</Label>
                    <Description>{item.description}</Description>               
                </Option>
            ))}
        </Container>
    );
}