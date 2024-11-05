import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import '../../index.css'

export function MyMap() {
  return (
    <section>
      <div className="container">
      <YMaps>
        <Map style={{width: '100%', height: '350px', margin: '50px 0'}} defaultState={{ center: [54.722254, 83.024976], zoom: 18 }} >
          <Placemark geometry={[54.722254, 83.024976]}/>
        </Map>
      </YMaps>
      </div>
    </section>


  )
}