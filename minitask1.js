//part1
const who = {
  i: {
    am: "rama",
  },
};

console.log(who.i.am);

//part2
const hello = {
  world: "Hello World",
};

console.log(hello.world);

//part 3

const obj = {
  str: [
    null,
    [
      null,
      null,
      [
        null,
        null,
        null,
        {
          koda: [
            {
              tech: {
                academy: "Koda Tech Academy",
              },
            },
          ],
        },
      ],
    ],
  ],
};

console.log(obj.str[1][2][3].koda[0].tech["academy"]);

//part4

const my = [
  {
    very: {
      best: [
        {},
        {
          sport: {
            is: "Football",
          },
        },
      ],
    },
  },
];

console.log(my[0].very["best"][1].sport.is);
