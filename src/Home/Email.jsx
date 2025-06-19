// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// function EmailForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     email: '',
//     number: '',
//     subject: '',
//     message: '',
//   });

//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       await emailjs.send(
//         'service_ckzlh2f', // Your EmailJS service ID
//         'template_uwmp5uo', // Your EmailJS template ID
//         {
//           ...formData,
//           ccEmails: 'a.khan@europapers.co.uk', // Hardcoded CC email
//         },
//         'QQIaVyUi87kjZFhBr' // Your EmailJS public key
//       );
//       setSuccess(true);
//     } catch (err) {
//       console.error('Email sending failed:', err);
//       setError('Failed to send email. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form className="text-black text-center" onSubmit={handleSubmit}>
//       {!success ? (
//         <>
//           <input
//             className="border-b border-[#aaaaaa] py-2 w-72 px-4 text-center mx-auto"
//             placeholder="Client Name"
//             type="text"
//             name="name"
//             value={formData.name}
//             required
//             onChange={handleChange}
//           />
//           <input
//             className="border-b border-[#aaaaaa] py-2 w-72 px-4 text-center mx-auto mt-2"
//             placeholder="Company"
//             type="text"
//             name="company"
//             value={formData.company}
//             required
//             onChange={handleChange}
//           />
//           <input
//             className="border-b border-[#aaaaaa] py-2 w-72 px-4 text-center mx-auto mt-2"
//             placeholder="Email Address"
//             type="email"
//             name="email"
//             value={formData.email}
//             required
//             onChange={handleChange}
//           />
//           <input
//             className="border-b border-[#aaaaaa] py-2 w-72 px-4 text-center mx-auto mt-2"
//             placeholder="Phone Number"
//             type="text"
//             name="number"
//             value={formData.number}
//             required
//             onChange={handleChange}
//           />
//           <input
//             className="border-b border-[#aaaaaa] py-2 w-72 px-4 text-center mx-auto mt-2"
//             placeholder="Subject"
//             type="text"
//             name="subject"
//             value={formData.subject}
//             required
//             onChange={handleChange}
//           />
//           <textarea
//             className="border-b border-[#aaaaaa] py-2 w-72 px-4 text-center mx-auto mt-2"
//             placeholder="Message"
//             name="message"
//             value={formData.message}
//             required
//             onChange={handleChange}
//           />
//           <div className="mt-4">
//             <button
//               className="bg-[#CD252B] px-10 tracking-wider py-2 text-white"
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? 'Sending...' : 'Submit'}
//             </button>
//           </div>
//           {error && <p className="text-red-500 mt-2">{error}</p>}
//         </>
//       ) : (
//         <p className="text-green-500">Email sent successfully!</p>
//       )}
//     </form>
//   );
// }

// export default EmailForm;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
      email: email,
    };
    emailjs.send(
      'service_ckzlh2f',
      'template_uwmp5uo',
      templateParams,
      'QQIaVyUi87kjZFhBr'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
  };

  return (
    <form className='text-white' onSubmit={handleSubmit}>
      { !success && <div>
        <input
          className='border-b border-[#aaaaaa] py-2 w-72 px-2 justify-center'
          placeholder='Email Address'
          type="email"
          id="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <div>
          <button className='bg-[#003180] px-10 tracking-wider py-2 md:mt-10 mt-5 text-white' type="submit">
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </div>}
      {success && <p>Email sent successfully!</p>}
    </form>
  );  
}

// rocksecgroups@gmail.com

export default EmailForm;