import React, { createContext, FC, ReactNode, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import getColorPresets, {
  defaultPreset,
  colorPresets,
} from '../utils/getColorPresets';

interface Settings {
  themeMode: string;
  themeLayout: string;
  themeStretch: boolean;
  themeContrast: string;
  themeDirection: string;
  themeColorPresets: string;
}

interface SettingsContextProps extends Settings {
  onToggleMode: () => void;
  onChangeMode: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onToggleDirection: () => void;
  onChangeDirection: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeDirectionByLang: (lang: string) => void;
  onToggleLayout: () => void;
  onChangeLayout: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onToggleContrast: () => void;
  onChangeContrast: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeColor: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onToggleStretch: () => void;
  onResetSetting: () => void;
  setColor: (preset: string) => void;
  colorOption: { name: string; value: string }[];
}

const initialState: Settings = {
  themeMode: '', // Add your default values
  themeLayout: '',
  themeStretch: false,
  themeContrast: '',
  themeDirection: '',
  themeColorPresets: '',
};

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

interface SettingsProviderProps {
  children: ReactNode;
}

const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [settings, setSettings] = useLocalStorage<Settings>('settings', {
    themeMode: initialState.themeMode,
    themeLayout: initialState.themeLayout,
    themeStretch: initialState.themeStretch,
    themeContrast: initialState.themeContrast,
    themeDirection: initialState.themeDirection,
    themeColorPresets: initialState.themeColorPresets,
  });

  const isArabic = localStorage.getItem('i18nextLng') === 'ar';

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang('ar');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic]);

  // Mode
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  const onChangeMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  // Direction
  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection: settings.themeDirection === 'rtl' ? 'ltr' : 'rtl',
    });
  };

  const onChangeDirection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value,
    });
  };

  const onChangeDirectionByLang = (lang: string) => {
    setSettings({
      ...settings,
      themeDirection: lang === 'ar' ? 'rtl' : 'ltr',
    });
  };

  // Layout
  const onToggleLayout = () => {
    setSettings({
      ...settings,
      themeLayout:
        settings.themeLayout === 'vertical' ? 'horizontal' : 'vertical',
    });
  };

  const onChangeLayout = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeLayout: event.target.value,
    });
  };

  // Contrast
  const onToggleContrast = () => {
    setSettings({
      ...settings,
      themeContrast: settings.themeContrast === 'default' ? 'bold' : 'default',
    });
  };

  const onChangeContrast = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeContrast: event.target.value,
    });
  };

  // Color
  const onChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value,
    });
  };

  // Stretch
  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  // Reset
  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeContrast: initialState.themeContrast,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    });
  };
  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleMode,
        onChangeMode,
        onToggleDirection,
        onChangeDirection,
        onChangeDirectionByLang,
        onToggleLayout,
        onChangeLayout,
        onToggleContrast,
        onChangeContrast,
        onChangeColor,
        onToggleStretch,
        onResetSetting,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color: any) => ({
          name: color.name,
          value: color.main,
        })),
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
