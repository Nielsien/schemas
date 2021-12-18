/** A street address */
export interface ICoreAddress {
  /** The street and number */ street_address: string;
  /** An optional street and number extension */ street_address_extension?: string;
  /** The postal or ZIP code of the city */ postal_code: string;
  /** The city or town */ city: string;
  /** The region or province */ region?: string;
  /** The country */ country: string;
}

/** The shared properties for all entries */
export interface ICoreBaseEntry {
  /** The unique identifier of the journal (UUID v4) this entry belongs to */ journal_id: string;
  /** The unique identifier for the entry (UUID v4) */ entry_id: string;
  /** The journal entry type identifer */ entry_type: string;
  /** The date and time the entry was logged in UTC in RFC3339 format */ entry_datetime?: string;
  /** The revision timestamp of this entry. Should be the time it was created. */ revision: string;
  /** Indicates this entry cannot be replaced with future revisions (default) */ immutable: boolean;
  /** Free form remarks that are to be added to this journal entry */ remarks?: string;
}

/** Contact information for persona */
export interface ICoreContactDetails {
  /** The phone number of the contact */ phone?: string;
  /** The email address of the contact */ email?: string;
}

export type ICoreFishingCatchMeansOfMeasuring = "EST" | "WGH";
/** Details of caught fish */
export interface ICoreFishingCatch {
  /** The fish species code. NLD: SN, GBR: SN */ code: string;
  /** Weight of fish in kg (see context) Depending on context this item will be either (1): Total weight of fish (in kilograms) in catch period. (2): Total weight of fish (in kilograms) on board (aggregate) or (3): Total weight of fish (in kilograms) landed (4): Total weight of fish discarded or used as a live bait. NLD: WT, GBR: WT */ weight?: number;
  /** The number of fish. NLD: NF, GBR: NF */ number_of_fish?: number;
  /** Weight of fish kept in nets outside the hold. NLD: NQ, EU3: NQ  */ weight_in_nets?: number;
  /** The number of fish held in nets outside the hold. NLD: NV, EU3: NB */ number_of_fish_in_nets?: number;
  /** Estimate live weight, in kilograms, of fish to be landed or transshipped. If no catches being landed then 0 should be reported. NLD: WT, GBR: GBRLWT, EU3: WL */ landing_weight?: number;
  /** Total number of fish to be landed or transshipped. NLD: NF, GBR: LNF, EU3: FL */ landing_number?: number;
  /** Indicates the catch is considered a juvenile. NLD3.3+: MV, GBR: GBRJUV */ juvenile?: boolean;
  /** Indicator for farmed fish (Dutch: kweekvis). NLD: KV */ fish_farming?: boolean;
  /** Means of weight measuring: estimation (EST), weighing on board (WGH). EU3: MM */ means_of_measuring?: ICoreFishingCatchMeansOfMeasuring;
  /** The weighed or measured weight. Type depends on means_of_measuring value. NLD3.3: MM */ measured_weight?: string;
  /** Fish size category (1-8; one size or kg, g, cm, mm or number of fish per kg as appropriate). NLD3.3: SF */ fish_size?: string;
  /** Details of the fish after processing. NL: NLPRO, GBR: PRO (also contains SPE) */ processed?: ICoreFishingCatchProcessed;
}

/** Details of caught fish after it has been processed */
export interface ICoreFishingCatchProcessed {
  /** The fish presentation code. Known as PR. Examples: WHL, GUT, FIL */ fish_presentation: IEnumFishPresentation;
  /** The fish preservation state. NLD: PS. Examples: FRO, ALI, SMO. */ fish_state: IEnumFishState;
  /** The package type code. NLD: TY */ package_type?: IEnumFishPackageType;
  /** The number of packages. NLD: NN */ number_of_packages?: number;
  /** Average product weight, measured in Kg. NLD: AW */ average_package_weight?: number;
  /** The fish freshness category. NLD: FF. Examples: A, E, V */ fish_freshness?: IEnumFishFreshness;
  /** The conversion factor (ratio) from dead weight to live weight. Depends on combination of fish species, presentation and state. NLD: CF */ conversion_factor?: number;
}

/** Fishing gear details */
export interface ICoreFishingGear {
  /** Gear code corresponding to the FAO’s International Standard Statistical Classification of the Fishing Gear. NLD: GE, GBR: GE */ code: IEnumFishingGearType;
  /** The fishing gear mesh size measured in millimeters. NLD: ME, GBR: ME */ mesh_size?: number;
  /** The number of fishing gear items. NLD: NN, GBR: GBRGNL */ amount?: number;
  /** The total length of the fishing gear in meters. NLD: TL, GBR: GBRGNT */ length?: number;
}

/** Fishing gear deployment details */
export interface ICoreFishingGearDeployment {
  /** Number of minutes the gear was deployed. Known as DU */ duration?: number;
  /** The unit of time for measuring gear deployment. NLD: ET */ unit_of_time?: string;
  /** Number of fishing operations per 24 hour period: number of times gear is shot - does not apply to hooks, lines and pots. If no fishing operations took place then report 0. Known as FO */ fishing_operations?: number;
  /** Fishing depth. The distance from the water surface to the lowest part of the fishing gear, measured in meters. Applies to vessels working under deep sea permit and using towed gear, long lines or fixed nets. Known as FD */ fishing_depth?: number;
  /** Additional information relating to certain gear types e.g. liners = hooks, dredger = number of dredges. GBR: GBRFOX */ gear_component_count?: number;
  /** Norwegian requirement - gear specification (trawls: 1=single, 2=double, 3=triple). GBR: GBRGS */ gear_specification?: number;
  /** Norwegian requirement - gear problems (1=empty net, 2=net burst, 3=net split, 4=broken meshes, 5=lost gear, 6=other). GBR: GBRGP */ gear_problems?: number;
  /** Deep Sea Permit requirements when using gill nets */ gill_net?: ICoreFishingGearGillNet;
  /** The capacity or dimensions of the deployed gear. NLD: GC */ gear_capacity?: string;
  /** Additional information relating to certain gear types: liners = hooks. NLD: NH */ gear_hook_count?: number;
  /** Additional information relating to certain gear types: dredger = number of dredges. NLD: NN */ gear_dredger_count?: number;
  /** All gear shot event details. NLD: GES, GBR: GES */ gear_shot?: ICoreFishingGearShot[];
  /** All gear retrieve even details. NLD: GER, GBR: GER */ gear_retrieve?: ICoreFishingGearRetrieve[];
  /** All gear loss even details. NLD: GLS, GBR: GLS */ gear_loss?: ICoreFishingGearLoss[];
  /** Details of partner vessels for pair fishing. BR: PFP, NLD: NLSPN */ partnered_fishing_vessel?: ICoreVesselPartner[];
}

/** Deep Sea Permit requirements when using gill nets */
export interface ICoreFishingGearGillNet {
  /** Average length of fishing nets in meters. NLD: GL, GBR: GNGL */ average_gear_length: number;
  /** Average height of fishing nets in meters. NLD: GD, GBR: GNGD */ average_gear_height: number;
  /** The nominal length of one fishing net in meters. GBR: GNNL */ nominal_gear_length?: number;
  /** Number of nets present in the fleet. NLD: VN, GBR: GNNN */ number_of_nets: number;
}

/** A gear loss event details */
export interface ICoreFishingGearLoss {
  /** The datetime the gear loss took place */ date?: string;
  /** The geographical location where the gear loss took place */ location: IMeasurementPosition;
  /** The identification tag attached to the lost gear. NLD: NI, GBR: GBRGNFN */ identifier: string;
  /** Free form text to describe the reason of the gear loss. NLD: VT, GBR: GBRCOM */ remarks?: string;
  /** The amount of gear items lost, GBR: NN */ amount_lost?: number;
}

/** A gear retrieve event details */
export interface ICoreFishingGearRetrieve {
  /** The datetime the gear retrieve took place. GBR: DATI, NLD2: DA + TI, NLD3: DA */ date?: string;
  /** The geographical location where the gear retrieve took place */ location: IMeasurementPosition;
  /** The identification tag attached to the retrieved gear. NLD: NI, GBR: GBRGNFN */ identifier: string;
}

/** A gear shot event details */
export interface ICoreFishingGearShot {
  /** The datetime the gear shot took place. GBR: DATI, NLD2: DA + TI, NLD3: DA */ date?: string;
  /** The geographical location where the gear shot took place */ location: IMeasurementPosition;
  /** The identification tag attached to the retrieved gear. NLD: NI, GBR: GBRGNFN */ identifier?: string;
  /** Indicator of where zone fishing will be commencing. Data recorded in accordance with Norwegian requirements. Known as GBRZO */ country_zones?: string;
}

/** Fishing tow details */
export interface ICoreFishingTow {
  /** The datetime the tow started in UTC */ activity_date_start: string;
  /** The datetime the tow ended in UTC */ activity_date_end?: string;
  /** The geographical location where the tow started (if applicable) */ location_start?: IMeasurementPosition;
  /** The geographical location where the tow ended (if applicable) */ location_end?: IMeasurementPosition;
  /** The collection of geographical locations logged during the tow */ waypoints?: IMeasurementPosition[];
  /** The zone the tow took place in */ zone: ICoreFishingZone;
  /** The fishing gear used for this tow */ fishing_gear?: ICoreFishingGear;
  /** The details of how the gear was used for the tow */ gear_deployment?: ICoreFishingGearDeployment;
  /** The fish caught in this tow */ catches?: ICoreFishingCatch[];
}

/** Geographical zone for fishing activities */
export interface ICoreFishingZone {
  /** The economical zone. This is a 3 letter ISO country code */ economical_zone?: string;
  /** The FAO area. Example: 27.3.d.28.2. This is the 1st value: 27 */ fao_area?: string;
  /** The FAO sub-area. Example: 27.3.d.28.2. This is the 2nd value: 3 */ fao_subarea?: string;
  /** The FAO division. Example: 27.3.d.28.2. This is the 3rd value: d */ fao_division?: string;
  /** The FAO subdivision. Example: 27.3.d.28.2. This is the 4th value: 28 */ fao_subdivision?: string;
  /** The FAO unit. Example: 27.3.d.28.2. This is the 5th value: 2 */ fao_unit?: string;
  /** The ICES statistical rectangle. Example: 26A0 */ ices_rectangle?: string;
  /** The fishing effort zone. Example: A (ICES V-VI) */ effort_zone?: string;
  /** The regional fishery body. Example: AIDCP (Agreement on the International Dolphin Conservation Program) */ regional_body?: string;
}

/** A trip journal */
export interface ICoreJournal {
  /** The unique identifier for the journal (UUID v4) */ journal_id: string;
  /** The identification details of the vessel this journal belongs to */ vessel: ICoreVessel;
}

/** Fishing port details */
export interface ICorePort {
  /** The international port code. Format is 2 letter country code and 3 letter port code. Example: NLURK, BEANR, GBHUL */ code: string;
  /** The geographical location of the port */ location?: IMeasurementPosition;
}

/** A waypoint which is part of a route. */
export interface ICoreRouteWaypoint {
  /** The id of the waypoint within a trip. */ id: number;
  /** The name of the waypoint. */ name?: string;
  /** The latitude of the waypoint. */ latitude: number;
  /** The longitude of the waypoint. */ longitude: number;
  /** The turn radius of the waypoint in nautical miles. */ turn_radius?: number;
  /** The Cross-Track Distance at the port side in nautical miles on the route leg between the previous and this waypoint. */ portside_xtd?: number;
  /** The Cross-Track Distance at the starboard side in nautical miles on the route leg between the previous and this waypoint. */ starboard_xtd?: number;
  /** The safety contour in metres on the route leg between the previous and this waypoint. */ safety_contour?: number;
  /** The safety depth in metres on the route leg between the previous and this waypoint. */ safety_depth?: number;
  /** The geometry type of the route leg between the previous and this waypoint. */ geometry_type?: IEnumRouteGeometryType;
  /** The lowest cruising speed in knots on the route leg between the previous and this waypoint. */ speed_min?: number;
  /** The highest allowed cruising speed in knots on the route leg between the previous and this waypoint. */ speed_max?: number;
  /** The static draught forward (bow) in metres on the route leg between the previous and this waypoint. */ draught_forward?: number;
  /** The static draught aft (stern) in metres on the route leg between the previous and this waypoint. */ draught_aft?: number;
  /** The minimum static Under Keel Clearance on the route leg between the previous and this waypoint. */ static_ukc?: number;
  /** The minimum dynamic Under Keel Clearance on the route leg between the previous and this waypoint. */ dynamic_ukc?: number;
  /** The height of the masthead on the route leg between the previous and this waypoint. */ masthead_height?: number;
  /** The Estimated Time of Departure from this waypoint. */ etd?: string;
  /** The Estimated Time of Arrival at this waypoint. */ eta?: string;
}

/** The trip related details of a journal entry */
export interface ICoreTripEntry {
  /** The date the trip entry was created or sent at. All dates and times are UTC. GBR: DATI, NLD: DA */ date: string;
  /** The trip number this entry belongs to. NLD: TN, GBR: GBRLOGNO */ trip_nr: string;
  /** The unique record number for the trip entry. Formats differ between ERS dialects. NLD: RN GBR: GBRLOGNO */ record_nr: string;
  /** The unique sequence number for the  entry. GBR: GBRLOGSEQ */ sequence_nr?: string;
  /** The geographical location where the entry was created (for) */ location?: IMeasurementPosition;
}

/** The vessel information */
export interface ICoreVessel {
  /** The display name for the vessel */ name: string;
  /** The vessels flag state and country to report ERS messages to. Should be a 3 letter ISO code. */ flag_state: string;
  /** The vessel's Community Fleet Registration number. Fixed format defined by the pattern: "AAAXXXXXXXXX" (AAA = Fully capitalised country code of the vessel's first registration within the EU, XXXXXXXXX = 9 character alphanumeric code.). Known as CFR or IR */ cfr: string;
  /** The vessels international radio call sign (RC) */ call_sign?: string;
  /** The vessel's side (hull) registration number. Also known as XR or PLN. May contain dots or dashes */ hull_number: string;
  /** GBR ONLY: The vessel's unique identity number as recorded by the UK Registrar of Seamen and Shipping */ gbr_rss?: string;
  /** International Commission for the Conservation of Atlantic Tuna identifier */ iccat?: string;
  /** Global Fisheries Council of the Mediterranean identifier */ gfcm?: string;
  /** Unique Vessel Identifier (IMO number). A number issued by the tuna RFMOs or by ISSF. */ uvi?: string;
  /** The unique identification of a vessel according to Lloyds register */ imo_code?: string;
  /** The net loading capacity of the vessel, expressed in tons */ net_tonnage?: number;
  /** The gross loading capacity of the vessel, expressed in tons */ gross_tonnage?: number;
  /** The date the vessel was registered */ registration_date?: string;
  /** The full length of the vessel in meters */ full_length?: number;
}

/** Vessel inspection details */
export interface ICoreVesselInspection {
  /** The datetime the inspection took place */ date: string;
  /** The geographical location of the inspection */ location: IMeasurementPosition;
  /** The country performing the inspection as a 3 letter ISO code. Example: NLD, BEL, GBR. NLD: IC */ country?: string;
  /** The identification of the inspecting official. NLD: IA */ identifier: string;
}

/** The vessel master details. Usually one per entry but can differ in a single trip */
export interface ICoreVesselMaster {
  /** The name of the vessel master */ name: string;
  /** The (abbreviated) address of the vessel master. Required in all but NLD */ address?: string;
  /** Can be used to store any (external) identifier of the master */ identifier?: string;
}

/** Fishing vessel details for partnered fishing */
export interface ICoreVesselPartner {
  /** The external markings of the vessel. NLD2+: XR, GBR: PXR */ hull_number: string;
  /** The RSS identification code for the vessel. GBR: GBRPRSSNO */ rss?: string;
  /** The code of federal regulation for the vessel. GBR: PIR */ cfr?: string;
  /** The international radio call sign for the vessel. GBR: PRC */ call_sign?: string;
  /** Flag state of vessel registration. NLD2+: FS, GBR: PFS */ flag_state: string;
  /** The name of the vessel. NLD3+: NA, GBR: PNA */ name?: string;
  /** The vessel master (captain) */ master?: ICoreVesselMaster;
}

/** A section off a vessel, used to detail where objects are on the vessel */
export interface ICoreVesselSection {
  /** The unique identifier for the section (UUID v4) */ vessel_section_id: string;
  /** The compartment this section is in */ compartment: IEnumVesselCompartment;
  /** The name of this section */ name?: string;
  /** The description of this section in the compartment */ description?: string;
  /** The x position in cm, the position which is closest to the port side is 0cm */ pos_x?: number;
  /** The y position in cm, the position which is closest to the stern is 0cm */ pos_y?: number;
  /** The z position in cm, the position which is closest to the keel is 0cm */ pos_z?: number;
}

export type IAisMessageAidsToNavigationReportAisMessageType = "AIDS_TO_NAVIGATION_REPORT";
/** Position and status report for aids-to-navigation */
export interface IAisMessageAidsToNavigationReport extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageAidsToNavigationReportAisMessageType;
  /** The name of the AIS entity */ entity_name: string;
  /** The position of the AIS entity */ position: IMeasurementPosition;
  /** The accuracy of the given AIS position. LOW is > 10 meters, HIGH is <= 10 meters  */ position_accuracy: IEnumAisPositionAccuracy;
  /** The type of aid from this entity */ aid_type: IEnumAisAidType;
  /** Extends the aids to navigation name of the entity */ aid_name_extension: string;
  /** indication of the AtoN status */ aton_status: string;
  /** Indicates if the AtoN is on or off position */ off_position_indicator: IEnumAisOffPositionIndicator;
  /** indicates if the AtoN physically exists or if it is simulated */ virtual_aton_flag: IEnumAisAidVirtualFlag;
  /** Indicates the dimension of ship */ dimension_to_bow: number;
  /** Indicates the dimension of ship */ dimension_to_stern: number;
  /** Indicates the dimension of ship */ dimension_to_port: number;
  /** Indicates the dimension of ship */ dimension_to_starboard: number;
  /** The type of navigation device */ position_device_type: IEnumAisPositionDeviceType;
  /** Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device */ raim_flag: IEnumAisRaimFlag;
  /** State of station if it is operating in autonomous or assigned mode */ assigned_mode_flag: IEnumAisAssignedModeFlag;
}

/** The message that gets send by an AIS device. Values that are undefined should be set by the AIS device using the default */
export interface IAisMessageBaseAisMessage extends IEntryAisMessage {
  /** The mmsi identifier (ais entity) this value is related to */ entity_id: number;
  /** The message type of the given AIS measurement */ ais_message_type: IEnumAisMessageType;
  /** The amount of times the message has been repeated (3 is do not repeat anymore) */ repeat_indicator: number;
  /** The priority of the send AIS message */ priority: number;
}

export type IAisMessageBaseStationReportAisMessageType = "BASE_STATION_REPORT";
/** A position report message for the AIS. */
export interface IAisMessageBaseStationReport extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageBaseStationReportAisMessageType;
  /** The navigational status of the current entity */ nav_status: IEnumAisNavStatus;
  /** The position of the AIS entity */ position: IMeasurementPosition;
  /** The accuracy of the given AIS position. LOW is > 10 meters, HIGH is <= 10 meters  */ position_accuracy: IEnumAisPositionAccuracy;
  /** The type of navigation device */ position_device_type: IEnumAisPositionDeviceType;
  /** Transmission control for long-range broadcast message */ control_long_range_message: IEnumAisLongRangeControlType;
  /** Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device */ raim_flag: IEnumAisRaimFlag;
  /** Communication state selector flag */ communication_state: number;
}

export type IAisMessageBinaryOrSafetyBroadcastAisMessageType = "BINARY_OR_SAFETY_BROADCAST" | "SINGLE_SLOT_BINARY_MESSAGE" | "MULTIPLE_SLOT_BINARY_MESSAGE";
/** This message type is used to send and array of binary data or text as a broadcast */
export interface IAisMessageBinaryOrSafetyBroadcast extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageBinaryOrSafetyBroadcastAisMessageType;
  /** Multiple messages send in binary or text contained in an array */ message_text_array: string[];
}

export type IAisMessageBinaryOrSafetyMessageAisMessageType = "BINARY_OR_SAFETY_MESSAGE";
/** This message type is used to send binary data or safety related text to another AIS device */
export interface IAisMessageBinaryOrSafetyMessage extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageBinaryOrSafetyMessageAisMessageType;
  sequence_number: number;
  /** The MMSI number where the ship is sending data to. */ destination_id: number;
  /** Message send in text or in binary */ message_text: string;
}

export type IAisMessageChannelManagementAisMessageType = "CHANNEL_MANAGEMENT";
export type IAisMessageChannelManagementPower = "HIGH" | "LOW";
export type IAisMessageChannelManagementTransmitReceiveMode = "TXA_AND_TXB_OR_RXA_AND_RXB" | "TXA_OR_RXA_AND_RXB" | "TXB_OR_RXA_AND_RXB";
export type IAisMessageChannelManagementAddressedOrBroadcast = "BROADCAST" | "ADDRESSED";
/** Management of channels and transceiver modes by a Base station */
export interface IAisMessageChannelManagement extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageChannelManagementAisMessageType;
  /** frequency of the primary operating channel (in MHz) */ channel_a_frequency: number;
  /** frequency of the primary operating channel (in MHz) */ channel_b_frequency: number;
  /** frequency of the primary operating channel (in kHz) */ channel_a_bandwidth: number;
  /** frequency of the secondary operating channel (in kHz) */ channel_b_bandwidth: number;
  /** Transmitter Power Mode  */ power: IAisMessageChannelManagementPower;
  /** Region defining latitudes and longitudes */ north_east_longtitude: number;
  /** Region defining latitudes and longitudes */ north_east_latitude: number;
  /** Region defining latitudes and longitudes */ south_west_longtitude: number;
  /** Region defining latitudes and longitudes */ south_west_latitude: number;
  /** The size of the transitional zone */ zone_size: number;
  /** The mode the transmittor is using */ transmit_receive_mode: IAisMessageChannelManagementTransmitReceiveMode;
  /** Addressed or Broadcast Message Indicator */ addressed_or_broadcast: IAisMessageChannelManagementAddressedOrBroadcast;
}

export type IAisMessageClassBPositionReportAisMessageType = "CLASS_B_EQUIPMENT_POSITION_REPORT";
/** A position report message for the AIS for a class b ship. */
export interface IAisMessageClassBPositionReport extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageClassBPositionReportAisMessageType;
  /** The position of the AIS entity */ position: IMeasurementPosition;
  /** The accuracy of the given AIS position. LOW is > 10 meters, HIGH is <= 10 meters  */ position_accuracy: IEnumAisPositionAccuracy;
  /** Degrees (0-359) (511 indicates not available = default) */ true_heading: number;
  /** Type class B unit flag */ unit_flag: IEnumAisClassBUnitFlag;
  /** Flag to indicate if display is integrated for messages 12 and 14 */ display_flag: IEnumAisClassBDisplayFlag;
  /** Indicates whether ship is equipped with DSC function */ dsc_flag: IEnumAisClassBDscFlag;
  /** Capable of operating over the upper 525 kHz band of the marine band or the whole marine band */ band_flag: IEnumAisClassBBandFlag;
  /** Indicates if frequencycan be managed via message 22 */ message_flag: IEnumAisClassBMessageFlag;
  /** State of station if it is operating in autonomous or assigned mode */ assigned_mode_flag: IEnumAisAssignedModeFlag;
  /** Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device */ raim_flag: IEnumAisRaimFlag;
  /** The selected state for communication */ communication_state_selected: IEnumAisCommunicationStateSelected;
  /** Communication state selector flag */ communication_state: number;
}

export type IAisMessageDateInquiryAisMessageType = "UTC_DATE_INQUIRY";
/** This message type is used to send and array of binary data as a broadcast */
export interface IAisMessageDateInquiry extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageDateInquiryAisMessageType;
  /** The MMSI number where the ship is requisting a date response from. */ destination_id: number;
}

export type IAisMessageDateResponseAisMessageType = "UTC_DATE_RESPONSE";
/** This message type is used to send and array of binary data as a broadcast */
export interface IAisMessageDateResponse extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageDateResponseAisMessageType;
  /** The send UTC date time response from the destination ship */ date_time_response: string;
  /** The position of the AIS entity */ position: IMeasurementPosition;
  /** The accuracy of the given AIS position. LOW is > 10 meters, HIGH is <= 10 meters  */ position_accuracy: IEnumAisPositionAccuracy;
  /** The type of navigation device */ position_device_type: IEnumAisPositionDeviceType;
  /** Transmission control for long-range broadcast message */ control_long_range_message: IEnumAisLongRangeControlType;
  /** Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device */ raim_flag: IEnumAisRaimFlag;
}

export type IAisMessageDgnssBroadcastMessageAisMessageType = "DGNSS_BROADCAST_MESSAGE";
/** This differential GNSS broadcast message should be transmitted by a base station, which is connected to a DGNSS reference source */
export interface IAisMessageDgnssBroadcastMessage extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageDgnssBroadcastMessageAisMessageType;
  /** The position of the AIS entity */ position: IMeasurementPosition;
}

export type IAisMessageExtendedClassBReportAisMessageType = "CLASS_B_EQUIPMENT_POSITION_REPORT";
/** A position report message for the AIS for a class b ship combined with static data of the ship. */
export interface IAisMessageExtendedClassBReport extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageExtendedClassBReportAisMessageType;
  /** The position of the AIS entity */ position: IMeasurementPosition;
  /** The accuracy of the given AIS position. LOW is > 10 meters, HIGH is <= 10 meters  */ position_accuracy: IEnumAisPositionAccuracy;
  /** Degrees (0-359) (511 indicates not available = default) */ true_heading: number;
  /** The name of the AIS entity */ entity_name: string;
  /** The type of vessel given by the AIS, default is 0 ('Not available') */ ship_type: IEnumAisShipType;
  /** Indicates the dimension of ship */ dimension_to_bow: number;
  /** Indicates the dimension of ship */ dimension_to_stern: number;
  /** Indicates the dimension of ship */ dimension_to_port: number;
  /** Indicates the dimension of ship */ dimension_to_starboard: number;
  /** The type of navigation device */ position_device_type: IEnumAisPositionDeviceType;
  /** State of station if it is operating in autonomous or assigned mode */ assigned_mode_flag: IEnumAisAssignedModeFlag;
  /** Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device */ raim_flag: IEnumAisRaimFlag;
}

export type IAisMessageGroupAssignmentCommandAisMessageType = "GROUP_ASSIGNMENT_COMMAND";
export type IAisMessageGroupAssignmentCommandTransmitReceiveMode = "TXA_AND_TXB_OR_RXA_AND_RXB" | "TXA_OR_RXA_AND_RXB" | "TXB_OR_RXA_AND_RXB";
/** Assignment of a specific report behaviour by competent authority using a Base station to a specific group of mobiles */
export interface IAisMessageGroupAssignmentCommand extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageGroupAssignmentCommandAisMessageType;
  /** Region defining latitudes and longitudes */ north_east_longtitude: number;
  /** Region defining latitudes and longitudes */ north_east_latitude: number;
  /** Region defining latitudes and longitudes */ south_west_longtitude: number;
  /** Region defining latitudes and longitudes */ south_west_latitude: number;
  /** The mode the transmittor is using */ transmit_receive_mode: IAisMessageGroupAssignmentCommandTransmitReceiveMode;
  /** The amount of minutes quiet commanded */ quiet_time: number;
  /** The type of vessel given by the AIS, default is 0 ('Not available') */ ship_type: IEnumAisShipType;
  station_type: string;
  report_interval: number;
}

export type IAisMessageInterrogationAisMessageType = "INTERROGATION";
/** Request for a specific message types from multiple stations or ships */
export interface IAisMessageInterrogation extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageInterrogationAisMessageType;
  /** the requested message type used in message type 15 (interrogation); Can request up to two message types from two stations */ requested_message_type: IEnumAisMessageType[];
  /** The MMSI numbers where the ship is sending data to. */ destination_ids: number[];
}

export type IAisMessageLongRangeApplicationPositionReportAisMessageType = "LONG_RANGE_APPLICATION_POSITION_REPORT";
/** A long range position report message for the AIS. */
export interface IAisMessageLongRangeApplicationPositionReport extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageLongRangeApplicationPositionReportAisMessageType;
  /** The navigational status of the current entity */ nav_status: IEnumAisNavStatus;
  /** The position of the AIS entity */ position: IMeasurementPosition;
  /** The accuracy of the given AIS position. LOW is > 10 meters, HIGH is <= 10 meters  */ position_accuracy: IEnumAisPositionAccuracy;
  /** The latency of which the position was send */ position_latency: IEnumAisPositionLatency;
  /** Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device */ raim_flag: IEnumAisRaimFlag;
}

export type IAisMessagePositionReportAisMessageType = "POSITION_REPORT";
/** A position report message for the AIS. */
export interface IAisMessagePositionReport extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessagePositionReportAisMessageType;
  /** The position of the AIS entity */ position: IMeasurementPosition;
  /** The accuracy of the given AIS position. LOW is > 10 meters, HIGH is <= 10 meters  */ position_accuracy: IEnumAisPositionAccuracy;
  /** The Rate Of Turn of the ship in degrees, minus = turning left; plus = turning right; (-128  no turn information available (default)) */ rate_of_turn: number;
  /** Degrees (0-359) (511 indicates not available = default) */ true_heading: number;
  /** Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device */ raim_flag: IEnumAisRaimFlag;
  /** Indicates whether an special maneuver is ongoing */ special_maneuvre_indicator: IEnumAisSpecialManeuver;
  /** Communication state selector flag */ communication_state: number;
}

export type IAisMessageSarAircraftPositionReportAisMessageType = "SAR_AIRCRAFT_POSITION_REPORT";
/** A standard Search And Rescue Aircraft position report. */
export interface IAisMessageSarAircraftPositionReport extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageSarAircraftPositionReportAisMessageType;
  /** The position of the AIS entity */ position: IMeasurementPosition;
  /** The accuracy of the given AIS position. LOW is > 10 meters, HIGH is <= 10 meters  */ position_accuracy: IEnumAisPositionAccuracy;
  /** Altitude (derived from GNSS or barometric (see altitude sensor parameter below)) (m) (0-4 094 m) 4 095 = not available */ altitude: number;
  /** The type of altitude sensore used on the ship */ altitude_sensor: IEnumAisAltitudeSensorType;
  /** Data terminal equipment (DTE) ready */ data_terminal_equipment: IEnumAisDte;
  /** State of station if it is operating in autonomous or assigned mode */ assigned_mode_flag: IEnumAisAssignedModeFlag;
  /** Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device */ raim_flag: IEnumAisRaimFlag;
  /** The selected state for communication */ communication_state_selected: IEnumAisCommunicationStateSelected;
  /** Communication state selector flag */ communication_state: number;
}

export type IAisMessageStaticDataReportAisMessageType = "STATIC_DATA_REPORT";
/** Additional data assigned to an MMSI. */
export interface IAisMessageStaticDataReport extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageStaticDataReportAisMessageType;
  /** The call sign of the given AIS entity, '@@@@@@@' is default */ callsign: string;
  /** Unique identification of the Unit by a number as defined by the manufacturer */ vendor_id: string;
  /** The name of the AIS entity */ entity_name: string;
  /** The type of vessel given by the AIS, default is 0 ('Not available') */ ship_type: IEnumAisShipType;
  /** Indicates the dimension of ship */ dimension_to_bow: number;
  /** Indicates the dimension of ship */ dimension_to_stern: number;
  /** Indicates the dimension of ship */ dimension_to_port: number;
  /** Indicates the dimension of ship */ dimension_to_starboard: number;
  /** The type of navigation device */ position_device_type: IEnumAisPositionDeviceType;
}

export type IAisMessageStaticVoyageDataAisMessageType = "STATIC_AND_VOYAGE_DATA";
/** An AIS message used to report static or voyage related data. */
export interface IAisMessageStaticVoyageData extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageStaticVoyageDataAisMessageType;
  /** An indicator for the version the user has on his AIS device. */ ais_version_indicator: IEnumAisVersionIndicator;
  /** The International Maritime Organization (IMO) number is a unique identifier for ships */ imo_number: string;
  /** The call sign of the given AIS entity, '@@@@@@@' is default */ callsign: string;
  /** The name of the AIS entity */ entity_name: string;
  /** The type of vessel given by the AIS, default is 0 ('Not available') */ ship_type: IEnumAisShipType;
  /** Indicates the dimension of ship */ dimension_to_bow: number;
  /** Indicates the dimension of ship */ dimension_to_stern: number;
  /** Indicates the dimension of ship */ dimension_to_port: number;
  /** Indicates the dimension of ship */ dimension_to_starboard: number;
  /** Estimated date and time of arrival */ eta: string;
  /** Maximum present static draught in meters */ max_draught: number;
  /** Destination of the vessel, Maximum 20 characters */ destination: string;
  /** Data terminal equipment (DTE) ready */ dte: IEnumAisDte;
}

export type IAisMessageTextPayloadMessageAisMessageType = "ASSIGNMENT_MODE_COMMAND" | "SAFETY_ACKNOWLEDGEMENT" | "BINARY_ACKNOWLEDGEMENT" | "DATA_LINK_MANAGEMENT_MESSAGE";
/** Contains text or binary message as payload. */
export interface IAisMessageTextPayloadMessage extends IAisMessageBaseAisMessage {
  /** The message type of the given AIS measurement */ ais_message_type: IAisMessageTextPayloadMessageAisMessageType;
  /** The text or binary data send as payload */ payload: string;
}

/** A device which is a part of a piece of equipment installed on a vessel */
export interface IEquipmentDevice {
  /** The unique identifier for the device (UUID v4) */ device_id: string;
  /** Name of the device */ name: string;
  /** The type of device */ type: IEnumDeviceType;
  /** The brand of the device */ brand?: string;
  /** The product number of the device */ product_no?: string;
  /** The serial number of the device */ serial_no?: string;
  /** The company which supplied the device */ supplier?: IPersonaCompany;
  /** The company which has installed the device */ installer?: IPersonaCompany;
  /** The company which maintains the device */ maintainer?: IPersonaCompany;
}

/** A piece of equipment installed on a vessel. Equipment is composed out of different devices */
export interface IEquipmentEquipment {
  /** The unique identifier for the equipment (UUID v4) */ equipment_id: string;
  /** Name of the equipment */ name: string;
  /** The type of equipment */ type: IEnumEquipmentType;
  /** The company which supplied the equipment */ supplier?: IPersonaCompany;
  /** The company which has installed the equipment */ installer?: IPersonaCompany;
  /** The company which maintains the equipment */ maintainer?: IPersonaCompany;
  /** The collection of devices of which this equipment is composed */ devices: IEquipmentDevice[];
}

/** Fuel consumption of a certain engine. */
export interface IMeasurementFuelConsumption {
  /** The current fuel consumption in liters per hour */ current_consumption: number;
  /** The current averaged fuel consumption in liters per hour */ current_average_consumption?: number;
  /** The current peak fuel consumption in liters per hour */ current_peak_consumption?: number;
  /** The total number of liters consumed in the last hour */ last_hour_consumption?: number;
  /** The total number of liters consumed in the last 24 hours */ last_day_consumption?: number;
}

/** The value of a certain type of measurement */
export interface IMeasurementMeasurementValue {
  /** The type of measurement */ type?: IEnumMeasurementType;
  /** A positional measurement */ position?: IMeasurementPosition;
  /** A numerical measurement */ numeric?: IMeasurementNumeric;
  /** A trawl tension measurement */ trawl_tension?: IMeasurementTrawlTension;
  /** A scale measurement */ scale?: IMeasurementScale;
  /** A fuel consumption measurement */ fuel_consumption?: IMeasurementFuelConsumption;
  /** A spatial axes measurement */ spatial_axes?: IMeasurementSpatialAxes;
}

/** A number representing a measurement from a sensor */
export interface IMeasurementNumeric {
  /** The absolute measured value */ value: number;
}

/** A navigational position that can be used in an entry */
export interface IMeasurementPosition {
  /** The latitude of the geographical location */ latitude: number;
  /** The longitude of the geographical location */ longitude: number;
  /** The direction in which the vessel is traveling, in degrees */ course_made_good?: number;
  /** The velocity of the vessel in meters per second (m/s) over the ground */ speed_over_ground?: number;
  /** The number of satellites used to calculate the position */ number_of_satellites?: number;
  /** The fix quality as reported by an NMEA receiver (0 = invalid, 1 = GPS fix, 2 = DGPS fix) */ fix_quality?: IEnumGnssFixQuality;
  /** The type of GPS fix. */ fix_type?: IEnumGnssFixType;
  /** Relative accuracy of horizontal position */ hdop?: number;
  /** The number of meters above mean sea level of the receiver antenna */ antenna_altitude?: number;
  /** Height of geoid above WGS84 ellipsoid in meters */ geoidal_separation?: number;
  /** The age of the DGPS data in seconds */ dgps_data_age?: number;
  /** The station id of the used DGPS reference station */ dgps_station_id?: number;
}

/** A scale measurement that can be used in an entry */
export interface IMeasurementScale {
  /** The number of the haul the product was caught in */ haul_number: number;
  /** The weight of the product */ weight: number;
  /** The category of the scaled product */ category: IEnumScaleCategory;
  /** The type of the product, e.g. a type of fish */ product: string;
}

/** The spatial axes for a given sensor */
export interface IMeasurementSpatialAxes {
  /** The easting coordinate range */ x: number;
  /** The northing coordinate range */ y: number;
  /** The elevation of the coordinate range */ z: number;
}

/** A combination of sensor measurements for the trawl tension */
export interface IMeasurementTrawlTension {
  /** The shooted length at starboard side */ shooted_length_starboard: number;
  /** The shooted length at port side */ shooted_length_port: number;
  /** The shooted length at center side */ shooted_length_center: number;
  /** The traction at starboard side */ traction_starboard: number;
  /** The traction at port side */ traction_port: number;
  /** The traction at center side */ traction_center: number;
  /** The speed at starboard side */ speed_starboard?: number;
  /** The speed at port side */ speed_port?: number;
  /** The speed at center side */ speed_center?: number;
  /** The pressure at starboard side */ pressure_starboard?: number;
  /** The pressure at port side */ pressure_port?: number;
  /** The pressure at center side */ pressure_center?: number;
  /** The drum rotations at starboard side */ drum_rotations_starboard?: number;
  /** The drum rotations at port side */ drum_rotations_port?: number;
  /** The drum rotations at center side */ drum_rotations_center?: number;
}

/** The details of a (commercial) company */
export interface IPersonaCompany {
  /** The unique identifier for the company (UUID v4) */ company_id: string;
  /** The name of the company */ name: string;
  /** The address of the company */ address?: ICoreAddress;
  /** The contact details of the company */ contact?: ICoreContactDetails;
}

export type IEnumAisAidType = "NOT_AVAILABLE" | "REFERENCE_POINT" | "RACON" | "FIXED_STRUCTURES_OFF_SHORE" | "EMERGENCY_WRECK_MARKING_BUOY" | "LIGHT_WITHOUT_SECTORS" | "LIGHT_WITH_SECTORS" | "LEADING_LIGHT_FRONT" | "LEADING_LIGHT_REAR" | "BEACON_CARDINAL_NORTH" | "BEACON_CARDINAL_SOUTH" | "BEACON_CARDINAL_EAST" | "BEACON_CARDINAL_WEST" | "BEACON_PORT_HAND" | "BEACON_STARBOARD_HAND" | "BEACON_PREFERRED_CHANNEL_PORT_HAND" | "BEACON_PREFERRED_CHANNEL_STARBOARD_HAND" | "BEACON_ISOLATED_DANGER" | "BEACON_SAFE_WATER" | "BEACON_SPECIAL_MARKER" | "CARDINAL_MARK_NORTH" | "CARDINAL_MARK_SOUTH" | "CARDINAL_MARK_WEST" | "CARDINAL_MARK_EAST" | "PORT_HAND_MARK" | "STARBOARD_HAND_MARK" | "PREFERRED_CHANNEL_PORT_HAND" | "PREFERRED_CHANNEL_STARBOARD_HAND" | "ISOLATED_DANGER" | "SAFE_WATER" | "SPECIAL_MARK" | "LANBY";

export type IEnumAisAidVirtualFlag = "REAL_ATON" | "VIRTUAL_ATON";

export type IEnumAisAltitudeSensorType = "GNSS" | "BAROMETRIC_SOURCE";

export type IEnumAisAssignedModeFlag = "AUTONOMOUS_CONTINUOUS_MODE" | "ASSIGNED_MODE";

export type IEnumAisClassBBandFlag = "CAPABLE_OPERATING_525_OVER_KHZ" | "CAPABLE_OPERATING_OVER_MARINE_BAND";

export type IEnumAisClassBDisplayFlag = "NO_DISPLAY" | "DISPLAY_EQUIPPED";

export type IEnumAisClassBDscFlag = "NO_DSC_FUNCTION" | "DSC_FUNCTION_EQUIPPED";

export type IEnumAisClassBMessageFlag = "NO_FREQUENCY_VIA_MESSAGE_22" | "FREQUENCY_MANAGEMENT_VIA_MESSAGE_22";

export type IEnumAisClassBUnitFlag = "SOTDMA" | "CS";

export type IEnumAisCommunicationStateSelected = "SOTDMA" | "ITDMA";

export type IEnumAisDte = "AVAILABLE" | "NOT_AVAILABLE";

export type IEnumAisLongRangeControlType = "STOP_TRANSMISSION_MESSAGE_27" | "REQUEST_TRANSMISSION_MESSAGE_27";

export type IEnumAisMessageType = "POSITION_REPORT" | "BASE_STATION_REPORT" | "STATIC_AND_VOYAGE_DATA" | "BINARY_OR_SAFETY_MESSAGE" | "BINARY_ACKNOWLEDGEMENT" | "SAFETY_ACKNOWLEDGEMENT" | "BINARY_OR_SAFETY_BROADCAST" | "SAR_AIRCRAFT_POSITION_REPORT" | "UTC_DATE_INQUIRY" | "UTC_DATE_RESPONSE" | "INTERROGATION" | "ASSIGNMENT_MODE_COMMAND" | "DGNSS_BROADCAST_MESSAGE" | "CLASS_B_EQUIPMENT_POSITION_REPORT" | "EXTENDED_CLASS_B_EQUIPMENT_POSITION_REPORT" | "DATA_LINK_MANAGEMENT_MESSAGE" | "AIDS_TO_NAVIGATION_REPORT" | "CHANNEL_MANAGEMENT" | "GROUP_ASSIGNMENT_COMMAND" | "STATIC_DATA_REPORT" | "SINGLE_SLOT_BINARY_MESSAGE" | "MULTIPLE_SLOT_BINARY_MESSAGE" | "LONG_RANGE_APPLICATION_POSITION_REPORT" | "RESERVED_FOR_FUTURE_USE";

export type IEnumAisNavStatus = "UNDER_WAY_USING_ENGINE" | "AT_ANCHOR" | "NOT_UNDER_COMMAND" | "RESTRICTED_MANOEUVERABILITY" | "CONSTRAINED_BY_HER_DRAUGHT" | "MOORED" | "AGROUND" | "ENGAGED_IN_FISHING" | "UNDER_WAY_SAILING" | "RESERVED_FOR_FUTURE_AMENDMENT_OF_NAV_STATUS_HSC" | "RESERVED_FOR_FUTURE_AMENDMENT_OF_NAV_STATUS_WIG" | "RESERVED_FOR_FUTURE_USE" | "AIS_SART_ACTIVE" | "UNDEFINED";

export type IEnumAisOffPositionIndicator = "ON_POSITION" | "OFF_POSITION";

export type IEnumAisPositionAccuracy = "LOW" | "HIGH";

export type IEnumAisPositionDeviceType = "UNDEFINED" | "GPS" | "GLONASS" | "COMBINED_GPS_GLONASS" | "LORAN_C" | "CHAYKA" | "INTEGRATED_NAVIGATION_SYSTEM" | "SURVEYED" | "GALILEO" | "NOT_USED" | "INTERNAL_GNSS";

export type IEnumAisPositionLatency = "LESS_THAN_5_SECONDS" | "GREATER_THAN_5_SECONDS";

export type IEnumAisRaimFlag = "RAIM_NOT_IN_USE" | "RAIM_IN_USE";

export type IEnumAisShipType = "NOT_AVAILABLE" | "RESERVED_FOR_FUTURE_USE" | "WING_IN_GROUND_ALL_SHIPS_OF_THIS_TYPE" | "WING_IN_GROUND_HAZARDOUS_CATEGORY_A" | "WING_IN_GROUND_HAZARDOUS_CATEGORY_B" | "WING_IN_GROUND_HAZARDOUS_CATEGORY_C" | "WING_IN_GROUND_HAZARDOUS_CATEGORY_D" | "WING_IN_GROUND_RESERVED_FOR_FUTURE_USE" | "FISHING" | "TOWING" | "TOWING_LENGTH_EXCEEDS_200M_OR_BREADTH_EXCEEDS_25M" | "DREDGING_OR_UNDERWATER_OPS" | "DIVING_OPS" | "MILITARY_OPS" | "SAILING" | "PLEASURE_CRAFT" | "RESERVED" | "HIGH_SPEED_CRAFT_ALL_SHIPS_OF_THIS_TYPE" | "HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_A" | "HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_B" | "HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_C" | "HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_D" | "HIGH_SPEED_CRAFT_RESERVED_FOR_FUTURE_USE" | "HIGH_SPEED_CRAFT_NO_ADDITIONAL_INFORMATION" | "PILOT_VESSEL" | "SEARCH_AND_RESCUE_VESSEL" | "TUG" | "PORT_TENDER" | "ANTI_POLLUTION_EQUIPMENT" | "LAW_ENFORCEMENT" | "SPARE_LOCAL_VESSEL" | "MEDICAL_TRANSPORT" | "NON_COMBATANT_SHIP" | "PASSENGER_ALL_SHIPS_OF_THIS_TYPE" | "PASSENGER_HAZARDOUS_CATEGORY_A" | "PASSENGER_HAZARDOUS_CATEGORY_B" | "PASSENGER_HAZARDOUS_CATEGORY_C" | "PASSENGER_HAZARDOUS_CATEGORY_D" | "PASSENGER_RESERVED_FOR_FUTURE_USE" | "PASSENGER_NO_ADDITIONAL_INFORMATION" | "CARGO_ALL_SHIPS_OF_THIS_TYPE" | "CARGO_HAZARDOUS_CATEGORY_A" | "CARGO_HAZARDOUS_CATEGORY_B" | "CARGO_HAZARDOUS_CATEGORY_C" | "CARGO_HAZARDOUS_CATEGORY_D" | "CARGO_RESERVED_FOR_FUTURE_USE" | "CARGO_NO_ADDITIONAL_INFORMATION" | "TANKER_ALL_SHIPS_OF_THIS_TYPE" | "TANKER_HAZARDOUS_CATEGORY_A" | "TANKER_HAZARDOUS_CATEGORY_B" | "TANKER_HAZARDOUS_CATEGORY_C" | "TANKER_HAZARDOUS_CATEGORY_D" | "TANKER_RESERVED_FOR_FUTURE_USE" | "TANKER_NO_ADDITIONAL_INFORMATION" | "OTHER_TYPE_ALL_SHIPS_OF_THIS_TYPE" | "OTHER_TYPE_HAZARDOUS_CATEGORY_A" | "OTHER_TYPE_HAZARDOUS_CATEGORY_B" | "OTHER_TYPE_HAZARDOUS_CATEGORY_C" | "OTHER_TYPE_HAZARDOUS_CATEGORY_D" | "OTHER_TYPE_RESERVED_FOR_FUTURE_USE" | "OTHER_TYPE_NO_ADDITIONAL_INFORMATION";

export type IEnumAisSpecialManeuver = "NOT_AVAILABLE" | "NOT_ENGAGED_IN_SPECIAL_MANEUVER" | "ENGAGED_IN_SPECIAL_MANEUVER";

export type IEnumAisVersionIndicator = "COMPLIANT_WITH_ITU_R_M_1371_1" | "COMPLIANT_WITH_ITU_R_M_1371_3_OR_HIGHER" | "COMPLIANT_WITH_ITU_R_M_1371_5_OR_HIGHER" | "COMPLIANT_WITH_FUTURE_EDITIONS";

export type IEnumDeviceType = "PUMP" | "PROCESSOR" | "DISPLAY" | "HID" | "ROUTER" | "SWITCH" | "MODEM" | "SENSOR" | "BRAKE" | "ACTUATOR" | "CABLE" | "ENCLOSURE" | "CIRCUIT_BREAKER" | "ECONOMETER" | "SCALE" | "RECEIVER" | "TRANSMITTER" | "TRANSCEIVER";

export type IEnumEffortZone = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y";

export type IEnumEquipmentType = "ENGINE" | "GNSS" | "ECHO_SOUNDER" | "FISH_FINDER" | "AIS" | "TANK_LEVEL_METER" | "TENSIOMETER" | "CHARGER" | "SEPARATOR" | "COMPASS" | "V_SAT" | "REFRIGERATOR" | "ICE_MAKER" | "WINCH" | "RUDDER" | "PROPELLER" | "PUMP" | "SENSOR" | "SCALE" | "ECDIS" | "ECS";

export type IEnumFishFreshness = "A" | "B" | "E" | "SO" | "V";

export type IEnumFishingGearType = "DRB" | "FIX" | "FPO" | "GEN" | "GN" | "GNC" | "GND" | "GNF" | "GNS" | "GTN" | "GTR" | "HMD" | "KRK" | "LA" | "LHM" | "LHP" | "LL" | "LLD" | "LLS" | "LTL" | "LX" | "MIS" | "NK" | "OTB" | "OTM" | "OTT" | "PS" | "PS1" | "PS2" | "PTB" | "PTM" | "PUL" | "RG" | "SDN" | "SPR" | "SSC" | "SV" | "SX" | "TB" | "TBB" | "TBN" | "TBS";

export type IEnumFishPackageType = "CNT" | "EC" | "OK" | "QS" | "CN" | "CT" | "VO" | "4H" | "BX" | "5H" | "QR" | "TB" | "NF" | "NG" | "ZB";

export type IEnumFishPresentation = "BMS" | "CBF" | "CLA" | "DWT" | "FIL" | "FIS" | "FSB" | "FSP" | "GHT" | "GTA" | "GTF" | "GUG" | "GUH" | "GUL" | "GUS" | "GUT" | "HEA" | "HET" | "JAP" | "JAT" | "LAP" | "LVR-C" | "LVR" | "OTH" | "ROE-C" | "ROE" | "SAD" | "SAL" | "SGH" | "SGT" | "SKI" | "SUR" | "TAL" | "TLD" | "TNG-C" | "TNG" | "TUB" | "WHL" | "WNG" | "WNG+SKI";

export type IEnumFishState = "ALI" | "BOI" | "DRI" | "FRE" | "FRO" | "SAL" | "SMO";

export type IEnumGnssFixQuality = "INVALID" | "GPS_FIX" | "DGPS_FIX";

export type IEnumGnssFixType = "NOT_AVAILABLE" | "2D_FIX" | "3D_FIX";

export type IEnumMeasurementType = "POSITION" | "TEMPERATURE" | "HUMIDITY" | "PRESSURE" | "SPEED" | "ONOFF" | "FORCE" | "FUEL_CONSUMPTION" | "DEPTH" | "ACCELERATION" | "MAGNETISM" | "ANGULAR_VELOCITY" | "VOLTAGE" | "CURRENT" | "POWER" | "ENERGY_CONSUMPTION" | "TRAWL_TENSION" | "SCALE" | "RPM" | "ROUTE" | "SPATIAL_AXES";

export type IEnumReasonArrival = "ECY" | "GRD" | "LAN" | "OTH" | "REF" | "REP" | "RES" | "SCR" | "SHE" | "TRA";

export type IEnumReasonDeparture = "FIS" | "GUD" | "OTH" | "SCR" | "STE" | "TST";

export type IEnumReasonDiscard = "BAI" | "HSV" | "OTH" | "PDM" | "PRO" | "QEX";

export type IEnumRouteGeometryType = "RHUMB_LINE_LOXODROME" | "GREAT_CICRLE_ORTHODROME";

export type IEnumScaleCategory = "FISH";

export type IEnumVesselCompartment = "DECK" | "BRIDGE" | "GALLEY" | "ENGINE_ROOM" | "FISH_HOLD" | "CABIN" | "BOW" | "STERN";

export type IEntryAisMessageEntryType = "ais-message";
/** The message received or send by an AIS device */
export interface IEntryAisMessage extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryAisMessageEntryType;
  /** The unique identifier for the device */ device_id: string;
}

export type IEntryArrivalEntryType = "arrival";
/** A return to port event */
export interface IEntryArrival extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryArrivalEntryType;
  /** Trip related details for this  entry */ trip: ICoreTripEntry;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The code of the port of arrival. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR */ port: ICorePort;
  /** The reason for the vessel to return to port. Please check the wiki for the meaning of these codes. */ reason_arrival: IEnumReasonArrival;
  /** The caught fish present on board the vessel */ catch_on_board?: ICoreFishingCatch[];
}

export type IEntryDepartureEntryType = "departure";
/** A departure from port event */
export interface IEntryDeparture extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryDepartureEntryType;
  /** Trip related details for this  entry */ trip: ICoreTripEntry;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The code of the port of departure. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR */ port: ICorePort;
  /** The anticipated activity for the fishing trip. Please check the wiki for the meaning of these codes. */ anticipated_activity?: IEnumReasonDeparture;
  /** The gear present on board the vessel */ gear_on_board?: ICoreFishingGear[];
  /** The previously caught fish present on board the vessel */ catch_on_board?: ICoreFishingCatch[];
}

export type IEntryDeviceMeasurementEntryType = "device-measurement";
/** A device measurement journal entry */
export interface IEntryDeviceMeasurement extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryDeviceMeasurementEntryType;
  /** The unique identifier for the device */ device_id: string;
  /** The registered measurement for the device */ value: IMeasurementMeasurementValue;
}

export type IEntryEndOfFishingEntryType = "end-of-fishing";
/** Notification of intent to cease all fishing activity for the trip */
export interface IEntryEndOfFishing extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryEndOfFishingEntryType;
  /** Trip related details for this entry */ trip: ICoreTripEntry;
  /** The datetime of end of fishing in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
}

export type IEntryEquipmentInventoryEntryType = "equipment-inventory";
/** An entry detailing the equipment installed on a vessel. One 1 should exist per journal */
export interface IEntryEquipmentInventory extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryEquipmentInventoryEntryType;
  /** The collection of equipment for the vessel */ equipment: IEquipmentEquipment[];
}

export type IEntryFishingActivityEntryType = "fishing-activity";
/** Notification of intent to cease all fishing activity for the trip */
export interface IEntryFishingActivity extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryFishingActivityEntryType;
  /** Trip related details for this entry */ trip: ICoreTripEntry;
  /** The fishing tow details */ tow: ICoreFishingTow;
}

export type IEntryRouteEntryType = "route";
/** A route which was planned with an ECS/ECDIS system. */
export interface IEntryRoute extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryRouteEntryType;
  /** The name of the route. */ name: string;
  /** Generic route information. */ info?: string;
  /** The collection of waypoints which make the route. */ waypoints: ICoreRouteWaypoint[];
}

export type IEntryZoneEnterEntryType = "zone-enter";
/** Enter declaration of a fishing zone */
export interface IEntryZoneEnter extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryZoneEnterEntryType;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The zone being entered */ zone: ICoreFishingZone;
  /** The geographical location where the entry took place */ location: IMeasurementPosition;
  /** The previously caught fish present on the vessel at the time of entry */ catch_on_board?: ICoreFishingCatch[];
  /** An indication of the target species for the fishing activity. NLD: TS, GBR: TS */ target_species?: string;
  /** An indication of the directed species for the fishing activity. GBR: GBRDS */ directed_species?: string;
  /** The fishing effort zone. Example: A (ICES V-VI). GBR: GBRFE */ effort_zone?: IEnumEffortZone;
  /** Indicates the vessel has engaged in trans-zonal fishing: GRB: GBRTRZ */ trans_zonal_fishing?: boolean;
}

export type IEntryZoneExitEntryType = "zone-exit";
/** Exit declaration of a fishing zone */
export interface IEntryZoneExit extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryZoneExitEntryType;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The zone being entered */ zone: ICoreFishingZone;
  /** The geographical location where the entry took place */ location: IMeasurementPosition;
  /** The previously caught fish present on the vessel at the time of entry */ catch_on_board?: ICoreFishingCatch[];
  /** An indication of the target species for the fishing activity. Only GBR: TS */ target_species?: string;
  /** The fishing effort zone. Example: A (ICES V-VI). GBR: GBRFE */ effort_zone?: IEnumEffortZone;
  /** Indicates the vessel has engaged in trans-zonal fishing: GRB: GBRTRZ */ trans_zonal_fishing?: boolean;
  /** The zones involved in trans-zonal fishing. NLD: NLTRZ */ trans_zonal_fishing_zones?: ICoreFishingZone[];
}
