import React from 'react';

export default function temp1({ data }) {
    return (
        <table style={{ width: '500px', height:'180px',display:'flex', justifyContent:'center',alignItems:'center', fontSize: '12px', fontFamily: 'Arial, sans-serif', lineHeight: 'normal', background: '#e3e3e3b0',borderRadius:'20px', borderCollapse: 'collapse', }} cellPadding="0" cellSpacing="0">
      <tbody>
        <tr style={{display:'flex', alignItems:'center'}}>  
          <td style={{ width: '92px', verticalAlign: 'top', display:'flex', alignItems:'center' }}>
              <img border="0" alt="Logo" height="91" width="92" style={{ width: '92px', height: '91px', border: '0' }} src={data.profileImage} />
          </td>

          <td style={{ width: '22px', textAlign: 'center', verticalAlign: 'center' }}>
        {/* Vertical line */}
        <div style={{ width: '1.5px', height: '130px', backgroundColor: '#675036', margin: 'auto' }}></div>
      </td>
          <td style={{ width: '364px', verticalAlign: 'top', display:'flex', flexDirection:'column' }}>
            <span style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', color: '#675036', lineHeight: '20px', fontWeight: 'bold', textTransform:'uppercase' }}>{data.name}<br /></span>
            
            <span style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif', lineHeight: '20px', fontWeight: 'bold', color: '#675036' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', color: '#675036', lineHeight: '20px' }}>{data.designation}<br /></span>
            </span>
                <div style={{display:'flex', flexDirection:'column', marginTop:'8px'}}>
            <span style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#3c3c3b', paddingBottom: '1px' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', color: '#3c3c3b', fontWeight: '600' }}> <img style={{width:'13px'}} src="https://cdn-icons-png.flaticon.com/128/597/597177.png" alt="" /> </span> <span style={{fontSize:'14px',fontWeight:'600', paddingLeft:'10px'}}>{data.phone}</span>
            </span>

            <span style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#3c3c3b', paddingBottom: '1px' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', color: '#3c3c3b', fontWeight: 'bold' }}> <img style={{width:'13px'}} src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="" /> </span>
              <a href={`mailto:${data.email}`} style={{ fontFamily: 'Arial, sans-serif', color: '#3c3c3b', textDecoration: 'none', fontWeight:'600',paddingLeft:'10px',fontSize:'14px' }}>{data.mail}</a>
            </span>
            <span style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#3c3c3b', paddingBottom: '1px' }}>
              <span style={{ fontFamily: 'Arial, sans-serif', color: '#3c3c3b', fontWeight: 'bold' }}> <img style={{width:'13px'}} src="https://cdn-icons-png.flaticon.com/128/3059/3059484.png" alt="" /> </span>
              <a href={data.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif', color: '#3c3c3b', fontWeight:'600',paddingLeft:'10px',fontSize:'14px', }}>{data.website}</a><br />
            </span>
</div>
            <span style={{ paddingTop: '10px', verticalAlign: 'bottom' }}>
              <span style={{ display: 'inline-block', height: '22px' }}>
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
              </span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    );
}
