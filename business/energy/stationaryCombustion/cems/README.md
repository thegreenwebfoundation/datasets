The AMEE category /business/energy/stationaryCombustion/cems contains
data and methodologies for calculating CO<sub>2</sub> emissions from stationary
fuel combustion using Continuous Emissions Monitoring Systems (CEMS).
Such systems permit CO<sub>2</sub> emissions to be calculated on the basis of
regular measurements of the volumetric flow rate and CO<sub>2</sub> content of
aggregate emissions from fuel burning facilities.

The data and calculation methodologies found herein are based on those
outlined in [Appendix
F](http://ecfr.gpoaccess.gov/cgi/t/text/text-idx?c=ecfr&sid=47fac6e747979b95a21d8d56ce7a2aff&rgn=div9&view=text&node=40:16.0.1.1.4.9.1.6.11&idno=40)
of *Title 40 CFR Part 75* in the US EPA's *Acid Rain Program*, and
support recommendations relating to the EPA's [Mandatory Greenhouse Gas
Reporting](http://www.epa.gov/climatechange/emissions/archived/ghg_tsd.html)
(*Tier 4* approach) and the World Resources Institute [Greenhouse Gas
Protocol](http://www.ghgprotocol.org/calculation-tools/all-tools).

Following these methodologies, this category includes functionality for
specifying the flow rate of stack emissions, the concentrations of
CO<sub>2</sub>, O<sub>2</sub> and moisture within the stack outflow, and the duration
of facility operation. The concentration of O<sub>2</sub> within the stack
outflow is useful for deriving a corresponding CO<sub>2</sub> concentration
where this is not explicitly available.

## Using this category

To use this category, select the type of fuel burned using the *fuel*
and *subtype* drill choices. Next specify the *stack average volumetric
gas flow*, the *stack CO<sub>2</sub> concentration* and the *duration of
facility operation* using the ***flowRate*** (volume per time),
***carbonDioxideConcentration*** (fraction, 0-1) and ***operatingTime***
(time) profile item values. The returned value represents the CO<sub>2</sub>
emitted during the operating time specified, converted into kilograms
using the default CO<sub>2</sub> density of 0.0517104 kg per scf.

### Specifying CO<sub>2</sub> density

The default value for CO<sub>2</sub> density can be over-ridden by setting the
***density*** profile item value. This may be useful if density data
specific to the atmospheric conditions of the facility stack are
available.

### Specifying stack moisture content

If CO<sub>2</sub> concentration is measured on a *dry basis* (i.e. stack
moisture is removed prior to the analysis), the emissions calculation
must include a correction for stack gas moisture content so that the
volumetric concentration matches the volumetric flow basis. To specify
the moisture content of the stack emissions, set the
***moistureContent*** profile item value (fraction, 0-1). AMEE will take
this moisture level into consideration, following EPA guidelines, when
calculating total CO<sub>2</sub> emissions.

### Specifying stack O<sub>2</sub> concentration

If direct stack CO<sub>2</sub> concentration data is not available, it can be
back-calculated using O<sub>2</sub> concentration data. To specify the O<sub>2</sub>
concentration, set the value (fraction, 0-1) using the
***oxygenConcentration*** profile item value. AMEE will derive the
corresponding CO<sub>2</sub> concentration according to the EPA methodology,
and return the quantity of CO<sub>2</sub> emissions associated with the flow
rate and operating time specified. Users should note that the O<sub>2</sub>
based calculation is only used if no CO<sub>2</sub> concentration is explicitly
specified in the ***carbonDioxideConcentration*** profile item value. As
with the direct CO<sub>2</sub> calculation, any specified moisture content will
be taken in to account.

See [here](British_thermal_units) for information on using British
thermal units (Btu's) with the AMEE platform
