import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import '../../../index.css';

export function GelyaMap() {
    return (
        <section>
            <div className="container">
                <YMaps>
                    <Map style={{ width: '100%', height: '350px', margin: '50px 0' }} defaultState={{ center: [ 54.857849, 83.112364], zoom: 15 }} >
                        <Placemark geometry={[ 54.857849, 83.112364]} />
                    </Map>
                </YMaps>
            </div>
        </section>
    )}