/* eslint-disable no-unused-vars */
import { useSearchParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from './Header';
import Footer from './Footer';

export default function TicketPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const login = searchParams.get('login');
  const ticketsCount = searchParams.get('ticketsCount');
  const title = searchParams.get('title');
  const timestamp = searchParams.get('timestamp');
  const place = searchParams.get('place');

  const downloadQRCode = () => {
    const s = new XMLSerializer().serializeToString(
      document.getElementById('qr-gen'),
    );
    const encodedData = window.btoa(s);
    const downloadLink = document.createElement('a');
    downloadLink.href = encodedData;
    downloadLink.download = `${window.location.href}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const ref1 = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => ref1.current,
  });

  return (
    <div>
      <Header />
      <div ref={ref1}>
        <h2>
          title:
          {' '}
          {title}
        </h2>

        <p>
          place:
          {' '}
          {place}
        </p>
        <p>
          date:
          {' '}
          {new Intl.DateTimeFormat('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(timestamp)}
        </p>
        <p>
          time:
          {' '}
          {new Intl.DateTimeFormat('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }).format(timestamp)}
        </p>
        <p>
          ticketsCount:
          {' '}
          {ticketsCount}
        </p>
        <p>
          name:
          {' '}
          {login}
        </p>
        <QRCode id="qr-gen" value={window.location.href} size={290} level="H" />
      </div>
      <button type="button" onClick={downloadQRCode}>
        Download QR Code
      </button>
      <button type="button" onClick={handlePrint}>
        Print this out!
      </button>
      <Footer />
    </div>
  );
}
