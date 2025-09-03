import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonConfig, getButtonConfigs, saveButtonConfigs } from '@/data/buttonData';
import { toast } from 'sonner';

// 模拟管理员认证
const ADMIN_PASSWORD = 'admin123'; // 实际项目中应使用更安全的认证方式

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [buttonConfigs, setButtonConfigs] = useState<ButtonConfig[]>([]);
  const navigate = useNavigate();

  // 登录处理
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      // 获取按钮配置
      setButtonConfigs(getButtonConfigs());
    } else {
      toast.error('Nieprawidłowe hasło');
    }
  };

  // 登出处理
  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  // 处理按钮配置变更
  const handleConfigChange = (id: number, field: 'text' | 'url', value: string) => {
    setButtonConfigs(prev => 
      prev.map(config => 
        config.id === id ? { ...config, [field]: value } : config
      )
    );
  };

  // 保存配置
  const handleSave = () => {
    saveButtonConfigs(buttonConfigs);
    toast.success('Konfiguracja zapisana pomyślnie');
  };

  // 返回首页
  const handleBackToHome = () => {
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Panel administracyjny</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Hasło administratora</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
            >
              Zaloguj się
            </button>
          </form>
          <button
            onClick={handleBackToHome}
            className="mt-4 text-gray-600 hover:text-orange-500 text-sm"
          >
            Powrót do strony głównej
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Zarządzanie przyciskami</h1>
          <div className="flex gap-4">
            <button
              onClick={handleBackToHome}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
            >
              Strona główna
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Wyloguj się
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Instrukcje</h2>
            <p className="text-gray-700 text-sm">
              Tutaj możesz edytować tekst i linki dla pięciu przycisków na stronie głównej. Po wprowadzeniu zmian kliknij przycisk "Zapisz konfigurację".
            </p>
          </div>

          <div className="space-y-6">
            {buttonConfigs.map((config) => (
              <div key={config.id} className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Przycisk {config.id}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Tekst przycisku</label>
                    <input
                      type="text"
                      value={config.text}
                      onChange={(e) => handleConfigChange(config.id, 'text', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Link przekierowania</label>
                    <input
                      type="text"
                      value={config.url}
                      onChange={(e) => handleConfigChange(config.id, 'url', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Zapisz konfigurację
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;