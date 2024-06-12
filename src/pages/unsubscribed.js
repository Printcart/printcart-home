import React from 'react';
import Image from 'next/image';
import mailError from 'common/assets/image/mailError.jpg';

const UnsubscribeForm = () => {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '300px auto',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'center'
      }}
    >
      <Image
        src={mailError}
        alt="Mail Error"
        style={{ maxWidth: '100%', marginBottom: '1rem' }}
      />
      <h2 style={{ marginBottom: '0.5rem' }}>Successful unsubscribe from Printcart</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>You won't receive mail from our system anymore.</p>
      <p>If this is a mistake, you can subscribe again by contacting us.</p>
    </div>
  );
};

export default UnsubscribeForm;
