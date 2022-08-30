"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ease = exports.PathfinderEnum = exports.ParametersLayer = exports.Game = exports.EventType = exports.FunnelType = exports.FunnelName = exports.ParametersEventName = exports.EventDataType = exports.DurationMSEnum = exports.CreatureEnum = exports.Config = exports.ComponentTypeEnum = exports.Character = exports.ReturnToLoopEnum = exports.FontStyleType = exports.ColorEnum = exports.FontFamilyEnum = exports.StickyType = exports.FeatureRequirementType = exports.FaceType = exports.FlavorText = exports.EyeColorType = exports.EmoteType = exports.DungeonType = exports.DormbgType = exports.TentacledType = exports.HorizontalType = exports.Category = exports.DialogueType = exports.FrameName = exports.PurpleZone = exports.BountyNameType = exports.TemplateType = exports.BossType = exports.BattleAssetType = exports.SaveDataID = exports.AstralElement = exports.FluffyType = exports.PurpleType = exports.FemaleType = exports.AdType = exports.NameEnum = exports.Method = exports.AchievementGroupType = exports.AchievementType = exports.TargetZoneEnum = exports.TypeElement = exports.MapKey = exports.EarthElement = void 0;
exports.FluffyClipName = exports.StrokeColor = exports.FluffyShadowColor = exports.MapTag = exports.InstanceTypeEnum = exports.DefaultTriggerData = exports.BackgroundColorEnum = exports.PurpleShadowColor = exports.FunctionName = exports.ArgEnum = exports.FontWeight = exports.FillPriorityEnum = exports.PropertyName = exports.OnFinishedPropertyName = exports.CompleteBgColor = exports.ComparisonFunction = exports.PurpleClipName = exports.PropertiesText = exports.Frame = exports.Font = exports.BoundsAlignH = exports.ElementType = exports.Growth = exports.NicknameType = exports.NameType = exports.MathTownInteriorType = exports.MathTownDecorType = exports.KeyType = exports.ItemTableType = exports.IconEnum = exports.HilariousType = exports.TargetEnum = exports.StatBonusType = exports.InteractableType = exports.HairType = exports.ConditionEnum = exports.SuccessType = exports.Colour = exports.ButtonName = exports.ButtonText = exports.ActionName = exports.GameFeedType = exports.TitleEnum = exports.ActionEnum = exports.EventAction = exports.FxType = exports.IndecentType = exports.FSMType = exports.OperatorEnum = exports.IndigoType = void 0;
exports.FluffyColor = exports.FluffyOverStateName = exports.PurpleOverStateName = exports.SliceType = exports.PurpleColor = exports.AtlasName = exports.MailKey = exports.StreamedMapType = exports.SpellV2Type = exports.Unit = exports.Team = exports.Delivery = exports.SpellRelicType = exports.TravelEasing = exports.EndEasing = exports.CharToAnimation = exports.CharFromAnimation = exports.SpellType = exports.TargetType = exports.DamageTypeEnum = exports.FluffyPropertyName = exports.ID = exports.PropertyEventName = exports.PurpleAnimation = exports.ReturnEase = exports.KnockbackEase = exports.Type = exports.PurplePropertyName = exports.PurpleLayer = exports.TintColor = exports.TintEnum = exports.PurpleStroke = exports.TentacledShadowColor = exports.PurpleFont = void 0;
var EarthElement;
(function (EarthElement) {
    EarthElement["Astral"] = "astral";
    EarthElement["Earth"] = "earth";
    EarthElement["Empty"] = "";
    EarthElement["Fire"] = "fire";
    EarthElement["Ice"] = "ice";
    EarthElement["IceFire"] = "ice & fire";
    EarthElement["Mech"] = "mech";
    EarthElement["Neutral"] = "neutral";
    EarthElement["Physical"] = "physical";
    EarthElement["Plant"] = "plant";
    EarthElement["Shadow"] = "shadow";
    EarthElement["Special"] = "special";
    EarthElement["Storm"] = "storm";
    EarthElement["Water"] = "water";
    EarthElement["Wizard"] = "wizard";
})(EarthElement = exports.EarthElement || (exports.EarthElement = {}));
var MapKey;
(function (MapKey) {
    MapKey["AcademyCR2"] = "academy-CR2";
    MapKey["AcademyGH1"] = "academy-GH1";
    MapKey["AcademyGH2"] = "academy-GH2";
    MapKey["AcademyGH3"] = "academy-GH3";
    MapKey["EarthtowerCR"] = "earthtower-CR";
    MapKey["EarthtowerWR"] = "earthtower-WR";
    MapKey["HouseExterior"] = "house-exterior";
    MapKey["IcetowerCR"] = "icetower-CR";
    MapKey["IcetowerWR"] = "icetower-WR";
    MapKey["LamplightB3"] = "lamplight-B3";
    MapKey["Map"] = "$map";
    MapKey["ReturnMap"] = "$returnMap";
    MapKey["ShiverchillB2"] = "shiverchill-B2";
    MapKey["TowerTownA0"] = "tower_town-A0";
})(MapKey = exports.MapKey || (exports.MapKey = {}));
var TypeElement;
(function (TypeElement) {
    TypeElement["Boots"] = "boots";
    TypeElement["Currency"] = "currency";
    TypeElement["Dorm"] = "dorm";
    TypeElement["Empty"] = "";
    TypeElement["Follow"] = "follow";
    TypeElement["Fossil"] = "fossil";
    TypeElement["GiftBox"] = "giftBox";
    TypeElement["Hat"] = "hat";
    TypeElement["Item"] = "item";
    TypeElement["Mount"] = "mount";
    TypeElement["Outfit"] = "outfit";
    TypeElement["Pet"] = "pet";
    TypeElement["Prefab"] = "prefab";
    TypeElement["Relic"] = "relic";
    TypeElement["Weapon"] = "weapon";
})(TypeElement = exports.TypeElement || (exports.TypeElement = {}));
var TargetZoneEnum;
(function (TargetZoneEnum) {
    TargetZoneEnum["Academy"] = "academy";
    TargetZoneEnum["BonfireSpire"] = "bonfire_spire";
    TargetZoneEnum["Forest"] = "forest";
    TargetZoneEnum["ShipwreckShore"] = "shipwreck_shore";
    TargetZoneEnum["Shiverchill"] = "shiverchill";
    TargetZoneEnum["Skywatch"] = "skywatch";
})(TargetZoneEnum = exports.TargetZoneEnum || (exports.TargetZoneEnum = {}));
var AchievementType;
(function (AchievementType) {
    AchievementType["Achievement"] = "achievement";
})(AchievementType = exports.AchievementType || (exports.AchievementType = {}));
var AchievementGroupType;
(function (AchievementGroupType) {
    AchievementGroupType["AchievementGroup"] = "achievementGroup";
})(AchievementGroupType = exports.AchievementGroupType || (exports.AchievementGroupType = {}));
var Method;
(function (Method) {
    Method["Empty"] = "";
    Method["OpenLinkAtHome"] = "openLinkAtHome";
    Method["OpenMembershipSignUp"] = "openMembershipSignUp";
    Method["OpenVideo"] = "openVideo";
    Method["Teleport"] = "teleport";
    Method["TravelToFestival"] = "travelToFestival";
    Method["TravelToZone"] = "travelToZone";
})(Method = exports.Method || (exports.Method = {}));
var NameEnum;
(function (NameEnum) {
    NameEnum["Empty"] = "";
    NameEnum["GoNowButton"] = "goNowButton";
    NameEnum["PlayVideoButton"] = "playVideoButton";
    NameEnum["WatchVideoButton"] = "watchVideoButton";
})(NameEnum = exports.NameEnum || (exports.NameEnum = {}));
var AdType;
(function (AdType) {
    AdType["Ad"] = "ad";
})(AdType = exports.AdType || (exports.AdType = {}));
var FemaleType;
(function (FemaleType) {
    FemaleType["Atlas"] = "atlas";
    FemaleType["Multiple"] = "multiple";
    FemaleType["SingleImage"] = "singleImage";
})(FemaleType = exports.FemaleType || (exports.FemaleType = {}));
var PurpleType;
(function (PurpleType) {
    PurpleType["Affix"] = "affix";
})(PurpleType = exports.PurpleType || (exports.PurpleType = {}));
var FluffyType;
(function (FluffyType) {
    FluffyType["Cover"] = "cover";
    FluffyType["Empty"] = "";
    FluffyType["Hat"] = "Hat";
    FluffyType["Mask"] = "mask";
    FluffyType["Wrap"] = "wrap";
})(FluffyType = exports.FluffyType || (exports.FluffyType = {}));
var AstralElement;
(function (AstralElement) {
    AstralElement["Astral"] = "astral";
    AstralElement["Ice"] = "ice";
    AstralElement["Shadow"] = "shadow";
})(AstralElement = exports.AstralElement || (exports.AstralElement = {}));
var SaveDataID;
(function (SaveDataID) {
    SaveDataID["Female"] = "female";
    SaveDataID["Male"] = "male";
})(SaveDataID = exports.SaveDataID || (exports.SaveDataID = {}));
var BattleAssetType;
(function (BattleAssetType) {
    BattleAssetType["Atlas"] = "atlas";
    BattleAssetType["Spine"] = "spine";
    BattleAssetType["Spritesheet"] = "spritesheet";
})(BattleAssetType = exports.BattleAssetType || (exports.BattleAssetType = {}));
var BossType;
(function (BossType) {
    BossType["Boss"] = "boss";
})(BossType = exports.BossType || (exports.BossType = {}));
var TemplateType;
(function (TemplateType) {
    TemplateType["PetName"] = "pet-name";
})(TemplateType = exports.TemplateType || (exports.TemplateType = {}));
var BountyNameType;
(function (BountyNameType) {
    BountyNameType["BountyName"] = "bountyName";
})(BountyNameType = exports.BountyNameType || (exports.BountyNameType = {}));
var PurpleZone;
(function (PurpleZone) {
    PurpleZone["Any"] = "any";
    PurpleZone["Empty"] = "";
})(PurpleZone = exports.PurpleZone || (exports.PurpleZone = {}));
var FrameName;
(function (FrameName) {
    FrameName["Empty"] = "";
    FrameName["Face0"] = "face_0";
    FrameName["Face1"] = "face_1";
    FrameName["Face10"] = "face_10";
    FrameName["Face15"] = "face_15";
    FrameName["Face2"] = "face_2";
    FrameName["Face3"] = "face_3";
    FrameName["Face4"] = "face_4";
    FrameName["Face5"] = "face_5";
    FrameName["Face6"] = "face_6";
    FrameName["Face7"] = "face_7";
    FrameName["Face8"] = "face_8";
    FrameName["Face9"] = "face_9";
})(FrameName = exports.FrameName || (exports.FrameName = {}));
var DialogueType;
(function (DialogueType) {
    DialogueType["Dialogue"] = "dialogue";
})(DialogueType = exports.DialogueType || (exports.DialogueType = {}));
var Category;
(function (Category) {
    Category["Comfy"] = "Comfy";
    Category["Empty"] = "";
    Category["Items"] = "Items";
    Category["Lamps"] = "Lamps";
    Category["Plants"] = "Plants";
    Category["Storage"] = "Storage";
    Category["Surface"] = "Surface";
    Category["Wall"] = "Wall";
})(Category = exports.Category || (exports.Category = {}));
var HorizontalType;
(function (HorizontalType) {
    HorizontalType["Empty"] = "";
    HorizontalType["Prefab"] = "prefab";
    HorizontalType["SingleImage"] = "singleImage";
    HorizontalType["Spine"] = "spine";
})(HorizontalType = exports.HorizontalType || (exports.HorizontalType = {}));
var TentacledType;
(function (TentacledType) {
    TentacledType["Multiple"] = "multiple";
    TentacledType["Spine"] = "spine";
})(TentacledType = exports.TentacledType || (exports.TentacledType = {}));
var DormbgType;
(function (DormbgType) {
    DormbgType["Dormbg"] = "dormbg";
})(DormbgType = exports.DormbgType || (exports.DormbgType = {}));
var DungeonType;
(function (DungeonType) {
    DungeonType["Dungeon"] = "dungeon";
})(DungeonType = exports.DungeonType || (exports.DungeonType = {}));
var EmoteType;
(function (EmoteType) {
    EmoteType["Emote"] = "emote";
})(EmoteType = exports.EmoteType || (exports.EmoteType = {}));
var EyeColorType;
(function (EyeColorType) {
    EyeColorType["EyeColor"] = "eyeColor";
    EyeColorType["HairColor"] = "hairColor";
})(EyeColorType = exports.EyeColorType || (exports.EyeColorType = {}));
var FlavorText;
(function (FlavorText) {
    FlavorText["BuyingThisWillChangeYourFaceStyle"] = "Buying this will change your face style!";
    FlavorText["BuyingThisWillChangeYourSkinTone"] = "Buying this will change your skin tone!";
    FlavorText["FlavorTextBuyingThisWillChangeYourFaceStyle"] = "Buying this will change your face style.";
})(FlavorText = exports.FlavorText || (exports.FlavorText = {}));
var FaceType;
(function (FaceType) {
    FaceType["Face"] = "face";
    FaceType["SkinColor"] = "skinColor";
})(FaceType = exports.FaceType || (exports.FaceType = {}));
var FeatureRequirementType;
(function (FeatureRequirementType) {
    FeatureRequirementType["FeatureRequirements"] = "featureRequirements";
})(FeatureRequirementType = exports.FeatureRequirementType || (exports.FeatureRequirementType = {}));
var StickyType;
(function (StickyType) {
    StickyType["Legacy"] = "legacy";
    StickyType["Pet"] = "pet";
    StickyType["Spine"] = "spine";
})(StickyType = exports.StickyType || (exports.StickyType = {}));
var FontFamilyEnum;
(function (FontFamilyEnum) {
    FontFamilyEnum["ABeeZee"] = "ABeeZee";
    FontFamilyEnum["FredokaOne"] = "Fredoka One";
    FontFamilyEnum["LuckiestGuy"] = "Luckiest Guy";
    FontFamilyEnum["PaytoneOne"] = "Paytone One";
})(FontFamilyEnum = exports.FontFamilyEnum || (exports.FontFamilyEnum = {}));
var ColorEnum;
(function (ColorEnum) {
    ColorEnum["Black"] = "black";
    ColorEnum["Cccccc"] = "#CCCCCC";
    ColorEnum["Ea3423"] = "#ea3423";
    ColorEnum["Empty"] = "";
    ColorEnum["Ff0000"] = "#FF0000";
    ColorEnum["Ffffff"] = "#ffffff";
    ColorEnum["StrokeCccccc"] = "#cccccc";
    ColorEnum["StrokeFFFFFF"] = "#FFFFFF";
    ColorEnum["StrokeFfffff"] = "#Ffffff";
    ColorEnum["The000000"] = "#000000";
    ColorEnum["The1023D7"] = "#1023d7";
    ColorEnum["The25152D"] = "#25152d";
    ColorEnum["The2F2F2F"] = "#2f2f2f";
    ColorEnum["The324287"] = "#324287";
    ColorEnum["The363636"] = "#363636";
    ColorEnum["The385Ebc"] = "#385EBC";
    ColorEnum["The656565"] = "#656565";
})(ColorEnum = exports.ColorEnum || (exports.ColorEnum = {}));
var FontStyleType;
(function (FontStyleType) {
    FontStyleType["FontStyle"] = "fontStyle";
})(FontStyleType = exports.FontStyleType || (exports.FontStyleType = {}));
var ReturnToLoopEnum;
(function (ReturnToLoopEnum) {
    ReturnToLoopEnum["Idle"] = "idle";
    ReturnToLoopEnum["Lantern1Glow"] = "lantern-1-glow";
    ReturnToLoopEnum["Lantern2Glow"] = "lantern-2-glow";
})(ReturnToLoopEnum = exports.ReturnToLoopEnum || (exports.ReturnToLoopEnum = {}));
var Character;
(function (Character) {
    Character["Florian"] = "florian";
    Character["Gale"] = "gale";
    Character["Merchant"] = "merchant";
    Character["Noot"] = "noot";
    Character["Pippet"] = "pippet";
    Character["Puppetmaster"] = "puppetmaster";
})(Character = exports.Character || (exports.Character = {}));
var ComponentTypeEnum;
(function (ComponentTypeEnum) {
    ComponentTypeEnum["AnyBooleanStateCombiner"] = "AnyBooleanStateCombiner";
    ComponentTypeEnum["BooleanState"] = "BooleanState";
    ComponentTypeEnum["BooleanStateVisibility"] = "BooleanStateVisibility";
    ComponentTypeEnum["BreadcrumbFeature"] = "BreadcrumbFeature";
    ComponentTypeEnum["Button"] = "Button";
    ComponentTypeEnum["ButtonStateSoundEffect"] = "ButtonStateSoundEffect";
    ComponentTypeEnum["CirclePrimitive"] = "CirclePrimitive";
    ComponentTypeEnum["ColorTintFilter"] = "ColorTintFilter";
    ComponentTypeEnum["CounterText"] = "CounterText";
    ComponentTypeEnum["DynamicProgressBar"] = "DynamicProgressBar";
    ComponentTypeEnum["ElementalPetDisplay"] = "ElementalPetDisplay";
    ComponentTypeEnum["GameObjectTransition"] = "GameObjectTransition";
    ComponentTypeEnum["Graphic"] = "Graphic";
    ComponentTypeEnum["Image"] = "Image";
    ComponentTypeEnum["InputOverlay"] = "InputOverlay";
    ComponentTypeEnum["ItemAssetIcon"] = "ItemAssetIcon";
    ComponentTypeEnum["ItemCard"] = "ItemCard";
    ComponentTypeEnum["LegacyTransform"] = "LegacyTransform";
    ComponentTypeEnum["LegacyTransformRelay"] = "LegacyTransformRelay";
    ComponentTypeEnum["LocalizationKeyText"] = "LocalizationKeyText";
    ComponentTypeEnum["LocalizedText"] = "LocalizedText";
    ComponentTypeEnum["Log"] = "Log";
    ComponentTypeEnum["LoggedInPlayerAppearanceLoader"] = "LoggedInPlayerAppearanceLoader";
    ComponentTypeEnum["LootCardComponent"] = "LootCardComponent";
    ComponentTypeEnum["Mask"] = "Mask";
    ComponentTypeEnum["MaskRenderComponent"] = "MaskRenderComponent";
    ComponentTypeEnum["NotificationBadge"] = "NotificationBadge";
    ComponentTypeEnum["PetElementDisplay"] = "PetElementDisplay";
    ComponentTypeEnum["PlaySoundEffect"] = "PlaySoundEffect";
    ComponentTypeEnum["PlayerAppearanceSelector"] = "PlayerAppearanceSelector";
    ComponentTypeEnum["PlayerFace"] = "PlayerFace";
    ComponentTypeEnum["PlayerHair"] = "PlayerHair";
    ComponentTypeEnum["PlayerHat"] = "PlayerHat";
    ComponentTypeEnum["PlayerHead"] = "PlayerHead";
    ComponentTypeEnum["PlayerKeyFrameAnimator"] = "PlayerKeyFrameAnimator";
    ComponentTypeEnum["PlayerLoadoutORBSlotDisplay"] = "PlayerLoadoutOrbSlotDisplay";
    ComponentTypeEnum["PlayerWeapon"] = "PlayerWeapon";
    ComponentTypeEnum["ProgressBarAnchor"] = "ProgressBarAnchor";
    ComponentTypeEnum["ProgressBarComponent"] = "ProgressBarComponent";
    ComponentTypeEnum["RectTransform"] = "RectTransform";
    ComponentTypeEnum["RectanglePrimitive"] = "RectanglePrimitive";
    ComponentTypeEnum["SegmentAnalyticsButton"] = "SegmentAnalyticsButton";
    ComponentTypeEnum["SegmentAnalyticsUIInterface"] = "SegmentAnalyticsUiInterface";
    ComponentTypeEnum["SegmentButtonPropertiesProvider"] = "SegmentButtonPropertiesProvider";
    ComponentTypeEnum["SegmentUIInterfacePropertiesProvider"] = "SegmentUiInterfacePropertiesProvider";
    ComponentTypeEnum["SizeToChildren"] = "SizeToChildren";
    ComponentTypeEnum["SlicedGraphic"] = "SlicedGraphic";
    ComponentTypeEnum["SortingAnchor"] = "SortingAnchor";
    ComponentTypeEnum["Spine"] = "Spine";
    ComponentTypeEnum["SpineAnimator"] = "SpineAnimator";
    ComponentTypeEnum["Text"] = "Text";
    ComponentTypeEnum["TimeRemainingTemplateUpdate"] = "TimeRemainingTemplateUpdate";
    ComponentTypeEnum["Timeout"] = "Timeout";
    ComponentTypeEnum["TimerText"] = "TimerText";
    ComponentTypeEnum["Transform"] = "Transform";
    ComponentTypeEnum["WeeklyChallengePanelController"] = "WeeklyChallengePanelController";
})(ComponentTypeEnum = exports.ComponentTypeEnum || (exports.ComponentTypeEnum = {}));
var Config;
(function (Config) {
    Config["GoldenPageConfig"] = "$goldenPageConfig";
    Config["MonsterConfig"] = "$monsterConfig";
    Config["PageConfig"] = "$pageConfig";
})(Config = exports.Config || (exports.Config = {}));
var CreatureEnum;
(function (CreatureEnum) {
    CreatureEnum["Applepot"] = "$applepot";
    CreatureEnum["Athena"] = "$athena";
    CreatureEnum["ChosenMonster"] = "$chosenMonster";
    CreatureEnum["Gale"] = "$gale";
    CreatureEnum["Gnome"] = "$gnome";
    CreatureEnum["Master"] = "$master";
    CreatureEnum["Monster"] = "$monster";
    CreatureEnum["MonsterOne"] = "$monsterOne";
    CreatureEnum["MonsterTwo"] = "$monsterTwo";
    CreatureEnum["Noot"] = "$noot";
    CreatureEnum["Pippet"] = "$pippet";
    CreatureEnum["Player"] = "$player";
    CreatureEnum["Puppet"] = "$puppet";
    CreatureEnum["Puppetmaster"] = "$puppetmaster";
    CreatureEnum["Warden"] = "$warden";
})(CreatureEnum = exports.CreatureEnum || (exports.CreatureEnum = {}));
var DurationMSEnum;
(function (DurationMSEnum) {
    DurationMSEnum["BannerShowTimeMS"] = "$bannerShowTimeMS";
    DurationMSEnum["CardFadeDuration"] = "$cardFadeDuration";
})(DurationMSEnum = exports.DurationMSEnum || (exports.DurationMSEnum = {}));
var EventDataType;
(function (EventDataType) {
    EventDataType["AcademyArchives"] = "AcademyArchives";
    EventDataType["Tutorial2"] = "tutorial_2";
    EventDataType["TutorialSteps1"] = "tutorial_steps_1";
})(EventDataType = exports.EventDataType || (exports.EventDataType = {}));
var ParametersEventName;
(function (ParametersEventName) {
    ParametersEventName["GameComplete"] = "game_complete";
})(ParametersEventName = exports.ParametersEventName || (exports.ParametersEventName = {}));
var FunnelName;
(function (FunnelName) {
    FunnelName["Onboarding"] = "Onboarding";
})(FunnelName = exports.FunnelName || (exports.FunnelName = {}));
var FunnelType;
(function (FunnelType) {
    FunnelType["Tutorial"] = "tutorial";
})(FunnelType = exports.FunnelType || (exports.FunnelType = {}));
var EventType;
(function (EventType) {
    EventType["FunnelAdvanced"] = "Funnel Advanced";
})(EventType = exports.EventType || (exports.EventType = {}));
var Game;
(function (Game) {
    Game["Game"] = "$game";
})(Game = exports.Game || (exports.Game = {}));
var ParametersLayer;
(function (ParametersLayer) {
    ParametersLayer["Above"] = "above";
    ParametersLayer["Content"] = "content";
    ParametersLayer["Empty"] = "";
    ParametersLayer["Input"] = "input";
    ParametersLayer["UIPrompt"] = "ui-prompt";
    ParametersLayer["Worldui"] = "worldui";
})(ParametersLayer = exports.ParametersLayer || (exports.ParametersLayer = {}));
var PathfinderEnum;
(function (PathfinderEnum) {
    PathfinderEnum["Path"] = "$path";
    PathfinderEnum["Pathfinder"] = "$pathfinder";
    PathfinderEnum["PlayerPathfinder"] = "$playerPathfinder";
})(PathfinderEnum = exports.PathfinderEnum || (exports.PathfinderEnum = {}));
var Ease;
(function (Ease) {
    Ease["Linear"] = "Linear";
    Ease["Quad"] = "Quad";
    Ease["QuadEaseOut"] = "Quad.easeOut";
})(Ease = exports.Ease || (exports.Ease = {}));
var IndigoType;
(function (IndigoType) {
    IndigoType["GameCompleteV3"] = "game_complete_v3";
})(IndigoType = exports.IndigoType || (exports.IndigoType = {}));
var OperatorEnum;
(function (OperatorEnum) {
    OperatorEnum["Equals"] = "equals";
    OperatorEnum["GreaterThan"] = "greaterThan";
    OperatorEnum["NotEquals"] = "notEquals";
})(OperatorEnum = exports.OperatorEnum || (exports.OperatorEnum = {}));
var FSMType;
(function (FSMType) {
    FSMType["FSM"] = "fsm";
})(FSMType = exports.FSMType || (exports.FSMType = {}));
var IndecentType;
(function (IndecentType) {
    IndecentType["Firework"] = "firework";
    IndecentType["Projectile"] = "projectile";
})(IndecentType = exports.IndecentType || (exports.IndecentType = {}));
var FxType;
(function (FxType) {
    FxType["Fx"] = "fx";
})(FxType = exports.FxType || (exports.FxType = {}));
var EventAction;
(function (EventAction) {
    EventAction["Empty"] = "";
    EventAction["MemberAd"] = "memberAd";
    EventAction["Teleport"] = "teleport";
})(EventAction = exports.EventAction || (exports.EventAction = {}));
var ActionEnum;
(function (ActionEnum) {
    ActionEnum["CheckOutLamplightTown"] = "Check out Lamplight Town";
    ActionEnum["CheckOutZoneName"] = "Check out ${zoneName}";
    ActionEnum["Empty"] = "";
})(ActionEnum = exports.ActionEnum || (exports.ActionEnum = {}));
var TitleEnum;
(function (TitleEnum) {
    TitleEnum["Empty"] = "";
    TitleEnum["YourFriendBoughtANewItem"] = "Your friend bought a new item!";
    TitleEnum["YourFriendWonANewItem"] = "Your friend won a new item!";
})(TitleEnum = exports.TitleEnum || (exports.TitleEnum = {}));
var GameFeedType;
(function (GameFeedType) {
    GameFeedType["GameFeed"] = "gameFeed";
})(GameFeedType = exports.GameFeedType || (exports.GameFeedType = {}));
var ActionName;
(function (ActionName) {
    ActionName["CloseThisPrompt"] = "closeThisPrompt";
    ActionName["OpenMembershipParent"] = "openMembershipParent";
})(ActionName = exports.ActionName || (exports.ActionName = {}));
var ButtonText;
(function (ButtonText) {
    ButtonText["BecomeAMemberNow"] = "Become a member now!";
    ButtonText["LockedPlayAtHome"] = "Locked: Play at home!";
})(ButtonText = exports.ButtonText || (exports.ButtonText = {}));
var ButtonName;
(function (ButtonName) {
    ButtonName["Empty"] = "";
    ButtonName["OpenMembershipParent"] = "open-membership-parent";
})(ButtonName = exports.ButtonName || (exports.ButtonName = {}));
var Colour;
(function (Colour) {
    Colour["Ffffff"] = "#ffffff";
    Colour["The000000"] = "#000000";
    Colour["The000099"] = "#000099";
    Colour["The0000Ff"] = "#0000FF";
    Colour["The898989"] = "#898989";
})(Colour = exports.Colour || (exports.Colour = {}));
var SuccessType;
(function (SuccessType) {
    SuccessType["Generic"] = "generic";
})(SuccessType = exports.SuccessType || (exports.SuccessType = {}));
var ConditionEnum;
(function (ConditionEnum) {
    ConditionEnum["IsPlayingAtSchool"] = "isPlayingAtSchool";
    ConditionEnum["WasTriggeredBy"] = "wasTriggeredBy";
})(ConditionEnum = exports.ConditionEnum || (exports.ConditionEnum = {}));
var HairType;
(function (HairType) {
    HairType["Boots"] = "boots";
    HairType["Currency"] = "currency";
    HairType["Dorm"] = "dorm";
    HairType["Follow"] = "follow";
    HairType["Gold"] = "gold";
    HairType["Hair"] = "hair";
    HairType["HairColor"] = "hairColor";
    HairType["Hat"] = "hat";
    HairType["Item"] = "item";
    HairType["ORB"] = "orb";
    HairType["Outfit"] = "outfit";
    HairType["UltimatesQuestItem"] = "ultimatesQuestItem";
    HairType["Weapon"] = "weapon";
})(HairType = exports.HairType || (exports.HairType = {}));
var InteractableType;
(function (InteractableType) {
    InteractableType["Interactable"] = "interactable";
})(InteractableType = exports.InteractableType || (exports.InteractableType = {}));
var StatBonusType;
(function (StatBonusType) {
    StatBonusType["CritChance"] = "critChance";
    StatBonusType["Damage"] = "damage";
    StatBonusType["ElementalResistance"] = "elementalResistance";
})(StatBonusType = exports.StatBonusType || (exports.StatBonusType = {}));
var TargetEnum;
(function (TargetEnum) {
    TargetEnum["Team"] = "team";
    TargetEnum["Unit"] = "unit";
})(TargetEnum = exports.TargetEnum || (exports.TargetEnum = {}));
var HilariousType;
(function (HilariousType) {
    HilariousType["Consumable"] = "consumable";
    HilariousType["Food"] = "food";
    HilariousType["Potion"] = "potion";
})(HilariousType = exports.HilariousType || (exports.HilariousType = {}));
var IconEnum;
(function (IconEnum) {
    IconEnum["Empty"] = "";
    IconEnum["Item110"] = "item/110";
})(IconEnum = exports.IconEnum || (exports.IconEnum = {}));
var ItemTableType;
(function (ItemTableType) {
    ItemTableType["ItemTable"] = "itemTable";
})(ItemTableType = exports.ItemTableType || (exports.ItemTableType = {}));
var KeyType;
(function (KeyType) {
    KeyType["Key"] = "key";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
var MathTownDecorType;
(function (MathTownDecorType) {
    MathTownDecorType["MathTownDecor"] = "mathTownDecor";
    MathTownDecorType["MathTownFrame"] = "mathTownFrame";
})(MathTownDecorType = exports.MathTownDecorType || (exports.MathTownDecorType = {}));
var MathTownInteriorType;
(function (MathTownInteriorType) {
    MathTownInteriorType["MathTownInterior"] = "mathTownInterior";
})(MathTownInteriorType = exports.MathTownInteriorType || (exports.MathTownInteriorType = {}));
var NameType;
(function (NameType) {
    NameType["Name"] = "name";
})(NameType = exports.NameType || (exports.NameType = {}));
var NicknameType;
(function (NicknameType) {
    NicknameType["Nickname"] = "nickname";
})(NicknameType = exports.NicknameType || (exports.NicknameType = {}));
var Growth;
(function (Growth) {
    Growth["A"] = "A";
    Growth["B"] = "B";
    Growth["C"] = "C";
    Growth["D"] = "D";
    Growth["F"] = "F-";
    Growth["GrowthA"] = "A-";
    Growth["GrowthB"] = "B+";
    Growth["GrowthC"] = "C+";
    Growth["GrowthD"] = "D+";
    Growth["PurpleA"] = "A+";
    Growth["PurpleB"] = "B-";
    Growth["PurpleC"] = "C-";
    Growth["PurpleD"] = "D-";
})(Growth = exports.Growth || (exports.Growth = {}));
var ElementType;
(function (ElementType) {
    ElementType["Button"] = "Button";
    ElementType["ButtonToggle"] = "ButtonToggle";
    ElementType["Graphic"] = "Graphic";
    ElementType["InputFieldElement"] = "InputFieldElement";
    ElementType["Mask"] = "Mask";
    ElementType["PhaserButtonWrapper"] = "PhaserButtonWrapper";
    ElementType["ScrollBar"] = "ScrollBar";
    ElementType["ScrollView"] = "ScrollView";
    ElementType["SlicedBanner"] = "SlicedBanner";
    ElementType["SlicedGraphic"] = "SlicedGraphic";
    ElementType["Slider"] = "Slider";
    ElementType["SpineUI"] = "SpineUI";
    ElementType["Tab"] = "Tab";
    ElementType["TabButton"] = "TabButton";
    ElementType["Text"] = "Text";
    ElementType["UIElement"] = "UIElement";
    ElementType["VideoGraphic"] = "VideoGraphic";
    ElementType["WebFontText"] = "WebFontText";
    ElementType["WoodSlicedPanel"] = "WoodSlicedPanel";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
var BoundsAlignH;
(function (BoundsAlignH) {
    BoundsAlignH["Bottom"] = "bottom";
    BoundsAlignH["Center"] = "center";
    BoundsAlignH["Left"] = "left";
    BoundsAlignH["Middle"] = "middle";
    BoundsAlignH["Right"] = "right";
    BoundsAlignH["Top"] = "top";
})(BoundsAlignH = exports.BoundsAlignH || (exports.BoundsAlignH = {}));
var Font;
(function (Font) {
    Font["Empty"] = "";
    Font["Normal"] = "normal";
})(Font = exports.Font || (exports.Font = {}));
var Frame;
(function (Frame) {
    Frame["IconMiniTicket"] = "icon-mini-ticket";
    Frame["IconsCloseWhite"] = "icons/close-white";
    Frame["IconsUnlockWhite"] = "icons/unlock-white";
})(Frame = exports.Frame || (exports.Frame = {}));
var PropertiesText;
(function (PropertiesText) {
    PropertiesText["Empty"] = "+";
    PropertiesText["Text"] = "";
})(PropertiesText = exports.PropertiesText || (exports.PropertiesText = {}));
var PurpleClipName;
(function (PurpleClipName) {
    PurpleClipName["ButtonDisabled"] = "button-disabled";
    PurpleClipName["Play"] = "play";
    PurpleClipName["Pop"] = "pop";
})(PurpleClipName = exports.PurpleClipName || (exports.PurpleClipName = {}));
var ComparisonFunction;
(function (ComparisonFunction) {
    ComparisonFunction["ComparisonFunction"] = ">=";
    ComparisonFunction["Empty"] = "===";
})(ComparisonFunction = exports.ComparisonFunction || (exports.ComparisonFunction = {}));
var CompleteBgColor;
(function (CompleteBgColor) {
    CompleteBgColor["A7E34E"] = "#A7E34E";
    CompleteBgColor["The2E573A"] = "#2E573A";
})(CompleteBgColor = exports.CompleteBgColor || (exports.CompleteBgColor = {}));
var OnFinishedPropertyName;
(function (OnFinishedPropertyName) {
    OnFinishedPropertyName["Active"] = "active";
    OnFinishedPropertyName["Color"] = "color";
    OnFinishedPropertyName["DurationInMilliseconds"] = "_durationInMilliseconds";
})(OnFinishedPropertyName = exports.OnFinishedPropertyName || (exports.OnFinishedPropertyName = {}));
var PropertyName;
(function (PropertyName) {
    PropertyName["Active"] = "active";
    PropertyName["CacheAsBitmap"] = "cacheAsBitmap";
    PropertyName["Color"] = "color";
    PropertyName["Empty"] = "";
    PropertyName["InputEnabled"] = "inputEnabled";
    PropertyName["Text"] = "text";
    PropertyName["UIMode"] = "uiMode";
})(PropertyName = exports.PropertyName || (exports.PropertyName = {}));
var FillPriorityEnum;
(function (FillPriorityEnum) {
    FillPriorityEnum["Horizontal"] = "horizontal";
    FillPriorityEnum["Vertical"] = "vertical";
})(FillPriorityEnum = exports.FillPriorityEnum || (exports.FillPriorityEnum = {}));
var FontWeight;
(function (FontWeight) {
    FontWeight["Bold"] = "bold";
    FontWeight["Lighter"] = "lighter";
    FontWeight["Normal"] = "normal";
})(FontWeight = exports.FontWeight || (exports.FontWeight = {}));
var ArgEnum;
(function (ArgEnum) {
    ArgEnum["ComingSoonMessage"] = "COMING_SOON_MESSAGE";
    ArgEnum["EpicViewerBecomeAMember"] = "EPIC_VIEWER_BECOME_A_MEMBER";
    ArgEnum["UltimatesUpgradeYourMembership"] = "ULTIMATES_UPGRADE_YOUR_MEMBERSHIP";
})(ArgEnum = exports.ArgEnum || (exports.ArgEnum = {}));
var FunctionName;
(function (FunctionName) {
    FunctionName["OpenMessageWithLocalizationKey"] = "openMessageWithLocalizationKey";
    FunctionName["SetLocalizationKey"] = "setLocalizationKey";
})(FunctionName = exports.FunctionName || (exports.FunctionName = {}));
var PurpleShadowColor;
(function (PurpleShadowColor) {
    PurpleShadowColor["The2A6E70"] = "#2A6E70";
    PurpleShadowColor["The425Bbd"] = "#425BBD";
    PurpleShadowColor["The9A9A9A"] = "#9A9A9A";
})(PurpleShadowColor = exports.PurpleShadowColor || (exports.PurpleShadowColor = {}));
var BackgroundColorEnum;
(function (BackgroundColorEnum) {
    BackgroundColorEnum["ColorFfffff"] = "ffffff";
    BackgroundColorEnum["E0C679"] = "E0C679";
    BackgroundColorEnum["Ffffff"] = "FFFFFF";
    BackgroundColorEnum["The00Cccc"] = "00CCCC";
})(BackgroundColorEnum = exports.BackgroundColorEnum || (exports.BackgroundColorEnum = {}));
var DefaultTriggerData;
(function (DefaultTriggerData) {
    DefaultTriggerData["Empty"] = "";
    DefaultTriggerData["Map"] = "map";
    DefaultTriggerData["Zone"] = "zone";
})(DefaultTriggerData = exports.DefaultTriggerData || (exports.DefaultTriggerData = {}));
var InstanceTypeEnum;
(function (InstanceTypeEnum) {
    InstanceTypeEnum["Interface"] = "interface";
    InstanceTypeEnum["UI"] = "ui";
})(InstanceTypeEnum = exports.InstanceTypeEnum || (exports.InstanceTypeEnum = {}));
var MapTag;
(function (MapTag) {
    MapTag["Lamplight"] = "lamplight";
    MapTag["LamplightB3"] = "lamplight-B3";
})(MapTag = exports.MapTag || (exports.MapTag = {}));
var FluffyShadowColor;
(function (FluffyShadowColor) {
    FluffyShadowColor["The363636"] = "#363636";
    FluffyShadowColor["The425Bbd"] = "#425BBD";
})(FluffyShadowColor = exports.FluffyShadowColor || (exports.FluffyShadowColor = {}));
var StrokeColor;
(function (StrokeColor) {
    StrokeColor["The0Xffffff"] = "0xffffff";
})(StrokeColor = exports.StrokeColor || (exports.StrokeColor = {}));
var FluffyClipName;
(function (FluffyClipName) {
    FluffyClipName["Break"] = "break";
    FluffyClipName["ButtonDisabled"] = "button-disabled";
    FluffyClipName["Pop"] = "pop";
})(FluffyClipName = exports.FluffyClipName || (exports.FluffyClipName = {}));
var PurpleFont;
(function (PurpleFont) {
    PurpleFont["ABeeZee"] = "ABeeZee";
    PurpleFont["AbeeZee"] = "AbeeZee";
    PurpleFont["PaytoneOne"] = "Paytone One";
})(PurpleFont = exports.PurpleFont || (exports.PurpleFont = {}));
var TentacledShadowColor;
(function (TentacledShadowColor) {
    TentacledShadowColor["The425Bbd"] = "#425BBD";
    TentacledShadowColor["The683510"] = "#683510";
})(TentacledShadowColor = exports.TentacledShadowColor || (exports.TentacledShadowColor = {}));
var PurpleStroke;
(function (PurpleStroke) {
    PurpleStroke["Black"] = "black";
    PurpleStroke["D66411"] = "#D66411";
    PurpleStroke["Ffffff"] = "#ffffff";
    PurpleStroke["StrokeFFFFFF"] = "#FFFFFF";
    PurpleStroke["The000000"] = "#000000";
    PurpleStroke["The363636"] = "#363636";
    PurpleStroke["The6B2824"] = "#6b2824";
})(PurpleStroke = exports.PurpleStroke || (exports.PurpleStroke = {}));
var TintEnum;
(function (TintEnum) {
    TintEnum["Aaaaaa"] = "#aaaaaa";
    TintEnum["Ffcd91"] = "#ffcd91";
    TintEnum["Ffffff"] = "#FFFFFF";
    TintEnum["The000000"] = "#000000";
    TintEnum["The555555"] = "#555555";
    TintEnum["TintFfffff"] = "#ffffff";
})(TintEnum = exports.TintEnum || (exports.TintEnum = {}));
var TintColor;
(function (TintColor) {
    TintColor["The0X333333"] = "0x333333";
})(TintColor = exports.TintColor || (exports.TintColor = {}));
var PurpleLayer;
(function (PurpleLayer) {
    PurpleLayer["Above"] = "above";
    PurpleLayer["Background"] = "background";
    PurpleLayer["Content"] = "content";
    PurpleLayer["Empty"] = "";
    PurpleLayer["Foreground"] = "foreground";
    PurpleLayer["Ground"] = "ground";
    PurpleLayer["Input"] = "input";
    PurpleLayer["Loading"] = "loading";
    PurpleLayer["Tooltip"] = "tooltip";
    PurpleLayer["UI"] = "ui";
})(PurpleLayer = exports.PurpleLayer || (exports.PurpleLayer = {}));
var PurplePropertyName;
(function (PurplePropertyName) {
    PurplePropertyName["Active"] = "active";
    PurplePropertyName["Color"] = "color";
    PurplePropertyName["Empty"] = "";
    PurplePropertyName["InputEnabled"] = "inputEnabled";
    PurplePropertyName["PropertyNameActive"] = "Active";
    PurplePropertyName["SizeDelta"] = "sizeDelta";
    PurplePropertyName["Text"] = "text";
    PurplePropertyName["YesButtonText"] = "_yesButtonText";
})(PurplePropertyName = exports.PurplePropertyName || (exports.PurplePropertyName = {}));
var Type;
(function (Type) {
    Type["KnockbackStep"] = "KnockbackStep";
    Type["MultiHitEndStep"] = "MultiHitEndStep";
    Type["MultiHitStartStep"] = "MultiHitStartStep";
    Type["PlayAnimationStep"] = "PlayAnimationStep";
    Type["PlaySpineStep"] = "PlaySpineStep";
    Type["PlayTravelingSpineStep"] = "PlayTravelingSpineStep";
    Type["TintSpineStep"] = "TintSpineStep";
    Type["WaitForAnimationEventStep"] = "WaitForAnimationEventStep";
    Type["WaitStep"] = "WaitStep";
})(Type = exports.Type || (exports.Type = {}));
var KnockbackEase;
(function (KnockbackEase) {
    KnockbackEase["CircularOut"] = "circularOut";
})(KnockbackEase = exports.KnockbackEase || (exports.KnockbackEase = {}));
var ReturnEase;
(function (ReturnEase) {
    ReturnEase["ExponentialOut"] = "exponentialOut";
})(ReturnEase = exports.ReturnEase || (exports.ReturnEase = {}));
var PurpleAnimation;
(function (PurpleAnimation) {
    PurpleAnimation["Animation"] = "animation";
    PurpleAnimation["Attack"] = "attack";
    PurpleAnimation["CastEnergyAstralblue"] = "cast-energy-astralblue";
    PurpleAnimation["Create"] = "create";
    PurpleAnimation["Create2"] = "create2";
    PurpleAnimation["Impact"] = "impact";
    PurpleAnimation["ImpactLayer2"] = "impact_layer2";
    PurpleAnimation["ImpactPillar"] = "impact-pillar";
    PurpleAnimation["ImpactSmokeBack"] = "impact-smoke-back";
    PurpleAnimation["ImpactSmokeFront"] = "impact-smoke-front";
    PurpleAnimation["Travel"] = "travel";
})(PurpleAnimation = exports.PurpleAnimation || (exports.PurpleAnimation = {}));
var PropertyEventName;
(function (PropertyEventName) {
    PropertyEventName["Cast"] = "cast";
})(PropertyEventName = exports.PropertyEventName || (exports.PropertyEventName = {}));
var ID;
(function (ID) {
    ID["Multihit"] = "multihit";
})(ID = exports.ID || (exports.ID = {}));
var FluffyPropertyName;
(function (FluffyPropertyName) {
    FluffyPropertyName["Active"] = "active";
    FluffyPropertyName["InputEnabled"] = "inputEnabled";
    FluffyPropertyName["InterfaceName"] = "interfaceName";
    FluffyPropertyName["Layer"] = "layer";
    FluffyPropertyName["Text"] = "text";
    FluffyPropertyName["UIMode"] = "uiMode";
    FluffyPropertyName["Visible"] = "_visible";
    FluffyPropertyName["X"] = "x";
})(FluffyPropertyName = exports.FluffyPropertyName || (exports.FluffyPropertyName = {}));
var DamageTypeEnum;
(function (DamageTypeEnum) {
    DamageTypeEnum["Aoa"] = "aoa";
    DamageTypeEnum["Aoe"] = "aoe";
    DamageTypeEnum["Beam"] = "beam";
    DamageTypeEnum["Projectile"] = "projectile";
})(DamageTypeEnum = exports.DamageTypeEnum || (exports.DamageTypeEnum = {}));
var TargetType;
(function (TargetType) {
    TargetType["Aoe"] = "aoe";
    TargetType["Single"] = "single";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var SpellType;
(function (SpellType) {
    SpellType["EpicAttack"] = "epic-attack";
    SpellType["Spell"] = "spell";
})(SpellType = exports.SpellType || (exports.SpellType = {}));
var CharFromAnimation;
(function (CharFromAnimation) {
    CharFromAnimation["None"] = "none";
    CharFromAnimation["Vibrate"] = "vibrate";
})(CharFromAnimation = exports.CharFromAnimation || (exports.CharFromAnimation = {}));
var CharToAnimation;
(function (CharToAnimation) {
    CharToAnimation["Damage"] = "damage";
    CharToAnimation["None"] = "none";
})(CharToAnimation = exports.CharToAnimation || (exports.CharToAnimation = {}));
var EndEasing;
(function (EndEasing) {
    EndEasing["ElasticIn"] = "Elastic.In";
    EndEasing["LinearNone"] = "Linear.None";
})(EndEasing = exports.EndEasing || (exports.EndEasing = {}));
var TravelEasing;
(function (TravelEasing) {
    TravelEasing["LinearNone"] = "Linear.None";
    TravelEasing["QuadraticIn"] = "Quadratic.In";
})(TravelEasing = exports.TravelEasing || (exports.TravelEasing = {}));
var SpellRelicType;
(function (SpellRelicType) {
    SpellRelicType["SpellRelic"] = "spellRelic";
})(SpellRelicType = exports.SpellRelicType || (exports.SpellRelicType = {}));
var Delivery;
(function (Delivery) {
    Delivery["Above"] = "above";
    Delivery["Below"] = "below";
    Delivery["Direct"] = "direct";
    Delivery["Melee"] = "melee";
    Delivery["Projectile"] = "projectile";
})(Delivery = exports.Delivery || (exports.Delivery = {}));
var Team;
(function (Team) {
    Team["Enemy"] = "enemy";
    Team["Own"] = "own";
})(Team = exports.Team || (exports.Team = {}));
var Unit;
(function (Unit) {
    Unit["Ally"] = "ally";
    Unit["Random"] = "random";
    Unit["Self"] = "self";
    Unit["Single"] = "single";
    Unit["Team"] = "team";
})(Unit = exports.Unit || (exports.Unit = {}));
var SpellV2Type;
(function (SpellV2Type) {
    SpellV2Type["SpellV2"] = "spellV2";
})(SpellV2Type = exports.SpellV2Type || (exports.SpellV2Type = {}));
var StreamedMapType;
(function (StreamedMapType) {
    StreamedMapType["StreamedMap"] = "streamedMap";
})(StreamedMapType = exports.StreamedMapType || (exports.StreamedMapType = {}));
var MailKey;
(function (MailKey) {
    MailKey["TitanReward"] = "titanReward";
})(MailKey = exports.MailKey || (exports.MailKey = {}));
var AtlasName;
(function (AtlasName) {
    AtlasName["Empty"] = "";
    AtlasName["UIShared"] = "ui-shared";
})(AtlasName = exports.AtlasName || (exports.AtlasName = {}));
var PurpleColor;
(function (PurpleColor) {
    PurpleColor["C16A2C"] = "#c16a2c";
    PurpleColor["The363636"] = "#363636";
    PurpleColor["The3687Ba"] = "#3687ba";
})(PurpleColor = exports.PurpleColor || (exports.PurpleColor = {}));
var SliceType;
(function (SliceType) {
    SliceType["Nine"] = "nine";
    SliceType["NineScale"] = "nineScale";
    SliceType["Three"] = "three";
    SliceType["ThreeScale"] = "threeScale";
})(SliceType = exports.SliceType || (exports.SliceType = {}));
var PurpleOverStateName;
(function (PurpleOverStateName) {
    PurpleOverStateName["WatchNowGraphicOverContainer"] = "watchNowGraphicOverContainer";
})(PurpleOverStateName = exports.PurpleOverStateName || (exports.PurpleOverStateName = {}));
var FluffyOverStateName;
(function (FluffyOverStateName) {
    FluffyOverStateName["GoNowGraphicOver"] = "goNowGraphicOver";
    FluffyOverStateName["WatchVideoGraphicOver"] = "watchVideoGraphicOver";
})(FluffyOverStateName = exports.FluffyOverStateName || (exports.FluffyOverStateName = {}));
var FluffyColor;
(function (FluffyColor) {
    FluffyColor["Black"] = "black";
    FluffyColor["E83E45"] = "#E83E45";
    FluffyColor["Ffffff"] = "#ffffff";
    FluffyColor["The000000"] = "#000000";
    FluffyColor["The363636"] = "#363636";
    FluffyColor["The372623"] = "#372623";
    FluffyColor["The865Fb1"] = "#865FB1";
})(FluffyColor = exports.FluffyColor || (exports.FluffyColor = {}));
