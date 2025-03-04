import React from 'react';

const ESIMFooter = () => {
  return (
    <footer style={{ 
      backgroundColor: '#121212', 
      color: 'white', 
      padding: '40px 20px',
      borderTop: '1px solid #333'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        {/* Logo and Copyright */}
        <div style={{ 
          width: '250px',
          marginRight: '20px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h2 style={{  marginBottom: '20px', marginTop: '60px', fontSize: '3.0rem', fontWeight: 'bold' }}>Qorvia-AI</h2>
        </div>

        {/* Quick Links */}
        <div style={{ 
          width: '180px',
          marginBottom: '20px'
        }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>Home</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>About</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>Products</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div style={{ 
          width: '180px',
          marginBottom: '20px'
        }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Resources</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>eSIM Guides</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>Industry News</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>Case Studies</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>Webinars</a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div style={{ 
          width: '180px',
          marginBottom: '20px'
        }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Connect</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>Twitter</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>LinkedIn</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>Instagram</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#4DABF7', textDecoration: 'none' }}>YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default ESIMFooter;