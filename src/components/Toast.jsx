import React, { useState, useEffect } from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

let toastSubscriber = null;

export const showToast = (message, type = 'success', duration = 3500) => {
  if (toastSubscriber) {
    toastSubscriber(message, type, duration);
  }
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    toastSubscriber = (message, type, duration) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    };

    return () => {
      toastSubscriber = null;
    };
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          {t.type === 'success' && <CheckCircle2 size={18} color="#10b981" />}
          {t.type === 'info' && <Info size={18} color="#06b6d4" />}
          {t.type === 'error' && <AlertCircle size={18} color="#ff2a51" />}
          <span style={{ flex: 1 }}>{t.message}</span>
          <button
            onClick={() => removeToast(t.id)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              padding: '2px',
            }}
          >
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  );
}
