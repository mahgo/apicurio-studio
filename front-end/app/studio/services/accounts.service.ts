/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {InjectionToken} from "@angular/core";

import {InitiatedLinkedAccount} from "../models/initiated-linked-account";
import {LinkedAccount} from "../models/linked-account";


/**
 * Used to access and manipulate the user's Linked Accounts.
 */
export interface ILinkedAccountsService {

    /**
     * Gets a promise over all of the Linked Accounts for the current user.
     * @return {Promise<Api[]>}
     */
    getLinkedAccounts(): Promise<LinkedAccount[]>;

    /**
     * Initiates the process of creating a new linked account.  This begins the OIDC/OAuth
     * process, which will ultimately result in a new linked account.
     * @param {string} accountType
     * @return {Promise<InitiatedLinkedAccount>}
     */
    createLinkedAccount(accountType: string, redirectUrl: string): Promise<InitiatedLinkedAccount>;

    /**
     * Called to delete or cancel a Linked Account.
     * @param {string} type
     * @return {Promise<void>}
     */
    deleteLinkedAccount(type: string): Promise<void>;

    /**
     * Gets a single Api by its ID.
     * @param {string} type
     * @return {Promise<LinkedAccount>}
     */
    getLinkedAccount(type: string): Promise<LinkedAccount>;

    /**
     * Finalizes/completes the account linking process for a particular account type.  This
     * should get called once the account linking flow has been completed.
     * @param accountType
     * @param nonce
     */
    completeLinkedAccount(accountType: string, nonce: string): Promise<void>;

}

export const ILinkedAccountsService = new InjectionToken("ILinkedAccountsService");
