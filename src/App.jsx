import { useState } from 'react'
import './App.css'
import EmailSignatureForm from './components/EmailSignatureForm/EmailSignatureForm'
// import EmailSignature from './components/EmailSignatureForm/EmailSignature'
function App() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    phone: '',
    mail: '',
    socialLinks: [],
    profileImage: null,
  });

  const handleFormSubmit = (newFormData) => {
    setFormData(newFormData);
  };

  return (
    <div>
      <EmailSignatureForm  />
      {/* <EmailSignature data={formData} /> */}
    </div>
  );
}

export default App
