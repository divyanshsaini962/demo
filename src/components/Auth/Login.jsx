import React, { useState } from 'react';

const Login = () => {
  const [language, setLanguage] = useState('en');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send an OTP to the user's email
    console.log('Sending OTP to', email);
    setStep('otp');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Here you would verify the OTP
    console.log('Verifying OTP', otp);
    // If OTP is correct, proceed with login
  };

  const translations = {
    en: {
      selectLanguage: 'Select Language',
      emailPlaceholder: 'Enter your email',
      sendOtp: 'Send OTP',
      otpPlaceholder: 'Enter OTP',
      verify: 'Verify OTP'
    },
    hi: {
      selectLanguage: 'भाषा चुनें',
      emailPlaceholder: 'अपना ईमेल दर्ज करें',
      sendOtp: 'OTP भेजें',
      otpPlaceholder: 'OTP दर्ज करें',
      verify: 'OTP सत्यापित करें'
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t.selectLanguage}
          </h2>
          <div className="mt-4 flex justify-center">
            <button onClick={() => handleLanguageChange('en')} className="mx-2 px-4 py-2 border rounded">English</button>
            <button onClick={() => handleLanguageChange('hi')} className="mx-2 px-4 py-2 border rounded">हिंदी</button>
          </div>
        </div>
        {step === 'email' ? (
          <form onSubmit={handleEmailSubmit} className="mt-8 space-y-6">
            <input
              type="email"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t.sendOtp}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="mt-8 space-y-6">
            <input
              type="text"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder={t.otpPlaceholder}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t.verify}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
