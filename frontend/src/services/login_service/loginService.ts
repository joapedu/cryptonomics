import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

interface LoginResponse {
    success: boolean;
    error?: string;
}

const loginService = {
    login: async (username: string, password: string): Promise<LoginResponse> => {
        try {
            const response = await axios.post(`${BASE_URL}/login/`, { username, password });
            if (response.status === 200) {
                return { success: true };
            }
        } catch (err) {
            return { success: false, error: 'Credenciais inválidas. Por favor, tente novamente.' };
        }
        return { success: false, error: 'Erro desconhecido no login.' };
    },

    register: async (username: string, password: string): Promise<LoginResponse> => {
        try {
            const response = await axios.post(`${BASE_URL}/register/`, { username, password });
            if (response.status === 201) {
                return { success: true };
            }
        } catch (err) {
            return { success: false, error: 'Usuário já existe ou informações inválidas.' };
        }
        return { success: false, error: 'Erro desconhecido no registro.' };
    },

    resetPassword: async (email: string): Promise<LoginResponse> => {
        try {
            const response = await axios.post(`${BASE_URL}/reset-password/`, { email });
            if (response.status === 200) {
                return { success: true };
            }
        } catch (err) {
            return { success: false, error: 'E-mail não encontrado.' };
        }
        return { success: false, error: 'Erro desconhecido na troca de senha.' };
    },

    logout: async (): Promise<LoginResponse> => {
        try {
            const response = await axios.post(`${BASE_URL}/logout/`);
            if (response.status === 200) {
                return { success: true };
            }
        } catch (err) {
            return { success: false, error: 'Deslogado.' };
        }
        return { success: false, error: 'Erro desconhecido, por favor tente novamente.' };
    },
};

export default loginService;
