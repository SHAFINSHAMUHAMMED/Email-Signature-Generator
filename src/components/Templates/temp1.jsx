import React from 'react';

export default function temp1({ data }) {
    return (
        <table cellPadding="0" cellSpacing="0" border="0" style={{ fontSize: '12px', fontFamily: 'Arial', lineHeight: '17px', maxWidth: '430px' }}>
            <tbody>
                <tr>
                    <td colSpan="2" style={{ lineHeight: '25px', color: '#977e6b', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: '#977e6b', height: '25px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 'bold',textTransform:'uppercase' }}>{data.name}</span> <span style={{ fontWeight: 'normal',fontSize: '13px' }}>{data.designation}</span>
                    </td>      
                </tr>

                <tr>
                    <td width="65%" valign="top" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                        {/* <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#454545', margin: '0px', marginBottom: '10px', borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: 'gray', paddingBottom: '10px' }}>
                            {data.name} <span style={{ fontWeight: 'normal' }}>{data.designation}</span>
                        </p> */}
                        <span style={{fontSize:'13px'}}>Email: </span><span style={{fontSize:'14px', fontWeight: '600'}}>{data.mail}</span><br />
                        
                        <span style={{fontSize:'13px'}}>Phone:</span> <span style={{fontSize:'14px', fontWeight: '600'}}>{data.phone}</span><br />
                        <span style={{fontSize:'13px',textDecoration:'none'}}>Website:</span> <a href={data.website}><span style={{fontSize:'14px', fontWeight: '600'}}>{data.website}</span></a><br />
                        <div style={{ display: 'flex',marginTop:'10px' }}>
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
                    <td align="right">
                        <img style={{width:'90px',height:'90px',borderRadius:'50%',marginTop:'10px'}} src={data.profileImage} alt="Photo" />
                    </td>   
                </tr>
                {/* <tr>
                    <td colSpan="2" style={{ fontSize: '8px', fontFamily: 'Verdana', color: '#696969', lineHeight: '10px', paddingTop: '10px', borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: '#c1ab8b' }}>
                        <span style={{ fontSize: '10px' }}>
                            {data.company} &bull; {data.street} &bull; {data.city}  &bull; {data.postalCode} &bull; {data.state} &bull; {data.country}
                        </span><br /><br />
                        This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and delete it from your system; you may not copy this message or disclose its contents to anyone. Please send us by fax any message containing deadlines as incoming e-mails are not screened for response deadlines. The integrity and security of this message cannot be guaranteed on the Internet.
                    </td>
                </tr>    */}
            </tbody>
        </table>
    );
}
