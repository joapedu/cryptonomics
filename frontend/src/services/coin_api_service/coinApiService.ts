import axios from 'axios';

const API_KEY = '936D0E11-FEC1-493D-8BE9-F7C0322D9431';
const BASE_URL = 'https://rest.coinapi.io/v1';

export const getBuscaData = async (sigla_coin: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/exchangerate/${sigla_coin}/USD`, {
            headers: {
                'X-CoinAPI-Key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dados da API BTC:', error);
        throw error;
    }
};

export const getBitcoinData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/exchangerate/BTC/USD`, {
            headers: {
                'X-CoinAPI-Key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dados da API BTC:', error);
        throw error;
    }
};

export const getEthereumData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/exchangerate/ETH/USD`, {
            headers: {
                'X-CoinAPI-Key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dados da API ETH:', error);
        throw error;
    }
};

export const getTetherData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/exchangerate/USDT/USD`, {
            headers: {
                'X-CoinAPI-Key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dados da API USDT:', error);
        throw error;
    }
};

export const getBNBData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/exchangerate/BNB/USD`, {
            headers: {
                'X-CoinAPI-Key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dados da API BNB:', error);
        throw error;
    }
};

export const getSolanaData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/exchangerate/SOL/USD`, {
            headers: {
                'X-CoinAPI-Key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dados da API ETH:', error);
        throw error;
    }
};

export const getUSDCData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/exchangerate/USDC/USD`, {
            headers: {
                'X-CoinAPI-Key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dados da API ETH:', error);
        throw error;
    }
};