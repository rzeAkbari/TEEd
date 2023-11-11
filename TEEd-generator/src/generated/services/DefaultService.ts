/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Teed } from '../models/Teed';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * get teed
     * @param teedId ID of wanted teed
     * @returns Teed OK
     * @throws ApiError
     */
    public static getTeed(
        teedId: number,
    ): CancelablePromise<Teed> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teed/{teedId}',
            path: {
                'teedId': teedId,
            },
        });
    }

    /**
     * get teed
     * @returns any OK
     * @throws ApiError
     */
    public static getTeeds(): CancelablePromise<{
        schema?: Teed;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/teeds',
        });
    }

    /**
     * create a new teed
     * @param formData new teed object
     * @returns any OK
     * @throws ApiError
     */
    public static postTeeds(
        formData: Teed,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/teeds',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
