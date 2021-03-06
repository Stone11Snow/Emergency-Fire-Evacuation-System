// const R3route = {
//   //Level-1
//   "R3-118": {"R3-117": 1},
//   "R3-118-1": {"R3-117": 1},
//   "R3-117": {"R3-119":2},
//   "R3-119": {"Level-1-Left-Corridor":1},
//   "R3-115-1": {"Level1-Left-Corridor":2},
//   "R3-116": {"Level-1-Left-Corridor":1},
//   "R3-115": {"Level-1-Left-Corridor":1},
//   "R3-114": {"Level-1-Left-Corridor":2},
//   "R3-113": {"Level-1-Left-Corridor":4},
//   "R3-112": {"Level-1-Left-Corridor":3},
//   "R3-111": {"Level-1-Left-Corridor":2},
//   "R3-110": {"Level-1-Mid-Corridor":1},
//   "R3-102": {"Level-1-Mid-Corridor":1},
//   "R3-103": {"Level-1-Right-Corridor":2},
//   "Level-1-Left-Corridor": {"Level-1-Mid-Corridor":3, "Left-Door": 2},
//   "Level-1-Mid-Corridor": {"Main-Door": 3},
//   "Level-1-Right-Corridor": {"Level-1-Mid-Corridor":3, "Right-Door": 2},
//   "R3-105": {"Level-1-Right-Corridor": 1},
//   "R3-106": {"Level-1-Right-Corridor": 2},
//   "R3-107": {"Level-1-Right-Corridor": 3},
//   "R3-108": {"Level-1-Right-Corridor": 4},
//   "R3-109": {"Level-1-Right-Corridor": 3},
//   "Left-Stairs-1-2": {"Level-1-Left-Corridor": 2},
//   "Right-Stairs-1-2": {"Level-1-Right-Corridor": 1},
//   "Main-Door":{finish: 1},
//   "Left-Door":{finish: 1},
//   "Right-Door":{finish: 1},
//   finish: {},
//   //Level-2
//   "Right-Stairs-2-1": {"Right-Stairs-1-2": 2},
//   "Level-2-Right-Corridor": {"Right-Stairs-2-1": 2, "Level-2-Mid-Corridor": 4},
//   "R3-201": {"Level-2-Right-Corridor":3},
//   "R3-202": {"Level-2-Right-Corridor":4},
//   "R3-203": {"Level-2-Right-Corridor":4},
//   "R3-204": {"Level-2-Right-Corridor":3},
//   "R3-204-1": {"Level-2-Right-Corridor":2},
//   "R3-205": {"Level-2-Right-Corridor":1},
//   "R3-206": {"Level-2-Right-Corridor":3},
//   "R3-207": {"Level-2-Right-Corridor":4},
//   "R3-208": {"Level-2-Right-Corridor":3},
//   "R3-209": {"Level-2-Right-Corridor":2},
//   "Level-2-Mid-Corridor": {"Level-2-Right-Corridor":3,"Level-2-Left-Corridor":3},
//   "R3-211": {"Level-2-Mid-Corridor":3, "Level-2-Right-Corridor":1},
//   "R3-213": {"Level-2-Mid-Corridor":2, "Level-2-Right-Corridor":2},
//   "R3-215": {"Level-2-Mid-Corridor":1},
//   "R3-217": {"Level-2-Mid-Corridor":2, "Level-2-Left-Corridor":2},
//   "R3-219": {"Level-2-Mid-Corridor":3, "Level-2-Left-Corridor":1},
//   "R3-210": {"Level-2-Mid-Corridor":3, "Level-2-Right-Corridor":1},
//   "R3-212": {"Level-2-Mid-Corridor":2, "Level-2-Right-Corridor":2},
//   "R3-214": {"Level-2-Mid-Corridor":1},
//   "R3-216": {"Level-2-Mid-Corridor":2, "Level-2-Left-Corridor":2},
//   "R3-218": {"Level-2-Mid-Corridor":3, "Level-2-Left-Corridor":1},
//   "Left-Stairs-2-1": {"Left-Stairs-1-2": 2},
//   "Level-2-Left-Corridor": {"Left-Stairs-2-1": 2, "Level-2-Mid-Corridor": 4 },
//   "R3-233": {"Level-2-Left-Corridor":1},
//   "R3-220": {"Level-2-Left-Corridor":3},
//   "R3-221": {"Level-2-Left-Corridor":4},
//   "R3-222": {"Level-2-Left-Corridor":4, "R3-221":1, "R3-223":2},
//   "R3-223": {"Level-2-Left-Corridor":2},
//   "R3-224": {"Level-2-Left-Corridor":1},
//   "R3-225": {"Level-2-Left-Corridor":1.5},
//   "R3-226": {"Level-2-Left-Corridor":2},
//   "R3-227": {"Level-2-Left-Corridor":3},
//   "R3-229": {"Level-2-Left-Corridor":4},
//   "R3-231": {"Level-2-Left-Corridor":5},
//   "R3-232": {"Level-2-Left-Corridor":5},
//   "R3-230": {"Level-2-Left-Corridor":4},
//   "R3-228": {"Level-2-Left-Corridor":3}
// };

const R3route = {
  //Level-1
  "R3-118":{"R3-117":2},
  "R3-118-1":{"R3-117":2},
  "R3-117":{"R3-119":2},
  "R3-119":{"Level-1-Left-Corridor-E":2},
  "R3-115-1":{"Level-1-Left-Corridor-D":2},
  "R3-116":{"Level-1-Left-Corridor-B":1},
  "R3-115":{"Level-1-Left-Corridor-C":1},
  "R3-114":{"Level-1-Left-Corridor-D":2},
  "R3-113":{"Level-1-Left-Corridor-A":2},
  "R3-112":{"Level-1-Left-Corridor-A":1.5},
  "R3-111":{"Level-1-Left-Corridor-F":2},
  "Level-1-Male-WC":{"Level-1-Left-Corridor-G":2},
  "Left-Stairs-1-2":{"Level-1-Left-Corridor-G":2},
  "Level-1-Left-Corridor-G":{"Level-1-Left-Corridor-F":1,"Level-1-Mid-Corridor-A":1},
  "Level-1-Left-Corridor-F":{"Level-1-Left-Corridor-E":1,"Level-1-Left-Corridor-G":1},
  "Level-1-Left-Corridor-E":{"Level-1-Left-Corridor-D":1,"Level-1-Left-Corridor-F":1},
  "Level-1-Left-Corridor-D":{"Level-1-Left-Corridor-C":1,"Level-1-Left-Corridor-D":1},
  "Level-1-Left-Corridor-C":{"Level-1-Left-Corridor-B":1},
  "Level-1-Left-Corridor-A":{"Level-1-Left-Corridor-E":3},
  "Level-1-Left-Corridor-B":{"Left-Door":1,"Level-1-Left-Corridor-C":1},
  "Left-Door":{finish:1},
  "R3-110":{"Level-1-Mid-Corridor-A":2},
  "R3-102":{"Level-1-Mid-Corridor-C":2},
  "Level-1-Mid-Corridor-A":{"Level-1-Mid-Corridor-B":2,"Level-1-Left-Corridor-G":1},
  "Level-1-Mid-Corridor-B":{"Level-1-Mid-Corridor-A":2,"Level-1-Mid-Corridor-C":3,"Level-1-Mid-Corridor-D":2},
  "Level-1-Mid-Corridor-C":{"Level-1-Mid-Corridor-B":3,"Level-1-Right-Corridor-A":1},
  "Level-1-Mid-Corridor-D":{"Mid-Door":1},
  "Mid-Door":{finish:1},
  "R3-103":{"Level-1-Right-Corridor-A":3,"Level-1-Right-Corridor-C":3},
  "R3-109":{"Level-1-Right-Corridor-F":1},
  "R3-108":{"Level-1-Right-Corridor-F":1},
  "R3-107":{"Level-1-Right-Corridor-F":1},
  "R3-109":{"Level-1-Right-Corridor-F":1},
  "R3-106":{"Level-1-Right-Corridor-E":1},
  "R3-105":{"Level-1-Right-Corridor-D":1},
  "Level-1-Female-WC":{"Level-1-Right-Corridor-E":1},
  "Right-Stairs-1-2":{"Level-1-Right-Corridor-A":1},
  "Level-1-Right-Corridor-A":{"Level-1-Right-Corridor-B":1.5,"Level-1-Mid-Corridor-C":1},
  "Level-1-Right-Corridor-B":{"Level-1-Right-Corridor-A":1.5,"Level-1-Right-Corridor-C":1,"Level-1-Right-Corridor-D":1},
  "Level-1-Right-Corridor-C":{"Right-Door":1},
  "Level-1-Right-Corridor-D":{"Level-1-Right-Corridor-B":1,"Level-1-Right-Corridor-E":1},
  "Level-1-Right-Corridor-E":{"Level-1-Right-Corridor-D":1,"Level-1-Right-Corridor-F":1},
  "Level-1-Right-Corridor-F":{"Level-1-Right-Corridor-E":1},
  "Right-Door":{finish:1},
  finish: {},
  //Level-2
  "Left-Stairs-2-1":{"Left-Stairs-1-2":1},
  "Right-Stairs-2-1":{"Right-Stairs-1-2":1},
  "R3-231":{"Level-2-Left-Corridor-A":1},
  "R3-232":{"Level-2-Left-Corridor-A":1},
  "R3-229":{"Level-2-Left-Corridor-B":1},
  "R3-230":{"Level-2-Left-Corridor-B":1},
  "R3-227":{"Level-2-Left-Corridor-C":1},
  "R3-228":{"Level-2-Left-Corridor-C":1},
  "R3-226":{"Level-2-Left-Corridor-D":1},
  "Level-2-Left-Female-WC":{"Level-2-Left-Corridor-D":1},
  "R3-225":{"Level-2-Left-Corridor-E":1},
  "R3-224":{"Level-2-Left-Corridor-G":1},
  "R3-233":{"Level-2-Left-Corridor-G":1},
  "R3-223":{"Level-2-Left-Corridor-H":1},
  "R3-220":{"Level-2-Left-Corridor-I":1},
  "R3-221":{"Level-2-Left-Corridor-I":1},
  "R3-222":{"Level-2-Left-Corridor-I":1.5},
  "Level-2-Left-Male-WC":{"Level-2-Left-Corridor-J":1},
  "Level-2-Left-Corridor-A":{"Level-2-Left-Corridor-B":1},
  "Level-2-Left-Corridor-B":{"Level-2-Left-Corridor-A":1,"Level-2-Left-Corridor-C":1},
  "Level-2-Left-Corridor-C":{"Level-2-Left-Corridor-B":1,"Level-2-Left-Corridor-D":1},
  "Level-2-Left-Corridor-D":{"Level-2-Left-Corridor-C":1,"Level-2-Left-Corridor-E":1},
  "Level-2-Left-Corridor-E":{"Level-2-Left-Corridor-D":1,"Level-2-Left-Corridor-F":1},
  "Level-2-Left-Corridor-F":{"Level-2-Left-Corridor-J":2,"Level-2-Left-Corridor-E":1,"Level-2-Left-Corridor-G":1},
  "Level-2-Left-Corridor-G":{"Level-2-Left-Corridor-F":1,"Level-2-Left-Corridor-H":1},
  "Level-2-Left-Corridor-H":{"Level-2-Left-Corridor-G":1,"Level-2-Left-Corridor-I":1.5},
  "Level-2-Left-Corridor-I":{"Level-2-Left-Corridor-H":1.5},
  "Level-2-Left-Corridor-J":{"Left-Stairs-2-1":1,"Level-2-Left-Corridor-F":2,"Level-2-Mid-Corridor-A":1},
  "R3-218":{"Level-2-Mid-Corridor-A":1},
  "R3-219":{"Level-2-Mid-Corridor-A":1},
  "R3-216":{"Level-2-Mid-Corridor-B":1},
  "R3-217":{"Level-2-Mid-Corridor-B":1},
  "R3-214":{"Level-2-Mid-Corridor-C":1},
  "R3-215":{"Level-2-Mid-Corridor-C":1},
  "R3-212":{"Level-2-Mid-Corridor-D":1},
  "R3-213":{"Level-2-Mid-Corridor-D":1},
  "R3-210":{"Level-2-Mid-Corridor-E":1},
  "R3-211":{"Level-2-Mid-Corridor-E":1},
  "Level-2-Mid-Corridor-A":{"Level-2-Left-Corridor-J":1,"Level-2-Mid-Corridor-B":1},
  "Level-2-Mid-Corridor-B":{"Level-2-Mid-Corridor-A":1,"Level-2-Mid-Corridor-C":1},
  "Level-2-Mid-Corridor-C":{"Level-2-Mid-Corridor-B":1,"Level-2-Mid-Corridor-D":1},
  "Level-2-Mid-Corridor-D":{"Level-2-Mid-Corridor-C":1,"Level-2-Mid-Corridor-E":1},
  "Level-2-Mid-Corridor-E":{"Level-2-Mid-Corridor-D":1,"Level-2-Right-Corridor-A":1},
  "R3-209":{"Level-2-Right-Corridor-G":1},
  "R3-208":{"Level-2-Right-Corridor-H":2},
  "R3-207":{"Level-2-Right-Corridor-H":2},
  "R3-206":{"Level-2-Right-Corridor-H":1},
  "R3-205":{"Level-2-Right-Corridor-D":1},
  "R3-204-1":{"Level-2-Right-Corridor-E":1},
  "R3-204":{"Level-2-Right-Corridor-F":1.5},
  "R3-203":{"Level-2-Right-Corridor-F":2},
  "R3-202":{"Level-2-Right-Corridor-F":1.5},
  "R3-201":{"Level-2-Right-Corridor-F":1},
  "Level-2-Right-Male-WC":{"Level-2-Right-Corridor-E":1},
  "Level-2-Right-Female-WC":{"Level-2-Right-Corridor-E":1},
  "Level-2-Right-Corridor-A":{"Level-2-Right-Corridor-B":1,"Level-2-Mid-Corridor-E":1,"Right-Stairs-2-1":1},
  "Level-2-Right-Corridor-B":{"Level-2-Right-Corridor-A":1,"Level-2-Right-Corridor-C":1},
  "Level-2-Right-Corridor-C":{"Level-2-Right-Corridor-B":1,"Level-2-Right-Corridor-G":3,"Level-2-Right-Corridor-D":1},
  "Level-2-Right-Corridor-D":{"Level-2-Right-Corridor-C":1,"Level-2-Right-Corridor-E":1},
  "Level-2-Right-Corridor-E":{"Level-2-Right-Corridor-D":1,"Level-2-Right-Corridor-F":1.5},
  "Level-2-Right-Corridor-F":{"Level-2-Right-Corridor-E":1},
  "Level-2-Right-Corridor-G":{"Level-2-Right-Corridor-C":3,"Level-2-Right-Corridor-H":1},
  "Level-2-Right-Corridor-H":{"Level-2-Right-Corridor-G":1}
};

var EscapeSling = {
  "R3-231":{"Level-2-Left-Corridor-A":1},
  "R3-232":{"Level-2-Left-Corridor-A":1},
  "R3-229":{"Level-2-Left-Corridor-B":1},
  "R3-230":{"Level-2-Left-Corridor-B":1},
  "R3-227":{"Level-2-Left-Corridor-C":1},
  "R3-228":{"Level-2-Left-Corridor-C":1},
  "R3-226":{"Level-2-Left-Corridor-D":1},
  "Level-2-Left-Female-WC":{"Level-2-Left-Corridor-D":1},
  "R3-225":{"Level-2-Left-Corridor-E":1},
  "R3-224":{"Level-2-Left-Corridor-G":1},
  "R3-233":{"Level-2-Left-Corridor-G":1},
  "R3-223":{"Level-2-Left-Corridor-H":1},
  "R3-220":{"Level-2-Left-Corridor-I":1},
  "R3-221":{"Level-2-Left-Corridor-I":1},
  "R3-222":{"Level-2-Left-Corridor-I":1.5},
  "Level-2-Left-Male-WC":{"Level-2-Left-Corridor-J":1},
  "Level-2-Left-Corridor-A":{"Level-2-Left-Corridor-B":1, "EscapeSling":1},
  "Level-2-Left-Corridor-B":{"Level-2-Left-Corridor-A":1,"Level-2-Left-Corridor-C":1},
  "Level-2-Left-Corridor-C":{"Level-2-Left-Corridor-B":1,"Level-2-Left-Corridor-D":1},
  "Level-2-Left-Corridor-D":{"Level-2-Left-Corridor-C":1,"Level-2-Left-Corridor-E":1},
  "Level-2-Left-Corridor-E":{"Level-2-Left-Corridor-D":1,"Level-2-Left-Corridor-F":1},
  "Level-2-Left-Corridor-F":{"Level-2-Left-Corridor-J":2,"Level-2-Left-Corridor-E":1,"Level-2-Left-Corridor-G":1},
  "Level-2-Left-Corridor-G":{"Level-2-Left-Corridor-F":1,"Level-2-Left-Corridor-H":1},
  "Level-2-Left-Corridor-H":{"Level-2-Left-Corridor-G":1,"Level-2-Left-Corridor-I":1.5},
  "Level-2-Left-Corridor-I":{"Level-2-Left-Corridor-H":1.5},
  "Level-2-Left-Corridor-J":{"Left-Stairs-2-1":1,"Level-2-Left-Corridor-F":2,"Level-2-Mid-Corridor-A":1},
  "R3-218":{"Level-2-Mid-Corridor-A":1},
  "R3-219":{"Level-2-Mid-Corridor-A":1},
  "R3-216":{"Level-2-Mid-Corridor-B":1},
  "R3-217":{"Level-2-Mid-Corridor-B":1},
  "R3-214":{"Level-2-Mid-Corridor-C":1},
  "R3-215":{"Level-2-Mid-Corridor-C":1},
  "R3-212":{"Level-2-Mid-Corridor-D":1},
  "R3-213":{"Level-2-Mid-Corridor-D":1},
  "R3-210":{"Level-2-Mid-Corridor-E":1},
  "R3-211":{"Level-2-Mid-Corridor-E":1},
  "Level-2-Mid-Corridor-A":{"Level-2-Left-Corridor-J":1,"Level-2-Mid-Corridor-B":1},
  "Level-2-Mid-Corridor-B":{"Level-2-Mid-Corridor-A":1,"Level-2-Mid-Corridor-C":1},
  "Level-2-Mid-Corridor-C":{"Level-2-Mid-Corridor-B":1,"Level-2-Mid-Corridor-D":1},
  "Level-2-Mid-Corridor-D":{"Level-2-Mid-Corridor-C":1,"Level-2-Mid-Corridor-E":1},
  "Level-2-Mid-Corridor-E":{"Level-2-Mid-Corridor-D":1,"Level-2-Right-Corridor-A":1},
  "R3-209":{"Level-2-Right-Corridor-G":1},
  "R3-208":{"Level-2-Right-Corridor-H":2},
  "R3-207":{"Level-2-Right-Corridor-H":2},
  "R3-206":{"Level-2-Right-Corridor-H":1},
  "R3-205":{"Level-2-Right-Corridor-D":1},
  "R3-204-1":{"Level-2-Right-Corridor-E":1},
  "R3-204":{"Level-2-Right-Corridor-F":1.5},
  "R3-203":{"Level-2-Right-Corridor-F":2},
  "R3-202":{"Level-2-Right-Corridor-F":1.5},
  "R3-201":{"Level-2-Right-Corridor-F":1},
  "Level-2-Right-Male-WC":{"Level-2-Right-Corridor-E":1},
  "Level-2-Right-Female-WC":{"Level-2-Right-Corridor-E":1},
  "Level-2-Right-Corridor-A":{"Level-2-Right-Corridor-B":1,"Level-2-Mid-Corridor-E":1,"Right-Stairs-2-1":1},
  "Level-2-Right-Corridor-B":{"Level-2-Right-Corridor-A":1,"Level-2-Right-Corridor-C":1},
  "Level-2-Right-Corridor-C":{"Level-2-Right-Corridor-B":1,"Level-2-Right-Corridor-G":3,"Level-2-Right-Corridor-D":1},
  "Level-2-Right-Corridor-D":{"Level-2-Right-Corridor-C":1,"Level-2-Right-Corridor-E":1},
  "Level-2-Right-Corridor-E":{"Level-2-Right-Corridor-D":1,"Level-2-Right-Corridor-F":1.5},
  "Level-2-Right-Corridor-F":{"Level-2-Right-Corridor-E":1},
  "Level-2-Right-Corridor-G":{"Level-2-Right-Corridor-C":3,"Level-2-Right-Corridor-H":1},
  "Level-2-Right-Corridor-H":{"Level-2-Right-Corridor-G":1},
  "EscapeSling": {finish: 1},
  finish: {}
  };
