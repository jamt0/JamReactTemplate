/**
 * Respuesta base del servidor (Coordinado con el backend)
 */
export type BaseResponse<Data> = {
	error: boolean;
	statusCode?: number;
	data?: Data;
};

/**
 * Llamada a la api que retorna una promesa de la Respuesta base
 */
export type ApiCallFunction<T> = () => Promise<BaseResponse<T>>;

export enum StatusRequest {
	initial,
	fulfilled,
	rejected,
	pending,
}

export type ErrorStatus = {
	error: boolean;
	message: string;
};
