const IMG='https://gvtools.net/lib/img/',WA='971559562294',MAIL='gvbmt@globalvisiontools.com';
/* id, short name, full name, logo, intro */
const BR=[
['karnasch','Karnasch','Karnasch Professional Tools','karnasch/logo-karnasch.png','More than half a century of cutting and drilling tools, sold in over 50 countries with customer-oriented service.'],
['magbroach','Magbroach','Magbroach UK Ltd','magbroach/logo-magbroach.jpg','A family-owned UK company that designs and makes portable magnetic drilling and broaching machines and accessories for professionals.'],
['magtron','Magtron','Magtron Hole Cutting Technologies','magtron/logo-magtron.gif','One of the largest makers of electromagnetic drilling machines and broach cutters in the world.'],
['unibor','Unibor','Unibor','unibor/logo-unibor.gif','High-quality engineering tools made by Universal Drilling and Cutting Equipment, a company with a 35-year track record.'],
['nittokohki','Nitto Kohki','Nitto Kohki','nittokohki/logo-nitto-kohki.png','Hydraulic punching machines, bevellers and pneumatic power tools from a group focused on next-generation manufacturing.'],
['soyer','Soyer','Soyer','soyer/logo-soyer.jpg','Founded in 1970, Heinz Soyer GmbH is one of the global leaders in stud welding technology.'],
['promotech','Promotech','Promotech','promotech/promotech_logo.png','Started in 1987 with magnetic work-holding tables and now makes electromagnetic drills, bevellers and welding carriages.'],
['trumpf','Trumpf','Trumpf Power Tools','trumpf/logo-trumpf.gif','Power tools for sheet metal work: cutting, fastening, bevelling and slat cleaning for metalworking, HVAC, rail and container construction.']];
/* group|name|image|key spec */
const RAW={
karnasch:`Annular cutters|HSS Annular Cutter|03-navHssannularCutter.jpg|Ø6–60 mm, depths 25–110 mm, tooth tips to 68 HRC
Annular cutters|Tungsten Carbide Tipped Annular Cutter|02-navTungstenCarbideTippedAnnularCutter.jpg|Extreme hardness and durability
Machines|Magnetic Hole Cutting Machines|04-navKarnaschMagneticHoleCuttingMachines.jpg|Eibenstock motors, made in Germany
Cutting tools|Highspeed End Mills|01-navKarnaschHighspeedEndMills.jpg|Wide range, available ex stock
Cutting tools|Tungsten Carbide Tipped Hole Saws|05-navKarnaschTungstenCarbideTippedHoleSaws.jpg|POWER-MAX hole saws
Cutting tools|Countersinks|06-navCountersinks.jpg|4.3–80 mm, HSS-XE, ASP and carbide
Cutting tools|Step Drills|07-navHssxeBluedurTingoldCoatedStepDrillsTubeAndSheetDrills.jpg|Round, deburred holes in sheet up to 4 mm
Cutting tools|Tungsten Carbide Rotary Burrs|08-navTungstenCarbideRotaryBurrs.jpg|1,800+ items ex stock
Saw blades|Carbide Tipped Circular Saw Blades|09-navCarbidetippedCircularSawBlades.jpg|1,000+ blades, made in Germany
Saw blades|Metal Cutting Circular Saw Blades|10-navMetalCuttingCircularSawBlades.jpg|Ø8–600 mm, 98% stock availability
Consumables|Lubricants and Cutting Oils|11-navKarnaschLubricantsCuttingOils.jpg|For the highest machining demands`,
magbroach:`Magnetic drills|MD40|01-md40.jpg|Cutter capacity 12–40 mm
Magnetic drills|MDS 40|02-mds40.jpg|Cutter capacity 12–40 mm
Magnetic drills|MD 50|03-md50.jpg|Cutter capacity 12–50 mm
Magnetic drills|MDS 50|04-mds50.jpg|Cutter capacity 12–50 mm
Magnetic drills|MD108|05-md108.jpg|Cutter capacity 12–100 mm
Magnetic drills|MDS132|06-mds132.jpg|Cutter capacity 12–100 mm
Magnetic drills|MAGTAP 30|07-magtap30.jpg|Cutter capacity 12–100 mm, tapping
Cutters|Drill Bits and Special Cutters|09-drillbits.jpg|From stock up to Ø150 mm and 110 mm long`,
magtron:`Magnetic drills|MBE-30|03-mbe30.jpg|Cutter capacity 12–32 mm, 10 kg, 110 or 230 V
Magnetic drills|MBQ-50|04-mbq50.jpg|Cutter capacity 12–50 mm, 2 speeds, QuickHitch 2MT
Magnetic drills|MBQ-100|02-mbe100.jpg|Cutter capacity 12–100 mm
Magnetic drills|MBE-100-Plus|02-mbe100.jpg|Cutter capacity 12–130 mm
Cutters|Magtron Cutters|01-cutters.jpg|Cutter capacity 12–130 mm`,
unibor:`Magnetic drills|A100|a100.jpg|Base swivels through 100° (A100S) for tight access
Magnetic drills|EQ50|eq50.jpg|Cutter capacity 12–50 mm
Magnetic drills|EQ100|eq100.jpg|Cutter capacity 12–100 mm
Magnetic drills|E100 Plus|e100_plus.jpg|Cutter capacity 12–130 mm`,
nittokohki:`Drilling machines|Portable Automatic Drilling Machine WA-3500|wa3500-new.jpg|Reduces hole drilling cost
Drilling machines|Portable Automatic Drilling Machine WA-5000|wa5000-new.jpg|Reduces hole drilling cost
Drilling machines|Portable Fully Automatic Drilling Machine QA-6500|qa6500-new.jpg|Quick Auto Drills raise productivity
Punching machines|Portable Hydraulic Punch HS11-1624|hs11-new.jpg|16 mm thick, Ø24 mm, 110 mm throat, double acting
Punching machines|Electric Punch E55-0619|e55-0619-02.jpg|6 mm thick, Ø19 mm, 55 mm throat
Punch tooling|D Punch and Die|dpunch.jpg|Punch and die sets
Punch tooling|Elongated Hole Punches, Jigs and Dies|pilotpins.jpg|Round or elongated holes`,
soyer:`Stud welders|BMS-8N / BMS-8NV|bms-8n-8nv.jpg|Light, compact, strong price/performance
Stud welders|BMS-9|bms-9.jpg|LED traffic-light status display on the gun
Stud welders|BMS-10N / BMS-10NV|bms-10n-10nv.jpg|Mobile or stationary, manual or automatic feed
Stud welders|BMK-12W|bmk-12w.jpg|Display-operated, 4-key setup
Stud welders|BMK-16i|bmk-16i.jpg|Inverter: stud, electrode and TIG welding
Stud welders|BMK-22i|bmh-22i.jpg|Inverter with high continuous duty
Stud welders|BMK-30i|bmh-30i.jpg|Inverter with high continuous duty
Welding guns|PH-3N Stud Welding Gun|ph-3n.jpg|Slim, fatigue-proof, continuous use
Welding guns|PH-5L Stud Welding Gun|ph-5l.jpg|Studs over 12 mm, adjustable oil damping`,
promotech:`Bevellers|ABM-28 Auto Feed Plate Beveller|ABM-28-Gallery-Bevelling-Top.jpg|Auto-feed bevel on top, front and bottom edges
Bevellers|BM-20plus Portable Plate and Pipe Beveller|BM-20-plus-portable-bevelling-machine1.jpg|Two milling heads, 4-sided inserts
Bevellers|BM-16 Multitask Plate and Pipe Beveller|BM-16-multitask-bevelling-machine.jpg|Steel, aluminium, brass and plastics
Bevellers|PRO-5 PB Compact Pipe Beveller|PRO-5-PB-compact-pipe-bevelling-machine_.jpg|Carbon, stainless, aluminium, copper-nickel pipe
Bevellers|PRO-10 PB Pipe Beveller and Flange Facer|PRO-10-PB-standard-pipe-bevelling-machine.jpg|Bevel, face, chamfer, counterbore
Drilling|PRO-36 AUTO Auto Feed Mag Drill|PRO-36-AUTO.jpg|Holes to Ø36 mm, 51 mm deep, 13.5 kg
Drilling|PRO-45 A Pneumatic Mag Drill|PRO-45A.jpg|Holes to Ø45 mm, no electric supply needed
Drilling|PRO-111 Heavy Duty Mag Drill|PRO-111.jpg|Cuts to Ø111 mm, Morse Taper 4, 4-speed
Drilling|PRO-36 RH/R Rail Drills|PRO-36-R-RH.jpg|Petrol (RH) or electric (R) rail drilling
Punching|PRO-60/110 HP Hydraulic Punchers|PRO-60-110-Portable-Hydraulic-Punchers.jpg|Double-action, holes up to 27 mm
Welding carriages|Gecko Fillet Welding Carriage|Gecko-compact-welding-carriage.jpg|Repeatable travel speed, HS version for plasma
Welding carriages|Lizard Programmable Welding Carriage|Lizard-programmable-welding-carriage_with_oscillation.jpg|Continuous or stitch welds, oscillation option
Welding carriages|Rail Bull Track Carriage|Rail-Bull-OSC.jpg|Groove and fillet welds, magnetic track
Welding carriages|Dragon Cutting and Bevelling Carriage|Dragon-Cutting-bevelling-track-carriage.jpg|Digital speed control, HS for plasma`,
trumpf:`Slitting shears|TruTool C 160|97a7fad310.jpg|Also as 10.8 V Li-Ion battery model
Slitting shears|TruTool C 250|2c25335a90.jpg|Sheet up to 2.5 mm, one-hand chip breaker
Shears|TruTool S 160 E|274b0edb6b.jpg|Thin sheet up to 1.6 mm, chip-free cuts
Shears|TruTool S 160|1ecc1a7012.jpg|Steel 1.6 mm (400 N/mm²), Li-Ion model available
Shears|TruTool S 250|8f0c8c2673.jpg|Handy shear for mid-range power needs
Shears|TruTool S 350|3849cf37bb.jpg|Unique height adjustment
Shears|TruTool S 450|422431e4f8.jpg|Tool-free thickness setting, cuts stainless
Shears|TruTool S 114|e928adc339.jpg|30 mm collision contour, trims ducts, Li-Ion model
Nibblers|TruTool N 160 E|5c9e2503f3.jpg|8 cutting directions, tool-free punch change
Nibblers|TruTool N 200|61a69d139a.jpg|Steel 2 mm (400 N/mm²), rotates on the spot
Nibblers|TruTool N 350|21f26124fd.jpg|360° rotation, speed regulator
Nibblers|TruTool N 500|e6c904565b.jpg|Steel up to 5 mm, 4 cutting directions
Nibblers|TruTool N 700|b1f2efb924.jpg|Up to 7 mm, about 8 kg
Nibblers|TruTool N 1000|21a7b616f8.jpg|10 mm at low speed, 8 mm at second speed
Profile nibblers|TruTool PN 130|aeb9448560.jpg|Steel 1.3 mm, 1.4 kg, 2.5 m/min, Li-Ion
Profile nibblers|TruTool PN 200|PN200-2A1_A01_08-13.jpg|Trapezoidal sheet to 85 mm, C-L-U profiles
Profile nibblers|TruTool PN 201|090dfabafb.jpg|Trapezoidal sheet to 162 mm
Panel cutter|TruTool TPC 165|5fbb0a0616.png|PU and PIR sandwich panels
Seam lockers|TruTool F 300|9c1ad88769.jpg|0.75–1.25 mm, Pittsburgh seams, 1400 W version
Seam lockers|TruTool F 301|67dc4f81e5.jpg|0.45–1 mm sheet, self-feed
Seam lockers|TruTool F 305|377b897526.jpg|0.45–0.75 mm, rims from 5 mm
Seam lockers|TruTool F 140|e89f7cf38e.jpg|Up to 1.4 mm, fan-blower version from R100 mm
Seam lockers|TruTool F 125|c02b45f175.jpg|40 mm seam height, tool-free setting
Power fasteners|TruTool TF 350|03c17d5796.jpg|Joins coated or uncoated workpieces
Deburrers|TruTool TKA 500|2e7c38a149.jpg|Bevel angles 30°, 45°, 60°
Bevellers|TruTool TKF 700|1343d49912.jpg|Lightest beveller, K, V, X and Y edges
Bevellers|TruTool TKF 1100|76886ca534.jpg|Stainless and high-strength steel
Bevellers|TruTool TKF 1101|76886ca534.jpg|Construction steel and aluminium
Bevellers|TruTool TKF 1500|beb9097697.jpg|20°–55°, 2-speed and auto-feed (2 m/min) versions
Bevellers|TruTool TKF 2000|6d738f25dc.jpg|Up to 20 mm bevel length in one pass, forward-feed version
Drill drivers|TruTool DD 1010|48781cb4dd.jpg|15 or 30 Nm, 1,450 rpm, 1.1 kg
Slat cleaning|TruTool TSC 100|a730be793b.jpg|Removes slag from laser table slats while production runs`};
/* brands supplied per the printed catalogue (no product pages yet) */
const ALSO=[['Steelmax','Magnetic drilling machines: Steel Max D4X (cutter 12–111 mm) and a pneumatic drilling machine'],['Victor','Welding and cutting sets, pug cutting machines'],['GAAM','Welding rectifiers'],['Vital','Chain blocks for lifting'],['Tractel','Rope pulling hoists for lifting'],['Mega','Hydraulic cylinders, presses, bottle jacks, body repair kits and engine cranes for lifting and garages'],['Pramac (Lifter)','Battery operated stackers for lifting'],['Brand Group','Mechanical jacks for lifting'],['Dormer','HSS, cobalt and stainless-steel drill bits'],['Hitachi','Workshop equipment (items to be confirmed)'],['Mitutoyo','Digital micrometers and vernier calipers'],['Presto','Tap and die sets'],['3M','N95 masks and abrasives'],['Citex','Safety harnesses'],['AEG','Power tool spare parts']];
const P=[];BR.forEach(b=>RAW[b[0]].split('\n').forEach(l=>{const[g,n,i,s]=l.split('|');P.push({k:P.length,b:b[0],bs:b[1],g,n,i,s})}));
const CAT=[
['Drilling and punching',[2,3],'Magtron MB30|Magtron MBQ50|Magtron MB100 / Magtap|Karnasch cutters, Fein and Nitto shank|Karnasch annular cutter, Ø8–150 mm|Magbroach MD 40|Magbroach MD 108|Steel Max D4X|Steelmax pneumatic drilling machine|Nitto Selfer Ace HS11-1624|Nitto Handy Selfer E55-0619|Nitto hydraulic pump HPD-05'],
['Cutting and beveling',[4],'Soyer welding gun PS-1K|Soyer stud welder BMK-12W|Soyer stud welder BMS-8N|Pug cutting machines|Welding and cutting set|Nitto hand beveler HB-15B|GAAM welding rectifier|Mig / Tig welding machine|Inverter MMA machine|Trumpf TruTool N 200|Trumpf TruTool S 160|Trumpf bevellers'],
['Workshop equipment',[5],'Power hacksaw machine|Radial drilling machine|Lathe machine|Pillar drilling machine|Universal milling machine|Presto tap and die set|Mitutoyo digital micrometer|Mitutoyo digital vernier caliper|Karnasch carbide tipped hole saws|Karnasch tungsten carbide burrs|Karnasch step drills'],
['Material handling',[6],'Pramac Lifter battery stacker|Pallet trolley|Floor crane|Scissor lift|Tractel rope pulling hoist|Vital chain block|Brand Group mechanical jack|Lever hoist|Mega hydraulic cylinder|Rope slings|Bow shackles|Dee shackle'],
['Garage and safety',[7],'Mega hydraulic press|Mega bottle jack, 2 to 100 ton|Mega body repair kit|Engine crane|Trolley jack|Pipe bender, 2 to 6 inch|Lifting tables|Air compressor, 50 to 1000 litres|Torque wrenches|3M N95 mask|Welding helmet|Safety shoes|Safety helmet|Citex safety harness|Coverall']];
