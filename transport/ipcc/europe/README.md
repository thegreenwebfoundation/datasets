This methodology provides data and a calculation methodology for
calculating greenhouse gas emissions associated with European road
vehicles - specifically cars, buses, motorcycles, and light and heavy
duty vehicles. The methodology is sourced from the 2006 IPCC [Guidelines
for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/).

-----

## The methodology

### Emissions model

Greenhouse gas emissions associated with vehicle transport arise from
the combustion of fuels. According to this methodology, CO<sub>2</sub>
emissions are [directly related](Custom_emissions_factors) to the
quantity of carbon which is oxidised during combustion and therefore
directly proportionate to the quantity of fuel burned and the
concentration of carbon within the particular fuel type. Emissions of
CH<sub>4</sub> and N<sub>2</sub>O, however, are considered to be related to other
factors such as vehicle type, emissions control standards, driving
style, and distance travelled.

The IPCC methodology for ['mobile' fuel
combustion](http://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf)
advises therefore that, for the most accurate greenhouse gas emissions
inventory, CO<sub>2</sub> emissions should be calculated on the basis of **fuel
consumed**, whereas those of CH<sub>4</sub> and N<sub>2</sub>O should be calculated
according to **vehicle type** and **distance travelled**.

Where only fuel data is available, CO<sub>2</sub> emissions - which represent
the majority of vehicular emissions - can be calculated alone. If fuel
quantity data is not available a calculation of CO<sub>2</sub> emissions (as
well as CH<sub>4</sub> and N<sub>2</sub>O) can be made on the basis of distance
travelled if fuel economy data (i.e. km per L fuel) can be specified for
the vehicle under consideration.

CH<sub>4</sub> and N<sub>2</sub>O emissions are multiplied by the appropriate [global
warming factors](Greenhouse_gases_Global_warming_potentials) in order to
express them in the standardised unit of CO<sub>2</sub>e.

Emissions calculated using this methodology represent those attributable
to an entire vehicle. Per passenger emissions can nevertheless be
obtained by specifying the vehicle occupancy.

### Model data

The methodology provides emissions factors for converting fuel
quantities and distances into CO<sub>2</sub>, and CH<sub>4</sub> / N<sub>2</sub>O emissions
respectively for a broad range of road transport scenarios.

**CO<sub>2</sub> emissions:** According to IPCC methodology, CO<sub>2</sub> emissions
are related only to the quantity and type of fuel consumed and not
related to the properties of the vehicle used. The IPCC provides the
following fuel property data for several types of transport fuel (e.g.
petrol/gasoline, diesel, CNG, LNG, LPG):

  - **CO<sub>2</sub> emissions factor**: emissions factors expressed in terms
    of quantities of CO<sub>2</sub> emitted *per unit of energy* (*kg per TJ*)
  - **Heating value**: 'heating' or 'calorific' values (net) describing
    the energy content of the fuel (*TJ per Gg*)

These values enable the calculation of CO<sub>2</sub> emissions on the basis of
fuel quantities specified in terms of either mass (e.g. kg, tonnes) or
energy (e.g. kWh, TJ). If this type of calculation is required, the
specific data and associated methodology can be found
[here](Transport_fuels_by_IPCC). The present methodology uses these
values together with values for fuel *density* in order to derive
CO<sub>2</sub> emissions factors for volumetric fuel quantities (e.g. litres,
gallons). IPCC does not explicitly provide fuel density information, and
therefore this can be specified by the user or otherwise AMEE uses
[density values](Fuel_properties_by_DEFRA) published by the UK
government department [DEFRA](http://ww2.defra.gov.uk/).

CO<sub>2</sub> emissions factors are calculated thus:

*Mass CO<sub>2</sub> per volume fuel = CO<sub>2</sub> per energy quantity,,IPCC,, x
energy quantity per mass fuel,,IPCC,, x fuel density,,user or DEFRA,,*

**Non-CO<sub>2</sub> emissions:** CH<sub>4</sub> and N<sub>2</sub>O emissions are related
primarily to vehicle type, fuel type, emissions control technology,
distance travelled and typical driving style (e.g. urban, rural,
highway; hot or cold vehicle starts). IPCC methodology provides distinct
distance-based emissions factors for CH<sub>4</sub> and N<sub>2</sub>O (i.e. *mg per
km*) for cars, buses, light and heavy duty vehicles and motorcycles
differentiated by fuel type (e.g. petrol/gasoline, diesel, CNG, LNG,
LPG) and emissions control technology (e.g. pre-Euro, Euros 1 ,2, 3, 4).
These data are applicable to European road vehicles. For each vehicle
type, CH<sub>4</sub> and N<sub>2</sub>O emissions are differentiated according to
driving styles:

  - **urban cold**: urban driving which starts with the engine at
    ambient temperature
  - **urban hot**: urban driving which starts with the engine warmed
  - **highway**: highway driving
  - **rural**: rural driving

Separate distance-based emissions factors are provided for each vehicle
type and driving style for both CH<sub>4</sub> and N<sub>2</sub>O.

### Related methodologies

Other IPCC transport categories are available which represent [basic
fuel consumption CO<sub>2</sub>](Transport_fuels_by_IPCC) and vehicular
emissions for '[conventionally](US_road_transport_by_IPCC)' (gasoline,
diesel) and
'[alternatively](US_road_transport_with_alternative_fuels_by_IPCC)'
(cng, lpg, lng, ethanol) fuelled vehicles in the US.

-----

## Using this methodology

### Choosing a specific activity type

To use this methodology, the particular type of vehicle which best
represents the users emissions scenario must be specified by making
selections from each of the ***type***, ***fuel***, ***technology***
drill down choices.

### Activity data required

Calculations can be made in three ways: (1) by specifying *fuel
consumption only*; (2) by specifying fuel consumed *and* distance
travelled; or (3) by specifying distance travelled *and vehicular fuel
efficiency* (CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O).

**Specifying fuel used only:** Set the volume of fuel consumed using the
***fuelConsumed*** profile item value. This method calculates *CO<sub>2</sub>
emissions only*.

**Specifying fuel and distance:** Set the volume of fuel consumed using
the ***fuelConsumed*** profile item value and the distance travelled
using the ***distance*** profile item value. This method calculates
*CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O emissions*.

**Specifying distance and fuel efficiency:** Set the distance travelled
using the ***distance*** profile item value and the fuel efficiency (or
fuel 'economy'; e.g. km per L) using the ***fuelEfficiency*** profile
item value. This method calculates *CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O
emissions*.

**Optional values:** A number of optional parameters can also be
specified which may reflect the required transport scenario more
accurately.

Emissions are implicitly calculated as those attributable to the *entire
vehicle*. If *per passenger* emissions are required, the ***occupancy***
profile item value can be specified, representing the number of
passengers for which emissions are accountable. If no occupancy is
specified, AMEE assumes an occupancy of 1 (equal to total vehicular
emissions).

Following IPCC guidelines, CH<sub>4</sub> and N<sub>2</sub>O emissions are calculated
on the basis of the following 'typical' split of driving styles:

  - urban driving, cold engine start: 30%
  - urban driving, hot engine start: 10%
  - highway driving: 30%
  - rural driving: 30%

This split can be overridden by specifying the appropriate percentages
(as decimals between 0-1) using the ***urbanCold***, ***urbanhot***,
***highway***, ***rural*** profile item values. These values must sum to
1, for a valid emissions calculation to be returned (a value of zero
will be returned otherwise).

In order to obtain a volumetric CO<sub>2</sub> emissions factor (e.g. mass
CO<sub>2</sub> per *volume* fuel) from the IPCC mass-based emissions factors
(i.e. mass CO<sub>2</sub> per *mass* fuel) a value for fuel density is
required. This can be specified on a case-by-case basis using the
***density*** profile item value. If left unspecified, the appropriate
value is taken from the latest DEFRA [fuel
properties](Fuel_properties_by_DEFRA) data.

### Calculation and result

The returned emissions quantities for this methodology represent CO<sub>2</sub>
only in those cases where only fuel consumption is specified. Otherwise
emissions of CO<sub>2</sub>, CH<sub>4</sub> and N<sub>2</sub>O are returned. The following
discrete **amounts** are returned:

  - ***CO2***: CO<sub>2</sub> emissions
  - ***CH4***: CH<sub>4</sub> (methane) emissions
  - ***N2O***: N<sub>2</sub>O (nitrous oxide) emissions
  - ***CO2e***: CO<sub>2</sub>e emissions (all three gases, converted using
    [these](Greenhouse_gases_Global_warming_potentials) global warming
    potential)

The individual quantities for CH<sub>4</sub> and N<sub>2</sub>O represent *absolute
quantities* rather than CO<sub>2</sub>e quantities. For some scenarios within
this methodology, emissions factors for CH<sub>4</sub> or N<sub>2</sub>O are not
available. In these cases values of zero are returned for the respective
gases together with a notification comment. CO<sub>2</sub> and CO<sub>2</sub>e values
are returned as normal.

This methodology represents per vehicle emissions and therefore the
returned emissions should be considered - by default - to represent
those attributable to an entire single vehicle, or its sole occupant
depending on the viewpoint of the user (the default value for vehicle
occupancy is 1). If multiple vehicle occupancy is specified - by setting
the occupancy profile item value to a positive value other than 1 -
total vehicular emissions are shared between all occupants and therefore
the returned emissions quantity represents the emissions attributable to
each occupant.

-----
