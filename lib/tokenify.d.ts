interface MasterResponse {
    clientID: string;
    userID: number;
    token: string;
    authToken: string;
    userType: string;
    name: string;
    objectID: number;
    registerDate: string;
    lastVisited: string;
    ownerIDs: number[];
    classIDs: number[];
    isTowerTownEnabled: boolean;
    identityUri: string;
    identityClientId: string;
    identityToken: string;
    refreshToken: string;
    premises: string;
}
export declare const tokenify: (username: string, password: string, { log }?: {
    log?: boolean | undefined;
}) => Promise<MasterResponse>;
export {};
