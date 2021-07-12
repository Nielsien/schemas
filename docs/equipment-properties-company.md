# Company Schema

```txt
https://poseidat.org/schema/core/persona/company.json#/properties/supplier
```

The details of a (commercial) company

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [equipment.json*](schemas/core/equipment/equipment.json "open original schema") |

## supplier Type

`object` ([Company](equipment-properties-company.md))

# supplier Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                  |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [company_id](#company_id) | `string` | Required | cannot be null | [Company](company-properties-company_id.md "https://poseidat.org/schema/core/persona/company.json#/properties/company_id")  |
| [name](#name)             | `string` | Required | cannot be null | [Company](company-properties-name.md "https://poseidat.org/schema/core/persona/company.json#/properties/name")              |
| [address](#address)       | `object` | Optional | cannot be null | [Company](company-properties-address.md "https://poseidat.org/schema/core/address.json#/properties/address")                |
| [contact](#contact)       | `object` | Optional | cannot be null | [Company](company-properties-contactdetails.md "https://poseidat.org/schema/core/contact-details.json#/properties/contact") |

## company_id

The unique identifier for the company (UUID v4)

`company_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Company](company-properties-company_id.md "https://poseidat.org/schema/core/persona/company.json#/properties/company_id")

### company_id Type

`string`

### company_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## name

The name of the company

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Company](company-properties-name.md "https://poseidat.org/schema/core/persona/company.json#/properties/name")

### name Type

`string`

## address

A street address

`address`

*   is optional

*   Type: `object` ([Address](company-properties-address.md))

*   cannot be null

*   defined in: [Company](company-properties-address.md "https://poseidat.org/schema/core/address.json#/properties/address")

### address Type

`object` ([Address](company-properties-address.md))

## contact

Contact information for persona

`contact`

*   is optional

*   Type: `object` ([ContactDetails](company-properties-contactdetails.md))

*   cannot be null

*   defined in: [Company](company-properties-contactdetails.md "https://poseidat.org/schema/core/contact-details.json#/properties/contact")

### contact Type

`object` ([ContactDetails](company-properties-contactdetails.md))
