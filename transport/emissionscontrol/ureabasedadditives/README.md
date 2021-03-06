The AMEE category /transport/emissionscontrol/ureabasedadditives
contains a methodology for caluclating non-combustive CO<sub>2</sub> emissions
from urea-based additives in catalytic converters, sourced from the IPCC
[Guidelines for National Greenhouse Gas
Inventories](http://www.ipcc-nggip.iges.or.jp/).

To use this this category, create a profile item (this category contains
no drill options) and set the quantity of urea-based additive consumed
using the ***mass*** profile item value, and specify its purity using
the ***purity*** profile item value. 'Purity' refers to the fraction of
urea within the additive and should be expressed as a value between 0-1.

The calculation for non-combustive CO<sub>2</sub> emissions is as follows:

CO<sub>2</sub> emissions = quantity consumed x (12/60) x (44/12) x purity

The value 12/60 represents the proportion of carbon (C), by weight, in
urea (CO(NH<sub>2</sub>)<sub>2</sub>), while the value 44/12 represents the weight of
CO<sub>2</sub> relative to C.
