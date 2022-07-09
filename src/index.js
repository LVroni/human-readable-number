const BelowTwenty = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
};

const Dozens = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
};

function convertToString(number, customEnum) {
    return customEnum[number];
}

module.exports = function toReadable(number) {
    if (number < 20) {
        return convertToString(number, BelowTwenty);
    } else {
        const digits = Array.from(number.toString(), Number);
        if (digits.length === 3) {
            if (digits[1] === 0) {
                return digits[2] === 0
                    ? `${convertToString(digits[0], BelowTwenty)} hundred`
                    : `${convertToString(
                          digits[0],
                          BelowTwenty
                      )} hundred ${convertToString(digits[2], BelowTwenty)}`;
            } else if (digits[1] === 1) {
                return `${convertToString(
                    digits[0],
                    BelowTwenty
                )} hundred ${convertToString(
                    digits[1] * 10 + digits[2],
                    BelowTwenty
                )}`;
            } else {
                return digits[2] === 0
                    ? `${convertToString(
                          digits[0],
                          BelowTwenty
                      )} hundred ${convertToString(digits[1], Dozens)}`
                    : `${convertToString(
                          digits[0],
                          BelowTwenty
                      )} hundred ${convertToString(
                          digits[1],
                          Dozens
                      )} ${convertToString(digits[2], BelowTwenty)}`;
            }
        } else {
            return digits[1] === 0
                ? `${convertToString(digits[0], Dozens)}`
                : `${convertToString(digits[0], Dozens)} ${convertToString(
                      digits[1],
                      BelowTwenty
                  )}`;
        }
    }
};
