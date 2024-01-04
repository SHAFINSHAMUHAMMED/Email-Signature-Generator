import React from 'react';

export default function temp3({ data }) {
  return (
    <table style={{
        width: '500px',
        height:'200px',
        background: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderCollapse: 'collapse',
        margin: 'auto', 
        fontFamily: 'Arial, sans-serif',
      }}>
        <tbody >
          <tr>
            <td rowSpan="6" style={{ width: '150px', textAlign: 'center' }}>
            <img 
                src={data.profileImage} 
                alt="Profile" 
                width="120"
                height="120"
                style={{
                  borderRadius: '60px',
                  objectFit: 'cover',
                  border: '0',
                  display: 'block'
                }}
              />
            </td>
            <td style={{ padding: '0px', fontSize: '18px', fontWeight: '500' }}>Name: <strong>{data.name}</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '0px', fontSize: '18px', fontWeight: '500' }}>Designation: <strong>{data.designation}</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '0px', fontSize: '18px', fontWeight: '500' }}>Phone: <strong>{data.phone}</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '0px', fontSize: '18px', fontWeight: '500' }}>Email: <strong>{data.mail}</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '0px', fontSize: '18px', fontWeight: '500' }}>Website: <strong>{data.website}</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '10px', paddingTop:'0' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                <a href={data.facebook} target="_blank" rel="noopener noreferrer">
                  <img src='https://cdn-icons-png.flaticon.com/128/20/20837.png' alt="Facebook" style={{ width: '20px', height: '20px' }} />
                </a>
                <a href={data.twitter} target="_blank" rel="noopener noreferrer">
                  <img src='https://cdn-icons-png.flaticon.com/128/733/733635.png' alt="Twitter" style={{ width: '20px', height: '20px' }} />
                </a>
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src='https://cdn-icons-png.flaticon.com/128/3128/3128219.png' alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  );
}
