import { axiosInstance } from '../utils/api/axiosInstance';
import type { Product } from '../types/product';

export const getProducts = async (): Promise<Product[]> => {
    const { data } = await axiosInstance.get<Product[]>('/products');
    return data;
};

export const getCategories = async (): Promise<string[]> => {
    const { data } = await axiosInstance.get<string[]>('/products/categories');
    return data;
};