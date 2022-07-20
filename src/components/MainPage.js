/* eslint-disable no-unused-vars */
/* eslint-disable no-octal-escape */
/* eslint-disable no-useless-escape */
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import 'react-datepicker/dist/react-datepicker.css';

export function Events() {
  return [
    {
      id: 1,
      title: 'Вечные',
      type: 'кино',
      timestamp: 1657989745000,
      place: 'Екатеринбург',
      img: 'https://donatello-skyticket.s3.eu-north-1.amazonaws.com/1636821484633-Q8ys7EFNwOIkiJIh-fgzw.jpeg',
      price: 1000,
    },
    {
      id: 2,
      title: 'Веном 2',
      type: 'кино',
      timestamp: 1655397745000,
      place: 'Екатеринбург',
      img: 'https://donatello-skyticket.s3.eu-north-1.amazonaws.com/1636823606064-YXNGvUfL6GYZYwyyEW0N5.jpeg',
      price: 500,
    },
    {
      id: 3,
      title: 'Загадочный уикенд',
      type: 'театр',
      timestamp: 1652719345000,
      place: 'Оренбург',
      img: 'https://img07.rl0.ru/afisha/e1808x1016p0x91f960x549q65i/s1.afisha.ru/mediastorage/44/d2/2d179b5fd9c64d51927f14a2d244.jpg',
      price: 1200,
    },
    {
      id: 4,
      title: 'Вишневый сад',
      type: 'театр',
      timestamp: 1650127345000,
      place: 'Оренбург',
      img: 'https://img.rl0.ru/afisha/e280x158p0x0f1008x576q85i/s2.afisha.ru/mediastorage/09/9e/b3ae5f79890a4856b5974a2a9e09.jpg',
      price: 1500,
    },
    {
      id: 5,
      title: 'Анастасия Лютова и «Лютый бэнд»',
      type: 'концерт',
      timestamp: 1647448945000,
      place: 'Оренбург',
      img: 'https://img07.rl0.ru/afisha/e280x158p0x0f2091x1195q85i/s3.afisha.ru/mediastorage/1e/57/9d22707359994a3c882a0edc571e.jpg',
      price: 500,
    },
    {
      id: 6,
      title: '«Tribute to Eric Clapton»',
      type: 'концерт',
      timestamp: 1645029745000,
      place: 'Оренбург',
      img: 'https://img.rl0.ru/afisha/e280x158p187x0f747x427q85i/s4.afisha.ru/mediastorage/c9/94/a00f77bcc04d4ff49cff721a94c9.jpg',
      price: 500,
    },
    {
      id: 7,
      title: '«Birthday Jazz»: Сергей Жилин и «Фонограф»',
      type: 'концерт',
      timestamp: 1642351345000,
      place: 'Оренбург',
      img: 'https://img02.rl0.ru/afisha/e280x158p0x0f551x315q85i/s1.afisha.ru/mediastorage/fa/74/cbcdf85f98ba46e38104b42174fa.jpg',
      price: 1500,
    },
    {
      id: 8,
      title: 'Титан',
      type: 'кино',
      timestamp: 1610815345000,
      place: 'Оренбург',
      img: 'https://img02.rl0.ru/afisha/e280x158p564x76f3150x1800q85i/s5.afisha.ru/mediastorage/b5/9b/433c5f8070f542d4871635699bb5.jpeg',
      price: 500,
    },
    {
      id: 9,
      title: 'Это всего лишь конец света',
      type: 'кино',
      timestamp: 1613493745000,
      place: 'Оренбург',
      img: 'https://img05.rl0.ru/afisha/e280x158p0x0f1890x1080q85i/s4.afisha.ru/mediastorage/01/f1/b66d1c501b994864a89a16f9f101.jpg',
      price: 500,
    },
    {
      id: 10,
      title: 'И снова с наступающим',
      type: 'театр',
      timestamp: 1615912945000,
      place: 'Итальианно',
      img: 'https://img.rl0.ru/afisha/e280x158p0x0f1300x743q85i/s2.afisha.ru/ms/zNYPaFE97sGjJzXneq9MkpI5TPif_gW2o6G3s91Hkn8.jpg',
      price: 1300,
    },
  ];
}

export default function MainPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [afisha, setAfisha] = useState(Events());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [search, setSearchTitle] = useState();
  const [page, setPage] = useState(1);

  const options = [
    { value: 'кино', label: 'кино' },
    { value: 'тетр', label: 'театр' },
    { value: 'концерт', label: 'концерт' },
  ];

  const handleChangeDateFilter = (startOrEndDateFilter, date) => {
    startOrEndDateFilter(date);
  };

  const handleChangeSearch = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleChangePage = (e) => {
    const maxPages = afisha.length / 3;
    if (e.target.value === 'nextPage' && page < maxPages) setPage(page + 1);
    else if (e.target.value === 'prevPage' && page > 1) setPage(page - 1);
  };

  useEffect(() => {
    if (startDate && endDate && !selectedOption) {
      setAfisha(
        Events().filter(
          (obj) => obj.timestamp > Date.parse(startDate)
            && obj.timestamp < Date.parse(endDate),
        ),
      );
    }

    if (startDate && !endDate && !selectedOption) {
      setAfisha(
        Events().filter((obj) => obj.timestamp > Date.parse(startDate)),
      );
    }

    if (!startDate && endDate && !selectedOption) {
      setAfisha(Events().filter((obj) => obj.timestamp < Date.parse(endDate)));
    }

    if (!startDate && !endDate && selectedOption) {
      setAfisha(Events().filter((obj) => obj.type === selectedOption.value));
    }

    if (startDate && endDate && selectedOption) {
      setAfisha(
        Events().filter(
          (obj) => obj.timestamp > Date.parse(startDate)
            && obj.timestamp < Date.parse(endDate)
            && obj.type === selectedOption.value,
        ),
      );
    }

    if (startDate && !endDate && selectedOption) {
      setAfisha(
        Events().filter(
          (obj) => obj.timestamp > Date.parse(startDate)
            && obj.type === selectedOption.value,
        ),
      );
    }

    if (!startDate && endDate && selectedOption) {
      setAfisha(
        Events().filter(
          (obj) => obj.timestamp < Date.parse(endDate)
            && obj.type === selectedOption.value,
        ),
      );
    }

    if (search) {
      setAfisha(Events().filter((obj) => obj.title.match(search)));
    }

    if (search === '') setAfisha(Events());
  }, [startDate, endDate, selectedOption, search]);

  return (
    <div className='div'>
      <Header />
      {console.log('render')}
      от <DatePicker
        selected={startDate}
        onChange={(date) => handleChangeDateFilter(setStartDate, date)}
      />
      до <DatePicker
        selected={endDate}
        onChange={(date) => handleChangeDateFilter(setEndDate, date)}
      />
      <Select
        className='box'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <input className='box' onChange={(e) => handleChangeSearch(e)} placeholder="поиск" />
      
        <div>
          {afisha.map((e, i) => {
            if (i < page * 3 && i > page * 3 - 4) {
              return (
                <div className="order-detail" key={e.id} >
                  <div>{e.type}</div>
                  <img
                      alt="poster"
                      src={e.img}
                      width="100px"
                      height="100px"
                    />
                    <div>
                  <Link to={`/EventPage?id=${e.id}`}>{e.title}</Link>
                  </div>  
                  <p>
                     {new Intl.DateTimeFormat('ru-RU', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    }).format(e.timestamp)}
                  </p>
                  <p>
                    {new Intl.DateTimeFormat('ru-RU', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    }).format(e.timestamp)}
                  </p>
                  <p>{e.place}</p>
                </div>
              );
            }
            return false;
          })}
        </div>
      <div>
        <button
        className='btn'
          type="button"
          value="prevPage"
          onClick={(e) => handleChangePage(e)}
        >
          {' '}
          Back
          {' '}
        </button>
        <button
        className='btn'
          type="button"
          value="nextPage"
          onClick={(e) => handleChangePage(e)}
        >
          {' '}
          Next
          {' '}
        </button>
      </div> 
      <Footer />
    </div>
  );
}
