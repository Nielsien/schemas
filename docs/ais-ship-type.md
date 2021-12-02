# AIS ship type Schema

```txt
https://poseidat.org/schema/enum/ais-ship-type.json
```

The converted names of the ais ship types.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-ship-type.json](schemas/enum/ais-ship-type.json "open original schema") |

## AIS ship type Type

`string` ([AIS ship type](ais-ship-type.md))

## AIS ship type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                 | Explanation |
| :---------------------------------------------------- | :---------- |
| `"NOT_AVAILABLE (DEFAULT)"`                           |             |
| `"RESERVED_FOR_FUTURE_USE"`                           |             |
| `"WING_IN_GROUND_ALL_SHIPS_OF_THIS_TYPE"`             |             |
| `"WING_IN_GROUND_HAZARDOUS_CATEGORY_A"`               |             |
| `"WING_IN_GROUND_HAZARDOUS_CATEGORY_B"`               |             |
| `"WING_IN_GROUND_HAZARDOUS_CATEGORY_C"`               |             |
| `"WING_IN_GROUND_HAZARDOUS_CATEGORY_D"`               |             |
| `"WING_IN_GROUND_RESERVED_FOR_FUTURE_USE"`            |             |
| `"FISHING"`                                           |             |
| `"TOWING"`                                            |             |
| `"TOWING_LENGTH_EXCEEDS_200M_OR_BREADTH_EXCEEDS_25M"` |             |
| `"DREDGING_OR_UNDERWATER_OPS"`                        |             |
| `"DIVING_OPS"`                                        |             |
| `"MILITARY_OPS"`                                      |             |
| `"SAILING"`                                           |             |
| `"PLEASURE_CRAFT"`                                    |             |
| `"RESERVED"`                                          |             |
| `"HIGH_SPEED_CRAFT_ALL_SHIPS_OF_THIS_TYPE"`           |             |
| `"HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_A"`             |             |
| `"HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_B"`             |             |
| `"HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_C"`             |             |
| `"HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_D"`             |             |
| `"HIGH_SPEED_CRAFT_RESERVED_FOR_FUTURE_USE"`          |             |
| `"HIGH_SPEED_CRAFT_NO_ADDITIONAL_INFORMATION"`        |             |
| `"PILOT_VESSEL"`                                      |             |
| `"SEARCH_AND_RESCUE_VESSEL"`                          |             |
| `"TUG"`                                               |             |
| `"PORT_TENDER"`                                       |             |
| `"ANTI_POLLUTION_EQUIPMENT"`                          |             |
| `"LAW_ENFORCEMENT"`                                   |             |
| `"SPARE_LOCAL_VESSEL"`                                |             |
| `"MEDICAL_TRANSPORT"`                                 |             |
| `"NON_COMBATANT_SHIP"`                                |             |
| `"PASSENGER_ALL_SHIPS_OF_THIS_TYPE"`                  |             |
| `"PASSENGER_HAZARDOUS_CATEGORY_A"`                    |             |
| `"PASSENGER_HAZARDOUS_CATEGORY_B"`                    |             |
| `"PASSENGER_HAZARDOUS_CATEGORY_C"`                    |             |
| `"PASSENGER_HAZARDOUS_CATEGORY_D"`                    |             |
| `"PASSENGER_RESERVED_FOR_FUTURE_USE"`                 |             |
| `"PASSENGER_NO_ADDITIONAL_INFORMATION"`               |             |
| `"CARGO_ALL_SHIPS_OF_THIS_TYPE"`                      |             |
| `"CARGO_HAZARDOUS_CATEGORY_A"`                        |             |
| `"CARGO_HAZARDOUS_CATEGORY_B"`                        |             |
| `"CARGO_HAZARDOUS_CATEGORY_C"`                        |             |
| `"CARGO_HAZARDOUS_CATEGORY_D"`                        |             |
| `"CARGO_RESERVED_FOR_FUTURE_USE"`                     |             |
| `"CARGO_NO_ADDITIONAL_INFORMATION"`                   |             |
| `"TANKER_ALL_SHIPS_OF_THIS_TYPE"`                     |             |
| `"TANKER_HAZARDOUS_CATEGORY_A"`                       |             |
| `"TANKER_HAZARDOUS_CATEGORY_B"`                       |             |
| `"TANKER_HAZARDOUS_CATEGORY_C"`                       |             |
| `"TANKER_HAZARDOUS_CATEGORY_D"`                       |             |
| `"TANKER_RESERVED_FOR_FUTURE_USE"`                    |             |
| `"TANKER_NO_ADDITIONAL_INFORMATION"`                  |             |
| `"OTHER_TYPE_ALL_SHIPS_OF_THIS_TYPE"`                 |             |
| `"OTHER_TYPE_HAZARDOUS_CATEGORY_A"`                   |             |
| `"OTHER_TYPE_HAZARDOUS_CATEGORY_B"`                   |             |
| `"OTHER_TYPE_HAZARDOUS_CATEGORY_C"`                   |             |
| `"OTHER_TYPE_HAZARDOUS_CATEGORY_D"`                   |             |
| `"OTHER_TYPE_RESERVED_FOR_FUTURE_USE"`                |             |
| `"OTHER_TYPE_NO_ADDITIONAL_INFORMATION"`              |             |