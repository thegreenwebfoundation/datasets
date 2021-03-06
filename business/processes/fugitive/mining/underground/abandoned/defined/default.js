var conversionFactor = 0.67; // converts cubic metres to kg

facTerm = 1 + factorCoefficient * timeAbandoned;

fac = Math.pow(facTerm, factorExponent);

ch4Emissions = ((emissionsRate * fac) - recoveredMethane) * conversionFactor;

// fetch GWP
ch4GWP = dataFinder.getDataItemValue('planet/greenhousegases/gwp', 'gas=CH4', 'GWP');
co2eEmissions = ch4Emissions * ch4GWP;

returnValues.putValue('CH4', 'kg', 'year', ch4Emissions);
returnValues.addNote('comment', 'CH4 emissions converted to CO2e using a global warming potential of '+ch4GWP);
returnValues.putValue('CO2e', 'kg', 'year', co2eEmissions);
returnValues.setDefaultType('CO2e'); 
