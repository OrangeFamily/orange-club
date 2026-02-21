import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

import { useState } from 'react';

import { Modal } from './Modal/Modal';
import s from './App.module.scss';

import { List } from './comp/List/List';

// import FrutMass from './comp/Kitchen/Data/DataFrut';
// import BurgerMass from './comp/Kitchen/Data/DataBurg';
import AssortiMass from './comp/Kitchen/Data/DataAssorti';
import SaladsMass from './comp/Kitchen/Data/DataSalads';
import HotMass from './comp/Kitchen/Data/DataHot';

import AperetivMass from './comp/Bar/Data/DataAperetiv';
// import NarCoctMass from './comp/Bar/Data/DataNarCoct';
import RomMass from './comp/Bar/Data/DataRom';
import TekilaMass from './comp/Bar/Data/DataTekila';
import WiskeyMass from './comp/Bar/Data/DataWiskey';
import CognakMass from './comp/Bar/Data/DataCognak';
import LiqurMass from './comp/Bar/Data/DataLiqur';
import ShotMass from './comp/Bar/Data/DataShot';
import VodkaMass from './comp/Bar/Data/DataVodka';
import GinMass from './comp/Bar/Data/DataGin';
import ShampanMass from './comp/Bar/Data/DataShampan';
import VineMass from './comp/Bar/Data/DataVine';
import VermutMass from './comp/Bar/Data/DataVermut';
import BearMass from './comp/Bar/Data/DataBear';
// import CoffeMass from './comp/Bar/Data/DataCoffe';
// import TeaMass from './comp/Bar/Data/DataTea';
// import CoctValent from './comp/Cocotail/Data/CoctValent';
import DrinkMass from './comp/Bar/Data/DataDrink';
import EnergyMass from './comp/Bar/Data/DataEnergy';
import AddMass from './comp/Bar/Data/DataAdd';
import FirstMass from './comp/Kitchen/Data/DataFirst';
import MainMass from './comp/Kitchen/Data/DataMain';
import PetelnaMass from './comp/Kitchen/Data/DataPetelna';
import PastaMass from './comp/Kitchen/Data/DataPasta';
import SousMass from './comp/Kitchen/Data/DataSous';
import GarnishMass from './comp/Kitchen/Data/DataGarnish';
import ToBearMass from './comp/Kitchen/Data/DataToBear';
// import PizzaMass from './comp/Kitchen/Data/DataPizza';
import AdditivesMass from './comp/Kitchen/Data/DataAdd';
import DesertsMass from './comp/Kitchen/Data/DataDeserts';
import { Coffe } from './comp/Bar/List/List';
import AuthMass from './comp/Cocotail/Data/DataAuth';
import BandaMass from './comp/Cocotail/Data/DataBanda';
import ClasicMass from './comp/Cocotail/Data/DataClasic';
// import ColdTeaMass from './comp/Cocotail/Data/DataColdTea';
// import JagerMass from './comp/Cocotail/Data/DataJager';
//import LemonadMass from './comp/Cocotail/Data/DataLemonad';
// import MixDrinkMass from './comp/Cocotail/Data/DataMixDrink';
import NonMass from './comp/Cocotail/Data/DataNon';
import PartyMixMass from './comp/Cocotail/Data/DataPartyMix';
import ShotDrinkMass from './comp/Cocotail/Data/DataShotDrink';
import CoronaMass from './comp/Cocotail/Data/DataCorona';
// import ValentineHearts from './ValentineHearts';
// import eger from './img/norm.jpg'
// import egerakc from './img/akc.jpg'


export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [objectModal, setObjectModal] = useState({});

  // const dataFrut = FrutMass;
  // const dataBurgers = BurgerMass;
  const dataAssorti = AssortiMass
  const dataSalads = SaladsMass;
  const dataHot = HotMass;
  const dataFirst = FirstMass;
  const dataMain = MainMass;
  
  const dataPasta = PastaMass;
  const dataPetelna = PetelnaMass;
  const dataSous = SousMass;
  const dataGarnish = GarnishMass;
  const dataToBear = ToBearMass;
  // const dataPizza = PizzaMass;
  const dataKitAdd = AdditivesMass;
  const dataDeserts = DesertsMass;
// const dataValent = CoctValent;
  // const dataNarCoct = NarCoctMass;
  const dataAperetiv = AperetivMass;
  const dataRom = RomMass;
  const dataTekila = TekilaMass;
  const dataWiskey = WiskeyMass;
  const dataCognak = CognakMass;
  const dataLiqur = LiqurMass;
  const dataShot = ShotMass;
  const dataVodka = VodkaMass;
  const dataGin = GinMass;
  const dataShampan = ShampanMass;
  const dataVine = VineMass;
  const dataVermut = VermutMass;
  const dataBear = BearMass;
  // const dataCoffe = CoffeMass;
  // const dataTea = TeaMass;
  const dataDrink = DrinkMass;
  const dataEnergy = EnergyMass;
  const dataAdd = AddMass;

  const dataAuth = AuthMass;
  const dataBanda = BandaMass;
  const dataClasic = ClasicMass;
  // const dataColdTea = ColdTeaMass;
  // const dataJager = JagerMass;
  const dataCorona = CoronaMass
  //const dataLemonad = LemonadMass;
  // const dataMixDrink = MixDrinkMass;
  const dataNon = NonMass;
  const dataPartyMzix = PartyMixMass;
  const dataShotDrink = ShotDrinkMass;

  const dataModal = (title, price, text, src, allergy) => {
    toggleModal();
    setObjectModal({ title, price, text, src, allergy });
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    <>
    {/* <ValentineHearts count={10} /> */}
      <div className={s.upper}>
        <header className={s.header}>
          <a
            href="https://misteram.com.ua/chernigov/orangebar"
            target="_blank"
            rel="noreferrer"
          >
            {/* <img src={require('./img/am.png')} alt="" className={s.iconAm} /> */}
            <button className={s.iconAm}>ДОСТАВКА</button>
          </a>
          <a href="tel:+380939179177" className={s.tel}>
            <p className={s.telSize}>+38 093 91 79 177</p>
          </a>
          <a
            href="https://instagram.com/orange.bar_club?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
            className={s.link}
          >
            <img src={require('./img/inst.png')} alt="" className={s.icon} />
          </a>
        </header>
        <section className={s.main}>
     
          <img
            src={require('./img/orangeLogo.png')}
            alt=""
            className={s.logo}
          />
          <Accordion allowMultiple>
            <AccordionItem>
              <h1>
                <AccordionButton className={s.title}>Кухня</AccordionButton>
              </h1>
              <AccordionPanel>
                <Accordion allowMultiple>
                  {/* <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Фруктова нарізка
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Coffe data={dataFrut} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem> */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        колекція асорті
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataAssorti} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Салати
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataSalads} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Перші страви
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataFirst} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Гарячі закуски
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataHot} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Основне
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataMain} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Пасти
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataPasta} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                        Пательні
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataPetelna} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                  {/* <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Бургери
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataBurgers} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem> */}
                  {/* <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        піца
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataPizza} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem> */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Гарнір
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataGarnish} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        До пива
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataToBear} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Добавки
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Coffe data={dataKitAdd} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Coуси
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Coffe data={dataSous} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton className={s.titleItem}>
                        Десерти
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <List data={dataDeserts} onModal={dataModal} />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <h3 className={s.orign}>*фото можуть не відповідати оригіналу</h3>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <>
                <h1>
                  <AccordionButton className={s.title}>Бар</AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                  {/* <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          пропозиція єгермайстер
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <img src={eger} alt="" className={s.imgeger}/>
                        <img src={egerakc} alt="" className={s.imgeger}/>
                      </AccordionPanel>
                    </AccordionItem> */}
                    {/* <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Народні коктейлі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataNarCoct} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem> */}
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Настоянки & Аперитиви
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataAperetiv} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Ром
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataRom} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Текіла №1 в світі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataTekila} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Віскі & Теннессі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataWiskey} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Коньяки & Бренді
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataCognak} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Лікери
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataLiqur} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Крижаний шот
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataShot} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Горілка
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataVodka} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Джин
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataGin} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Шампанське & Игристі вина
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataShampan} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Вина
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataVine} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Вермути
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataVermut} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Пиво
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataBear} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Напої
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataDrink} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    {/* <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Кава
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Coffe data={dataCoffe} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Чай
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataTea} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem> */}
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Енергетик
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataEnergy} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          Доповнення
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataAdd} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <h3 className={s.orign}>*фото можуть не відповідати оригіналу</h3>
                </AccordionPanel>
              </>
            </AccordionItem>

            <AccordionItem>
              <>
                <h1>
                  <AccordionButton className={s.title}>
                    Коктейлі
                  </AccordionButton>
                </h1>
                <AccordionPanel>
                  <Accordion allowMultiple>
                  {/* <AccordionItem>
                        <h2>
                          <AccordionButton className={s.titleItem}>
                            коктель вечора
                          </AccordionButton>
                        </h2>
                        <AccordionPanel>
                          <List data={dataValent} onModal={dataModal} />
                        </AccordionPanel>
                      </AccordionItem> */}
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          новинки від оранж бар банди
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataBanda} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                          <AccordionButton className={s.titleItem}>
                          Corona cocktails
                          </AccordionButton>
                        </h2>
                        <AccordionPanel>
                          <List data={dataCorona} onModal={dataModal} />
                        </AccordionPanel>
                      </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          авторські коктейлі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataAuth} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          безалкогольні коктейлі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataNon} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          класичні коктейлі
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataClasic} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          екстрим & шоти
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataShotDrink} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                   {/*  <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          jagermeister
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Coffe data={dataJager} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>*/}
                    
                   {/* <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          mix drinks
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Coffe data={dataMixDrink} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>*/}
                    <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          party mixes
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <List data={dataPartyMzix} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>
                    {/* <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          холодні чаї
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Coffe data={dataColdTea} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem> */}
                      {/* <AccordionItem>
                      <h2>
                        <AccordionButton className={s.titleItem}>
                          лимонади
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Coffe data={dataLemonad} onModal={dataModal} />
                      </AccordionPanel>
                    </AccordionItem>*/}
                  </Accordion>
                  <h3 className={s.orign}>*фото можуть не відповідати оригіналу</h3>
                </AccordionPanel>
              </>
            </AccordionItem>
            {showModal && (
              <Modal objectModal={objectModal} toggleModal={toggleModal} />
            )}
          </Accordion>
        </section>
      </div>
    </>
  );
};
