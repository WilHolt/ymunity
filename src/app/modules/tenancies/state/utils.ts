import { TenancyUnityModel } from "../models/tenancy-unity.model";

export const removeItemByIndex = <T>(arr: T[], index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
}


export const sortAndSetFavoritesFirst = (arr: TenancyUnityModel[]): TenancyUnityModel[] => {
    const favorites = arr.filter(item => item.isFavorite);
    const nonFavorites = arr.filter(item => !item.isFavorite);

    const sortedArray = [...favorites, ...nonFavorites];

    return sortedArray;
};