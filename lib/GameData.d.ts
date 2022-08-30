export interface GameData {
    academyTower: AcademyTower[];
    achievement: Achievement[];
    achievementGroup: AchievementGroup[];
    ad: Ad[];
    affix: AffixElement[];
    bitmapFont: BitmapFont[];
    boots: Boot[];
    boss: BossElement[];
    bountyName: BountyName[];
    bundle: Bundle[];
    currency: Currency[];
    dailyReward: DailyReward[];
    dialogue: Dialogue[];
    dorm: Dorm[];
    dormbg: Dormbg[];
    dungeon: Dungeon[];
    emote: Emote[];
    eyeColor: Color[];
    face: Face[];
    faceColor: FaceColor[];
    featureRequirements: FeatureRequirement[];
    follow: Follow[];
    fontStyle: FontStyle[];
    fossil: Fossil[];
    fsm: FSM[];
    fx: Fx[];
    gameFeed: GameFeed[];
    gender: Gender[];
    generic: Generic[];
    giftBox: GiftBox[];
    hair: HairElement[];
    hairColor: Color[];
    hat: Hat[];
    interactable: InteractableElement[];
    item: GameDataItem[];
    itemTable: ItemTable[];
    key: Key[];
    mathTownDecor: MathTown[];
    mathTownFrame: MathTown[];
    mathTownInterior: MathTownInterior[];
    mount: Mount[];
    name: NameElement[];
    nickname: Nickname[];
    orb: ORB[];
    outfit: Outfit[];
    particleEffect: GameDataParticleEffect[];
    pet: GameDataPet[];
    prizeWheel: PrizeWheel[];
    queryParameter: QueryParameter[];
    relic: Relic[];
    skinColor: Face[];
    spell: Spell[];
    spellRelic: SpellRelic[];
    spellV2: SpellV2[];
    streamedMap: StreamedMap[];
    titan: Titan[];
    ui: UI[];
    ultimatesQuestItem: UltimatesQuestItem[];
    weapon: Weapon[];
    prefab: PrefabElement[];
}
export interface AcademyTower {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: AcademyTowerData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface AcademyTowerData {
    enabled: boolean;
    name: string;
    towerID: string;
    element: EarthElement;
    minLevel: number;
    warden: Warden;
    towerEventName: string;
    BGM: Bgm;
    wardenRoomKeyID: number;
    saveWardenDialogueID: number;
    boss: DataBoss;
    achievementMonsterIDs: number[];
    battlesPerFloor: number;
    battleBG: string;
    assets: string[];
    fsmIDs: FSMIDs;
    itemTableID: number;
    floorConfigs: FloorConfig[];
    keystone: Keystone;
    afterKeyFoundDialogueIDs: number[];
    achievementGroupTag?: string;
    wizardWatchAdData?: WizardWatchAdData;
    betaPopup?: BetaPopup;
}
export interface Bgm {
    dungeon: number;
    incomplete: number;
    completed: number;
}
export interface BetaPopup {
    prefabID: number;
    cooldownTimeInSeconds: number;
}
export interface DataBoss {
    tmxName: string;
    ID: number;
    attacks: number[];
    localizedTextRef: string;
    difficulty: number;
    maxHP: null;
    spineKey: string;
    battleBG: string;
}
export declare enum EarthElement {
    Astral = "astral",
    Earth = "earth",
    Empty = "",
    Fire = "fire",
    Ice = "ice",
    IceFire = "ice & fire",
    Mech = "mech",
    Neutral = "neutral",
    Physical = "physical",
    Plant = "plant",
    Shadow = "shadow",
    Special = "special",
    Storm = "storm",
    Water = "water",
    Wizard = "wizard"
}
export interface FloorConfig {
    generator: number;
    dialogueIDs: number[];
}
export interface FSMIDs {
    intro: number;
    bossBattle: number;
    freeWarden: number;
}
export interface Keystone {
    zone: string;
    x: number;
    y: number;
    itemID: number;
    unlockedDialogueID?: number;
}
export interface Warden {
    name: string;
    spine: string;
    atlas: string;
    localizedTextRef: string;
    freedDialogueIDs: number[];
    flipSpine: boolean;
    offset: Anchor;
    nameTextPos: Anchor;
    bubbleAnimName?: string;
    bubblePopName?: string;
}
export interface Anchor {
    x: number;
    y: number;
}
export interface WizardWatchAdData {
    ID: number;
    keystoneNotAcquired: KeystoneAcquiredClass;
    keystoneAcquired: KeystoneAcquiredClass;
    keystonePlaced: KeystoneAcquiredClass;
}
export interface KeystoneAcquiredClass {
    body: string;
    travelZone: string;
}
export interface ReducedClass {
}
export interface Achievement {
    ID: number;
    assetID: number;
    type: AchievementType;
    gender: number;
    data: AchievementData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface AchievementData {
    name: string;
    title?: string;
    desc?: string;
    group?: number | null;
    valueFunction?: ValueFunction;
    ranks?: number[];
    reward?: AdventureRewardElement;
    mapKey?: MapKey;
}
export declare enum MapKey {
    AcademyCR2 = "academy-CR2",
    AcademyGH1 = "academy-GH1",
    AcademyGH2 = "academy-GH2",
    AcademyGH3 = "academy-GH3",
    EarthtowerCR = "earthtower-CR",
    EarthtowerWR = "earthtower-WR",
    HouseExterior = "house-exterior",
    IcetowerCR = "icetower-CR",
    IcetowerWR = "icetower-WR",
    LamplightB3 = "lamplight-B3",
    Map = "$map",
    ReturnMap = "$returnMap",
    ShiverchillB2 = "shiverchill-B2",
    TowerTownA0 = "tower_town-A0"
}
export interface AdventureRewardElement {
    type: TypeElement;
    ID: number;
}
export declare enum TypeElement {
    Boots = "boots",
    Currency = "currency",
    Dorm = "dorm",
    Empty = "",
    Follow = "follow",
    Fossil = "fossil",
    GiftBox = "giftBox",
    Hat = "hat",
    Item = "item",
    Mount = "mount",
    Outfit = "outfit",
    Pet = "pet",
    Prefab = "prefab",
    Relic = "relic",
    Weapon = "weapon"
}
export interface ValueFunction {
    type: string;
    params?: ValueFunctionParams;
}
export interface ValueFunctionParams {
    achievementTag?: number;
    backpackItemsTypes?: TypeElement[];
    zone?: TargetZoneEnum;
    backpackItems?: AdventureRewardElement[];
    zoneTag?: string;
    state?: string;
    shipwreckShoreStates?: string[];
    elementalTower?: string;
}
export declare enum TargetZoneEnum {
    Academy = "academy",
    BonfireSpire = "bonfire_spire",
    Forest = "forest",
    ShipwreckShore = "shipwreck_shore",
    Shiverchill = "shiverchill",
    Skywatch = "skywatch"
}
export declare enum AchievementType {
    Achievement = "achievement"
}
export interface AchievementGroup {
    ID: number;
    assetID: number;
    type: AchievementGroupType;
    gender: number;
    data: AchievementGroupData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface AchievementGroupData {
    title: string;
    name: string;
    zone?: TargetZoneEnum;
}
export declare enum AchievementGroupType {
    AchievementGroup = "achievementGroup"
}
export interface Ad {
    ID: number;
    assetID: number;
    type: AdType;
    gender: number;
    data: AdData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface AdData {
    name: string;
    sendDate: Date | null;
    startDate?: Date | null;
    expiryDate: Date | null;
    prefabID?: number;
    assets?: string[];
    priority?: number;
    title?: string;
    body?: string;
    travelZone?: string;
    travelConfirmMessage?: string;
    thumbnail?: number;
    uiID?: number;
    dateTextName?: string;
    buttons?: ButtonElement[];
    videoID?: string;
    videoMessage?: string;
    videoMessageTitle?: string;
    thumbnailGUID?: string;
    prefabGUID?: string;
    optimizely?: Optimizely;
    experimentTrackEvent?: string;
    memberSuppression?: boolean;
    filename?: string;
    adCheckFunctions?: AdCheckFunction[];
}
export interface AdCheckFunction {
    name: string;
    params: AdCheckFunctionParams;
}
export interface AdCheckFunctionParams {
    titanHealthThreshold: number;
}
export interface ButtonElement {
    name: NameEnum;
    method: Method;
    parameters?: Array<number | null | string>;
    showOnStartDate?: boolean;
}
export declare enum Method {
    Empty = "",
    OpenLinkAtHome = "openLinkAtHome",
    OpenMembershipSignUp = "openMembershipSignUp",
    OpenVideo = "openVideo",
    Teleport = "teleport",
    TravelToFestival = "travelToFestival",
    TravelToZone = "travelToZone"
}
export declare enum NameEnum {
    Empty = "",
    GoNowButton = "goNowButton",
    PlayVideoButton = "playVideoButton",
    WatchVideoButton = "watchVideoButton"
}
export interface Optimizely {
    feature?: string;
    variable?: string;
    isTowerAd?: boolean;
    isEpicsAd?: boolean;
}
export declare enum AdType {
    Ad = "ad"
}
export interface AffixElement {
    ID: number;
    assetID: number;
    type: PurpleType;
    gender: number;
    data: AffixData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface AffixData {
    label?: string;
    opType?: number;
    type: string;
    value?: number;
    name: string;
    valuePercent?: number;
    amount?: number;
    operationType?: number;
    version?: number;
    elements?: EarthElement[];
    highPotency?: boolean;
}
export interface AffixMetadata {
    v?: number;
    type?: FemaleType;
    vIcon?: number;
    assets?: PurpleAssets;
    subType?: number;
    faceColor?: number;
}
export interface PurpleAssets {
    default?: PurpleDefault;
    male?: Male;
    female?: Female;
}
export interface PurpleDefault {
    type: FemaleType;
    v: number;
    offSet: Anchor;
}
export declare enum FemaleType {
    Atlas = "atlas",
    Multiple = "multiple",
    SingleImage = "singleImage"
}
export interface Female {
    v: number;
    legs: LeftArm;
    type: FemaleType;
    shirt: LeftArm;
    leftArm: LeftArm;
    rightArm: LeftArm;
    leg?: Anchor;
    iconVersions?: Version[];
    assetVersions?: Version[];
    noCache?: boolean;
    cacheError?: boolean;
}
export interface Version {
    id: string;
}
export interface LeftArm {
    x: number;
    y: number;
    pivot: Anchor;
    handIK?: Anchor;
}
export interface Male {
    v: number;
    legs: Legs;
    type: FemaleType;
    shirt: LeftArm;
    leftArm: LeftArm;
    rightArm: LeftArm;
    leg?: Anchor;
    iconVersions?: Version[];
    assetVersions?: Version[];
    noCache?: boolean;
    cacheError?: boolean;
}
export interface Legs {
    x: number;
    y: number;
    pivot: Pivot;
}
export interface Pivot {
    x: number;
    y: number | string;
}
export declare enum PurpleType {
    Affix = "affix"
}
export interface BitmapFont {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: BitmapFontData;
    metadata: BitmapFontMetadata;
    name: string;
    createDate: Date;
}
export interface BitmapFontData {
    filename: string;
}
export interface BitmapFontMetadata {
    assets: FluffyAssets;
}
export interface FluffyAssets {
    default: FluffyDefault;
}
export interface FluffyDefault {
    v: number;
}
export interface Boot {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: BootData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface BootData {
    drop?: number;
    name: string;
    price?: number;
    member: number;
    rarity: number;
    effects: Array<number | string>;
    flavorText: string;
    cost?: CostElement[];
    ""?: string;
    "0"?: number;
    "en-us"?: string;
    type?: FluffyType;
    memberAd?: number;
    lockLevel?: number;
}
export interface CostElement {
    type: TypeElement;
    ID: number;
    N?: number;
    dropChance?: number;
    atlasFrame?: string;
    R?: number;
    duplicateValue?: number;
}
export declare enum FluffyType {
    Cover = "cover",
    Empty = "",
    Hat = "Hat",
    Mask = "mask",
    Wrap = "wrap"
}
export interface BossElement {
    ID: number;
    assetID: number;
    type: BossType;
    gender: number;
    data: BossData;
    metadata: BossMetadata;
    name: string;
    createDate: Date;
}
export interface BossData {
    name?: string;
    spellUnlock?: SpellUnlock[];
    spellLoadouts?: SpellLoadout[];
    nameKey?: string;
    element?: AstralElement;
    adventureRewards?: AdventureRewardElement[];
    battleCheckpointID?: number;
    battle?: DataBattle;
    rockShuffle?: {
        [key: string]: RockShuffle;
    };
    creatureModifiers?: CreatureModifiers;
    tree?: Tree;
    spiderBattle?: SpiderBattle;
    wizard?: Wizard;
    lootTableID?: number;
    missCooldown?: number;
    powerStat?: number;
    healthStat?: number;
    spells?: number[];
    affixIDs?: number[];
    relicRingReward?: number;
    starReward?: number;
    specialSpells?: SpecialSpell[];
    unsecureRewards?: UnsecureReward[];
}
export interface DataBattle {
    hpStat?: number;
    powerStat?: number;
    wyrmAttacks?: number[];
    rockAttacks?: number[];
    difficulty: number;
    phaseHPThresholdPercentage?: number;
    undergroundDamageMultiplier?: number;
    damageModifier?: number;
    hpModifier?: number;
    attacks?: number[] | AttacksClass;
    health?: number;
    castDelay?: number;
    yetiAttacks?: number[];
    spiderAttacks?: number[];
    battleShy?: boolean;
    location?: string;
    pets?: BattlePet[];
}
export interface AttacksClass {
    fire: number[];
    water: number[];
    plant: number[];
    ice: number[];
    storm: number[];
    shadow: number[];
}
export interface BattlePet {
    ID: number;
    difficulty: number;
}
export interface CreatureModifiers {
    damage: number;
}
export declare enum AstralElement {
    Astral = "astral",
    Ice = "ice",
    Shadow = "shadow"
}
export interface RockShuffle {
    timeElapsed: DelayClass;
    delay: DelayClass;
    shuffleCount: UnitLevel;
}
export interface DelayClass {
    start: number;
    end: number;
}
export interface UnitLevel {
    min: number;
    max: number;
}
export interface SpecialSpell {
    id: number;
    cooldown: number;
}
export interface SpellLoadout {
    minDifficulty: number;
    maxDifficulty: number;
    spellList: number[];
}
export interface SpellUnlock {
    spellId: number;
    unlockLevel: number;
}
export interface SpiderBattle {
    minTeamSize: number;
    scale: boolean;
    pets: Particles[];
    walkIntoBattle: boolean;
    targetingEnabled: boolean;
    catch: boolean;
    adventureRewards: AdventureRewardElement[];
}
export interface Particles {
    ID: number;
}
export interface Tree {
    creature: CreatureClass;
    hpStat: number;
    breakThresholds: number[];
}
export interface CreatureClass {
    element: AstralElement;
}
export interface UnsecureReward {
    type: TypeElement;
    ID: number;
    minAmountPresent: number;
}
export interface Wizard {
    appearance: Appearance;
    equipment: Equipment;
}
export interface Appearance {
    gender: SaveDataID;
    hair: AppearanceHair;
    skinColor: number;
    eyeColor: number;
    face?: number;
    name?: string;
}
export declare enum SaveDataID {
    Female = "female",
    Male = "male"
}
export interface AppearanceHair {
    style: number;
    color: number;
}
export interface Equipment {
    hat: number;
    outfit?: number;
    weapon?: number;
    spellRelic?: number;
    boots?: number;
}
export interface BossMetadata {
    assets?: TentacledAssets;
    type?: FemaleType;
    appearance?: Appearance;
    equipment?: Equipment;
}
export interface TentacledAssets {
    type?: FemaleType;
    default: TentacledDefault;
    battle?: AssetsBattle;
}
export interface AssetsBattle {
    type: BattleAssetType;
    assetKey: string;
    animations: BattleAnimations;
}
export interface BattleAnimations {
    attack: string;
    idle: string;
}
export declare enum BattleAssetType {
    Atlas = "atlas",
    Spine = "spine",
    Spritesheet = "spritesheet"
}
export interface TentacledDefault {
    type?: BattleAssetType;
    x?: number;
    w?: number;
    h?: number;
    v?: number;
    hitbox?: ReducedHitbox;
    filename?: string;
    ID?: number;
    rootOffset?: Anchor;
    secondarySpine?: SecondarySpine;
}
export interface ReducedHitbox {
    width: number;
    height: number;
    xOffset: number;
    yOffset?: number;
}
export interface SecondarySpine {
    ID: number;
    v: number;
}
export declare enum BossType {
    Boss = "boss"
}
export interface BountyName {
    ID: number;
    assetID: number;
    type: BountyNameType;
    gender: number;
    data: BountyNameData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface BountyNameData {
    name: string;
    value: string;
    templateType: TemplateType;
    requiredPetIDs: number[];
}
export declare enum TemplateType {
    PetName = "pet-name"
}
export declare enum BountyNameType {
    BountyName = "bountyName"
}
export interface Bundle {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: BundleData;
    metadata: BundleMetadata;
    name: string;
    createDate: Date;
}
export interface BundleData {
    name: string;
    isPurchaseable: boolean;
    price: number;
    items: CostElement[];
    flavorText: string;
    member?: number;
}
export interface BundleMetadata {
    vIcon: number;
}
export interface Currency {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: CurrencyData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface CurrencyData {
    drop: number;
    name: string;
    price: number;
    modifier: number;
    flavorText: string;
    icon?: null | string;
    namePlural?: string;
    zone?: PurpleZone;
    cost?: CostElement[] | CostElement;
}
export declare enum PurpleZone {
    Any = "any",
    Empty = ""
}
export interface DailyReward {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: DailyRewardData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface DailyRewardData {
    resetDayIndex: number;
    days: Day[];
    name: string;
}
export interface Day {
    numRequiredQuestions: number;
    rewards: CostElement[];
}
export interface Dialogue {
    ID: number;
    assetID: number;
    type: DialogueType;
    gender: number;
    data: DialogueData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface DialogueData {
    audio: Audio;
    avatar: Avatar;
    textKey: string;
    nameKey?: string;
    nameKKey?: string;
    name?: string;
}
export interface Audio {
    d?: number;
    s?: number;
    tag?: string;
}
export interface Avatar {
    atlas?: string;
    frameName: FrameName;
    animationMod: number | null | string;
    spineAttachment: null | string;
    dimmed?: boolean;
    offsetY?: number;
}
export declare enum FrameName {
    Empty = "",
    Face0 = "face_0",
    Face1 = "face_1",
    Face10 = "face_10",
    Face15 = "face_15",
    Face2 = "face_2",
    Face3 = "face_3",
    Face4 = "face_4",
    Face5 = "face_5",
    Face6 = "face_6",
    Face7 = "face_7",
    Face8 = "face_8",
    Face9 = "face_9"
}
export declare enum DialogueType {
    Dialogue = "dialogue"
}
export interface Dorm {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: DormData;
    metadata: DormMetadata;
    name: string;
    createDate: Date;
}
export interface DormData {
    r: number;
    name: string;
    price: number;
    member: number;
    rarity: number;
    category: Category;
    flavorText: string;
    cost?: CostElement[];
    "en-us"?: string;
}
export declare enum Category {
    Comfy = "Comfy",
    Empty = "",
    Items = "Items",
    Lamps = "Lamps",
    Plants = "Plants",
    Storage = "Storage",
    Surface = "Surface",
    Wall = "Wall"
}
export interface DormMetadata {
    type: TentacledType;
    vIcon: number;
    assets: StickyAssets;
    v?: number;
    iconAtlas?: string;
}
export interface StickyAssets {
    vertical: Vertical;
    horizontal?: Horizontal;
    sheets?: Sheets;
}
export interface Horizontal {
    v: number;
    type: HorizontalType;
    anchor?: Anchor;
    animated?: boolean;
    cacheError?: boolean;
}
export declare enum HorizontalType {
    Empty = "",
    Prefab = "prefab",
    SingleImage = "singleImage",
    Spine = "spine"
}
export interface Sheets {
    v: number;
    type: FemaleType;
}
export interface Vertical {
    v: number;
    type: HorizontalType;
    anchor?: Anchor;
    animated?: boolean;
    noCache?: boolean;
    ID?: number;
    cacheError?: boolean;
}
export declare enum TentacledType {
    Multiple = "multiple",
    Spine = "spine"
}
export interface Dormbg {
    ID: number;
    assetID: number;
    type: DormbgType;
    gender: number;
    data: DormbgData;
    metadata: BundleMetadata;
    name: string;
    createDate: Date;
}
export interface DormbgData {
    x: number;
    y: number;
    tag: string;
    name: string;
    price: number;
    member: number;
    rarity: number;
    category: Category;
    flavorText: string;
}
export declare enum DormbgType {
    Dormbg = "dormbg"
}
export interface Dungeon {
    ID: number;
    assetID: number;
    type: DungeonType;
    gender: number;
    data: DungeonData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface DungeonData {
    version: number;
    name: string;
    seed: null;
    gridWidth: number;
    gridHeight: number;
    minCritPathLength: number;
    maxCritPathLength: number;
    monsterIDs: number[];
    minEncounters: number;
    maxEncounters: number;
    monsterDrops: CostElement[];
    goldenPages: number;
    minPages: number;
    maxPages: number;
    battleDifficulty: number;
    extraPaths: ExtraPaths;
    monsterRooms: Room[];
    normalRooms: Room[];
    endRoom: Room;
    monsterWeights?: number[];
}
export interface Room {
    tileMap: string;
    fsmId: number;
}
export interface ExtraPaths {
    minLength: number;
    maxLength: number;
    minPaths: number;
    maxPaths: number;
}
export declare enum DungeonType {
    Dungeon = "dungeon"
}
export interface Emote {
    ID: number;
    assetID: number;
    type: EmoteType;
    gender: number;
    data: EmoteData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface EmoteData {
    name: string;
    isAnimated: number;
}
export declare enum EmoteType {
    Emote = "emote"
}
export interface Color {
    ID: number;
    assetID: number;
    type: EyeColorType;
    gender: number;
    data: EyeColorData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface EyeColorData {
    name: string;
    price?: number;
    colors?: Array<number[]>;
    member: number;
    flavorText?: string;
}
export declare enum EyeColorType {
    EyeColor = "eyeColor",
    HairColor = "hairColor"
}
export interface Face {
    ID: number;
    assetID: number;
    type: FaceType;
    gender: number;
    data: FaceData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface FaceData {
    price: number;
    name: string;
    flavorText: FlavorText;
    colors?: Array<number[]>;
}
export declare enum FlavorText {
    BuyingThisWillChangeYourFaceStyle = "Buying this will change your face style!",
    BuyingThisWillChangeYourSkinTone = "Buying this will change your skin tone!",
    FlavorTextBuyingThisWillChangeYourFaceStyle = "Buying this will change your face style."
}
export declare enum FaceType {
    Face = "face",
    SkinColor = "skinColor"
}
export interface FaceColor {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: FaceColorData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface FaceColorData {
    price: number;
    colors: Array<number[]>;
}
export interface FeatureRequirement {
    ID: number;
    assetID: number;
    type: FeatureRequirementType;
    gender: number;
    data: FeatureRequirementData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface FeatureRequirementData {
    requirements: Requirement[];
    name: string;
}
export interface Requirement {
    level?: number;
    items?: RequirementItem[];
    friends?: number;
    classmates?: number;
    accountCreationDate?: AccountCreationDate;
    featureFlag?: string;
    packageFeature?: string;
    experiment?: Experiment;
    device?: Device;
    geolocation?: Geolocation;
    validatedTeacherEmail?: boolean;
}
export interface AccountCreationDate {
    after?: number;
    before?: number;
}
export interface Device {
    isNativeIOSApp: boolean;
}
export interface Experiment {
    splitDefinitionKey?: string;
    lanes?: Lanes;
    requireExperiment?: string;
    requireFeature?: string;
    requireFeatureVariables?: RequireFeatureVariables;
}
export interface Lanes {
    default: LanesDefault;
}
export interface LanesDefault {
    override: boolean;
}
export interface RequireFeatureVariables {
    throttle: boolean;
}
export interface Geolocation {
    deny?: any[];
    allow?: string[];
}
export interface RequirementItem {
    type: TypeElement;
    ID: number;
    min: number;
}
export declare enum FeatureRequirementType {
    FeatureRequirements = "featureRequirements"
}
export interface Follow {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: FollowData;
    metadata: FollowMetadata;
    name: string;
    createDate: Date;
}
export interface FollowData {
    tag?: string;
    name: string;
    price?: number;
    member?: number;
    rarity: number;
    flavorText: string;
    customPrice?: number;
    spriteOffsets?: SpriteOffsets;
    numWalkAnimFrames?: number;
    numStandAnimFrames?: number;
    drop?: number;
    particleEffects?: DataParticleEffect[];
    cost?: CostElement[];
    "en-us"?: string;
}
export interface DataParticleEffect {
    ID: number;
    x: number;
    y: number;
    inFront?: boolean;
}
export interface SpriteOffsets {
    body?: Anchor;
    tail?: Anchor;
    legs: Anchor;
}
export interface FollowMetadata {
    assets?: IndigoAssets;
    v?: number;
    type: StickyType;
    vIcon: number;
    icon?: string;
    petID?: number;
    anchor?: Anchor;
    guid?: string;
    x?: number;
    y?: number;
}
export interface IndigoAssets {
    default: StickyDefault;
    prefab?: AssetsPrefab;
    reduced?: ReducedClass;
}
export interface StickyDefault {
    type?: BattleAssetType;
    ID?: number;
    anchor?: Anchor;
    noCache?: boolean;
    v?: number;
    assetKey?: string;
    hitbox?: SizeDeltaClass;
}
export interface SizeDeltaClass {
    width?: number;
    height?: number;
}
export interface AssetsPrefab {
    type: TypeElement;
    ID: number;
    hitbox?: PrefabHitbox;
}
export interface PrefabHitbox {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare enum StickyType {
    Legacy = "legacy",
    Pet = "pet",
    Spine = "spine"
}
export interface FontStyle {
    ID: number;
    assetID: number;
    type: FontStyleType;
    gender: number;
    data: FontStyleData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface FontStyleData {
    font: FontFamilyEnum;
    fontSize: number;
    fontWeight?: string;
    smoothed: boolean;
    fill: string;
    blendMode?: number;
    padding?: Anchor;
    stroke?: ColorEnum;
    strokeThickness?: number;
    shadowDistance?: number;
    shadowColor?: string;
    shadowBlur?: number;
    name?: string;
}
export declare enum FontFamilyEnum {
    ABeeZee = "ABeeZee",
    FredokaOne = "Fredoka One",
    LuckiestGuy = "Luckiest Guy",
    PaytoneOne = "Paytone One"
}
export declare enum ColorEnum {
    Black = "black",
    Cccccc = "#CCCCCC",
    Ea3423 = "#ea3423",
    Empty = "",
    Ff0000 = "#FF0000",
    Ffffff = "#ffffff",
    StrokeCccccc = "#cccccc",
    StrokeFFFFFF = "#FFFFFF",
    StrokeFfffff = "#Ffffff",
    The000000 = "#000000",
    The1023D7 = "#1023d7",
    The25152D = "#25152d",
    The2F2F2F = "#2f2f2f",
    The324287 = "#324287",
    The363636 = "#363636",
    The385Ebc = "#385EBC",
    The656565 = "#656565"
}
export declare enum FontStyleType {
    FontStyle = "fontStyle"
}
export interface Fossil {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: FossilData;
    metadata: BundleMetadata;
    name: string;
    createDate: Date;
}
export interface FossilData {
    name: string;
    count?: number;
    price: number;
    rarity: number;
    flavorText: string;
    recipe?: CostElement[];
}
export interface FSM {
    ID: number;
    assetID: number;
    type: FSMType;
    gender: number;
    data: FSMData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface FSMData {
    version: number;
    name?: string;
    states: State[];
    names?: string;
}
export interface State {
    name?: string;
    actions: ActionElement[];
    transitions?: Transition[];
}
export interface ActionElement {
    type: string;
    parameters: Parameters;
    results?: Results;
    wait?: boolean;
}
export interface Parameters {
    enable?: boolean;
    function?: string;
    context?: string;
    arguments?: Array<boolean | number | string>;
    time?: number | string;
    creature?: CreatureEnum;
    ID?: number[] | number | string;
    clip?: string;
    pack?: string;
    sound?: string;
    character?: Character;
    target?: Anchor | string;
    visible?: boolean;
    pathfinder?: PathfinderEnum;
    x?: number | null | string;
    y?: number | null | string;
    height?: number;
    xOffset?: number;
    wait?: boolean | string;
    walkSpeed?: number;
    eventName?: ParametersEventName;
    eventData?: EventData;
    overlayMode?: boolean;
    player?: CreatureEnum;
    flag?: boolean;
    name?: string;
    value?: boolean | CreatureEnum | number;
    variables?: Variables;
    screen?: string;
    hide?: boolean;
    items?: ItemsItem[] | string;
    element?: string;
    show?: boolean;
    yOffset?: number;
    delay?: number | string;
    intensity?: number;
    direction?: string;
    path?: PathElement[];
    speed?: number | null;
    alpha?: number;
    type?: IndigoType;
    properties?: EventData;
    events?: Event[];
    game?: Game;
    breadcrumbName?: string;
    featureName?: string;
    spine?: string;
    animationName?: string;
    map?: MapKey;
    loadingData?: LoadingData;
    zone?: string;
    quest?: number;
    sequence?: number | string;
    config?: Config;
    positions?: Anchor[];
    animation?: ReturnToLoopEnum;
    layer?: ParametersLayer;
    randomDelay?: boolean;
    fadeIn?: number;
    loop?: boolean;
    to?: To[];
    parent?: string;
    animationChain?: string[];
    scene?: string;
    state?: number | string;
    active?: boolean;
    animationClip?: string;
    transform?: string;
    position?: string;
    animationController?: string;
    data?: string;
    defeatZone?: MapKey;
    rocks?: string;
    shuffleCount?: string;
    startTimeElapsed?: string;
    endTimeElapsed?: string;
    startDelay?: string;
    endDelay?: string;
    controller?: string;
    service?: string;
    externalFactory?: string;
    bossID?: string;
    bossSeenID?: string;
    locomotion?: string;
    createParent?: boolean;
    xScale?: number;
    yScale?: number;
    componentType?: ComponentTypeEnum;
    playerIdentifier?: string;
    duration?: number | string;
    object?: string;
    animator?: string;
    component?: string;
    text?: string;
    playerObject?: string;
    graphic?: string;
    from?: string;
    prefabLoader?: string;
    count?: string;
    offset?: string;
    playDuration?: string;
    fadeDuration?: number;
    saveEnabled?: boolean;
    faceTransform?: string;
    reenableInputOnClose?: boolean;
    cameraTransform?: string;
    targetTransform?: string;
    cameraFollowController?: string;
    enableFollowController?: boolean;
    sourceType?: string;
    sourceID?: string;
    transactionID?: string;
    renderComponent?: string;
    durationMS?: DurationMSEnum | number;
    targetAlpha?: number;
    rectTransform?: string;
    initialAlpha?: number;
    scaleTimeMS?: number;
    correctionAmounts?: number[];
    correctionTimes?: number[];
    silent?: boolean;
    noRepeat?: boolean;
}
export declare enum ReturnToLoopEnum {
    Idle = "idle",
    Lantern1Glow = "lantern-1-glow",
    Lantern2Glow = "lantern-2-glow"
}
export declare enum Character {
    Florian = "florian",
    Gale = "gale",
    Merchant = "merchant",
    Noot = "noot",
    Pippet = "pippet",
    Puppetmaster = "puppetmaster"
}
export declare enum ComponentTypeEnum {
    AnyBooleanStateCombiner = "AnyBooleanStateCombiner",
    BooleanState = "BooleanState",
    BooleanStateVisibility = "BooleanStateVisibility",
    BreadcrumbFeature = "BreadcrumbFeature",
    Button = "Button",
    ButtonStateSoundEffect = "ButtonStateSoundEffect",
    CirclePrimitive = "CirclePrimitive",
    ColorTintFilter = "ColorTintFilter",
    CounterText = "CounterText",
    DynamicProgressBar = "DynamicProgressBar",
    ElementalPetDisplay = "ElementalPetDisplay",
    GameObjectTransition = "GameObjectTransition",
    Graphic = "Graphic",
    Image = "Image",
    InputOverlay = "InputOverlay",
    ItemAssetIcon = "ItemAssetIcon",
    ItemCard = "ItemCard",
    LegacyTransform = "LegacyTransform",
    LegacyTransformRelay = "LegacyTransformRelay",
    LocalizationKeyText = "LocalizationKeyText",
    LocalizedText = "LocalizedText",
    Log = "Log",
    LoggedInPlayerAppearanceLoader = "LoggedInPlayerAppearanceLoader",
    LootCardComponent = "LootCardComponent",
    Mask = "Mask",
    MaskRenderComponent = "MaskRenderComponent",
    NotificationBadge = "NotificationBadge",
    PetElementDisplay = "PetElementDisplay",
    PlaySoundEffect = "PlaySoundEffect",
    PlayerAppearanceSelector = "PlayerAppearanceSelector",
    PlayerFace = "PlayerFace",
    PlayerHair = "PlayerHair",
    PlayerHat = "PlayerHat",
    PlayerHead = "PlayerHead",
    PlayerKeyFrameAnimator = "PlayerKeyFrameAnimator",
    PlayerLoadoutORBSlotDisplay = "PlayerLoadoutOrbSlotDisplay",
    PlayerWeapon = "PlayerWeapon",
    ProgressBarAnchor = "ProgressBarAnchor",
    ProgressBarComponent = "ProgressBarComponent",
    RectTransform = "RectTransform",
    RectanglePrimitive = "RectanglePrimitive",
    SegmentAnalyticsButton = "SegmentAnalyticsButton",
    SegmentAnalyticsUIInterface = "SegmentAnalyticsUiInterface",
    SegmentButtonPropertiesProvider = "SegmentButtonPropertiesProvider",
    SegmentUIInterfacePropertiesProvider = "SegmentUiInterfacePropertiesProvider",
    SizeToChildren = "SizeToChildren",
    SlicedGraphic = "SlicedGraphic",
    SortingAnchor = "SortingAnchor",
    Spine = "Spine",
    SpineAnimator = "SpineAnimator",
    Text = "Text",
    TimeRemainingTemplateUpdate = "TimeRemainingTemplateUpdate",
    Timeout = "Timeout",
    TimerText = "TimerText",
    Transform = "Transform",
    WeeklyChallengePanelController = "WeeklyChallengePanelController"
}
export declare enum Config {
    GoldenPageConfig = "$goldenPageConfig",
    MonsterConfig = "$monsterConfig",
    PageConfig = "$pageConfig"
}
export declare enum CreatureEnum {
    Applepot = "$applepot",
    Athena = "$athena",
    ChosenMonster = "$chosenMonster",
    Gale = "$gale",
    Gnome = "$gnome",
    Master = "$master",
    Monster = "$monster",
    MonsterOne = "$monsterOne",
    MonsterTwo = "$monsterTwo",
    Noot = "$noot",
    Pippet = "$pippet",
    Player = "$player",
    Puppet = "$puppet",
    Puppetmaster = "$puppetmaster",
    Warden = "$warden"
}
export declare enum DurationMSEnum {
    BannerShowTimeMS = "$bannerShowTimeMS",
    CardFadeDuration = "$cardFadeDuration"
}
export interface EventData {
    type: EventDataType;
    name: string;
}
export declare enum EventDataType {
    AcademyArchives = "AcademyArchives",
    Tutorial2 = "tutorial_2",
    TutorialSteps1 = "tutorial_steps_1"
}
export declare enum ParametersEventName {
    GameComplete = "game_complete"
}
export interface Event {
    eventType: EventType;
    eventData: EventEventData;
}
export interface EventEventData {
    funnelName: FunnelName;
    funnelType: FunnelType;
    stepName: string;
}
export declare enum FunnelName {
    Onboarding = "Onboarding"
}
export declare enum FunnelType {
    Tutorial = "tutorial"
}
export declare enum EventType {
    FunnelAdvanced = "Funnel Advanced"
}
export declare enum Game {
    Game = "$game"
}
export interface ItemsItem {
    type: string;
    ID: number;
    data?: PurpleData;
}
export interface PurpleData {
    level: number;
    stars: number;
}
export declare enum ParametersLayer {
    Above = "above",
    Content = "content",
    Empty = "",
    Input = "input",
    UIPrompt = "ui-prompt",
    Worldui = "worldui"
}
export interface LoadingData {
    fadeIn: boolean;
    time: number;
    fadeOut: boolean;
}
export interface PathElement {
    x: number | string;
    y: number | string;
}
export declare enum PathfinderEnum {
    Path = "$path",
    Pathfinder = "$pathfinder",
    PlayerPathfinder = "$playerPathfinder"
}
export interface To {
    properties: ToProperties;
    duration: number;
    ease: Ease;
    delay?: number;
}
export declare enum Ease {
    Linear = "Linear",
    Quad = "Quad",
    QuadEaseOut = "Quad.easeOut"
}
export interface ToProperties {
    alpha?: number;
    x?: number;
    y?: number;
    scaleX?: number;
    scaleY?: number;
}
export declare enum IndigoType {
    GameCompleteV3 = "game_complete_v3"
}
export interface Variables {
    game?: Game;
    monster?: string;
    gnome?: CreatureEnum;
    path?: PathfinderEnum;
    x?: number;
    shadowWyrmContainer?: string;
    shadowWyrmSpine?: string;
    emergeAnimation?: string;
    shadowWyrmBoss?: string;
    playerLocomotion?: string;
    circleTrigger?: string;
    monsterTransform?: string;
    chatBubble?: string;
    monsterWalkAnimator?: string;
    monsterWalkPosition?: string;
    monsterSpine?: string;
    sparklesGameObject?: string;
    supply?: string;
    playerAnimationController?: string;
    supplyTransform?: string;
    supplyStartingPosition?: string;
    supplyPosition?: string;
    rotateSupply?: boolean;
    morphExpiration?: string;
}
export interface Results {
    isVictory?: string;
    newRockPositions?: string;
    dialogueSelection?: string;
    answerCorrect?: string;
    skillData?: string;
    responseTime?: string;
    instance?: string;
    component?: string;
}
export interface Transition {
    state: string;
    conditions?: TransitionCondition[];
}
export interface TransitionCondition {
    value: string;
    lessThan?: number | string;
    equals?: CreatureEnum;
    type?: OperatorEnum;
    test?: boolean | number | null | string;
}
export declare enum OperatorEnum {
    Equals = "equals",
    GreaterThan = "greaterThan",
    NotEquals = "notEquals"
}
export declare enum FSMType {
    FSM = "fsm"
}
export interface Fx {
    ID: number;
    assetID: number;
    type: FxType;
    gender: number;
    data: FxData;
    metadata: FxMetadata;
    name: string;
    createDate: Date;
}
export interface FxData {
    spineID: number | null;
    type: IndecentType;
    name: string;
    projectileCount: number;
    delay?: number;
    prefabID?: number | string;
}
export declare enum IndecentType {
    Firework = "firework",
    Projectile = "projectile"
}
export interface FxMetadata {
    assets?: IndecentAssets;
}
export interface IndecentAssets {
    default?: IconClass;
}
export interface IconClass {
    type: HorizontalType;
    assetKey: string;
}
export declare enum FxType {
    Fx = "fx"
}
export interface GameFeed {
    ID: number;
    assetID: number;
    type: GameFeedType;
    gender: number;
    data: GameFeedData;
    metadata: GameFeedMetadata;
    name: string;
    createDate: Date;
}
export interface GameFeedData {
    key: string;
    category: string;
    notification: Notification;
    modal: Modal;
    feedText: string;
    icon: string;
    autoShare: boolean;
    eventAction: EventAction;
    metaData?: MetaData;
}
export declare enum EventAction {
    Empty = "",
    MemberAd = "memberAd",
    Teleport = "teleport"
}
export interface MetaData {
    equals?: MetaDataEquals;
}
export interface MetaDataEquals {
    type: TypeElement[];
}
export interface Modal {
    title: TitleEnum;
    body: string;
    action: ActionEnum;
}
export declare enum ActionEnum {
    CheckOutLamplightTown = "Check out Lamplight Town",
    CheckOutZoneName = "Check out ${zoneName}",
    Empty = ""
}
export declare enum TitleEnum {
    Empty = "",
    YourFriendBoughtANewItem = "Your friend bought a new item!",
    YourFriendWonANewItem = "Your friend won a new item!"
}
export interface Notification {
    self: string;
    friend: string;
}
export interface GameFeedMetadata {
    equals?: MetadataEquals;
}
export interface MetadataEquals {
    storeID: number[];
    type: TypeElement[];
}
export declare enum GameFeedType {
    GameFeed = "gameFeed"
}
export interface Gender {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: GenderData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface GenderData {
    member: number;
    name: string;
    saveDataID: SaveDataID;
    price: number;
    cost: CostElement[];
    flavorText: string;
}
export interface Generic {
    ID: number;
    assetID: number;
    type: SuccessType;
    gender: number;
    data: GenericData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface GenericData {
    name: string;
    sections?: Sections;
    groups?: Groups;
    bountyPetIDs?: number[];
    bountyDurationSeconds?: number;
    totalBounties?: number;
    totalMemberBounties?: number;
    tiers?: TierElement[] | {
        [key: string]: TierValue;
    };
    monsterPoolPetIDs?: number[];
    bountyElementAlignmentChance?: number;
    unitLevel?: UnitLevel;
    teams?: Teams;
    spellTierCount?: number;
    maxEnergy?: number;
    enemyWizardMPGain?: number;
    homeWizardMaxMPGain?: number;
    elementalAdvantages?: ElementalAdvantages;
    elementalDisadvantages?: ElementalAdvantages;
    allOutAttackDamage?: {
        [key: string]: {
            [key: string]: number;
        };
    };
    allOutAttackBossDamage?: {
        [key: string]: {
            [key: string]: number;
        };
    };
    minPlayerHeartsOnEndBattle?: number;
    difficultySwitchChances?: number[];
    singleShot?: Aoe[];
    aoe?: Aoe[];
    maxTier?: number;
    guardianMaps?: {
        [key: string]: GuardianMap;
    };
    dialogueIDs?: number[];
    spellMissCoolDown?: number;
    restrictedBattleActions?: string[];
    opponentBackpacks?: OpponentBackpack[];
    itemMaxCount?: ItemMaxCount;
    interactables?: {
        [key: string]: InteractableValue;
    };
    frequency?: string;
    locationIDs?: string[];
    safeTeleportLocations?: SafeTeleportLocations;
    ultimatesData?: UltimatesDatum[];
    weeklyRewards?: WeeklyReward[];
    dailyBattleMonsterIDs?: number[];
    interactableMonsterIDs?: number[];
    progressPointsIncrement?: number;
    numFreeTiers?: number;
    benchData?: BenchDatum[];
    rewardOrder?: any[];
    uiAtlas?: string;
    contentTemplateGuid?: string;
    configurableElements?: ConfigurableElements;
    sets?: Set[];
}
export interface Aoe {
    level: number;
    spellID: number;
}
export interface BenchDatum {
    petID: number;
    bench: BenchDatumBench[];
}
export interface BenchDatumBench {
    petID: number;
    weight: number;
}
export interface ConfigurableElements {
    contentImageGuid: string;
    title: SubtitleClass;
    subtitle: SubtitleClass;
    button: ConfigurableElementsButton;
    segmentProperties: SegmentProperties;
}
export interface ConfigurableElementsButton {
    text: ButtonText;
    buttonAction: ButtonAction;
}
export interface ButtonAction {
    actionName: ActionName;
}
export declare enum ActionName {
    CloseThisPrompt = "closeThisPrompt",
    OpenMembershipParent = "openMembershipParent"
}
export declare enum ButtonText {
    BecomeAMemberNow = "Become a member now!",
    LockedPlayAtHome = "Locked: Play at home!"
}
export interface SegmentProperties {
    interfaceName: string;
    buttonName: ButtonName;
}
export declare enum ButtonName {
    Empty = "",
    OpenMembershipParent = "open-membership-parent"
}
export interface SubtitleClass {
    colour: Colour;
    size: number;
    text: string;
}
export declare enum Colour {
    Ffffff = "#ffffff",
    The000000 = "#000000",
    The000099 = "#000099",
    The0000Ff = "#0000FF",
    The898989 = "#898989"
}
export interface ElementalAdvantages {
    fire: EarthElement[];
    water: EarthElement[];
    earth: EarthElement[];
    plant: EarthElement[];
    storm: EarthElement[];
    mech: EarthElement[];
    ice: EarthElement[];
    shadow: EarthElement[];
    wizard?: AstralElement[];
    astral?: AstralElement[];
}
export interface Groups {
    start: number[];
    middle: number[];
    end: number[];
}
export interface GuardianMap {
    zoneName: string;
    scenePrefabID: number;
    noOrbAlign?: boolean;
}
export interface InteractableValue {
    assetID: number;
}
export interface ItemMaxCount {
    follow: number;
    hat: number;
    outfit: number;
    boots: number;
    weapon: number;
    item: number;
    orb: number;
    dorm: number;
    default: number;
}
export interface OpponentBackpack {
    level: number;
    itemTableID: number;
}
export interface SafeTeleportLocations {
    "shiverchill-A5": string[];
    "bonfire_spire-C3": string[];
}
export interface Sections {
    start: EasyPath;
    easyPath: EasyPath;
    hardPath: EasyPath;
    end: EasyPath;
}
export interface EasyPath {
    mapPoolName: string;
    roomCount: number;
    objects: Objects;
    maxEncountersPerRoom: number;
}
export interface Objects {
    easyEncounter: number;
    mediumEncounter: number;
    hardEncounter: number;
    goalEncounter: number;
    basicChest: number;
    memberChest: number;
    interactable: number;
}
export interface Set {
    id: number;
    toEvaluate: ToEvaluate;
    success: Success;
}
export interface Success {
    assetType: SuccessType;
    assetID: number;
}
export declare enum SuccessType {
    Generic = "generic"
}
export interface ToEvaluate {
    matchesAll?: MatchesAll[];
    matchesAny?: MatchesAny[];
}
export interface MatchesAll {
    conditions?: MatchesAllCondition[];
    matchesAny?: MatchesAny[];
}
export interface MatchesAllCondition {
    condition: ConditionEnum;
    operator: OperatorEnum;
    value: boolean | string;
}
export declare enum ConditionEnum {
    IsPlayingAtSchool = "isPlayingAtSchool",
    WasTriggeredBy = "wasTriggeredBy"
}
export interface MatchesAny {
    conditions: MatchesAnyCondition[];
}
export interface MatchesAnyCondition {
    condition: ConditionEnum;
    operator: OperatorEnum;
    value: string;
}
export interface Teams {
    limit: UnitLevel;
    units: UnitLevel;
}
export interface TierElement {
    battleReq: number;
    rewards: CostElement[];
    membershipReward?: CostElement;
}
export interface TierValue {
    member?: ReducedClass;
    nonMember?: NonMember;
    easy?: Easy;
    medium?: Easy;
    hard?: Easy;
    guardianId?: number;
    guardianMapKey?: number;
    interactables?: Interactables;
    lootTables?: number[];
    baseStatsIncreaseAffixIDs?: number[];
    missCooldown?: number;
}
export interface Easy {
    teamSize: UnitLevel;
    possibleAffixIDs: number[];
    lootTables: number[];
}
export interface Interactables {
    itemTableID: number;
}
export interface NonMember {
    possibleAffixIDs: number[];
    loot: Loot[];
    randomLootTableIDs: number[];
    baseStatsIncreaseAffixIDs?: number[];
}
export interface Loot {
    itemTableID: number;
    dropCount: number;
}
export interface UltimatesDatum {
    name: string;
    id: number;
    locationIDs: string[];
    loreDialogueIDs: number[];
}
export interface WeeklyReward {
    progressChests: ProgressChest[];
    reward: WeeklyRewardReward;
}
export interface ProgressChest {
    requirement: number;
    itemTable: number;
}
export interface WeeklyRewardReward {
    requirement: number;
    type: TypeElement;
    ID: number;
}
export interface GiftBox {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: GiftBoxData;
    metadata: BundleMetadata;
    name: string;
    createDate: Date;
}
export interface GiftBoxData {
    name: string;
    isPurchaseable: boolean;
    questions: number;
    items: any[];
}
export interface HairElement {
    ID: number;
    assetID: number;
    type: HairType;
    gender: number;
    data: EyeColorData;
    metadata: HairMetadata;
    name: string;
    createDate: Date;
}
export interface HairMetadata {
    x: number;
    y: number;
    pivot: Anchor;
    vIcon: number;
    type: FemaleType;
    v: number;
    noCache?: boolean;
}
export declare enum HairType {
    Boots = "boots",
    Currency = "currency",
    Dorm = "dorm",
    Follow = "follow",
    Gold = "gold",
    Hair = "hair",
    HairColor = "hairColor",
    Hat = "hat",
    Item = "item",
    ORB = "orb",
    Outfit = "outfit",
    UltimatesQuestItem = "ultimatesQuestItem",
    Weapon = "weapon"
}
export interface Hat {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: BootData;
    metadata: HatMetadata;
    name: string;
    createDate: Date;
}
export interface HatMetadata {
    v: number;
    x: number;
    y: number;
    type: FemaleType;
    pivot: Anchor;
    vIcon: number;
    hairHide: number[];
    hideReplace: number | string;
    assetVersions?: Version[];
    iconVersions?: Version[];
    noCache?: boolean;
    cacheError?: boolean;
}
export interface InteractableElement {
    ID: number;
    assetID: number;
    type: InteractableType;
    gender: number;
    data: InteractableData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface InteractableData {
    name: string;
    cooldownTimeMS: number;
    dropTables: number[];
    questDropTables: QuestDropTable[];
    defaultTableWeight: number;
    dropsMin: number;
    dropsMax: number;
}
export interface QuestDropTable {
    weight: number;
    questItemID: number;
    itemTable: number;
}
export declare enum InteractableType {
    Interactable = "interactable"
}
export interface GameDataItem {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: FluffyData;
    metadata: ItemMetadata;
    name: string;
    createDate: Date;
}
export interface FluffyData {
    name: string;
    price: number;
    member: number;
    rarity: number;
    flavorText: string;
    type?: HilariousType;
    target?: TargetEnum;
    healAmount?: number;
    drop?: number;
    effect?: EffectClass | null;
    effectDescription?: string;
    affix?: DataAffix;
    subType?: string;
    element?: string;
    potency?: number;
    cost?: CostElement[];
    affixID?: number;
}
export interface DataAffix {
    type: StatBonusType;
    elements?: EarthElement[];
    amount: number;
    highPotency: boolean;
}
export declare enum StatBonusType {
    CritChance = "critChance",
    Damage = "damage",
    ElementalResistance = "elementalResistance"
}
export interface EffectClass {
    fx?: number;
    transform?: TypeElement;
    ID?: number;
    time?: number;
}
export declare enum TargetEnum {
    Team = "team",
    Unit = "unit"
}
export declare enum HilariousType {
    Consumable = "consumable",
    Food = "food",
    Potion = "potion"
}
export interface ItemMetadata {
    vIcon: number;
    icon?: IconEnum;
    assets?: HilariousAssets;
    v?: number;
    type?: FemaleType;
}
export interface HilariousAssets {
    icon?: AssetsIcon;
    morphedApperance?: AdventureRewardElement;
}
export interface AssetsIcon {
    type: FemaleType;
    ID: number;
    frame: string;
}
export declare enum IconEnum {
    Empty = "",
    Item110 = "item/110"
}
export interface ItemTable {
    ID: number;
    assetID: number;
    type: ItemTableType;
    gender: number;
    data: ItemTableData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface ItemTableData {
    items: Fallback[];
    fallback?: Fallback;
    name: string;
}
export interface Fallback {
    type: HairType;
    ID?: number;
    quantity?: UnitLevel | number;
    weight?: number;
    N?: UnitLevel;
}
export declare enum ItemTableType {
    ItemTable = "itemTable"
}
export interface Key {
    ID: number;
    assetID: number;
    type: KeyType;
    gender: number;
    data: KeyData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface KeyData {
    name: string;
    levels: number;
    flavorText: string;
    quest?: number | null;
    price?: number;
}
export declare enum KeyType {
    Key = "key"
}
export interface MathTown {
    ID: number;
    assetID: number;
    type: MathTownDecorType;
    gender: number;
    data: MathTownDecorData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface MathTownDecorData {
    name: string;
    tag?: string;
    description: string;
    element: number;
    decorPositions?: Anchor[];
}
export declare enum MathTownDecorType {
    MathTownDecor = "mathTownDecor",
    MathTownFrame = "mathTownFrame"
}
export interface MathTownInterior {
    ID: number;
    assetID: number;
    type: MathTownInteriorType;
    gender: number;
    data: MathTownInteriorData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface MathTownInteriorData {
    name: string;
    tag?: string;
    description: string;
    element: number;
    flavorText?: string;
    occupantLevels: number[];
}
export declare enum MathTownInteriorType {
    MathTownInterior = "mathTownInterior"
}
export interface Mount {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: MountData;
    metadata: MountMetadata;
    name: string;
    createDate: Date;
}
export interface MountData {
    name: string;
    flavorText: string;
    member: number;
    drop?: number;
    price: number;
    rarity: number;
    cost?: CostElement[];
    effects: number[];
}
export interface MountMetadata {
    vIcon: number;
    type: FemaleType;
    assets: AmbitiousAssets;
}
export interface AmbitiousAssets {
    below: Above;
    above: Above;
    particles: Particles;
}
export interface Above {
    type: FemaleType;
    v: number;
    x: number;
    y?: number;
}
export interface NameElement {
    ID: number;
    assetID: number;
    type: NameType;
    gender: number;
    data: NameData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface NameData {
    name: string;
    value: string;
    type: number;
    deprecated?: boolean;
    gender?: number;
}
export declare enum NameType {
    Name = "name"
}
export interface Nickname {
    ID: number;
    assetID: number;
    type: NicknameType;
    gender: number;
    data: NicknameData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface NicknameData {
    value: string;
    name?: string;
}
export declare enum NicknameType {
    Nickname = "nickname"
}
export interface ORB {
    ID: number;
    assetID: number;
    type: HairType;
    gender: number;
    data: ORBData;
    metadata: BundleMetadata;
    name: string;
    createDate: Date;
}
export interface ORBData {
    name: string;
    flavorText: string;
    tier: number;
    rarity: number;
    affixIDs: number[];
}
export interface Outfit {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: OutfitData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface OutfitData {
    drop: number;
    name: string;
    price?: number;
    member: number;
    rarity: number;
    effects: Array<number[] | number | string>;
    flavorText: string;
    id?: number;
    asset_id?: number;
    create_date?: Date;
    update_date?: Date;
    cost?: CostElement[];
    "en-us"?: string;
}
export interface GameDataParticleEffect {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: ParticleEffectData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface ParticleEffectData {
    name: string;
    particle: Particle;
    emitter: Emitter;
}
export interface Emitter {
    repeat: number;
    frequency: UnitLevel | number;
    burstFrequency?: UnitLevel;
}
export interface Particle {
    image: string;
    frame?: string;
    lifespan: UnitLevel | number;
    vy: UnitLevel;
    vx?: UnitLevel;
    scale?: Scale;
    alpha?: Alpha;
    rotation?: Rotation;
    animations?: ParticleAnimations;
}
export interface Alpha {
    value: number;
    control: Anchor[];
}
export interface ParticleAnimations {
    clouds: Clouds;
}
export interface Clouds {
    frames: string[];
    frameRate: number;
    loop: boolean;
}
export interface Rotation {
    initial: UnitLevel;
    delta: UnitLevel;
}
export interface Scale {
    value: UnitLevel | number;
    control: Anchor[];
}
export interface GameDataPet {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: PetData;
    metadata: PetMetadata;
    name: string;
    createDate: Date;
}
export interface PetData {
    life?: Growth;
    ordinal?: number;
    name: string;
    curve: Curve[];
    power?: Growth;
    growth?: Growth;
    rarity?: number;
    element: EarthElement;
    flavorText: string;
    effects?: number[];
    price?: number;
    statHealth: number;
    statPower: number;
    foreignSpellPools: Array<number[]>;
    nativeSpells: NativeSpell[];
    assetType?: BattleAssetType;
    R?: number;
    special?: boolean;
    bench?: DataBench[];
    mp?: number;
    spellUnlock?: SpellUnlock[];
    spellLoadouts?: SpellLoadout[];
    member?: number;
    adText?: string;
    unique?: boolean;
    unlockFollow?: number;
    epicSpell?: EpicSpell;
    cost?: CostElement[];
}
export interface DataBench {
    weight?: number;
    petID?: number;
    spell?: number;
}
export interface Curve {
    a?: number;
    lvl: number;
    e?: number;
    evolveID?: number;
}
export interface EpicSpell {
    name: string;
    spellId: number;
    iconId: number;
}
export declare enum Growth {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F-",
    GrowthA = "A-",
    GrowthB = "B+",
    GrowthC = "C+",
    GrowthD = "D+",
    PurpleA = "A+",
    PurpleB = "B-",
    PurpleC = "C-",
    PurpleD = "D-"
}
export interface NativeSpell {
    spell: number;
}
export interface PetMetadata {
    v?: number;
    type: FemaleType;
    vIcon: number;
    assets: CunningAssets;
    uiConfig?: UIConfig;
    rewardsExclusive?: boolean;
    lootTableIDs?: number[];
}
export interface CunningAssets {
    small?: Above;
    default?: IndigoDefault;
    reduced?: Reduced;
    spine?: Spine;
    card?: Card;
    tamingView?: Card;
}
export interface Card {
    ID?: number;
    type: BattleAssetType;
    cardScale?: number;
    x?: number;
    y?: number;
    assetKey?: string;
    viewerScale?: number;
}
export interface IndigoDefault {
    h?: number;
    v?: number;
    w?: number;
    x?: number;
    type: BattleAssetType;
    pivotX?: number;
    battleScale?: number;
    ID?: number;
    hitbox?: ReducedHitbox;
    flip?: boolean;
    assetKey?: string;
}
export interface Reduced {
    h?: number;
    v?: number;
    w?: number;
    x?: number;
    type: BattleAssetType;
    pivotX?: number;
    hitbox?: ReducedHitbox;
    ID?: number;
    assetKey?: string;
    cardScale?: number;
    y?: number;
}
export interface Spine {
    type: BattleAssetType;
    ID: number;
    battleScale: number;
}
export interface UIConfig {
    type: ElementType;
    name: TypeElement;
    anchorX: number;
    anchorY: number;
    relativeX: number;
    relativeY: number;
    spineKey: string;
    animation: string;
    loop: boolean;
}
export declare enum ElementType {
    Button = "Button",
    ButtonToggle = "ButtonToggle",
    Graphic = "Graphic",
    InputFieldElement = "InputFieldElement",
    Mask = "Mask",
    PhaserButtonWrapper = "PhaserButtonWrapper",
    ScrollBar = "ScrollBar",
    ScrollView = "ScrollView",
    SlicedBanner = "SlicedBanner",
    SlicedGraphic = "SlicedGraphic",
    Slider = "Slider",
    SpineUI = "SpineUI",
    Tab = "Tab",
    TabButton = "TabButton",
    Text = "Text",
    UIElement = "UIElement",
    VideoGraphic = "VideoGraphic",
    WebFontText = "WebFontText",
    WoodSlicedPanel = "WoodSlicedPanel"
}
export interface PrefabElement {
    ID?: number;
    guid?: string;
    assetType?: TypeElement;
    type?: TypeElement;
    data: PrefabData;
    legacyID?: number;
    hash?: string;
    assetID?: number;
    gender?: number;
    metadata?: ReducedClass;
    name?: string;
    createDate?: Date;
}
export interface PrefabData {
    filename?: string;
    prefab: DataPrefab;
    name?: string;
    "en-us"?: string;
}
export interface DataPrefab {
    active?: boolean;
    children?: PrefabChild[];
    components?: PrefabComponent[];
    guid: string;
    name: string;
    collapsed?: boolean;
    layer?: string;
    nameEditMode?: boolean;
    tuid?: string;
    templateKey?: string;
    template?: number;
    metadata?: ReducedClass;
}
export interface PrefabChild {
    children?: PurpleChild[];
    components: MagentaComponent[];
    guid: string;
    name?: null | string;
    active?: boolean;
    tuid?: string;
    templateKey?: string;
    collapsed?: boolean;
    nameEditMode?: boolean;
    layer?: string;
    template?: number;
    value?: string;
}
export interface PurpleChild {
    children?: FluffyChild[];
    components?: CunningComponent[];
    guid: null | string;
    name?: null | string;
    active?: boolean;
    tuid?: string;
    templateKey?: string;
    collapsed?: boolean;
    nameEditMode?: boolean;
    value?: string;
    template?: number;
    layer?: PurpleLayer;
    properties?: ReducedClass;
}
export interface FluffyChild {
    children?: TentacledChild[];
    components: AmbitiousComponent[];
    guid: null | string;
    name?: null | string;
    active?: boolean;
    tuid?: string;
    templateKey?: string;
    value?: string;
    collapsed?: boolean;
    nameEditMode?: boolean;
    layer?: PurpleLayer;
    template?: number;
}
export interface TentacledChild {
    children?: StickyChild[];
    components?: HilariousComponent[];
    guid?: string;
    name?: string;
    tuid?: string;
    value?: string;
    active?: boolean;
    collapsed?: boolean;
    nameEditMode?: boolean;
    templateKey?: string;
    layer?: ParametersLayer;
    template?: number;
}
export interface StickyChild {
    children?: IndigoChild[];
    components?: IndecentComponent[];
    guid?: string;
    name?: string;
    active?: boolean;
    tuid?: string;
    value?: string;
    nameEditMode?: boolean;
    template?: number;
    collapsed?: boolean;
    templateKey?: string;
    properties?: ReducedClass;
    layer?: ParametersLayer;
}
export interface IndigoChild {
    children?: IndecentChild[];
    components: IndigoComponent[];
    guid?: string;
    name?: string;
    nameEditMode?: boolean;
    tuid?: string;
    active?: boolean;
    collapsed?: boolean;
    value?: string;
    layer?: ParametersLayer;
    templateKey?: string;
    template?: number;
}
export interface IndecentChild {
    children?: HilariousChild[];
    components?: StickyComponent[];
    guid?: string;
    name?: string;
    nameEditMode?: boolean;
    tuid?: string;
    active?: boolean;
    value?: string;
    collapsed?: boolean;
    properties?: ReducedClass;
    layer?: ParametersLayer;
}
export interface HilariousChild {
    children?: AmbitiousChild[];
    components?: TentacledComponent[];
    guid?: string;
    name?: string;
    nameEditMode?: boolean;
    tuid?: string;
    active?: boolean;
    collapsed?: boolean;
    value?: string;
    layer?: ParametersLayer;
    properties?: ReducedClass;
}
export interface AmbitiousChild {
    children?: CunningChild[];
    collapsed?: boolean;
    components?: FluffyComponent[];
    guid: string;
    name?: string;
    nameEditMode?: boolean;
    tuid?: string;
    active?: boolean;
    value?: string;
    layer?: string;
    properties?: ReducedClass;
}
export interface CunningChild {
    children: MagentaChild[];
    components: PurpleComponent[];
    guid: string;
    name: string;
    tuid: string;
    active?: boolean;
    value?: string;
    collapsed?: boolean;
    nameEditMode?: boolean;
    layer?: string;
}
export interface MagentaChild {
    active?: boolean;
    children: MagentaChild[];
    components: PurpleComponent[];
    guid: string;
    name: string;
    tuid: string;
    layer?: string;
}
export interface PurpleComponent {
    guid: string;
    properties: ReducedClass;
    type: ComponentTypeEnum;
    tuid: string;
    collapsed?: boolean;
}
export interface FluffyComponent {
    collapsed?: boolean;
    guid?: null | string;
    properties: PurpleProperties;
    tuid?: string;
    type?: ComponentTypeEnum;
}
export interface PurpleProperties {
    roundRelativeValues?: boolean;
    x?: number;
    y?: number;
    onAssetChanged?: any[];
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowDistance?: number;
    dropShadowColor?: Colour;
    dropShadow?: boolean;
    width?: number;
    height?: number;
    anchorX?: number;
    anchorY?: number;
    atlas?: string;
    frame?: string;
    localizationKey?: string;
    font?: FontFamilyEnum;
    fontSize?: number;
    fill?: Colour;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
}
export declare enum BoundsAlignH {
    Bottom = "bottom",
    Center = "center",
    Left = "left",
    Middle = "middle",
    Right = "right",
    Top = "top"
}
export interface TentacledComponent {
    collapsed?: boolean;
    guid?: null | string;
    properties: FluffyProperties;
    tuid?: string;
    type?: ComponentTypeEnum;
}
export interface FluffyProperties {
    anchorMax?: Anchor;
    anchorMin?: Anchor;
    anchoredPivotOffset?: Anchor;
    localPosition?: Anchor;
    localRotation?: number;
    localScale?: Anchor;
    pivot?: Anchor;
    sizeDelta?: SizeDeltaClass;
    booleanState?: string;
    showWhenStateIsTrue?: boolean;
    atlas?: string;
    attachToCamera?: boolean;
    frame?: Frame | null;
    onLoaded?: any[];
    align?: BoundsAlignH;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    fill?: Colour;
    font?: FontFamilyEnum;
    fontSize?: number;
    text?: PropertiesText;
    center?: BottomCenter;
    leftCenter?: BottomCenter;
    rightCenter?: BottomCenter;
    roundRelativeValues?: boolean;
    x?: number;
    y?: number;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowDistance?: number;
    dropShadowColor?: Colour;
    dropShadow?: boolean;
    filter?: null;
    fontStyle?: Font;
    fontWeight?: Font;
    stroke?: Colour;
    strokeThickness?: number;
    wordWrap?: boolean;
    wordWrapWidth?: number;
    blendMode?: number;
    lineSpacing?: number;
    paddingX?: number;
    paddingY?: number;
    tint?: number;
    underline?: boolean;
    underlineStartIndex?: null;
    underlineEndIndex?: null;
    resizeRectTransform?: boolean;
    localizationKey?: string;
    localizedText?: string;
    width?: number;
    height?: number;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    relativeWidth?: number;
    relativeHeight?: number;
    onAssetChanged?: any[];
}
export interface BottomCenter {
    atlas?: string;
    flipX?: boolean;
    flipY?: boolean;
    frame: string;
    rotation?: number;
}
export declare enum Font {
    Empty = "",
    Normal = "normal"
}
export declare enum Frame {
    IconMiniTicket = "icon-mini-ticket",
    IconsCloseWhite = "icons/close-white",
    IconsUnlockWhite = "icons/unlock-white"
}
export declare enum PropertiesText {
    Empty = "+",
    Text = ""
}
export interface StickyComponent {
    collapsed?: boolean;
    guid?: null | string;
    properties: TentacledProperties;
    tuid?: string;
    type?: string;
}
export interface TentacledProperties {
    anchorMax?: Anchor;
    anchorMin?: Anchor;
    anchoredPivotOffset?: Anchor;
    localPosition?: LocalPosition;
    localRotation?: number;
    localScale?: Anchor;
    pivot?: Anchor;
    sizeDelta?: SizeDeltaClass;
    attachToCamera?: boolean;
    bottomCenter?: BottomCenter;
    bottomLeft?: BottomCenter;
    bottomRight?: BottomCenter;
    center?: BottomCenter;
    leftCenter?: BottomCenter;
    rightCenter?: BottomCenter;
    topCenter?: BottomCenter;
    topLeft?: BottomCenter;
    topRight?: BottomCenter;
    booleanState?: string;
    showWhenStateIsTrue?: boolean;
    alpha?: number;
    onEvent?: any[];
    onLoaded?: CallPromiseFunction[];
    spineGUID?: string;
    animation?: string;
    loopAnimation?: boolean;
    atlas?: string;
    frame?: string;
    iconTarget?: string;
    itemAssetType?: HairType;
    align?: BoundsAlignH;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    fill?: ColorEnum;
    font?: FontFamilyEnum;
    fontSize?: number;
    text?: string;
    booleanValue?: boolean;
    onValueChanged?: any[];
    booleanStates?: string[];
    color?: ColorEnum;
    filled?: boolean;
    radius?: number;
    roundRelativeValues?: boolean;
    x?: number;
    y?: number;
    face?: string;
    hair?: string;
    hat?: string;
    head?: string;
    neck?: null;
    onAppearanceDone?: CallPromiseFunction[];
    onAppearanceLoaded?: any[];
    outfit?: null;
    weapon?: null;
    petIcon?: string;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowDistance?: number;
    dropShadowColor?: Colour;
    dropShadow?: boolean;
    filter?: null;
    additionalWidth?: number;
    additionalHeight?: number;
    resizeWidth?: boolean;
    resizeHeight?: boolean;
    onResizeComplete?: any[];
    singleImageID?: null;
    maxPosition?: number;
    relativeX?: number;
    relativeY?: number;
    relativeWidth?: number;
    relativeHeight?: number;
    anchorX?: number;
    anchorY?: number;
    height?: number;
    width?: number;
    localizationKey?: string;
    scaleX?: number;
    scaleY?: number;
    onEnabledClick?: OnKeyDownElement[];
}
export interface LocalPosition {
    x?: number;
    y?: number;
    _magnitude?: number;
    _magnitudeSq?: number;
    _recalculateMagnitude?: boolean;
    _recalculateMagnitudeSq?: boolean;
    _x?: number | null;
    _y?: number | null;
}
export interface CallPromiseFunction {
    functionName: string;
    guid: string;
}
export interface OnKeyDownElement {
    guid: string;
    functionName: string;
    args?: number[];
}
export interface IndigoComponent {
    collapsed?: boolean;
    guid?: null | string;
    properties: StickyProperties;
    tuid?: string;
    type?: string;
}
export interface StickyProperties {
    relativeHeight?: number;
    relativeWidth?: number;
    anchorMax?: Anchor;
    anchorMin?: Anchor;
    anchoredPivotOffset?: Anchor;
    localPosition?: LocalPosition;
    localRotation?: number;
    localScale?: Anchor;
    pivot?: Anchor;
    sizeDelta?: SizeDeltaClass;
    alpha?: number;
    attachToCamera?: boolean;
    color?: ColorEnum;
    filled?: boolean;
    radius?: number;
    align?: BoundsAlignH;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    font?: FontFamilyEnum;
    fontSize?: number;
    text?: string;
    center?: BottomCenter;
    leftCenter?: BottomCenter;
    rightCenter?: BottomCenter;
    fill?: string;
    localizationKey?: string;
    localizedText?: string;
    atlas?: string;
    frame?: null | string;
    onLoaded?: any[];
    buffText?: string;
    orbIcon?: string;
    orbIconTarget?: string;
    orbSlotIndex?: number;
    playerLoadout?: string;
    debugEnabled?: boolean;
    height?: number;
    onClicked?: OnKeyDownElement[];
    onHoverEnter?: any[];
    onHoverExit?: any[];
    onInputEnabledChanged?: any[];
    width?: number;
    downStateObject?: string;
    overStateObject?: string;
    upStateObject?: string;
    onClick?: any[];
    onInputDown?: CallPromiseFunction[];
    transition?: string;
    clipName?: PurpleClipName;
    sfxID?: string;
    sfxTag?: string;
    booleanState?: string;
    showWhenStateIsTrue?: boolean;
    legacyTransformTarget?: string;
    playerAppearance?: string;
    primitive?: string;
    target?: string;
    iconTarget?: string;
    itemAssetType?: TypeElement;
    anchorX?: number;
    anchorY?: number;
    x?: number;
    y?: number;
    paddingX?: number;
    paddingY?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    fontWeight?: Font;
    shadowFill?: boolean;
    shadowStroke?: boolean;
    onAssetChanged?: CallPromiseFunction[];
    wordWrap?: boolean;
    wordWrapWidth?: number;
    dynamicNotificationBadge?: string;
    staticNotificationBadge?: string;
    textToUpdate?: string;
    filter?: null;
    singleImageID?: null;
    asset?: null;
    spineGUID?: string;
    onEvent?: any[];
    onAnimationComplete?: CallPromiseFunction[];
    animation?: string;
    loopAnimation?: boolean;
    startTimeSeconds?: number;
    staticNotificationGraphic?: string;
    nonNumberedBadgeText?: string;
    numberedMaxValue?: number;
    useStandardGraphicForNonNumberedBadges?: boolean;
    bottomCenter?: BottomCenter;
    bottomLeft?: BottomCenter;
    bottomRight?: BottomCenter;
    topCenter?: BottomCenter;
    topLeft?: BottomCenter;
    topRight?: BottomCenter;
    tint?: ColorEnum | number;
    fontStyle?: Font;
    shadowConfigs?: ReducedClass;
    onEnabledClick?: OnFinishedElement[];
    onIconsLoaded?: HasNotMetRequirement[];
    maxPosition?: number;
    bufferValue?: number;
    adoptiveParent?: string;
    runOnCreate?: boolean;
    relativeX?: number;
    relativeY?: number;
    stroke?: Colour;
    strokeThickness?: number;
    blendMode?: number;
    lineSpacing?: number;
    underline?: boolean;
    underlineStartIndex?: null;
    underlineEndIndex?: null;
    resizeRectTransform?: boolean;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowDistance?: number;
    dropShadowColor?: Colour;
    dropShadow?: boolean;
    roundRelativeValues?: boolean;
    comparisonFunction?: ComparisonFunction;
    onTrue?: any[];
    onFalse?: any[];
    onResult?: OnResult[];
    onNegatedResult?: any[];
    constant?: number;
    targetKey?: string;
    face?: string;
    hair?: string;
    hat?: string;
    head?: string;
    neck?: null;
    onAppearanceLoaded?: any[];
    outfit?: null;
    weapon?: null;
}
export declare enum PurpleClipName {
    ButtonDisabled = "button-disabled",
    Play = "play",
    Pop = "pop"
}
export declare enum ComparisonFunction {
    ComparisonFunction = ">=",
    Empty = "==="
}
export interface OnFinishedElement {
    args?: number[] | boolean | CompleteBgColor;
    functionName?: string;
    guid: string;
    propertyName?: OnFinishedPropertyName;
}
export declare enum CompleteBgColor {
    A7E34E = "#A7E34E",
    The2E573A = "#2E573A"
}
export declare enum OnFinishedPropertyName {
    Active = "active",
    Color = "color",
    DurationInMilliseconds = "_durationInMilliseconds"
}
export interface HasNotMetRequirement {
    args?: boolean;
    guid: string;
    propertyName?: PropertyName;
    functionName?: string;
}
export declare enum PropertyName {
    Active = "active",
    CacheAsBitmap = "cacheAsBitmap",
    Color = "color",
    Empty = "",
    InputEnabled = "inputEnabled",
    Text = "text",
    UIMode = "uiMode"
}
export interface OnResult {
    guid: string;
    propertyName: OnFinishedPropertyName;
}
export interface IndecentComponent {
    guid?: null | string;
    properties: IndigoProperties;
    type?: string;
    tuid?: string;
    collapsed?: boolean;
}
export interface IndigoProperties {
    anchorMax?: LocalPosition;
    anchorMin?: LocalPosition;
    anchoredPivotOffset?: LocalPosition;
    localRotation?: number;
    localScale?: LocalPosition;
    pivot?: LocalPosition;
    sizeDelta?: SizeDeltaClass;
    atlas?: null | string;
    attachToCamera?: boolean;
    frame?: null | string;
    align?: BoundsAlignH;
    boundsAlignH?: BoundsAlignH;
    fontSize?: number;
    localizationKey?: string;
    localizedText?: string;
    text?: string;
    academyTowerDataProvider?: string;
    formatTypes?: number[];
    y?: number;
    bossID?: number;
    bossName?: string;
    checkpointID?: number;
    item1ID?: number;
    item2ID?: number;
    item3ID?: number;
    item3Type?: TypeElement;
    height?: number;
    relativeWidth?: number;
    roundRelativeValues?: boolean;
    x?: number;
    center?: BottomCenter;
    leftCenter?: BottomCenter;
    rightCenter?: BottomCenter;
    relativeHeight?: number;
    scaleX?: number;
    scaleY?: number;
    boundsAlignV?: BoundsAlignH;
    fill?: ColorEnum;
    font?: FontFamilyEnum;
    shadowColor?: PurpleShadowColor;
    shadowFill?: boolean;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowStroke?: boolean;
    onAssetChanged?: CallPromiseFunction[];
    localPosition?: LocalPosition;
    bottomCenter?: BottomCenter;
    bottomLeft?: BottomCenter;
    bottomRight?: BottomCenter;
    topCenter?: BottomCenter;
    topLeft?: BottomCenter;
    topRight?: BottomCenter;
    onLoaded?: any[];
    iconTarget?: string;
    itemAssetType?: HairType;
    stroke?: ColorEnum;
    editBorder?: string;
    editingSlot?: string;
    loadoutEditingController?: string;
    onEditModeEnded?: any[];
    onEditModeStarted?: any[];
    removalEditBorder?: string;
    removalState?: string;
    removeButton?: string;
    selectionHighlight?: string;
    selectionState?: string;
    elementIcon?: string;
    petIcon?: string;
    alpha?: number;
    offScreenPosition?: Anchor;
    onScreenPosition?: Anchor;
    overlayParent?: string;
    itemProvider?: string;
    secureBattleStateMachine?: string;
    anchorX?: number;
    anchorY?: number;
    lineSpacing?: number;
    wordWrap?: boolean;
    wordWrapWidth?: number;
    width?: number;
    blendMode?: number;
    fontStyle?: Font;
    fontWeight?: FontWeight;
    paddingX?: number;
    paddingY?: number;
    strokeThickness?: number;
    tint?: ColorEnum | number;
    underline?: boolean;
    underlineEndIndex?: null;
    underlineStartIndex?: null;
    animation?: string;
    loopAnimation?: boolean;
    onAnimationComplete?: any[];
    onEvent?: any[];
    spineGUID?: string;
    targetKey?: string;
    color?: string;
    filled?: boolean;
    size?: PurpleSize;
    maskType?: number;
    target?: string;
    targetGameObject?: string;
    targetType?: number;
    singleImageID?: number | null | string;
    comparisonString?: string;
    gameConstantKey?: string;
    onComparisonFalse?: OnError[];
    onComparisonTrue?: CallPromiseFunction[];
    runOnLoad?: boolean;
    onHasCompletedTutorial?: CallPromiseFunction[];
    onHasNotCompletedTutorial?: OnError[];
    onValueChanged?: any[];
    breadcrumbName?: string;
    featureName?: string;
    onBreadcrumbComplete?: any[];
    breadcrumb?: string;
    isComplete?: OnError[];
    isIncomplete?: OnError[];
    onKeystonesToPlace?: CallPromiseFunction[];
    onNoKeystonesToPlace?: any[];
    customContext?: string;
    eventName?: string;
    onEventReceived?: CallPromiseFunction[];
    breadcrumbCompleted?: CallPromiseFunction[];
    hideNotification?: OnError[];
    showNotification?: OnError[];
    dynamicNotificationBadge?: string;
    staticNotificationBadge?: string;
    staticNotificationGraphic?: string;
    textToUpdate?: string;
    relativeX?: number;
    relativeY?: number;
    onIconsLoaded?: HasNotMetRequirement[];
    onClicked?: CallPromiseFunction[];
    speedMS?: number;
    id?: string;
    transition?: string;
    upStateObject?: string;
    downStateObject?: string;
    overStateObject?: string;
    guid?: string;
    filter?: null;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowDistance?: number;
    dropShadowColor?: Colour;
    dropShadow?: boolean;
    ultimatesTaskTooltip?: string;
    args?: any[];
    acceptUnlocalized?: boolean;
    applyOnCreate?: boolean;
    onClick?: CallPromiseFunction[];
    onSelected?: OnError[];
    resizeRectTransform?: boolean;
    onCreated?: any[];
    targetComponent?: string;
    targetProperty?: PropertyName;
    onInject?: any[];
    handIK?: string;
    leftArm?: string;
    legs?: string;
    rightArm?: string;
    shirt?: string;
    alignmentAnchorX?: number;
    alignmentAnchorY?: number;
    columnSpacing?: number;
    dynamicColumnWidth?: boolean;
    dynamicRowHeight?: boolean;
    fillPriority?: FillPriorityEnum;
    fixedColumnCount?: number;
    fixedRowCount?: number;
    indexOffset?: number;
    onUpdated?: any[];
    reverseFillColumn?: boolean;
    reverseFillRow?: boolean;
    rowSpacing?: number;
    xPositionOffset?: number;
    yPositionOffset?: number;
    legacyTransformTarget?: string;
    primitive?: string;
    radius?: number;
    awayHUD?: string;
    onHome?: OnError[];
    onSchool?: any[];
    onNonMember?: OnComparisonFalseElement[];
    onMember?: any[];
    onLegacyMember?: OnComparisonFalseElement[];
    onEnabledClick?: PurpleOnEnabledClick[];
}
export declare enum FillPriorityEnum {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum FontWeight {
    Bold = "bold",
    Lighter = "lighter",
    Normal = "normal"
}
export interface OnError {
    args?: boolean[];
    functionName: string;
    guid: string;
}
export interface PurpleOnEnabledClick {
    guid: string;
    functionName?: string;
    args?: Array<boolean | number> | boolean;
    propertyName?: OnFinishedPropertyName;
}
export interface OnComparisonFalseElement {
    guid: string;
    functionName: FunctionName;
    args: ArgEnum[];
}
export declare enum ArgEnum {
    ComingSoonMessage = "COMING_SOON_MESSAGE",
    EpicViewerBecomeAMember = "EPIC_VIEWER_BECOME_A_MEMBER",
    UltimatesUpgradeYourMembership = "ULTIMATES_UPGRADE_YOUR_MEMBERSHIP"
}
export declare enum FunctionName {
    OpenMessageWithLocalizationKey = "openMessageWithLocalizationKey",
    SetLocalizationKey = "setLocalizationKey"
}
export declare enum PurpleShadowColor {
    The2A6E70 = "#2A6E70",
    The425Bbd = "#425BBD",
    The9A9A9A = "#9A9A9A"
}
export interface PurpleSize {
    _halfHeight: number;
    _halfWidth: number;
    _height: number;
    _width: number;
}
export interface HilariousComponent {
    guid?: string;
    properties: IndecentProperties;
    type?: string;
    tuid?: string;
    collapsed?: boolean;
}
export interface IndecentProperties {
    anchorMax?: LocalPosition;
    anchorMin?: LocalPosition;
    anchoredPivotOffset?: LocalPosition;
    localRotation?: number;
    localScale?: LocalPosition;
    pivot?: LocalPosition;
    sizeDelta?: SizeDeltaClass;
    academyTowerDataProvider?: string;
    battlesWon?: number;
    isEqual?: HasNotMetRequirement[];
    isGreaterThan?: HasNotMetRequirement[];
    isLesserThan?: HasNotMetRequirement[];
    runOnLoad?: boolean;
    fontSize?: number;
    localizationKey?: string;
    localizedText?: string;
    localPosition?: LocalPosition;
    attachToCamera?: boolean;
    center?: BottomCenter;
    leftCenter?: BottomCenter;
    rightCenter?: BottomCenter;
    alpha?: number;
    hexTintColor?: string;
    targetRenderComponent?: string;
    tintOnCreate?: boolean;
    atlas?: string;
    frame?: null | string;
    singleImageID?: null;
    align?: BoundsAlignH;
    boundsAlignH?: BoundsAlignH;
    text?: string;
    onEvent?: any[];
    onLoaded?: IsFalse[];
    spineGUID?: string;
    animation?: string;
    loopAnimation?: boolean;
    onAnimationComplete?: any[];
    relativeHeight?: number;
    relativeWidth?: number;
    roundRelativeValues?: boolean;
    x?: number | null;
    y?: number | null;
    height?: number;
    scaleX?: number;
    width?: number;
    scaleY?: number;
    boundsAlignV?: BoundsAlignH;
    fill?: ColorEnum;
    font?: FontFamilyEnum;
    shadowColor?: FluffyShadowColor;
    shadowFill?: boolean;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowStroke?: boolean;
    fontStyle?: Font;
    fontWeight?: FontWeight;
    handIK?: null | string;
    leftArm?: null | string;
    legs?: null | string;
    onAssetChanged?: CallPromiseFunction[];
    rightArm?: null | string;
    shirt?: null | string;
    onValueChanged?: any[];
    booleanState?: string;
    showWhenStateIsTrue?: boolean;
    itemIcon?: string;
    quantityLabel?: string;
    debugEnabled?: boolean;
    onClicked?: HasNotMetRequirement[];
    onHoverEnter?: any[];
    onHoverExit?: any[];
    onInputEnabledChanged?: any[];
    clipName?: PurpleClipName;
    sfxID?: string;
    sfxTag?: string;
    asset?: null | string;
    tint?: ColorEnum | number;
    lineSpacing?: number;
    stroke?: ColorEnum;
    wordWrap?: boolean;
    wordWrapWidth?: number;
    avoidEmptyStates?: boolean | string;
    downStateObject?: string;
    overStateObject?: string;
    selectable?: string;
    selectedStateObject?: string;
    upStateObject?: string;
    inputEnabled?: boolean;
    onInputDown?: OnError[];
    onInputOut?: any[];
    onInputOver?: any[];
    onInputUp?: any[];
    onSelected?: OnKeyDownElement[];
    selected?: boolean;
    transition?: string;
    useHandCursor?: boolean;
    onSFXComplete?: any[];
    offset?: LocalPosition;
    bottomCenter?: BottomCenter;
    bottomLeft?: BottomCenter;
    bottomRight?: BottomCenter;
    topCenter?: BottomCenter;
    topLeft?: BottomCenter;
    topRight?: BottomCenter;
    alignmentAnchorX?: number;
    alignmentAnchorY?: number;
    columnSpacing?: number;
    fillPriority?: FillPriorityEnum;
    fixedColumnCount?: number;
    fixedRowCount?: number;
    gameObjectList?: string[];
    indexOffset?: number;
    reverseFillColumn?: boolean;
    reverseFillRow?: boolean;
    rowSpacing?: number;
    xPositionOffset?: number;
    yPositionOffset?: number;
    equipActionSource?: string;
    equipAnimation?: string[];
    playerLoadout?: string;
    iconPositions?: string[];
    onIconsLoaded?: HasNotMetRequirement[];
    petIcons?: string[];
    wizardIcon?: string;
    cacheAsBitmap?: boolean;
    visible?: boolean;
    anchorX?: number;
    anchorY?: number;
    debug?: boolean;
    onEnter?: HasNotMetRequirement[];
    onExit?: HasNotMetRequirement[];
    radius?: number;
    relativeX?: number;
    relativeY?: number;
    disableStateObject?: string;
    disabledStateObject?: string;
    underline?: boolean;
    iconTarget?: string;
    morphMarbleSpine?: string;
    apexDeltaX?: number;
    apexDeltaY?: number;
    apexDurationSeconds?: number;
    bottomDeltaX?: number;
    bottomDeltaY?: number;
    bottomDurationSeconds?: number;
    quantityText?: string;
    target?: string;
    itemAssetType?: HairType;
    itemID?: number | null;
    border?: string;
    bossID?: number;
    bossImage?: string;
    bossName?: string;
    iconImage?: string;
    isLarge?: boolean;
    targetKey?: string;
    onAppearanceReloaded?: CallPromiseFunction[];
    color?: string;
    filled?: boolean;
    size?: PurpleSize;
    showTooltip?: boolean;
    countdownText?: string;
    groupHoursRemaining?: boolean;
    groupMinutesRemaining?: boolean;
    onTimerCompleted?: any[];
    onTimerUpdated?: any[];
    daysTemplate?: string;
    hideCompletedTimeComponents?: boolean;
    hoursTemplate?: string;
    minutesTemplate?: string;
    secondsTemplate?: string;
    timeRemainingText?: string;
    weeksTemplate?: string;
    bottomDelayMS?: number;
    distance?: number;
    duration?: number;
    easingCategory?: string;
    easingType?: string;
    topDelayMS?: number;
    filter?: null;
    onClick?: PurpleOnClick[];
    defaultTriggerData?: DefaultTriggerData;
    propertiesProviders?: string[];
    interfaceName?: string;
    interfaceType?: string;
    closeMethod?: string;
    instanceType?: InstanceTypeEnum;
    buttonName?: string;
    saveClickInfo?: string;
    destinationName?: string;
    paddingY?: number;
    mask?: string;
    onEventAssetsLoaded?: any[];
    comparisonString?: string;
    gameConstantKey?: string;
    onComparisonFalse?: OnComparisonFalseElement[];
    onComparisonTrue?: OnError[];
    breadcrumbFeatureName?: string;
    breadcrumbName?: string;
    customContext?: string;
    eventName?: string;
    customContextString?: string;
    onVisitingAllowed?: HasNotMetRequirement[];
    onVisitingNotAllowed?: HasNotMetRequirement[];
    onHasCompletedTutorial?: CallPromiseFunction[];
    onHasNotCompletedTutorial?: any[];
    featureName?: string;
    onBreadcrumbComplete?: any[];
    breadcrumb?: string;
    isComplete?: CallPromiseFunction[];
    isIncomplete?: OnError[];
    autoStartTimer?: boolean;
    debounceTimeMs?: number;
    funnelName?: string;
    metadata?: string;
    sendPromotedAd?: boolean;
    stageTag?: string;
    analyticSource?: string;
    membershipSuppressOff?: HasNotMetRequirement[];
    membershipSuppressOn?: HasNotMetRequirement[];
    shouldCheckMembership?: boolean;
    elementType?: string;
    originType?: string;
    originID?: string;
    elementId?: string;
    key?: number | string;
    stateIsDefined?: CallPromiseFunction[];
    stateIsNotDefined?: CallPromiseFunction[];
    customDataComponents?: string[];
    eventType?: string;
    subtype?: string;
    type?: string;
    id?: number | string;
    name?: string;
    value?: string;
    customDataPropertyName?: string;
    leavingType?: number;
    onZoneDoesNotHandleLeaving?: CallPromiseFunction[];
    onZoneHandlesLeaving?: CallPromiseFunction[];
    duelInviteUpdate?: CallPromiseFunction[];
    mapTag?: MapTag;
    onAllowed?: CallPromiseFunction[];
    onClosed?: any[];
    onOpen?: CallPromiseFunction[];
    prefabID?: number;
    onFail?: any[];
    onSuccess?: CallPromiseFunction[];
    festivalID?: number;
    festivalIsActive?: HasNotMetRequirement[];
    festivalIsNotActive?: HasNotMetRequirement[];
    experimentKey?: string;
    onRequirementsMet?: CallPromiseFunction[];
    onRequirementsNotMet?: HasNotMetRequirement[];
    onVariableProcessed?: any[];
    onVariableComparisonTrue?: IsFalse[];
    onVariableComparisonFalse?: CallPromiseFunction[];
    onGetVariableValueReturn?: any[];
    onGotViewedProgressMenu?: CallPromiseFunction[];
    onHUDMenuBar?: boolean;
    prefabGuid?: string;
    isModal?: boolean;
    skipTransparency?: boolean;
    skipStopPlayer?: boolean;
    createContainer?: boolean;
    action?: string;
    category?: string;
    origin?: string;
    source?: string;
    unseenAds?: CallPromiseFunction[];
    friendsListEventSignal?: CallPromiseFunction[];
    networkCheckMinTimeMS?: number;
    networkCheckTimeMinMS?: number;
    mailEventSignal?: CallPromiseFunction[];
    surveyCheckMinTimeMS?: number;
    isNotSupported?: HasNotMetRequirement[];
    isSupported?: CallPromiseFunction[];
    isInstalled?: HasNotMetRequirement[];
    isNotInstalled?: HasNotMetRequirement[];
    sfx?: string;
    timeMS?: number;
    args?: any[];
    acceptUnlocalized?: boolean;
    onEnabledClick?: FluffyOnEnabledClick[];
    onError?: OnError[];
    onPlayerDataUpdated?: HasNotMetRequirement[];
    tweenData?: TweenDatum[];
    placeholder?: string;
    shadowConfigs?: ReducedClass;
    strokeThickness?: number;
    blendMode?: number;
    paddingX?: number;
    underlineStartIndex?: null;
    underlineEndIndex?: null;
    resizeRectTransform?: boolean;
    applyOnCreate?: boolean;
    countdownTemplateString?: string;
    groupDaysRemaining?: boolean;
    allowZeroTime?: boolean;
    audioPreload?: number;
    start?: number;
    onPlaybackComplete?: any[];
    stopOnDestroy?: boolean;
    audioType?: number;
    audioGUID?: string;
    websiteLink?: string;
    onDialogueOpened?: HasNotMetRequirement[];
    onDialogueClosed?: HasNotMetRequirement[];
    backgroundColor?: BackgroundColorEnum;
    clearable?: boolean;
    fontFamily?: FontFamilyEnum;
    showInputPromptOnAndroid?: boolean;
    enablePerKeyEvents?: boolean;
    onTextChanged?: any[];
    onFocusChanged?: CallPromiseFunction[];
    input?: string;
    canBeEmpty?: boolean;
    onTextInvalid?: OnKeyDownElement[];
    onTextValid?: HasNotMetRequirement[];
    validationRegex?: string;
    validationRegexErrorMessage?: string;
    errorText?: string;
    errorMessageKey?: string;
    onTextInvalidOnBlur?: HasNotMetRequirement[];
    initialLockedState?: number;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowDistance?: number;
    dropShadowColor?: ColorEnum;
    dropShadow?: boolean;
    anchorTarget?: string;
    container?: string;
    isInnerContainer?: boolean;
    fillImage?: string;
    alternateAnchorY?: number;
    onProgress?: IsFalse[];
    onComplete?: any[];
    shadowBlur?: number;
    checkpointID?: number;
    startingMap?: string;
    index?: number;
    onActionRemoved?: CallPromiseFunction[];
    autoUpdateLayout?: boolean;
    dynamicRowHeight?: boolean;
    dynamicColumnWidth?: boolean;
    onUpdated?: any[];
    onCreated?: any[];
    onInject?: CallPromiseFunction[];
    components?: string[];
    identifier?: string;
    face?: string;
    hair?: string;
    hat?: string;
    head?: string;
    neck?: string;
    onAppearanceLoaded?: IsFalse[];
    outfit?: string;
    weapon?: string;
    allowMouseInput?: boolean;
    carouselObjects?: any[];
    contentView?: string;
    easeType?: string;
    horizontalScrolling?: boolean;
    lockInput?: boolean;
    onTargetSet?: CallPromiseFunction[];
    scrollNegativeButton?: string;
    scrollPositiveButton?: string;
    slide?: boolean;
    slideTime?: number;
    enableContinuousPress?: boolean;
    keyCode?: number;
    onKeyDown?: OnKeyDownElement[];
    currentPage?: number;
    dotRadius?: number;
    dotSpacing?: number;
    pageCount?: number;
    pageTransitionTimeMs?: number;
    selectedPageAlpha?: number;
    selectedPageColor?: Colour;
    unselectedPageAlpha?: number;
    unselectedPageColor?: Colour;
    frames?: number;
    onPostFrames?: HasNotMetRequirement[];
    targetSpine?: string;
    itemType?: TypeElement;
    assetKey?: string;
    onSpineItemLoaded?: any[];
    ultimatesTaskTooltip?: string;
    smooth?: boolean;
    startTimeSeconds?: number;
    baseGameObject?: string;
    strokeColor?: StrokeColor;
}
export declare enum BackgroundColorEnum {
    ColorFfffff = "ffffff",
    E0C679 = "E0C679",
    Ffffff = "FFFFFF",
    The00Cccc = "00CCCC"
}
export declare enum DefaultTriggerData {
    Empty = "",
    Map = "map",
    Zone = "zone"
}
export declare enum InstanceTypeEnum {
    Interface = "interface",
    UI = "ui"
}
export declare enum MapTag {
    Lamplight = "lamplight",
    LamplightB3 = "lamplight-B3"
}
export interface IsFalse {
    functionName: string;
    guid: string;
    args?: Array<boolean | string>;
}
export interface PurpleOnClick {
    guid: string;
    functionName?: string;
    args?: Array<number | null | string> | boolean;
    propertyName?: OnFinishedPropertyName;
}
export interface FluffyOnEnabledClick {
    guid: string;
    functionName: string;
    args?: Array<boolean | number>;
}
export declare enum FluffyShadowColor {
    The363636 = "#363636",
    The425Bbd = "#425BBD"
}
export declare enum StrokeColor {
    The0Xffffff = "0xffffff"
}
export interface TweenDatum {
    delay: number;
    duration: number;
    ease: Ease;
    properties: TweenDatumProperties;
}
export interface TweenDatumProperties {
    alpha?: number;
    posY?: number;
}
export interface AmbitiousComponent {
    guid?: string;
    properties: HilariousProperties;
    type?: string;
    tuid?: string;
    collapsed?: boolean;
    editorMetadata?: EditorMetadata;
}
export interface EditorMetadata {
    editMode: boolean;
}
export interface HilariousProperties {
    anchorMax?: AnchorMax;
    anchorMin?: AnchorMax;
    anchoredPivotOffset?: AnchorMax;
    localRotation?: number;
    localScale?: LocalPosition;
    pivot?: AnchorMax;
    sizeDelta?: SizeDeltaClass;
    align?: BoundsAlignH;
    attachToCamera?: boolean;
    blendMode?: number;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    fill?: string;
    font?: PurpleFont;
    fontSize?: number;
    fontStyle?: Font;
    fontWeight?: FontWeight;
    lineSpacing?: number;
    paddingX?: number;
    paddingY?: number;
    stroke?: PurpleStroke;
    strokeThickness?: number;
    text?: string;
    tint?: TintEnum | number;
    underline?: boolean;
    underlineEndIndex?: null;
    underlineStartIndex?: null;
    wordWrap?: boolean;
    wordWrapWidth?: number;
    academyTowerDataProvider?: string;
    formatTypes?: number[];
    localizationKey?: string;
    localizedText?: string;
    onClick?: FluffyOnClick[];
    localPosition?: LocalPosition;
    center?: BottomCenter;
    leftCenter?: BottomCenter;
    rightCenter?: BottomCenter;
    alpha?: number;
    hexTintColor?: string;
    targetRenderComponent?: string;
    tintOnCreate?: boolean;
    atlas?: null | string;
    frame?: null | string;
    singleImageID?: number | null | string;
    color?: string;
    filled?: boolean;
    size?: FluffySize;
    onInputUp?: CallPromiseFunction[];
    onAllowed?: CallPromiseFunction[];
    onOpen?: HasNotMetRequirement[];
    onSuccess?: CallPromiseFunction[];
    key?: string;
    onLoad?: CallPromiseFunction[];
    canTeleport?: string;
    teleport?: string;
    onAlive?: CallPromiseFunction[];
    onDead?: CallPromiseFunction[];
    onClosed?: HasNotMetRequirement[];
    isModal?: boolean;
    skipTransparency?: boolean;
    skipStopPlayer?: boolean;
    prefabID?: number;
    onLoaded?: IsFalse[];
    onEnabledClick?: TentacledOnEnabledClick[];
    menuOpener?: string;
    anchorX?: number;
    anchorY?: number;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
    animationName?: string;
    animator?: string;
    loop?: boolean;
    radius?: number;
    relativeHeight?: number | null;
    relativeWidth?: number | null;
    roundRelativeValues?: boolean;
    contentView?: string;
    isKinematic?: boolean;
    verticalScrollBar?: string;
    verticalScrolling?: boolean;
    scaleX?: number;
    scaleY?: number;
    downStateObject?: string;
    overStateObject?: string;
    upStateObject?: string;
    transition?: string;
    primitive?: string;
    target?: string;
    bottomCenter?: BottomCenter;
    bottomLeft?: BottomCenter;
    bottomRight?: BottomCenter;
    topCenter?: BottomCenter;
    topLeft?: BottomCenter;
    topRight?: BottomCenter;
    appearanceData?: AppearanceData;
    face?: string;
    hair?: string;
    hat?: string;
    head?: string;
    neck?: string;
    onAppearanceLoaded?: IsFalse[];
    outfit?: string;
    weapon?: null | string;
    petID?: number;
    petIcon?: string;
    editInput?: string;
    editModeState?: string;
    editingSlot?: string;
    loadoutEditingController?: string;
    onEditModeEnded?: any[];
    onEditModeStarted?: any[];
    disableStateObject?: string;
    disabledStateObject?: null | string;
    button?: string;
    buttonSoundEffect?: string;
    disabledSoundEffect?: string;
    debugEnabled?: boolean;
    offset?: LocalPosition;
    onClicked?: CallPromiseFunction[];
    onHoverEnter?: any[];
    onHoverExit?: any[];
    onInputEnabledChanged?: any[];
    autoStart?: boolean;
    rotationCount?: number;
    rotationDurationMS?: number;
    cacheAsBitmap?: boolean;
    visible?: boolean;
    allowMultiSelect?: boolean;
    defaultIndex?: number[];
    toggleObjects?: string[];
    booleanState?: string;
    isFalse?: IsFalse[];
    isTrue?: HasMetRequirement[];
    runOnLoad?: boolean;
    alignmentAnchorX?: number;
    alignmentAnchorY?: number;
    columnSpacing?: number;
    fillPriority?: FillPriorityEnum;
    fixedColumnCount?: number;
    fixedRowCount?: number;
    gameObjectList?: string[];
    indexOffset?: number;
    reverseFillColumn?: boolean;
    reverseFillRow?: boolean;
    rowSpacing?: number;
    xPositionOffset?: number;
    yPositionOffset?: number;
    avoidEmptyStates?: boolean;
    selectable?: string;
    selectedStateObject?: string;
    inputEnabled?: boolean;
    onInputDown?: OnError[];
    onInputOut?: any[];
    onInputOver?: any[];
    onSelected?: OnFinishedElement[];
    selected?: boolean;
    useHandCursor?: boolean;
    clipName?: FluffyClipName;
    onSFXComplete?: any[];
    sfxID?: number | string;
    sfxTag?: string;
    iconPositions?: string[];
    petIcons?: string[];
    wizardIcon?: string;
    animation?: null | string;
    loopAnimation?: boolean;
    onEvent?: any[];
    spineGUID?: string;
    isHomeTeam?: boolean;
    unitPrefab?: number;
    units?: string[];
    id?: string;
    targetComponent?: string;
    awayHUD?: string;
    dimParent?: string;
    homeHUD?: string;
    filter?: null;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowColor?: ColorEnum;
    dropShadowBlur?: number;
    dropShadowDistance?: number;
    resizeRectTransform?: boolean;
    countdownText?: string;
    groupMinutesRemaining?: boolean;
    groupSecondsRemaining?: boolean;
    relativeX?: number;
    relativeY?: number;
    decelerationTime?: number;
    initialVelocity?: number;
    maxVelocity?: number;
    onComplete?: HasMetRequirement[] | CallPromiseFunction;
    padding?: number;
    pool?: string;
    spinTime?: number;
    maxScale?: number;
    roulette?: string;
    window?: number;
    itemProvider?: string;
    mask?: string;
    rareItems?: AdventureRewardElement[];
    replacementItems?: CostElement[];
    analyticConversionFunnelName?: string;
    analyticConversionFunnelStage?: string;
    onClose?: CallPromiseFunction[];
    onIsMember?: CallPromiseFunction[];
    panelAdName?: string;
    defaultTriggerData?: DefaultTriggerData;
    propertiesProviders?: string[];
    wheelType?: string;
    failedReason?: string;
    showWhenStateIsTrue?: boolean;
    boostAmountText?: string;
    boostIcon?: string;
    boostInfoLocalizationText?: string;
    bossBoostConfiguration?: BossBoostConfiguration;
    gridLayout?: string;
    lootItemPrefabID?: number;
    faceTransform?: string;
    onMorphedAppearanceClicked?: CallPromiseFunction[];
    onPlayerMorphEnded?: HasNotMetRequirement[];
    onPlayerMorphStarted?: HasNotMetRequirement[];
    onSmokeCloudShown?: CallPromiseFunction[];
    playerAppearanceObject?: string;
    onMorphExpired?: CallPromiseFunction[];
    followParent?: string;
    followSpawnOffset?: Anchor;
    maximumFollowDistance?: number;
    minimumFollowDistance?: number;
    playerPathLocomotion?: string;
    playerTransform?: string;
    playerFollowLoader?: string;
    followSpawner?: string;
    petFollowCount?: number;
    instanceOrigin?: string;
    milestoneType?: string;
    exitOutcome?: string;
    components?: string[];
    identifier?: string;
    targetKey?: string;
    orbSlotIndex?: number;
    callPromiseFunctions?: CallPromiseFunction[];
    onPromiseRejected?: any[];
    onPromisesResolved?: any[];
    initialLockedState?: number;
    fadeDurationMS?: number;
    initialAlpha?: number;
    repeatCount?: number;
    startDelay?: number;
    targetAlpha?: number;
    yoyoAlpha?: boolean;
    bottomDelayMS?: number;
    distance?: number;
    duration?: number;
    easingCategory?: string;
    easingType?: string;
    topDelayMS?: number;
    attachToGameObjectLayer?: boolean;
    dialogueIDs?: number[];
    onFinished?: OnFinishedElement[];
    tierIndex?: number;
    onProgressComplete?: OnFinishedElement[];
    onOpenGotItem?: HasNotMetRequirement[];
    onCloseGotItem?: HasMetRequirement[];
    alphabet?: string[];
    bottomClamp?: string;
    instantiateOnCreate?: boolean;
    topClamp?: string;
    maxNibSize?: number;
    minNibSize?: number;
    nib?: string;
    resizingEnabled?: boolean;
    scrollView?: string;
    wheelStep?: number;
    uniformScale?: number;
    onEventAssetsLoaded?: any[];
    autoUpdateLayout?: boolean;
    itemsList?: string;
    asset?: null | string;
    targetMapTag?: string;
    adjustGameObjectChildren?: boolean;
    additionalHeight?: number;
    additionalWidth?: number;
    resizeComplete?: any[];
    resizeHeight?: boolean;
    resizeWidth?: boolean;
    requirementsID?: number;
    hasMetRequirements?: HasMetRequirement[];
    hasNotMetRequirements?: HasNotMetRequirement[];
    experimentKey?: string;
    featureName?: string;
    onRequirementsMet?: any[];
    onRequirementsNotMet?: any[];
    onVariableProcessed?: any[];
    onVariableComparisonTrue?: any[];
    onVariableComparisonFalse?: any[];
    onGetVariableValueReturn?: OnFinishedElement[];
    durationInMilliseconds?: number;
    autoStartTimer?: boolean;
    actionOnStart?: null;
    onTimeout?: IsFalse[];
    onValueChanged?: any[];
    booleanValue?: boolean;
    actionOnTimeout?: null;
    shadowConfigs?: ReducedClass;
    points?: Anchor[];
    itemID?: number;
    buttonName?: string;
    destinationName?: string;
    interfaceName?: string;
    interfaceType?: string;
    saveClickInfo?: string;
    args?: any[];
    acceptUnlocalized?: boolean;
    iconTarget?: string;
    itemAssetType?: string;
    onPlayerDataUpdated?: HasNotMetRequirement[];
    onError?: OnError[];
    bufferValue?: number;
    fillSpeedMS?: number;
    adoptiveParent?: string;
    shouldRunOnCreate?: boolean;
    guid?: string;
    constant?: number;
    comparisonFunction?: string;
    onTrue?: any[];
    onFalse?: any[];
    onResult?: OnResult[];
    onNegatedResult?: OnResult[];
    prefabGuid?: string;
    onSubmit?: IsFalse[];
    submitButton?: string;
    submitOnEnter?: boolean;
    tooltipArrowLocation?: number;
    tooltipArrowDirection?: number;
    showTooltip?: boolean;
    installers?: string[];
    onNonMember?: CallPromiseFunction[];
    onMember?: OnFinishedElement[];
    onLegacyMember?: any[];
    dropShadow?: boolean;
    originID?: string;
    originType?: string;
    closeMethod?: string;
    instanceType?: InstanceTypeEnum;
    ultimatesTaskTooltip?: string;
    itemMagnifyingGlass?: string;
    taskTooltipAnchor?: string;
    elementType?: string;
    applyOnCreate?: boolean;
    background?: string;
    fillValue?: number;
    innerContainer?: string;
    onProgress?: CallPromiseFunction[];
    outerContainer?: string;
    onIconLoaded?: any[];
    spinnerSpeed?: number;
    onStateAvailable?: any[];
    spinnerImage?: string;
    shadowColor?: TentacledShadowColor;
    fillImage?: string;
    shadowFill?: boolean;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowStroke?: boolean;
    tabName?: string;
    showIcon?: boolean;
    eyeColorRange?: Anchor;
    faceRange?: Anchor;
    hairColorRange?: Anchor;
    hairStyleRange?: Anchor;
    hatRange?: Anchor;
    outfitRange?: Anchor;
    shouldPreloadAssets?: boolean;
    shouldShowWeapon?: boolean;
    weaponRange?: Anchor;
    eventType?: string;
    type?: string;
    subtype?: string;
    value?: string;
    customDataComponents?: string[];
    unitIndex?: number[];
    teamIndex?: number;
    dynamicRowHeight?: boolean;
    dynamicColumnWidth?: boolean;
    onUpdated?: any[];
    onTimerCompleted?: any[];
    onTimerUpdated?: any[];
    smooth?: boolean;
    onAnimationComplete?: any[];
    startTimeSeconds?: number;
    disableOnError?: string;
    OnAppearanceLoaded?: any[];
    legacyTransformTarget?: string;
    infoText?: string;
    sliderTrack?: string;
    sliderFill?: string;
    sliderNib?: string;
    enableContinuousPress?: boolean;
    keyCode?: number;
    onKeyDown?: CallPromiseFunction[];
    onInFullscreenMode?: any[];
    onNotInFullscreenMode?: CallPromiseFunction[];
    elementId?: string;
    adType?: string;
    funnelName?: string;
    funnelStage?: string;
    name?: string;
    signal?: IsFalse[];
    createContainer?: boolean;
    titleText?: string;
    bodyText?: string;
    displayText?: string;
    aboutButton?: string;
    aboutView?: string;
    buyButton?: string;
    disabledBuyButton?: string;
    lockedChains?: string;
    lookItemContainer?: string;
    lookView?: string;
    looksButton?: string;
    memberButton?: string;
    merchantPortrait?: string;
    merchantView?: string;
    removeButton?: string;
    shadow?: string;
    sideItemMembership?: string;
    sideItemName?: string;
    sideItemOwned?: string;
    sideItemRarity?: string;
    sideItemRarityContainer?: string;
    sidePanelBottom?: string;
    sidePanelTop?: string;
    statsButton?: string;
    statsView?: string;
    toggleGroupRight?: string;
    tooltipButton?: string;
    tooltipContainer?: string;
    wearButton?: string;
    wearButtonDisabled?: string;
    initialAnimation?: ReturnToLoopEnum;
    onInitialize?: any[];
    changeColorOnComplete?: boolean;
    completeOuterColor?: string;
    completeFillColor?: CompleteBgColor;
    completeBgColor?: CompleteBgColor;
    completeTextOutlineColor?: string;
    saveData?: string;
    datastore?: string;
    onCreate?: CallPromiseFunction[];
    onAddToTeamClicked?: CallPromiseFunction[];
    loadingOverlay?: string;
    onPostFrames?: any[];
    onEnter?: any[];
    onPlayerMoved?: any[];
    onPlayerStopped?: any[];
    targetImage?: string;
    itemType?: string;
    assetKey?: null;
    updateTransformOnLoad?: boolean;
    onItemDataLoaded?: OnFinishedElement[];
    textObject?: string;
    allowMouseInput?: boolean;
    allowMouseWheel?: boolean;
    easeType?: string;
    horizontalScrolling?: boolean;
    slideTime?: number;
    baseGameObject?: string;
    tintColor?: TintColor;
    breadcrumb?: string;
    breadcrumbFeatureName?: string;
    breadcrumbName?: string;
    isComplete?: any[];
    isIncomplete?: HasNotMetRequirement[];
    onBreadcrumbComplete?: any[];
}
export interface AnchorMax {
    _magnitude?: number;
    _magnitudeSq?: number;
    _recalculateMagnitude?: boolean;
    _recalculateMagnitudeSq?: boolean;
    _x?: number;
    _y?: number;
    x?: number;
    y?: number;
    magnitude?: number;
    magnitudeSq?: number;
    recalculateMagnitude?: boolean;
    recalculateMagnitudeSq?: boolean;
    _ecalculateMagnitudeSq?: boolean;
}
export interface AppearanceData {
    face: number;
    gender: SaveDataID;
    hair: AppearanceHair;
    hat: number;
    outfit: number;
    skin: number;
}
export interface BossBoostConfiguration {
    "bonus-criticalChance": CritChance;
    damage: CritChance;
    hearts: CritChance;
    "damage-reduction": CritChance;
    "elemental-bonus": CritChance;
    "crit-damage-bonus": CritChance;
}
export interface CritChance {
    atlas: string;
    frame: string;
    textKey: string;
}
export declare enum FluffyClipName {
    Break = "break",
    ButtonDisabled = "button-disabled",
    Pop = "pop"
}
export declare enum PurpleFont {
    ABeeZee = "ABeeZee",
    AbeeZee = "AbeeZee",
    PaytoneOne = "Paytone One"
}
export interface HasMetRequirement {
    guid: string;
    propertyName?: PropertyName;
    args?: Array<boolean | string> | boolean;
    functionName?: string;
}
export interface FluffyOnClick {
    functionName?: string;
    guid: string;
    args?: string[] | boolean;
    propertyName?: OnFinishedPropertyName;
}
export interface TentacledOnEnabledClick {
    functionName?: string;
    guid: string;
    args?: Array<boolean | number | string> | boolean;
    propertyName?: OnFinishedPropertyName;
}
export declare enum TentacledShadowColor {
    The425Bbd = "#425BBD",
    The683510 = "#683510"
}
export interface FluffySize {
    _halfHeight?: number;
    _halfWidth?: number;
    _height?: number;
    _width?: number;
    height?: number;
    width?: number;
}
export declare enum PurpleStroke {
    Black = "black",
    D66411 = "#D66411",
    Ffffff = "#ffffff",
    StrokeFFFFFF = "#FFFFFF",
    The000000 = "#000000",
    The363636 = "#363636",
    The6B2824 = "#6b2824"
}
export declare enum TintEnum {
    Aaaaaa = "#aaaaaa",
    Ffcd91 = "#ffcd91",
    Ffffff = "#FFFFFF",
    The000000 = "#000000",
    The555555 = "#555555",
    TintFfffff = "#ffffff"
}
export declare enum TintColor {
    The0X333333 = "0x333333"
}
export declare enum PurpleLayer {
    Above = "above",
    Background = "background",
    Content = "content",
    Empty = "",
    Foreground = "foreground",
    Ground = "ground",
    Input = "input",
    Loading = "loading",
    Tooltip = "tooltip",
    UI = "ui"
}
export interface CunningComponent {
    guid?: string;
    properties: {
        [key: string]: Array<PurpleProperty | number | string> | boolean | FluffyProperty | number | null | string;
    };
    type?: string;
    tuid?: string;
    collapsed?: boolean;
    editorMetadata?: EditorMetadata;
}
export interface PurpleProperty {
    functionName?: string;
    guid?: string;
    args?: Array<boolean | number | string> | boolean | number | string;
    propertyName?: PropertyName;
    delay?: number;
    duration?: number;
    ease?: Ease;
    properties?: AmbitiousProperties;
    repeat?: number;
    yoyo?: boolean;
    x?: number;
    y?: number;
}
export interface AmbitiousProperties {
    posX?: number;
    posY?: number;
    x?: number;
    y?: number;
    scaleX?: number;
    scaleY?: number;
}
export interface FluffyProperty {
    _magnitude?: number;
    _magnitudeSq?: number;
    _recalculateMagnitude?: boolean;
    _recalculateMagnitudeSq?: boolean;
    _x?: number | null;
    _y?: number | null;
    x?: number | null;
    y?: number | null;
    magnitude?: number;
    magnitudeSq?: number;
    recalculateMagnitude?: boolean;
    recalculateMagnitudeSq?: boolean;
    _ecalculateMagnitudeSq?: boolean;
    height?: number;
    width?: number;
    atlas?: string;
    flipX?: boolean;
    flipY?: boolean;
    frame?: string;
    rotation?: number;
    _halfHeight?: number;
    _halfWidth?: number;
    _height?: number;
    _width?: number;
    crystalcaverns?: Crystalcaverns;
    functionName?: string;
    guid?: string;
    "bonus-criticalChance"?: string;
    damage?: string;
    hearts?: string;
    name?: string;
    action?: string;
    xPosition?: string;
    yPosition?: string;
    arrowDirection?: string;
}
export interface Crystalcaverns {
    fallback: Fallback;
    items: Fallback[];
}
export interface MagentaComponent {
    guid?: string;
    properties?: {
        [key: string]: Array<TentacledProperty | number | string> | boolean | StickyProperty | number | null | string;
    };
    type?: string;
    tuid?: string;
    collapsed?: boolean;
    editorMetadata?: EditorMetadata;
}
export interface TentacledProperty {
    functionName?: string;
    guid?: string;
    args?: Array<boolean | number | string> | boolean | number | string;
    propertyName?: PurplePropertyName;
    x?: number;
    y?: number;
    delay?: number;
    duration?: number;
    ease?: string;
    properties?: CunningProperties;
    repeat?: number;
    yoyo?: boolean;
    function?: string;
}
export interface CunningProperties {
    y: string;
}
export declare enum PurplePropertyName {
    Active = "active",
    Color = "color",
    Empty = "",
    InputEnabled = "inputEnabled",
    PropertyNameActive = "Active",
    SizeDelta = "sizeDelta",
    Text = "text",
    YesButtonText = "_yesButtonText"
}
export interface StickyProperty {
    _magnitude?: number;
    _magnitudeSq?: number;
    _recalculateMagnitude?: boolean;
    _recalculateMagnitudeSq?: boolean;
    _x?: number | null;
    _y?: number | null;
    x?: number | null;
    y?: number | null;
    magnitude?: number;
    magnitudeSq?: number;
    recalculateMagnitude?: boolean;
    recalculateMagnitudeSq?: boolean;
    _ecalculateMagnitudeSq?: boolean;
    height?: number;
    width?: number;
    _width?: number;
    _halfWidth?: number;
    _height?: number;
    _halfHeight?: number;
    atlas?: string;
    flipX?: boolean;
    flipY?: boolean;
    frame?: string;
    rotation?: number;
    bountyLoot?: BountyLoot[];
    isMember?: boolean;
    name?: string;
    petID?: number;
    statBonus?: StatBonus;
    crystalcaverns?: Crystalcaverns;
    visibility?: boolean;
    destroy?: boolean;
    lockedItemPrefab?: number;
    rarityPrefabCommon?: number;
    rarityPrefabEpic?: number;
    rarityPrefabLegendary?: number;
    rarityPrefabRare?: number;
    rarityPrefabUncommon?: number;
    "bonus-criticalChance"?: string;
    damage?: string;
    hearts?: string;
    eyeColor?: number;
    face?: number;
    gender?: SaveDataID;
    hair?: AppearanceHair;
    hat?: number;
    outfit?: number;
    skin?: number;
}
export interface BountyLoot {
    ID?: number;
    quantity?: number;
    type: HairType;
}
export interface StatBonus {
    amount: number;
    type: StatBonusType;
}
export interface PrefabComponent {
    guid?: string;
    properties: {
        [key: string]: Array<IndigoProperty | number | string> | boolean | IndecentProperty | number | null | string;
    };
    type?: string;
    collapsed?: boolean;
    tuid?: string;
    name?: string;
}
export interface IndigoProperty {
    args?: Array<boolean | number | null | string> | boolean | number | string;
    functionName?: string;
    guid?: string;
    propertyName?: FluffyPropertyName;
    function?: string;
    depth?: number;
    name?: string;
    attachToCamera?: boolean;
    blockSpell?: boolean;
    _name?: string;
    target?: number;
    color?: BackgroundColorEnum | number;
    attack?: number;
    sustain?: number;
    release?: number;
    blend?: number | string;
    delayPerTarget?: number;
    isBelow?: boolean;
    spineID?: string;
    animation?: PurpleAnimation;
    scale?: number;
    offset?: Anchor;
    _spineCount?: number;
    __type?: Type;
    returnToLoop?: ReturnToLoopEnum;
    delay?: number;
    _targetsAnimating?: number;
    _knockbackDistance?: number;
    _knockbackTime?: number;
    _returnTime?: number;
    _knockbackEase?: KnockbackEase;
    _returnEase?: ReturnEase;
    intensity?: number;
    eventName?: PropertyEventName;
    startOffset?: Anchor;
    endOffset?: Anchor;
    travelTime?: number;
    syncAnimation?: boolean;
    id?: ID;
    _startIndex?: number;
    _multiHit?: number;
}
export declare enum Type {
    KnockbackStep = "KnockbackStep",
    MultiHitEndStep = "MultiHitEndStep",
    MultiHitStartStep = "MultiHitStartStep",
    PlayAnimationStep = "PlayAnimationStep",
    PlaySpineStep = "PlaySpineStep",
    PlayTravelingSpineStep = "PlayTravelingSpineStep",
    TintSpineStep = "TintSpineStep",
    WaitForAnimationEventStep = "WaitForAnimationEventStep",
    WaitStep = "WaitStep"
}
export declare enum KnockbackEase {
    CircularOut = "circularOut"
}
export declare enum ReturnEase {
    ExponentialOut = "exponentialOut"
}
export declare enum PurpleAnimation {
    Animation = "animation",
    Attack = "attack",
    CastEnergyAstralblue = "cast-energy-astralblue",
    Create = "create",
    Create2 = "create2",
    Impact = "impact",
    ImpactLayer2 = "impact_layer2",
    ImpactPillar = "impact-pillar",
    ImpactSmokeBack = "impact-smoke-back",
    ImpactSmokeFront = "impact-smoke-front",
    Travel = "travel"
}
export declare enum PropertyEventName {
    Cast = "cast"
}
export declare enum ID {
    Multihit = "multihit"
}
export declare enum FluffyPropertyName {
    Active = "active",
    InputEnabled = "inputEnabled",
    InterfaceName = "interfaceName",
    Layer = "layer",
    Text = "text",
    UIMode = "uiMode",
    Visible = "_visible",
    X = "x"
}
export interface IndecentProperty {
    x?: number;
    y?: number;
    _magnitude?: number;
    _magnitudeSq?: number;
    _recalculateMagnitude?: boolean;
    _recalculateMagnitudeSq?: boolean;
    _x?: number | null;
    _y?: number | null;
    magnitude?: number;
    magnitudeSq?: number;
    recalculateMagnitude?: boolean;
    recalculateMagnitudeSq?: boolean;
    _ecalculateMagnitudeSq?: boolean;
    height?: number;
    width?: number;
    atlas?: string;
    flipX?: boolean;
    flipY?: boolean;
    frame?: string;
    rotation?: number;
    critChance?: CritChance;
    damage?: CritChance;
    health?: CritChance;
    _width?: number;
    _halfWidth?: number;
    _height?: number;
    _halfHeight?: number;
    rarityPrefabCommon?: number;
    rarityPrefabEpic?: number;
    rarityPrefabLegendary?: number;
    rarityPrefabRare?: number;
    rarityPrefabUncommon?: number;
    frameLocked?: string;
    frameMembership?: string;
    frameOwned?: string;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    blocksBuilt?: string;
    floorsBuilt?: string;
    shadowsDefeated?: string;
    shroudsAppeared?: string;
    shroudsCleared?: string;
    townLevelsGained?: string;
}
export interface PrizeWheel {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: PrizeWheelData;
    metadata: ReducedClass | null;
    name: string;
    createDate: Date;
}
export interface PrizeWheelData {
    slots: Slot[];
    itemPools: Array<CostElement[]>;
    atlas: string;
    wheelSprite: string;
    wheelTop: string;
    wheelTopOffset: Anchor;
    wheelPointer: string;
    wheelPointerOffset?: Anchor;
    itemDistanceScale?: number;
    askSpinDialogue?: string;
    spinningDialogue?: string;
    outOfSpinsDialogue?: string;
    spinAgainDialogue?: string;
    ticketDialogue?: string;
    eventType: string;
    name?: string;
    maxedItemPrizeSubstitute?: number;
    firstSpinDialogueID?: number;
    spinDialogueID?: number;
    declineSpinDialogueID?: number;
    spinningDialogueID?: number;
    prizeReceivedDialogueID?: number;
    outOfSpinsDialogueID?: number;
    spinAgainDialogueID?: number;
    firstSpinBreadcrumb?: FirstSpinBreadcrumb;
}
export interface FirstSpinBreadcrumb {
    featureName: string;
    breadcrumbName: string;
}
export interface Slot {
    itemPools: ItemPool[];
    weight: number;
}
export interface ItemPool {
    index: number;
    weight: number;
}
export interface QueryParameter {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: QueryParameterData;
    metadata: ReducedClass;
    name: string;
    createDate: Date;
}
export interface QueryParameterData {
    name: string;
    key: string;
    value: string;
}
export interface Relic {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: MountData;
    metadata: BundleMetadata;
    name: string;
    createDate: Date;
}
export interface Spell {
    ID: number;
    assetID: number;
    type: SpellType;
    gender: number;
    data: SpellData;
    metadata: SpellMetadata;
    name: string;
    createDate: Date;
}
export interface SpellData {
    name: string;
    price: number;
    damage: number;
    element: EarthElement;
    animation: string;
    heal?: boolean;
    type?: SpellType | null;
    epicId?: number | null;
    baseAttack?: number | string;
    statusEffects?: number[];
    cost?: CostElement[];
    energyCost?: number;
    tier?: number;
    targetType?: TargetType;
    nextTierID?: number;
    damageType?: DamageTypeEnum;
}
export declare enum DamageTypeEnum {
    Aoa = "aoa",
    Aoe = "aoe",
    Beam = "beam",
    Projectile = "projectile"
}
export declare enum TargetType {
    Aoe = "aoe",
    Single = "single"
}
export declare enum SpellType {
    EpicAttack = "epic-attack",
    Spell = "spell"
}
export interface SpellMetadata {
    vIcon: number;
    v?: number;
    type?: FemaleType;
    assets?: string[];
    animationData?: AnimationData;
}
export interface AnimationData {
    animationType: DamageTypeEnum;
    createLocation: CreateLocation;
    impactLocation: ImpactLocation;
    createRotates: boolean;
    createBeamDelay: number | string;
    travelRotates: boolean;
    travelEasing: TravelEasing;
    travelDuration: number;
    sustainDuration: number;
    endDuration: number;
    endEasing: EndEasing;
    impactRotates: boolean;
    impact2Delay: number;
    screenDim: boolean;
    charFromAnimation: CharFromAnimation;
    charToAnimation: CharToAnimation;
    charToAnimationDelay: number | null;
    charToAnimationLength: number | null;
    travelStraight: boolean;
    impact2Offset?: Impact2Offset;
    fullTeamAttack?: boolean;
    castingAnimation?: CastingAnimation;
    endingMask?: boolean;
}
export interface CastingAnimation {
    type: BattleAssetType;
    ID: number;
    offset: Anchor;
    animation: string;
}
export declare enum CharFromAnimation {
    None = "none",
    Vibrate = "vibrate"
}
export declare enum CharToAnimation {
    Damage = "damage",
    None = "none"
}
export interface CreateLocation {
    createOffsetX: number | null;
    createOffsetY: number;
    createy?: number;
    createx?: number;
}
export declare enum EndEasing {
    ElasticIn = "Elastic.In",
    LinearNone = "Linear.None"
}
export interface Impact2Offset {
    impact2OffsetX: number;
    impact2OffsetY: number;
}
export interface ImpactLocation {
    impactx: number | null;
    impacty: number | null;
    offsety?: number;
    offsetx?: number;
}
export declare enum TravelEasing {
    LinearNone = "Linear.None",
    QuadraticIn = "Quadratic.In"
}
export interface SpellRelic {
    ID: number;
    assetID: number;
    type: SpellRelicType;
    gender: number;
    data: SpellRelicData;
    metadata: AffixMetadata;
    name: string;
    createDate: Date;
}
export interface SpellRelicData {
    spellID: number;
    drop: number;
    rarity: number;
    name: string;
    flavorText: string;
    lockLevel?: number;
    levelLock?: number;
}
export declare enum SpellRelicType {
    SpellRelic = "spellRelic"
}
export interface SpellV2 {
    ID: number;
    assetID: number;
    type: SpellV2Type;
    gender: number;
    data: SpellV2Data;
    metadata: SpellV2Metadata;
    name: string;
    createDate: Date;
}
export interface SpellV2Data {
    name: string;
    element: EarthElement;
    delivery: Delivery;
    target: TargetClass;
    cost: number;
    damage: number;
    accuracy: number;
    critical: number;
    hits: number;
    warmup: number;
    cooldown: number;
    affixes: Affixes;
    flag: null | string;
    flagValue: number | null;
}
export interface Affixes {
    statusEffect: null | string;
    buffStrength: number | null;
    buffDefence: number | null;
    buffSpeed: number | null;
    buffAccuracy: null;
    buffCritical: number | null;
    buffDodge: null;
    affixChance: number | null;
    affixDuration: number | null;
}
export declare enum Delivery {
    Above = "above",
    Below = "below",
    Direct = "direct",
    Melee = "melee",
    Projectile = "projectile"
}
export interface TargetClass {
    team: Team;
    unit: Unit;
}
export declare enum Team {
    Enemy = "enemy",
    Own = "own"
}
export declare enum Unit {
    Ally = "ally",
    Random = "random",
    Self = "self",
    Single = "single",
    Team = "team"
}
export interface SpellV2Metadata {
    guid?: string;
    spellIcon?: null;
    spellAnim?: null;
    assets?: MagentaAssets;
}
export interface MagentaAssets {
    default: IconClass;
    icon: IconClass;
}
export declare enum SpellV2Type {
    SpellV2 = "spellV2"
}
export interface StreamedMap {
    ID: number;
    assetID: number;
    type: StreamedMapType;
    gender: number;
    data: StreamedMapData;
    metadata: BitmapFontMetadata;
    name: string;
    createDate: Date;
}
export interface StreamedMapData {
    name: string;
    filename: string;
}
export declare enum StreamedMapType {
    StreamedMap = "streamedMap"
}
export interface Titan {
    ID: number;
    assetID: number;
    type: string;
    gender: number;
    data: TitanData;
    metadata: TitanMetadata;
    name: string;
    createDate: Date;
}
export interface TitanData {
    name: string;
    zone: TargetZoneEnum;
    maxHealth: number;
    element: EarthElement;
    difficulty: number;
    nameLocKey: string;
    spellList: number[];
    rewards: PurpleReward[];
    spine: string;
}
export interface PurpleReward {
    rank: number;
    threshold: number;
    mailKey: MailKey;
    attachments: CostElement[];
    mapping: number[];
}
export declare enum MailKey {
    TitanReward = "titanReward"
}
export interface TitanMetadata {
    type: FemaleType;
    assets: FriskyAssets;
}
export interface FriskyAssets {
    default: IndecentDefault;
}
export interface IndecentDefault {
    type: BattleAssetType;
    v: number;
    hitbox?: ReducedHitbox;
}
export interface UI {
    ID: number;
    assetID?: number;
    type: InstanceTypeEnum;
    gender?: number;
    data: UIData;
    metadata: ReducedClass;
    name?: string;
    createDate?: Date;
}
export interface UIData {
    name?: string;
    elements?: FluffyElement[];
    templates?: Template[];
    data?: DataData;
    metadata?: ReducedClass;
}
export interface DataData {
    name: string;
    elements: PurpleElement[];
}
export interface PurpleElement {
    type: ElementType;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    children: any[];
}
export interface FluffyElement {
    type: ElementType;
    name?: string;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    width?: number;
    relativeHeight?: number;
    atlasID?: number | string;
    baseFrameName?: string;
    sliceType?: SliceType;
    children?: ElementChild[];
    height?: number;
    x?: number;
    y?: number;
    relativeWidth?: number;
    textKey?: string;
    frameName?: string;
    activeTrackBaseFrameName?: string;
    inactiveTrackBaseFrameName?: string;
    showHead?: boolean;
    isVertical?: boolean;
    isInteractive?: boolean;
    thumbAnchor?: Anchor;
    spineKey?: string;
    visible?: boolean;
    isThreeSlice?: boolean;
    frameNameOn?: string;
    frameNameOff?: string;
    defaultToggleState?: number;
}
export interface ElementChild {
    type: ElementType;
    name?: string;
    relativeWidth?: number;
    relativeHeight?: number;
    children?: FriskyChild[];
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    atlasID?: number;
    baseFrameName?: string;
    text?: string;
    visible?: boolean;
    layoutConfig?: LayoutConfig;
    sliceType?: SliceType;
    frameName?: string;
    textKey?: string;
    fontID?: number;
    fontSize?: number;
    upStateName?: string;
    downStateName?: string;
    buttonTextName?: string;
    hoverLiftDistance?: number;
    atlasName?: AtlasName;
    wordWrap?: boolean;
    style?: number;
    color?: ColorEnum;
    align?: BoundsAlignH;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    toggle?: boolean;
    textOffset?: number;
    forceUpperCase?: boolean;
    activeTrackBaseFrameName?: string;
    inactiveTrackBaseFrameName?: string;
    thumbFrameName?: string;
    showHead?: boolean;
    isVertical?: boolean;
    isInteractive?: boolean;
    thumbAnchor?: Anchor;
    scaleX?: number;
    lineSpacing?: number;
    singleImageID?: number;
    tint?: number;
    overStateName?: FluffyOverStateName;
}
export declare enum AtlasName {
    Empty = "",
    UIShared = "ui-shared"
}
export interface FriskyChild {
    type: ElementType;
    name?: string;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    relativeHeight?: number;
    relativeWidth?: number;
    visible?: boolean;
    children?: MischievousChild[];
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    atlasID?: number;
    baseFrameName?: string;
    sliceType?: SliceType;
    textKey?: string;
    fontID?: number;
    fontSize?: number;
    horizontalAlignment?: BoundsAlignH;
    verticalAlignment?: BoundsAlignH;
    text?: string;
    layoutConfig?: LayoutConfig;
    style?: number;
    color?: string;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    align?: BoundsAlignH;
    frameName?: string;
    tabID?: number;
    isThreeSlice?: boolean;
    upStateName?: string;
    downStateName?: string;
    buttonTextName?: string;
    hoverLiftDistance?: number;
    horizontalFlip?: boolean;
    atlasName?: string;
    thumbFrameName?: string;
    trackFrameName?: string;
    spineKey?: string;
    wordWrap?: boolean;
    textOffset?: number;
    groupID?: number;
    lineSpacing?: number;
    forceUpperCase?: boolean;
    isVertical?: boolean;
    rotateSprites?: boolean;
    anxhorY?: number;
    toggle?: boolean;
    scaleX?: number;
    overStateName?: PurpleOverStateName;
    singleImageID?: number;
    scaleY?: number;
    wordWrapWidth?: number;
}
export interface MischievousChild {
    type: ElementType;
    name?: string;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    atlasID?: number;
    frameName?: string;
    x?: number;
    y?: number;
    relativeWidth?: number;
    relativeHeight?: number;
    children?: BraggadociousChild[];
    width?: number;
    height?: number;
    baseFrameName?: string;
    sliceType?: SliceType;
    textKey?: string;
    fontID?: number;
    fontSize?: number;
    horizontalAlignment?: BoundsAlignH;
    forceUpperCase?: boolean;
    visible?: boolean;
    text?: string;
    style?: number;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    align?: BoundsAlignH;
    color?: string;
    thumbFrameName?: string;
    activeTrackBaseFrameName?: string;
    inactiveTrackBaseFrameName?: string;
    isVertical?: boolean;
    verticalAlignment?: BoundsAlignH;
    atlasName?: AtlasName;
    layoutConfig?: LayoutConfig;
    wordWrap?: boolean;
    scrollContentsName?: string;
    enableTouchScroll?: boolean;
    trackFrameName?: string;
    upStateName?: string;
    downStateName?: string;
    buttonTextName?: string;
    hoverLiftDistance?: number;
    toggle?: boolean;
    lineSpacing?: number;
    rotateSprites?: boolean;
    scaleX?: number;
    showHead?: boolean;
    isInteractive?: boolean;
    thumbAnchor?: Anchor;
    spineKey?: string;
    singleImageID?: number;
}
export interface BraggadociousChild {
    type: ElementType;
    name?: string;
    relativeHeight?: number;
    relativeWidth?: number;
    text?: string;
    fontID?: number;
    fontSize?: number;
    horizontalAlignment?: BoundsAlignH;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    atlasID?: number;
    baseFrameName?: string;
    sliceType?: SliceType;
    textKey?: string;
    verticalAlignment?: BoundsAlignH;
    visible?: boolean;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    frameName?: string;
    forceUpperCase?: boolean;
    children?: Child1[];
    activeTrackBaseFrameName?: string;
    inactiveTrackBaseFrameName?: string;
    endCapAtlas?: string;
    endCapFrameName?: string;
    showHead?: boolean;
    isVertical?: boolean;
    isInteractive?: boolean;
    scrollContentsName?: string;
    enableTouchScroll?: boolean;
    thumbFrameName?: string;
    trackFrameName?: string;
    upStateName?: string;
    downStateName?: string;
    buttonTextName?: string;
    hoverLiftDistance?: number;
    style?: number;
    color?: string;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    wordWrap?: boolean;
    layoutConfig?: LayoutConfig;
    atlasName?: AtlasName;
    singleImageID?: number;
    tint?: number;
}
export interface Child1 {
    type: ElementType;
    name: string;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    atlasID?: number;
    frameName?: string;
    relativeHeight?: number;
    relativeWidth?: number;
    textKey?: string;
    fontID?: number;
    fontSize?: number;
    horizontalAlignment?: BoundsAlignH;
    verticalAlignment?: BoundsAlignH;
    layoutConfig?: LayoutConfig;
    baseFrameName?: string;
    sliceType?: SliceType;
    height?: number;
    text?: string;
    forceUpperCase?: boolean;
    children?: Child2[];
    style?: number;
    wordWrap?: boolean;
    wordWrapWidth?: number;
    color?: PurpleColor;
    lineSpacing?: number;
    width?: number;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    atlasName?: AtlasName;
}
export interface Child2 {
    type: ElementType;
    name: string;
    relativeX: number;
    relativeY: number;
    anchorX: number;
    anchorY: number;
    style?: number;
    fontSize?: number;
    color?: ColorEnum;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    lineSpacing?: number;
    atlasID?: number;
    frameName?: string;
    width?: number;
    height?: number;
    activeTrackBaseFrameName?: string;
    inactiveTrackBaseFrameName?: string;
    thumbFrameName?: string;
    showHead?: boolean;
    isVertical?: boolean;
    isInteractive?: boolean;
    thumbAnchor?: Anchor;
}
export declare enum PurpleColor {
    C16A2C = "#c16a2c",
    The363636 = "#363636",
    The3687Ba = "#3687ba"
}
export interface LayoutConfig {
    type: FillPriorityEnum;
    alignment: BoundsAlignH;
    offset?: number;
    spacing?: number;
    ignoreInvisible?: boolean;
}
export declare enum SliceType {
    Nine = "nine",
    NineScale = "nineScale",
    Three = "three",
    ThreeScale = "threeScale"
}
export declare enum PurpleOverStateName {
    WatchNowGraphicOverContainer = "watchNowGraphicOverContainer"
}
export declare enum FluffyOverStateName {
    GoNowGraphicOver = "goNowGraphicOver",
    WatchVideoGraphicOver = "watchVideoGraphicOver"
}
export interface Template {
    type: ElementType;
    name: string;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    width?: number;
    height?: number;
    atlasID?: number;
    baseFrameName?: string;
    sliceType?: SliceType;
    children?: TemplateChild[];
    frameName?: string;
    relativeWidth?: number;
    relativeHeight?: number;
    visible?: boolean;
    x?: number;
    y?: number;
    layoutConfig?: LayoutConfig;
    atlasName?: AtlasName;
    text?: string;
    style?: number;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    upStateName?: string;
    downStateName?: string;
    buttonTextName?: string;
    hoverLiftDistance?: number;
    toggle?: boolean;
}
export interface TemplateChild {
    type: ElementType;
    name: string;
    relativeWidth?: number;
    relativeHeight?: number;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    height?: number;
    text?: string;
    fontID?: number;
    fontSize?: number;
    horizontalAlignment?: BoundsAlignH;
    verticalAlignment?: BoundsAlignH;
    visible?: boolean;
    atlasID?: number;
    baseFrameName?: string;
    sliceType?: SliceType;
    children?: Child3[];
    x?: number;
    color?: FluffyColor;
    lineSpacing?: number;
    style?: number;
    wordWrap?: boolean;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    align?: BoundsAlignH;
    wordWrapWidth?: number;
    width?: number;
    frameName?: string;
    isThreeSlice?: boolean;
    textKey?: string;
    y?: number;
    forceUpperCase?: boolean;
    upStateName?: string;
    downStateName?: string;
    buttonTextName?: string;
    hoverLiftDistance?: number;
    isVertical?: boolean;
    spineKey?: string;
    atlasName?: AtlasName;
    rotateSprites?: boolean;
    toggle?: boolean;
}
export interface Child3 {
    type: ElementType;
    name: string;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    atlasID?: number;
    frameName?: string;
    anchorX?: number;
    relativeWidth?: number;
    relativeHeight?: number;
    baseFrameName?: string;
    sliceType?: SliceType;
    visible?: boolean;
    children?: Child4[];
    text?: string;
    fontID?: number;
    fontSize?: number;
    horizontalAlignment?: BoundsAlignH;
    verticalAlignment?: BoundsAlignH;
    height?: number;
    activeTrackBaseFrameName?: string;
    inactiveTrackBaseFrameName?: string;
    thumbFrameName?: string;
    thumbAnchor?: Anchor;
    isVertical?: boolean;
    isInteractive?: boolean;
    width?: number;
    wordWrap?: boolean;
    color?: string;
    textKey?: string;
    align?: BoundsAlignH;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    style?: number;
    horizontalFlip?: boolean;
    forceUpperCase?: boolean;
    x?: number;
    y?: number;
    atlasName?: AtlasName;
    layoutConfig?: LayoutConfig;
    showHead?: boolean;
    spineKey?: string;
    upStateName?: string;
    downStateName?: string;
    buttonTextName?: string;
    hoverLiftDistance?: number;
    toggle?: boolean;
    textOffset?: number;
    url?: string;
    autoStart?: boolean;
    manuallyCreate?: boolean;
    videoScaleX?: number;
    videoScaleY?: number;
}
export interface Child4 {
    type: ElementType;
    name: string;
    relativeHeight?: number;
    relativeWidth?: number;
    anchorX?: number;
    anchorY?: number;
    relativeX?: number;
    relativeY?: number;
    text?: string;
    fontID?: number;
    fontSize?: number;
    horizontalAlignment?: BoundsAlignH;
    verticalAlignment?: BoundsAlignH;
    atlasID?: number;
    frameName?: string;
    textKey?: string;
    forceUpperCase?: boolean;
    width?: number;
    height?: number;
    y?: number;
    style?: number;
    color?: FluffyColor;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    wordWrap?: boolean;
    x?: number;
    align?: BoundsAlignH;
    children?: Child5[];
    offset?: number;
    activeTrackBaseFrameName?: string;
    inactiveTrackBaseFrameName?: string;
    endCapAtlas?: string;
    endCapFrameName?: string;
    showHead?: boolean;
    isVertical?: boolean;
    isInteractive?: boolean;
    baseFrameName?: string;
    sliceType?: SliceType;
    visible?: boolean;
    lineSpacing?: number;
    atlasName?: AtlasName;
    fieldColour?: string;
    placeholderText?: string;
    isPassword?: boolean;
    hoverLiftDistance?: number;
}
export interface Child5 {
    type: ElementType;
    name: string;
    textKey?: string;
    forceUpperCase?: boolean;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    anchorX?: number;
    anchorY?: number;
    style?: number;
    fontSize?: number;
    color?: string;
    align?: BoundsAlignH;
    boundsAlignH?: BoundsAlignH;
    boundsAlignV?: BoundsAlignH;
    relativeWidth?: number;
    relativeHeight?: number;
    relativeX?: number;
    relativeY?: number;
    atlasID?: number;
    frameName?: string;
    visible?: boolean;
    children?: Child6[];
    text?: string;
    wordWrap?: boolean;
    baseFrameName?: string;
    sliceType?: SliceType;
}
export interface Child6 {
    type: ElementType;
    name: string;
    text?: string;
    relativeX: number;
    relativeY: number;
    anchorX: number;
    anchorY: number;
    wordWrap: boolean;
    style: number;
    boundsAlignH: BoundsAlignH;
    boundsAlignV: BoundsAlignH;
    textKey?: string;
    relativeHeight?: number;
    relativeWidth?: number;
    fontSize?: number;
    color?: ColorEnum;
}
export declare enum FluffyColor {
    Black = "black",
    E83E45 = "#E83E45",
    Ffffff = "#ffffff",
    The000000 = "#000000",
    The363636 = "#363636",
    The372623 = "#372623",
    The865Fb1 = "#865FB1"
}
export interface UltimatesQuestItem {
    ID: number;
    assetID: number;
    type: HairType;
    gender: number;
    data: UltimatesQuestItemData;
    metadata: UltimatesQuestItemMetadata;
    name: string;
    createDate: Date;
}
export interface UltimatesQuestItemData {
    name: string;
    member: number;
    rarity: number;
    flavorText: string;
    targetZone: TargetZoneEnum;
}
export interface UltimatesQuestItemMetadata {
    vIcon: number;
    assets: IndecentAssets;
}
export interface Weapon {
    ID: number;
    assetID: number;
    type: TypeElement;
    gender: number;
    data: WeaponData;
    metadata: WeaponMetadata;
    name: string;
    createDate: Date;
}
export interface WeaponData {
    drop: number;
    name: string;
    price: number;
    member: number;
    rarity: number;
    effects: number[];
    flavorText: string;
    spellID?: number;
    lockLevel?: number;
    memberAd?: number;
    cost?: CostElement[];
    "en-us"?: string;
}
export interface WeaponMetadata {
    v: number;
    size: number;
    type: FemaleType;
    angle: number;
    vIcon: number;
    anchor: Anchor;
    x?: number;
    y?: number;
    cacheError?: boolean;
    "anchor "?: Anchor;
    assetVersions?: Version[];
    iconVersions?: Version[];
    noCache?: boolean;
    rewardsExclusive?: boolean;
}
