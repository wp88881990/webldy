import { useEffect, useState } from 'react';

// 定义按钮配置接口
export interface ButtonConfig {
  id: number;
  text: string;
  url: string;
}

// 默认按钮配置
const defaultButtonConfigs: ButtonConfig[] = [
  { id: 1, text: "KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!", url: "#" },
  { id: 2, text: "KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!", url: "#" },
  { id: 3, text: "KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!", url: "#" },
  { id: 4, text: "KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!", url: "#" },
  { id: 5, text: "KLIKNĘJ TUTAJ ABY ZAREZERWOWAĆ MIEJSCE!", url: "#" },
];

// 从localStorage获取按钮配置
export const getButtonConfigs = (): ButtonConfig[] => {
  const saved = localStorage.getItem('buttonConfigs');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse button configs', e);
      return defaultButtonConfigs;
    }
  }
  return defaultButtonConfigs;
};

// 保存按钮配置到localStorage
export const saveButtonConfigs = (configs: ButtonConfig[]): void => {
  localStorage.setItem('buttonConfigs', JSON.stringify(configs));
};

// 自定义hook，用于获取和更新按钮配置
export const useButtonConfigs = () => {
  const [configs, setConfigs] = useState<ButtonConfig[]>([]);

  useEffect(() => {
    setConfigs(getButtonConfigs());
  }, []);

  const updateConfigs = (newConfigs: ButtonConfig[]) => {
    setConfigs(newConfigs);
    saveButtonConfigs(newConfigs);
  };

  return { configs, updateConfigs };
};