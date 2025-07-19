import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppointmentContextType {
  isAppointmentModalOpen: boolean;
  openAppointmentModal: () => void;
  closeAppointmentModal: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};

interface AppointmentProviderProps {
  children: ReactNode;
}

export const AppointmentProvider: React.FC<AppointmentProviderProps> = ({ children }) => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <AppointmentContext.Provider
      value={{
        isAppointmentModalOpen,
        openAppointmentModal,
        closeAppointmentModal,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}; 