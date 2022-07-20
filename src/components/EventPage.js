/* eslint-disable no-unused-vars */
import { useSearchParams, Link } from 'react-router-dom';
import { useState, useEffect, useContext, useRef } from 'react';
import { Events } from './MainPage';
import { Context } from '../context/useContext';
import Header from './Header';
import Footer from './Footer';

export default function EventPage() {
  const ref1 = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchId = searchParams.get('id');

  const [afisha, setAfisha] = useState(Events());
  const [counter, setCounter] = useState();

  const { context, setContext } = useContext(Context);
  console.log(context, 'email');

  useEffect(() => {
    setAfisha(Events().filter((obj) => obj.id === +searchId));
    setCounter(ref1.current.value);
  }, []);

  console.log(counter, 'counter');
  return (
    <div>
      {console.log('render')}
      <Header />
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Place</th>
            <th>Total price</th>
          </tr>
          {afisha.map((e) => (
            <tr key={e.id}>
              <td>{e.title}</td>
              
              <td>{e.type}</td>
              <td>
                {new Intl.DateTimeFormat('ru-RU', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }).format(e.timestamp)}
              </td>
              <td>
                {new Intl.DateTimeFormat('ru-RU', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                }).format(e.timestamp)}
              </td>
              <td>{e.place}</td>
              <td>{e.price * Number(counter)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form action="/TicketPage">
        Name
        <input name="login" type="text" defaultValue={context[0].email} />
        Count
        <input
          name="ticketsCount"
          type="number"
          defaultValue="1"
          ref={ref1}
          onChange={(e) => setCounter(e.target.value)}
        />
        <input type="submit" value="Оформить" />
        <input name="title" defaultValue={afisha[0].title} className="hidden" />
        <input
          name="timestamp"
          defaultValue={afisha[0].timestamp}
          className="hidden"
        />
        <input name="place" defaultValue={afisha[0].place} className="hidden" />
      </form>
      <Footer />
    </div>
  );
}
