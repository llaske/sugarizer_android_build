define((function(t){var e={orders:["north","east","south","west"]};return e.orders.forEach((function(t,r){e[t]=r})),e.getOpposite=function(t){switch(t){case"north":return"south";case"south":return"north";case"east":return"west";case"west":return"east"}},e}));