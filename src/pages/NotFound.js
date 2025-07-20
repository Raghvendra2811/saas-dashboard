import React from 'react';

const NotFoundPage = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    },
    card: {
      backgroundColor: 'white',
      padding: '3rem',
      borderRadius: '12px',
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    emoji: {
      fontSize: '4rem',
      marginBottom: '1rem'
    },
    title: {
      color: '#1e293b',
      margin: '0 0 0.5rem',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    text: {
      color: '#64748b',
      margin: '0 0 2rem'
    },
    buttonGroup: {
      display: 'flex',
      gap: '0.5rem',
      justifyContent: 'center'
    },
    btn: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '8px',
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '1rem'
    },
    btnSecondary: {
      backgroundColor: '#f1f5f9',
      color: '#475569'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.emoji}>🔍</div>
        <h1 style={styles.title}>Page Not Found</h1>
        <p style={styles.text}>The page you're looking for doesn't exist.</p>
        <div style={styles.buttonGroup}>
          <a href="/dashboard" style={styles.btn}>
            Dashboard
          </a>
          <button 
            onClick={handleGoBack}
            style={{...styles.btn, ...styles.btnSecondary}}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;