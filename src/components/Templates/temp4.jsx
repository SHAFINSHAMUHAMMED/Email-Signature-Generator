import React from 'react';

export default function temp4({ data }) {
  return (
    <table style={{ fontFamily: 'Arial, sans-serif', color: '#262626', maxWidth: '100%',display:'flex', justifyContent:'center' }} cellSpacing="0" cellPadding="0" border="0">
      <tbody>
        <tr style={{display:'flex',gap:'10px', alignItems:'center'}}>
            <td><img style={{borderRadius:'10px',border:'1px solid black'}} height="100" width="100" src={data.profileImage} alt="" /></td>
          <td width="100%" style={{display:'flex',flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
            <table cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <td style={{ width: '80%',lineHeight:'20px' }}>
                    <span style={{ fontSize: '18pt', color: '#262626', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textTransform:'uppercase' }}>{data.name}</span>
                    <span style={{ fontSize: '14pt',fontWeight:'500', fontFamily: 'Arial, sans-serif', color: '#262626' }}><br />{data.designation}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table style={{marginTop:'5px', width: '90%'}} cellSpacing="0" cellPadding="0">
              <tbody>
                <tr >
                  <td style={{ width: '30px' ,paddingTop:'5px',marginRight:'5px'}}><img src="https://cdn-icons-png.flaticon.com/128/126/126341.png" alt="phone-icon" style={{ border: 0, height: '20px', width: '20px' }} /></td>
                  <td style={{ paddingTop:'5px', width: '160px', fontSize: '13pt', fontWeight:'500', fontFamily: 'Arial, sans-serif', color: '#808080' }}>{data.phone}</td>
                  <td style={{width: '30px',paddingTop:'5px',marginRight:'5px' }}><img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="mail-icon" style={{ border: 0, height: '20px', width: '20px' }} /></td>
                  <td style={{paddingTop:'5px', width: '160px' }}><a href={`mailto:${data.mail}`} style={{ fontSize: '13pt', fontFamily: 'Arial, sans-serif', color: '#808080', textDecoration: 'none' }}>{data.mail}</a></td>
                </tr>
                <tr>
                  <td style={{paddingTop:'5px', marginRight:'5px' }}><img src="https://cdn-icons-png.flaticon.com/128/1667/1667233.png" alt="website-icon" style={{ border: 0, height: '20px', width: '20px' }} /></td>
                  <td style={{ paddingTop:'5px', fontSize: '9pt', fontFamily: 'Arial, sans-serif', color: '#808080' }}><a href={data.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#808080', fontFamily: 'Arial, sans-serif', fontSize: '12pt' }}>{data.website}</a></td>
                  <td style={{paddingTop:'5px', }}><img src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="fb-icon" style={{ border: 0, height: '20px', width: '20px' }} /></td>
                  <td style={{ paddingTop: '5px', fontSize: '9pt', fontFamily: 'Arial, sans-serif', color: '#808080' }}><a href={data.facebook} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#808080', fontFamily: 'Arial, sans-serif', fontSize: '13pt' }}>{data.facebook}</a></td>
                </tr>
                <tr >
                  <td style={{paddingTop:'5px', }}><img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="twitter-icon" style={{ border: 0, height: '20px', width: '20px' }} /></td>
                  <td style={{paddingTop:'5px',  fontSize: '9pt', fontFamily: 'Arial, sans-serif', color: '#808080' }}><a href={data.twitter} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#808080', fontFamily: 'Arial, sans-serif', fontSize: '13pt' }}>{data.twitter}</a></td>
                  <td style={{paddingTop:'5px',  }}><img src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png" alt="linkedin-icon" style={{ border: 0, height: '20px', width: '20px' }} /></td>
                  <td style={{paddingTop:'5px',  fontSize: '9pt', fontFamily: 'Arial, sans-serif', color: '#808080' }}><a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#808080', fontFamily: 'Arial, sans-serif', fontSize: '13pt' }}>{data.linkedin}</a></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
