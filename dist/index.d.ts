export declare type IOptions<T> = {
    startIdx?: number;
    equalFn?: (item: any, target: T) => boolean;
};
/**
 *
 * @param list obj with length property, like array
 * @param target searched element
 * @param startIdx start index
 * @returns index (return -1 if not found)
 */
declare function midIndexOf<T extends unknown[], K extends T[number]>(list: T, target: K, { startIdx, equalFn }?: IOptions<K>): number;
export default midIndexOf;
