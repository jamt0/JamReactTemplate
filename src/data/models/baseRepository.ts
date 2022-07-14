import { ApiCallFunction } from 'data/types';
import { Either, makeLeft, makeRight } from 'models/either';

export const toEither = async <T>(
	apiCallFunction: ApiCallFunction<T>
): Promise<Either<Error, T>> => {
	try {
		const response = await apiCallFunction();
        //TODO: Arreglar el tipado de Api response
		if (!response.error) return makeRight(response.data!);
		return makeLeft(Error());
	} catch (error) {
		return makeLeft(Error());
	}
};


