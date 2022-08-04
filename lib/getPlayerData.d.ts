import { PlayerData } from "./PlayerData";
interface PlayerDataFromUserID {
    [key: number]: PlayerData;
}
export declare const getPlayerData: (token: string, userID?: string, { log }?: {
    log?: boolean | undefined;
}) => Promise<PlayerData | PlayerDataFromUserID>;
export {};
