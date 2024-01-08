import React from 'react';

export default function temp2({ data }) {
  return (
    <table style={{ width: '100%', margin: 'auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f5f7' }}>
      <tr>
        <td style={{ width: '33%', textAlign: 'center', backgroundColor: '#0d6efd', borderRadius: '.5rem', padding: '20px' }}>
          <img
            src={data.profileImage}
            alt="Avatar"
            style={{ width: '120px', height: '120px', borderRadius: '50%' }}
          />
          <h5 style={{ color: 'white', marginTop: '20px', textTransform:'uppercase',fontWeight:'600' }}>{data.name}</h5>
          <p style={{ color: 'white', fontSize:'20px' }}>{data.designation}</p>
          {/* Icon here */}
        </td>
        <td style={{ width: '67%', padding: '20px' }}>
          <h6 style={{fontWeight:'600',}}> <span style={{backgroundColor:'rgba(0, 0, 0, 0.18)'}}>Information</span></h6>
          <hr style={{marginTop:'10px'}} />
          <table style={{ width: '100%', marginBottom:'16px' }}>
            <tr>
              <td style={{fontWeight:'600'}}>Email:</td>
              <td style={{ color: '#666', textAlign: 'left' }}>{data.mail}</td>
            </tr>
            <tr>
              <td style={{fontWeight:'600'}}>Phone:</td>
              <td style={{ color: '#666', textAlign: 'left' }}>{data.phone}</td>
            </tr>
            <tr>
              <td style={{fontWeight:'600'}}>Website:</td>
              <td style={{ color: '#666', textAlign: 'left' }}> <a className='text-decoration-none' href={data.website}>{data.website}</a></td>
            </tr>
          </table>
          <h6 style={{fontWeight:'600'}}> <span style={{backgroundColor:'rgba(0, 0, 0, 0.18)'}}>Social Links</span></h6>
          <hr style={{marginTop:'10px'}} />
          <div style={{ display: 'flex' }}>
            <a href={data.facebook} style={{ marginRight: '10px' }}>
              <img src='https://cdn-icons-png.flaticon.com/128/20/20837.png' alt="Facebook" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href={data.twitter} style={{ marginRight: '10px' }}>
              <img src='https://cdn-icons-png.flaticon.com/128/733/733635.png' alt="Twitter" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href={data.linkedin}>
              <img src='https://cdn-icons-png.flaticon.com/128/3128/3128219.png' alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
            </a>
          </div>
        </td>
      </tr>
    </table>
  );
}
