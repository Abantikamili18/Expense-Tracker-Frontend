import React from 'react'

const About = () => {
  return (
    <div style={{ maxWidth: '650px', margin: '48px auto', padding: '32px', background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
      <h2 style={{ color: '#2d6cdf', marginBottom: '16px', fontWeight: 700, letterSpacing: '1px' }}>About Expense Tracker</h2>
      <p style={{ fontSize: '1.15em', color: '#333', marginBottom: '18px', lineHeight: 1.7 }}>
        <span role="img" aria-label="wallet">💸</span> Welcome to your personal Expense Tracker! This app empowers you to take control of your finances with a modern, easy-to-use interface. Effortlessly add, view, and manage your transactions, and always stay on top of your budget.
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: '#444', fontSize: '1.05em' }}>
        <li><span role="img" aria-label="plus">➕</span> Add income and expenses instantly</li>
        <li><span role="img" aria-label="chart">📊</span> Visualize your balance at a glance</li>
        <li><span role="img" aria-label="lock">🔒</span> Secure registration and login</li>
        <li><span role="img" aria-label="mobile">📱</span> Responsive design for all devices</li>
      </ul>
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <span style={{ fontSize: '1.1em', color: '#2d6cdf', fontWeight: 600 }}>
          Start tracking, stay in control, and achieve your financial goals!
        </span>
      </div>
      <p style={{ fontSize: '0.95em', color: '#888', marginTop: '28px', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </p>
    </div>
  )
}

export default About