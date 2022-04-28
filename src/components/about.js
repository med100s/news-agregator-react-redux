import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


export default function About() {
    return <div>This is About
        <YMaps>
            <Map
                width='100%'
                height='500px'
                toggleNightMode={true}
                defaultState={{
                    center: [55.74872364854638,37.537871636932366],
                    zoom: 14,
                }}
            >
                <Placemark geometry={[55.74872364854638,37.537871636932366]} />
            </Map>
        </YMaps>
    </div>
}